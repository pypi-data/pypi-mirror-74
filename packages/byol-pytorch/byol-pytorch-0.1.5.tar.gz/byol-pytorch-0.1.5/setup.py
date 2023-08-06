from setuptools import setup, find_packages

setup(
  name = 'byol-pytorch',
  packages = find_packages(exclude=['examples']),
  version = '0.1.5',
  license='MIT',
  description = 'Self-supervised contrastive learning made simple',
  author = 'Phil Wang',
  author_email = 'lucidrains@gmail.com',
  url = 'https://github.com/lucidrains/byol-pytorch',
  keywords = ['self-supervised learning', 'artificial intelligence'],
  install_requires=[
      'torch',
      'kornia'
  ],
  classifiers=[
      'Development Status :: 4 - Beta',
      'Intended Audience :: Developers',
      'Topic :: Scientific/Engineering :: Artificial Intelligence',
      'License :: OSI Approved :: MIT License',
      'Programming Language :: Python :: 3.6',
  ],
)