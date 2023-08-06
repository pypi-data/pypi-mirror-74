# cython: boundscheck=False
# cython: nonecheck=False
# cython: wraparound=False
# cython: language_level=3
# cython: infer_types=True
# cython: cdivision=True

# -*- coding: utf-8 -*-
# File   : traversal2d.pyx
# License: GNU v3.0
# Author : Andrei Leonard Nicusan <a.l.nicusan@bham.ac.uk>
# Date   : 14.01.2020


cdef inline double fabs(double x) nogil:
    return (x if x >= 0 else -x)


cdef int searchindex(double[:] arr, double x) nogil:
    # Find the voxel index for point `x` in the delimiting grid `arr`

    cdef int length = arr.shape[0]

    # Special cases: e.g. The delimiting grid is arr = [0, 1, 2, 3, 4]
    # Then voxel indices go from 0 to 3
    # If x < 1, then take the index of the first voxel => 0
    # If x > 3, then take the index of the last voxel  => 3

    if x < arr[1]:
        return 0
    if x > arr[length - 2]:
        return length - 2

    cdef int left = 1
    cdef int right = length - 2
    cdef int mid

    while left <= right:
        mid = (left + right) // 2
        if arr[mid] < x:
            left = mid + 1
        elif arr[mid] > x:
            right = mid - 1
        else:
            return mid

    return right


