from ..tier0 import execute

def binary_subtract (src1, src2, dst):
    """Subtracts one binary image from another.

    Available for: 2D, 3D

    Parameters
    ----------
    (Image minuend, Image subtrahend, ByRef Image destination)
    todo: Better documentation will follow
          In the meantime, read more: https://clij.github.io/clij2-docs/reference_binarySubtract


    Returns
    -------

    """


    parameters = {
        "dst": dst,
        "src1":src1,
        "src2":src2
    }

    # TODO: Rename cl file and kernel function to fit to naming conventions. This needs to be done in clij2 as well.
    execute(__file__, 'binarySubtract' + str(len(dst.shape)) + 'd_x.cl', 'binary_subtract_image' + str(len(dst.shape)) + 'd', dst.shape, parameters)
