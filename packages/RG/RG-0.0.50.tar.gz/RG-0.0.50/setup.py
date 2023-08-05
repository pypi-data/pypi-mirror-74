import setuptools


setuptools.setup(
    name="RG",
    version="0.0.50",
    author="Ryan Gosselin",
    author_email="ryan.gosselin@usherbrooke.ca",
    url="https://www.usherbrooke.ca/gchimiquebiotech/departement/professeurs/ryan-gosselin/",
    packages=["RG"],
    description="Ryan's go-to Python functions",
    long_description="Miscellaneous functions:\
    \n\
    \nWork with data:\
    \n\nxlsread, regress, colorspectra, R2, axaline, lags, DTW, DTW_batch\
    \n\
    \nMultivariate data analysis\
    \nPCA, PLS, VIP, mbPLS, LDA, PCA_ellipse, ICA\
    \n\
    \nSpectral pretreatments\
    \ncenter, autoscale, SNV, MSC, EMSC, Savitzky Golay, detrend, baseline",
    long_description_content_type="text/markdown",
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
)