cpdef void traverse2d(
    long[:, :] pixels,          # Initialised to zero!
    double[:, :] lines,         # Has exactly 5 columns!
    double[:] grid_x,           # Has pixels.shape[0] + 1 elements!
    double[:] grid_y,           # Has pixels.shape[1] + 1 elements!
) nogil:
    ''' Fast voxel traversal for 2D lines (or LoRs).

    Function Signature:
        traverse3d(
            long[:, :] pixels,          # Initialised to zero!
            double[:, :] lines,         # Has exactly 7 columns!
            double[:] grid_x,           # Has pixels.shape[0] + 1 elements!
            double[:] grid_y,           # Has pixels.shape[1] + 1 elements!
        )

    This function computes the number of lines that passes through each pixel,
    saving the result in `pixels`. It does so in an efficient manner, in which
    for every line, only the pixels that it passes through are traversed.

    As it is highly optimised, this function does not perform any checks on the
    validity of the input data. Please check the parameters before calling
    `traverse2d`, as it WILL segfault on wrong input data. Details are given
    below, along with an example call.

    Parameters
    ----------
        pixels : numpy.ndarray(dtype = numpy.int64, ndim = 2)
            The `pixels` parameter is a numpy.ndarray of shape (X, Y) that
            has been initialised to zeros before the function call. The values
            will be modified in-place in the function to reflect the number of
            lines that pass through each pixel.
        lines : numpy.ndarray(dtype = numpy.float64, ndim = 2)
            The `lines` parameter is a numpy.ndarray of shape(N, 5), where each
            row is formatted as [time, x1, y1, x2, y2]. Only indices 1:5
            will be used as the two points P1 = [x1, y1] and P2 = [x2, y2]
            defining the line (or LoR).
        grid_x : numpy.ndarray(dtype = numpy.float64, ndim = 1)
            The grid_x parameter is a one-dimensional grid that delimits the
            pixels in the x-dimension. It must be *sorted* in ascending order
            with *equally-spaced* numbers and length X + 1 (pixels.shape[0] + 1).
        grid_y : numpy.ndarray(dtype = numpy.float64, ndim = 1)
            The grid_y parameter is a one-dimensional grid that delimits the
            pixels in the y-dimension. It must be *sorted* in ascending order
            with *equally-spaced* numbers and length Y + 1 (pixels.shape[1] + 1).

    Examples
    --------
    The input parameters can be easily generated using numpy before calling the
    function. For example, if a plane of 300 x 400 is split into
    30 x 40 pixels, a possible code would be:

    >>> import numpy as np
    >>> from pept.utilities.traverse import traverse2d
    >>>
    >>> plane = [300, 400]
    >>> number_of_pixels = [30, 40]
    >>> pixels = np.zeros(number_of_pixels)

    The grid has one extra element than the number of pixels. For example, 5
    pixels between 0 and 5 would be delimited by the grid [0, 1, 2, 3, 4, 5]
    which has 6 elements (see off-by-one errors - story of my life).

    >>> grid_x = np.linspace(0, plane[0], number_of_pixels[0] + 1)
    >>> grid_y = np.linspace(0, plane[1], number_of_pixels[1] + 1)
    >>>
    >>> random_lines = np.random.random((100, 5)) * 100

    Calling `traverse2d` will modify `pixels` in-place.

    >>> traverse2d(pixels, random_lines, grid_x, grid_y)

    Notes
    -----
    This function is an adaptation of a widely-used algorithm [1], optimised
    for PEPT LoRs traversal.

    .. [1] Amanatides J, Woo A. A fast voxel traversal algorithm for ray tracing.
       InEurographics 1987 Aug 24 (Vol. 87, No. 3, pp. 3-10).

    '''

    n_lines = lines.shape[0]
    cdef int nx = pixels.shape[0]
    cdef int ny = pixels.shape[1]

    # Grid size
    cdef double gsize_x = grid_x[1] - grid_x[0]
    cdef double gsize_y = grid_y[1] - grid_y[0]

    # The current pixel indices [ix, iy] that the line passes
    # through.
    cdef int ix, iy

    # Define a line as L(t) = U + t V
    # If an LoR is defined as two points P1 and P2, then
    # U = P1 and V = P2 - P1
    cdef double[2] p1, p2, u, v

    # The step [step_x, step_y, step_z] defines the sense of the LoR.
    # If V[0] is positive, then step_x = 1
    # If V[0] is negative, then step_x = -1
    cdef int step_x, step_y

    # The value of t at which the line passes through to the next
    # voxel, for each dimension.
    cdef double tnext_x, tnext_y

    # deltat indicates how far along the ray we must move (in units of
    # t) for each component to be equal to the size of the voxel in
    # that dimension.
    cdef double deltat_x, deltat_y

    cdef int i, j

    for i in range(n_lines):

        for j in range(2):
            p1[j] = lines[i, 1 + j]
            p2[j] = lines[i, 3 + j]

            u[j] = p1[j]
            v[j] = p2[j] - p1[j]

        ##############################################################
        # Initialisation stage

        step_x = 1 if v[0] >= 0 else -1
        step_y = 1 if v[1] >= 0 else -1

        # If, for dimension x, there are 5 pixels between coordinates 0
        # and 5, then the delimiting grid is [0, 1, 2, 3, 4, 5].
        # If the line starts at 1.5, then it is part of the voxel at
        # index 1

        ix = <int>(u[0] / gsize_x)
        iy = <int>(u[1] / gsize_y)

        # Check the indices are inside the voxel grid
        ''' This gives wrong results
        if ix < 0: ix = 0
        if ix >= nx: ix = nx - 1

        if iy < 0: iy = 0
        if iy >= ny: iy = ny - 1
        '''

        if (ix < 0 or ix >= nx or iy < 0 or iy >= ny):
            continue

        # If the line is going "up", the next voxel is the next one
        # If the line is going "down", the next voxel is the current one
        if v[0] > 0:
            tnext_x = (grid_x[ix + 1] - u[0]) / v[0]
        elif v[0] < 0:
            tnext_x = (grid_x[ix] - u[0]) / v[0]
        else:
            tnext_x = 0

        if v[1] > 0:
            tnext_y = (grid_y[iy + 1] - u[1]) / v[1]
        elif v[1] < 0:
            tnext_y = (grid_y[iy] - u[1]) / v[1]
        else:
            tnext_y = 0

        deltat_x = fabs((grid_x[1] - grid_x[0]) / v[0]) if v[0] else 0
        deltat_y = fabs((grid_y[1] - grid_y[0]) / v[1]) if v[1] else 0

        ###############################################################
        # Incremental traversal stage

        # Loop until we reach the last pixel in space
        while (ix < nx and iy < ny) and (ix >= 0 and iy >= 0):

            pixels[ix, iy] += 1

            # If p2 is fully bounded by the pixel, stop the algorithm
            if ((grid_x[ix] < p2[0] and grid_y[iy] < p2[1]) and
                (grid_x[ix + 1] > p2[0] and grid_y[iy + 1] > p2[1])):
                break

            # Select the minimum t that makes the line pass
            # through to the next voxel
            if tnext_x < tnext_y:
                ix = ix + step_x
                tnext_x = tnext_x + deltat_x
            else:
                iy = iy + step_y
                tnext_y = tnext_y + deltat_y

