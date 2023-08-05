# ---------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# ---------------------------------------------------------
"""Code used to fit pipeline."""
import datetime
import json
import logging
import math
import uuid
from collections import defaultdict
from typing import Any, TYPE_CHECKING
from typing import Dict, Optional, cast, Union

import azureml.automl.core.inference as inference
import numpy as np
from azureml.automl.core import package_utilities
from azureml.automl.core.automl_base_settings import AutoMLBaseSettings
from azureml.automl.core.automl_utils import retry_with_backoff
from azureml.automl.core.model_explanation import ModelExpSupportStr, ModelExpGithubNBLink
from azureml.automl.core.onnx_convert.onnx_convert_constants import OnnxConvertConstants
from azureml.automl.core.shared import constants, logging_utilities, utilities
from azureml.automl.core.shared.exceptions import (ErrorTypes,
                                                   PipelineRunException,
                                                   UserException,
                                                   RunStateChangeException, AutoMLException)
from azureml.automl.core.shared.limit_function_call_exceptions import TimeoutException
from azureml.automl.core.systemusage_telemetry import SystemResourceUsageTelemetryFactory
from azureml.automl.runtime import cpu_utilities
from azureml.automl.runtime import pipeline_run_helper, training_utilities
from azureml.automl.runtime.automl_run_context import AutoMLAbstractRunContext
from azureml.automl.runtime.shared.datasets import DatasetBase

from .automl_pipeline import AutoMLPipeline
from .data_context import TransformedDataContext
from .fit_output import FitOutput
from .onnx_convert import OnnxConverter

if TYPE_CHECKING:
    from azureml.core import Run
    from automl.client.core.nativeclient.run import NativeAutoMLRun
    RunType = Union[Run, NativeAutoMLRun]
else:
    RunType = Any


class FitPipelineComponentName:
    """Constants for the FitPipeline Component names."""

    PREPRARE_DATA = "PrepareData"
    COMPLETE_RUN = "CompleteRun"


