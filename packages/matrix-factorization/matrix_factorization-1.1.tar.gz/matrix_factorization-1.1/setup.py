import os
import setuptools


readme_path = os.path.join(os.path.dirname(__file__), "README.md")
with open(readme_path) as f:
    long_description = f.read()


setuptools.setup(
    name="matrix_factorization",
    version="1.1",
    author="Quang-Vinh Do",
    author_email="qdo086@uottawa.ca",
    description="Library for matrix factorization for recommender systems using collaborative filtering",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/Quang-Vinh/MatrixFactorization",
    download_url="https://github.com/Quang-Vinh/MatrixFactorization/archive/v1.1.tar.gz",
    license="MIT",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "Operating System :: OS Independent",
        "License :: OSI Approved :: MIT License",
    ],
    python_requires=">=3.6",
    install_requires=["numba", "numpy", "pandas", "scikit-learn", "scipy"],
)
