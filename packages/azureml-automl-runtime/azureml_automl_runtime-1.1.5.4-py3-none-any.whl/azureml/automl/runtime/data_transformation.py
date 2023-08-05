# ---------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# ---------------------------------------------------------
"""Holding the featurization functions."""
from typing import cast, Dict, Optional, Any, Tuple, Union, List

import json
import logging
import numpy as np
import os
import pickle
import pandas as pd
import scipy
from azureml.dataprep import Dataflow
from sklearn import preprocessing
from sklearn.utils.class_weight import compute_class_weight

from azureml.automl.core.shared import constants, logging_utilities, utilities
from azureml.automl.core.shared.exceptions import DataException, RawDataSnapshotException
from azureml.automl.runtime.shared import memory_utilities, utilities as runtime_utilities
from azureml.automl.runtime.shared._cv_splits import _CVSplits, FeaturizedCVSplit, FeaturizedTrainValidTestSplit
from azureml.automl.runtime.shared.cache_store import CacheStore
from azureml.automl.runtime.shared.types import DataInputType, DataSingleColumnInputType
from azureml.automl.core._experiment_observer import ExperimentStatus, ExperimentObserver, NullExperimentObserver
from azureml.automl.core.constants import FeaturizationConfigMode, SweepingMode
from azureml.automl.core.featurization import FeaturizationConfig
from .data_context import RawDataContext, TransformedDataContext
from .faults_verifier import VerifierManager
from .featurization import DataTransformer, StreamingFeaturizer, TransformerAndMapper
from azureml.automl.runtime.column_purpose_detection import StatsAndColumnPurposeType
from azureml.automl.runtime._engineered_feature_names import _GenerateEngineeredFeatureNames
from azureml.automl.runtime.featurizer.transformer import (LaggingTransformer,
                                                           TimeSeriesPipelineType,
                                                           TimeSeriesTransformer)
from azureml.automl.runtime.featurizer.transformer.featurization_utilities import skip_featurization
from .stats_computation import RawFeatureStats
from .streaming_data_context import StreamingTransformedDataContext
from azureml.automl.core.shared.constants import TimeSeries, Transformers,\
    TimeSeriesInternal
from azureml.automl.runtime import frequency_fixer


def _sweep_featurizers(X: DataInputType,
                       y: Optional[DataInputType],
                       task_type: str,
                       experiment_observer: ExperimentObserver,
                       is_onnx_compatible: bool = False,
                       enable_feature_sweeping: bool = False,
                       enable_dnn: bool = True,
                       force_text_dnn: bool = False,
                       logger: Optional[logging.Logger] = None,
                       featurization: Optional[FeaturizationConfig] = None,
                       is_cross_validation: bool = False,
                       feature_sweeping_config: Dict[str, Any] = {},
                       working_dir: Optional[str] = None) -> \
    Tuple[DataTransformer,
          List[TransformerAndMapper],
          Dict[str, np.dtype],
          List[StatsAndColumnPurposeType],
          _GenerateEngineeredFeatureNames]:
    """
    Sweep featurizers and return the feature sweeping config
    """

    dt = DataTransformer(task=task_type,
                         is_onnx_compatible=is_onnx_compatible,
                         enable_feature_sweeping=enable_feature_sweeping,
                         enable_dnn=enable_dnn,
                         force_text_dnn=force_text_dnn,
                         observer=experiment_observer,
                         featurization_config=featurization,
                         is_cross_validation=is_cross_validation,
                         feature_sweeping_config=feature_sweeping_config,
                         working_dir=working_dir)

    feature_config, column_types_mapping, column_purposes, feature_names = dt.configure_featurizers(X, y)
    return dt, feature_config, column_types_mapping, column_purposes, feature_names


def _fit_transform(x: DataInputType,
                   y: DataInputType,
                   dt: DataTransformer,
                   logger: Optional[logging.Logger] = None,
                   feature_config: List[TransformerAndMapper] = None,
                   columns_types_mapping: Dict[str, np.dtype] = None,
                   column_purposes: List[StatsAndColumnPurposeType] = None,
                   engineered_feature_names: _GenerateEngineeredFeatureNames = None) -> DataTransformer:
    return dt.fit_transform_with_logger(x, y, logger,
                                        feature_config=feature_config,
                                        columns_types_mapping=columns_types_mapping,
                                        column_purposes=column_purposes,
                                        engineered_feature_names=engineered_feature_names)


