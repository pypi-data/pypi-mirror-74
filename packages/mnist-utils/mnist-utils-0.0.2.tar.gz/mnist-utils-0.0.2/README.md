# MNIST Utils

This is a simple package for working with MNIST Images. If you have a physical mnist style gz file, you can use this package to load the images from the file. 

This is useful for when you want to run a trained model for example and provide a PNG to the model. The model likely is trained on a numpy array -> this just handles the conversion from PNG to grayscale numpy array.


To get the latest version:

    pip install mnist-utils


### Working on the project

To build: `python setup.py sdist bdist_wheel`
To upload: `python -m twine upload dist/*` (Token name: pypi_all_purpose)


