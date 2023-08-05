# ---------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# ---------------------------------------------------------
"""Utilities used during AutoML training."""
import warnings
from typing import Any, cast, Callable, Dict, List, Optional, Set, Tuple, Union

import logging
import numpy as np
import pandas as pd
import scipy
from sklearn.base import TransformerMixin
from sklearn.utils import validation as sk_validation

import azureml.dataprep as dprep

from azureml.automl.core.constants import FeatureType as _FeatureType
from azureml.automl.core.automl_base_settings import AutoMLBaseSettings
from azureml.automl.core.config_utilities import _check_validation_config
from azureml.automl.core.constants import FeaturizationConfigMode
from azureml.automl.runtime import dataprep_utilities, frequency_fixer
from azureml.automl.runtime._automl_settings_utilities import rule_based_validation
from azureml.automl.runtime.data_context import TransformedDataContext
from azureml.automl.runtime.streaming_data_context import StreamingTransformedDataContext
from azureml.automl.core.shared import constants
from azureml.automl.core.shared import utilities
from azureml.automl.core.shared.exceptions import (DataException,
                                                   ConfigException,
                                                   FeaturizationOffException,
                                                   DataSamplesSizeException,
                                                   LabelMissingException,
                                                   UnhashableEntryException,
                                                   DataShapeException,
                                                   AllLabelsMissingException)
from azureml.automl.core.shared.forecasting_exception import (DataFrameFrequencyException,
                                                              DropSpecialColumn,
                                                              WrongShapeDataError,
                                                              InvalidTsdfArgument,
                                                              GrainAndTimeOverlapException,
                                                              GrainAbsent,
                                                              DataFrameTimeNotContinuous,
                                                              DataFrameFrequencyChanged,
                                                              DataFrameMissingColumnException,
                                                              DuplicatedIndexException)
from azureml.automl.runtime.shared import utilities as runtime_utilities
from azureml.automl.runtime.shared._cv_splits import _CVSplits
from azureml.automl.runtime.shared.cache_store import CacheStore
from azureml.automl.runtime.shared.datasets import SubsampleCacheStrategy, ClientDatasets, DatasetBase
from azureml.automl.runtime.shared.streaming_dataset import StreamingDataset, DatasetMetadataKeys
from azureml.automl.runtime.shared.time_series_data_frame import TimeSeriesDataFrame
from azureml.automl.runtime.shared.types import DataInputType, DataSingleColumnInputType
from azureml.dataprep.api.dataflow import DataflowValidationError
from .data_transformation import _add_raw_column_names_to_X, _check_mixed_type
from azureml.automl.runtime.featurizer.transformer import TimeSeriesPipelineType, TimeSeriesTransformer
from azureml.automl.core.shared.constants import TimeSeries, TimeSeriesInternal
from azureml.automl.runtime.featurizer.transformer.timeseries import forecasting_heuristic_utils
from azureml.automl.runtime.frequency_fixer import fix_data_set_regularity_may_be
from azureml.automl.runtime.shared import memory_utilities


class SmallDataSetLimit:
    """Constants for the small dataset limit."""

    WARNING_SIZE = 100
    MINIMAL_TRAIN_SIZE = 50
    MINIMAL_VALIDATION_SIZE = int(MINIMAL_TRAIN_SIZE / 10)


class LargeDatasetLimit:
    """Constants for limiting large datasets."""

    MAX_ROWS_TO_SUBSAMPLE = 100000


MASKED = '[Masked]'


def auto_blacklist(input_data, automl_settings):
    """
    Add appropriate files to blacklist automatically.

    :param input_data:
    :param automl_settings: The settings used for this current run.
    :return:
    """
    if automl_settings.auto_blacklist:
        X = input_data['X']
        if scipy.sparse.issparse(X) or X.shape[0] > constants.MAX_SAMPLES_BLACKLIST:
            if automl_settings.blacklist_algos is None:
                automl_settings.blacklist_algos = \
                    constants.MAX_SAMPLES_BLACKLIST_ALGOS
            else:
                for blacklist_algo in constants.MAX_SAMPLES_BLACKLIST_ALGOS:
                    if blacklist_algo not in automl_settings.blacklist_algos:
                        automl_settings.blacklist_algos.append(blacklist_algo)
            automl_settings.blacklist_samples_reached = True


def set_task_parameters(y, automl_settings):
    """
    Set this task's parameters based on some heuristics if they aren't provided.

    TODO: Move this code into AutoML settings or something. Client shouldn't have to think about this stuff.

    :param automl_settings: The settings used for this current run
    :param y: The list of possible output values
    :return:
    """
    if automl_settings.task_type == constants.Tasks.CLASSIFICATION:
        #  Guess number of classes if the user did not explicitly provide it
        if not automl_settings.num_classes or not isinstance(
                automl_settings.num_classes, int):
            if _check_mixed_type(y):
                warnings.warn(
                    "The input data y has mixed data types, to procceed we will convert it to STRING type, "
                    "expect the trained model to predict values in STRING type."
                    "Otherwise please consider cleaning up."
                )
                automl_settings.num_classes = pd.Series(y).apply(str).value_counts(dropna=False).shape[0]
            else:
                automl_settings.num_classes = len(np.unique(y))
        return

    if automl_settings.task_type == constants.Tasks.REGRESSION:
        numpy_unserializable_ints = (np.int8, np.int16, np.int32, np.int64,
                                     np.uint8, np.uint16, np.uint32, np.uint64)

        #  Guess min and max of y if the user did not explicitly provide it
        if not automl_settings.y_min or not isinstance(automl_settings.y_min,
                                                       float):
            automl_settings.y_min = np.min(y)
            if isinstance(automl_settings.y_min, numpy_unserializable_ints):
                automl_settings.y_min = int(automl_settings.y_min)
        if not automl_settings.y_max or not isinstance(automl_settings.y_max,
                                                       float):
            automl_settings.y_max = np.max(y)
            if isinstance(automl_settings.y_max, numpy_unserializable_ints):
                automl_settings.y_max = int(automl_settings.y_max)
        assert automl_settings.y_max != automl_settings.y_min
        return
    raise NotImplementedError()  # PII safe to raise directly


def format_training_data(
        X=None, y=None, sample_weight=None, X_valid=None, y_valid=None, sample_weight_valid=None,
        cv_splits_indices=None, user_script=None,
        training_data=None, validation_data=None, label_column_name=None, weight_column_name=None,
        is_adb_run=False, automl_settings=None, logger=None, verifier=None):
    """
    Create a dictionary with training and validation data from all supported input formats.

    :param X: Training features.
    :type X: pandas.DataFrame or numpy.ndarray or azureml.dataprep.Dataflow
    :param y: Training labels.
    :type y: pandas.DataFrame or numpy.ndarray or azureml.dataprep.Dataflow
    :param sample_weight: Sample weights for training data.
    :type sample_weight: pandas.DataFrame pr numpy.ndarray or azureml.dataprep.Dataflow
    :param X_valid: validation features.
    :type X_valid: pandas.DataFrame or numpy.ndarray or azureml.dataprep.Dataflow
    :param y_valid: validation labels.
    :type y_valid: pandas.DataFrame or numpy.ndarray or azureml.dataprep.Dataflow
    :param sample_weight_valid: validation set sample weights.
    :type sample_weight_valid: pandas.DataFrame or numpy.ndarray or azureml.dataprep.Dataflow
    :param data: Training features and label.
    :type data: pandas.DataFrame
    :param label: Label column in data.
    :type label: str
    :param columns: whitelist of columns in data to use as features.
    :type columns: list(str)
    :param cv_splits_indices:
        Indices where to split training data for cross validation.
        Each row is a separate cross fold and within each crossfold, provide 2 arrays,
        the first with the indices for samples to use for training data and the second
        with the indices to use for validation data. i.e [[t1, v1], [t2, v2], ...]
        where t1 is the training indices for the first cross fold and v1 is the validation
        indices for the first cross fold.
    :type cv_splits_indices: numpy.ndarray
    :param user_script: File path to script containing get_data()
    :param is_adb_run: True if this is being called from an ADB/local experiment
    :param automl_settings: automl settings
    :param logger: logger
    :param verifier: Verifier Manager instance.
    :type verifier: Optional[VerifierManager]
    :return:
    """
    data_dict = None
    x_raw_column_names = None

    if X is None and y is None and training_data is None:
        if data_dict is None:
            data_dict = _extract_user_data(user_script)
        X = data_dict.get('X')
        y = data_dict.get('y')
        sample_weight = data_dict.get('sample_weight')
        X_valid = data_dict.get('X_valid')
        y_valid = data_dict.get('y_valid')
        sample_weight_valid = data_dict.get('sample_weight_valid')
        cv_splits_indices = data_dict.get("cv_splits_indices")
        x_raw_column_names = data_dict.get("x_raw_column_names")
    elif training_data is not None and label_column_name is not None:
        if isinstance(training_data, pd.DataFrame):
            x_raw_column_names = training_data.columns.values
            X, y, sample_weight = _extract_data_from_combined_dataframe(
                training_data, label_column_name, weight_column_name)

            if validation_data is not None:
                X_valid, y_valid, sample_weight_valid = _extract_data_from_combined_dataframe(
                    validation_data, label_column_name, weight_column_name)
        elif isinstance(training_data, dprep.Dataflow):
            X, y, sample_weight = _extract_data_from_combined_dataflow(
                training_data, label_column_name, weight_column_name)

            if validation_data is not None:
                X_valid, y_valid, sample_weight_valid = _extract_data_from_combined_dataflow(
                    validation_data, label_column_name, weight_column_name)
            x_raw_column_names = X.head(1).columns.values

    # Get the raw column names
    if isinstance(X, pd.DataFrame):
        # Cache the raw column names if available
        x_raw_column_names = X.columns.values
    else:
        if is_adb_run:
            # Hack to make sure we get a pandas DF and not a numpy array in ADB
            # The two retrieval functions should be rationalized in future releases
            dataframe_retrieve_func = dataprep_utilities.retrieve_pandas_dataframe
        else:
            dataframe_retrieve_func = dataprep_utilities.retrieve_numpy_array
        X = dataframe_retrieve_func(X)
        if X_valid is not None:
            X_valid = dataframe_retrieve_func(X_valid)

        y = dataprep_utilities.retrieve_numpy_array(y)
        if y_valid is not None:
            y_valid = dataprep_utilities.retrieve_numpy_array(y_valid)

        if sample_weight is not None:
            sample_weight = dataprep_utilities.retrieve_numpy_array(sample_weight)
        if sample_weight_valid is not None:
            sample_weight_valid = dataprep_utilities.retrieve_numpy_array(sample_weight_valid)

        if cv_splits_indices is not None:
            cv_splits_indices = dataprep_utilities.resolve_cv_splits_indices(cv_splits_indices)

        if isinstance(X, pd.DataFrame):
            x_raw_column_names = X.columns.values

    if automl_settings is None or \
            (automl_settings.featurization == FeaturizationConfigMode.Off and not automl_settings.is_timeseries):
        if isinstance(X, pd.DataFrame):
            X = X.values
        if isinstance(X_valid, pd.DataFrame):
            X_valid = X_valid.values
    y = _convert_to_numpy_maybe(y, 'y')
    y_valid = _convert_to_numpy_maybe(y_valid, 'y_valid')
    if isinstance(sample_weight, pd.DataFrame):
        sample_weight = sample_weight.values
    if isinstance(sample_weight_valid, pd.DataFrame):
        sample_weight_valid = sample_weight_valid.values

    if automl_settings is not None:

        # When data were read try to fix the frequency.
        if automl_settings.is_timeseries and X_valid is None:
            _check_dimensions(X, y, None, None, None, None)
            X, y, failed, was_corrected = fix_data_set_regularity_may_be(
                X, y,
                automl_settings.time_column_name,
                automl_settings.grain_column_names)
            if verifier:
                verifier.update_data_verifier_frequency_inference(failed, was_corrected)

        # auto cv needs the input X and y have same rows
        _check_dimensions(
            X=X, y=y, X_valid=X_valid, y_valid=y_valid,
            sample_weight=sample_weight, sample_weight_valid=sample_weight_valid)

        X, y, sample_weight, X_valid, y_valid, sample_weight_valid = rule_based_validation(
            automl_settings=automl_settings,
            X=X,
            y=y,
            sample_weight=sample_weight,
            X_valid=X_valid,
            y_valid=y_valid,
            sample_weight_valid=sample_weight_valid,
            cv_splits_indices=cv_splits_indices,
            logger=logger,
            verifier=verifier
        )

    data_dict = {
        'X': X,
        'y': y,
        'X_valid': X_valid,
        'y_valid': y_valid,
        'cv_splits_indices': cv_splits_indices,
        'x_raw_column_names': x_raw_column_names,
        'sample_weight': sample_weight,
        'sample_weight_valid': sample_weight_valid}
    return data_dict


