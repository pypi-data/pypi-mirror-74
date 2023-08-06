import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="genn",
    version="0.7.2",
    author="Abdelrahman Mahmoud, Fahed Sabellioglu",
    author_email="magedmahmoud@std.sehir.edu.tr, fahedshaabani@std.sehir.edu.tr",
    description="High level interface for text applications using PyTroch RNN's.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url='https://github.com/FahedSabellioglu/genn',
    packages=setuptools.find_packages(),
    install_requires  = ['torch==1.4.0','numpy','pytorch-transformers'],
    license = 'MIT'
)