def transform_data(raw_data_context: RawDataContext,
                   cache_store: Optional[CacheStore] = None,
                   is_onnx_compatible: bool = False,
                   logger: Optional[logging.Logger] = None,
                   experiment_observer: Optional[ExperimentObserver] = None,
                   enable_feature_sweeping: bool = False,
                   verifier: Optional[VerifierManager] = None,
                   enable_cache: bool = True,
                   enable_streaming: bool = False,
                   feature_sweeping_config: Dict[str, Any] = {},
                   enable_dnn: bool = False,
                   force_text_dnn: bool = False,
                   working_dir: Optional[str] = None)\
        -> Union[TransformedDataContext, StreamingTransformedDataContext]:
    """
    Transform input data from RawDataContext to TransformedDataContext.

    :param raw_data_context: The raw input data.
    :param cache_store: the object that should be used to cache featurized data
    :param is_onnx_compatible: if works in onnx compatible mode
    :param logger: The logger
    :param experiment_observer: The experiment observer.
    :param enable_feature_sweeping: Enable or disable feature sweeping.
    :param verifier: The verifier to check input data quality.
    :param enable_cache: Enable or disable cache.
    :param enable_streaming: Whether run is using streaming.
    :param feature_sweeping_config: Config used for feature sweeping.
    :param enable_dnn: Flag to enable neural networks for forecasting and natural language processing.
    :param force_text_dnn: Flag to force add neural networks for natural language processing in feature sweeping.
    :param working_dir: Working directory to use for featurization/training.
    :return: Transformed data context.
    """
    if logger:
        logger.info("Pre-processing user data")

    if enable_streaming:
        return transform_data_streaming(raw_data_context, logger, experiment_observer)

    if logger:
        logger.info("The size of raw data is: " + str(raw_data_context._get_memory_size()))

    if experiment_observer is None:
        experiment_observer = NullExperimentObserver()

    y_df = raw_data_context.y
    if y_df is None:
        raise DataException(exception_message="Invalid y. y cannot be None.", has_pii=False)

    if not isinstance(y_df, pd.DataFrame):
        try:
            y_df = pd.DataFrame(y_df)
        except ValueError as e:
            raise DataException.from_exception(
                e=e, msg="Could not create a dataframe").with_generic_msg("Could not create a dataframe")

    y_raw_stats = RawFeatureStats(y_df.iloc[:, 0])
    utilities._log_raw_data_stat(
        y_raw_stats,
        logger=logger,
        prefix_message="[YCol]"
    )

    x_is_sparse = scipy.sparse.issparse(raw_data_context.X)
    if skip_featurization(raw_data_context.featurization) or x_is_sparse:
        # log the data characteristics as it won't going into pre-processing part.
        if x_is_sparse:
            if logger:
                logger.info("The sparse matrix is not supported for getting col charateristics.")
        else:
            x_df = raw_data_context.X
            if not isinstance(x_df, pd.DataFrame):
                x_df = pd.DataFrame(raw_data_context.X)
            for column in x_df.columns:
                raw_stats = RawFeatureStats(x_df[column])
                utilities._log_raw_data_stat(
                    raw_stats,
                    logger=logger,
                    prefix_message="[XColNum:{}]".format(x_df.columns.get_loc(column))
                )
    # Fix validation_size y-aware transformer leakeage issue, see 519483 and 518786
    # TODO: remove the below if block and
    # refactor validation_size and cv logic to overcome leakage in y-aware transformers

    if raw_data_context.validation_size is not None \
            and raw_data_context.validation_size > 0.0 \
            and raw_data_context.X_valid is None \
            and raw_data_context.y_valid is None \
            and raw_data_context.cv_splits_indices is None \
            and not raw_data_context.timeseries \
            and raw_data_context.num_cv_folds is None:
        _create_train_valid_data(raw_data_context)

    X, y, sample_weight = _remove_nan_rows_in_X_y(
        raw_data_context.X, raw_data_context.y,
        sample_weight=raw_data_context.sample_weight,
        logger=logger
    )
    X_valid, y_valid, sample_weight_valid = _remove_nan_rows_in_X_y(
        raw_data_context.X_valid, raw_data_context.y_valid,
        sample_weight=raw_data_context.sample_weight_valid,
        logger=logger
    )

    y_transformer, y, y_valid = _y_transform(y, y_valid, raw_data_context.task_type, logger)

    enable_class_balancing = False
    if enable_streaming is False and raw_data_context.task_type == constants.Tasks.CLASSIFICATION:
        enable_class_balancing, size_of_smallest_class = _class_balancing_check(y, logger)
        if verifier:
            verifier.update_data_verifier_for_class_balancing_validation(enable_class_balancing,
                                                                         size_of_smallest_class, y.shape[0])

    transformed_data_context = TransformedDataContext(X=X,
                                                      y=y,
                                                      X_valid=X_valid,
                                                      y_valid=y_valid,
                                                      sample_weight=sample_weight,
                                                      sample_weight_valid=sample_weight_valid,
                                                      x_raw_column_names=raw_data_context.x_raw_column_names,
                                                      cv_splits_indices=raw_data_context.cv_splits_indices,
                                                      num_cv_folds=raw_data_context.num_cv_folds,
                                                      validation_size=raw_data_context.validation_size,
                                                      timeseries=raw_data_context.timeseries,
                                                      timeseries_param_dict=raw_data_context.timeseries_param_dict,
                                                      cache_store=cache_store,
                                                      logger=logger)

    _log_data_info(logger=logger, X=transformed_data_context.X,
                   X_valid=transformed_data_context.X_valid,
                   y=transformed_data_context.y,
                   y_valid=transformed_data_context.y_valid)

    x_is_sparse = scipy.sparse.issparse(transformed_data_context.X)
    transformer, lag_transformer, ts_transformer = None, None, None
    data_sanpshot_str = None
    if skip_featurization(raw_data_context.featurization, raw_data_context.timeseries) or x_is_sparse:
        if logger:
            logger.info("Skipping featurization step")
        data_sanpshot_str = _get_data_snapshot(transformed_data_context.X)
    elif not skip_featurization(raw_data_context.featurization) and not raw_data_context.timeseries:
        transformed_data_context.X = _add_raw_column_names_to_X(raw_data_context.x_raw_column_names,
                                                                transformed_data_context.X)

        # sweep features
        # ideally data_transformer object should not be required
        data_transformer, feature_config, column_types_mapping, column_purposes, feature_names = \
            _sweep_featurizers(X=transformed_data_context.X,
                               y=transformed_data_context.y,
                               task_type=raw_data_context.task_type,
                               experiment_observer=experiment_observer,
                               is_onnx_compatible=is_onnx_compatible,
                               enable_feature_sweeping=enable_feature_sweeping,
                               enable_dnn=enable_dnn,
                               force_text_dnn=force_text_dnn,
                               logger=logger,
                               feature_sweeping_config=feature_sweeping_config,
                               featurization=raw_data_context.featurization
                               if isinstance(raw_data_context.featurization, FeaturizationConfig) else None,
                               is_cross_validation=transformed_data_context._is_cross_validation_scenario(),
                               working_dir=working_dir)

        # fit features and transform data
        transformer, transformed_data_context.X, data_sanpshot_str = \
            _get_transformer_x(x=transformed_data_context.X,
                               y=transformed_data_context.y,
                               task_type=raw_data_context.task_type,
                               dt=data_transformer,
                               verifier=verifier,
                               logger=logger,
                               experiment_observer=experiment_observer,
                               feature_config=feature_config,
                               columns_types_mapping=column_types_mapping,
                               column_purposes=column_purposes,
                               engineered_feature_names=feature_names)

        if transformed_data_context.X_valid is not None:
            transformed_data_context.X_valid = _add_raw_column_names_to_X(
                raw_data_context.x_raw_column_names, transformed_data_context.X_valid)
            transformed_data_context.X_valid = transformer.transform(transformed_data_context.X_valid)

        if raw_data_context.lag_length is not None and raw_data_context.lag_length > 0:
            # Get engineered names from Data Transformer if available
            x_raw_column_names = np.asarray(raw_data_context.x_raw_column_names)
            if transformer is not None:
                x_raw_column_names = np.asarray(transformer.get_engineered_feature_names())

            # Create a lagging transformer
            lag_transformer = LaggingTransformer(raw_data_context.lag_length)

            # Fit/Transform using lagging transformer
            transformed_data_context.X = lag_transformer.fit_transform(
                _add_raw_column_names_to_X(x_raw_column_names, transformed_data_context.X),
                transformed_data_context.y)

            if transformed_data_context.X_valid is not None:
                transformed_data_context.X_valid = lag_transformer.transform(
                    _add_raw_column_names_to_X(x_raw_column_names,
                                               transformed_data_context.X_valid))
            if logger:
                logger.info(
                    "lagging transformer is enabled with length {}.".format(
                        raw_data_context.lag_length))

        transformed_data_context._set_transformer(x_transformer=transformer,
                                                  lag_transformer=lag_transformer)
    elif raw_data_context.timeseries:
        try:
            transformed_data_context.X = _add_raw_column_names_to_X(
                raw_data_context.x_raw_column_names,
                transformed_data_context.X,
                raw_data_context.timeseries_param_dict.get(TimeSeries.TIME_COLUMN_NAME))
            ts_transformer, transformed_data, data_sanpshot_str = \
                _get_ts_transformer_x(transformed_data_context.X,
                                      transformed_data_context.y,
                                      raw_data_context.timeseries_param_dict,
                                      for_cv=False,
                                      logger=logger,
                                      experiment_observer=experiment_observer)
            # Add guard rails for time series.
            if verifier:
                _add_forecasting_guardrails_maybe(ts_transformer, verifier)

            # Report heuristic features if any and if experiment_observer is not None.
            _print_heuristics_maybe(experiment_observer, ts_transformer)

            target_column_name = ts_transformer.target_column_name
            if raw_data_context.timeseries_param_dict is not None and target_column_name in transformed_data.columns:
                transformed_data_context.y = transformed_data.pop(target_column_name).values
                transformed_data_context.X = transformed_data
        except ValueError as e:
            raise DataException.from_exception(
                e,
                "Cannot featurize time series data. Run after cleaning and processing manually.").with_generic_msg(
                    "Cannot featurize time series data. Run after cleaning and processing manually.")

        if transformed_data_context.X_valid is not None:
            try:
                transformed_data_context.X_valid = _add_raw_column_names_to_X(
                    raw_data_context.x_raw_column_names,
                    transformed_data_context.X_valid,
                    raw_data_context.timeseries_param_dict.get(TimeSeries.TIME_COLUMN_NAME))
                transformed_data_valid = ts_transformer.transform(transformed_data_context.X_valid,
                                                                  transformed_data_context.y_valid)
                transformed_data_context.y_valid = transformed_data_valid.pop(target_column_name).values
                transformed_data_context.X_valid = transformed_data_valid
                if not raw_data_context.timeseries:
                    transformed_data_context.X_valid = transformed_data_context.X_valid.values

            except ValueError as e:
                msg = "Cannot featurize time series validation data. Run after cleaning and processing manually."
                raise DataException.from_exception(
                    e,
                    msg).with_generic_msg(
                        msg)

        transformed_data_context._set_transformer(ts_transformer=ts_transformer)

        if scipy.sparse.issparse(transformed_data_context.X):
            transformed_data_context.X = transformed_data_context.X.todense()
    else:
        if logger:
            logger.info(
                "lagging transformer is enabled with length {}.".format(raw_data_context.lag_length))

    transformed_data_context._set_raw_data_snapshot_str(data_sanpshot_str)
    transformed_data_context._set_transformer(transformer, lag_transformer, y_transformer=y_transformer,
                                              ts_transformer=ts_transformer)

    # Sweeping for class balancing techniques
    if enable_class_balancing:
        balancing_result = _perform_class_balancing_sweeping(raw_data_context.task_type,
                                                             transformed_data_context.X,
                                                             transformed_data_context.y,
                                                             enable_class_balancing=enable_class_balancing,
                                                             logger=logger,
                                                             experiment_observer=experiment_observer,
                                                             feature_sweeping_config=feature_sweeping_config,
                                                             is_cross_validation=transformed_data_context.
                                                             _is_cross_validation_scenario(),
                                                             working_dir=working_dir)

        if balancing_result is not None and len(balancing_result) > 0:
            for k, v in balancing_result.items():
                if k == "weights":
                    transformed_data_context.sample_weight = v

    # Create featurized versions of cross validations if user configuration specifies cross validations
    _create_cv_splits_transformed_data(transformed_data_context, raw_data_context,
                                       X, y, sample_weight,
                                       experiment_observer,
                                       logger)

    if transformed_data_context._is_cross_validation_scenario() or raw_data_context.timeseries:
        # Refit transformers
        # Only do this for CV since for train-valid this is incorrect, see 507941s
        # TODO: evaluate if this refit is even necessary CV as a fit on all the data is already done above, see 518786
        time_colname = None
        if raw_data_context.timeseries:
            time_colname = raw_data_context.timeseries_param_dict.get(TimeSeries.TIME_COLUMN_NAME)
        raw_X = _add_raw_column_names_to_X(
            raw_data_context.x_raw_column_names,
            X, time_colname)
        transformed_data_context._refit_transformers(raw_X, y)

    if enable_cache or not skip_featurization(raw_data_context.featurization, raw_data_context.timeseries):
        transformed_data_context._update_cache()

    if logger:
        logger.info("The size of transformed data is: " + str(transformed_data_context._get_memory_size()))

    return transformed_data_context


