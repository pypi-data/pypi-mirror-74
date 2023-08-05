import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="pyclesperanto_prototype", # Replace with your own username
    version="0.2.0",
    author="haesleinhuepf",
    author_email="rhaase@mpi-cbg.de",
    description="OpenCL based GPU-accelerated image processing (an early prototype)",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/clEsperanto/pyclesperanto_prototype",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: BSD License",
        "Operating System :: OS Independent",
    ],
    install_requires=["numpy", "pyopencl", "toolz"],
    python_requires='>=3.7',
)