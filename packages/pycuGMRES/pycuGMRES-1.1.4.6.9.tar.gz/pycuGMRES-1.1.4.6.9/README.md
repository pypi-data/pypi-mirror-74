# pycuGMRES

GMRES implementation for Toeplitz-like (Toeplitz, Hankel, Circulant) matrices and mixed (combinations of Diagonal ones and Toeplitz-like ones) matrices

We propose implementations of the Generalized Minimal Residual Method (GMRES) for solving linear systems based on dense, Toeplitz or mixed matrices. The software consists of a python module and a C++ library. The mixed matrices consist of the sum of the diag- onal and the Toeplitz matrices. The GMRES solver is parallelized for running on NVIDIA GPGPU accelerator. We report on the efficiency of the parallelization method applying GMRES to the Helmholtz linear system based on the use of Green’s Function Integral Equation Method (GFIEM) for computing electric field distribution in the design domain.