def _add_forecasting_guardrails_maybe(ts_transformer: TimeSeriesTransformer,
                                      verifier: VerifierManager) -> None:
    """
    Add guardrails for the forecasting lookback features.

    :param ts_transformer: The fitted TimeSeriesTransformer.
    :param verifier: The VerifierManager to add guardrails to.
    """
    lags = TimeSeriesInternal.LAGS_TO_CONSTRUCT in ts_transformer.parameters.keys()
    rw = TimeSeriesInternal.WINDOW_SIZE in ts_transformer.parameters.keys()
    verifier.update_data_verifier_lookback_feature(
        lags=lags,
        rw=rw,
        passed=not ts_transformer.lookback_features_removed)


def _create_train_valid_data(raw_data_context: RawDataContext) -> None:
    # Use validation_size to create explicit train valid splits
    cv_splits = _CVSplits(raw_data_context.X, raw_data_context.y,
                          frac_valid=raw_data_context.validation_size,
                          cv_splits_indices=None,
                          is_time_series=False,
                          timeseries_param_dict=None)
    (raw_data_context.X, raw_data_context.y, raw_data_context.sample_weight, raw_data_context.X_valid,
     raw_data_context.y_valid, raw_data_context.sample_weight_valid, _, _, _) = \
        cv_splits.get_train_validation_test_chunks(raw_data_context.X,
                                                   raw_data_context.y,
                                                   raw_data_context.sample_weight)
    raw_data_context.validation_size = None