def _convert_to_numpy_maybe(
        y: Optional[Union[np.ndarray, pd.DataFrame, pd.Series]],
        ds_name: str) -> Optional[np.ndarray]:
    """
    Try to convert y to numpy array.

    If y can not be converted to np.ndarray or has wrong shape the DataException is raised.
    :param y: The data set to be converted.
    :param ds_name: The name of the data set to convert.
    :raises: DataException
    """
    if y is None:
        return y
    if isinstance(y, pd.DataFrame):
        _check_y_shape(y, 'y')
        return y[y.columns[0]].values
    if isinstance(y, pd.Series):
        return y.values
    return y


def _check_y_shape(y: pd.DataFrame, ds_name: str) -> None:
    """
    Check if y data frame has only one column.

    :param y: The y dataframe.
    :param name: The name of a data set.
    :raises: DataException
    """
    if y.shape[1] > 1:
        msg = ("Dimension mismatch for {} data. "
               "Expecting 1 dimensional array, "
               "but received {} dimensional data.")
        raise DataException(msg.format(ds_name, y.shape[1])).with_generic_msg(msg.format(MASKED, MASKED))


def validate_training_data(X: DataInputType,
                           y: DataInputType,
                           X_valid: Optional[DataInputType],
                           y_valid: Optional[DataInputType],
                           sample_weight: Optional[DataInputType],
                           sample_weight_valid: Optional[DataInputType],
                           cv_splits_indices: Optional[np.ndarray],
                           automl_settings: AutoMLBaseSettings,
                           check_sparse: bool = False,
                           logger: Optional[logging.Logger] = None,
                           x_raw_column_names: Optional[np.ndarray] = None) -> None:
    """
    Validate that training data and parameters have been correctly provided.

    :param X:
    :param y:
    :param X_valid:
    :param y_valid:
    :param sample_weight:
    :param sample_weight_valid:
    :param cv_splits_indices:
    :param automl_settings:
    :param check_sparse:
    """
    # if using incremental learning, validate and subsample data inputs. subsampling the input Dataflows
    # to numpy arrays this allows the validation flow (which can handle numpy arrays but not
    # Dataflows directly at the moment) to proceed.
    if automl_settings.enable_streaming:
        X, y, X_valid, y_valid, sample_weight, sample_weight_valid = (
            incremental_learning_validate_and_subsample_inputs(
                X, y, X_valid, y_valid, sample_weight, sample_weight_valid
            ))

    check_x_y(X, y, automl_settings, x_valid=X_valid, y_valid=y_valid,
              check_sparse=check_sparse, logger=logger)

    # Ensure at least one form of validation is specified
    if not ((X_valid is not None) or automl_settings.n_cross_validations or
            (cv_splits_indices is not None) or automl_settings.validation_size):
        raise DataException(
            "No form of validation was provided. Please specify the data "
            "or type of validation you would like to use.", has_pii=False)

    # validate sample weights if not None
    if sample_weight is not None:
        check_sample_weight(X, sample_weight, "X",
                            "sample_weight", automl_settings)

    if sample_weight_valid is not None:
        check_sample_weight(X_valid, sample_weight_valid,
                            "X_valid", "sample_weight_valid", automl_settings)

    _check_dimensions(
        X=X, y=y, X_valid=X_valid, y_valid=y_valid,
        sample_weight=sample_weight, sample_weight_valid=sample_weight_valid)

    _check_validation_config(X_valid=X_valid,
                             y_valid=y_valid,
                             sample_weight=sample_weight,
                             sample_weight_valid=sample_weight_valid,
                             cv_splits_indices=cv_splits_indices,
                             n_cross_validations=automl_settings.n_cross_validations,
                             validation_size=automl_settings.validation_size)

    if automl_settings.n_cross_validations is not None:
        if y.shape[0] < automl_settings.n_cross_validations:
            msg = "Number of training rows ({}) is less than total requested CV splits ({}). " \
                  "Please reduce the number of splits requested."
            raise ConfigException(msg.format(y.shape[0], automl_settings.n_cross_validations))\
                .with_generic_msg(msg.format(MASKED, MASKED))

    if automl_settings.featurization != FeaturizationConfigMode.Off:
        _check_data_can_be_preprocessed(X, X_valid, x_raw_column_names)

    metrics_checks(X, y, automl_settings, X_valid, y_valid)


def incremental_learning_validate_and_subsample_inputs(
    X: DataInputType,
    y: DataInputType,
    X_valid: Optional[DataInputType],
    y_valid: Optional[DataInputType],
    sample_weight: Optional[DataInputType],
    sample_weight_valid: Optional[DataInputType]
) -> Tuple[np.ndarray, np.ndarray, np.ndarray, np.ndarray, np.ndarray, np.ndarray]:
    """
    If using incremental learning, validate and subsample data inputs.
    Subsampling the input Dataflows to numpy arrays this allows the validation flow (which
    can handle numpy arrays but not Dataflows directly at the moment) to proceed.

    :param X:
    :param y:
    :param X_valid:
    :param y_valid:
    :param sample_weight:
    :param sample_weight_valid:
    """

    input_must_be_dataflow_warning = "If using incremental learning, {} needs to be an Azure ML Dataflow"

    # check that all inputs are Dataflows
    if not isinstance(X, dprep.Dataflow):
        raise DataException(input_must_be_dataflow_warning.format('X'), has_pii=False)
    if not isinstance(y, dprep.Dataflow):
        raise DataException(input_must_be_dataflow_warning.format('y'), has_pii=False)
    if X_valid is not None and not isinstance(X_valid, dprep.Dataflow):
        raise DataException(input_must_be_dataflow_warning.format('X_valid'), has_pii=False)
    if y_valid is not None and not isinstance(y_valid, dprep.Dataflow):
        raise DataException(input_must_be_dataflow_warning.format('y_valid'), has_pii=False)
    if sample_weight is not None and not isinstance(sample_weight, dprep.Dataflow):
        raise DataException(input_must_be_dataflow_warning.format('sample_weight'), has_pii=False)
    if sample_weight_valid is not None and not isinstance(sample_weight_valid, dprep.Dataflow):
        raise DataException(input_must_be_dataflow_warning.format('sample_weight_valid'), has_pii=False)

    # validate that y is only a single column
    y_column_count = len(y.head(1).columns)
    if y_column_count != 1:
        msg = 'y must contain only a single column, but {} columns were found'
        raise DataException(msg.format(y_column_count)).with_generic_msg(msg.format(MASKED))

    # validate that column names are unique between X and y
    # (this is required, b/c we append the columns of X and y together to get a single merged Dataflow
    # that nimbus learners require as input. if X and y have shared column names, this merge throws an error)
    X_column_names = X.head(1).columns.tolist()
    y_column_name = y.head(1).columns[0]
    if y_column_name in X_column_names:
        msg = 'The label column name {} was found in X. Please rename this column in X'
        raise DataException(msg.format(y_column_name)).with_generic_msg(msg.format(MASKED))

    # validate that the Datatypes are the same for X and y (for training, validation and sample weight data)
    for train, valid in [(X, X_valid), (y, y_valid), (sample_weight, sample_weight_valid)]:
        _check_datatypes(train, valid)

    # generate subsampled numpy arrays
    X = X.head(LargeDatasetLimit.MAX_ROWS_TO_SUBSAMPLE).values
    y = y.head(LargeDatasetLimit.MAX_ROWS_TO_SUBSAMPLE).iloc[:, 0].values
    if X_valid is not None:
        X_valid = X_valid.head(LargeDatasetLimit.MAX_ROWS_TO_SUBSAMPLE).values
    if y_valid is not None:
        y_valid = y_valid.head(LargeDatasetLimit.MAX_ROWS_TO_SUBSAMPLE).iloc[:, 0].values
    if sample_weight is not None:
        sample_weight = sample_weight.head(LargeDatasetLimit.MAX_ROWS_TO_SUBSAMPLE).iloc[:, 0].values
    if sample_weight_valid is not None:
        sample_weight_valid = sample_weight_valid.head(LargeDatasetLimit.MAX_ROWS_TO_SUBSAMPLE).iloc[:, 0].values

    return X, y, X_valid, y_valid, sample_weight, sample_weight_valid


def _check_datatypes(training_data: dprep.Dataflow, validation_data: dprep.Dataflow) -> None:
    if training_data is not None and validation_data is not None:
        train_dtypes = training_data.take(LargeDatasetLimit.MAX_ROWS_TO_SUBSAMPLE).dtypes.items()
        valid_dtypes = validation_data.take(LargeDatasetLimit.MAX_ROWS_TO_SUBSAMPLE).dtypes.items()

        for (train_col, train_datatype), (valid_col, valid_datatype) in zip(train_dtypes, valid_dtypes):
            if train_datatype != valid_datatype and train_col == valid_col:
                msg = 'Datatype for column {} was detected as {} in the training set, but was found to be {} ' \
                      'in the validation set. ' \
                      'Please ensure that the datatypes between training and validation sets are aligned.'.\
                    format(train_col, train_datatype, valid_datatype)
                raise DataException(msg).with_generic_msg(msg.format(MASKED, MASKED, MASKED))


def validate_training_data_dict(data_dict, automl_settings, check_sparse=False):
    """
    Validate that training data and parameters have been correctly provided.

    :param data_dict:
    :param automl_settings:
    :param check_sparse:
    :return:
    """
    X = data_dict.get('X', None)
    y = data_dict.get('y', None)
    sample_weight = data_dict.get('sample_weight', None)
    X_valid = data_dict.get('X_valid', None)
    y_valid = data_dict.get('y_valid', None)
    sample_weight_valid = data_dict.get('sample_weight_valid', None)
    cv_splits_indices = data_dict.get('cv_splits_indices', None)
    x_raw_column_names = data_dict.get('x_raw_column_names', None)
    validate_training_data(X, y, X_valid, y_valid, sample_weight, sample_weight_valid, cv_splits_indices,
                           automl_settings, check_sparse=check_sparse)
    if automl_settings.is_timeseries:
        validate_timeseries_training_data(automl_settings, X, y, X_valid, y_valid,
                                          sample_weight, sample_weight_valid, cv_splits_indices,
                                          x_raw_column_names)


def metrics_checks(x: DataInputType,
                   y: DataInputType,
                   automl_settings: AutoMLBaseSettings,
                   x_valid: Optional[DataInputType] = None,
                   y_valid: Optional[DataInputType] = None) -> None:
    """
    Validate input data for metrics.

    :param x: input data. dataframe/ array/ sparse matrix
    :param y: input labels. dataframe/series/array
    :param automl_settings: automl settings
    :raise: DataException if data is not suitable for metrics calculations
    :return:
    """
    if y_valid is not None:
        if automl_settings.task_type == constants.Tasks.CLASSIFICATION:
            primary_metric = automl_settings.primary_metric
            if primary_metric == constants.Metric.AUCWeighted:
                in_valid = set(y_valid[~pd.isnull(y_valid)])
                if len(in_valid) == 1:
                    remaining_metrics = utilities.get_primary_metrics(constants.Tasks.CLASSIFICATION).copy()
                    remaining_metrics.remove(primary_metric)
                    msg = ("y_valid is single valued. "
                           "Please make sure that y_valid is well represented with all classes "
                           "for classification task. Or please try one of {} as primary metrics")
                    raise DataException(
                        msg.format(remaining_metrics)).with_generic_msg(msg.format(MASKED))


