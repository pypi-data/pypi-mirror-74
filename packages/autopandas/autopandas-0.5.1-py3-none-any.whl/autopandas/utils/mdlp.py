# Minimal Deformation Linear Projection
# Trainable dimensionality reduction method

from scipy.spatial.distance import euclidean
import tensorflow as tf
import numpy as np
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import InputLayer, Dense
from tensorflow.compat.v1.keras import initializers
import tensorflow.keras.backend as K
import matplotlib.pyplot as plt

class MDLP:
    def __init__(self, n_components, layers=None, use_bias=True, activation='linear'):
        """ Minimal Deformation Linear Projection.

            :param n_components: wanted dimensionality of the transformed data.
            :param layers: list-like containing number of units of hidden layers. If None, no hidden layers.
            :param use_bias: If True, each neuron has baises.
            :param activation: str or function for neurons' activation functions. No activation by default (linear is identity f(x) = x).
        """
        self.input_dim = None
        self.model = None
        if layers is None:
            layers = []
        layers.append(n_components) # last layer has n_components units
        self.layers = layers
        self.use_bias = use_bias
        self.activation = activation
        self.history = None

    def init_model(self, input_dim):
        """ Private method to init the architecture depending on input data.
            :param input_dim: Dimensionality of input.
        """
        self.input_dim = input_dim
        self.model = Sequential()
        for i, layer in enumerate(self.layers):
            if i==0:
                self.model.add(Dense(layer, input_dim=input_dim,
                                kernel_initializer=initializers.RandomNormal(), #.random_normal(), # gaussian weights init
                                bias_initializer='zeros', use_bias=self.use_bias, activation=self.activation))
            else:
                self.model.add(Dense(layer,
                                kernel_initializer=initializers.RandomNormal(), # gaussian weights init
                                bias_initializer='zeros', use_bias=self.use_bias, activation=self.activation))
        self.model.compile(optimizer='rmsprop', loss=metric) # metric defined below
        #stddev=0.01, use_bias = False ?, try other optimizer?, activation tanh, several layers
        return self.model

    def check_shape(self, X):
        """ Private method to init the model with the right input dimensionality if needed.
            :param X: data.
        """
        input_dim = X.shape[1]
        if self.model is None:
            self.init_model(input_dim)

    def fit(self, X, **kwargs):
        """ Train the model.
        """
        self.check_shape(X)
        self.history = self.model.fit(X, X, **kwargs)
        return self.history

    def predict(self, X):
        """ Forward pass.
        """
        self.check_shape(X)
        return self.model.predict(X)

    def transform(self, X):
        """ Alias for predict method
        """
        return self.predict(X)

    def summary(self):
        return self.model.summary()

    def show_learning_curve(self):
        if self.history is None:
            raise Exception('You need to train the model first.')
        else:
            plt.plot(range(len(self.history.history['loss'])), self.history.history['loss'])
            plt.xlabel('epochs')
            plt.ylabel('loss')
            plt.show()

####### DEFINE METRIC ####### (should move to metric.py)
####### NUMPY VERSION #######
def compute_ratio_np(x):
    """ 1. compute distances to k neighbors
        2. compute ratio

        k = 2 in this implementation
    """
    # 1 compute distances to k neighbors
    x_rolled = np.roll(x, shift=1, axis=0)
    distances = np.linalg.norm((x - x_rolled), axis=1)
    # 2 compute ratios
    distances_rolled = np.roll(distances, shift=1, axis=0)
    ratios = distances / distances_rolled
    return ratios

def metric_np(x, x_hat, distance_function=euclidean):
    """ The metric compares the input data to the model's output.
        len(x) == len(x_hat)
    """
    #loss = 0
    ratio_x = compute_ratio_np(x)
    ratio_x_hat = compute_ratio_np(x_hat)
    loss = np.linalg.norm(ratio_x - ratio_x_hat)
    return loss

######## TENSORFLOW VERSION #######
def compute_ratio(x):
    """ 1. compute distances to k neighbors
        2. compute ratio

        k = 2 (I think it approximates the k = n-1 case)

        Can accept big batch size: O(n)
    """
    # 1. compute distances to k(=2) neighbors
    # calculate pairwise Euclidean distance matrix
    x_rolled = tf.roll(x, shift=1, axis=0)
    distances_squared = K.sum(K.square(x - x_rolled), axis=1)
    # add a small number before taking K.sqrt for numerical safety (avoid nan for value near 0)
    distances = K.sqrt(distances_squared + K.epsilon())
    # 2. compute ratios
    distances_rolled = tf.roll(distances, shift=1, axis=0)
    pairwise_ratio = (distances / distances_rolled)
    return pairwise_ratio

def metric(x, x_hat):
    """ The metric compares the input data to the model's output.
        len(x) == len(x_hat)
    """
    ratio_x = compute_ratio(x)
    ratio_x_hat = compute_ratio(x_hat)
    return K.sqrt(K.sum(K.square(ratio_x - ratio_x_hat))) # divide by batch size?
