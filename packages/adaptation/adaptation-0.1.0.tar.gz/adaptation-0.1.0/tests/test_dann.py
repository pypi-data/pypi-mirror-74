"""
Test functions for dann module.
"""

import numpy as np
import tensorflow as tf
from tensorflow.keras import Sequential, Model
from tensorflow.keras.layers import Dense
from tensorflow.keras.optimizers import Adam

from adapt.feature_based import DANN

Xs = np.concatenate((
    np.linspace(0, 1, 100).reshape(-1, 1),
    np.zeros((100, 1))
    ), axis=1)
Xt = np.concatenate((
    np.linspace(0, 1, 100).reshape(-1, 1),
    np.ones((100, 1))
    ), axis=1)
X = np.concatenate((Xs, Xt))
y = 0.2 * X[:, 0].ravel()


def _get_encoder(input_shape):
    model = Sequential()
    model.add(Dense(1, input_shape=input_shape,
                    kernel_initializer="ones",
                    use_bias=False))
    model.compile(loss="mse", optimizer="adam")
    return model


def _get_discriminator(input_shape):
    model = Sequential()
    model.add(Dense(1,
                    input_shape=input_shape,
                    activation="sigmoid"))
    model.compile(loss="mse", optimizer="adam")
    return model


def _get_task(input_shape, output_shape):
    model = Sequential()
    model.add(Dense(np.prod(output_shape),
                    use_bias=False,
                    input_shape=input_shape))
    model.compile(loss="mse", optimizer=Adam(0.1))
    return model


def test_fit_lambda_zero():
    tf.random.set_seed(0)
    np.random.seed(0)
    model = DANN(_get_encoder, _get_task, _get_discriminator,
                 lambdap=0, loss="mse", optimizer=Adam(0.01))
    model.fit(X, y, range(100), range(100, 200),
              epochs=500, batch_size=100, verbose=0)
    assert isinstance(model.model_, Model)
    assert model.encoder_.get_weights()[0][1][0] == 1.0
    assert np.sum(np.abs(model.predict(Xs).ravel() - y[:100])) < 0.01
    assert np.sum(np.abs(model.predict(Xt).ravel() - y[100:])) > 10


def test_fit_lambda_one():
    tf.random.set_seed(0)
    np.random.seed(0)
    model = DANN(_get_encoder, _get_task, _get_discriminator,
                 lambdap=1, loss="mse", optimizer=Adam(0.01))
    model.fit(X, y, range(100), range(100, 200),
              epochs=800, batch_size=100, verbose=0)
    assert isinstance(model.model_, Model)
    assert np.abs(model.encoder_.get_weights()[0][1][0] / 
            model.encoder_.get_weights()[0][0][0]) < 0.05
    assert np.sum(np.abs(model.predict(Xs).ravel() - y[:100])) < 1
    assert np.sum(np.abs(model.predict(Xt).ravel() - y[100:])) < 1
