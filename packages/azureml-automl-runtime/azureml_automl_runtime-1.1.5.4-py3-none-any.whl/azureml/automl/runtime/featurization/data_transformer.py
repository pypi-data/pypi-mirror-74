# ---------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# ---------------------------------------------------------
"""Preprocessing class that can be added in pipeline for input."""
from typing import cast, Dict, List, Optional, Tuple, Any

import json
import logging
import math
import gc
import os
import uuid


import numpy as np
import pandas as pd
from pandas.core.indexes.base import Index
from pandas.core.series import Series
from sklearn_pandas import DataFrameMapper
from sklearn.pipeline import Pipeline, make_pipeline
from scipy import sparse

from azureml.automl.core.shared import constants, logging_utilities, utilities
from azureml.automl.core.shared.exceptions import (
    AutoMLException, DataException, FitException, TransformException)
from azureml.automl.core.shared.transformer_runtime_exceptions import (
    DataTransformerUnknownTaskException,
    DataTransformerInconsistentRowCountException)
from azureml.automl.runtime.shared import utilities as runtime_utilities, memory_utilities
from azureml.automl.runtime.shared.types import TransformerType, DataSingleColumnInputType
from azureml.automl.runtime.shared.types import FeaturizationSummaryType, DataInputType
from azureml.automl.runtime.shared.pickler import DefaultPickler
from azureml.automl.core.constants import (FeatureType as _FeatureType,
                                           SupportedTransformersInternal as _SupportedTransformersInternal,
                                           _TransformerOperatorMappings, TextNeuralNetworks)

from azureml.automl.core._experiment_observer import ExperimentStatus, ExperimentObserver, NullExperimentObserver
from azureml.automl.core.constants import _OperatorNames
from azureml.automl.runtime.featurization import data_transformer_utils
from azureml.automl.runtime.featurization_info_provider import FeaturizationInfoProvider
from azureml.automl.runtime._engineered_feature_names import _GenerateEngineeredFeatureNames, \
    _Transformer, _FeatureTransformers, _TransformerParamsHelper
from azureml.automl.runtime.column_purpose_detection import StatsAndColumnPurposeType
from azureml.automl.runtime.column_purpose_detection import ColumnPurposeDetector
from azureml.automl.runtime.column_purpose_detection import ColumnPurposeSweeper
from ..stats_computation import PreprocessingStatistics as _PreprocessingStatistics

from ..featurizer.transformer import AutoMLTransformer, CategoricalFeaturizers, DateTimeFeaturesTransformer,\
    GenericFeaturizers, get_ngram_len, TextFeaturizers
from azureml.automl.core.featurization.featurizationconfig import FeaturizationConfig
from .generic_transformer import GenericTransformer
from .text_transformer import TextTransformer
from .transformer_and_mapper import TransformerAndMapper
from ..featurizer.transformer import featurization_utilities