def check_x_y(x: DataInputType,
              y: DataInputType,
              automl_settings: AutoMLBaseSettings,
              x_valid: Optional[DataInputType] = None,
              y_valid: Optional[DataInputType] = None,
              check_sparse: bool = False,
              logger: Optional[logging.Logger] = None) -> None:
    """
    Validate input data.

    :param x: input data. dataframe/ array/ sparse matrix
    :param y: input labels. dataframe/series/array
    :param automl_settings: automl settings
    :raise: DataException if data does not conform to accepted types and shapes
    :return:
    """

    if logger is not None:
        logger.info('Checking X and y.')

    is_timeseries = automl_settings.is_timeseries

    if x is None:
        raise DataException("X should not be None", has_pii=False)

    if y is None:
        raise DataException("y should not be None", has_pii=False)

    is_featurization_enabled = automl_settings.featurization != FeaturizationConfigMode.Off

    if isinstance(x, pd.DataFrame):
        if len(x.columns) != len(set(x.columns)):
            raise DataException("There are duplicate column names in your raw data", has_pii=False)

    if not (((is_featurization_enabled or is_timeseries) and isinstance(x, pd.DataFrame)) or
            isinstance(x, np.ndarray) or scipy.sparse.issparse(x)):
        raise DataException(
            "x should be dataframe with featurization set or numpy array"
            " or sparse matrix", has_pii=False)

    if (check_sparse and scipy.sparse.issparse(x) and
        (automl_settings.enable_onnx_compatible_models is True or
         automl_settings.enable_onnx_compatible_models == "True")):
        raise DataException(
            "x should not be a sparse matrix when enable_onnx_compatible_models is True."
            "ONNX currently does not support sparse data.", has_pii=False)

    if not isinstance(y, np.ndarray):
        raise DataException("y should be numpy array", has_pii=False)

    if len(y.shape) > 2 or (len(y.shape) == 2 and y.shape[1] != 1):
        raise DataException("y should be a vector Nx1", has_pii=False)

    if y is not None:
        if len(runtime_utilities._get_indices_missing_labels_output_column(y)) == y.shape[0]:
            raise AllLabelsMissingException("y has all missing labels", has_pii=False)

    if y_valid is not None:
        if len(runtime_utilities._get_indices_missing_labels_output_column(y_valid)) == y_valid.shape[0]:
            raise AllLabelsMissingException("y_valid has all missing labels", has_pii=False)

    if automl_settings.task_type == constants.Tasks.REGRESSION:
        if not utilities._check_if_column_data_type_is_numerical(
                runtime_utilities._get_column_data_type_as_str(y)):
            raise DataException(
                "Please make sure y is numerical before fitting for "
                "regression", has_pii=False)

    # If text data is not being preprocessed or featurized, then raise an error
    if not is_featurization_enabled and not is_timeseries:
        without_featurization_error_str = \
            "The training data contains {}, {} or {} data. Please turn on featurization by setting it as 'auto' " \
            "or giving custom featurization settings".format(
                _FeatureType.DateTime.lower(),
                _FeatureType.Categorical.lower(),
                _FeatureType.Text.lower())
        all_columns_excluded_str = "x should contain at least one column with at least two unique values to train."

        # counter to keep track of how many numerical columns are marked as Ignore or AllNan type
        numeric_column_drop_set_counter = 0
        if isinstance(x, pd.DataFrame):
            for column in x.columns:
                if not utilities._check_if_column_data_type_is_numerical(
                        runtime_utilities._get_column_data_type_as_str(x[column].values)):
                    raise DataException(without_featurization_error_str, has_pii=False)
                elif _is_numeric_x_part_of_drop_set(x[column]):
                    numeric_column_drop_set_counter += 1
            if numeric_column_drop_set_counter == len(x.columns):
                raise DataException(all_columns_excluded_str, has_pii=False)
        elif isinstance(x, np.ndarray):
            if len(x.shape) == 1:
                if not utilities._check_if_column_data_type_is_numerical(
                        runtime_utilities._get_column_data_type_as_str(x)):
                    raise FeaturizationOffException(without_featurization_error_str)
                elif _is_numeric_x_part_of_drop_set(pd.Series(x)):
                    raise DataException(all_columns_excluded_str, has_pii=False)
            else:
                for index in range(x.shape[1]):
                    if not utilities._check_if_column_data_type_is_numerical(
                            runtime_utilities._get_column_data_type_as_str(x[:, index])):
                        raise FeaturizationOffException(without_featurization_error_str)
                    elif _is_numeric_x_part_of_drop_set(pd.Series(x[:, index])):
                        numeric_column_drop_set_counter += 1
                if numeric_column_drop_set_counter == x.shape[1]:
                    raise DataException(all_columns_excluded_str, has_pii=False)

    if automl_settings.task_type == constants.Tasks.CLASSIFICATION:
        y_ravel = y.ravel()
        unique_classes = pd.Series(y_ravel).unique().shape[0]
        if unique_classes < 2:
            raise DataException("At least two distinct classes are required for a classification task. "
                                "Please check the target feature y.", has_pii=False)
        elif unique_classes == y_ravel.shape[0]:
            raise DataException("For a classification task, the label cannot be unique for every sample.",
                                has_pii=False)

    # not check x Nan if featurization is enabled.
    check_x_nan = not is_featurization_enabled
    # not check NaN in y data as we will automatically remove these data in the data_transformation.py.
    check_y_nan = False
    # always check x contains inf or not.
    check_x_inf = True
    # check y contains inf data raise errors and only in regression.
    check_y_inf = automl_settings.task_type != constants.Tasks.CLASSIFICATION
    _check_data_nan_inf(
        x, input_data_name="X", check_nan=check_x_nan, check_inf=check_x_inf)
    _check_data_nan_inf(y, input_data_name="y", check_nan=check_y_nan, check_inf=check_y_inf)
    # forecasting task has its own check for minimal data check here for regression and classification.
    if not automl_settings.is_timeseries:
        _check_data_minimal_size(x, x_valid, automl_settings)
    if x_valid is not None:
        _check_data_nan_inf(
            x_valid, input_data_name="X_valid", check_nan=check_x_nan, check_inf=check_x_inf)
    if y_valid is not None:
        _check_data_nan_inf(
            y_valid, input_data_name="y_valid", check_nan=check_y_nan, check_inf=check_y_inf)


def _is_numeric_x_part_of_drop_set(x: pd.Series) -> bool:
    # Numerical column with feature type of Ignore or AllNan does not go through featurization.
    # If dataset contains all numerical with Ignore or AllNan, then we should alert the user.
    non_na_raw_column = x.dropna()
    return not non_na_raw_column.shape[0] or non_na_raw_column.unique().shape[0] == 1


def _check_data_minimal_size(X: DataInputType, X_valid: DataInputType, automl_settings: AutoMLBaseSettings) -> None:
    """Check if the data is larger than minimum size."""

    if X.shape[0] < SmallDataSetLimit.MINIMAL_TRAIN_SIZE:
        msg = "The input data X has {} data points which is less than the minimum requirement size of {}. " \
              "Please add more data to avoid future exceptions."
        raise DataSamplesSizeException(
            msg.format(X.shape[0], SmallDataSetLimit.MINIMAL_TRAIN_SIZE),
            target="X").with_generic_msg(msg.format(MASKED, SmallDataSetLimit.MINIMAL_TRAIN_SIZE))
    if X_valid is not None and X_valid.shape[0] < SmallDataSetLimit.MINIMAL_VALIDATION_SIZE:
        msg = "The input data X_valid has {} data points which is less than the minimum requirement size of {}. "\
              "Please add more data to avoid future exceptions."
        raise DataSamplesSizeException(
            msg.format(X_valid.shape[0], SmallDataSetLimit.MINIMAL_VALIDATION_SIZE),
            target="X_valid").with_generic_msg(msg.format(MASKED, SmallDataSetLimit.MINIMAL_VALIDATION_SIZE))
    if X.shape[0] < SmallDataSetLimit.WARNING_SIZE:
        warnings.warn(
            "The input data X has {} data points which is less than the recommended "
            "minimum data size {}. Please consider adding more data points to ensure better model accuracy.".
            format(X.shape[0], SmallDataSetLimit.WARNING_SIZE)
        )


def _check_data_nan_inf(data: DataInputType,
                        input_data_name: str,
                        check_nan: bool,
                        check_inf: bool = True) -> None:
    """Check if data contains nan or inf. If contains NaN, give out warning. If contains inf, raise exception."""
    if isinstance(data, pd.DataFrame):
        data_type = data.dtypes.dtype
    else:
        data_type = data.dtype
    is_integer_data = data_type.char in np.typecodes['AllInteger']
    n_top_indices = 20
    try:
        # The sklearn validation can be found here. If a dataset failed sklearn validation, it cannot be trained
        # by most of our pipeline.
        # https://github.com/scikit-learn/scikit-learn/blob/0.19.X/sklearn/utils/validation.py
        sk_validation.assert_all_finite(data)
        if check_nan and is_integer_data:
            # if the data is all integer, we will have a nan check beyond what sklearn does.
            input_data = data.data if scipy.sparse.issparse(data) else data
            if any(np.isnan(input_data)):
                raise ValueError
    except ValueError:
        # looking for nan and inf for the data. If the data contains other type, it will used in other checks.
        if data_type.char in np.typecodes['AllFloat'] or (check_nan and is_integer_data):
            if check_nan:
                nan_indices = _get_data_indices_by_mask_function(data, np.isnan)
                if nan_indices.shape[0] > 0:
                    print(
                        "WARNING: The following coordinates{} [{}] contains {} NaN(np.NaN) data in {}. "
                        "Please consider dropping these rows.".
                        format(_construct_coord_indices_str(nan_indices, n_top_indices),
                               "" if nan_indices.shape[0] < n_top_indices else "(first detected in each column)",
                               nan_indices.shape[0],
                               input_data_name)
                    )
            if check_inf:
                inf_indices = _get_data_indices_by_mask_function(data, np.isinf)
                if inf_indices.shape[0] > 0:
                    msg = ("The following coordinates{} [{}] contains {} infinity(np.inf) data in {}. "
                           "Please consider dropping these rows.")
                    raise DataException(
                        msg.
                        format(_construct_coord_indices_str(inf_indices, n_top_indices),
                               "" if inf_indices.shape[0] < n_top_indices else "(first detected in each column)",
                               inf_indices.shape[0],
                               input_data_name)
                    ).with_generic_msg(msg.format(MASKED, MASKED, MASKED, MASKED))


def _construct_coord_indices_str(data_indices: np.ndarray, n_top_indices: int = 20) -> str:
    """Contruct a string with top 20 indices."""
    if data_indices.ndim == 1 or data_indices.shape[1] == 1:
        indices = sorted(data_indices)
    else:
        indices = sorted(data_indices, key=lambda x: (x[1], x[0]))
    if len(indices) <= n_top_indices:
        print_indices = data_indices
        return ", ".join([str(idx) for idx in print_indices])
    else:
        if data_indices.ndim == 1:
            print_indices = data_indices[:n_top_indices]
        else:
            col_idx_dict = {}  # type: Dict[int, List[np.ndarray]]
            for idx in indices:
                if idx[1] not in col_idx_dict:
                    col_idx_dict[idx[1]] = [idx]
                else:
                    col_idx_dict[idx[1]].append(idx)
            top_indices = sorted(col_idx_dict.keys(), key=lambda x: len(col_idx_dict[x]))
            if len(top_indices) > n_top_indices:
                print_indices = [col_idx_dict[idx][0] for idx in top_indices[:n_top_indices]]
            else:
                print_indices = [col_idx_dict[idx][0] for idx in top_indices]
        return ", ".join([str(idx) for idx in print_indices]) + "..."


def _get_data_indices_by_mask_function(data: DataInputType,
                                       mask_function: 'Callable[..., Optional[Any]]') -> np.ndarray:
    """Obtain the indices list where the data entry in data has the mask function evaluated as True."""
    if isinstance(data, np.ndarray) or isinstance(data, pd.DataFrame):
        return np.argwhere(mask_function(data))
    elif scipy.sparse.issparse(data):
        coo_data = scipy.sparse.coo_matrix(data)
        return np.array(
            [(coo_data.row[i], coo_data.col[i]) for i in np.argwhere(mask_function(coo_data.data)).ravel()])


