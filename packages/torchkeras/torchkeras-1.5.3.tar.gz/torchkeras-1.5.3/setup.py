# -*- coding:utf-8 -*-
import setuptools
with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="torchkeras",
    version="1.5.3",
    author="PythonAiRoad",
    author_email="lyhue1991@163.com",
    description="pytorch ❤️ keras",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/lyhue1991/torchkeras",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.5'
)

