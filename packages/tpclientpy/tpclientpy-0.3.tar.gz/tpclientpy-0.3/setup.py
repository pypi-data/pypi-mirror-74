from setuptools import setup, find_packages

setup(name='tpclientpy',
      version='0.3',
      description='TradePatio client',
      packages=find_packages(exclude=['example']),
      author_email='darkfoxs96@gmail.com',
      zip_safe=False)