def check_sample_weight(x: DataInputType,
                        sample_weight: np.ndarray,
                        x_name: str,
                        sample_weight_name: str,
                        automl_settings: AutoMLBaseSettings) -> None:
    """
    Validate sample_weight.

    :param x:
    :param sample_weight:
    :param x_name:
    :param sample_weight_name:
    :param automl_settings:
    :raise DataException if sample_weight has problems
    :return:
    """
    if not isinstance(sample_weight, np.ndarray):
        raise DataException(sample_weight_name + " should be numpy array").with_generic_msg(
            "sample_weight_name should be numpy array")

    if x.shape[0] != len(sample_weight):
        raise DataException(sample_weight_name +
                            " length should match length of " + x_name).with_generic_msg(
                                "sample_weight_name length should match length of x_name")

    if len(sample_weight.shape) > 1:
        raise DataException(sample_weight_name +
                            " should be a unidimensional vector").with_generic_msg(
                                "sample_weight_name should be a unidimensional vector")

    if automl_settings.primary_metric in \
            constants.Metric.SAMPLE_WEIGHTS_UNSUPPORTED_SET:
        raise DataException("Sample weights is not supported for these primary metrics: {0}"
                            .format(constants.Metric.SAMPLE_WEIGHTS_UNSUPPORTED_SET), has_pii=False)


def validate_timeseries_training_data(automl_settings: AutoMLBaseSettings,
                                      X: DataInputType,
                                      y: DataInputType,
                                      X_valid: Optional[DataInputType] = None,
                                      y_valid: Optional[DataInputType] = None,
                                      sample_weight: Optional[np.ndarray] = None,
                                      sample_weight_valid: Optional[np.ndarray] = None,
                                      cv_splits_indices: Optional[np.ndarray] = None,
                                      x_raw_column_names: Optional[np.ndarray] = None) -> None:
    """
    Quick check of the timeseries input values, no tsdf is required here.

    :param X: Training data.
    :type X: pandas.DataFrame or numpy.ndarray or azureml.dataprep.Dataflow
    :param automl_settings: automl settings
    """
    if automl_settings.grain_column_names is None:
        grain_set = set()  # type: Set[str]
    else:
        grain_set = set(automl_settings.grain_column_names)
    if automl_settings.drop_column_names is not None:
        drop_set = set(automl_settings.drop_column_names) if isinstance(
            automl_settings.drop_column_names, list) else set([automl_settings.drop_column_names])
        if (automl_settings.time_column_name in drop_set):
            raise DropSpecialColumn("Time column cannot be dropped. Please remove it from the drop column list.",
                                    has_pii=False)
            # Check if grain columns are overlapped with drop columns.
        if automl_settings.grain_column_names is not None:
            if drop_set.intersection(grain_set):
                raise DropSpecialColumn("Grain column cannot be dropped. Please remove it from the drop column list.",
                                        has_pii=False)
    if automl_settings.time_column_name in grain_set:
        raise GrainAndTimeOverlapException(
            "Time column name is present in the grain columns. Please remove it from grain list.", has_pii=False)

    if automl_settings.n_cross_validations is None and X_valid is None:
        raise InvalidTsdfArgument(
            "Timeseries only support cross validations and train validation splits.",
            has_pii=False)
    elif cv_splits_indices is not None or \
            (automl_settings.validation_size is not None and automl_settings.validation_size > 0.0):
        if cv_splits_indices is not None:
            error_validation_config = "cv_splits_indices"
        else:
            error_validation_config = "validation_size"
        msg = ("Timeseries only support cross validation without any other combinations. "
               "But SDK found {} is passed in.")
        raise InvalidTsdfArgument(
            "Timeseries only support cross validation without any other combinations. "
            "But SDK found {} is passed in.".format(error_validation_config),
        ).with_generic_msg(msg.format('[Masked]'))
    else:
        lags, window_size, max_horizon = _get_auto_parameters_maybe(automl_settings, X, y)
        min_points = utilities.get_min_points(
            window_size,
            lags,
            max_horizon,
            automl_settings.n_cross_validations)
        if X.shape[0] < min_points:
            # Uncomment when the forecasting exceptions are PII safe
            pii_message = (
                "The data points should have at least {} for a valid training with cv {}, max_horizon {}, lags {} "
                "and rolling window size {}. The current dataset has only {} points. Please consider reducing your "
                "horizon, the number of cross validations, lags or rolling window size."
                .format(
                    min_points, automl_settings.n_cross_validations, max_horizon,
                    lags, window_size, X.shape[0]
                )
            )
            raise WrongShapeDataError(
                exception_message="The data provided is insufficient for training.",
                pii_message=pii_message)
        tsdf = _check_timeseries_input_and_get_tsdf(
            X, y, x_raw_column_names, automl_settings, max_horizon, min_points, is_validation_data=False)
        tsdf_valid = None
        if X_valid is not None:
            tsdf_valid = _check_timeseries_input_and_get_tsdf(
                X_valid,
                y_valid,
                x_raw_column_names,
                automl_settings,
                max_horizon,
                min_points=0,
                is_validation_data=True)
            _validate_timeseries_train_valid_tsdf(tsdf, tsdf_valid, bool(window_size + max(lags)))


def _get_auto_parameters_maybe(automl_settings: AutoMLBaseSettings,
                               X: DataInputType,
                               y: DataInputType) -> Tuple[List[int], int, int]:
    """
    Return the parameters which should b e estimated heuristically.

    Now 09/18/2019 it is lags, window_size and max_horizon.
    :param automl_settings: The settings of the run.
    :param X: The input data frame. If the type of input is not a data frame no heursitics will be estimated.
    :param y: The expected data.
    """
    # quick check of the data, no need of tsdf here.
    window_size = automl_settings.window_size if automl_settings.window_size is not None else 0
    lags = automl_settings.lags[constants.TimeSeriesInternal.DUMMY_TARGET_COLUMN] \
        if automl_settings.lags is not None else [0]  # type: List[Union[str, int]]
    # We need to get the heuristics to estimate the minimal number of points needed for training.
    max_horizon = automl_settings.max_horizon
    if not isinstance(X, pd.DataFrame):
        # No heuristics is possible.
        # This will lead to more sensible error from TimeSeriesTransformer.
        if window_size == TimeSeries.AUTO:
            window_size = TimeSeriesInternal.WINDOW_SIZE_DEFDAULT
        if lags == [TimeSeries.AUTO]:
            lags = [TimeSeriesInternal.TARGET_LAGS_DEFAULT]
        if max_horizon == TimeSeries.AUTO:
            max_horizon = TimeSeriesInternal.MAX_HORIZON_DEFAULT
        return cast(List[int], lags), window_size, max_horizon
    # Estimate heuristics if needed.
    if max_horizon == constants.TimeSeries.AUTO:
        max_horizon = forecasting_heuristic_utils.get_heuristic_max_horizon(
            X,
            automl_settings.time_column_name,
            automl_settings.grain_column_names)
    if window_size == constants.TimeSeries.AUTO or lags == [constants.TimeSeries.AUTO]:
        X[TimeSeriesInternal.DUMMY_TARGET_COLUMN] = y
        heuristics_lags, heuristics_rw = forecasting_heuristic_utils.analyze_pacf_per_grain(
            X,
            automl_settings.time_column_name,
            TimeSeriesInternal.DUMMY_TARGET_COLUMN,
            automl_settings.grain_column_names)
        # Make sure we have removed the y back from the data frame.
        X.drop(TimeSeriesInternal.DUMMY_TARGET_COLUMN, axis=1, inplace=True)
        if window_size == constants.TimeSeries.AUTO:
            window_size = heuristics_rw
        if lags == [constants.TimeSeries.AUTO]:
            lags = [heuristics_lags]
    return cast(List[int], lags), window_size, max_horizon


def _check_tsdf_frequencies(frequencies_grain_names: Dict[pd.DateOffset, List[List[str]]]) -> None:
    # pd.DateOffset can not compare directly. need a start time.
    if len(frequencies_grain_names) == 0:
        return
    date_offsets = [offset for offset in frequencies_grain_names.keys()]
    all_freq_equal = all([offset == date_offsets[0] for offset in date_offsets])
    if not all_freq_equal:
        msg = ("More than one series is in the input data, and their frequencies differ. "
               "Please separate series by frequency and build separate models. "
               "If frequencies were incorrectly inferred, please fill in gaps in series.")
        raise DataFrameFrequencyException(msg, has_pii=False)


def _check_grain_min_points(data_points: int,
                            min_points: int,
                            automl_settings: AutoMLBaseSettings,
                            grain_names: Optional[Union[List[str], str]] = None) -> None:
    if hasattr(
            automl_settings,
            TimeSeries.SHORT_SERIES_HANDLING) and getattr(
            automl_settings,
            TimeSeries.SHORT_SERIES_HANDLING):
        # If we are going to remove short series, do not validate for it.
        # If all series are too short, grain dropper will throw an error.
        return
    if data_points < min_points:

        window_size = automl_settings.window_size if automl_settings.window_size is not None else 0
        lags = automl_settings.lags[constants.TimeSeriesInternal.DUMMY_TARGET_COLUMN] \
            if automl_settings.lags is not None else 0
        if grain_names is None:
            # In fact this code will never be executed:
            # the condition if X.shape[0] < min_points:
            # will happen before and will catch this situation.
            pii_message = (
                "The data provided is insufficient for training: for a valid training with cv {},  max_horizon {}, "
                "lags {} and rolling window size {}. The current dataset has only {} points. Please consider "
                "reducing max_horizon, the number of cross validations, lags or rolling window size.". format(
                    automl_settings.n_cross_validations, automl_settings.max_horizon, lags, window_size, data_points))
            raise WrongShapeDataError(exception_message="The data provided is insufficient for training.",
                                      pii_message=pii_message)
        else:
            if not isinstance(grain_names, list):
                grain_names = [grain_names]
            pii_message = (
                "The data provided is insufficient for training grain: [{}] for a valid training with cv {}, "
                "max_horizon {} lags {} and rolling window size {}. The current grain has only {} points. "
                "Please consider reducing max_horizon, n_cross_validations, or lags, rolling window size or "
                "dropping that particular grain.". format(
                    ",".join(
                        [
                            str(grain) for grain in grain_names]),
                    automl_settings.n_cross_validations,
                    automl_settings.max_horizon,
                    lags,
                    window_size,
                    data_points))
            raise WrongShapeDataError(
                exception_message="The data provided is insufficient for some training grains.",
                pii_message=pii_message)


