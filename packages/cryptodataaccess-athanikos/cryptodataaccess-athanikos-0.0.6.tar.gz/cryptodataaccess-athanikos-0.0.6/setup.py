import setuptools
from distutils.core import setup


with open("README.md", "r") as fh:
    long_description = fh.read()

setup(
    name='cryptodataaccess-athanikos',
    version="0.0.6",
    license='MIT License',
    author='Nikos Athanasakis',
    packages=setuptools.find_packages(),
    author_email='athanikos@gmail.com',
    description='A set of rest api methods used for calculating statistics and applying models for football data ',
    tests_require=['pytest'],
    classifiers=[
        "Development Status :: 1 - Planning",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
)
