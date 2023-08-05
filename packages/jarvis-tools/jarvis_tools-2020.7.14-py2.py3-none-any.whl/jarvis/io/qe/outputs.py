"""Module for analyzing QE outputs."""


class QEout(object):
    """Module for parsing screen QE output files."""

    def __init__(self, filename):
        """Intialize class with filename."""
        self.filename = filename
        f = open(filename, "r")
        lines = f.read().splitlines()
        f.close()
        self.lines = lines

    def get_total_energy(self):
        """Get total energy in Ry."""
        energies = []
        for i in self.lines:
            if "total energy              =" in i:
                energy = float(i.split()[-2])
                energies.append(energy)
        return energies[-1]

    def get_efermi(self):
        """Get fermi energy in eV."""
        efs = []
        for i in self.lines:
            if "the Fermi energy is" in i:
                efs.append(float(i.split()[-2]))
        return efs[-1]

    def get_band_enegies(self):
        """Get band energies in eV."""
        band_energies = []
        for ii, i in enumerate(self.lines):
            if "bands (ev)" in i:
                band_energies.append(
                    [float(j) for j in self.lines[ii + 2].split()]
                )
        return band_energies


"""
if __name__ == "__main__":
    en = QEout("qe.out").get_total_energy()
    print((en))
    assert en == -19.11812163

    en = QEout("qe.out").get_band_enegies()
    print((en), len(en))
    assert en[0][0] == -5.8325
    en = QEout("qe.out").get_efermi()
    print((en))
    assert en == 6.4236
"""
