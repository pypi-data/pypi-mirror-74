from ..tier0 import execute

def laplace_box (src, dst):
    """Applies the Laplace operator (Box neighborhood) to an image.

    Available for: 2D, 3D

    Parameters
    ----------
    (Image input, ByRef Image destination)
    todo: Better documentation will follow
          In the meantime, read more: https://clij.github.io/clij2-docs/reference_laplaceBox


    Returns
    -------

    """


    parameters = {
        "dst":dst,
        "src":src
    }

    execute(__file__, 'laplace_box_' + str(len(dst.shape)) + 'd_x.cl', 'laplace_box_' + str(len(dst.shape)) + 'd', dst.shape, parameters)