def _check_timeseries_input_and_get_tsdf(
    X: DataInputType,
    y: DataInputType,
    x_raw_column_names: np.ndarray,
    automl_settings: AutoMLBaseSettings,
    max_horizon: int,
    min_points: int = 0,
    is_validation_data: bool = False
) -> TimeSeriesDataFrame:
    if isinstance(X, pd.DataFrame):
        df = X
    else:
        if x_raw_column_names is not None:
            # check if there is any conflict in the x_raw_column_names
            _check_timeseries_input_column_names(x_raw_column_names)
            # generate dataframe for tsdf.
            df = _add_raw_column_names_to_X(x_raw_column_names, X)
        else:
            # if x_raw_column_name is None, then the origin input data is ndarray.
            raise DataException(
                "Timeseries only support pandas DataFrame as input X. The raw input X is {}.".format(
                    "sparse" if scipy.sparse.issparse(X) else "ndarray"
                )).with_generic_msg("Timeseries only support pandas DataFrame as input X.")
    # We need to estimate the amount of memory, used by the data set and if
    # there is a risk of out of memory we need to raize an exception here.
    try:
        # Make this code safe.
        avail_memory = memory_utilities.get_available_physical_memory()
    except Exception:
        avail_memory = None
    if avail_memory is not None:
        memory_per_df = memory_utilities.get_data_memory_size(df)
        if y is not None:
            memory_per_df += memory_utilities.get_data_memory_size(y)
        # We have found that the amount of memory needed to process the data frame is
        # approximately 10 * data frame size.
        needed_memory = memory_per_df * 10
        if avail_memory < needed_memory:
            msg = ("There is not enough memory on the machine to process this data set. "
                   "Data set size is {}, the amount of available memory is {}. "
                   "To efficiently run AutoML at least {} of memory is required. "
                   "Please install more memory or use bigger virtual machine to generate model on this data set.")
            raise DataException(msg.format(memory_per_df, avail_memory, needed_memory)).with_generic_msg(
                msg.format('[Masked]', '[Masked]', '[Masked]'))

    timeseries_param_dict = utilities._get_ts_params_dict(automl_settings)
    _check_columns_present(df, cast(Dict[str, str], timeseries_param_dict))
    # Convert time column to datetime only if all columns are already present.
    frequency_fixer.convert_to_datetime(df, timeseries_param_dict.get(TimeSeries.TIME_COLUMN_NAME))
    # Check not supported datatypes and warn
    _check_supported_data_type(df)
    if timeseries_param_dict is not None:
        tst = TimeSeriesTransformer(pipeline_type=TimeSeriesPipelineType.FULL,
                                    logger=None, **timeseries_param_dict)
    else:
        raise InvalidTsdfArgument("Invalid forecasting parameters were provided.", has_pii=False)
    _check_time_index_duplication(df, automl_settings.time_column_name, automl_settings.grain_column_names)
    _check_valid_pd_time(df, automl_settings.time_column_name)
    tsdf = tst.construct_tsdf(df, y)
    tsdf.sort_index(inplace=True)
    frequencies_grain_names = {}   # type: Dict[pd.DateOffset, List[List[str]]]
    if automl_settings.grain_column_names is not None:
        # to deal the problem that user has no input grain
        try:
            freq_by_grain = tsdf.infer_freq_by_grain()
            for data_tuple in tsdf.groupby_grain():
                grain_name_str = data_tuple[0]
                err_msg = ("Time series frequency cannot be inferred for grain (series) [{}]. "
                           "Please ensure that each time series' time stamps are regularly spaced. "
                           "Filling with default values such as 0 may be needed for very sparse series."
                           ).format(grain_name_str)
                tsdf_grain = data_tuple[1]
                data_points = tsdf_grain.shape[0]

                if not is_validation_data or tsdf_grain.shape[0] > 1:
                    # if validation data is only one data point, no need to check freq.
                    freq = freq_by_grain[grain_name_str]
                    if freq is None:
                        raise DataException(err_msg).with_generic_msg(
                            "Frequency cannot be inferred for the [masked] grain.")

                    # Check alignment with the inferred frequency
                    _check_timeseries_alignment_single_grain(grain_name_str, tsdf_grain, freq)

                    if freq in frequencies_grain_names:
                        frequencies_grain_names[freq].append(grain_name_str)
                    else:
                        frequencies_grain_names[freq] = [grain_name_str]
                    # check min data points for train and max_horizon for validation
                    data_points = len(
                        pd.date_range(
                            start=tsdf_grain.time_index.min(),
                            end=tsdf_grain.time_index.max(),
                            freq=freq))
                    if not is_validation_data:
                        _check_grain_min_points(
                            data_points, min_points, automl_settings, grain_names=grain_name_str)
                        _check_cv_gap_exist(tsdf_grain,
                                            max_horizon,
                                            automl_settings.n_cross_validations,
                                            grain_name_str, freq)
                if is_validation_data:
                    if data_points < max_horizon:
                        print(("WARNING: Validation set has fewer data points ({}) "
                               "than max_horizon ({}) for one of grains (series). "
                               "We will be unable to estimate error and predictive quantiles at some horizons. "
                               "Please consider increasing the validation data to the length of max horizon.").
                              format(data_points, max_horizon))
                    elif data_points > max_horizon:
                        print(("WARNING: Validation set has more data points {} "
                               "than max_horizon {} for one of grains (series). "
                               "Not all validation data will be used in the training. "
                               "Please consider decreasing the validation data to the length of max horizon.").
                              format(data_points, max_horizon))

        except DataException:
            # If we already have a descriptive Exception, raise it.
            raise
        except Exception:
            # If not, raise generic exception.
            raise DataException("A non-specific error occurred checking frequencies across grains (series).",
                                has_pii=False)

        _check_tsdf_frequencies(frequencies_grain_names)
    # check all the tsdf at the end.
    if not is_validation_data:
        tsdf_freq = tsdf.infer_freq()
        data_points = len(pd.date_range(
            start=tsdf.time_index.min(), end=tsdf.time_index.max(), freq=tsdf_freq))
        _check_grain_min_points(data_points, min_points, automl_settings)
        _check_cv_gap_exist(tsdf, max_horizon, automl_settings.n_cross_validations, freq=tsdf_freq)
    return tsdf


def _check_cv_gap_exist(tsdf: TimeSeriesDataFrame,
                        max_horizon: int,
                        n_cross_validations: Optional[int] = None,
                        grain_name: Optional[str] = None,
                        freq: Optional[pd.DateOffset] = None) -> None:
    """
    Check if one of the cross validation splits lacks the data.

    :param tsdf: One grain of a time series data frame.
    :param max_horizon: The maximal horizon, used for prediction.
    :param n_cross_validations: The number of cross validations.
    :param grain_name: The grain being analyzed if any.
    """
    if n_cross_validations is not None:
        if freq is None:
            freq = tsdf.infer_freq()
        for i in range(n_cross_validations):
            # In this code we are estimating the number of missing values in the cross
            # validation fold.
            # if this amount is bigger then some arbitrary number, currently 25%
            # the validation is considered to be failed.
            expected_dates = pd.date_range(start=tsdf.time_index.max() - (i + max_horizon) * freq,
                                           end=tsdf.time_index.max() - i * freq,
                                           freq=freq)
            # Compare the expected dates with the real dates.
            missing_dates = sorted([str(val) for val in set(expected_dates).difference(set(tsdf.time_index))])
            n_absent_in_cv = len(missing_dates)
            # Currently we have commented out the exceptions, because the check is strict.
            # In future we want to replace the exceptions by guard rails.
            if n_absent_in_cv == max_horizon:
                missing_dates_str = ", ".join(missing_dates)
                if grain_name is None:
                    exception_msg = (
                        "Missing timestamp(s) {} in data. "
                        "One of the validation folds will be empty "
                        "because the data at the end of time series are missing")
                    exception_msg = exception_msg.format(missing_dates_str)
                    # deEx = DataException(
                    #    exception_msg.format(missing_dates_str)).with_generic_msg(
                    #        exception_msg.format(MASKED))
                else:
                    exception_msg = ("Missing timestamp(s) {} in data in grain {}. "
                                     "One of the validation folds will be empty "
                                     "because the data at the end of time series are missing")
                    exception_msg = exception_msg.format(missing_dates_str, grain_name)
                    # deEx = DataException(
                    #    exception_msg.format(missing_dates_str, grain_name)).with_generic_msg(
                    #        exception_msg.format(MASKED, MASKED))
                # raise deEx
                # Warning is commented, because the warning text may be logged.
                # warnings.warn(exception_msg)


def _check_valid_pd_time(df: pd.DataFrame, time_column_name: str) -> None:
    try:
        pd.to_datetime(df[time_column_name])
    except pd.tslib.OutOfBoundsDatetime:
        raise DataException(
            "Date/time is out of our usable range. "
            "Please drop any rows with date/time less than {} or greater than {}."
            .format(pd.Timestamp.min, pd.Timestamp.max), has_pii=False)
    except ValueError:
        raise DataException(
            "One or more rows have an invalid date/time. "
            "Please ensure you can run `pandas.to_datetime(X)`.", has_pii=False)


def _check_time_index_duplication(df: pd.DataFrame,
                                  time_column_name: str,
                                  grain_column_names: Optional[List[str]] = None) -> None:
    group_by_col = [time_column_name]
    if grain_column_names is not None:
        if isinstance(grain_column_names, str):
            grain_column_names = [grain_column_names]
        group_by_col.extend(grain_column_names)
    duplicateRowsDF = df[df.duplicated(subset=group_by_col, keep=False)]
    if duplicateRowsDF.shape[0] > 0:
        if grain_column_names is not None and len(grain_column_names) > 0:
            message = ("Found duplicated rows for {0} and {1} combinations. "
                       "Please make sure the grain setting is correct so that each grain represents "
                       "one time-series, or clean the data to make sure there are no duplicates "
                       "before passing to AutoML.".
                       format([time_column_name], grain_column_names))
            raise DuplicatedIndexException(exception_message="Duplicates in time and grain combinations.",
                                           pii_message=message)
            """
            print(duplicateRowsDF.iloc[:2, :][group_by_col])
            """
        else:
            message = ("Found duplicated rows for timeindex column {0}. "
                       "Please clean the data to make sure there are no duplicates "
                       "before passing to AutoML.".
                       format([time_column_name]))
            raise DuplicatedIndexException(exception_message="Duplicates in time index.",
                                           pii_message=message)
            """
            print(duplicateRowsDF.iloc[:2, :][group_by_col])
            """


def _check_timeseries_alignment_single_grain(grain_level: Any, tsdf: TimeSeriesDataFrame,
                                             freq: pd.DateOffset) -> None:
    """
    Check if single timeseries (single grain) is aligned to the given frequency.

    :param tsdf: The time series dataframe to be tested.
    :param freq: Frequency to check alignment against.
    """
    time_index = tsdf.time_index
    if not isinstance(time_index[0], pd.Timestamp):
        raise DataException('The time column in dataframe has incorrect type. '
                            'Please make sure it contains dates.', has_pii=False)

    onfreq_time = pd.date_range(start=time_index.min(), end=time_index.max(), freq=freq)
    if not set(time_index).issubset(onfreq_time):
        error_message = 'In grain(s) {}, one or more date(s) do not align with the desired frequency {}'

        raise DataFrameFrequencyException(
            exception_message=error_message.format(
                '[Masked]', '[Masked]'
            ),
            pii_message=error_message.format(
                grain_level, freq))


def _validate_timeseries_train_valid_tsdf(tsdf_train: TimeSeriesDataFrame,
                                          tsdf_valid: TimeSeriesDataFrame,
                                          has_lookback_features: bool) -> None:
    train_grain_data_dict = {grain: tsdf for grain, tsdf in tsdf_train.groupby_grain()}
    valid_grain_data_dict = {grain: tsdf for grain, tsdf in tsdf_valid.groupby_grain()}
    train_grain = set([g for g in train_grain_data_dict.keys()])
    valid_grain = set([g for g in valid_grain_data_dict.keys()])
    # check grain is the same for train and valid.
    grain_difference = train_grain.symmetric_difference(valid_grain)
    if len(grain_difference) > 0:
        grain_in_train_not_in_valid = list(filter(lambda x: x in train_grain, grain_difference))
        grain_in_valid_not_in_train = list(filter(lambda x: x in valid_grain, grain_difference))
        error_msg_list = []
        if len(grain_in_train_not_in_valid) > 0:
            error_msg_list.append(
                "Grain {} found in training data but not in validation data.".format(
                    ",".join(["[{}]".format(grain) for grain in grain_in_train_not_in_valid])
                )
            )
        if len(grain_in_valid_not_in_train) > 0:
            error_msg_list.append(
                "Grain {} found in validation data but not in training data.".format(
                    ",".join(["[{}]".format(grain) for grain in grain_in_valid_not_in_train])
                )
            )
        raise GrainAbsent(
            exception_message="Training and validation datasets contain different sets of grains",
            pii_message=" ".join(error_msg_list))
    # check per grain contiguous and frequency.
    for grain, tsdf in train_grain_data_dict.items():
        tsdf_valid = valid_grain_data_dict[grain]
        if has_lookback_features and tsdf.time_index.max() + tsdf.infer_freq() != tsdf_valid.time_index.min():
            error_message = "Training and validation data are not contiguous in grain(s)."
            raise DataFrameTimeNotContinuous(
                error_message, has_pii=False)
        if tsdf_valid.shape[0] > 1:
            if tsdf.infer_freq() != tsdf_valid.infer_freq():
                error_message = "For grain {}, training data and validation data have different frequency."
                raise DataFrameFrequencyChanged(
                    exception_message=error_message.format('[Masked]'),
                    pii_message=error_message.format(grain))


