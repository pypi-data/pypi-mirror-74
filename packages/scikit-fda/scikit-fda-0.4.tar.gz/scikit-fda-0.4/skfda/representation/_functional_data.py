"""Module for functional data manipulation.

Defines the abstract class that should be implemented by the funtional data
objects of the package and contains some commons methods.
"""

from abc import ABC, abstractmethod
import warnings

import pandas.api.extensions

import numpy as np

from .._utils import (_evaluate_grid, _reshape_eval_points)
from .extrapolation import _parse_extrapolation


class FData(ABC, pandas.api.extensions.ExtensionArray):
    """Defines the structure of a functional data object.

    Attributes:
        n_samples (int): Number of samples.
        dim_domain (int): Dimension of the domain.
        dim_codomain (int): Dimension of the image.
        extrapolation (Extrapolation): Default extrapolation mode.
        dataset_name (str): name of the dataset.
        argument_names (tuple): tuple containing the names of the different
            arguments.
        coordinate_names (tuple): tuple containing the names of the different
            coordinate functions.

    """

    def __init__(self, *, extrapolation,
                 dataset_name=None,
                 dataset_label=None,
                 axes_labels=None,
                 argument_names=None,
                 coordinate_names=None):

        self.extrapolation = extrapolation
        self.dataset_name = dataset_name

        if dataset_label is not None:
            self.dataset_label = dataset_label

        self.argument_names = argument_names
        self.coordinate_names = coordinate_names
        self.axes_labels = axes_labels

    @property
    def dataset_label(self):
        warnings.warn("Parameter dataset_label is deprecated. Use the "
                      "parameter dataset_name instead.",
                      DeprecationWarning)
        return self.dataset_name

    @dataset_label.setter
    def dataset_label(self, name):
        warnings.warn("Parameter dataset_label is deprecated. Use the "
                      "parameter dataset_name instead.",
                      DeprecationWarning)
        self.dataset_name = name

    @property
    def argument_names(self):
        return self._argument_names

    @argument_names.setter
    def argument_names(self, names):
        if names is None:
            names = (None,) * self.dim_domain
        else:
            names = tuple(names)
            if len(names) != self.dim_domain:
                raise ValueError("There must be a name for each of the "
                                 "dimensions of the domain.")

        self._argument_names = names

    @property
    def coordinate_names(self):
        return self._coordinate_names

    @coordinate_names.setter
    def coordinate_names(self, names):
        if names is None:
            names = (None,) * self.dim_codomain
        else:
            names = tuple(names)
            if len(names) != self.dim_codomain:
                raise ValueError("There must be a name for each of the "
                                 "dimensions of the codomain.")

        self._coordinate_names = names

    @property
    def axes_labels(self):
        warnings.warn("Parameter axes_labels is deprecated. Use the "
                      "parameters argument_names and "
                      "coordinate_names instead.", DeprecationWarning)

        return self.argument_names + self.coordinate_names

    @axes_labels.setter
    def axes_labels(self, labels):
        """Sets the list of labels"""

        if labels is not None:

            warnings.warn("Parameter axes_labels is deprecated. Use the "
                          "parameters argument_names and "
                          "coordinate_names instead.", DeprecationWarning)

            labels = np.asarray(labels)
            if len(labels) > (self.dim_domain + self.dim_codomain):
                raise ValueError("There must be a label for each of the "
                                 "dimensions of the domain and the image.")
            if len(labels) < (self.dim_domain + self.dim_codomain):
                diff = (self.dim_domain + self.dim_codomain) - len(labels)
                labels = np.concatenate((labels, diff * [None]))

            self.argument_names = labels[:self.dim_domain]
            self.coordinate_names = labels[self.dim_domain:]

    @property
    @abstractmethod
    def n_samples(self):
        """Return the number of samples.

        Returns:
            int: Number of samples of the FData object.

        """
        pass

    @property
    @abstractmethod
    def dim_domain(self):
        """Return number of dimensions of the domain.

        Returns:
            int: Number of dimensions of the domain.

        """
        pass

    @property
    @abstractmethod
    def dim_codomain(self):
        """Return number of dimensions of the codomain.

        Returns:
            int: Number of dimensions of the codomain.

        """
        pass

    @property
    @abstractmethod
    def coordinates(self):
        r"""Return a component of the FDataGrid.

        If the functional object contains multivariate samples
        :math:`f: \mathbb{R}^n \rightarrow \mathbb{R}^d`, this method returns
        an iterator of the vector :math:`f = (f_1, ..., f_d)`.

        """
        pass

    @property
    def extrapolation(self):
        """Return default type of extrapolation."""

        return self._extrapolation

    @extrapolation.setter
    def extrapolation(self, value):
        """Sets the type of extrapolation."""

        if value is None:
            self._extrapolation = None
        else:
            self._extrapolation = _parse_extrapolation(value)

    @property
    @abstractmethod
    def domain_range(self):
        """Return the domain range of the object

        Returns:
            List of tuples with the ranges for each domain dimension.
        """
        pass

    def _extrapolation_index(self, eval_points):
        """Checks the points that need to be extrapolated.

        Args:
            eval_points (np.ndarray): Array with shape `n_eval_points` x
                `dim_domain` with the evaluation points, or shape ´n_samples´ x
                `n_eval_points` x `dim_domain` with different evaluation
                points for each sample.

        Returns:

            (np.ndarray): Array with boolean index. The positions with True
                in the index are outside the domain range and extrapolation
                should be applied.

        """
        index = np.zeros(eval_points.shape[:-1], dtype=np.bool)

        # Checks bounds in each domain dimension
        for i, bounds in enumerate(self.domain_range):
            np.logical_or(index, eval_points[..., i] < bounds[0], out=index)
            np.logical_or(index, eval_points[..., i] > bounds[1], out=index)

        return index

    def _join_evaluation(self, index_matrix, index_ext, index_ev,
                         res_extrapolation, res_evaluation):
        """Join the points evaluated.

        This method is used internally by :func:`evaluate` to join the result
        of the evaluation and the result of the extrapolation.

        Args:
            index_matrix (ndarray): Boolean index with the points extrapolated.
            index_ext (ndarray): Boolean index with the columns that contains
                points extrapolated.
            index_ev (ndarray): Boolean index with the columns that contains
                points evaluated.
            res_extrapolation (ndarray): Result of the extrapolation.
            res_evaluation (ndarray): Result of the evaluation.

        Returns:
            (ndarray): Matrix with the points evaluated with shape
            `n_samples` x `number of points evaluated` x `dim_codomain`.

        """
        res = np.empty((self.n_samples, index_matrix.shape[-1],
                        self.dim_codomain))

        # Case aligned evaluation
        if index_matrix.ndim == 1:
            res[:, index_ev, :] = res_evaluation
            res[:, index_ext, :] = res_extrapolation

        else:

            res[:, index_ev] = res_evaluation
            res[index_matrix] = res_extrapolation[index_matrix[:, index_ext]]

        return res

    @abstractmethod
    def _evaluate(self, eval_points, *, aligned=True):
        """Internal evaluation method, defines the evaluation of the FData.

        Evaluates the samples of an FData object at several points.

        Subclasses must override this method to implement evaluation.

        Args:
            eval_points (array_like): List of points where the functions are
                evaluated. If `aligned` is `True`, then a list of
                lists of points must be passed, with one list per sample.
            aligned (bool, optional): Whether the input points are
                the same for each sample, or an array of points per sample is
                passed.

        Returns:
            (numpy.darray): Numpy 3d array with shape `(n_samples,
                len(eval_points), dim_codomain)` with the result of the
                evaluation. The entry (i,j,k) will contain the value k-th image
                dimension of the i-th sample, at the j-th evaluation point.

        """
        pass

    def evaluate(self, eval_points, *, derivative=0, extrapolation=None,
                 grid=False, aligned=True):
        """Evaluate the object or its derivatives at a list of values or
        a grid.

        Args:
            eval_points (array_like): List of points where the functions are
                evaluated. If ``grid`` is ``True``, a list of axes, one per
                domain dimension, must be passed instead. If ``aligned`` is
                ``True``, then a list of lists (of points or axes, as
                explained) must be passed, with one list per sample.
            extrapolation (str or Extrapolation, optional): Controls the
                extrapolation mode for elements outside the domain range. By
                default it is used the mode defined during the instance of the
                object.
            grid (bool, optional): Whether to evaluate the results on a grid
                spanned by the input arrays, or at points specified by the
                input arrays. If true the eval_points should be a list of size
                dim_domain with the corresponding times for each axis. The
                return matrix has shape n_samples x len(t1) x len(t2) x ... x
                len(t_dim_domain) x dim_codomain. If the domain dimension is 1
                the parameter has no efect. Defaults to False.
            aligned (bool, optional): Whether the input points are
                the same for each sample, or an array of points per sample is
                passed.

        Returns:
            (np.darray): Matrix whose rows are the values of the each
            function at the values specified in eval_points.

        """
        if derivative != 0:
            warnings.warn("Parameter derivative is deprecated. Use the "
                          "derivative function instead.", DeprecationWarning)
            return self.derivative(order=derivative)(
                eval_points,
                extrapolation=extrapolation,
                grid=grid,
                aligned=aligned)

        if grid:  # Evaluation of a grid performed in auxiliar function
            return _evaluate_grid(eval_points,
                                  evaluate_method=self.evaluate,
                                  n_samples=self.n_samples,
                                  dim_domain=self.dim_domain,
                                  dim_codomain=self.dim_codomain,
                                  extrapolation=extrapolation,
                                  aligned=aligned)

        if extrapolation is None:
            extrapolation = self.extrapolation
        else:
            # Gets the function to perform extrapolation or None
            extrapolation = _parse_extrapolation(extrapolation)

        # Convert to array and check dimensions of eval points
        eval_points = _reshape_eval_points(eval_points,
                                           aligned=aligned,
                                           n_samples=self.n_samples,
                                           dim_domain=self.dim_domain)

        # Check if extrapolation should be applied
        if extrapolation is not None:
            index_matrix = self._extrapolation_index(eval_points)
            extrapolate = index_matrix.any()

        else:
            extrapolate = False

        if not extrapolate:  # Direct evaluation

            res = self._evaluate(
                eval_points, aligned=aligned)

        else:
            # Partition of eval points
            if aligned:

                index_ext = index_matrix
                index_ev = ~index_matrix

                eval_points_extrapolation = eval_points[index_ext]
                eval_points_evaluation = eval_points[index_ev]

            else:
                index_ext = np.logical_or.reduce(index_matrix, axis=0)
                eval_points_extrapolation = eval_points[:, index_ext]

                index_ev = np.logical_or.reduce(~index_matrix, axis=0)
                eval_points_evaluation = eval_points[:, index_ev]

            # Direct evaluation
            res_evaluation = self._evaluate(
                eval_points_evaluation,
                aligned=aligned)

            res_extrapolation = extrapolation.evaluate(
                self,
                eval_points_extrapolation,
                aligned=aligned)

            res = self._join_evaluation(index_matrix, index_ext, index_ev,
                                        res_extrapolation, res_evaluation)

        return res

    def __call__(self, eval_points, *, derivative=0, extrapolation=None,
                 grid=False, aligned=True):
        """Evaluate the object or its derivatives at a list of values or a
        grid. This method is a wrapper of :meth:`evaluate`.

        Args:
            eval_points (array_like): List of points where the functions are
                evaluated. If a matrix of shape nsample x eval_points is given
                each sample is evaluated at the values in the corresponding row
                in eval_points.
            derivative (int, optional): Order of the derivative. Defaults to 0.
            extrapolation (str or Extrapolation, optional): Controls the
                extrapolation mode for elements outside the domain range. By
                default it is used the mode defined during the instance of the
                object.
            grid (bool, optional): Whether to evaluate the results on a grid
                spanned by the input arrays, or at points specified by the
                input arrays. If true the eval_points should be a list of size
                dim_domain with the corresponding times for each axis. The
                return matrix has shape n_samples x len(t1) x len(t2) x ... x
                len(t_dim_domain) x dim_codomain. If the domain dimension is 1
                the parameter has no efect. Defaults to False.

        Returns:
            (np.ndarray): Matrix whose rows are the values of the each
            function at the values specified in eval_points.

        """
        return self.evaluate(eval_points, derivative=derivative,
                             extrapolation=extrapolation, grid=grid,
                             aligned=aligned)

    @abstractmethod
    def derivative(self, order=1):
        """Differentiate a FData object.


        Args:
            order (int, optional): Order of the derivative. Defaults to one.

        Returns:
            :class:`FData`: Functional object containg the derivative.
        """
        pass

    @abstractmethod
    def shift(self, shifts, *, restrict_domain=False, extrapolation=None,
              discretization_points=None, **kwargs):
        """Perform a shift of the curves.

        Args:
            shifts (array_like or numeric): List with the shift corresponding
                for each sample or numeric with the shift to apply to all
                samples.
            restrict_domain (bool, optional): If True restricts the domain to
                avoid evaluate points outside the domain using extrapolation.
                Defaults uses extrapolation.
            extrapolation (str or Extrapolation, optional): Controls the
                extrapolation mode for elements outside the domain range.
                By default uses the method defined in fd. See extrapolation to
                more information.
            discretization_points (array_like, optional): Set of points where
                the functions are evaluated to obtain the discrete
                representation of the object to operate. If an empty list is
                passed it calls np.linspace with bounds equal to the ones
                defined in fd.domain_range and the number of points the maximum
                between 201 and 10 times the number of basis plus 1.

        Returns:
            :class:`FData` with the shifted functional data.
        """
        pass

    def plot(self, *args, **kwargs):
        """Plot the FDatGrid object.

        Args:
            chart (figure object, axe or list of axes, optional): figure over
                with the graphs are plotted or axis over where the graphs are
                plotted. If None and ax is also None, the figure is
                initialized.
            derivative (int or tuple, optional): Order of derivative to be
                plotted. In case of surfaces a tuple with the order of
                derivation in each direction can be passed. See
                :func:`evaluate` to obtain more information. Defaults 0.
            fig (figure object, optional): figure over with the graphs are
                plotted in case ax is not specified. If None and ax is also
                None, the figure is initialized.
            ax (list of axis objects, optional): axis over where the graphs are
                plotted. If None, see param fig.
            n_rows (int, optional): designates the number of rows of the figure
                to plot the different dimensions of the image. Only specified
                if fig and ax are None.
            n_cols (int, optional): designates the number of columns of the
                figure to plot the different dimensions of the image. Only
                specified if fig and ax are None.
            n_points (int or tuple, optional): Number of points to evaluate in
                the plot. In case of surfaces a tuple of length 2 can be pased
                with the number of points to plot in each axis, otherwise the
                same number of points will be used in the two axes. By default
                in unidimensional plots will be used 501 points; in surfaces
                will be used 30 points per axis, wich makes a grid with 900
                points.
            domain_range (tuple or list of tuples, optional): Range where the
                function will be plotted. In objects with unidimensional domain
                the domain range should be a tuple with the bounds of the
                interval; in the case of surfaces a list with 2 tuples with
                the ranges for each dimension. Default uses the domain range
                of the functional object.
            group (list of int): contains integers from [0 to number of
                labels) indicating to which group each sample belongs to. Then,
                the samples with the same label are plotted in the same color.
                If None, the default value, each sample is plotted in the color
                assigned by matplotlib.pyplot.rcParams['axes.prop_cycle'].
            group_colors (list of colors): colors in which groups are
                represented, there must be one for each group. If None, each
                group is shown with distict colors in the "Greys" colormap.
            group_names (list of str): name of each of the groups which appear
                in a legend, there must be one for each one. Defaults to None
                and the legend is not shown.
            **kwargs: if dim_domain is 1, keyword arguments to be passed to
                the matplotlib.pyplot.plot function; if dim_domain is 2,
                keyword arguments to be passed to the
                matplotlib.pyplot.plot_surface function.

        Returns:
            fig (figure object): figure object in which the graphs are plotted.

        """
        from ..exploratory.visualization.representation import (
            plot_graph)

        return plot_graph(self, *args, **kwargs)

    @abstractmethod
    def copy(self, **kwargs):
        """Make a copy of the object.

        Args:
            kwargs: named args with attributes to be changed in the new copy.

        Returns:
            FData: A copy of the FData object.

        """
        pass

    @abstractmethod
    def mean(self, weights=None):
        """Compute the mean of all the samples.

        weights (array-like, optional): List of weights.

        Returns:
            FData : A FData object with just one sample representing
            the mean of all the samples in the original object.

        """
        pass

    @abstractmethod
    def to_grid(self, sample_points=None):
        """Return the discrete representation of the object.

        Args:
            sample_points (array_like, optional): Points per axis
            where the function is going to be evaluated.

        Returns:
              FDataGrid: Discrete representation of the functional data
              object.
        """

        pass

    @abstractmethod
    def to_basis(self, basis, eval_points=None, **kwargs):
        """Return the basis representation of the object.

        Args:
            basis(Basis): basis object in which the functional data are
                going to be represented.
            **kwargs: keyword arguments to be passed to
                FDataBasis.from_data().

        Returns:
            FDataBasis: Basis representation of the funtional data
            object.
        """

        pass

    @abstractmethod
    def concatenate(self, *others, as_coordinates=False):
        """Join samples from a similar FData object.

        Joins samples from another FData object if it has the same
        dimensions and has compatible representations.

        Args:
            others (:class:`FData`): other FData objects.
            as_coordinates (boolean, optional):  If False concatenates as
                new samples, else, concatenates the other functions as
                new components of the image. Defaults to False.

        Returns:
            :class:`FData`: FData object with the samples from the two
            original objects.

        """
        pass

    @abstractmethod
    def compose(self, fd, *, eval_points=None, **kwargs):
        """Composition of functions.

        Performs the composition of functions.

        Args:
            fd (:class:`FData`): FData object to make the composition. Should
                have the same number of samples and image dimension equal to
                the domain dimension of the object composed.
            eval_points (array_like): Points to perform the evaluation.
            **kwargs: Named arguments to be passed to the composition method of
                the specific functional object.

        """
        pass

    @abstractmethod
    def __getitem__(self, key):
        """Return self[key]."""

        pass

    def __eq__(self, other):
        return (
            self.extrapolation == other.extrapolation
            and self.dataset_name == other.dataset_name
            and self.argument_names == other.argument_names
            and self.coordinate_names == other.coordinate_names
        )

    @abstractmethod
    def __add__(self, other):
        """Addition for FData object."""

        pass

    @abstractmethod
    def __radd__(self, other):
        """Addition for FData object."""

        pass

    @abstractmethod
    def __sub__(self, other):
        """Subtraction for FData object."""

        pass

    @abstractmethod
    def __rsub__(self, other):
        """Right subtraction for FData object."""

        pass

    @abstractmethod
    def __mul__(self, other):
        """Multiplication for FData object."""

        pass

    @abstractmethod
    def __rmul__(self, other):
        """Multiplication for FData object."""

        pass

    @abstractmethod
    def __truediv__(self, other):
        """Division for FData object."""

        pass

    @abstractmethod
    def __rtruediv__(self, other):
        """Right division for FData object."""

        pass

    def __iter__(self):
        """Iterate over the samples"""

        for i in range(self.n_samples):
            yield self[i]

    def __len__(self):
        """Returns the number of samples of the FData object."""

        return self.n_samples

    #####################################################################
    # Numpy methods
    #####################################################################

    def to_numpy(self):
        """Returns a numpy array with the objects"""

        # This is to prevent numpy to access inner dimensions
        array = np.empty(shape=len(self), dtype=np.object_)

        for i, f in enumerate(self):
            array[i] = f

        return array

    #####################################################################
    # Pandas ExtensionArray methods
    #####################################################################
    @property
    def ndim(self):
        """
        Return number of dimensions of the functional data. It is
        always 1, as each observation is considered a "scalar" object.

        Returns:
            int: Number of dimensions of the functional data.

        """
        return 1

    @classmethod
    def _from_sequence(cls, scalars, dtype=None, copy=False):
        if copy:
            scalars = [f.copy() for f in scalars]

        if dtype is not None and dtype != cls.dtype.fget(None):
            raise ValueError(f"Invalid dtype {dtype}")

        return cls._concat_same_type(scalars)

    @classmethod
    def _from_factorized(cls, values, original):
        raise NotImplementedError("Factorization does not make sense for "
                                  "functional data")

    def isna(self):
        """
        A 1-D array indicating if each value is missing.

        Returns:
            na_values (np.ndarray): Array full of False values.
        """
        return np.zeros(self.n_samples, dtype=bool)

    def take(self, indices, allow_fill=False, fill_value=None, axis=0):
        """Take elements from an array.

        Parameters:
            indices (sequence of integers):
                Indices to be taken.
            allow_fill (bool, default False): How to handle negative values
                in `indices`.

                * False: negative values in `indices` indicate positional
                  indices from the right (the default). This is similar to
                  :func:`numpy.take`.
                * True: negative values in `indices` indicate
                  missing values. These values are set to `fill_value`. Any
                  other negative values raise a ``ValueError``.

            fill_value (any, optional):
                Fill value to use for NA-indices when `allow_fill` is True.
                This may be ``None``, in which case the default NA value for
                the type, ``self.dtype.na_value``, is used.
                For many ExtensionArrays, there will be two representations of
                `fill_value`: a user-facing "boxed" scalar, and a low-level
                physical NA value. `fill_value` should be the user-facing
                version, and the implementation should handle translating that
                to the physical version for processing the take if necessary.

        Returns:
            FData

        Raises:
            IndexError: When the indices are out of bounds for the array.
            ValueError: When `indices` contains negative values other than
                ``-1`` and `allow_fill` is True.

        Notes:
            ExtensionArray.take is called by ``Series.__getitem__``, ``.loc``,
            ``iloc``, when `indices` is a sequence of values. Additionally,
            it's called by :meth:`Series.reindex`, or any other method
            that causes realignment, with a `fill_value`.

        See Also:
            numpy.take
            pandas.api.extensions.take
        """
        from pandas.core.algorithms import take

        # The axis parameter must exist, because sklearn tries to use take
        # instead of __getitem__
        if axis != 0:
            raise ValueError(f"Axis must be 0, not {axis}")

        # If the ExtensionArray is backed by an ndarray, then
        # just pass that here instead of coercing to object.
        data = self.to_numpy()
        if allow_fill and fill_value is None:
            fill_value = self.dtype.na_value
        # fill value should always be translated from the scalar
        # type for the array, to the physical storage type for
        # the data, before passing to take.
        result = take(data, indices, fill_value=fill_value,
                      allow_fill=allow_fill)
        return self._from_sequence(result, dtype=self.dtype)

    @classmethod
    def _concat_same_type(
            cls,
            to_concat
    ):
        """
        Concatenate multiple array

        Parameters:
            to_concat (sequence of FData)

        Returns:
            FData
        """

        first, *others = to_concat

        return first.concatenate(*others)


def concatenate(objects, as_coordinates=False):
    """
    Join samples from an iterable of similar FData objects.

    Joins samples of FData objects if they have the same
    dimensions and sampling points.
    Args:
        objects (list of :obj:`FDataBasis`): Objects to be concatenated.
        as_coordinates (boolean, optional):  If False concatenates as
                new samples, else, concatenates the other functions as
                new components of the image. Defaults to False.
    Returns:
        :obj:`FData`: FData object with the samples from the
        original objects.
    Raises:
        ValueError: In case the provided list of FData objects is
        empty.
    Todo:
        By the moment, only unidimensional objects are supported in basis
        representation.
    """
    objects = iter(objects)
    first = next(objects, None)

    if not first:
        raise ValueError("At least one FData object must be provided "
                         "to concatenate.")

    return first.concatenate(*objects, as_coordinates=as_coordinates)