def fit_pipeline(automl_pipeline: AutoMLPipeline,
                 automl_settings: AutoMLBaseSettings,
                 automl_run_context: AutoMLAbstractRunContext,
                 fit_iteration_parameters_dict: Optional[Dict[str, Any]] = None,
                 remote: bool = True,
                 logger: logging.Logger = logging_utilities.get_logger(),
                 transformed_data_context: Optional[TransformedDataContext] = None,
                 dataset: Optional[DatasetBase] = None,
                 elapsed_time: Optional[int] = None,
                 onnx_cvt: Optional[OnnxConverter] = None,
                 bypassing_model_explain: Optional[str] = None,
                 feature_configs: Optional[Dict[str, Any]] = None,
                 working_dir: Optional[str] = None) -> FitOutput:
    """
    Run a single iteration of an AutoML experiment.

    This method is automatically called during a regular AutoML
    experiment. fit_pipeline will evaluate the pipeline for this iteration, fit the pipeline with the provided data,
    calculate the various metrics relevant for this experiment, and log all the results in the specified AzureML Run's
    history.

    :param automl_pipeline: AutoMLPipeline object containing pipeline id and serialized script.
    :param automl_settings: User settings specified when creating AutoMLConfig.
    :param automl_run_context: child run context object
    :param fit_iteration_parameters_dict: Remaining data specific parameters for fit such as 'x_raw_column_names'.
    :param remote: flag whether this is a remote run or local run.
    :param logger: logger for info/error messages.
    :param transformed_data_context: TransformedDataContext, contains X,y and other transformed data.
    :param dataset: Containing X, y and other transformed data info.
    :param elapsed_time: How long this experiment has already taken in minutes
    :param onnx_cvt: The onnx converter.
    :param bypassing_model_explain: Should this function run model explainability for this pipeline or skip it.
    :param feature_configs: Feature configuration dictionary for different AutoML features.
    :param working_dir: Working directory to use for temporary files.
    :return: AzureML Run Properties for this child run
    """
    logging_utilities.log_system_info(logger, prefix_message="[RunId:{}]".format(automl_run_context.run_id))

    start_time = datetime.datetime.now()

    telemetry_logger = SystemResourceUsageTelemetryFactory.get_system_usage_telemetry(
        logger, interval=10)

    telemetry_logger.send_usage_telemetry_log(
        prefix_message="[RunId:{}][Starting fit_pipeline]".format(automl_run_context.run_id),
        is_sending_telemetry=automl_settings.send_telemetry
    )

    logging_utilities.log_system_info(logger, prefix_message="[RunId:{}]".format(automl_run_context.run_id))

    fit_output = FitOutput(automl_settings, automl_pipeline)

    logger.info("Using child run {0}".format(automl_run_context.run_id))

    if dataset is None and transformed_data_context is None and fit_iteration_parameters_dict is None:
        raise PipelineRunException(
            "Can't create a ClientDataset without transformed_data_context or fit_iteration_parameters_dict",
            target=PipelineRunException.PIPELINE_RUN_REQUIREMENTS,
            has_pii=False)

    resource_tracker = cpu_utilities.ResourceUsageTracker()

    try:
        with resource_tracker:
            if dataset is None:
                if transformed_data_context is not None:
                    logger.info("Generating ClientDataset from transformed data.")
                    dataset = training_utilities.init_client_dataset(transformed_data_context=transformed_data_context,
                                                                     cache_store=transformed_data_context.cache_store,
                                                                     automl_settings=automl_settings,
                                                                     remote=remote,
                                                                     keep_in_memory=False)

                else:
                    logger.info("Generating ClientDataset from fit iteration params dictionary.")
                    dataset = training_utilities.init_client_dataset_from_fit_iteration_params(
                        fit_iteration_parameters_dict=fit_iteration_parameters_dict,
                        automl_settings=automl_settings,
                        remote=remote,
                        keep_in_memory=False
                    )

            assert dataset is not None, "Can't continue without a dataset object"

            telemetry_logger.send_usage_telemetry_log(
                prefix_message="[RunId:{}][Before executing pipeline]".format(automl_run_context.run_id),
                is_sending_telemetry=automl_settings.send_telemetry
            )

            try:
                iteration_timeout_min = _check_iteration_time(
                    automl_settings,
                    FitPipelineComponentName.PREPRARE_DATA,
                    start_time,
                    logger,
                    automl_pipeline.is_ensemble_pipeline,
                    elapsed_time
                )

                pipeline_run_output = pipeline_run_helper.run_pipeline(automl_settings,
                                                                       automl_pipeline,
                                                                       automl_run_context,
                                                                       iteration_timeout_min,
                                                                       dataset,
                                                                       logger,
                                                                       remote)
                fit_output.record_pipeline_results(pipeline_run_output)
            except AutoMLException as ae:
                fit_output.add_error('fit', ae)
                raise
            except Exception as e:
                fit_output.add_error('fit', e)
                raise PipelineRunException.from_exception(e=e).with_generic_msg(
                    "Training child iteration failed for unexpected reason.")

            # Check the result after the fit step.
            # If the primary metric is not available, an exception will be raised.
            _check_fit_output_result(fit_output)

            telemetry_logger.send_usage_telemetry_log(
                prefix_message="[RunId:{}][After executing pipeline]".format(
                    automl_run_context.run_id),
                is_sending_telemetry=automl_settings.send_telemetry
            )

            logger.info("Pipeline execution finished with a score of {0}".format(fit_output.score))
            logger.info("Start logging metrics for child run.")
            with logging_utilities.log_activity(logger,
                                                activity_name=constants.TelemetryConstants.METRIC_AND_SAVE_MODEL_NAME,
                                                custom_dimensions={'run_id': automl_run_context.run_id}):
                with automl_run_context.get_run() as run:

                    strs_to_save = {}

                    # log all dependencies
                    all_dependencies = package_utilities._all_dependencies()
                    # TODO Change to log only azureml packages
                    # logger.info("All versions str:\n{}".format(json.dumps(all_dependencies)))

                    # save versions to artifacts
                    strs_to_save[constants.DEPENDENCIES_PATH] = json.dumps(all_dependencies, indent=4)

                    # save conda environment file into artifacts
                    is_text_dnn = hasattr(fit_output.fitted_pipeline, 'steps') and any(
                        [getattr(step[1], "_is_text_dnn", False) for step in fit_output.fitted_pipeline.steps])

                    try:
                        strs_to_save[constants.CONDA_ENV_FILE_PATH] = inference._create_conda_env_file(
                            include_dnn_packages=is_text_dnn
                        )
                    except Exception:
                        logger.warning("Failed to create conda environment file. ")

                    # save scoring file into artifacts
                    try:
                        model_name = None
                        if dataset.get_raw_data_type() is not None or automl_settings.enable_streaming:
                            # Models trained with streaming (i.e. Dataflow) can only infer on a pandas Dataframe
                            if_pandas_type = (automl_settings.enable_streaming or
                                              dataset.get_raw_data_type() == inference.PandasParameterType)
                            scoring_file_str, model_name = inference._get_scoring_file(
                                if_pandas_type=if_pandas_type,
                                input_sample_str=dataset._get_raw_data_snapshot_str(),
                                automl_run_id="{}".format(run.id),
                                is_forecasting=automl_settings.is_timeseries)
                            strs_to_save[constants.SCORING_FILE_PATH] = scoring_file_str
                        else:
                            logger.warning("Failed to score inference file: dataset's raw_data_type is not set.")
                    except Exception:
                        logger.warning("Failed to score inference file.")

                    # Visualization for streaming currently not supported
                    if not automl_settings.enable_streaming:
                        # save the graph json (the graph can be an empty dict)
                        graph_json_dict = _transform_graph(fit_output.fitted_pipeline)  # type: Any
                        strs_to_save['pipeline_graph.json'] = json.dumps(graph_json_dict, indent=4)

                    # Upload files
                    models_to_upload = {constants.MODEL_PATH: fit_output.fitted_pipeline}
                    automl_run_context.batch_save_artifacts(working_dir, strs_to_save, models_to_upload)

                    # save artifact ids as properties
                    properties_to_add = {inference.AutoMLInferenceArtifactIDs.CondaEnvDataLocation:
                                         automl_run_context._get_artifact_id(constants.CONDA_ENV_FILE_PATH),
                                         inference.AutoMLInferenceArtifactIDs.ModelDataLocation:
                                         automl_run_context._get_artifact_id(constants.MODEL_PATH),
                                         inference.AutoMLInferenceArtifactIDs.PipelineGraphVersion: '1.0.0',
                                         ModelExpSupportStr: str(training_utilities._get_model_exp_property(run,
                                                                                                            logger))
                                         }

                    if model_name:
                        properties_to_add.update({inference.AutoMLInferenceArtifactIDs.ScoringDataLocation:
                                                  automl_run_context._get_artifact_id(constants.SCORING_FILE_PATH),
                                                  inference.AutoMLInferenceArtifactIDs.ModelName: model_name})
                    run.add_properties(properties_to_add)

                    if onnx_cvt is not None and automl_settings.enable_onnx_compatible_models:
                        # Convert to ONNX if user indicates using ONNX compatible models,
                        # after we got this valid fitted_pipeline.
                        # Ingect the exp name, run id data into the onnx model.
                        onnx_mdl_name = 'AutoML_ONNX_Model_[{}]'.format(run.id)
                        exp_name = ''
                        if hasattr(run, 'experiment') and run.experiment is not None and \
                                hasattr(run.experiment, 'name'):
                            exp_name = run.experiment.name
                        onnx_mdl_desc = {
                            'AutoMLSDKVer': onnx_cvt.producer_version,
                            'ExperimentName': exp_name,
                            'RunId': run.id,
                            'PipeId': automl_pipeline.pipeline_id
                        }
                        telemetry_logger.send_usage_telemetry_log(
                            prefix_message="[RunId:{}][Start ONNX Convert in fit pipeline]".format(
                                automl_run_context.run_id),
                            is_sending_telemetry=automl_settings.send_telemetry
                        )
                        with logging_utilities.log_activity(logger,
                                                            activity_name=constants.TelemetryConstants.ONNX_CONVERSION,
                                                            custom_dimensions={'run_id': automl_run_context.run_id}):
                            onnx_model, featurizer_onnx_model, estimator_onnx_model, _ = \
                                onnx_cvt.convert(raw_model=fit_output.fitted_pipeline,
                                                 model_name=onnx_mdl_name,
                                                 model_desc=onnx_mdl_desc)
                        telemetry_logger.send_usage_telemetry_log(
                            prefix_message="[RunId:{}][End ONNX Convert in fit pipeline]".format(
                                automl_run_context.run_id),
                            is_sending_telemetry=automl_settings.send_telemetry
                        )
                        # If the converted onnx model is valid, save the ONNX model.
                        if onnx_model is not None:
                            automl_run_context.save_onnx_model_output(onnx_model,
                                                                      constants.MODEL_PATH_ONNX,
                                                                      working_dir)
                            fit_output.set_onnx_model(onnx_model)
                            onnx_resource = onnx_cvt.get_converted_onnx_model_resource()
                            fit_output.set_onnx_model_resource(onnx_resource)
                            if onnx_resource:
                                automl_run_context.save_onnx_model_resource(
                                    onnx_resource, constants.MODEL_RESOURCE_PATH_ONNX, working_dir)
                        if automl_settings.enable_split_onnx_featurizer_estimator_models:
                            # Save the splited onnx models.
                            if featurizer_onnx_model is not None:
                                automl_run_context.save_onnx_model_output(featurizer_onnx_model,
                                                                          OnnxConvertConstants.FeaturizerOnnxModelPath,
                                                                          working_dir)
                                fit_output.set_onnx_featurizer_model(featurizer_onnx_model)
                            if estimator_onnx_model is not None:
                                automl_run_context.save_onnx_model_output(estimator_onnx_model,
                                                                          OnnxConvertConstants.EstimatorOnnxModelPath,
                                                                          working_dir)
                                fit_output.set_onnx_estimator_model(estimator_onnx_model)

                    need_CV_trained_models = automl_settings.enable_ensembling or \
                        (hasattr(automl_settings, "enable_stack_ensembling") and
                         automl_settings.enable_stack_ensembling)
                    if need_CV_trained_models and \
                            fit_output.fitted_pipelines_train != constants.Defaults.INVALID_PIPELINE_OBJECT:
                        # we need to persist the partially trained fitted models as well
                        # they will be used for computing the scores during ensemble hill climbing
                        automl_run_context.save_model_output(
                            fit_output.fitted_pipelines_train, constants.MODEL_PATH_TRAIN, working_dir)

                    _log_metrics(run, fit_output.scores, logger)
                    _log_metrics_info(fit_output.scores, logger, pipeline_id=fit_output.pipeline_id,
                                      run_id=automl_run_context.run_id)

                    # Mark the run as completed, with a retry
                    _mark_run_as_complete(run, automl_run_context.run_id, logger)

                    # check to see if model_explainability set or not
                    remaining_time = _check_iteration_time(
                        automl_settings, FitPipelineComponentName.COMPLETE_RUN, start_time,
                        logger, automl_pipeline.is_ensemble_pipeline, elapsed_time,
                        raise_exception=False
                    )
                    if automl_settings.model_explainability:
                        if bypassing_model_explain is None:
                            if automl_settings.iteration_timeout_minutes is None or remaining_time is None or \
                                    remaining_time > automl_settings.iteration_timeout_minutes / 2:
                                telemetry_logger.send_usage_telemetry_log(
                                    prefix_message="[RunId:{}][Start model explain in fit pipeline]".format(
                                        automl_run_context.run_id),
                                    is_sending_telemetry=automl_settings.send_telemetry
                                )
                                try:
                                    with dataset.open_dataset():
                                        from azureml.train.automl.runtime.automl_explain_utilities import \
                                            _automl_auto_mode_explain_model
                                        _automl_auto_mode_explain_model(
                                            run, dataset, automl_settings,
                                            logger, fit_output.fitted_pipeline,
                                            model_exp_feature_config=cast(Dict[str, Any], feature_configs).get(
                                                'model_explainability'))
                                except Exception as e:
                                    fit_output.add_error('model_explanation', e, is_critical=False)
                                    logging_utilities.log_traceback(e, logger, is_critical=False)
                                    logger.warning(
                                        "[RunId:{}]Failed model explanation in fit pipeline.".format(run.id)
                                    )
                                telemetry_logger.send_usage_telemetry_log(
                                    prefix_message="[RunId:{}][End model explain in fit pipeline]".format(
                                        automl_run_context.run_id),
                                    is_sending_telemetry=automl_settings.send_telemetry
                                )
                            else:
                                # model_explain is enabled but not have enought time.
                                logger.warning("Remaining time is not enough for model explanation.")
                                print("Remaining time is not enough for model explanation. "
                                      "Please use the workflow described at " + ModelExpGithubNBLink)
                        else:
                            logger.info("Bypassing model explanations as the explanations for the best run "
                                        "will be performed during training")
    except Exception as e:
        logging_utilities.log_traceback(e, logger)
        if 'fit' not in fit_output.errors:
            fit_output.add_error('overall', e)
        with automl_run_context.get_run() as run:
            run.fail(error_details=e, error_code=utilities.get_error_code(e))
    except KeyboardInterrupt:
        with automl_run_context.get_run() as run:
            run.fail(error_details=UserException('User cancelled the run'), error_code=ErrorTypes.User)
    finally:
        # TODO: remove once backend can handle nulls
        fit_output_sanitized = fit_output.get_sanitized_output_dict()

        with automl_run_context.get_run() as run:
            run.set_tags(fit_output_sanitized)
            # TODO: move to tags once JOS is updated
            # Check to see if any property already exists, and exclude if already present
            fit_output_sanitized.update({
                'dependencies_versions': json.dumps(package_utilities.get_sdk_dependencies())
            })

            # Add v2 metrics to properties
            fit_output_sanitized.update({
                'num_cores': cpu_utilities.get_cpu_physical_core_count(),
                'peak_memory_usage': resource_tracker.peak_mem_usage,
                'vm_configuration': cpu_utilities.get_cpu_name(),
                'core_hours': resource_tracker.total_cpu_time / 3600
            })

            existing_properties = run.get_properties()
            run.add_properties({
                k: str(fit_output_sanitized[k])
                for k in fit_output_sanitized
                if k not in existing_properties
            })

        telemetry_logger.send_usage_telemetry_log(
            prefix_message="[RunId:{}][End fit_pipeline]".format(automl_run_context.run_id),
            is_sending_telemetry=automl_settings.send_telemetry
        )
        telemetry_logger.stop()
        return fit_output


