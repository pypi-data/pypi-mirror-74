import numpy as _np
import numpy.linalg as _nl


__all__ = ['aff']


class aff(object):
    '''Affine transformation in n-dim space.

    Examples
    --------

    >>> import numpy as _np
    >>> import mt.geo as _mg
    >>> a = _mg.aff(weight=_np.array([[1,-1],[-2,3]]), bias=_np.array([3,4]))
    >>> a.bias
    array([3, 4])
    >>> a.weight
    array([[ 1, -1],
           [-2,  3]])
    >>> a.matrix
    array([[ 1., -1.,  3.],
           [-2.,  3.,  4.],
           [ 0.,  0.,  1.]])
    >>> ~a
    aff(weight_diagonal=[3. 1.], bias=[-13. -10.])
    >>> a*~a
    aff(weight_diagonal=[1. 1.], bias=[0. 0.])
    >>> ~a*a
    aff(weight_diagonal=[1. 1.], bias=[0. 0.])
    >>> a/a
    aff(weight_diagonal=[1. 1.], bias=[0. 0.])
    >>> a%a
    aff(weight_diagonal=[1. 1.], bias=[0. 0.])
    >>> a*a
    aff(weight_diagonal=[ 3 11], bias=[ 2 10])
    >>> a*a*a
    aff(weight_diagonal=[11 41], bias=[-5 30])
    >>> (a*a)*a
    aff(weight_diagonal=[11 41], bias=[-5 30])
    >>> a*(a*a)
    aff(weight_diagonal=[11 41], bias=[-5 30])
    >>> b = _mg.aff(weight=_np.array([[1,-1],[-3,2]]), bias=_np.array([2,1]))
    >>> a*b
    aff(weight_diagonal=[4 8], bias=[4 3])
    >>> b*a
    aff(weight_diagonal=[3 9], bias=[1 0])
    >>> a.conjugate(b)
    aff(weight_diagonal=[ 6. -3.], bias=[-18.  66.])
    '''

    # ----- data encapsulation -----

    @property
    def bias(self):
        '''The bias component of the affine transformation matrix.'''
        return self.__bias

    @bias.setter
    def bias(self, bias):
        if len(bias.shape) != 1:
            raise ValueError(
                "Bias is not a vector, shape {}.".format(bias.shape))
        self.__bias = bias

    @property
    def weight(self):
        '''The weight/linear component of the affine transformation matrix.'''
        return self.__weight

    @weight.setter
    def weight(self, weight):
        if len(weight.shape) != 2:
            raise ValueError(
                "bias has non-matrix shape {}.".format(weight.shape))
        self.__weight = weight

    # ----- derived properties -----

    @property
    def bias_dim(self):
        '''Returns the dimension of the bias vector.'''
        return self.bias.shape[0]

    @property
    def weight_shape(self):
        '''Returns the shape of the weight matrix.'''
        return self.weight.shape

    @property
    def dim(self):
        '''Returns the dimension of the transformation.'''
        val = self.bias_dim
        if self.weight_shape != (val, val):
            raise ValueError(
                "Weight does not have a square matrix shape {}.".format(self.weight.shape))
        return val

    @property
    def matrix(self):
        '''Returns the transformation matrix.'''
        dim = self.dim
        a = _np.empty((dim+1, dim+1))
        a[:dim, :dim] = self.weight
        a[:dim, dim] = self.bias
        a[dim, :dim] = 0
        a[dim, dim] = 1
        return a

    @property
    def det(self):
        '''Returns the determinant of the transformation matrix.'''
        return _nl.det(self.weight)  # slow method 

    # ----- methods -----

    def __init__(self, weight=_np.identity(3), bias=_np.zeros(3), check_shapes=True):
        self.weight = weight
        self.bias = bias
        if check_shapes:
            _ = self.dim  # just to check shapes

    def __repr__(self):
        return "aff(weight_diagonal={}, bias={})".format(self.weight.diagonal(), self.bias)

    def __lshift__(self, x):
        '''left shift = Lie action'''
        if x.shape != (self.dim,):
            raise ValueError(
                "Input shape {} is not ({},).".format(x.shape, self.dim))
        return _np.dot(self.weight, x)+self.bias

    def transform_points(self, X):
        '''Transforms a list of points.
        
        Parameters
        ----------
        X : numpy.ndarray of shape (N,D)
            transforms N points. D is the dimensionality of the transformation

        Returns
        -------
        X2 : numpy.ndarray of shape (N,D)
            transformed N points, where `X2 = np.dot(X, self.weight^T) + self.bias`
        '''
        if len(X.shape) != 2 or X.shape[1] != self.dim:
            raise ValueErro("Input shape {} is not (N,{}).".format(X.shape, self.dim))
        return _np.dot(X, self.weight.T) + self.bias

    def __rshift__(self, x):
        '''right shift = inverted Lie action'''
        return (~self) << x

    def __mul__(self, other):
        '''a*b = Lie operator'''
        if not isinstance(other, aff):
            raise ValueError(
                "Expecting 'other' to be an affine transformation, but {} received.".format(other.__class__))
        return aff(_np.dot(self.weight, other.weight), self << other.bias)

    def __invert__(self):
        '''Lie inverse'''
        invWeight = _nl.inv(
            self.weight)  # slow, and assuming weight matrix is invertible
        return aff(invWeight, _np.dot(invWeight, -self.bias))

    def __truediv__(self, other):
        '''a/b = a*(~b)'''
        return self*(~other)

    def __mod__(self, other):
        '''a%b = (~a)*b'''
        return (~self)*other

    def weight_sign(self, eps=1e-06):
        '''Returns whether weight determinant is positive (+1), close to zero (0), or negative (-1).'''
        det = self.det
        return 1 if det > eps else -1 if det < -eps else 0

    def conjugate(self, other):
        '''Conjugate: `self.conjugate(other) = self*other*self^{-1}`'''
        return self*(other/self)


# ----- obsolete useful 2D transformations -----

def shear2d(theta):
    '''Returns the shearing. Theta is in radian.'''
    if not shear2d.warned:
        print("mt.geo.affine_transformation.shear2d() is deprecated and mathematically incorrect. Use mt.geo.affine2d.shear2d() instead.")
        shear2d.warned = True
    return aff(weight=_np.array([
        [1, -_np.sin(theta)],
        [0, _np.cos(theta)]]),
        bias=_np.zeros(2))
shear2d.warned = False

def originate2d(tfm, x, y):
    '''Tweaks an affine transformation so that it acts as if it originates at (x,y) instead of (0,0).'''
    if not originate2d.warned:
        print("mt.geo.affine_transformation.originate2d() is deprecated. Use mt.geo.affine2d.originate2d() instead.")
        originate2d.warned = True
    return aff(weight=_np.identity(2), bias=_np.array((x, y))).conjugate(tfm)
originate2d.warned = False
