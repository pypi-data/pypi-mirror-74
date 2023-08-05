# PyCO2SYS: marine carbonate system calculations in Python.
# Copyright (C) 2020  Matthew Paul Humphreys et al.  (GNU GPLv3)
"""Convert units and calculate conversion factors."""

from autograd.numpy import array, full, isin, log10, nan, shape, size, unique, where
from autograd.numpy import all as np_all
from autograd.numpy import max as np_max
from .constants import Tzero


def TempC2K(TempC):
    """Convert temperature from degC to K."""
    return TempC + Tzero


def TempK2C(TempK):
    """Convert temperature from K to degC."""
    return TempK - Tzero


def Pdbar2bar(Pdbar):
    """Convert pressure from dbar to bar."""
    return Pdbar / 10.0


def Pbar2dbar(Pbar):
    """Convert pressure from bar to dbar."""
    return Pbar * 10.0


def sws2tot(TSO4, KSO4, TF, KF):
    """Seawater to Total pH scale conversion factor."""
    return (1.0 + TSO4 / KSO4) / (1.0 + TSO4 / KSO4 + TF / KF)


def free2tot(TSO4, KSO4):
    """Free to Total pH scale conversion factor."""
    return 1.0 + TSO4 / KSO4


def fH_PTBO87(TempK, Sal):
    """fH following PTBO87."""
    # === CO2SYS.m comments: =======
    # Peng et al, Tellus 39B:439-458, 1987:
    # They reference the GEOSECS report, but round the value
    # given there off so that it is about .008 (1#) lower. It
    # doesn't agree with the check value they give on p. 456.
    return 1.29 - 0.00204 * TempK + (0.00046 - 0.00000148 * TempK) * Sal ** 2


def fH_TWB82(TempK, Sal):
    """fH following TWB82."""
    # === CO2SYS.m comments: =======
    # Takahashi et al, Chapter 3 in GEOSECS Pacific Expedition,
    # v. 3, 1982 (p. 80).
    return 1.2948 - 0.002036 * TempK + (0.0004607 - 0.000001475 * TempK) * Sal ** 2


def pH2allscales(pH, pHScale, KSO4, KF, TSO4, TF, fH):
    """Calculate pH on all scales.

    This takes the pH on the given scale and finds the pH on all scales.

    Based on FindpHOnAllScales, version 01.02, 01-08-97, by Ernie Lewis.
    """
    FREEtoTOT = free2tot(TSO4, KSO4)
    SWStoTOT = sws2tot(TSO4, KSO4, TF, KF)
    factor = full(size(pH), nan)
    factor = where(pHScale == 1, 0.0, factor)  # Total scale
    factor = where(pHScale == 2, log10(SWStoTOT), factor)  # Seawater scale
    factor = where(pHScale == 3, log10(FREEtoTOT), factor)  # Free scale
    factor = where(pHScale == 4, log10(SWStoTOT / fH), factor)  # NBS scale
    pHtot = pH - factor  # pH comes into this function on the given scale
    pHNBS = pHtot + log10(SWStoTOT / fH)
    pHfree = pHtot + log10(FREEtoTOT)
    pHsws = pHtot + log10(SWStoTOT)
    return pHtot, pHsws, pHfree, pHNBS


def options_old2new(KSO4CONSTANTS):
    """Convert traditional CO2SYS `KSO4CONSTANTS` input to new separated format."""
    if shape(KSO4CONSTANTS) == ():
        KSO4CONSTANTS = array([KSO4CONSTANTS])
    only2KSO4 = {
        1: 1,
        2: 2,
        3: 1,
        4: 2,
    }
    only2BORON = {
        1: 1,
        2: 1,
        3: 2,
        4: 2,
    }
    KSO4CONSTANT = array([only2KSO4[K] for K in KSO4CONSTANTS.ravel()])
    BORON = array([only2BORON[K] for K in KSO4CONSTANTS.ravel()])
    return KSO4CONSTANT, BORON


def _flattenfirst(args, dtype):
    # Determine and check lengths of input vectors
    arglengths = array([size(arg) for arg in args])
    assert (
        size(unique(arglengths[arglengths != 1])) <= 1
    ), "Inputs must all be the same length as each other or of length 1."
    # Make vectors of all inputs
    npts = np_max(arglengths)
    return (
        [
            full(npts, arg, dtype=dtype)
            if size(arg) == 1
            else arg.ravel().astype(dtype)
            for arg in args
        ],
        npts,
    )


def _flattenafter(args, npts, dtype):
    # Determine and check lengths of input vectors
    arglengths = array([size(arg) for arg in args])
    assert np_all(
        isin(arglengths, [1, npts])
    ), "Inputs must all be the same length as each other or of length 1."
    # Make vectors of all inputs
    return [
        full(npts, arg, dtype=dtype) if size(arg) == 1 else arg.ravel().astype(dtype)
        for arg in args
    ]


def _flattentext(args, npts):
    # Determine and check lengths of input vectors
    arglengths = array([size(arg) for arg in args])
    assert np_all(
        isin(arglengths, [1, npts])
    ), "Inputs must all be the same length as each other or of length 1."
    # Make vectors of all inputs
    return [full(npts, arg) if size(arg) == 1 else arg.ravel() for arg in args]


def options_new2old(KSO4CONSTANT, BORON):
    """Convert separated `KSO4CONSTANT` and `BORON` options into traditional CO2SYS
    `KSO4CONSTANTS` input.
    """
    pair2one = {
        (1, 1): 1,
        (2, 1): 2,
        (1, 2): 3,
        (2, 2): 4,
    }
    KSO4CONSTANT, BORON = _flattenfirst((KSO4CONSTANT, BORON), int)[0]
    pairs = zip(KSO4CONSTANT, BORON)
    return array([pair2one[pair] for pair in pairs])