def _check_timeseries_input_column_names(x_raw_column_names: np.ndarray) -> None:
    for col in x_raw_column_names:
        if col in constants.TimeSeriesInternal.RESERVED_COLUMN_NAMES:
            print("Column name {} is in the reserved column names list, please change that column name.".format(col))
            raise DataException(
                "Column name is in the reserved column names list, please change that column name.",
                has_pii=False
            )


def _check_columns_present(df: pd.DataFrame, timeseries_param_dict: Dict[str, str]) -> None:
    """Determine if df has the correct column names for timeseries."""
    msg = ("One or more columns for `{}` were not found. Please check that these columns "
           "are present in your dataframe. You can run `<X>.columns`.")

    def check_a_in_b(a: Union[str, List[str]], b: List[str]) -> List[str]:
        """
        checks a is in b.

        returns any of a not in b.
        """
        if isinstance(a, str):
            a = [a]

        set_a = set(a)
        set_b = set(b)
        return list(set_a - set_b)

    missing_col_names = []          # type: List[str]
    # check time column in df
    col_name = timeseries_param_dict.get(constants.TimeSeries.TIME_COLUMN_NAME)
    if col_name is not None:
        missing_col_names = check_a_in_b(col_name, df.columns)
    # raise if missing
    if len(missing_col_names) != 0:
        raise DataFrameMissingColumnException(
            pii_message=msg.format(constants.TimeSeries.TIME_COLUMN_NAME),
            target=DataFrameMissingColumnException.TIME_COLUMN)

    # check grain column(s) in df
    col_names = timeseries_param_dict.get(constants.TimeSeries.GRAIN_COLUMN_NAMES)
    if col_names is not None:
        missing_col_names = check_a_in_b(col_names, df.columns)
    # raise if missing
    if len(missing_col_names) != 0:
        raise DataFrameMissingColumnException(
            pii_message=msg.format(constants.TimeSeries.GRAIN_COLUMN_NAMES),
            target=DataFrameMissingColumnException.GRAIN_COLUMN)

    # check drop column(s) in df
    missing_drop_cols = []         # type: List[str]
    col_names = timeseries_param_dict.get(constants.TimeSeries.DROP_COLUMN_NAMES)
    if col_names is not None:
        missing_drop_cols += check_a_in_b(col_names, df.columns)

    # warn if missing
    if len(missing_drop_cols) != 0:
        warnings.warn("The columns to drop were not found and will be ignored.")


def _check_supported_data_type(df: pd.DataFrame) -> None:
    supported_datatype = set([np.number, np.dtype(object), pd.Categorical.dtype, np.datetime64])
    unknown_datatype = set(df.infer_objects().dtypes) - supported_datatype
    if(len(unknown_datatype) > 0):
        warnings.warn("Following datatypes: {} are not recognized".
                      format(unknown_datatype))


def _check_dimensions(X: DataInputType,
                      y: DataInputType,
                      X_valid: DataInputType,
                      y_valid: DataInputType,
                      sample_weight: DataInputType,
                      sample_weight_valid: DataInputType) -> None:
    """
    Check dimensions of data inputs.

    :param X: Training Data
    :param y: Labels
    :param X_valid: Validation Data
    :param y_valid: Validation Labels
    :param sample_weight: Training sample weights
    :param sample_weight_valid: Validation sample weights
    :return: None
    """
    dimension_error_message = "Dimension mismatch for {0} data. " \
                              "Expecting {1} dimensional array, " \
                              "but received {2} dimensional data."
    unrecognized_data_type_message = 'Unrecognized type of input for {}: {}'

    feature_dimensions = 2
    label_dimensions = 1

    # if the data is not in these 4 type, we will bypass the test
    x_dim = None
    y_dim = None
    x_valid_dim = None
    y_valid_dim = None
    sample_weight_dim = None
    sample_weight_valid_dim = None
    x_shape = None
    y_shape = None
    x_valid_shape = None
    y_valid_shape = None
    sample_weight_shape = None
    sample_weight_valid_shape = None

    if X is not None:
        if isinstance(X, pd.DataFrame) or isinstance(X, np.ndarray) or scipy.sparse.issparse(X):
            x_shape = X.shape
            x_dim = X.ndim
        elif isinstance(X, dprep.Dataflow):
            # calculating shape on Dataflows can be very expensive, as it calculates the profile of the underlying data
            # we'd probably need a different design to do this check on dataflows
            x_shape = X.shape
            x_dim = x_shape[1]
        else:
            raise DataException(
                unrecognized_data_type_message.format('X', type(X).__name__)).with_generic_msg(
                    unrecognized_data_type_message.format('X', MASKED))

    if X_valid is not None:
        if isinstance(X_valid, pd.DataFrame) or isinstance(X_valid, np.ndarray) or scipy.sparse.issparse(X_valid):
            x_valid_shape = X_valid.shape
            x_valid_dim = X_valid.ndim
        elif isinstance(X_valid, dprep.Dataflow):
            x_valid_shape = X_valid.shape
            x_valid_dim = x_valid_shape[1]
        else:
            raise DataException(
                unrecognized_data_type_message.format(
                    'X_valid', type(X_valid).__name__)).with_generic_msg(
                unrecognized_data_type_message.format(
                    'X_valid', MASKED))

    if y is not None:
        if isinstance(y, pd.DataFrame) or scipy.sparse.issparse(y) or isinstance(y, dprep.Dataflow):
            y_shape = y.shape
            y_dim = y.shape[1]
        elif isinstance(y, np.ndarray):
            y_shape = y.shape
            y_dim = y.ndim
        else:
            raise DataException(unrecognized_data_type_message.format('y', type(y).__name__)).with_generic_msg(
                unrecognized_data_type_message.format('y', MASKED))

    if y_valid is not None:
        if isinstance(y_valid, pd.DataFrame) or scipy.sparse.issparse(y_valid) or isinstance(y_valid, dprep.Dataflow):
            y_valid_shape = y_valid.shape
            y_valid_dim = y_valid.shape[1]
        elif isinstance(y_valid, np.ndarray):
            y_valid_shape = y_valid.shape
            y_valid_dim = y_valid.ndim
        else:
            raise DataException(
                unrecognized_data_type_message.format(
                    'y_valid', type(y_valid).__name__)).with_generic_msg(
                'y_valid', MASKED)

    if sample_weight is not None:
        if isinstance(sample_weight, pd.DataFrame) or \
                scipy.sparse.issparse(sample_weight) or \
                isinstance(sample_weight, dprep.Dataflow):
            sample_weight_shape = sample_weight.shape
            sample_weight_dim = sample_weight.shape[1]
        elif isinstance(sample_weight, np.ndarray):
            sample_weight_shape = sample_weight.shape
            sample_weight_dim = sample_weight.ndim
        else:
            raise DataException(
                unrecognized_data_type_message.format('sample_weight', type(sample_weight).__name__)).with_generic_msg(
                    unrecognized_data_type_message.format('sample_weight', MASKED))

    if sample_weight_valid is not None:
        if isinstance(sample_weight_valid, pd.DataFrame) or \
                scipy.sparse.issparse(sample_weight_valid) or \
                isinstance(sample_weight_valid, dprep.Dataflow):
            sample_weight_valid_shape = sample_weight_valid.shape
            sample_weight_valid_dim = sample_weight_valid.shape[1]
        elif isinstance(sample_weight_valid, np.ndarray):
            sample_weight_valid_shape = sample_weight_valid.shape
            sample_weight_valid_dim = sample_weight_valid.ndim
        else:
            raise DataException(
                unrecognized_data_type_message.
                format('sample_weight_valid', type(sample_weight_valid).__name__)).with_generic_msg(
                    unrecognized_data_type_message.format('sample_weight_valid', MASKED)
            )

    if x_dim is not None and x_dim > feature_dimensions:
        raise DataException(
            dimension_error_message
            .format("X", feature_dimensions, x_dim)).with_generic_msg(
                dimension_error_message.format("X", MASKED, MASKED)
        )
    if y_dim is not None and y_dim != label_dimensions:
        raise DataException(
            dimension_error_message
            .format("y", label_dimensions, y_dim)).with_generic_msg(
                dimension_error_message.format("y", MASKED, MASKED))
    if x_valid_dim is not None and x_valid_dim > feature_dimensions:
        raise DataException(
            dimension_error_message
            .format("X_valid", feature_dimensions, x_valid_dim)).with_generic_msg(
                dimension_error_message.format("X_valid", MASKED, MASKED))
    if y_valid_dim is not None and y_valid_dim != label_dimensions:
        raise DataException(
            dimension_error_message
            .format("y_valid", label_dimensions, y_valid_dim)).with_generic_msg(
            dimension_error_message.format("y_valid", MASKED, MASKED))
    if sample_weight_dim is not None and sample_weight_dim != label_dimensions:
        raise DataException(
            dimension_error_message
            .format("sample_weight", label_dimensions, sample_weight_dim)).with_generic_msg(
                dimension_error_message.format("sample_weight", MASKED, MASKED))
    if sample_weight_valid_dim is not None and sample_weight_valid_dim != label_dimensions:
        raise DataException(
            dimension_error_message.format(
                "sample_weight_valid", label_dimensions, sample_weight_valid_dim)).with_generic_msg(
                    dimension_error_message.format("sample_weight_valid", MASKED, MASKED))

    if x_shape is not None and y_shape is not None and x_shape[0] != y_shape[0]:
        raise DataSamplesSizeException(
            "X and y data do not have the same number of samples. "
            "X has {0} samples and y has {1} samples."
            .format(x_shape[0], y_shape[0])).with_generic_msg("X and y data do not have the same number of samples.")
    if x_valid_shape is not None and y_valid_shape is not None and \
            x_valid_shape[0] != y_valid_shape[0]:
        raise DataSamplesSizeException(
            "X_valid and y_valid data do not have the same number "
            "of samples. X_valid has {0} samples and "
            "y_valid has {1} samples."
            .format(x_valid_shape[0], y_valid_shape[0]))\
            .with_generic_msg("X_valid and y_valid do not have the same number of samples.")
    if sample_weight_shape is not None and y_shape is not None and \
            sample_weight_shape[0] != y_shape[0]:
        raise DataSamplesSizeException(
            "sample_weight and y data do not have the same number "
            "of samples. sample_weight has {0} samples and "
            "y has {1} samples."
            .format(sample_weight_shape[0], y_shape[0]))\
            .with_generic_msg("sample_weight and y do not have the same number of samples.")
    if sample_weight_valid_shape is not None and y_valid_shape is not None and\
            sample_weight_valid_shape[0] != y_valid_shape[0]:
        raise DataSamplesSizeException(
            "sample_weight_valid and y_valid data do not have the same number "
            "of samples. sample_weight_valid has {0} samples and y_valid "
            "has {1} samples.".format(sample_weight_valid_shape[0], y_valid_shape[0]))\
            .with_generic_msg("sample_weight_valid and y_valid do not have the same number of samples.")
    if x_shape is not None and y_shape is not None and x_shape[0] == 0:
        raise DataSamplesSizeException("X and y data do not have any samples.", has_pii=False)
    if x_valid_shape is not None and y_valid_shape is not None and x_valid_shape[0] == 0:
        raise DataSamplesSizeException("X_valid and y_valid data do not have any samples.", has_pii=False)


def _is_sparse_matrix_int_type(sparse_matrix: DataInputType) -> bool:
    """
    Check if a sparse matrix is in integer format.

    :param sparse_matrix:
    :return:
    """
    if sparse_matrix is not None and scipy.sparse.issparse(sparse_matrix):
        numpy_int_types = [np.int32, np.int64, np.int16, np.int8,
                           np.uint32, np.uint64, np.uint16, np.uint8]

        if sparse_matrix.dtype in numpy_int_types:
            return True

    return False


