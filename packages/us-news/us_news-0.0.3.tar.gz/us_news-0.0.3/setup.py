import setuptools

# with open("README.md", "r") as f:
#     readme = f.read()

# with open("requirements.txt", "r") as f:
#     reqs = [lib.strip() for lib in f if lib]

setuptools.setup(
    name="us_news",
    version="0.0.3",
    description="A web crawler to crawl Best Global University Ranking on usnews website",
    long_description='',
    author='Low Wei Hong',
    author_email='M140042@e.ntu.edu.sg',
    url="https://github.com/M140042/us_news",
    packages=setuptools.find_packages(),
    keywords="us_news",
    classifiers=[
        "Programming Language :: Python :: 3",
    ],
    install_requires=['pandas', 'httpx']
)
