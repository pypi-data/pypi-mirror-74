import os

import anndata
import keras
import numpy as np
from keras.callbacks import EarlyStopping, History, ReduceLROnPlateau, LambdaCallback
from keras.layers import Dense, BatchNormalization, Dropout, Lambda
from keras.layers.advanced_activations import LeakyReLU
from keras.models import Model
from keras.utils import to_categorical
from keras.utils.generic_utils import get_custom_objects
from scipy import sparse
from sklearn.metrics import classification_report, confusion_matrix

from scarches.models import CVAE
from scarches.models._activations import ACTIVATIONS
from scarches.models._callbacks import ScoreCallback
from scarches.models._layers import LAYERS
from scarches.models._losses import LOSSES
from scarches.models._utils import print_progress
from scarches.utils import label_encoder, remove_sparsity, train_test_split


class scANet(CVAE):
    """scNet class. This class contains the implementation of scNet network.

        Parameters
        ----------
        x_dimension: int
            number of gene expression space dimensions.
        n_conditions: int
            number of conditions used for one-hot encoding.
        n_classes: int
            number of cell types used to build a classifier on the top of scNet
        z_dimension: int
            number of latent space dimensions.
        task_name: str
            name of the task.

        kwargs:
            `learning_rate`: float
                scNet's optimizer's step size (learning rate).
            `alpha`: float
                KL divergence coefficient in the loss function.
            `beta`: float
                MMD loss coefficient in the loss function.
            `eta`: float
                Reconstruction coefficient in the loss function.
            `dropout_rate`: float
                dropout rate for Dropout layers in scNet's architecture.
            `model_path`: str
                path to save model config and its weights.
            `clip_value`: float
                Optimizer's clip value used for clipping the computed gradients.
            `output_activation`: str
                Output activation of scNet which Depends on the range of data.
            `use_batchnorm`: bool
                Whether use batch normalization in scNet or not.
            `architecture`: list
                Architecture of scNet. Must be a list of integers.
            `gene_names`: list
                names of genes fed as scNet's input. Must be a list of strings.
    """

    def __init__(self, x_dimension, n_conditions, n_classes, task_name="unknown", z_dimension=100, **kwargs):
        self.beta = kwargs.pop('beta', 20.0)
        self.n_mmd_conditions = kwargs.pop("n_mmd_conditions", n_conditions)
        self.mmd_computation_method = kwargs.pop("mmd_computation_method", "general")
        self.n_classes = n_classes
        self.gamma = kwargs.pop("gamma", 1.0)
        self.cell_type_encoder = kwargs.get("cell_type_encoder", None)

        kwargs.update({"model_name": "cvae_mlp", "class_name": "scANet"})

        super().__init__(x_dimension, n_conditions, task_name, z_dimension, **kwargs)

    def update_kwargs(self):
        super().update_kwargs()
        new_network_kwargs = {
            "n_classes": self.n_classes,
            "cell_type_encoder": self.cell_type_encoder
        }

        if self.loss_fn in ['nb', 'zinb']:
            new_network_kwargs.update({})
            new_training_kwargs = {
                "scale_factor": self.scale_factor,
                "ridge": self.ridge,
            }
        else:
            new_network_kwargs.update({
                "n_mmd_conditions": self.n_mmd_conditions,
                "mmd_computation_method": self.mmd_computation_method,
            })
            new_training_kwargs = {
                "beta": self.beta
            }

        self.network_kwargs.update(new_network_kwargs)
        self.training_kwargs.update(new_training_kwargs)

        self.training_kwargs.update({
            "gamma": self.gamma,
        })

    @classmethod
    def from_config(cls, config_path, new_params=None, compile=True, construct=True):
        """create class object from exsiting class' config file.

        Parameters
        ----------
        config_path: str
            Path to scNet's config json file.
        new_params: dict, optional
            Python dict of parameters which you wanted to assign new values to them.
        compile: bool
            ``True`` by default. if ``True``, will compile scNet's model after creating an instance.
        construct: bool
            ``True`` by default. if ``True``, will construct scNet's model after creating an instance.
        """
        import json
        with open(config_path, 'rb') as f:
            class_config = json.load(f)

        class_config['construct_model'] = construct
        class_config['compile_model'] = compile

        if new_params:
            class_config.update(new_params)

        return cls(**class_config)

    def _output_decoder(self, h):
        h = Dense(self.x_dim, activation=None,
                  kernel_initializer=self.init_w,
                  use_bias=True)(h)
        h = ACTIVATIONS[self.output_activation](h)
        model_inputs = [self.z, self.decoder_labels]
        model_outputs = [h]

        return model_inputs, model_outputs

    def _decoder(self, name="decoder"):
        for idx, n_neuron in enumerate(self.architecture[::-1]):
            if idx == 0:
                h = LAYERS['FirstLayer'](n_neuron, kernel_initializer=self.init_w,
                                         use_bias=False, name="first_layer", freeze=self.freeze_expression_input)(
                    [self.z, self.decoder_labels])
            else:
                h = Dense(n_neuron, kernel_initializer=self.init_w,
                          use_bias=False)(h)
            if self.use_batchnorm:
                h = BatchNormalization()(h)
            h = LeakyReLU()(h)
            if idx == 0:
                h_mmd = h
            h = Dropout(self.dr_rate)(h)
        logits = Dense(self.n_classes, kernel_initializer=self.init_w, use_bias=False, activation='softmax')(h_mmd)
        model_inputs, model_outputs = self._output_decoder(h)
        model = Model(inputs=model_inputs, outputs=model_outputs, name=name)
        mmd_model = Model(inputs=model_inputs, outputs=h_mmd, name='mmd_decoder')
        classifier_model = Model(inputs=model_inputs, outputs=logits, name="classifier")
        return model, mmd_model, classifier_model

    def construct_network(self):
        """
            Constructs the whole scNet's network. It is step-by-step constructing the scNet network.
            First, It will construct the encoder part and get mu, log_var of
            latent space. Second, It will sample from the latent space to feed the
            decoder part in next step. Finally, It will reconstruct the data by
            constructing decoder part of scNet.
        """
        self.mu, self.log_var, self.encoder_model = self._encoder(name="encoder")
        self.decoder_model, self.decoder_mmd_model, self.classifier_model = self._decoder(name="decoder")

        inputs = [self.x, self.encoder_labels, self.decoder_labels]
        encoder_outputs = self.encoder_model(inputs[:2])[2]
        decoder_inputs = [encoder_outputs, self.decoder_labels]

        decoder_outputs = self.decoder_model(decoder_inputs)
        decoder_mmd_outputs = self.decoder_mmd_model(decoder_inputs)
        decoder_classifier_outputs = self.classifier_model(decoder_inputs)

        reconstruction_output = Lambda(lambda x: x, name="recon")(decoder_outputs)
        mmd_output = Lambda(lambda x: x, name="mmd")(decoder_mmd_outputs)
        classifier_output = Lambda(lambda x: x, name='class')(decoder_classifier_outputs)

        self.cvae_model = Model(inputs=inputs,
                                outputs=[reconstruction_output, mmd_output, classifier_output],
                                name="cvae")

        self.custom_objects = {'mean_activation': ACTIVATIONS['mean_activation'],
                               'disp_activation': ACTIVATIONS['disp_activation'],
                               'SliceLayer': LAYERS['SliceLayer'],
                               'ColwiseMultLayer': LAYERS['ColWiseMultLayer'],
                               'FirstLayer': LAYERS['FirstLayer']}

        get_custom_objects().update(self.custom_objects)
        print(f"{self.class_name}'s network has been successfully constructed!")

    def _calculate_loss(self):
        """
            Defines the loss function of scNet's network after constructing the whole
            network.
        """
        loss = LOSSES[self.loss_fn](self.mu, self.log_var, self.alpha, self.eta)
        mmd_loss = LOSSES['mmd'](self.n_mmd_conditions, self.beta)
        kl_loss = LOSSES['kl'](self.mu, self.log_var)
        recon_loss = LOSSES[f'{self.loss_fn}_recon']
        cce_loss = LOSSES['cce'](self.gamma)
        acc = LOSSES['acc']

        return loss, mmd_loss, kl_loss, recon_loss, cce_loss, acc

    def compile_models(self):
        """
            Compiles scNet network with the defined loss functions and
            Adam optimizer with its pre-defined hyper-parameters.
        """
        optimizer = keras.optimizers.Adam(lr=self.lr, clipvalue=self.clip_value, epsilon=self.epsilon)
        loss, mmd_loss, kl_loss, recon_loss, cce_loss, acc = self._calculate_loss()

        self.cvae_model.compile(optimizer=optimizer,
                                loss=[loss, mmd_loss, cce_loss],
                                metrics={"class": acc}
                                )

        print(f"{self.class_name}'s network has been successfully compiled!")

    def to_mmd_layer(self, adata, batch_key):
        """
            Map ``adata`` in to the MMD space. This function will feed data
            in ``mmd_model`` of scNet and compute the MMD space coordinates
            for each sample in data.

            Parameters
            ----------
            adata: :class:`~anndata.AnnData`
                Annotated data matrix to be mapped to MMD latent space.
                Please note that ``adata.X`` has to be in shape [n_obs, x_dimension]
            encoder_labels: :class:`~numpy.ndarray`
                :class:`~numpy.ndarray` of labels to be fed as scNet's encoder condition array.
            decoder_labels: :class:`~numpy.ndarray`
                :class:`~numpy.ndarray` of labels to be fed as scNet's decoder condition array.

            Returns
            -------
            adata_mmd: :class:`~anndata.AnnData`
                returns Annotated data containing MMD latent space encoding of ``adata``
        """
        adata = remove_sparsity(adata)

        encoder_labels, _ = label_encoder(adata, self.condition_encoder, batch_key)
        decoder_labels, _ = label_encoder(adata, self.condition_encoder, batch_key)

        encoder_labels = to_categorical(encoder_labels, num_classes=self.n_conditions)
        decoder_labels = to_categorical(decoder_labels, num_classes=self.n_conditions)

        cvae_inputs = [adata.X, encoder_labels, decoder_labels]

        mmd = self.cvae_model.predict(cvae_inputs)[1]
        mmd = np.nan_to_num(mmd, nan=0.0, posinf=0.0, neginf=0.0)

        adata_mmd = anndata.AnnData(X=mmd)
        adata_mmd.obs = adata.obs.copy(deep=True)

        return adata_mmd

    def get_latent(self, adata, batch_key, return_z=False):
        """ Transforms `adata` in latent space of scNet and returns the latent
        coordinates in the annotated (adata) format.

        Parameters
        ----------
        adata: :class:`~anndata.AnnData`
            Annotated dataset matrix in Primary space.
        batch_key: str
            Name of the column containing the study (batch) names for each sample.
        return_z: bool
            ``False`` by defaul. if ``True``, the output of bottleneck layer of network will be computed.

        Returns
        -------
        adata_pred: `~anndata.AnnData`
            Annotated data of transformed ``adata`` into latent space.
        """
        if set(self.gene_names).issubset(set(adata.var_names)):
            adata = adata[:, self.gene_names]
        else:
            raise Exception("set of gene names in train adata are inconsistent with scNet's gene_names")

        if self.beta == 0:
            return_z = True

        encoder_labels, _ = label_encoder(adata, self.condition_encoder, batch_key)
        encoder_labels = to_categorical(encoder_labels, num_classes=self.n_conditions)

        if return_z or self.beta == 0:
            return self.get_z_latent(adata, encoder_labels)
        else:
            return self.to_mmd_layer(adata, batch_key)

    def predict(self, adata, encoder_labels, decoder_labels):
        """Feeds ``adata`` to scNet and produces the reconstructed data.

            Parameters
            ----------
            adata: :class:`~anndata.AnnData`
                Annotated data matrix whether in primary space.
            encoder_labels: :class:`~numpy.ndarray`
                :class:`~numpy.ndarray` of labels to be fed as scNet's encoder condition array.
            decoder_labels: :class:`~numpy.ndarray`
                :class:`~numpy.ndarray` of labels to be fed as scNet's decoder condition array.

            Returns
            -------
            adata_pred: `~anndata.AnnData`
                Annotated data of predicted cells in primary space.
        """
        adata = remove_sparsity(adata)

        encoder_labels = to_categorical(encoder_labels, num_classes=self.n_conditions)
        decoder_labels = to_categorical(decoder_labels, num_classes=self.n_conditions)

        x_hat = self.cvae_model.predict([adata.X, encoder_labels, decoder_labels])[0]

        adata_pred = anndata.AnnData(X=x_hat)
        adata_pred.obs = adata.obs
        adata_pred.var_names = adata.var_names

        return adata_pred

    def annotate(self, adata, batch_key, cell_type_key):
        adata = remove_sparsity(adata)

        encoder_labels, _ = label_encoder(adata, self.condition_encoder, batch_key)
        decoder_labels, _ = label_encoder(adata, self.condition_encoder, batch_key)

        encoder_labels = to_categorical(encoder_labels, num_classes=self.n_conditions)
        decoder_labels = to_categorical(decoder_labels, num_classes=self.n_conditions)

        cvae_inputs = [adata.X, encoder_labels, decoder_labels]

        encoded_labels = self.cvae_model.predict(cvae_inputs)[2].argmax(axis=1)

        self._reverse_cell_type_encoder()
        labels = []
        for encoded_label in encoded_labels:
            labels.append(self.inv_cell_type_encoder[encoded_label])

        adata.obs[f'pred_{cell_type_key}'] = np.array(labels)

    def _reverse_cell_type_encoder(self):
        assert self.cell_type_encoder is not None
        if hasattr(self, "inv_cell_type_encoder"):
            if self.cell_type_encoder and self.inv_cell_type_encoder is None:
                self.inv_cell_type_encoder = {k: v for v, k in self.cell_type_encoder.items()}

    def evaluate(self, adata, batch_key):
        adata = remove_sparsity(adata)

        encoder_labels, _ = label_encoder(adata, self.condition_encoder, batch_key)
        decoder_labels, _ = label_encoder(adata, self.condition_encoder, batch_key)

        encoder_labels = to_categorical(encoder_labels, num_classes=self.n_conditions)
        decoder_labels = to_categorical(decoder_labels, num_classes=self.n_conditions)

        cvae_inputs = [adata.X, encoder_labels, decoder_labels]

        encoded_labels = self.cvae_model.predict(cvae_inputs)[2].argmax(axis=1)

        self._reverse_cell_type_encoder()
        labels = []
        for encoded_label in encoded_labels:
            labels.append(self.inv_cell_type_encoder[encoded_label])

        labels = np.array(labels)
        true_labels = adata.obs[batch_key].values
        accuracy = np.mean(labels == true_labels)

        print(classification_report(true_labels, labels))

        return accuracy, confusion_matrix(true_labels, labels)

    def _fit(self, adata, condition_key, cell_type_key,
             train_size=0.8,
             n_epochs=25, batch_size=32,
             early_stop_limit=20, lr_reducer=10,
             n_per_epoch=0, score_filename=None,
             save=True, retrain=True, verbose=3):
        """
            Trains scNet with ``n_epochs`` times given ``train_adata``
            and validates the model using ``valid_adata``
            This function is using ``early stopping`` and ``learning rate reduce on plateau``
            techniques to prevent over-fitting.

            Parameters
            ----------
            adata: :class:`~anndata.AnnData`
                Annotated dataset used to train & evaluate scNet.
            condition_key: str
                column name for conditions in the `obs` matrix of `train_adata` and `valid_adata`.
            train_size: float
                fraction of samples used to train scNet.
            n_epochs: int
                number of epochs.
            batch_size: int
                number of samples in the mini-batches used to optimize scNet.
            early_stop_limit: int
                patience of EarlyStopping
            lr_reducer: int
                patience of LearningRateReduceOnPlateau.
            save: bool
                Whether to save scNet after the training or not.
            verbose: int
                Verbose level
            retrain: bool
                ``True`` by default. if ``True`` scNet will be trained regardless of existance of pre-trained scNet in ``model_path``. if ``False`` scNet will not be trained if pre-trained scNet exists in ``model_path``.

        """
        train_adata, valid_adata = train_test_split(adata, train_size)

        if self.gene_names is None:
            self.gene_names = train_adata.var_names.tolist()
        else:
            if set(self.gene_names).issubset(set(train_adata.var_names)):
                train_adata = train_adata[:, self.gene_names]
            else:
                raise Exception("set of gene names in train adata are inconsistent with scNet's gene_names")

            if set(self.gene_names).issubset(set(valid_adata.var_names)):
                valid_adata = valid_adata[:, self.gene_names]
            else:
                raise Exception("set of gene names in valid adata are inconsistent with scNet's gene_names")

        train_conditions_encoded, self.condition_encoder = label_encoder(train_adata, le=self.condition_encoder,
                                                                         condition_key=condition_key)

        valid_conditions_encoded, self.condition_encoder = label_encoder(valid_adata, le=self.condition_encoder,
                                                                         condition_key=condition_key)

        train_cell_types_encoded, encoder = label_encoder(train_adata, le=self.cell_type_encoder,
                                                          condition_key=cell_type_key)

        if self.cell_type_encoder is None:
            self.cell_type_encoder = encoder

        valid_cell_types_encoded, self.cell_type_encoder = label_encoder(valid_adata, le=self.cell_type_encoder,
                                                                         condition_key=cell_type_key)

        if not retrain and self.restore_model_weights():
            return

        train_conditions_onehot = to_categorical(train_conditions_encoded, num_classes=self.n_conditions)
        valid_conditions_onehot = to_categorical(valid_conditions_encoded, num_classes=self.n_conditions)

        train_cell_types_onehot = to_categorical(train_cell_types_encoded, num_classes=self.n_classes)
        valid_cell_types_onehot = to_categorical(valid_cell_types_encoded, num_classes=self.n_classes)

        if self.loss_fn in ['nb', 'zinb']:
            train_raw_expr = train_adata.raw.X.A if sparse.issparse(train_adata.raw.X) else train_adata.raw.X
            valid_raw_expr = valid_adata.raw.X.A if sparse.issparse(valid_adata.raw.X) else valid_adata.raw.X

        train_expr = train_adata.X.A if sparse.issparse(train_adata.X) else train_adata.X
        valid_expr = valid_adata.X.A if sparse.issparse(valid_adata.X) else valid_adata.X

        x_train = [train_expr, train_conditions_onehot, train_conditions_onehot]
        y_train = [train_expr, train_conditions_encoded, train_cell_types_onehot]

        x_valid = [valid_expr, valid_conditions_onehot, valid_conditions_onehot]
        y_valid = [valid_expr, valid_conditions_encoded, valid_cell_types_onehot]

        callbacks = [
            History(),
        ]

        if verbose > 2:
            callbacks.append(
                LambdaCallback(on_epoch_end=lambda epoch, logs: print_progress(epoch, logs, n_epochs)))
            fit_verbose = 0
        else:
            fit_verbose = verbose

        if (n_per_epoch > 0 or n_per_epoch == -1) and not score_filename:
            adata = train_adata.concatenate(valid_adata)

            celltype_labels = np.concatenate([train_cell_types_encoded, valid_cell_types_encoded], axis=0)

            callbacks.append(ScoreCallback(score_filename, adata, condition_key, cell_type_key, self.cvae_model,
                                           n_per_epoch=n_per_epoch, n_batch_labels=self.n_conditions,
                                           n_celltype_labels=len(np.unique(celltype_labels))))

        if early_stop_limit > 0:
            callbacks.append(EarlyStopping(patience=early_stop_limit, monitor='val_loss'))

        if lr_reducer > 0:
            callbacks.append(ReduceLROnPlateau(monitor='val_loss', patience=lr_reducer))

        self.cvae_model.fit(x=x_train,
                            y=y_train,
                            validation_data=(x_valid, y_valid),
                            epochs=n_epochs,
                            batch_size=batch_size,
                            verbose=fit_verbose,
                            callbacks=callbacks,
                            )
        if save:
            self.update_kwargs()
            self.save(make_dir=True)
