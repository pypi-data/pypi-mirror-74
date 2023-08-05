# Copyright (c) 2019 Leiden University Medical Center
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

from setuptools import setup

with open("README.md", "r") as readme_file:
    LONG_DESCRIPTION = readme_file.read()

setup(name="chunked-scatter",
      version="1.0.0",
      description="Chunk and scatter the regions in a bed or sequence dict "
                  "file",
      long_description=LONG_DESCRIPTION,
      long_description_content_type='text/markdown',
      classifiers=[
        "Programming Language :: Python :: 3 :: Only",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Topic :: Scientific/Engineering :: Bio-Informatics",
        "Development Status :: 3 - Alpha",
        "License :: OSI Approved :: MIT License",
      ],
      python_requires=">=3.6",
      # This pysam version supports vcf and not much changes to the interface
      # after this release.
      # pysam has much less dependencies than cyvcf2
      install_requires=["pysam>=0.11.2"],
      keywords="bioinformatics",
      url="https://github.com/biowdl/chunked-scatter",
      author="Leiden University Medical Center",
      author_email="sasc@lumc.nl",
      license="MIT",
      packages=["chunked_scatter"],
      package_dir={'': 'src'},
      entry_points={
          "console_scripts":
              ["chunked-scatter=chunked_scatter.chunked_scatter:main",
               "scatter-regions=chunked_scatter.scatter_regions:main"]
      })