def _upgrade_sparse_matrix_type(sparse_matrix: DataInputType) -> DataInputType:
    """
    Convert sparse matrix in integer format into floating point format.

    This function will create a copy of the sparse matrix in when the conversion happens.
    :param sparse_matrix:
    :return:
    """
    if sparse_matrix is not None and scipy.sparse.issparse(sparse_matrix):
        if sparse_matrix.dtype == np.int32 or sparse_matrix.dtype == np.int16 or \
                sparse_matrix.dtype == np.int8 or sparse_matrix.dtype == np.uint32 or \
                sparse_matrix.dtype == np.uint16 or sparse_matrix.dtype == np.uint8:
            return sparse_matrix.astype(np.float32)
        elif sparse_matrix.dtype == np.int64 or sparse_matrix.dtype == np.uint64:
            return sparse_matrix.astype(np.float64)
        else:
            return sparse_matrix

    return sparse_matrix


def init_client_dataset_from_fit_iteration_params(fit_iteration_parameters_dict: Dict[str, Any],
                                                  automl_settings: AutoMLBaseSettings,
                                                  cache_store: Optional[CacheStore] = None,
                                                  remote: bool = False,
                                                  init_all_stats: bool = False,
                                                  keep_in_memory: bool = False) -> ClientDatasets:
    """
    Get a ClientDatasets object from fit_iteration_parameters

    TODO: This method needs to be deprecated. ClientDatasets should be consolidated to only use transformed data ctx

    :param fit_iteration_parameters_dict: Dictionary that contains input data
    :param automl_settings:  AutoML settings config
    :param cache_store: Underlying cache store to use, will default to local FileStore
    :param remote: remote or local run flag
    :param init_all_stats: Initialize all the stats
    :param keep_in_memory: Whether to flush the data to the cache store or keep it in-memory
    :return: ClientDatasets
    """
    cv_splits = _CVSplits(X=fit_iteration_parameters_dict.get('X'),
                          y=fit_iteration_parameters_dict.get('y'),
                          frac_valid=automl_settings.validation_size,
                          cv_splits_indices=fit_iteration_parameters_dict.get('cv_splits_indices'),
                          is_time_series=automl_settings.is_timeseries,
                          timeseries_param_dict=utilities._get_ts_params_dict(automl_settings))

    dataset = _get_client_dataset(fit_iteration_parameters_dict.get('X'),
                                  fit_iteration_parameters_dict.get('y'),
                                  cache_store=cache_store,
                                  sample_weight=fit_iteration_parameters_dict.get('sample_weight'),
                                  X_valid=fit_iteration_parameters_dict.get('X_valid'),
                                  y_valid=fit_iteration_parameters_dict.get('y_valid'),
                                  sample_weight_valid=fit_iteration_parameters_dict.get('sample_weight_valid'),
                                  cv_splits=cv_splits,
                                  num_classes=automl_settings.num_classes,
                                  task_type=automl_settings.task_type,
                                  y_min=automl_settings.y_min,
                                  y_max=automl_settings.y_max,
                                  init_all_stats=init_all_stats,
                                  remote=remote)

    dataset.x_raw_column_names = fit_iteration_parameters_dict.get('x_raw_column_names')

    if not keep_in_memory:
        dataset.cache_dataset(keep_in_memory)

    return dataset


def init_dataset(
    transformed_data_context: Union[TransformedDataContext, StreamingTransformedDataContext],
    cache_store: CacheStore,
    automl_settings: AutoMLBaseSettings,
    remote: bool = False,
    init_all_stats: bool = False,
    keep_in_memory: bool = False
) -> DatasetBase:
    """
    Initialize the dataset.

    :param transformed_data_context: transformed_data_context contains X,y & other data's.
    :param cache_store: cache store
    :param automl_settings: automl settings
    :param remote: remote or local run flag
    :param init_all_stats: init all stats
    :param keep_in_memory: Whether to flush the data to the cache store or keep it in-memory
    :return: DatasetBase
    """
    if isinstance(transformed_data_context, StreamingTransformedDataContext):
        return init_streaming_dataset(
            transformed_data_context=transformed_data_context,
            automl_settings=automl_settings
        )

    elif isinstance(transformed_data_context, TransformedDataContext):
        return init_client_dataset(
            transformed_data_context=transformed_data_context,
            cache_store=cache_store,
            automl_settings=automl_settings,
            remote=remote,
            init_all_stats=init_all_stats,
            keep_in_memory=keep_in_memory)


def init_client_dataset(transformed_data_context: TransformedDataContext,
                        cache_store: CacheStore,
                        automl_settings: AutoMLBaseSettings,
                        remote: bool = False,
                        init_all_stats: bool = False,
                        keep_in_memory: bool = False) -> ClientDatasets:
    """
    Get the client dataset.

    :param transformed_data_context: transformed_data_context contains X,y & other data's.
    :param cache_store: cache store
    :param automl_settings: automl settings
    :param remote: remote or local run flag
    :param init_all_stats: init all stats
    :param keep_in_memory: Whether to flush the data to the cache store or keep it in-memory
    :return: ClientDatasets
    """

    dataset = _get_client_dataset(transformed_data_context.X,
                                  transformed_data_context.y,
                                  cache_store=cache_store,
                                  sample_weight=transformed_data_context.sample_weight,
                                  X_valid=transformed_data_context.X_valid,
                                  y_valid=transformed_data_context.y_valid,
                                  sample_weight_valid=transformed_data_context.sample_weight_valid,
                                  cv_splits=transformed_data_context.cv_splits,
                                  num_classes=automl_settings.num_classes,
                                  task_type=automl_settings.task_type,
                                  y_min=automl_settings.y_min,
                                  y_max=automl_settings.y_max,
                                  init_all_stats=init_all_stats,
                                  remote=remote,
                                  transformers=transformed_data_context.transformers)
    dataset.timeseries = transformed_data_context.timeseries
    dataset.timeseries_param_dict = transformed_data_context.timeseries_param_dict
    dataset.x_raw_column_names = transformed_data_context.x_raw_column_names
    dataset.raw_data_type = transformed_data_context._get_raw_data_type()
    dataset.raw_data_snapshot_str = transformed_data_context._get_raw_data_snapshot_str()

    if automl_settings.n_cross_validations is None and transformed_data_context.X_valid is None:
        # set the value for num_auto_cv_splits if no other mode of Validation is specified
        n_cv = transformed_data_context._get_num_cv_splits()
        dataset.num_auto_cv_splits = None if n_cv == 0 else n_cv

    if not keep_in_memory:
        dataset.cache_dataset(keep_in_memory)

    return dataset


def _get_client_dataset(X: DataInputType,
                        y: DataSingleColumnInputType,
                        cache_store: Optional[CacheStore] = None,
                        sample_weight: Optional[DataInputType] = None,
                        X_valid: Optional[DataInputType] = None,
                        y_valid: Optional[DataSingleColumnInputType] = None,
                        sample_weight_valid: Optional[DataInputType] = None,
                        cv_splits: Optional[_CVSplits] = None,
                        num_classes: Optional[int] = None,
                        task_type: str = constants.Tasks.CLASSIFICATION,
                        y_min: Optional[float] = None,
                        y_max: Optional[float] = None,
                        init_all_stats: bool = False,
                        remote: bool = True,
                        transformers: Optional[Dict[str, TransformerMixin]] = None) -> ClientDatasets:
    assert_failures = []
    default_dataset_name = 'NoName'

    if cv_splits:
        frac_valid = cv_splits.get_fraction_validation_size()
        cv_splits_indices = cv_splits.get_custom_split_indices()
        num_cv_folds = cv_splits.get_num_k_folds()
    else:
        frac_valid = None
        cv_splits_indices = None
        num_cv_folds = None

    subsample_cache_strategy = SubsampleCacheStrategy.Classic if remote \
        else SubsampleCacheStrategy.Preshuffle

    dataset = ClientDatasets(subsample_cache_strategy=subsample_cache_strategy, cache_store=cache_store)

    if X_valid is not None:
        training_type = _get_training_type(
            constants.TrainingType.TrainAndValidation)

        if not (num_cv_folds == 0 or num_cv_folds is None):
            assert_failures.append(
                'n_cross_validations cannot be specified when X_valid is provided.')

        if not (frac_valid == 0.0 or frac_valid is None):
            assert_failures.append(
                'validation_size cannot be specified when X_valid is provided.')

        if y_valid is None:
            assert_failures.append(
                'y_valid must also be provided when X_valid is provided.')

        if len(assert_failures) > 0:
            raise ConfigException("Bad fit parameters. Please review documentation for fit. " +
                                  ' '.join(assert_failures))
        dataset.parse_simple_train_validate(name=default_dataset_name,
                                            X=X,
                                            y=y,
                                            sample_weight=sample_weight,
                                            X_valid=X_valid,
                                            y_valid=y_valid,
                                            sample_weight_valid=sample_weight_valid,
                                            task=task_type,
                                            y_min=y_min,
                                            y_max=y_max,
                                            init_all_stats=init_all_stats,
                                            transformers=transformers)

    else:
        if (num_cv_folds == 0 or num_cv_folds is None) and cv_splits_indices is None:
            training_type = _get_training_type(
                constants.TrainingType.TrainAndValidation)
        else:
            if cv_splits_indices is not None:
                num_cv_folds = len(cv_splits_indices)
            training_type = _get_training_type(
                constants.TrainingType.MeanCrossValidation, num_cv_folds)

        if len(assert_failures) > 0:
            msg = "Bad fit parameters. Please review documentation for fit."
            raise ConfigException(msg + ' '.join(assert_failures)).with_generic_msg(msg)

        dataset.parse_data(name=default_dataset_name,
                           X=X,
                           y=y,
                           sample_weight=sample_weight,
                           cv_splits=cv_splits,
                           num_classes=num_classes,
                           task=task_type,
                           y_min=y_min,
                           y_max=y_max,
                           init_all_stats=init_all_stats,
                           transformers=transformers)

    dataset.training_type = training_type

    return dataset


def init_streaming_dataset(
    transformed_data_context: StreamingTransformedDataContext,
    automl_settings: AutoMLBaseSettings
) -> StreamingDataset:
    """
    Initialize a streaming dataset (a dataset where where all data may not fit into memory at once).

    :param transformed_data_context: The transformed data context.
    :param automl_settings: AutoML settings
    :return: A StreamingDataset
    """
    if automl_settings.label_column_name is None:
        raise ConfigException('label_column_name property is required for StreamingDataset', has_pii=False)

    featurized_column_names = transformed_data_context.get_featurized_column_names()

    dataset_metadata = {DatasetMetadataKeys.feature_column_names: featurized_column_names,
                        DatasetMetadataKeys.label_column_name: automl_settings.label_column_name,
                        DatasetMetadataKeys.weight_column_name: automl_settings.weight_column_name,
                        DatasetMetadataKeys.raw_data_snapshot: transformed_data_context.raw_data_snapshot}

    featurization_transformer = transformed_data_context.get_featurization_transformer()

    return StreamingDataset(task=automl_settings.task_type,
                            training_data=transformed_data_context.training_data,
                            dataset_metadata=dataset_metadata,
                            validation_data=transformed_data_context.validation_data,
                            y_min=automl_settings.y_min,
                            y_max=automl_settings.y_max,
                            featurization_transformer=featurization_transformer)


def _get_training_type(training_type: str, folds: int = 0) -> str:
    """
    Determine what type of training and validation to do based on user inputs.
    """
    # TODO: make this simpler
    valid_training_types = (constants.TrainingType.TrainAndValidation,
                            constants.TrainingType.MeanCrossValidation)
    if training_type not in valid_training_types:
        raise ConfigException(
            "%s and %s are the only supported training types." % valid_training_types, has_pii=False)
    is_cv = training_type == constants.TrainingType.MeanCrossValidation
    if not ((is_cv and folds) or (not is_cv and not folds)):
        raise ConfigException("Cannot specify number of folds "
                              "if training type is not %s" % constants.TrainingType.MeanCrossValidation, has_pii=False)
    if folds < 0 or folds == 1:
        raise ConfigException(
            "Cross validation folds must be greater than 1, got %d" % folds)\
            .with_generic_msg("Cross validation folds must be greater than 1.")
    return training_type


