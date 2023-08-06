"""
Some extra picklers needed to gracefully dump and load a canvas.
"""

import copyreg

import cairo


# Allow cairo.Matrix to be pickled:
def construct_cairo_matrix(*args):
    return cairo.Matrix(*args)


def reduce_cairo_matrix(m):
    return construct_cairo_matrix, tuple(m)


copyreg.pickle(cairo.Matrix, reduce_cairo_matrix, construct_cairo_matrix)
