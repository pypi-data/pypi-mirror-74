import os
import warnings

warnings.filterwarnings('ignore')

from scarches.zenodo.file import download_file
from scarches.zenodo.zip import unzip_model_directory

import numpy as np
from typing import Union

from keras import backend as K

from . import metrics
from . import models
from . import plotting as pl
from . import utils
from . import data
from . import annotation as ann
from . import datasets

__author__ = ', '.join([
    'Mohsen Naghipourfar',
    'Mohammad Lotfollahi',
    'Matin Khajavi',
])

__email__ = ', '.join([
    'naghipourfar@ce.sharif.edu',
    'mohammad.lotfollahi@helmholtz-muenchen.de',
])


def operate(network: Union[models.scArches, models.CVAE, models.scArchesNB, models.scArchesZINB, models.scANet],
            new_task_name: str,
            new_conditions: Union[list, str],
            init: str = 'Xavier',
            version='scArches',
            remove_dropout: bool = True,
            print_summary: bool = False,
            new_training_kwargs: dict = {},
            new_network_kwargs: dict = {},
            ) -> Union[models.scArches, models.CVAE, models.scArchesNB, models.scArchesZINB]:
    """Performs architecture surgery on the pre-trained `network`.

        Parameters
        ----------
        network: :class:`~scarches.models.*`
            scArches Network object.
        new_task_name: str
            Name of the query task you want fine-tune the model on.
        new_conditions: list or str
            list of new conditions (studies or domains) in the query dataset. If only one condition exists in
            query dataset, Can pass a string to this argument.
        init: str
            Method used for initializing new weights of the new model.
        version: str
            Version of scArches you want to use after performing surgery. Can be one of `scArches`, `scArches v1` and `scArches v2`.
        remove_dropout: bool
            Whether to remove the dropout layers.
        print_summary: bool
            Whether to print the summary of the new model.
        new_training_kwargs: dict
            Dictionary containing new training hyper-parameters used to compile and train model with.
        new_network_kwargs: dict
            Dictionary containing new network configuration used to create the new model.

        Returns
        -------
        new_network: :class:`~scarches.models.*`
            object of the new model.
    """
    version = version.lower()
    if version == 'scarches':
        freeze = True
        freeze_expression_input = True
    elif version == 'scarches v1':
        freeze = True
        freeze_expression_input = False
    elif version == 'scarches v2':
        freeze = False
        freeze_expression_input = False
    else:
        raise Exception("Invalid scArches version. Must be one of \'scArches\', \'scArches v1\', or \'scArches v2\'.")

    if isinstance(new_conditions, str):
        new_conditions = [new_conditions]

    n_new_conditions = len(new_conditions)
    network.update_kwargs()

    network_kwargs = network.network_kwargs
    training_kwargs = network.training_kwargs

    network_kwargs['conditions'] += sorted(new_conditions)

    if network_kwargs.get("mmd_computation_method", None):
        network_kwargs['mmd_computation_method'] = "general"

    network_kwargs['freeze_expression_input'] = freeze_expression_input

    training_kwargs['model_path'] = network.model_path.split(network.task_name)[0]
    training_kwargs['gamma'] = 0.0

    if remove_dropout:
        network_kwargs['dropout_rate'] = 0.0

    for key in new_training_kwargs.keys():
        training_kwargs[key] = new_training_kwargs[key]

    for key in new_network_kwargs.keys():
        network_kwargs[key] = new_network_kwargs[key]

    # Instantiate new model with old parameters except `n_conditions`
    new_network = type(network)(task_name=new_task_name, **network_kwargs, **training_kwargs,
                                print_summary=False)

    # Get Previous Model's weights
    used_bias_encoder = network.cvae_model.get_layer("encoder").get_layer("first_layer").use_bias
    used_bias_decoder = network.cvae_model.get_layer("decoder").get_layer("first_layer").use_bias

    prev_weights = {}
    for w in network.cvae_model.get_layer("encoder").get_layer("first_layer").weights:
        if "condition_kernel" in w.name:
            prev_weights['c'] = K.batch_get_value(w)
        elif "expression_kernel" in w.name:
            prev_weights['i'] = K.batch_get_value(w)
        else:
            prev_weights['b'] = K.batch_get_value(w)

    if used_bias_encoder:
        prev_input_weights_encoder, prev_condition_weights_encoder, prev_biases_encoder = \
            prev_weights['i'], prev_weights['c'], prev_weights['b']

    else:
        prev_input_weights_encoder, prev_condition_weights_encoder, prev_biases_encoder = \
            prev_weights['i'], prev_weights['c'], None

    prev_weights = {}
    for w in network.cvae_model.get_layer("decoder").get_layer("first_layer").weights:
        if "condition_kernel" in w.name:
            prev_weights['c'] = K.batch_get_value(w)
        elif "expression_kernel" in w.name:
            prev_weights['i'] = K.batch_get_value(w)
        else:
            prev_weights['b'] = K.batch_get_value(w)

    if used_bias_decoder:
        prev_latent_weights_decoder, prev_condition_weights_decoder, prev_biases_decoder = \
            prev_weights['i'], prev_weights['c'], prev_weights['b']
    else:
        prev_latent_weights_decoder, prev_condition_weights_decoder, prev_biases_decoder = \
            prev_weights['i'], prev_weights['c'], None

    # Modify the weights of 1st encoder & decoder layers
    if init == 'ones':
        to_be_added_weights_encoder_condition = np.ones(
            shape=(n_new_conditions, prev_condition_weights_encoder.shape[1]))
        to_be_added_weights_decoder_condition = np.ones(
            shape=(n_new_conditions, prev_condition_weights_decoder.shape[1]))
    elif init == "zeros":
        to_be_added_weights_encoder_condition = np.zeros(
            shape=(n_new_conditions, prev_condition_weights_encoder.shape[1]))
        to_be_added_weights_decoder_condition = np.zeros(
            shape=(n_new_conditions, prev_condition_weights_decoder.shape[1]))
    elif init == "Xavier":
        to_be_added_weights_encoder_condition = np.random.randn(n_new_conditions,
                                                                prev_condition_weights_encoder.shape[1]) * np.sqrt(
            2 / (prev_condition_weights_encoder.shape[0] + 1 + prev_condition_weights_encoder.shape[1]))
        to_be_added_weights_decoder_condition = np.random.randn(n_new_conditions,
                                                                prev_condition_weights_decoder.shape[1]) * np.sqrt(
            2 / (prev_condition_weights_decoder.shape[0] + 1 + prev_condition_weights_decoder.shape[1]))
    else:
        raise Exception("Invalid initialization for new weights")

    new_condition_weights_encoder = np.concatenate(
        [prev_condition_weights_encoder, to_be_added_weights_encoder_condition], axis=0)
    new_condition_weights_decoder = np.concatenate(
        [prev_condition_weights_decoder, to_be_added_weights_decoder_condition], axis=0)

    # Set new model's weights
    for w in new_network.cvae_model.get_layer("encoder").get_layer("first_layer").weights:
        if "condition_kernel" in w.name:
            K.set_value(w, new_condition_weights_encoder)
        elif "expression_kernel" in w.name:
            K.set_value(w, prev_input_weights_encoder)
        else:
            K.set_value(w, prev_biases_encoder)

    for w in new_network.cvae_model.get_layer("decoder").get_layer("first_layer").weights:
        if "condition_kernel" in w.name:
            K.set_value(w, new_condition_weights_decoder)
        elif "expression_kernel" in w.name:
            K.set_value(w, prev_latent_weights_decoder)
        else:
            K.set_value(w, prev_biases_decoder)

    # set weights of other parts of model
    for idx, encoder_layer in enumerate(new_network.encoder_model.layers):
        if encoder_layer.name != 'first_layer' and encoder_layer.get_weights() != []:
            encoder_layer.set_weights(network.encoder_model.layers[idx].get_weights())

    for idx, decoder_layer in enumerate(new_network.decoder_model.layers):
        if decoder_layer.name != 'first_layer' and decoder_layer.get_weights():
            decoder_layer.set_weights(network.decoder_model.layers[idx].get_weights())

    # Freeze old parts of cloned network
    if freeze:
        for encoder_layer in new_network.encoder_model.layers:
            if encoder_layer.name != 'first_layer':
                encoder_layer.trainable = False

        for decoder_layer in new_network.decoder_model.layers:
            if decoder_layer.name != 'first_layer':
                decoder_layer.trainable = False

        if isinstance(new_network, models.scANet):
            for layer in new_network.classifier_model.layers:
                layer.trainable = False

        new_network.compile_models()

    # Print summary of new network
    if print_summary:
        new_network.get_summary_of_networks()

    # Add new condition to new network condition encoder
    new_network.condition_encoder = network.condition_encoder
    for idx, new_condition in enumerate(new_conditions):
        new_network.condition_encoder[new_condition] = network.n_conditions + idx

    return new_network


