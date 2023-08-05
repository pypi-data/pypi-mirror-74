import logging
import os

import tensorflow as tf

from .callbacks import SavedModelExporter, TransformerLearningRate
from .datasets import AbstractDatasetBuilder
from .losses import MaskedSparseCategoricalCrossentropy
from .metrics import MaskedSparseCategoricalAccuracy
from .modeling_transformer import Transformer


class AbstractRunner(object):

    def __init__(self, model_config, dataset_builder: AbstractDatasetBuilder, model_dir='/tmp/model', **kwargs):
        super().__init__()
        self.model_config = model_config
        self.dataset_builder = dataset_builder
        self.model_dir = model_dir
        if not os.path.exists(self.model_dir):
            os.makedirs(self.model_dir)
        self.tensorboard_dir = os.path.join(self.model_dir, 'tensorboard')
        self.export_dir = os.path.join(self.model_dir, 'export')
        self.model = self._build_model(self.model_config)
        logging.info('Models will be saved to {}.'.format(self.model_dir))
        logging.info('Tensorboard logs will be saved to {}.'.format(self.tensorboard_dir))
        logging.info('Exported models will be saved to {}.'.format(self.export_dir))

    def _build_callbacks(self, callbacks=None, ckpt_steps=2000, export_steps=5000, **kwargs):
        train_callbacks = [
            tf.keras.callbacks.EarlyStopping(monitor='val_loss', patience=5),
            tf.keras.callbacks.TensorBoard(self.tensorboard_dir),
            tf.keras.callbacks.ModelCheckpoint(
                filepath=self.model_dir,
                save_weights_only=True,
                save_freq=self.dataset_builder.train_batch_size * ckpt_steps
            ),
            SavedModelExporter(self.export_dir, every_steps=export_steps),
        ]
        if callbacks:
            train_callbacks = train_callbacks + callbacks
        return train_callbacks

    def train(self, *args, **kwargs):
        raise NotImplementedError()

    def evaluate(self, *args, **kwargs):
        raise NotImplementedError()

    def predict(self, *args, **kwargs):
        raise NotImplementedError()

    def _build_model(self, config):
        raise NotImplementedError()


class TransformerRunner(AbstractRunner):

    def __init__(self,
                 model_config,
                 dataset_builder: AbstractDatasetBuilder,
                 model_dir='/tmp/transformer',
                 **kwargs):
        super(TransformerRunner, self).__init__(model_config, dataset_builder, model_dir, **kwargs)

    def _build_model(self, config):
        x = tf.keras.layers.Input(shape=(None,), dtype=tf.int32, name='x')
        y = tf.keras.layers.Input(shape=(None,), dtype=tf.int32, name='y')
        model = Transformer(**config)
        logits, _, _, _ = model(inputs=(x, y))
        probs = tf.keras.layers.Lambda(
            lambda x: tf.nn.softmax(x), name='probs')(logits)

        model = tf.keras.Model(inputs=[x, y], outputs=[probs])

        lr = TransformerLearningRate(config.get('hidden_size', 512))
        model.compile(
            optimizer=tf.keras.optimizers.Adam(lr, beta_1=0.9, beta_2=0.98, epsilon=1e-9),
            loss=tf.keras.losses.SparseCategoricalCrossentropy(name='loss', from_logits=False),
            metrics=[tf.keras.metrics.SparseCategoricalAccuracy(name='acc')],
        )
        model.summary()
        return model

    def train(self,
              train_files,
              valid_files=None,
              epochs=10,
              ckpt_steps=2000,
              export_steps=5000,
              callbacks=None,
              **kwargs):
        valid_dataset = self.dataset_builder.build_valid_dataset(valid_files) if valid_files else None
        train_dataset = self.dataset_builder.build_train_dataset(train_files)

        callbacks = self._build_callbacks(callbacks, ckpt_steps=ckpt_steps, export_steps=export_steps, **kwargs)

        history = self.model.fit(
            train_dataset,
            validation_data=valid_dataset,
            epochs=epochs,
            callbacks=callbacks,
            **kwargs
        )
        return history

    def evaluate(self, valid_files, **kwargs):
        pass

    def predict(self, input_files, **kwargs):
        pass
