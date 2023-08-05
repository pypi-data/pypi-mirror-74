from setuptools import setup,find_packages

with open("README.md", "r") as fh:
    long_description = fh.read()

s = setup(
    name="filex",
    version="1.0",
    license="MIT",
    description="FileX Module",
    url="http://rx7.ir",
    packages=find_packages(),
    python_requires = ">= 3.4",
    author="Ramin RX7",
    author_email="rawmin.rx@gmail.com",

    classifiers=['Programming Language :: Python :: 3'],
    long_description=long_description,
    long_description_content_type="text/markdown",
    )
