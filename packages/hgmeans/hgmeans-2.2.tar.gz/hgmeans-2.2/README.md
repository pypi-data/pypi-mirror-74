# Clean files
make clean

# Copy /hgmeans folder with .cpp and .h files
make hgmeans

# Use Cython to create the interface with Python -- here the hgmeans.cpp file should be created
make build

# Create Python package -- here a tarball file should be created in /dist folder
make sdist

# To install the package locally, run:
python3 -m pip install dist/*
<!-- sudo pip install dist/* -->

# To publish the package in PyPi repository, run:
sudo twine upload dist/*