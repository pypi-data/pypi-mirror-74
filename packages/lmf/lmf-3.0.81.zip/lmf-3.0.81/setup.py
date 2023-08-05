from __future__ import print_function
from setuptools import setup, find_packages
import sys

setup(
    name="lmf",
    version="3.0.81" ,
    author="lanmengfei",
    author_email="865377886@qq.com",
    description="兰孟飞深圳市筑龙科技的工作",
    long_description=open("README.rst",encoding="utf8").read(),
 
    url="https://github.com/lanmengfei/testdm",
    packages=find_packages(),
    install_requires=[
        "pandas >= 0.13",
        "beautifulsoup4>=4.6.3",
        "cx-Oracle",
        "numpy",
        "psycopg2-binary",
        "xlsxwriter",
        "xlrd",
        "requests",
        "lxml",
        "sqlalchemy",
        "pymysql",
        "jieba",
        "pymssql",
        "openpyxl",

        ],
    classifiers=[
        "Environment :: Web Environment",
        "Intended Audience :: Developers",
        "Operating System :: OS Independent",
        "Topic :: Text Processing :: Indexing",
        "Topic :: Utilities",
        "Topic :: Internet",
        "Topic :: Software Development :: Libraries :: Python Modules",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.5"
    ],
)

#python  setup.py sdist &  twine upload dist/* & rd /s /q dist & rd /s /q lmf.egg-info & python -m pip install lmf==2.3.0