def _print_heuristics_maybe(experiment_observer: ExperimentObserver,
                            tst: TimeSeriesTransformer) -> None:
    """Print out heuristics to experiment observer."""
    if experiment_observer is not None:
        auto_settings = []
        if tst.get_auto_lag() is not None:
            auto_settings.append('Target_Lag = \'{}\''.format(tst.get_auto_lag()))

        if tst.get_auto_window_size() is not None:
            auto_settings.append('Target_Rolling_Window = \'{}\''.format(tst.get_auto_window_size()))

        if tst.get_auto_max_horizon() is not None:
            auto_settings.append('Max_Horizon = \'{}\''.format(tst.get_auto_max_horizon()))

        if auto_settings:
            message = "Heuristic parameters: {}.\n".format(', '.join(auto_settings))
            if hasattr(experiment_observer, 'file_handler') and experiment_observer.file_handler is not None:
                # Local run
                # Directly output message to console.
                experiment_observer.file_handler.write(message)
            if hasattr(experiment_observer, 'run_instance'):
                # Remote run.
                # Put the 'auto' tag to the run to use it later.
                experiment_observer.run_instance.set_tags({TimeSeries.AUTO: message})


def transform_data_streaming(raw_data_context: RawDataContext,
                             logger: Optional[logging.Logger] = None,
                             observer: Optional[ExperimentObserver] = None) -> StreamingTransformedDataContext:
    """
    Transform the input from RawDataContext to StreamingTransformedDataContext

    :param raw_data_context: The raw input data.
    :return: Transformed data context.
    """
    # Get a snapshot of the raw data (without the label column and weight column),
    # that will become the schema that is used for inferences
    raw_data_snapshot = _get_data_snapshot(data=raw_data_context.training_data.drop_columns(
        columns=[raw_data_context.label_column_name, raw_data_context.weight_column_name]))
    result = StreamingTransformedDataContext(x_raw_column_names=raw_data_context.x_raw_column_names,
                                             training_data=raw_data_context.training_data,
                                             label_column_name=raw_data_context.label_column_name,
                                             raw_data_snapshot=raw_data_snapshot,
                                             weight_column_name=raw_data_context.weight_column_name,
                                             validation_data=raw_data_context.validation_data)

    if not skip_featurization(raw_data_context.featurization):
        streaming_featurizer = StreamingFeaturizer(
            raw_data_context.training_data,
            raw_data_context.label_column_name,
            raw_data_context.weight_column_name,
            logger=logger,
            observer=observer,
            featurization_config=raw_data_context.featurization
            if isinstance(raw_data_context.featurization, FeaturizationConfig) else None)

        if logger:
            logger.info("Learning streaming transformations...")
        streaming_featurization_transformer = streaming_featurizer.learn_transformations()

        result.set_featurization_transformer(streaming_featurization_transformer)
        result.set_featurized_column_names(streaming_featurizer.get_transformed_vector_column_names())

    return result


def _log_data_info(logger: Optional[logging.Logger],
                   X: np.ndarray,
                   y: np.ndarray,
                   X_valid: np.ndarray,
                   y_valid: np.ndarray) -> None:
    """
    Log data details.

    :param logger:
    :param X:
    :param y:
    :param X_valid:
    :param y_valid:
    """

    if logger is None:
        return

    # logging X and y info
    logger.info(
        "X datatype is {}, shape is {}, datasize is {}.".format(
            type(X), X.shape, memory_utilities.get_data_memory_size(X)
        )
    )
    logger.info(
        "y datatype is {}, shape is {}, datasize is {}.".format(
            type(y), y.shape, memory_utilities.get_data_memory_size(y)
        )
    )
    if X_valid is not None:
        logger.info(
            "X_valid datatype is {}, shape is {}, datasize is {}.".format(
                type(X_valid),
                X_valid.shape, memory_utilities.get_data_memory_size(X_valid)
            )
        )
    if y_valid is not None:
        logger.info(
            "y_valid datatype is {}, shape is {}, datasize is {}.".format(
                type(y_valid),
                y_valid.shape, memory_utilities.get_data_memory_size(y_valid)
            )
        )


def _get_data_snapshot_helper(data: Any) -> str:
    if isinstance(data, pd.DataFrame):
        snapshot_json_str = data.to_json(orient='records', date_format='iso')
    elif isinstance(data, pd.Series):
        snapshot_json_str = data.to_json(orient='values', date_format='iso')
    else:
        raise RawDataSnapshotException("Unexcepted data format provided. Excepting pandas but got " + str(type(data)))\
            .with_generic_msg("Unexcepted data format provided.")
    snapshot_dict = json.loads(snapshot_json_str)
    return str(snapshot_dict)


def _get_data_snapshot(data: DataInputType, is_forecasting: bool = False) -> Any:
    if data is None:
        raise DataException("Data is not valid", has_pii=False)
    try:
        if isinstance(data, pd.DataFrame) or isinstance(data, Dataflow):
            first_row = data.head(1)
            df_str = _get_data_snapshot_helper(first_row)
            sample_df_str = 'pd.DataFrame(data=' + df_str
            if isinstance(first_row, pd.DataFrame):
                col_str = str(first_row.columns.tolist())
                sample_df_str = sample_df_str + ', columns=' + col_str
            sample_df_str = sample_df_str + ')'
            return sample_df_str
        elif isinstance(data, np.ndarray):
            np_array_str = _get_data_snapshot_helper(pd.Series(data[0]))
            sample_numpy_array_str = 'np.array([' + np_array_str + '])'
            return sample_numpy_array_str
        elif scipy.sparse.issparse(data):
            # Assuming that sparse matrix will be inferenced as a numpy array
            # TODO: Test sparse matrices with inference scenario
            np_array_str = _get_data_snapshot_helper(pd.Series(data[0, :].toarray().ravel()))
            sample_sparse_array_str = 'np.array([' + np_array_str + '])'
            return sample_sparse_array_str
        else:
            raise DataException("Data format is not recognized", has_pii=False)
    except DataException:
        raise
    except Exception as e:
        exception_error_msg = "Raw data snapshot failed with error: {error}".format(error=e)
        raise RawDataSnapshotException(exception_error_msg).with_generic_msg("Raw data snapshot failed.")


