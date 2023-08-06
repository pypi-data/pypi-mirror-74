"""
Patchify.py
"""

from itertools import product
from typing import Tuple, Union, cast

import numpy as np
from skimage.util import view_as_windows


Imsize = Union[Tuple[int, int], Tuple[int, int, int]]


def patchify(image: np.ndarray, patch_size: Imsize, step: int = 1) -> np.ndarray:
    """
    Split a 2D or 3D image into small patches given the patch size.

    Parameters
    ----------
    image: the image to be split. It can be 2d (m, n) or 3d (k, m, n)
    patch_size: the size of a single patch
    step: the step size between patches

    Examples
    --------
    >>> image = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
    >>> patches = patchify(image, (2, 2), step=1)  # split image into 2*3 small 2*2 patches.
    >>> assert patches.shape == (2, 3, 2, 2)
    >>> reconstructed_image = unpatchify(patches, image.shape)
    >>> assert (reconstructed_image == image).all()
    """
    return view_as_windows(image, patch_size, step)


def unpatchify(patches: np.ndarray, imsize: Imsize) -> np.ndarray:
    """
    Merge patches into the orignal image

    Parameters
    ----------
    patches: the patches to merge. It can be patches for a 2d image (k, l, m, n)
             or 3d volume (i, j, k, l, m, n)
    imsize: the size of the original image or volume

    Examples
    --------
    >>> image = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
    >>> patches = patchify(image, (2, 2), step=1)  # split image into 2*3 small 2*2 patches.
    >>> assert patches.shape == (2, 3, 2, 2)
    >>> reconstructed_image = unpatchify(patches, image.shape)
    >>> assert (reconstructed_image == image).all()
    """

    assert len(patches.shape) / 2 == len(
        imsize
    ), "The patches dimension is not equal to the original image size"

    if len(patches.shape) == 4:
        return _unpatchify2d(patches, cast(Tuple[int, int], imsize))
    elif len(patches.shape) == 6:
        return _unpatchify3d(patches, cast(Tuple[int, int, int], imsize))
    else:
        raise NotImplementedError(
            "Unpatchify only supports a matrix of 2D patches (k, l, m, n)"
            f"or 3D volumes (i, j, k, l, m, n), but got: {patches.shape}"
        )


def _unpatchify2d(  # pylint: disable=too-many-locals
    patches: np.ndarray, imsize: Tuple[int, int]
) -> np.ndarray:

    assert len(patches.shape) == 4

    i_h, i_w = imsize
    image = np.zeros(imsize, dtype=patches.dtype)

    n_h, n_w, p_h, p_w = patches.shape

    # Calculat the overlap size in each axis
    o_w = 0 if n_w == 1 else (n_w * p_w - i_w) / (n_w - 1)
    o_h = 0 if n_h == 1 else (n_h * p_h - i_h) / (n_h - 1)

    # The overlap should be integer, otherwise the patches are unable
    # to reconstruct into a image with given shape
    assert int(o_w) == o_w
    assert int(o_h) == o_h

    o_w = int(o_w)  # overlap
    o_h = int(o_h)

    s_w = p_w - o_w  # step
    s_h = p_h - o_h

    i, j = 0, 0

    while True:
        i_o, j_o = i * s_h, j * s_w

        image[i_o : i_o + p_h, j_o : j_o + p_w] = patches[i, j]

        if j < n_w - 1:
            j = min((j_o + p_w) // s_w, n_w - 1)
        elif i < n_h - 1 and j >= n_w - 1:
            # Go to next row
            i = min((i_o + p_h) // s_h, n_h - 1)
            j = 0
        elif i >= n_h - 1 and j >= n_w - 1:
            # Finished
            break
        else:
            raise RuntimeError("Unreachable")

    return image


def _unpatchify3d(  # pylint: disable=too-many-locals
    patches: np.ndarray, imsize: Tuple[int, int, int]
) -> np.ndarray:

    assert len(patches.shape) == 6

    i_h, i_w, i_c = imsize
    image = np.zeros(imsize, dtype=patches.dtype)

    n_h, n_w, n_c, p_h, p_w, p_c = patches.shape

    # Calculat the overlap size in each axis
    o_w = 0 if n_w == 1 else (n_w * p_w - i_w) / (n_w - 1)
    o_h = 0 if n_h == 1 else (n_h * p_h - i_h) / (n_h - 1)
    o_c = 0 if n_c == 1 else (n_c * p_c - i_c) / (n_c - 1)

    # The overlap should be integer, otherwise the patches are unable
    # to reconstruct into a image with given shape
    assert int(o_w) == o_w
    assert int(o_h) == o_h
    assert int(o_c) == o_c

    o_w = int(o_w)
    o_h = int(o_h)
    o_c = int(o_c)

    s_w = p_w - o_w
    s_h = p_h - o_h
    s_c = p_c - o_c

    i, j, k = 0, 0, 0

    while True:

        i_o, j_o, k_o = i * s_h, j * s_w, k * s_c

        image[i_o : i_o + p_h, j_o : j_o + p_w, k_o : k_o + p_c] = patches[i, j, k]

        if k < n_c - 1:
            k = min((k_o + p_c) // s_c, n_c - 1)
        elif j < n_w - 1 and k >= n_c - 1:
            j = min((j_o + p_w) // s_w, n_w - 1)
            k = 0
        elif i < n_h - 1 and j >= n_w - 1 and k >= n_c - 1:
            i = min((i_o + p_h) // s_h, n_h - 1)
            j = 0
            k = 0
        elif i >= n_h - 1 and j >= n_w - 1 and k >= n_c - 1:
            # Finished
            break
        else:
            raise RuntimeError("Unreachable")

    return image