def _mark_run_as_complete(run: RunType, run_id: str, logger: logging.Logger) -> None:
    logger.info("Marking the Run {} as Completed.".format(run_id))

    @retry_with_backoff(retries=3, delay=5, backoff=2, logger=logger)
    def _complete():
        run.complete()
        # If the run is not marked as Completed, (e.g. Network problems) raise an exception and retry
        # Note that get_status() will not result in an additional network call if the status was updated in the
        # previous call to complete(), in which case the cached result is returned
        current_status = run.get_status()
        if current_status != 'Completed':
            error_msg = "Failed to mark the Run {} as Completed. Last known status: {}".format(run_id, current_status)
            raise RunStateChangeException(error_msg, target="MarkRunComplete", has_pii=False)

    _complete()


def _extract_data(fit_iteration_parameters_dict=None, transformed_data_context=None):
    # if transformed_data_context is not None, then use data in transformed_data_context. If None, then to
    # use data in fit_iteration_parameters_dict.
    if transformed_data_context is not None:
        X = transformed_data_context.X
        y = transformed_data_context.y
        X_valid = transformed_data_context.X_valid
        y_valid = transformed_data_context.y_valid
        sample_weight = transformed_data_context.sample_weight
        sample_weight_valid = transformed_data_context.sample_weight_valid
        cv_splits_indices = transformed_data_context.cv_splits_indices
        x_raw_column_names = transformed_data_context.x_raw_column_names
    elif fit_iteration_parameters_dict is not None:
        X = fit_iteration_parameters_dict.get('X')
        y = fit_iteration_parameters_dict.get('y')
        X_valid = fit_iteration_parameters_dict.get('X_valid')
        y_valid = fit_iteration_parameters_dict.get('y_valid')
        sample_weight = fit_iteration_parameters_dict.get('sample_weight')
        sample_weight_valid = fit_iteration_parameters_dict.get('sample_weight_valid')
        cv_splits_indices = fit_iteration_parameters_dict.get('cv_splits_indices')
        x_raw_column_names = fit_iteration_parameters_dict.get('x_raw_column_names')
    else:
        raise PipelineRunException(
            "Either a transformed data context or parameters dict is required to extract data.",
            target=PipelineRunException.PIPELINE_RUN_REQUIREMENTS,
            has_pii=False)
    return X, y, X_valid, y_valid, sample_weight, sample_weight_valid, cv_splits_indices, x_raw_column_names