def _get_transformer_x(x: DataInputType,
                       y: np.ndarray,
                       task_type: str,
                       dt: DataTransformer,
                       experiment_observer: ExperimentObserver = None,
                       verifier: Optional[VerifierManager] = None,
                       logger: Optional[logging.Logger] = None,
                       feature_config: List[TransformerAndMapper] = None,
                       columns_types_mapping: Dict[str, np.dtype] = None,
                       column_purposes: List[StatsAndColumnPurposeType] = None,
                       engineered_feature_names: _GenerateEngineeredFeatureNames = None
                       ) -> Tuple[DataTransformer, Any, str]:
    """
    Given data, compute transformations and transformed data.

    :param x: input data
    :param y: labels
    :param task_type: One of the tasks defined in constants.Tasks
    :param is_onnx_compatible: If works in onnx compatible mode
    :param enable_feature_sweeping: Whether to run feature sweeping or not.
    :param logger: Logger object for logging data from pre-processing
    :param featurization: Configuration used for custom featurization.
    :param is_cross_validation: Whether to do the cross validation
    :param force_text_dnn: Force add dnn's for text via feature sweeping
    :param feature_sweeping_config: Feature sweeping config.
    :param working_dir: Working directory to use for temp files.
    :return: transformer, transformed_x
    """

    if experiment_observer is not None:
        experiment_observer.report_status(
            ExperimentStatus.DatasetFeaturization, "Beginning to fit featurizers and featurize the dataset.")

    data_sanpshot_str = _get_data_snapshot(x)

    x_transform = _fit_transform(x, y, dt, logger=logger,
                                 feature_config=feature_config,
                                 columns_types_mapping=columns_types_mapping,
                                 )

    if verifier is not None:
        verifier.update_data_verifier_for_missing_values(dt)
        verifier.update_data_verifier_for_text_class_validation(dt.stats_and_column_purposes)

    if experiment_observer is not None:
        experiment_observer.report_status(
            ExperimentStatus.DatasetFeaturizationCompleted, "Completed fit featurizers and featurizing the dataset.")

    return dt, x_transform, data_sanpshot_str


def _get_ts_transformer_x(x, y, timeseries_param_dict, for_cv=False, logger=None, experiment_observer=None):
    """
    Given data, compute transformations and transformed data.

    :param x: input data
    :param y: labels
    :param timeseries_param_dict: timeseries metadata
    :param logger: logger object for logging data from pre-processing
    :return: transformer, transformed_x
    """
    pipeline_type = TimeSeriesPipelineType.CV_REDUCED if for_cv else TimeSeriesPipelineType.FULL
    tst = TimeSeriesTransformer(pipeline_type=pipeline_type, logger=logger, **timeseries_param_dict)

    if experiment_observer is not None:
        message = 'Beginning to featurize the CV split.' if for_cv else 'Beginning to featurize the dataset.'
        experiment_observer.report_status(
            ExperimentStatus.DatasetFeaturization, message)

    data_sanpshot_str = _get_data_snapshot(x, is_forecasting=True)
    x_transform = tst.fit_transform(x, y)

    if experiment_observer is not None:
        message = 'Completed featurizing the CV split.' if for_cv else 'Completed featurizing the dataset.'
        experiment_observer.report_status(
            ExperimentStatus.DatasetFeaturizationCompleted, message)

    return tst, x_transform, data_sanpshot_str


def _add_raw_column_names_to_X(x_raw_column_names: np.ndarray, X: DataInputType,
                               time_column_name: Optional[str] = None) -> DataInputType:
    """
    Add raw column names to X.

    :param x_raw_column_names: List of raw column names
    :param X: dataframe / array
    :raise ValueError if number of raw column names is not same as the number of columns in X
    :return: Dataframe with column names
    """
    # Combine the raw feature names with X
    if x_raw_column_names is not None:
        if isinstance(X, pd.DataFrame):
            # If X is already a DataFrame, then return X. Assumption here is that raw column names
            # are already present in the data frame header. The passed x_raw_column_names are not
            # needed.
            X = X.infer_objects()
            if time_column_name is not None:
                try:
                    X = frequency_fixer.convert_to_datetime(X, time_column_name)
                except BaseException:
                    pass
            return X
        number_of_columns = 1 if len(X.shape) == 1 else X.shape[1]
        if x_raw_column_names.shape[0] != number_of_columns:
            msg = "Number of raw column names {} and number of columns in input data {} do not match"
            raise DataException(msg.format(x_raw_column_names.shape[0], X.shape[1])).with_generic_msg(
                msg.format('[Masked]', '[Masked]'))
        if not scipy.sparse.issparse(X):
            # We infer data types to avoid getting data frame, where each column is of object dtype.
            # This significantly decrease memory footprint.
            X_with_raw_columns = pd.DataFrame(
                data=X, columns=x_raw_column_names.tolist()).infer_objects()
            # Do our best to convert time_column_name to datetime.
            if time_column_name is not None:
                try:
                    X_with_raw_columns = frequency_fixer.convert_to_datetime(X_with_raw_columns, time_column_name)
                except BaseException:
                    pass
            return X_with_raw_columns
        else:
            X_with_raw_columns = pd.SparseDataFrame(
                data=X, columns=x_raw_column_names.tolist())
            return X_with_raw_columns

    return X


