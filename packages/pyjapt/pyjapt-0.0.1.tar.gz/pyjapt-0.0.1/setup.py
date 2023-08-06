import pathlib
from setuptools import setup, find_packages

with open("README.md", "r") as fh:
    long_description = fh.read()

setup(
    name="pyjapt",  # Replace with your own username
    version="0.0.1",
    author="Alejandro Klever",
    author_email="alejandroklever.workon@gmail.com",
    description="Just Another Parsing Tool written in Python",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/pypa/sampleproject",
    packages=find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
)