# helper function to create edges
def edge_helper(source_node_id, source_node_name, source_name, target_name,
                dst_node_id, dst_node_name, graph_json_dict):
    edge = {}
    edge['source_node_id'] = source_node_id
    edge['source_node_name'] = source_node_name
    edge['source_name'] = source_name
    edge['target_name'] = target_name
    edge['dst_node_id'] = dst_node_id
    edge['dst_node_name'] = dst_node_name
    graph_json_dict['edges'].append(edge)


def _transform_graph(fitted_model):
    feature_summary_dict = defaultdict()  # type: Any

    # check preprocess is set to True by the user
    is_preprocess = False
    for step in fitted_model.steps:
        if step[0] == 'datatransformer' or step[0] == 'timeseriestransformer':
            is_preprocess = True
            break
    if not is_preprocess:
        # TODO returned the datasource node
        # along with the fitted_pipeline nodes (scaler + final estimator)
        return {}

    model_lst = []
    # append schema_name and version to differenciate different json files in the future
    # initialize the keys
    complete_graph_json_dict = defaultdict()  # type: Any
    complete_graph_json_dict["schema_name"] = "pipeline_graph"
    complete_graph_json_dict["schema_version"] = "1.0.0"
    graph_json_dict = defaultdict()  # type: Any
    graph_json_dict['module_nodes'] = {}
    graph_json_dict['edges'] = []
    graph_json_dict['child_runs'] = []

    for step in fitted_model.steps:
        if step[0] == 'datatransformer' or step[0] == 'timeseriestransformer':
            total_col = 0
            for summary in step[1].get_featurization_summary():
                total_col += 1
                feature_count = str(summary['EngineeredFeatureCount'])
                if summary['TypeDetected'] in feature_summary_dict:
                    tf = ' '.join(summary['Transformations'])
                    feature_summary_dict[summary['TypeDetected']][tf].append(summary['RawFeatureName'])
                    feature_summary_dict[summary['TypeDetected']]['EngineeredFeatureCount'] = [feature_count]
                else:
                    transformation_col_dict = defaultdict(list)  # type: Any
                    tf = ' '.join(summary['Transformations'])
                    transformation_col_dict[tf].append(summary['RawFeatureName'])
                    transformation_col_dict['EngineeredFeatureCount'] = [feature_count]
                    feature_summary_dict[summary['TypeDetected']] = transformation_col_dict

        else:
            md_id = uuid.uuid4().hex[:8]
            model = {'node_id': md_id, 'model_name': step[0]}
            graph_json_dict['module_nodes'][md_id] = {
                'node_id': md_id,
                'name': step[0],
                'status': 'model'
            }
            model_lst.append(model)

    name = 'data_source - ' + str(total_col) + " col"
    src_id = uuid.uuid4().hex[:8]
    graph_json_dict['datasource_nodes'] = {src_id: {'node_id': src_id, 'name': name}}

    # Each run will have a graph_json_dict that contains the information of data_source_nodes,
    # module_nodes, edges

    for i in range(len(model_lst) - 1):
        edge_helper(model_lst[i]['node_id'], "", "",
                    "", model_lst[i + 1]['node_id'], "",
                    graph_json_dict)

    for i, data_type in enumerate(feature_summary_dict):
        ds_id = uuid.uuid4().hex[:8]
        graph_json_dict['module_nodes'][ds_id] = {
            'node_id': ds_id,
            'name': data_type,
            'status': 'dataType'
        }
        # connect the data source to all the data types, display incoming col number and outgoing col number
        # calculate number of cols that go into every data type
        num_col_per_type = 0
        for key, val in feature_summary_dict[data_type].items():
            if key != 'EngineeredFeatureCount':
                num_col_per_type += len(val)
        target_name = str(num_col_per_type) + " col"
        edge_helper(src_id, 'data_source', "", target_name, ds_id, data_type, graph_json_dict)
        # connect each operation with the model, data type and chain up the models
        for key, val in feature_summary_dict[data_type].items():
            operation_id_lst = []
            if key != '' and key != 'EngineeredFeatureCount':
                operation_lst = key.split()
                for j, op in enumerate(operation_lst):
                    op_id = uuid.uuid4().hex[:8]
                    operation_dict = {'node_id': op_id, 'op_name': op}
                    operation_id_lst.append(operation_dict)
                    graph_json_dict['module_nodes'][op_id] = {
                        'node_id': op_id,
                        'name': op,
                        'status': 'operation'
                    }
                    # chain up the operation
                    # first operation, connect with feature_summary_dict type nodes
                    if j == 0:
                        edge_helper(ds_id, "", "", "", op_id, "", graph_json_dict)
                    # last operation connect with model node
                    if j == len(operation_lst) - 1:
                        if (len(model_lst) > 0):
                            output_name = feature_summary_dict[data_type]['EngineeredFeatureCount'][0] + " col"
                            edge_helper(op_id, "", "", output_name, model_lst[0]['node_id'],
                                        "", graph_json_dict)
                    # inbetween operations
                    if j > 0:
                        edge_helper(operation_id_lst[j - 1]['node_id'], "",
                                    "", "", op_id, "", graph_json_dict)

    complete_graph_json_dict['data'] = graph_json_dict
    return complete_graph_json_dict


