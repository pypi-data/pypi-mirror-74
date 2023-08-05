import numpy as np
import pandas as pd
from numpy.linalg import norm
from scipy.sparse import issparse
from .utils import svd_wrapper, centering


class pca(object):
    """
    Computes the Principal Components Analysis (PCA) of a data matrix
    X (n_samples x n_features).

    Parameters
    ----------
    n_components: int, default = None
        rank of the decomposition. If None, will compute full PCA.

    center: str, default = None
        How to center the columns of X. If None, will not center the
        columns (i.e. just computes the SVD).


    Attributes
    ----------
    scores_: pd.DataFrame
        - scores_ shape: (n_samples, n_components)
        The orthonormal matrix of (normalized) scores.

    loadings_: pd.DataFrame
        - loadings_ shape: (n_features, n_components)
        The orthonormal matrix of loadings.

    svals_: pd.Series
        - svals_ shape: (n_components, )
        The singular values.

    m_: np.array
        - m_ shape: (n_features, )
        The vector used to center the data.

    frob_norm_: float
        The Frobenius norm of the training data matrix X.

    shape_: tuple
        - shape_ length: 2
        The shape of the original data matrix.
    """
    def __init__(self, n_components=None, center='mean'):
        self.n_components = n_components
        self.center = center

    def get_params(self):
        return {'n_components': self.n_components,
                'center': self.center}

    def __repr__(self):
        if not hasattr(self, 'scores_'):
            return 'pca object, nothing has been computed yet'
        else:
            return 'Rank {} pca of a {} matrix'.format(self.n_components,
                                                       self.shape_)

    def fit(self, X):
        """
        Computes the PCA decomposition of X.

        Parameters
        ----------
        X: array-like or sparse matrix
            - X.shape = (n_samples, n_features)
        """
        self.shape_, obs_names, var_names, self.n_components, \
            = _arg_checker(X, self.n_components)

        # possibly mean center X
        X, self.m_ = centering(X, self.center)

        # compute SVD
        U, D, V = svd_wrapper(X, self.n_components)

        # compute variance explained
        if self.n_components == min(X.shape):
            self.frob_norm_ = np.sqrt(sum(D ** 2))
        else:
            self.frob_norm_ = _safe_frob_norm(X)
        self.var_expl_prop_ = D ** 2 / self.frob_norm_ ** 2
        self.var_expl_cum_ = np.cumsum(self.var_expl_prop_)

        if self.n_components is None:
            self.n_components = self.scores_.shape[1]

        self.scores_, self.svals_, self.loadings_ = \
            svd2pd(U, D, V, obs_names=obs_names, var_names=var_names)

        return self

    @classmethod
    def from_precomputed(cls, n_components=None, center=None,
                         scores=None, loadings=None, svals=None,
                         obs_names=None, var_names=None, comp_names=None,
                         m=None, frob_norm=None, var_expl_prop=None,
                         shape=None):

        """
        Loads the pca object from a precomputed PCA decomposition.

        Returns
        ------

        X: pca object
        """

        x = cls()
        if n_components is None and scores is not None:
            n_components = scores.shape[1]
        x.n_components = n_components

        if shape is not None:
            shape = shape
        else:
            shape = [None, None]
            if scores is not None:
                shape[0] = scores.shape[0]
            if loadings is not None:
                shape[1] = loadings.shape[0]
        x.shape_ = shape

        if scores is not None and type(scores) != pd.DataFrame:
            if obs_names is None:
                obs_names = _default_obs_names(scores.shape[0])
            if comp_names is None:
                comp_names = _default_comp_names(scores.shape[1])
            scores = pd.DataFrame(scores, index=obs_names,
                                  columns=comp_names)

        if svals is not None and type(svals) != pd.Series:
            if comp_names is None:
                comp_names = _default_comp_names(loadings.shape[1])
            svals = pd.Series(svals, index=comp_names)

        if loadings is not None and type(loadings) != pd.DataFrame:
            if var_names is None:
                var_names = _default_var_names(loadings.shape[0])
            if comp_names is None:
                comp_names = _default_comp_names(loadings.shape[1])
            loadings = pd.DataFrame(loadings, index=var_names,
                                    columns=comp_names)
        x.scores_ = scores
        x.loadings_ = loadings
        x.svals_ = svals

        x.center = center
        x.m_ = m

        x.frob_norm_ = frob_norm
        x.var_expl_prop_ = var_expl_prop
        if var_expl_prop is not None:
            x.var_expl_cum_ = np.cumsum(var_expl_prop)
        else:
            x.var_expl_cum_ = None

        return x

    @property
    def rank(self):
        """
        Returns the observation names.

        Returns
        ------
        rank: int

        """

        return self.n_components

    def obs_names(self):
        """
        Returns the observation names.

        Returns
        ------
        obs_names: np.array

        """
        return np.array(self.scores_.index)

    def comp_names(self):
        """
        Returns the component names.

        Returns
        ------
        component_names: np.array

        """
        return np.array(self.scores_.columns)

    def var_names(self):
        """
        Returns the variable names.

        Returns
        ------
        var_names: np.array
        """
        return np.array(self.loadings_.index)

    def set_comp_names(self, comp_names):
        """
        Resets the component names.
        """
        self.scores_.columns = comp_names
        self.svals_.index = comp_names
        self.loadings_.columns = comp_names
        return self

    def scores(self, norm=True, np=False):
        """

        Returns the scores.

        Parameters
        ----------
        norm: bool, default = True
            If true, returns normalized scores. Otherwise, returns unnormalized
            scores.

        np: bool, default = False
            If true, returns scores as a numpy array. Otherwise, returns \
            pandas.

        """
        if norm:  # normalized scores
            if np:
                return self.scores_.values
            else:
                return self.scores_
        else:

            unnorm_scores = _unnorm_scores(self.scores_, self.svals_)
            if np:
                return unnorm_scores
            else:
                return pd.DataFrame(unnorm_scores,
                                    index=self.scores_.index,
                                    columns=self.scores_.columns)

    def loadings(self, np=False):
        """
        Returns the loadings.

        Returns
        ------
        loadings: np.array
        """

        if np:
            return self.loadings_.values
        else:
            return self.loadings_

    def svals(self, np=False):
        """
        Returns the singular values.

        Returns
        ------
        svals: np.array
        """

        if np:
            return self.svals_.values
        else:
            return self.svals_

    def get_UDV(self):
        """
        Returns the Singular Value Decomposition of (possibly centered) X.

        Returns
        ------

        U: np.array
            - U shape: (n_samples, n_components)
            Scores (left singular values)

        D: np.array
            - D shape: (n_components, )
            Singular values

        V: np.array
            - V shape: (n_features, n_components)
            Loadings matrix (right singular values)
        """
        return self.scores_.values, self.svals_.values, self.loadings_.values

    def predict_scores(self, Y):
        """
        Projects a new data matrix Y onto the loadings and returns the
        coordinates (scores) in the PCA subspace.

        Parameters
        ----------
        Y: array-like
            - Y shape: (n_new_samples, n_features)
        """
        s = np.dot(Y, self.loadings_)
        if self.m_ is not None:
            s -= np.dot(self.m_, self.loadings_)
        return s

    def predict_reconstruction(self, Y=None):
        """
        Reconstructs the data in the original spaces (R^n_features). I.e\
        projects each data point onto the rank n_components PCA affine subspace
        which sits in the original n_features dimensional space.


        Parameters
        ----------
        Y: array-like, default = None
            - Y shape: (n_new_samples, n_features)
            Projects data onto PCA subspace which live in the original
            space (R^n_features). If None, will use return the reconstruction
            of the training ddata.

        """
        if Y is None:
            scores = self.scores_.values
        else:
            scores = self.predict_scores(Y)

        return pca_reconstruct(U=scores, D=self.svals_, V=self.loadings_,
                               m=self.m_)


