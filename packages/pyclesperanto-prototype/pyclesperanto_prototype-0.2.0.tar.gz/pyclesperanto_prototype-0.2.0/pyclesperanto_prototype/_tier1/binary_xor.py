from .._tier0 import execute

def binary_xor (src1, src2, dst):
    """
    documentation placeholder
    """


    parameters = {
        "src1":src1,
        "src2":src2,
        "dst":dst
    }

    execute(__file__, 'binary_xor_' + str(len(dst.shape)) + 'd_x.cl', 'binary_xor_' + str(len(dst.shape)) + 'd', dst.shape, parameters)