def _check_iteration_time(automl_settings: AutoMLBaseSettings,
                          component_name: str,
                          start_time: datetime.datetime,
                          logger: logging.Logger,
                          is_ensemble_pipeline: bool = False,
                          elapsed_time: Optional[int] = None,
                          raise_exception: Optional[bool] = True) -> Optional[int]:
    # Check Time Spent So Far for the Component
    running_min = (datetime.datetime.now() - start_time).total_seconds() / 60.
    logger.info("Component {} finished after {} minutes.".format(component_name, running_min))

    # Check Iteration Time
    iteration_timeout_min = automl_settings.iteration_timeout_minutes
    if iteration_timeout_min is not None:
        iteration_timeout_min = math.ceil(iteration_timeout_min - running_min)
        if iteration_timeout_min <= 0 and raise_exception:
            raise TimeoutException(
                "Iteration ran for {min} minutes. {err_msg}".format(
                    min=math.floor(running_min),
                    err_msg=constants.ClientErrors.EXCEEDED_ITERATION_TIMEOUT_MINUTES), has_pii=False)

    # Check Experiment Time
    # If experiment is already over and in Voting/Stack Ensemble, then skip this check
    if not is_ensemble_pipeline:
        if automl_settings.experiment_timeout_minutes is not None and elapsed_time is not None:
            remaining_experiment_min = math.ceil(
                int(automl_settings.experiment_timeout_minutes) - elapsed_time - running_min
            )
            if remaining_experiment_min <= 0 and raise_exception:
                raise TimeoutException(
                    "Experiment ran for {min} minutes. {err_msg}".format(
                        min=math.floor(elapsed_time + running_min),
                        err_msg=constants.ClientErrors.EXCEEDED_EXPERIMENT_TIMEOUT_MINUTES), has_pii=False)
            # Update iteration timeout if remaining experiment min is smaller
            if iteration_timeout_min is None or remaining_experiment_min < iteration_timeout_min:
                iteration_timeout_min = remaining_experiment_min

    return iteration_timeout_min