def _arg_checker(X, n_components):

    if n_components is None:
        n_components = min(X.shape)

    assert n_components >= 1 and n_components <= min(X.shape)

    # extract data from X
    shape = X.shape

    # extract observation/variable names
    if type(X) == pd.DataFrame:
        obs_names = np.array(X.index)
        var_names = np.array(X.columns)
    else:
        obs_names = None
        var_names = None

    return shape, obs_names, var_names, n_components


def _default_obs_names(n_samples):
    return [i for i in range(n_samples)]


def _default_var_names(n_features):
    return ['feat_{}'.format(i) for i in range(n_features)]


def _default_comp_names(n_components):
    return ['comp_{}'.format(i) for i in range(n_components)]


def svd2pd(U, D, V, obs_names=None, var_names=None, comp_names=None):
    """
    Converts SVD output from numpy arrays to pandas.
    """
    if obs_names is None:
        obs_names = _default_obs_names(U.shape[0])

    if var_names is None:
        var_names = _default_var_names(V.shape[0])

    if comp_names is None:
        comp_names = _default_comp_names(U.shape[1])

    U = pd.DataFrame(U, index=obs_names, columns=comp_names)
    D = pd.Series(D, index=comp_names)
    V = pd.DataFrame(V, index=var_names, columns=comp_names)

    return U, D, V


