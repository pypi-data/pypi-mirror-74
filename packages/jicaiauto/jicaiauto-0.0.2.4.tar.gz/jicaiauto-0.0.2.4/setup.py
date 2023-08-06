import setuptools
from jicaiauto.__version__ import __version__

with open("README.md", "r", encoding='utf-8') as fh:
    long_description = fh.read()

setuptools.setup(
    name="jicaiauto",
    version=__version__,
    author="Tser",
    author_email="807447312@qq.com",
    description="jicaiauto是对自动化框架的第三次更新，功能覆盖UI自动化与API自动化意在帮助对自动化有更多需求且过多时间写代码的人群，让大家的时间花在业务的实现上",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/jicaiyunshang/jicaiauto",
    packages=setuptools.find_packages(),
    keywords="jicai auto jicaiauto automation test framework",
    classifiers=[
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "License :: OSI Approved :: Apache Software License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
    install_requires=[
        "pytest",
        "pytest-html",
        "pytest-ordering",
    	"selenium",
        "jmespath",
        "requests",
        "pyyaml",
        "Appium-Python-Client",
    ],
    package_data={
        'jicaiauto': [
            'Pipfile',
            'Pipfile.lock',
            'data/jicaiauto.db',
            'test/runTestCase.bat'
        ],
    },
    entry_points={'console_scripts': [
        'jicaiautoTimer = jicaiauto.jicaiautoTimer:main',
    ]},
)

#python setup.py sdist bdist_wheel

#python -m twine upload dist/*