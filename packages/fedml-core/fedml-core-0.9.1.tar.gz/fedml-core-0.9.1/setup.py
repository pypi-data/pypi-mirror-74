import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="fedml-core",
    version="0.9.1",
    author="Chaoyang He",
    author_email="chaoyanghe.com@gmail.com",
    description="FedML",
    long_description="FedML: A Flexible and Generic Federated Machine Learning Library and Benchmark",
    long_description_content_type="text/markdown",
    url="https://github.com/chaoyanghe/fedml",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
)

"""     test
__token__
pypi-AgENdGVzdC5weXBpLm9yZwIkYzFhYmFmNmQtN2ZlOS00ZGRhLTkxMmMtYWVhNTY5NjMyNTA3AAIleyJwZXJtaXNzaW9ucyI6ICJ1c2VyIiwgInZlcnNpb24iOiAxfQAABiACMRwUEe9kuN40ufCJiCKCNYlkeGHmEiDDp-b7e7xWhQ
"""

"""     release
__token__
pypi-AgEIcHlwaS5vcmcCJDVhMWJlYTllLWI4NGQtNDg3MS1iYTMzLTVmZGZhNzk5ZWIyYwACJXsicGVybWlzc2lvbnMiOiAidXNlciIsICJ2ZXJzaW9uIjogMX0AAAYgab-BpSrv0FAR_aZnvHvlh1TpezVVYwvhbwgF8Zmmuzs
"""