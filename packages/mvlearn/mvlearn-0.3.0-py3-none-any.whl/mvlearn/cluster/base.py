# Copyright 2019 NeuroData (http://neurodata.io)
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from abc import abstractmethod
from sklearn.base import BaseEstimator


class BaseCluster(BaseEstimator):
    r'''
    A base class for clustering.
    Parameters
    ----------
    Attributes
    ----------
    See Also
    --------
    '''

    def __init__(self):
        pass

    @abstractmethod
    def fit(self, Xs, y=None):
        '''
        A method to fit clustering parameters to the multiview data.
        Parameters
        ----------
        Xs : list of array-likes or numpy.ndarray
            - Xs length: n_views
            - Xs[i] shape: (n_samples, n_features_i)
            A list of different views to fit the model on.

        y : array-like, shape (n_samples,)
            Labels for each sample. Only used by supervised algorithms.

        Returns
        -------
        self :  returns and instance of self.
        '''

        return self

    @abstractmethod
    def predict(self, Xs):
        '''
        A method to predict cluster labels of multiview data.
        Parameters
        ----------
        Xs : list of array-likes or numpy.ndarray
            - Xs length: n_views
            - Xs[i] shape: (n_samples, n_features_i)
            A list of different views to cluster.

        Returns
        -------
        labels : array-like, shape (n_samples,)
            Returns the predicted cluster labels for each sample.
        '''

        pass

    def fit_predict(self, Xs, y=None):
        '''
        A method for fitting then predicting cluster assignments.

        Parameters
        ----------
        Xs : list of array-likes or numpy.ndarray
            - Xs length: n_views
            - Xs[i] shape: (n_samples, n_features_i)
            A list of different views to fit the model on.

        y : array-like, shape (n_samples,)
            Labels for each sample. Only used by supervised algorithms.

        Returns
        -------
        labels : array-like, shape (n_samples,)
            The predicted cluster labels for each sample.
        '''

        self.fit(Xs)
        labels = self.labels_
        return labels