def _extract_user_data(user_script: Any) -> Dict[str, Optional[Union[np.array, List[str], float, List[int]]]]:
    """
    Extract data from user's module containing get_data().

    This method automatically runs during an automated machine learning experiment.
    Arguments:
        user_script {module} -- Python module containing get_data() function.

    Raises:
        DataException -- Get data script was not defined and X, y inputs were not provided.
        DataException -- Could not execute get_data() from user script.
        DataException -- Could not extract data from user script.

    Returns:
        dict -- Dictionary containing
        X_train, y_train, sample_weight, X_valid, y_valid,
        sample_weight_valid, cv_splits_indices.

    """
    if user_script is None:
        raise DataException(
            "Get data script was not defined and X,"
            " y inputs were not provided.", has_pii=False)
    try:
        output = user_script.get_data()         # type: Union[Dict[str, Any], Tuple[Any, Any, Any, Any]]
    except Exception as ex:
        msg = ("Could not execute get_data() from user script."
               "Exception: {}")
        raise DataException(msg.format(ex)).with_generic_msg(msg.format(MASKED)) from None
    if isinstance(output, dict):
        return _extract_data_from_dict(output)
    elif isinstance(output, tuple):
        return _extract_data_from_tuple(output)
    else:
        raise DataException("The output of get_data() from user script is not a dict or a tuple.", has_pii=False)


def _extract_data_from_dict(output: Dict[str, Any]) -> \
        Dict[str, Optional[Union[np.array, List[str], float, List[int]]]]:
    """
    Extract user data if it is passed as a dictionary.

    Arguments:
        output {dict} -- dictionary containing user data and metadata.

    Raises:
        DataException -- Invalid data or encountered processing issues.

    Returns:
        dict -- Dictionary containing AutoML relevant data.

    """
    X = utilities.get_value_from_dict(output, ['X'], None)
    y = utilities.get_value_from_dict(output, ['y'], None)
    sample_weight = utilities.get_value_from_dict(output, ['sample_weight'], None)
    X_valid = utilities.get_value_from_dict(output, ['X_valid'], None)
    y_valid = utilities.get_value_from_dict(output, ['y_valid'], None)
    sample_weight_valid = utilities.get_value_from_dict(
        output, ['sample_weight_valid'], None)
    X_test = utilities.get_value_from_dict(output, ['X_test'], None)
    y_test = utilities.get_value_from_dict(output, ['y_test'], None)
    data = utilities.get_value_from_dict(output, ['data_train'], None)
    columns = utilities.get_value_from_dict(output, ['columns'], None)
    label = utilities.get_value_from_dict(output, ['label'], None)
    cv_splits_indices = utilities.get_value_from_dict(
        dictionary=output,
        names=["cv_splits_indices"], default_value=None)
    x_raw_column_names = None

    if data is not None:
        if label is None and X is None and y is None:
            raise DataException('Pandas data array received without a label. '
                                'Please add a ''label'' element to the '
                                'get_data() output.', has_pii=False)
        if not isinstance(label, list):
            assert(isinstance(label, str) or isinstance(label, int))
            label = [label]
        y_extracted = data[label].values
        X_extracted = data[data.columns.difference(label)]
        if columns is not None:
            X_extracted = X_extracted[X_extracted.columns.intersection(
                columns)]

        if X is None and y is None:
            X = X_extracted
            y = y_extracted
        else:
            if np.array_equiv(X, X_extracted.values):
                raise DataException(
                    "Different values for X and data were provided. "
                    "Please return either X and y or data and label.", has_pii=False)
            if np.array_equiv(y, y_extracted.values):
                raise DataException(
                    "Different values for y and label were provided. "
                    "Please return either X and y or data and label.", has_pii=False)
    if isinstance(X, pd.DataFrame):
        x_raw_column_names = X.columns.values
        X = X.values
    if isinstance(X_valid, pd.DataFrame):
        X_valid = X_valid.values
    if isinstance(X_test, pd.DataFrame):
        X_test = X_test.values
    if isinstance(y, pd.DataFrame):
        y = y.values
    if isinstance(y_valid, pd.DataFrame):
        y_valid = y_valid.values
    if isinstance(y_test, pd.DataFrame):
        y_test = y_test.values

    if X is None:
        raise DataException(
            "Could not retrieve X train data from get_data() call. "
            "Please ensure you are either returning either "
            "{X_train: <numpy array>, y_train: <numpy array>"
            "or {data: <pandas dataframe>, label: <string>", has_pii=False)
    if y is None:
        raise DataException(
            "Could not retrieve y train data from get_data() call. "
            "Please ensure you are either returning either "
            "{X_train: <numpy array>, y_train: <numpy array>"
            "or {data: <pandas dataframe>, label: <string>", has_pii=False)

    if (X_valid is None) is not (y_valid is None):
        raise DataException(
            'Received only one of X_valid or y_valid.'
            'Either both or neither value should be provided.', has_pii=False)

    return {
        "X": X,
        "y": y,
        "x_raw_column_names": x_raw_column_names,
        "sample_weight": sample_weight,
        "X_valid": X_valid,
        "y_valid": y_valid,
        "sample_weight_valid": sample_weight_valid,
        "X_test": X_test,
        "y_test": y_test,
        "cv_splits_indices": cv_splits_indices,
    }


def _extract_data_from_tuple(
        output: Tuple[Union[pd.DataFrame, np.array], Union[pd.DataFrame, np.array],
                      Union[pd.DataFrame, np.array], Union[pd.DataFrame, np.array]]) \
        -> Dict[str, Optional[Union[np.array, List[str], float, List[int]]]]:
    """
    Extract user data if it is passed as a tuple.

    Arguments:
        output {tuple} -- tuple containing user data.

    Raises:
        DataException -- Could not extract X, y from get_data() in user script. get_data only output {0} values.

    Returns:
        tuple -- tuple containing X_train, y_train, X_test, y_test

    """
    X_valid, y_valid = None, None
    if len(output) < 2:
        msg = ("Could not extract X, y from get_data() in user "
               "script. get_data only output {0} values.")
        raise DataException(msg.format(len(output))).with_generic_msg(msg.format(MASKED)) from None
    x_raw_column_names = None
    X = output[0]
    y = output[1]
    if isinstance(X, pd.DataFrame):
        x_raw_column_names = X.columns.values
        X = X.values
    if isinstance(y, pd.DataFrame):
        y = y.values

    if len(output) >= 4:
        X_valid = output[2]
        y_valid = output[3]
        if isinstance(y_valid, pd.DataFrame):
            y_valid = y_valid.values
        if isinstance(X_valid, pd.DataFrame):
            X_valid = X_valid.values

    return {
        "X": X,
        "y": y,
        "sample_weight": None,
        "x_raw_column_names": x_raw_column_names,
        "X_valid": X_valid,
        "y_valid": y_valid,
        "sample_weight_valid": None,
        "X_test": None,
        "y_test": None,
        "cv_splits_indices": None,
    }


def _extract_data_from_combined_dataframe(
        input: pd.DataFrame,
        label_column_name: str,
        sample_weight_column_name: Optional[str]) -> Tuple[Any, Any, Any]:
    """
    Extract user data from a Pandas dataframe if it contains both training features & labels.

    :param input: The Pandas dataframe to extract X, y, sample_valid from.
    :return: A Dictionary with keys being X, y, sample_weight containing the extracted training data.
    """
    col_names_to_drop = [label_column_name]
    sample_weight = None
    if sample_weight_column_name is not None:
        col_names_to_drop.append(sample_weight_column_name)
        if sample_weight_column_name not in input.columns:
            msg = ('The sample weight column {} is not found in input data, '
                   'please double check')
            raise DataException(msg.format(sample_weight_column_name)).with_generic_msg(msg.format(MASKED))
        sample_weight = input[sample_weight_column_name].values
    X = input[input.columns.difference(col_names_to_drop)]
    if label_column_name not in input.columns:
        raise LabelMissingException('The label column {} is not found in input data, '
                                    'please double check'.format(label_column_name))\
            .with_generic_msg("The label column was not found in the input data.")
    y = input[label_column_name].values

    return (X, y, sample_weight)


def _extract_data_from_combined_dataflow(
        input: dprep.Dataflow,
        label_column_name: str,
        sample_weight_column_name: Optional[str]) -> Tuple[Any, Any, Any]:
    """
    Extract user data from a Dataflow if it contains both training features & labels.

    :param input: The Dataflow to extract X, y, sample_valid from.
    :return: A Dictionary with keys being X, y, sample_weight containing the extracted training data.
    """
    col_names_to_drop = [label_column_name]
    sample_weight = None
    if sample_weight_column_name is not None:
        col_names_to_drop.append(sample_weight_column_name)
        try:
            sample_weight = input.keep_columns([sample_weight_column_name], validate_column_exists=True)
        except DataflowValidationError:
            msg = ('The sample weight column {} is not found in input data, '
                   'please double check')
            raise DataException(msg.format(sample_weight_column_name)).with_generic_msg(msg.format(MASKED))
    X = input.drop_columns(col_names_to_drop)
    try:
        y = input.keep_columns([label_column_name], validate_column_exists=True)
    except DataflowValidationError:
        raise LabelMissingException('The label column {} is not found in input data, '
                                    'please double check'.format(label_column_name))\
            .with_generic_msg("The label column was not found in the input data.")
    return (X, y, sample_weight)


def _check_if_automl_model_is_explainable(automl_algo_name: str) -> bool:
    if constants.SupportedModels.Forecasting.AutoArima in automl_algo_name:
        return False
    elif constants.SupportedModels.Forecasting.Prophet in automl_algo_name:
        return False
    else:
        return True


def _get_model_exp_property(automl_run: Any, logger: Optional[logging.Logger] = None) -> bool:
    try:
        from azureml.train.automl.runtime._remote_script import model_exp_wrapper
        automl_algo_name = automl_run.get_properties().get('run_algorithm')
        if automl_algo_name != 'StackEnsemble' and automl_algo_name != 'VotingEnsemble':
            if_model_is_explainable = _check_if_automl_model_is_explainable(automl_algo_name)

            if logger is not None and not if_model_is_explainable:
                logger.warning(automl_algo_name + ' is not explainable for AutoML run ' + str(automl_run.id))

            return if_model_is_explainable
        else:
            ensemble_algo_names_list_str = automl_run.get_tags().get('ensembled_algorithms')
            if ensemble_algo_names_list_str is not None:
                if_ensemble_model_is_explainable = _check_if_automl_model_is_explainable(
                    ensemble_algo_names_list_str)

                if logger is not None and not if_ensemble_model_is_explainable:
                    logger.warning(automl_algo_name + ' is not explainable for AutoML run ' + str(automl_run.id))

                return if_ensemble_model_is_explainable
            else:
                return True
    except Exception:
        return False


def _check_data_can_be_preprocessed(X: DataInputType,
                                    X_valid: DataInputType,
                                    x_raw_column_names: Optional[np.ndarray] = None) -> None:
    n_x_col = 1 if len(X.shape) == 1 else X.shape[1]
    if x_raw_column_names is None and isinstance(X, np.ndarray):
        x_raw_column_names = np.arange(n_x_col)
    elif x_raw_column_names is None:
        # if pandas df, try to use columns_names from dataframe
        x_raw_column_names = X.columns

    for col_num, col_name in zip(range(n_x_col), x_raw_column_names):
        _check_column_can_be_preprocessed(_get_column_by_column_number(X, col_num), col_name, False)
        if X_valid is not None:
            _check_column_can_be_preprocessed(_get_column_by_column_number(X_valid, col_num), col_name, True)


def _check_column_can_be_preprocessed(series: pd.Series, col_name: str, is_valid_data: bool) -> None:
    try:
        # preprocess need pandas.unique can be run properly.
        series.unique()
    except TypeError:
        input_type = "X_valid" if is_valid_data else "X"
        raise UnhashableEntryException(
            "The input {} column {} has data that cannot "
            "be preprocessed. Please check your input.".format(input_type, col_name))\
            .with_generic_msg("An input column has data that cannot be preprocessed.")


def _get_column_by_column_number(X: DataInputType, col_num: int) -> pd.Series:
    if isinstance(X, np.ndarray) and len(X.shape) == 1:
        return pd.Series(X)
    elif isinstance(X, np.ndarray):
        return pd.Series(X[:, col_num])
    else:
        return pd.Series(X.iloc[:, col_num])