def _y_transform(y, y_valid, task_type, logger=None):
    """
    Apply label encoder for string, float and negative int type y data.

    :param y: y data
    :param y_valid: Validation y data
    :param task_type: CLASSIFICATION/REGRESSION
    :return:
    """
    y_transformer = None
    if task_type == constants.Tasks.CLASSIFICATION and (
       not utilities._check_if_column_data_type_is_int(
           runtime_utilities._get_column_data_type_as_str(y)) or np.amin(y) < 0):
        # Currently y_transformer only support the label encoder for negative, float and categorical data.
        if _check_mixed_type(y) or _check_mixed_type(y_valid):
            y = pd.Series(y).apply(str).values
            if y_valid is not None:
                y_valid = pd.Series(y_valid).apply(str).values

        if logger is not None:
            logger.info("Start doing label encoding on y data.")
        y_transformer = preprocessing.LabelEncoder()
        if y_valid is None:
            le = y_transformer.fit(y)
            y = le.transform(y)
        else:
            le = y_transformer.fit(np.vstack([y.reshape(-1, 1), y_valid.reshape(-1, 1)]))
            y = le.transform(y)
            y_valid = le.transform(y_valid)
        if logger is not None:
            logger.info("End doing label encoding on y data.")
    return y_transformer, y, y_valid


def _class_balancing_check(y, logger):
    """
    Class balancing check based on y distribution.

    :param y: Training y data
    :param logger: logger object for logging data from pre-processing
    :return: is resample, size of smallest class in y
    """
    if logger is not None:
        logger.info("Start checking class balancing on y data.")
    labels, counts = np.unique(y, return_counts=True)
    # is_resample == True indicates class is imbalanced.
    is_resample = False
    # Logic to measure class balancing:
    # number of samples in the smallest class
    # number of samples
    # number of class
    # If the percentage of the smallest class times number of classes is less or equal than 0.1
    # or number of samples in the smallest class is less than 5,
    # the dataset is considered as imbalanced.
    if float(min(counts) / sum(counts)) / (1 / len(counts)) <= 0.1 or min(counts) < 5:
        is_resample = True
    if is_resample:
        if logger is not None:
            logger.info("Classes are imbalanced in training data.")

    return is_resample, min(counts)


def _check_mixed_type(y: Optional[DataSingleColumnInputType] = None) -> bool:
    """
    Check if array has heterogeneous types, such as integer and categorical mixed data.

    :param y: DataSingleColumnInputType
    :return: bool -- 'True' if the dtype is mixed. 'False' otherwise.
    """
    if y is None:
        return False
    if pd.api.types.infer_dtype(y).startswith('mixed'):
        return True
    else:
        return False


def _remove_nan_rows_in_X_y(X, y, sample_weight=None, logger=None):
    """Remove the NaN columns in y and the corresponding rows in X."""
    X_new = X
    y_new = y
    sample_weight_new = sample_weight

    if X is not None and y is not None:
        nan_y_index = runtime_utilities._get_indices_missing_labels_output_column(y)

        if logger is not None:
            logger.info("Inspecting target column for missing values.")

        if len(nan_y_index) > 0:
            y_new = np.delete(y, nan_y_index)
            if scipy.sparse.issparse(X):
                X_new = X_new.toarray()
            if isinstance(X_new, pd.DataFrame):
                X_new = X_new.loc[set(range(X_new.shape[0])) - set(nan_y_index)]
            else:
                X_new = np.delete(X, nan_y_index, axis=0)
            if sample_weight is not None:
                if scipy.sparse.issparse(sample_weight):
                    sample_weight_new = sample_weight_new.toarray()
                sample_weight_new = np.delete(sample_weight, nan_y_index, axis=0)
            # if input is sparse, convert back to csr
            if scipy.sparse.issparse(X):
                X_new = scipy.sparse.csr_matrix(X_new)
            if scipy.sparse.issparse(sample_weight):
                sample_weight_new = scipy.sparse.csr_matrix(sample_weight_new)
    return X_new, y_new, sample_weight_new