class DataTransformer(AutoMLTransformer, FeaturizationInfoProvider):
    """
    Preprocessing class that can be added in pipeline for input.

    This class does the following:
    1. Numerical inputs treated as it is.
    2. For dates: year, month, day and hour are features
    3. For text, tfidf features
    4. Small number of unique values for a column that is not float become
        categoricals

    :param task: 'classification' or 'regression' depending on what kind of
    ML problem to solve.
    :param is_onnx_compatible: if works in onnx compatible mode.
    """

    DEFAULT_DATA_TRANSFORMER_TIMEOUT_SEC = 3600 * 24  # 24 hours

    def __init__(self,
                 task: Optional[str] = constants.Tasks.CLASSIFICATION,
                 is_onnx_compatible: bool = False,
                 logger: Optional[logging.Logger] = None,
                 observer: Optional[ExperimentObserver] = None,
                 enable_feature_sweeping: bool = False,
                 enable_dnn: bool = False,
                 force_text_dnn: bool = False,
                 feature_sweeping_timeout: int = DEFAULT_DATA_TRANSFORMER_TIMEOUT_SEC,
                 featurization_config: Optional[FeaturizationConfig] = None,
                 is_cross_validation: bool = False,
                 feature_sweeping_config: Dict[str, Any] = {},
                 working_dir: Optional[str] = None) -> None:
        """
        Initialize for data transformer for pre-processing raw user data.

        :param task: 'classification' or 'regression' depending on what kind
        of ML problem to solve.
        :type task: str or azureml.train.automl.constants.Tasks
        :param is_onnx_compatible: If works in onnx compatible mode.
        :param logger: External logger handler.
        :param enable_feature_sweeping: Whether to run feature sweeping or not.
        :param enable_dnn: Flag to enable neural networks for forecasting and natural language processing.
        :param force_text_dnn: Flag to force add dnn's for natural language processing via feature sweeping.
        :param feature_sweeping_timeout: Max time to run feature sweeping.
        :param featurization_config: Configuration used for custom featurization.
        :param is_cross_validation: Whether to do the cross validation.
        :param feature_sweeping_config: Feature sweeping config.
        :param working_dir: the working directory to use for temporary files.
        """
        super().__init__()
        if task not in constants.Tasks.ALL:
            raise DataTransformerUnknownTaskException(
                "Unknown task", has_pii=False, reference_code='data_transformer.DataTransformer.__init__')

        self.pickler = DefaultPickler()
        self.working_directory = working_dir or os.getcwd()
        self._task_type = task or constants.Tasks.CLASSIFICATION
        self._is_onnx_compatible = is_onnx_compatible
        self.mapper = None  # type: Optional[DataFrameMapper]
        self._init_logger(logger)  # External logger if None, then no logs
        # list of TrasformerAndMapper objects
        self.transformer_and_mapper_list = []  # type: List[TransformerAndMapper]
        # Maintain a list of raw feature names
        self._raw_feature_names = []  # type: List[str]
        # Maintain engineered feature name class
        self._engineered_feature_names_class = _GenerateEngineeredFeatureNames()
        # Maintain statistics about the pre-processing stage
        self._pre_processing_stats = _PreprocessingStatistics()
        # Text transformer
        self._text_transformer = None  # type: Optional[TextTransformer]
        # Stats and column purpose
        self.stats_and_column_purposes = None  # type: Optional[List[StatsAndColumnPurposeType]]
        # Generic transformer
        # TODO Need to enable this later
        self._generic_transformer = None  # type: Optional[GenericTransformer]
        self._observer = observer or NullExperimentObserver()  # type: ExperimentObserver
        self._enable_feature_sweeping = enable_feature_sweeping
        self._enable_dnn = enable_dnn
        self._force_text_dnn = force_text_dnn
        self._feature_sweeping_config = feature_sweeping_config
        self._feature_sweeping_timeout = feature_sweeping_timeout
        self._is_cross_validation = is_cross_validation

        self._logger_wrapper("info", "Feature sweeping enabled: {}".format(self._enable_feature_sweeping))
        self._logger_wrapper("info", "Feature sweeping timeout: {}".format(self._feature_sweeping_timeout))

        # Used for injecting test transformers.
        self._test_transforms = []  # type: List[Any]
        self._columns_types_mapping = None  # type: Optional[Dict[str, np.dtype]]
        self._featurization_config = featurization_config
        self._feature_sweeped = False

    @logging_utilities.function_debug_log_wrapped
    def _learn_transformations(self, df: DataInputType,
                               stats_and_column_purposes: List[StatsAndColumnPurposeType],
                               y: DataSingleColumnInputType = None) -> List[TransformerAndMapper]:
        """
        Learn data transformation to be done on the raw data.

        :param df: Dataframe representing text, numerical or categorical input.
        :param stats_and_column_purposes: Statistics and column purposes of the given data.
        :param y: To match fit signature.
        """
        runtime_utilities.check_input(df)
        if isinstance(df, np.ndarray):
            df = pd.DataFrame(df)

        if self._engineered_feature_names_class is None:
            # Create class for engineered feature names
            self._engineered_feature_names_class = _GenerateEngineeredFeatureNames()

        # Column purpose determination and stats computation
        self._observer.report_status(
            ExperimentStatus.DatasetEvaluation, "Gathering dataset statistics.")

        transforms = self._get_transforms(df, stats_and_column_purposes, y)
        if self._is_onnx_compatible:
            self.mapper = DataFrameMapper(transforms, input_df=True, sparse=True)
        else:
            transformer_and_mapper_list = []
            for transformers in transforms:
                transform_and_mapper = TransformerAndMapper(transformers=transformers[1],
                                                            mapper=DataFrameMapper([transformers],
                                                                                   input_df=True, sparse=True))
                transformer_and_mapper_list.append(transform_and_mapper)
            return transformer_and_mapper_list

    def _add_test_transforms(self, transforms: List[Any]) -> None:
        self._test_transforms.extend(transforms)

    def fit_transform_with_logger(self,
                                  X: DataInputType,
                                  y: Optional[DataInputType] = None,
                                  logger: Optional[logging.Logger] = None,
                                  feature_config: List[TransformerAndMapper] = None,
                                  columns_types_mapping: Dict[str, np.dtype] = None,
                                  column_purposes=None,
                                  engineered_feature_names=None,
                                  **fit_params):
        """
        Wrap the fit_transform function for the Data transformer class.

        :param X: Dataframe representing text, numerical or categorical input.
        :type X:numpy.ndarray or pandas.DataFrame
        :param y: To match fit signature.
        :type y: numpy.ndarray or pandas.DataFrame
        :param logger: External logger handler.
        :type logger: logging.Logger
        :param feature_config: List of transformers and mappers
        :type feature_config: List[TransformerAndMapper]
        :param columns_types_mapping: mappings between columns and types
        :param fit_params: Additional parameters for fit_transform().
        :return: Transformed data.
        """
        # Init the logger
        self.logger = logger
        # If feature_config and columns_types_mapping are passed in, assign those
        # Feature sweeping has already happened
        if feature_config and columns_types_mapping and column_purposes:
            self.transformer_and_mapper_list = feature_config
            self._columns_types_mapping = columns_types_mapping
            self.stats_and_column_purposes = column_purposes
            self._engineered_feature_names_class = engineered_feature_names
            self._update_customized_feature_types()
            self._feature_sweeped = True

        # Call the fit and transform function
        return self.fit_transform(X, y, **fit_params)

    def configure_featurizers(self, df: DataInputType, y: DataSingleColumnInputType = None) -> \
            Tuple[List[TransformerAndMapper],
                  Dict[str, np.dtype],
                  List[StatsAndColumnPurposeType],
                  _GenerateEngineeredFeatureNames]:
        """
        Run column type mappings, column purpose detection and feature sweeping.

        :param df: Dataframe representing text, numerical or categorical input.
        :param y: To match fit signature.
        :return: Feature config of transformers and mapping, column type mappings
        """
        mappers = None  # type: List[TransformerAndMapper]
        if isinstance(df, np.ndarray):
            df = pd.DataFrame(df)

        if self._columns_types_mapping is None:
            columns_types_mapping = data_transformer_utils.get_pandas_columns_types_mapping(df)
            self._columns_types_mapping = columns_types_mapping

        # checking two conditions due onnx compatibilty issues.
        if (self._is_onnx_compatible and not self.mapper) or (not self.transformer_and_mapper_list):
            self._logger_wrapper(
                'info', 'Featurizer mapper not found so learn all ' + 'the transforms')
            column_purposes = ColumnPurposeDetector.get_raw_stats_and_column_purposes(
                df)
            self.stats_and_column_purposes = column_purposes
            self._update_customized_feature_types()
            mappers = self._learn_transformations(df, self.stats_and_column_purposes, y)
            self.transformer_and_mapper_list = mappers
        else:
            if self.transformer_and_mapper_list:
                mappers = self.transformer_and_mapper_list
        self._feature_sweeped = True
        return mappers, columns_types_mapping, column_purposes, self._engineered_feature_names_class

    @logging_utilities.function_debug_log_wrapped
    def fit(self, df: DataInputType, y: DataSingleColumnInputType = None) -> "DataTransformer":
        """
        Perform the raw data validation and identify the transformations to apply.

        :param df: Dataframe representing text, numerical or categorical input.
        :param y: To match fit signature.
        :return: DataTransform object.
        :raises: Value Error for non-dataframe and empty dataframes.
        """
        runtime_utilities.check_input(df)
        if isinstance(df, np.ndarray):
            df = pd.DataFrame(df)

        # If feature sweeping hasn't happened yet, run it
        if not self._feature_sweeped and not self.transformer_and_mapper_list:
            feature_config, columns_types_mapping, column_purposes, feature_names = self.configure_featurizers(df, y)
        else:
            feature_config = self.transformer_and_mapper_list
        if self._is_onnx_compatible and self.mapper is not None:
            try:
                self.mapper.fit(df, y)
            except AutoMLException:
                raise
            except Exception as ex:
                fit_exception = FitException.from_exception(
                    ex,
                    msg='Failed while fitting the learned transformations.',
                    target='DataTransformer',
                    has_pii=False,
                    reference_code='data_transformer.DataTransformer.fit')
                raise fit_exception
        else:
            for transformer_mapper in feature_config:
                is_text_dnn = self._get_is_text_dnn(transformer_mapper)
                if is_text_dnn:
                    self._observer.report_status(
                        ExperimentStatus.TextDNNTraining,
                        "Training a deep learning text model, this may take a while.")

                    has_observer = not isinstance(self._observer, NullExperimentObserver)

                    # pt_dnn transformers require an instance of the current run to log progress
                    if self._get_is_BERT(transformer_mapper) and has_observer:
                        pt_dnn = transformer_mapper.transformers.steps[-1][-1].steps[-1][-1]
                        pt_dnn.observer = self._observer

                try:
                    transformer_mapper.mapper.fit(df, y)
                except AutoMLException:
                    raise
                except Exception as ex:
                    if isinstance(ex, ValueError) and \
                            'After pruning, no terms remain. Try a lower min_df or a higher max_df.' in ex.args[0]:
                        # TODO: Below is fix for bug #611949.
                        #  Need to have a complete solution for TfIdf parameter adjustments: Work item #617820
                        self._logger_wrapper('info',
                                             'TfIdf ValueError caused by adjusted min_df or max_df. '
                                             'Retrying fit with default value.')
                        try:
                            from sklearn.feature_extraction.text import TfidfVectorizer
                            for tr in transformer_mapper.mapper.features[0][1]:
                                if isinstance(tr, TfidfVectorizer):
                                    if tr.max_df < 1.0:
                                        tr.max_df = 1.0
                                    if tr.min_df != 1:
                                        tr.min_df = 1
                            transformer_mapper.mapper.fit(df, y)
                        except Exception:
                            fit_exception = FitException.from_exception(
                                ex,
                                msg='Re-running fit using default min_df and max_df failed.',
                                target='DataTransformer',
                                has_pii=False,
                                reference_code='data_transformer.DataTransformer.fit')
                            raise fit_exception from None
                    else:
                        fit_exception = FitException.from_exception(
                            ex,
                            msg='Failed while fitting the learned transformations.',
                            target='DataTransformer',
                            has_pii=False,
                            reference_code='data_transformer.DataTransformer.fit')
                        raise fit_exception

                if is_text_dnn:
                    self._observer.report_status(
                        ExperimentStatus.TextDNNTrainingCompleted, "Completed training a deep learning text model.")

                steps = transformer_mapper.transformers.steps \
                    if isinstance(transformer_mapper.transformers, Pipeline) else transformer_mapper.transformers

                transform_count = len(steps)
                if transform_count == 0:
                    continue
                # Only last transformer gets applied, all other are input to next transformer.
                last_transformer = steps[transform_count - 1]
                last_transformer = last_transformer[1] if isinstance(last_transformer, tuple) and len(
                    last_transformer) > 1 else last_transformer
                memory_estimate = (0 if not issubclass(type(last_transformer), AutoMLTransformer)
                                   else last_transformer.get_memory_footprint(df, y))
                transformer_mapper.memory_footprint_estimate = memory_estimate

        return self

    @logging_utilities.function_debug_log_wrapped
    def transform(self, df):
        """
        Transform the input raw data with the transformations idetified in fit stage.

        :param df: Dataframe representing text, numerical or categorical input.
        :type df: numpy.ndarray or pandas.DataFrame
        :return: Numpy array.
        """
        runtime_utilities.check_input(df)

        if isinstance(df, np.ndarray):
            df = pd.DataFrame(df)

        if self._columns_types_mapping is not None:
            df = self._check_columns_names_and_convert_types(df, self._columns_types_mapping)

        features = []   # type: List[Any]
        try:
            features = self._apply_transforms(df)
        except AutoMLException:
            raise
        except Exception as ex:
            transform_exception = TransformException.from_exception(
                ex,
                msg='Failed while applying the learned transformations.',
                target='DataTransformer',
                reference_code='data_transformer.DataTransformer.transform',
                has_pii=False)

            raise transform_exception

        any_sparse = any(sparse.issparse(fea) for fea in features)

        if self._engineered_feature_names_class is not None:
            if not self._engineered_feature_names_class.are_engineered_feature_names_available():
                # Generate engineered feature names if they are not already generated
                if self._is_onnx_compatible:
                    self._engineered_feature_names_class.parse_raw_feature_names(self.mapper.transformed_names_)
                else:
                    names = []  # type: List[str]
                    for tansformer_mapper in self.transformer_and_mapper_list:
                        names.extend(tansformer_mapper.mapper.transformed_names_)
                    self._engineered_feature_names_class.parse_raw_feature_names(
                        names)

        max_available_memory = memory_utilities.get_all_ram()

        if any_sparse:
            current_available_memory = memory_utilities.get_available_physical_memory()
            self._logger_wrapper('info',
                                 'Total ram: {} bytes, Current Available memory: {} bytes. Low memory threshold: {}'
                                 .format(max_available_memory, current_available_memory,
                                         constants.LOW_MEMORY_THRESHOLD))
            if current_available_memory > constants.LOW_MEMORY_THRESHOLD * max_available_memory:
                return sparse.hstack(features).tocsr()
            # Memory is under pressure, trade of diskIO for a more memory-efficient way than hstack to combine
            # feaure sets
            # Solution:
            # 1. convert each feature set into csr matrix, collecting information for the final result arrays,
            #    then dump csr matrix into pickle file
            # 2. release memory held by feature sets
            # 3. allocation memory for final result arrays
            # 4. load csr matrix back from pickle and update the final result arrays
            # 5. construct final csr matrix from final result arrays without any copying
            try:
                self._logger_wrapper(
                    'debug', '1. convert each feature set into csr matrix, \
                    collecting information for the final result arrays, \
                    then dump csr matrix into pickle file')
                final_size = 0
                column_count = 0
                row_count = -1
                offset_by_row = []  # type: List[int]
                dtypes = []
                pickle_files = []

                tmp_dir = os.path.join(self.working_directory, 'tmp_{}'.format(uuid.uuid4()))
                os.mkdir(tmp_dir)

                for i, fea in enumerate(features):

                    csr = sparse.csr_matrix(fea)
                    # shape info
                    final_size += csr.size
                    column_count += csr.shape[1]

                    if row_count == -1:
                        row_count = csr.shape[0]
                        offset_by_row = np.zeros([row_count], dtype=np.int64)
                    elif not row_count == csr.shape[0]:
                        raise DataTransformerInconsistentRowCountException(
                            "features have inconsistent row count", has_pii=False,
                            reference_code="data_transformer.DataTransformer.transform")

                    # offset for first element in each row
                    for row_index in range(row_count):
                        offset_by_row[row_index] += csr.indptr[row_index]

                    # dtype info
                    dtypes.append(csr.dtype)
                    # pickle info
                    file_name = os.path.join(tmp_dir, 'fea_{}'.format(i))
                    pickle_files.append(file_name)
                    self.pickler.dump(csr, file_name)
                    del csr
                    gc.collect()

                final_shape = (row_count, column_count)
                data_dtype = np.find_common_type(dtypes, [])
                self._logger_wrapper(
                    'debug', '2. release memory held by feature sets')
                del features
                gc.collect()

                self._logger_wrapper(
                    'debug', '3. allocation memory for final result arrays')
                final_data = np.zeros([final_size], dtype=data_dtype)
                final_indices = np.zeros(
                    [final_size], dtype=sparse.sputils.get_index_dtype(maxval=max(final_shape)))
                final_indptr = np.zeros(
                    [row_count + 1], dtype=sparse.sputils.get_index_dtype(maxval=final_size))

                self._logger_wrapper(
                    'debug', "4. load coo matrix back from pickle and update the final result arrays")

                col_offset = 0
                for file_name in pickle_files:
                    csr = self.pickler.load(file_name)
                    # reference for csr spec:
                    # https://en.wikipedia.org/wiki/Sparse_matrix#Compressed_sparse_row_(CSR,_CRS_or_Yale_format)
                    row_offset = 0

                    for i in range(row_count):
                        row_size = csr.indptr[i + 1] - csr.indptr[i]
                        row_offset += row_size
                        final_indptr[i + 1] += row_offset
                        if row_size == 0:
                            continue
                        from_slice = slice(
                            csr.indptr[i], csr.indptr[i] + row_size)
                        to_slice = slice(
                            offset_by_row[i], offset_by_row[i] + row_size)
                        final_data[to_slice] = csr.data[from_slice]
                        final_indices[to_slice] = csr.indices[from_slice] + col_offset
                        offset_by_row[i] += row_size

                    col_offset += csr.shape[1]
                    del csr
                    gc.collect()

                self._logger_wrapper(
                    'debug', '5. construct csr matrix from final result arrays without any copying')
                # the three numpy arrays won't be copied when constructing sparse matrix
                #  https://docs.scipy.org/doc/numpy/reference/generated/numpy.array.html
                csr = sparse.csr_matrix(
                    (final_data, final_indices, final_indptr), shape=final_shape, copy=False)

                self._logger_wrapper('debug', '6. done')
                return csr

            finally:
                for f in pickle_files:
                    try:
                        if os.path.exists(f):
                            os.remove(f)
                    except Exception:
                        self._logger_wrapper(
                            'error', 'Error while removing pickle files in data_transformer.transform.')

                if len(os.listdir(tmp_dir)) == 0:
                    os.rmdir(tmp_dir)
        else:
            return np.hstack(features)

    def _update_customized_feature_types(self):
        if self._featurization_config is None:
            return
        if self.stats_and_column_purposes is not None:
            featurization_utilities.update_customized_feature_types(
                self.stats_and_column_purposes,
                self._featurization_config.column_purposes,
                self._featurization_config.drop_columns
            )
            self._logger_wrapper("info", "Updated column purposes using customized feature type settings.")

    def _get_is_text_dnn(self, transformer_mapper: TransformerAndMapper) -> bool:
        # determine if a transform is a text dnn or not
        is_text_dnn = False
        try:
            cname = transformer_mapper.transformers.steps[-1][-1].steps[-1][-1].__class__.__name__  # type: ignore
            is_text_dnn = cname in TextNeuralNetworks.ALL_CLASS_NAMES
            if is_text_dnn:
                self._is_text_dnn = True
        except Exception:
            pass
        return is_text_dnn

    def _get_is_BERT(self, transformer_mapper: TransformerAndMapper) -> bool:
        # determine if a transform is a BERT text dnn or not
        is_text_dnn = False
        try:
            text_dnn = transformer_mapper.transformers.steps[-1][-1].steps[-1][-1]
            is_text_dnn = text_dnn.__class__.__name__ is TextNeuralNetworks.BERT_CLASS_NAME  # type: ignore
        except Exception:
            pass
        return is_text_dnn

    def _apply_transforms(self, df: pd.DataFrame) -> List[Any]:
        features = []
        if (self._is_onnx_compatible and not self.mapper) and (not self.transformer_and_mapper_list):
            raise TransformException("fit not called", has_pii=False,
                                     reference_code="data_transformer.DataTransformer._apply_transforms")

        if self._is_onnx_compatible:
            assert self.mapper is not None
            transformed_data = self.mapper.transform(df)
            features.append(transformed_data)
        else:
            total_ram = memory_utilities.get_all_ram(self.logger)
            self._logger_wrapper("info", "Starting to apply transforms. Total ram: {} bytes".format(total_ram))
            for transformer_mapper in self.transformer_and_mapper_list:
                current_available_physical_memory = memory_utilities.get_available_physical_memory()
                transform_memory_footprint = transformer_mapper.memory_footprint_estimate
                self._logger_wrapper("info", "Transform memory estimate: {} bytes, Current available memory: {} bytes"
                                     .format(transform_memory_footprint, current_available_physical_memory))
                apply_transform = (transform_memory_footprint < current_available_physical_memory)

                transformer_list = featurization_utilities.get_transform_names(transformer_mapper.transformers)
                transformer_names = ",".join(transformer_list)
                if apply_transform:
                    self._logger_wrapper(
                        "info", "{}: Applying transform.".format(transformer_names))
                    transform_output = transformer_mapper.mapper.transform(df)
                    features.append(transform_output)
                    self._logger_wrapper("info",
                                         "{transformers}: Finished applying transform. Shape {shape}".format(
                                             shape=transform_output.shape,
                                             transformers=transformer_names))
                else:
                    self._logger_wrapper("info", "{}: Transform not applied due to memory constraints.".format(
                        transformer_names))
            self._logger_wrapper("info", "Finished applying transforms")

        return features

    def get_engineered_feature_names(self) -> List[str]:
        """
        Get the engineered feature names.

        Return the list of engineered feature names as string after data transformations on the
        raw data have been finished.

        :return: The list of engineered fearure names as strings
        """
        return self._engineered_feature_names_class._engineered_feature_names

    def _get_json_str_for_engineered_feature_name(self,
                                                  engineered_feature_name: str) -> Optional[str]:
        """
        Return JSON string for engineered feature name.

        :param engineered_feature_name: Engineered feature name for
                                        whom JSON string is required
        :return: JSON string for engineered feature name
        """
        engineered_feature_name_json_obj = self._engineered_feature_names_class \
            .get_json_object_for_engineered_feature_name(engineered_feature_name)

        # If the JSON object is not valid, then return None
        if engineered_feature_name_json_obj is None:
            self._logger_wrapper(
                'info', "Engineered feature name json object is None.")
            return None

        # Convert JSON into string and return
        return json.dumps(engineered_feature_name_json_obj)

    def get_stats_feature_type_summary(
            self,
            raw_column_name_list: Optional[List[str]] = None) -> Optional[List[Dict[str, Any]]]:
        """
        Return column stats and feature type summary.
        :param raw_column_name_list: List of raw column names.
        :return: List of stats and feature type summary for each input raw column.
        """

        if self.stats_and_column_purposes is None:
            return None
        else:
            filtered_stats_and_column_purposes = self.stats_and_column_purposes
            if raw_column_name_list is not None:
                filtered_stats_and_column_purposes = [x for x in self.stats_and_column_purposes if
                                                      x[2] in raw_column_name_list]
            return list(map(
                lambda x: dict(
                    (
                        ("statistic", x[0].__str__()),
                        ("feature type", x[1]),
                        ("column name", x[2])
                    )
                ),
                filtered_stats_and_column_purposes))

    def get_featurization_summary(self, is_user_friendly: bool = True) -> FeaturizationSummaryType:
        """
        Return the featurization summary for all the input features seen by DataTransformer.
        :param is_user_friendly: If True, return user friendly summary, otherwise, return detailed
        featurization summary.
        :return: List of featurization summary for each input feature.
        """
        return self._engineered_feature_names_class.get_raw_features_featurization_summary(is_user_friendly)

    def _get_transforms(self, df: pd.DataFrame,
                        stats_and_column_purpose: List[StatsAndColumnPurposeType],
                        y: DataSingleColumnInputType = None) -> List[TransformerType]:
        """
        Identify the transformations for all the columns in the dataframe.

        :param df: Dataframe representing text, numerical or categorical input.
        :param stats_and_column_purposes: Statistics and column purposes of the given data.
        :param y: To match fit signature.
        :return: Transformations that go into datamapper.
        """
        transforms = []  # type: List[TransformerType]

        all_columns = df.columns
        dtypes = df.dtypes

        column_groups = {}  # type: Dict[str, List[str]]
        for _, column_purpose, column in stats_and_column_purpose:
            column_groups.setdefault(column_purpose, []).append(column)

        self._raw_feature_names, all_new_column_names = data_transformer_utils.generate_new_column_names(all_columns)

        self._logger_wrapper('info', "Start getting transformers.")
        self._observer.report_status(
            ExperimentStatus.FeaturesGeneration, "Generating features for the dataset.")

        # Get default transformers based on column purpose
        for column_purpose in column_groups.keys():
            current_column_transforms = self._get_transforms_per_column_purpose(column_groups[column_purpose],
                                                                                all_columns,
                                                                                dtypes,
                                                                                all_new_column_names,
                                                                                column_purpose,
                                                                                stats_and_column_purpose)

            if current_column_transforms:
                transforms.extend(current_column_transforms)
            else:
                # skip if hashes or ignore case
                self._logger_wrapper(
                    'info', "No transforms available. Either hashes, single value column, or transformer is blocked.")

        # Experiment with different transform pipelines through feature sweeping

        sweeping_added_transformers = []
        with logging_utilities.log_activity(logger=self.logger, activity_name="FeatureSweeping"):
            sweeping_added_transformers = self._perform_feature_sweeping(df, y,
                                                                         stats_and_column_purpose,
                                                                         all_new_column_names)
            transforms.extend(sweeping_added_transformers)

        # TODO: Do not allow column purpose sweep if type if set in featurizer config
        transforms.extend(self._sweep_column_purpose(transforms, all_columns, dtypes,
                                                     stats_and_column_purpose, all_new_column_names, column_groups))

        if not transforms:
            # can happen when we get all hashes
            self._logger_wrapper(
                'warning', "No features could be identified or generated. Please inspect your data.")
            raise DataException(
                "No features could be identified or generated. Please inspect your data.",
                has_pii=False,
                reference_code='data_transformer.DataTransformer._get_transforms')

        # Log the transformations done for raw data into the logs
        self._logger_wrapper(
            'info', self._get_transformations_str(all_columns, transforms))

        # Log stats_computation about raw data
        self._logger_wrapper('info',
                             self._pre_processing_stats.get_raw_data_stats())

        self._logger_wrapper('info', "End getting transformers.")

        # Used for testing only
        if self._test_transforms is not None:
            transforms.extend(self._test_transforms)

        return transforms

    def _perform_feature_sweeping(self, df: pd.DataFrame, y: DataSingleColumnInputType,
                                  stats_and_column_purposes: List[StatsAndColumnPurposeType],
                                  all_new_column_names: List[str],
                                  feature_sweeper: Any = None) -> \
            List[TransformerType]:
        """
        Perform feature sweeping and return transforms.

        :param df: Input data frame.
        :param y: Input labels.
        :param stats_and_column_purposes: Stats and column purposes.
        :return: Transformers identified by the sweeping logic.
        """
        transforms = []  # type: List[TransformerType]

        try:
            if self._enable_feature_sweeping:
                self._logger_wrapper("info", "Performing feature sweeping")
                from azureml.automl.runtime.sweeping.meta_sweeper import MetaSweeper

                if feature_sweeper is None:
                    feature_sweeper = MetaSweeper(task=self._task_type,
                                                  timeout_sec=self._feature_sweeping_timeout,
                                                  is_cross_validation=self._is_cross_validation,
                                                  featurization_config=self._featurization_config,
                                                  logger=self.logger,
                                                  enable_dnn=self._enable_dnn,
                                                  force_text_dnn=self._force_text_dnn,
                                                  feature_sweeping_config=self._feature_sweeping_config)

                sweeped_transforms = feature_sweeper.sweep(
                    self.working_directory,
                    df, y, stats_and_column_purposes)

                if sweeped_transforms is not None and len(sweeped_transforms) > 0:
                    self._logger_wrapper('info', 'Sweeping added the following transforms: '
                                                 '{sweeped_transforms}'.format(
                                                     sweeped_transforms=','.join(map(self._pipeline_name_,
                                                                                     sweeped_transforms))))

                    cols_list = []  # type: List[str]
                    for cols, tfs in sweeped_transforms:
                        if not isinstance(cols, list):
                            stats_and_column_purpose = next((x for x in stats_and_column_purposes if x[2] == cols))
                            column_purpose = stats_and_column_purpose[1]
                            index = stats_and_column_purposes.index(stats_and_column_purpose)
                            new_column_name = all_new_column_names[index]
                            cols_list = [str(new_column_name)]
                        else:
                            for col in cols:
                                stats_and_column_purpose = next((x for x in stats_and_column_purposes if x[2] == col))
                                # Assumption here is that all the columns in the list will be of one type
                                column_purpose = stats_and_column_purpose[1]
                                index = stats_and_column_purposes.index(stats_and_column_purpose)
                                new_column_name = all_new_column_names[index]
                                cols_list.append(new_column_name)

                        column_name_alias = self._engineered_feature_names_class. \
                            get_alias_name_from_pipeline_object(cols_list, tfs, column_purpose)

                        transforms.append((cols,
                                           make_pipeline(tfs),
                                           {"alias": str(column_name_alias)}))
                else:
                    self._logger_wrapper('info', 'Sweeping did not add any transformers.')

            else:
                self._logger_wrapper("info", "Feature sweeping disabled.")
        except Exception:
            self._logger_wrapper("debug", "Sweeping failed with an error.")
        finally:
            return transforms

    def _sweep_column_purpose(self, transforms: List[TransformerType],
                              columns: Index, dtypes: Series,
                              stats_and_column_purposes: List[StatsAndColumnPurposeType],
                              new_column_names: List[str],
                              column_groups: Dict[str, List[str]]) -> List[TransformerType]:
        """
        Perform column purpose sweeping and return appropriate transforms.

        :param transforms: Current set of transforms.
        :param columns: Current set of columns in the data frame.
        :param dtypes: Current pandas dtypes.
        :param stats_and_column_purposes: Stats and column purposes of various columns.
        :param new_column_names: New columns names for Engineered feature name generation.
        :param column_groups: Dictionary representing list of columns belonging to column purpose
        :return: Alternate transformer identified by the column sweep.
        """

        if not transforms and len(columns) == 1:
            column_index = 0
            if not np.issubdtype(dtypes[column_index], np.number):
                raw_stats, feature_type, column = stats_and_column_purposes[column_index]
                alternate_column_purpose = ColumnPurposeSweeper.safe_convert_on_feature_type(feature_type)
                if alternate_column_purpose:
                    return self._get_alternate_transformer(column_index, columns, dtypes,
                                                           new_column_names, alternate_column_purpose,
                                                           stats_and_column_purposes)

        columns_with_transformers = [x[0] for x in transforms if not isinstance(x[0], list)]
        columns_with_transformers_set = set(columns_with_transformers)
        for feature_type in column_groups.keys():
            if feature_type == _FeatureType.Numeric:
                continue
            for column in column_groups[feature_type]:
                # Check if any transforms are available for this column.
                # If not, see if column type sweeping can be made.
                if column not in columns_with_transformers_set:
                    stats_and_column_purpose = next(
                        (x for x in stats_and_column_purposes if x[2] == column))
                    column_index = stats_and_column_purposes.index(stats_and_column_purpose)
                    raw_stats, _, _ = stats_and_column_purposes[column_index]
                    alternate_column_purpose = ColumnPurposeSweeper.safe_convert_on_data_type(feature_type,
                                                                                              raw_stats.column_type)
                    if alternate_column_purpose:
                        return self._get_alternate_transformer(column_index, columns, dtypes,
                                                               new_column_names,
                                                               alternate_column_purpose,
                                                               stats_and_column_purposes)

        return []

    def _get_alternate_transformer(
            self,
            column_index: int,
            columns: Index,
            dtypes: Series,
            new_column_names: List[str],
            alternate_feature_type: str,
            stats_and_column_purposes: List[StatsAndColumnPurposeType]) -> List[TransformerType]:
        """
        Return alternate transformer for given alternate column purpose

        :param column_index: Index of a referred column.
        :param columns: Columns to get transforms for.
        :param dtypes: Current pandas dtypes.
        :param new_column_names: New columns names for Engineered feature name generation.
        :param alternate_feature_types: Alternative feature type detected.
        :param stats_and_column_purposes: Stats and column purposes of various columns.
        :return: Alternate transformer identified by the new feature type.
        """
        raw_stats, original_feature_type, column = stats_and_column_purposes[column_index]

        self._logger_wrapper(
            "info",
            "Column index: {column_index}, current column purpose: {detected_column_purpose}, "
            "Alternate column purpose: {alternate_column_purpose}".format(
                detected_column_purpose=original_feature_type,
                column_index=column_index,
                alternate_column_purpose=alternate_feature_type))
        stats_and_column_purposes[column_index] = raw_stats, alternate_feature_type, column
        return self._get_transforms_per_column_purpose([columns[column_index]],
                                                       columns, dtypes,
                                                       new_column_names,
                                                       alternate_feature_type,
                                                       stats_and_column_purposes)

    def _get_transforms_per_column_purpose(
            self,
            columnspurpose: List[str],
            columns: Index, dtypes: Series,
            new_column_names: List[str],
            detected_column_purpose: str,
            stats_and_column_purposes: List[StatsAndColumnPurposeType]) -> List[TransformerType]:
        """Obtain transformations based on column purpose and feature stats.

        :param: columnspurpose: Columns to get transforms for.
        :param columns: Column names for columns.
        :param dtypes: Current pandas dtypes.
        :param new_column_names: Column names for engineered features.
        :param detected_column_purpose: Column purpose detected.
        :param stats_and_column_purposes: Statistics and column purposes of the given data.

        :return: List of transformations to be done on this column.
        """
        trs = []  # type: List[TransformerType]
        for column in columnspurpose:
            stats_and_column_purpose = next(
                (x for x in stats_and_column_purposes if x[2] == column))
            index = stats_and_column_purposes.index(stats_and_column_purpose)
            raw_stats, _, _ = stats_and_column_purposes[index]
            new_column_name = new_column_names[index]
            if detected_column_purpose == _FeatureType.Numeric:
                tr = self._get_numeric_transforms(column, new_column_name)
                # if there are lot of imputed values, add an imputation marker
                if raw_stats.num_na > 0.01 * raw_stats.total_number_vals:
                    tr.extend(self._get_imputation_marker_transforms(column, new_column_name))
            elif detected_column_purpose == _FeatureType.DateTime:
                tr = self._get_datetime_transforms(column, new_column_name)
            elif detected_column_purpose == _FeatureType.CategoricalHash:
                tr = self._get_categorical_hash_transforms(column, new_column_name, raw_stats.num_unique_vals)
            elif detected_column_purpose == _FeatureType.Categorical:
                tr = self._get_categorical_transforms(column, new_column_name, raw_stats.num_unique_vals)
            elif detected_column_purpose == _FeatureType.Text:
                self._text_transformer = self._text_transformer or TextTransformer(
                    self._task_type, self.logger, self._is_onnx_compatible,
                    featurization_config=self._featurization_config)
                tr = self._text_transformer.get_transforms(column, new_column_name,
                                                           get_ngram_len(raw_stats.lengths),
                                                           self._engineered_feature_names_class,
                                                           self._featurization_config.blocked_transformers
                                                           if self._featurization_config is not None else None)
            elif detected_column_purpose in _FeatureType.DROP_SET:
                tr = self._get_drop_column_transform(column, new_column_name, detected_column_purpose)

            if tr is not None:
                trs.extend(tr)

            column_loc = columns.get_loc(column)

            utilities._log_raw_data_stat(
                raw_stats, self.logger,
                prefix_message="[XColNum:{}]".format(
                    column_loc
                )
            )

            self._logger_wrapper(
                'info',
                "Preprocess transformer for col {}, datatype: {}, detected "
                "datatype {}".format(
                    column_loc,
                    str(dtypes[index]),
                    str(detected_column_purpose)
                )
            )
            # Update pre-processing stats_computation
            self._pre_processing_stats.update_raw_feature_stats(
                detected_column_purpose)

        return trs

    def _get_drop_column_transform(
            self,
            column: str,
            column_name: str,
            column_purpose: str) -> List[TransformerType]:

        tr = []  # type:  List[TransformerType]

        # Add the transformations to be done and get the alias name
        # for the drop transform.
        drop_transformer = _Transformer(
            parent_feature_list=[str(column_name)],
            transformation_fnc=_SupportedTransformersInternal.Drop,
            operator=None,
            feature_type=column_purpose,
            should_output=True)
        # Create an object to convert transformations into JSON object
        feature_transformers = \
            _FeatureTransformers([drop_transformer])

        # Create the JSON object
        json_obj = feature_transformers.encode_transformations_from_list()
        # Persist the JSON object for later use
        self._engineered_feature_names_class.get_raw_feature_alias_name(json_obj)

        return tr

    def _get_categorical_hash_transforms(
            self,
            column: str,
            column_name: str,
            num_unique_categories: int) -> List[TransformerType]:
        """
        Create a list of transforms for categorical hash data.

        :param column: Column name in the data frame.
        :param column_name: Name of the column for engineered feature names
        :param num_unique_categories: Number of unique categories
        :return: Categorical hash transformations to use in a list.
        """
        # Add the transformations to be done and get the alias name
        # for the hashing one hot encode transform.
        tr = []  # type:  List[TransformerType]

        transformer_fncs = [_SupportedTransformersInternal.StringCast,
                            _SupportedTransformersInternal.HashOneHotEncoder]

        # Check whether the transformer functions are in blocked list
        if self._featurization_config is not None:
            transformers_in_blocked_list = featurization_utilities\
                .transformers_in_blocked_list(transformer_fncs, self._featurization_config.blocked_transformers)
            if transformers_in_blocked_list:
                self._logger_wrapper(
                    'info', "Excluding blocked transformer(s): {0}".format(transformers_in_blocked_list))
                return tr

        string_cast = TextFeaturizers.string_cast(logger=self.logger)

        transformer_params = featurization_utilities.get_transformer_params_by_column_names(
            _SupportedTransformersInternal.HashOneHotEncoder, [column], self._featurization_config)

        try:
            # TODO: update HashOneHotVectorizerTransformer to accept number_of_bits instead of num_cols
            if transformer_params.get("number_of_bits"):
                number_of_bits = transformer_params.pop("number_of_bits")
            else:
                number_of_bits = int(math.log(num_unique_categories, 2))
            num_cols = pow(2, number_of_bits)
            hashonehot_vectorizer = CategoricalFeaturizers.hashonehot_vectorizer(
                **{
                    'hashing_seed_val': constants.hashing_seed_value,
                    'num_cols': int(num_cols),
                    'logger': self.logger
                }
            )
            if len(transformer_params) > 0:
                self._logger_wrapper("warning", "Ignoring unsupported parameters")
        except Exception:
            self._logger_wrapper("warning", "Unsupported parameter passed, proceeding with default values")
            self._logger_wrapper("debug", "Creating {t} with customized parameter failed with error."
                                 .format(t=_SupportedTransformersInternal.HashOneHotEncoder))
            hashonehot_vectorizer = CategoricalFeaturizers.hashonehot_vectorizer(
                **{
                    'hashing_seed_val': constants.hashing_seed_value,
                    'num_cols': int(pow(2, int(math.log(num_unique_categories, 2)))),
                    'logger': self.logger
                }
            )

        categorical_hash_string_cast_transformer = _Transformer(
            parent_feature_list=[str(column_name)],
            transformation_fnc=transformer_fncs[0],
            operator=None,
            feature_type=_FeatureType.CategoricalHash,
            should_output=False)
        # This transformation depends on the previous# transformation
        categorical_hash_onehot_encode_transformer = _Transformer(
            parent_feature_list=[1],
            transformation_fnc=transformer_fncs[1],
            operator=None,
            feature_type=None,
            should_output=True,
            transformer_params=_TransformerParamsHelper.to_dict(hashonehot_vectorizer))
        # Create an object to convert transformations into JSON object
        feature_transformers = \
            _FeatureTransformers(
                [categorical_hash_string_cast_transformer,
                 categorical_hash_onehot_encode_transformer])

        # Create the JSON object
        json_obj = feature_transformers.encode_transformations_from_list()
        # Persist the JSON object for later use and obtain an alias name
        alias_column_name = self._engineered_feature_names_class.get_raw_feature_alias_name(
            json_obj)

        # Add the transformations to be done and get the alias name
        # for the raw column.

        tr = [(column, [string_cast, hashonehot_vectorizer], {'alias': str(alias_column_name)})]
        return tr

    def _get_datetime_transforms(
            self,
            column: str,
            column_name: str) -> List[TransformerType]:
        """
        Create a list of transforms for date time data.

        :param column: Column name in the data frame.
        :param column_name: Name of the column for engineered feature names
        :return: Date time transformations to use in a list.
        """
        cat_imputer = CategoricalFeaturizers.cat_imputer(
            **{
                'logger': self.logger,
                **featurization_utilities.get_transformer_params_by_column_names(
                    _SupportedTransformersInternal.CatImputer, [column], self._featurization_config)
            })
        string_cast = TextFeaturizers.string_cast(logger=self.logger)
        datetime_transformer = DateTimeFeaturesTransformer(logger=self.logger)
        # Add the transformations to be done and get the alias name
        # for the date time transform.
        datatime_imputer_transformer = _Transformer(
            parent_feature_list=[str(column_name)],
            transformation_fnc=_SupportedTransformersInternal.CatImputer,
            operator=_OperatorNames.Mode,
            feature_type=_FeatureType.DateTime,
            should_output=True,
            transformer_params=_TransformerParamsHelper.to_dict(cat_imputer))
        # This transformation depends on the previous transformation
        datatime_string_cast_transformer = _Transformer(
            parent_feature_list=[1],
            transformation_fnc=_SupportedTransformersInternal.StringCast,
            operator=None,
            feature_type=None,
            should_output=False)
        # This transformation depends on the previous transformation
        datatime_datetime_transformer = _Transformer(
            parent_feature_list=[2],
            transformation_fnc=_SupportedTransformersInternal.DateTimeTransformer,
            operator=None,
            feature_type=None,
            should_output=False)
        # Create an object to convert transformations into JSON object
        feature_transformers = _FeatureTransformers(
            [datatime_imputer_transformer,
             datatime_string_cast_transformer,
             datatime_datetime_transformer])
        # Create the JSON object
        json_obj = \
            feature_transformers.encode_transformations_from_list()
        # Persist the JSON object for later use and obtain an alias name
        alias_column_name = \
            self._engineered_feature_names_class.get_raw_feature_alias_name(
                json_obj)

        # Add the transformations to be done and get the alias name
        # for the raw column.
        tr = []  # type:  List[TransformerType]
        tr = [(column, [cat_imputer, string_cast, datetime_transformer], {'alias': str(alias_column_name)})]
        return tr

    def _get_categorical_transforms(
            self,
            column: str,
            column_name: str,
            num_unique_categories: int) -> List[TransformerType]:
        """
        Create a list of transforms for categorical data.

        :param column: Column name in the data frame.
        :param column_name: Name of the column for engineered feature names
        :param num_unique_categories: Number of unique categories
        :return: Categorical transformations to use in a list.
        """
        tr = []  # type:  List[TransformerType]

        if num_unique_categories <= 2:

            transformer_fncs = [_SupportedTransformersInternal.CatImputer,
                                _SupportedTransformersInternal.StringCast,
                                _SupportedTransformersInternal.LabelEncoder]

            # Check whether the transformer functions are in blocked list
            if self._featurization_config is not None:
                transformers_in_blocked_list = featurization_utilities \
                    .transformers_in_blocked_list(transformer_fncs, self._featurization_config.blocked_transformers)
                if transformers_in_blocked_list:
                    self._logger_wrapper(
                        'info', "Excluding blocked transformer(s): {0}".format(transformers_in_blocked_list))
                    return tr

            # Add the transformations to be done and get the alias name
            # for the hashing label encode transform.
            cat_two_category_imputer = CategoricalFeaturizers.cat_imputer(
                **{
                    'logger': self.logger,
                    **featurization_utilities.get_transformer_params_by_column_names(
                        _SupportedTransformersInternal.CatImputer, [column], self._featurization_config)
                })
            cat_two_category_string_cast = TextFeaturizers.string_cast(logger=self.logger)
            cat_two_category_labelencoder = CategoricalFeaturizers.labelencoder(
                **{
                    'hashing_seed_val': constants.hashing_seed_value,
                    'logger': self.logger,
                    **featurization_utilities.get_transformer_params_by_column_names(
                        _SupportedTransformersInternal.LabelEncoder, [column], self._featurization_config)
                })
            cat_two_category_imputer_transformer = _Transformer(
                parent_feature_list=[str(column_name)],
                transformation_fnc=transformer_fncs[0],
                operator=_OperatorNames.Mode,
                feature_type=_FeatureType.Categorical,
                should_output=True,
                transformer_params=_TransformerParamsHelper.to_dict(cat_two_category_imputer))
            # This transformation depends on the previous transformation
            cat_two_category_string_cast_transformer = _Transformer(
                parent_feature_list=[1],
                transformation_fnc=transformer_fncs[1],
                operator=None,
                feature_type=None,
                should_output=False)
            # This transformation depends on the previous transformation
            cat_two_category_label_encode_transformer = _Transformer(
                parent_feature_list=[2],
                transformation_fnc=transformer_fncs[2],
                operator=None,
                feature_type=None,
                should_output=True,
                transformer_params=_TransformerParamsHelper.to_dict(cat_two_category_labelencoder))
            # Create an object to convert transformations into JSON object
            feature_transformers = _FeatureTransformers(
                [cat_two_category_imputer_transformer,
                 cat_two_category_string_cast_transformer,
                 cat_two_category_label_encode_transformer])
            # Create the JSON object
            json_obj = \
                feature_transformers.encode_transformations_from_list()
            # Persist the JSON object for later use and obtain an alias name
            alias_column_name = self._engineered_feature_names_class.get_raw_feature_alias_name(
                json_obj)

            # Add the transformations to be done and get the alias name
            # for the raw column.
            tr = [(column, [cat_two_category_imputer, cat_two_category_string_cast,
                            cat_two_category_labelencoder], {'alias': str(alias_column_name)})]
            return tr
        else:

            transformer_fncs = [_SupportedTransformersInternal.StringCast,
                                _SupportedTransformersInternal.CountVectorizer]

            # Check whether the transformer functions are in blocked list
            if self._featurization_config is not None:
                transformers_in_blocked_list = featurization_utilities \
                    .transformers_in_blocked_list(transformer_fncs, self._featurization_config.blocked_transformers)
                if transformers_in_blocked_list:
                    self._logger_wrapper(
                        'info', "Excluding blocked transformer(s): {0}".format(transformers_in_blocked_list))
                    return tr

            # Add the transformations to be done and get the alias name
            # for the hashing one hot encode transform.
            cat_multiple_category_string_cast = TextFeaturizers.string_cast(logger=self.logger)
            count_vect_lowercase = not self._is_onnx_compatible
            cat_multiple_category_count_vectorizer = \
                TextFeaturizers.count_vectorizer(
                    **{
                        'tokenizer': self._wrap_in_lst,
                        'binary': True,
                        'lowercase': count_vect_lowercase,
                        **featurization_utilities.get_transformer_params_by_column_names(
                            _SupportedTransformersInternal.CountVectorizer, [column], self._featurization_config)
                    })
            cat_multiple_category_string_cast_transformer = _Transformer(
                parent_feature_list=[str(column_name)],
                transformation_fnc=transformer_fncs[0],
                operator=None,
                feature_type=_FeatureType.Categorical,
                should_output=False)
            # This transformation depends on the previous transformation
            cat_multiple_category_countvec_transformer = _Transformer(
                parent_feature_list=[1],
                transformation_fnc=transformer_fncs[1],
                operator=_OperatorNames.CharGram,
                feature_type=None,
                should_output=True,
                transformer_params=_TransformerParamsHelper.to_dict(cat_multiple_category_count_vectorizer))
            # Create an object to convert transformations into JSON object
            feature_transformers = _FeatureTransformers([
                cat_multiple_category_string_cast_transformer,
                cat_multiple_category_countvec_transformer])
            # Create the JSON object
            json_obj = feature_transformers.encode_transformations_from_list()
            # Persist the JSON object for later use and obtain an alias name
            alias_column_name = self._engineered_feature_names_class.get_raw_feature_alias_name(
                json_obj)

            # use CountVectorizer for both Hash and CategoricalHash for now
            tr = [(column, [cat_multiple_category_string_cast, cat_multiple_category_count_vectorizer],
                   {'alias': str(alias_column_name)})]
            return tr

    def _get_numeric_transforms(
            self,
            column: str,
            column_name: str) -> List[TransformerType]:
        """
        Create a list of transforms for numerical data.

        :param column: Column name in the data frame.
        :param column_name: Name of the column for engineered feature names
        :return: Numerical transformations to use in a list.
        """
        # Add the transformations to be done and get the alias name
        # for the numerical transform
        transformer_params = featurization_utilities.get_transformer_params_by_column_names(
            _SupportedTransformersInternal.Imputer, [column], self._featurization_config)
        operator = _TransformerOperatorMappings.Imputer.get(
            str(transformer_params.get('strategy'))) if transformer_params else _OperatorNames.Mean
        if not operator:
            self._logger_wrapper("warning", "Given strategy: {0} not supported, proceeding with default value".
                                 format(transformer_params.get("strategy")))
            operator = _OperatorNames.Mean
        try:
            imputer = GenericFeaturizers.imputer(**transformer_params)
        except Exception:
            self._logger_wrapper("warning", "Unsupported parameter passed, proceeding with default values")
            self._logger_wrapper("debug", "Creating {t} with customized parameter failed with error: "
                                 .format(t=_SupportedTransformersInternal.Imputer))
            imputer = GenericFeaturizers.imputer()
        numeric_transformer = _Transformer(
            parent_feature_list=[str(column_name)],
            transformation_fnc=_SupportedTransformersInternal.Imputer,
            operator=operator,
            feature_type=_FeatureType.Numeric,
            should_output=True,
            transformer_params=_TransformerParamsHelper.to_dict(imputer))
        # Create an object to convert transformations into JSON object
        feature_transformers = _FeatureTransformers([numeric_transformer])
        # Create the JSON object
        json_obj = feature_transformers.encode_transformations_from_list()
        # Persist the JSON object for later use and obtain an alias name
        alias_column_name = \
            self._engineered_feature_names_class.get_raw_feature_alias_name(
                json_obj)

        # Add the transformations to be done and get the alias name
        # for the imputation marker transform.
        # floats or ints go as they are, we only fix NaN
        tr = [([column], [imputer], {'alias': str(alias_column_name)})]
        return cast(List[TransformerType], tr)

    def _get_imputation_marker_transforms(self, column, column_name):
        """
        Create a list of transforms for numerical data.

        :param column: Column name in the data frame.
        :param column_name: Name of the column for engineered feature names
        :return: Numerical transformations to use in a list.
        """
        # Add the transformations to be done and get the alias name
        # for the imputation marker transform.
        imputation_marker = GenericFeaturizers.imputation_marker(logger=self.logger)
        imputation_transformer = _Transformer(
            parent_feature_list=[str(column_name)],
            transformation_fnc=_SupportedTransformersInternal.ImputationMarker,
            operator=None,
            feature_type=_FeatureType.Numeric,
            should_output=True)
        # Create an object to convert transformations into JSON object
        feature_transformers = _FeatureTransformers([imputation_transformer])
        # Create the JSON object
        json_obj = feature_transformers.encode_transformations_from_list()
        # Persist the JSON object for later use and obtain an alias name
        alias_column_name = \
            self._engineered_feature_names_class.get_raw_feature_alias_name(
                json_obj)

        # Add the transformations to be done and get the alias name
        # for the imputation marker transform.
        tr = [([column], [imputation_marker], {'alias': str(alias_column_name)})]

        return tr

    def _wrap_in_lst(self, x):
        """
        Wrap an element in list.

        :param x: Element like string or integer.
        """
        return [x]

    def _check_columns_names_and_convert_types(self,
                                               df: pd.DataFrame,
                                               columns_types_mapping: Dict[str, np.dtype]) -> pd.DataFrame:
        curr_columns_types_mapping = data_transformer_utils.get_pandas_columns_types_mapping(df)
        if len(curr_columns_types_mapping) != len(columns_types_mapping):
            msg = "The fitted data has {} columns but the input data has {} columns."
            raise DataException(
                msg.format(len(columns_types_mapping), len(curr_columns_types_mapping)),
                reference_code='data_transformer.DataTransformer._check_columns_names_and_convert_types'
            ).with_generic_msg(
                msg.format('[Masked]', '[Masked]'))
        type_converted_columns = {}  # type: Dict[str, np.dtype]
        for col, col_type in curr_columns_types_mapping.items():
            if col not in columns_types_mapping:
                raise DataException(
                    "Input column not found in the fitted columns.",
                    has_pii=False,
                    reference_code='data_transformer.DataTransformer._check_columns_names_and_convert_types')
            if col_type != columns_types_mapping[col]:
                type_converted_columns[col] = columns_types_mapping[col]
        if len(type_converted_columns) > 0:
            for col, col_type in type_converted_columns.items():
                try:
                    df[col] = df[col].astype(col_type)
                except Exception:
                    raise DataException(
                        "Error converting the input column as column does not match the fitted column type.",
                        has_pii=False,
                        reference_code='data_transformer.DataTransformer._check_columns_names_and_convert_types')
        return df

    def _get_transformations_str(
            self,
            columns: Index,
            transforms: List[TransformerType]) -> str:
        """
        Get the data transformations recorded for raw columns as strings.

        :param df: Input dataframe.
        :type df:numpy.ndarray or pandas.DataFrame or sparse matrix
        :param transforms: List of applied transformations for various raw
        columns as a string.
        :type transforms: List
        """
        transformation_str = 'Transforms:\n'
        list_of_transforms_as_list = []

        num_transforms = len(transforms)
        # Walk all columns in the input dataframe
        for column in columns:
            # Get all the indexes of transformations for the current column
            column_matches_transforms = [i for i in range(
                num_transforms) if transforms[i][0] == column]

            # If no matches for column name is found, then look for list having
            # this column name
            if len(column_matches_transforms) == 0:
                column_matches_transforms = [i for i in range(
                    num_transforms) if transforms[i][0] == [column]]

            # look for list of columns having this column name
            column_matches_transforms = \
                [i for i in range(0, len(transforms))
                 if isinstance(transforms[i][0], list) and column in transforms[i][0]]

            # Walk all the transformations found for the current column and add
            # to a string
            for transform_index in column_matches_transforms:

                transformers_list = transforms[transform_index][1]
                if isinstance(transformers_list, Pipeline):
                    transformers_list = [t[1] for t in transformers_list.steps]

                some_str = 'col {}, transformers: {}'.format(
                    columns.get_loc(column), '\t'.join([tf.__class__.__name__ for tf in transformers_list]))

                list_of_transforms_as_list.append(some_str)

        transformation_str += '\n'.join(list_of_transforms_as_list)

        # Return the string representation of all the transformations
        return transformation_str

    def __getstate__(self):
        """
        Get state picklable objects.

        :return: state
        """
        base_sanitized_state = super(DataTransformer, self).__getstate__()
        state = dict(base_sanitized_state)
        # Remove the unpicklable entries.
        del state['_observer']
        del state['_feature_sweeping_config']
        return state

    def __setstate__(self, state):
        """
        Set state for object reconstruction.

        :param state: pickle state
        """
        state['_observer'] = NullExperimentObserver()
        state['_feature_sweeping_config'] = {}
        working_dir = state.get('working_directory')
        if working_dir is None or not os.path.exists(working_dir):
            state['working_directory'] = os.getcwd()

        new_data_transformer = DataTransformer()
        new_data_transformer.logger = None
        for k, v in new_data_transformer.__dict__.items():
            if k not in state:
                state[k] = v
        super(DataTransformer, self).__setstate__(state)

    @classmethod
    def _pipeline_name_(cls, pipeline: Pipeline) -> str:
        if pipeline is not None:
            if isinstance(pipeline, Pipeline):
                return type(pipeline.steps[-1][1]).__name__
            return type(pipeline).__name__