def _log_metrics_info(scores, logger, pipeline_id=None, run_id=None):
    reduced_scores = _get_reduced_scores(scores)
    log_fmt = "run_id:{}, pipeline_id:{},The following metrics have been logged for the child run: {}."
    logger.info(log_fmt.format(run_id, pipeline_id, reduced_scores))


def _get_reduced_scores(scores):
    reduced_scores = dict()
    for name, score in scores.items():
        is_score_NoneOrNumeric = score is None or isinstance(score, int) or isinstance(score, float)
        if name in constants.Metric.SCALAR_FULL_SET or is_score_NoneOrNumeric:
            reduced_scores[name] = score
        else:
            reduced_scores[name] = type(score)
    return reduced_scores


def _log_metrics(child_run, scores, logger):
    for name, score in scores.items():
        try:
            if name in constants.Metric.SCALAR_FULL_SET:
                child_run.log(name, score)
            elif name == constants.Metric.AccuracyTable:
                child_run.log_accuracy_table(name, score)
            elif name == constants.Metric.ConfusionMatrix:
                child_run.log_confusion_matrix(name, score)
            elif name == constants.Metric.Residuals:
                child_run.log_residuals(name, score)
            elif name == constants.Metric.PredictedTrue:
                child_run.log_predictions(name, score)
            # TODO support these schemas before logging them:
            # elif name == constants.Metric.ForecastResiduals:
            #     child_run.log_residuals(name, score)
            # elif name == constants.Metric.ForecastMAPE:
            #     child_run.log_mape(name, score)
            else:
                logger.warning(
                    "Did not recognize metric: {}. Will not log.".format(name))
        except Exception:
            logger.warning(
                "Failed to log the metric {} with value {}.".format(name, score))


def _check_fit_output_result(fit_output: FitOutput) -> None:
    """Check the run results."""
    if fit_output.score is None or np.isnan(fit_output.score) \
            or fit_output.score == constants.Defaults.DEFAULT_PIPELINE_SCORE:
        raise PipelineRunException(
            "Primary metric {} is not available.".format(fit_output.primary_metric),
            target=PipelineRunException.PIPELINE_OUTPUT).with_generic_msg("Primary metric is not available.")

    if fit_output.fitted_pipeline == constants.Defaults.INVALID_PIPELINE_OBJECT:
        raise PipelineRunException(
            "Fitted model is empty.", target=PipelineRunException.PIPELINE_OUTPUT, has_pii=False)