def create_scArches_from_pretrained_task(path_or_link: str,
                                         prev_task_name: str,
                                         model_path: str,
                                         new_task: str,
                                         target_conditions: list,
                                         version: str = 'scArches',
                                         **kwargs,
                                         ):
    """Performs architecture surgery on the pre-trained `network`.

        Parameters
        ----------
        path_or_link: str
            Path to the zip file of pre-trained model or direct downloadable link.
        prev_task_name: str
            Name of the previous task name the model pre-trained on.
        model_path: str
            Path to save the new model and extract the pre-trained model.
        new_task: str
            Name of the query task you want to train the model on.
        target_conditions: list
            list of new conditions (studies or domains) in the query dataset.
        version: str
            Version of scArches you want to use after performing surgery. Can be one of `scArches`, `scArches v1` and `scArches v2`.

        Returns
        -------
        new_network: :class:`~scarches.models.*`
            object of the new model.
    """
    if not os.path.isdir(path_or_link):
        downloaded_path = os.path.join(model_path, prev_task_name + ".zip")
        downloaded_path = __download_pretrained_scArches(path_or_link, save_path=downloaded_path, make_dir=True)
    else:
        downloaded_path = path_or_link

    if os.path.exists(downloaded_path) and downloaded_path.endswith(".zip"):
        extract_dir = os.path.join(model_path, f"{prev_task_name}/")
        unzip_model_directory(downloaded_path, extract_dir=extract_dir)
    elif not os.path.isdir(downloaded_path):
        raise ValueError("`model_path` should be either path to downloaded zip file or scArches pre-trained directory")

    downloaded_files = os.listdir(extract_dir)
    for file in downloaded_files:
        if file.startswith("scArches") and file.endswith(".json"):
            config_filename = file

    config_path = os.path.join(extract_dir, config_filename)
    pre_trained_scArches = models.scArches.from_config(config_path, new_params=kwargs, construct=True, compile=True)

    pre_trained_scArches.model_path = os.path.join(model_path, f"{prev_task_name}/")
    pre_trained_scArches.task_name = prev_task_name

    pre_trained_scArches.restore_model_weights(compile=True)

    scArches = operate(pre_trained_scArches,
                    new_conditions=target_conditions,
                    new_task_name=new_task,
                    init='Xavier',
                    version=version,
                    remove_dropout=False,
                    print_summary=False,
                    )

    scArches.model_path = os.path.join(model_path, f"{new_task}/")

    return scArches


def __download_pretrained_scArches(download_link: str,
                                save_path: str = './',
                                make_dir=False):
    if download_link != '':
        file_path, response = download_file(download_link, save_path, make_dir)
        return file_path
    else:
        raise Exception("Download link does not exist for the specified task")
