from ..tier0 import execute


def equal (src1, src2, dst):
    """Determines if two images A and B equal pixel wise. 
    
    <pre>f(a, b) = 1 if a == b; 0 otherwise.</pre> 

    Available for: 2D, 3D

    Parameters
    ----------
    (Image source1, Image source2, ByRef Image destination)
    todo: Better documentation will follow
          In the meantime, read more: https://clij.github.io/clij2-docs/reference_equal


    Returns
    -------

    """


    parameters = {
        "src1":src1,
        "src2":src2,
        "dst":dst
    }

    execute(__file__, 'equal_' + str(len(dst.shape)) + 'd_x.cl', 'equal_' + str(len(dst.shape)) + 'd', dst.shape, parameters)