def _unnorm_scores(U, D):
    """
    Returns the unnormalized scores.

    Parameters
    ----------
    U: array-like, shape (n_samples, n_components)
        Normalized scores.

    D: array-like, shape (n_components)
        Singular values.

    """
    _U = np.array(U)
    if _U.ndim == 1:  # if U is a vector, then return as a vector
        is_vec = True
    else:
        is_vec = False

    if is_vec or _U.shape[1] == 1:
        UD = _U.reshape(1, -1) * np.array(D)
    else:
        UD = _U * np.array(D)

    return UD


def pca_reconstruct(U, D, V, m=None):
    """
    Let the rank K pca of X be given by X ~= U D V^T. X in R^n x d
    where n = number of observations and d = number of variables.

    For a given set of scores returns the predicted reconstruction of X.
    For example, if u_i is the ith row of U (the scores for the
    ith observation) then this returns V D u_i + m.

    Parameters
    ---------
    u: the vector or matrix of scores (a vector in R^K or N x K matrix)

    D: the singular values (a list of length K)

    V: the loadings (nd.array of dimension d x K)

    m: the mean of the data (vector in R^d)
    """

    UD = _unnorm_scores(U, D)
    R = np.dot(UD, V.T)
    if m is not None:
        R += m

    if np.array(U).ndim == 1:  # if U is a vector, then return as a vector
        return R.reshape(-1)
    else:
        return R


def _safe_frob_norm(X):
    """
    Calculates the Frobenius norm of X whether X is dense or sparse.

    Currently, neither scipy.linalg.norm nor numpy.linalg.norm work for
    sparse matrices.
    """
    if issparse(X):
        return np.sqrt(sum(X.data ** 2))
    else:
        return norm(np.array(X), ord='fro')


class ViewSpecificResults(object):
    """
    Contains the view specific results.

    Parameters
    ----------
    joint: dict
        The view specific joint PCA.

    individual: dict
        The view specific individual PCA.

    noise: array-like
        The noise matrix estimate.

    obs_names: array-like, default = None
        Observation names.

    var_names: array-like, default = None
        Variable names for this view.

    block_name: str, default = None
        Name of this view.

    m: array-like, default = None
        The vector used to column mean center this view.


    Attributes
    ----------
    joint: mvlearn.ajive.pca.pca
        View specific joint PCA.
        Has an extra attribute joint.full_ which contains the full view
        joint estimate.

    individual: mvlearn.ajive.pca.pca
        View specific individual PCA.
        Has an extra attribute individual.full_ which contains the full view
        joint estimate.

    noise: array-like
        The full noise view estimate.

    block_name:
        Name of this view.

    """

    def __init__(
        self,
        joint,
        individual,
        noise,
        obs_names=None,
        var_names=None,
        block_name=None,
        m=None,
        shape=None,
    ):

        self.joint = pca.from_precomputed(
            n_components=joint["rank"],
            scores=joint["scores"],
            loadings=joint["loadings"],
            svals=joint["svals"],
            obs_names=obs_names,
            var_names=var_names,
            m=m,
            shape=shape,
        )

        if joint["rank"] != 0:
            self.joint.set_comp_names(
                ["joint_comp_{}".format(i) for i in range(self.joint.rank)]
            )

        if joint["full"] is not None:
            self.joint.full_ = pd.DataFrame(
                joint["full"], index=obs_names, columns=var_names
            )
        else:
            self.joint.full_ = None

        self.individual = pca.from_precomputed(
            n_components=individual["rank"],
            scores=individual["scores"],
            loadings=individual["loadings"],
            svals=individual["svals"],
            obs_names=obs_names,
            var_names=var_names,
            m=m,
            shape=shape,
        )
        if individual["rank"] != 0:
            self.individual.set_comp_names(
                [
                    "indiv_comp_{}".format(i)
                    for i in range(self.individual.rank)
                ]
            )

        if individual["full"] is not None:
            self.individual.full_ = pd.DataFrame(
                individual["full"], index=obs_names, columns=var_names
            )
        else:
            self.individual.full_ = None

        if noise is not None:
            self.noise_ = pd.DataFrame(
                noise, index=obs_names, columns=var_names
            )
        else:
            self.noise_ = None

        self.block_name = block_name

    def __repr__(self):
        return "Block: {}, individual rank: {}, joint rank: {}".format(
            self.block_name, self.individual.rank, self.joint.rank
        )