def _create_cv_splits_transformed_data(transformed_data_context: TransformedDataContext,
                                       raw_data_context: RawDataContext, X: np.ndarray, y: np.ndarray,
                                       sample_weight: Optional[np.ndarray],
                                       experiment_observer: ExperimentObserver,
                                       logger: Optional[logging.Logger] = None) -> None:
    """
    Create featurized data for individual CV splits using the data transformer and lagging trransformer.

    :param raw_data_context: The raw data context.
    :param X: Raw training data
    :param y: Raw output variable data
    :param sample_weight: Sample weight
    :param logger: logger for logging
    :return:
    """
    # Check if CV splits need to featurized
    if transformed_data_context.num_cv_folds is not None or \
        (transformed_data_context.validation_size is not None and
         transformed_data_context.validation_size > 0.0) or \
            transformed_data_context.cv_splits_indices is not None:

        if logger:
            logger.info("Creating cross validations")

        if skip_featurization(raw_data_context.featurization):
            experiment_observer.report_status(
                ExperimentStatus.DatasetCrossValidationSplit,
                "Generating CV splits.")
        else:
            experiment_observer.report_status(
                ExperimentStatus.DatasetCrossValidationSplit,
                "Generating individually featurized CV splits.")

        # Add raw column names to raw training data
        time_colname = None
        if raw_data_context.timeseries:
            time_colname = raw_data_context.timeseries_param_dict.get(TimeSeries.TIME_COLUMN_NAME)
        raw_X = _add_raw_column_names_to_X(raw_data_context.x_raw_column_names, X, time_colname)
        raw_y = y

        # If we have a time seriesdata frame with heuristic parameters, we need to replace these parameters.
        # If it is not a time series, just set ts_param_dict_copy to be a
        # reference on raw_data_context.timeseries_param_dict
        ts_param_dict_copy = raw_data_context.timeseries_param_dict
        if raw_data_context.timeseries and raw_data_context.timeseries_param_dict is not None:
            # If raw_data_context.timeseries_param_dict contains data, swap all auto parameters to be
            # inferenced parameters.
            ts_param_dict_copy = raw_data_context.timeseries_param_dict.copy()
            tst = transformed_data_context.transformers.get(Transformers.TIMESERIES_TRANSFORMER)
            if tst is not None:
                # Swap the auto parameters by theit inferenced values.
                if ts_param_dict_copy.get(TimeSeries.MAX_HORIZON) == TimeSeries.AUTO:
                    ts_param_dict_copy[TimeSeries.MAX_HORIZON] = tst.max_horizon
                if ts_param_dict_copy.get(TimeSeriesInternal.WINDOW_SIZE) == TimeSeries.AUTO:
                    rw_transform = tst.pipeline.get_pipeline_step(TimeSeriesInternal.ROLLING_WINDOW_OPERATOR)
                    if rw_transform is not None:
                        ts_param_dict_copy[TimeSeriesInternal.WINDOW_SIZE] = rw_transform.window_size
                lags_dict = cast(Dict[str, Any], ts_param_dict_copy.get(TimeSeriesInternal.LAGS_TO_CONSTRUCT))
                if lags_dict and lags_dict.get(tst.target_column_name) == [TimeSeries.AUTO]:
                    lag_lead = tst.pipeline.get_pipeline_step(TimeSeriesInternal.LAG_LEAD_OPERATOR)
                    if lag_lead is not None:
                        ts_param_dict_copy[TimeSeriesInternal.LAGS_TO_CONSTRUCT] = lag_lead.lags_to_construct
                # If the short grains will be removed from the series, we need to make sure that the corresponding
                # grains will not get to the rolling origin validator, and it will not fail.
                short_series_processor = tst.pipeline.get_pipeline_step(TimeSeriesInternal.SHORT_SERIES_DROPPEER)
                # Despite ts_param_dict_copy should return Optional[str], we know that grains internally
                # are represented by Optional[List[str]].
                grains = cast(Optional[List[str]], ts_param_dict_copy.get(TimeSeries.GRAIN_COLUMN_NAMES))
                # If short series are being dropped and if there are grains, drop them.
                # Note: if there is no grains i.e. data set contains only one grain, and it have to be dropped,
                # we will show error on the initial data transformation.
                if short_series_processor is not None and short_series_processor.has_short_grains_in_train\
                        and grains is not None and len(grains) > 0:
                    # Preprocess raw_X so that it will not contain the short grains.
                    dfs = []
                    raw_X[TimeSeriesInternal.DUMMY_TARGET_COLUMN] = raw_y
                    for grain, df in raw_X.groupby(grains):
                        if grain in short_series_processor.grains_to_keep:
                            dfs.append(df)
                    raw_X = pd.concat(dfs)
                    raw_y = raw_X.pop(TimeSeriesInternal.DUMMY_TARGET_COLUMN).values
                    del dfs

        # Create CV splits object
        transformed_data_context.cv_splits = \
            _CVSplits(raw_X, raw_y,
                      frac_valid=transformed_data_context.validation_size,
                      CV=transformed_data_context.num_cv_folds,
                      cv_splits_indices=transformed_data_context.cv_splits_indices,
                      is_time_series=raw_data_context.timeseries,
                      timeseries_param_dict=ts_param_dict_copy)
        if logger:
            logger.info("Found cross validation type: " + str(transformed_data_context.cv_splits._cv_split_type))

        # If data transformer or lagging transformers are valid, then featurize individual CV splits
        if transformed_data_context.transformers[constants.Transformers.X_TRANSFORMER] is not None or \
                transformed_data_context.transformers[constants.Transformers.LAG_TRANSFORMER] is not None or \
                transformed_data_context.transformers[constants.Transformers.TIMESERIES_TRANSFORMER] is not None:

            data_transformer = transformed_data_context.transformers[constants.Transformers.X_TRANSFORMER]
            lag_transformer = transformed_data_context.transformers[constants.Transformers.LAG_TRANSFORMER]
            ts_transformer = transformed_data_context.transformers[constants.Transformers.TIMESERIES_TRANSFORMER]

            if transformed_data_context.cv_splits.get_cv_split_indices() is not None:
                if logger:
                    logger.info("Creating featurized version of CV splits data")

                # Walk all CV split indices and featurize individual train and validation set pair
                transformed_data_context.cv_splits._featurized_cv_splits = []
                cv_split_index = 0
                for X_train, y_train, sample_wt_train, X_test, y_test, sample_wt_test \
                        in transformed_data_context.cv_splits.apply_CV_splits(raw_X, raw_y, sample_weight):

                    if data_transformer is not None:
                        X_train = data_transformer.fit_transform(X_train, y_train)
                        X_test = data_transformer.transform(X_test)

                    if lag_transformer is not None:
                        X_train = lag_transformer.fit_transform(X_train, y_train)
                        X_test = lag_transformer.transform(X_test)

                    if ts_transformer is not None:
                        assert raw_data_context.timeseries_param_dict is not None,\
                            "Expected non-none timeseries parameter dict"  # ensure type is correct for mypy
                        # Need to do pipeline introspection on ts_transformer for CV featurization.
                        # For compatibility with old SDK versions, re-compute the ts_transformer feature graph
                        # if it is not set
                        ts_transformer._create_feature_transformer_graph_if_not_set(raw_X, y=raw_y)

                        # Get list of time index features used on full train set fit
                        non_holiday_features = ts_transformer.time_index_non_holiday_features
                        ts_split_param_dict = raw_data_context.timeseries_param_dict.copy()
                        # Make sure we use the frequency inferred on all the data frame, but not on
                        # smaller validation part.
                        ts_split_param_dict[TimeSeries.FREQUENCY] = ts_transformer.freq_offset
                        ts_split_param_dict[constants.TimeSeriesInternal.FORCE_TIME_INDEX_FEATURES_NAME] = \
                            non_holiday_features

                        ts_split_transformer, X_train, _ = \
                            _get_ts_transformer_x(X_train, y_train, ts_split_param_dict,
                                                  for_cv=True, logger=logger,
                                                  experiment_observer=experiment_observer)
                        # Join with full featurized set to get re-useable features
                        X_train = \
                            TimeSeriesTransformer._join_reusable_features_for_cv(ts_split_transformer, X_train,
                                                                                 ts_transformer,
                                                                                 transformed_data_context.X)

                        if ts_split_transformer.target_column_name in X_train.columns:
                            y_train = X_train.pop(ts_split_transformer.target_column_name).values

                        X_test = ts_split_transformer.transform(X_test, y_test)
                        X_test = \
                            TimeSeriesTransformer._join_reusable_features_for_cv(ts_split_transformer, X_test,
                                                                                 ts_transformer,
                                                                                 transformed_data_context.X)

                        # Need to apply some corrections when data has horizon-dependent features (i.e. Lags/RW)
                        if ts_transformer.origin_column_name in X_test.index.names:
                            # X_test may have some origin times later than the latest known train times
                            latest_known_dates = \
                                {gr: df.index.get_level_values(ts_transformer.time_column_name).max()
                                 for gr, df in X_train.groupby(ts_transformer.grain_column_names)}
                            X_test = (X_test.groupby(ts_transformer.grain_column_names, group_keys=False)
                                      .apply(lambda df:
                                             ts_transformer._select_known_before_date(df, latest_known_dates[df.name],
                                                                                      ts_transformer.freq_offset)))

                            # To match forecasting logic, select predictions made from most recent origin times
                            X_test = ts_transformer._select_latest_origin_dates(X_test)
                            if X_test.shape[0] == 0:
                                # This happens when we do not have enough data points
                                # at the end of data set to generate lookback features for
                                # validation set (trimmed in _select_latest_origin_dates).
                                raise DataException(
                                    "Unable ti create validation folds "
                                    "because the data at the end of time series are missing. "
                                    "Please increase max_horizon, "
                                    "or turn off target lags and rolling window.", has_pii=False)
                        if ts_split_transformer.target_column_name in X_test.columns:
                            y_test = X_test.pop(ts_split_transformer.target_column_name).values

                    # Create the featurized CV split object
                    featurized_cv = FeaturizedCVSplit(
                        X_train, y_train, sample_wt_train,
                        X_test, y_test, sample_wt_test, None, None)

                    if logger:
                        logger.info(str(featurized_cv))

                    # Flush the featurized data on the cache store
                    transformed_data_context._update_cache_with_featurized_data(
                        TransformedDataContext.FEATURIZED_CV_SPLIT_KEY_INITIALS +
                        str(cv_split_index), featurized_cv)

                    # Clear the in-memory data for the featurized data and record the cache store and key
                    featurized_cv._clear_featurized_data_and_record_cache_store(
                        transformed_data_context.cache_store,
                        TransformedDataContext.FEATURIZED_CV_SPLIT_KEY_INITIALS + str(cv_split_index))

                    cv_split_index += 1

                    # Append to the list of featurized CV splits
                    transformed_data_context.cv_splits._featurized_cv_splits.append(featurized_cv)

            else:
                if logger:
                    logger.info("Creating featurized data for train and validation data")

                if raw_data_context.timeseries:
                    raise DataException('Could not retrieve CV splits for time-series data. ' +
                                        'Please set the number of cross-validation folds.', has_pii=False)

                X_train, y_train, sample_weight_train, X_valid, y_valid, \
                    sample_weight_valid, _, _, _ = \
                    transformed_data_context.cv_splits.get_train_validation_test_chunks(raw_X, raw_y, sample_weight)

                if data_transformer is not None:
                    if X_train is not None:
                        X_train = data_transformer.fit_transform(X_train, y_train)
                    if X_valid is not None:
                        X_valid = data_transformer.transform(X_valid)

                if lag_transformer is not None:
                    if X_train is not None:
                        X_train = lag_transformer.fit_transform(X_train, y_train)
                    if X_valid is not None:
                        X_valid = lag_transformer.transform(X_valid)

                # Create the featurized train, valid and test object
                featurized_train_test_valid = FeaturizedTrainValidTestSplit(
                    X_train, y_train, sample_weight_train,
                    X_valid, y_valid, sample_weight_valid,
                    None, None, None, None, None)

                if logger:
                    logger.info(str(featurized_train_test_valid))

                # Flush the featurized data on the cache store
                transformed_data_context._update_cache_with_featurized_data(
                    TransformedDataContext.FEATURIZED_TRAIN_TEST_VALID_KEY_INITIALS,
                    featurized_train_test_valid)

                # Clear the in-memory data for the featurized data and record the cache store and key
                featurized_train_test_valid._clear_featurized_data_and_record_cache_store(
                    transformed_data_context.cache_store,
                    TransformedDataContext.FEATURIZED_TRAIN_TEST_VALID_KEY_INITIALS)

                transformed_data_context.cv_splits._featurized_train_test_valid_chunks = featurized_train_test_valid

        if logger:
            logger.info("Completed creating cross-validation folds and featurizing them")


def _perform_class_balancing_sweeping(task_type: str, df: DataInputType,
                                      y: DataSingleColumnInputType,
                                      enable_class_balancing: bool,
                                      logger: Optional[logging.Logger] = None,
                                      experiment_observer: Optional[ExperimentObserver] = None,
                                      feature_sweeping_config: Dict[str, Any] = {},
                                      is_cross_validation: bool = False,
                                      working_dir: Optional[str] = None) -> Dict[str, Any]:
    """
    Perform sweeping over balancing strategies and return name of balancing strategies which outperforms
    the original metrics.

    :param task_type: Task type.
    :param df: Input data frame.
    :param y: Input labels.
    :param enable_class_balancing: Boolean
    :param logger: The logger
    :param feature_sweeping_config: Enable or disable balancing.
    :param is_cross_validation: Whether to do the cross validation
    :return: Use class weight, class weight
    """
    if experiment_observer is not None:
        experiment_observer.report_status(ExperimentStatus.DatasetBalancing,
                                          "Performing class balancing sweeping")
    try:
        if enable_class_balancing:
            if logger:
                logger.info("Performing class balancing sweeping")

            from azureml.automl.runtime.sweeping.meta_sweeper import MetaSweeper

            balancing_sweeper = MetaSweeper(task=task_type,
                                            timeout_sec=3600,
                                            is_cross_validation=is_cross_validation,
                                            logger=logger,
                                            feature_sweeping_config=feature_sweeping_config)

            working_dir = working_dir or os.getcwd()
            balancing_result = balancing_sweeper.sweep(working_dir, df, y, sweeping_mode=SweepingMode.Balancing)
            if logger:
                logger.info("Finished class balancing sweeping")
            for balancer in balancing_result:
                if balancer == "ClassWeight":
                    if logger:
                        logger.info("Adding class weight to data context")
                    weights = _compute_sample_weight(y)
                    return {'weights': weights}
            return {}
    except Exception as e:

        # Never fail the main run even if sweeping fails.
        logging_utilities.log_traceback(e, logger)


def _compute_sample_weight(y: DataSingleColumnInputType) -> np.array:
    """
    Compute sample weight based on class weight.

    :param y: Input labels.
    :return: sample weights.
    """

    unique_vals = np.unique(y)

    class_weight = compute_class_weight('balanced', unique_vals, y)
    weights = {uniq: weight for uniq, weight in zip(unique_vals, class_weight)}
    sample_class_weight = [weights[label] for label in y]

    return np.array(sample_class_weight)
