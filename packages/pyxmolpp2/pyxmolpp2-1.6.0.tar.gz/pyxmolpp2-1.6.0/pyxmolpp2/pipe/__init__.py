from typing import Sequence, List, Union
from pyxmolpp2 import Frame, AtomPredicate, MoleculePredicate, XYZ, CoordSelection, Molecule, Translation, Trajectory


class TrajectoryProcessor:

    def copy(self):
        raise NotImplementedError()

    def __call__(self, frame: Frame) -> Frame:
        raise NotImplementedError()


class ProcessedTrajectory:
    def __init__(self, trajectory: Union[Trajectory, Trajectory.Slice, "ProcessedTrajectory"],
                 processor: TrajectoryProcessor):
        self.trajectory = trajectory
        self.processor = processor

    def __iter__(self):
        for frame in self.trajectory:
            yield self.processor(frame)

    def __getitem__(self, index):
        if isinstance(index, slice):
            return ProcessedTrajectory(self.trajectory[index], self.processor.copy())
        else:
            return self.processor(self.trajectory[index])

    def __len__(self):
        return len(self.trajectory)

    @property
    def size(self):
        return len(self)

    @property
    def n_frames(self):
        return len(self)

    @property
    def n_atoms(self):
        return self.trajectory.n_atoms


class Align(TrajectoryProcessor):
    def __init__(self, by: AtomPredicate, reference: Frame = None, move_only: AtomPredicate = None):
        self.by = by
        self.reference = reference
        self.move_only = move_only
        self.frame_coords = None
        self.moved_coords = None
        self.ref_coords = None

    def __ror__(self, trajectory: Sequence[Frame]):
        if self.reference is None:
            self.reference = trajectory[0]
        return ProcessedTrajectory(trajectory, self)

    def __call__(self, frame: Frame):
        if self.frame_coords is None:
            self.frame_coords = frame.atoms.filter(self.by).coords
            self.ref_coords = self.reference.atoms.filter(self.by).coords
            assert self.frame_coords.size == self.ref_coords.size
            if self.move_only:
                self.moved_coords = frame.atoms.filter(self.move_only).coords
            else:
                self.moved_coords = frame.coords
        self.moved_coords.apply(self.frame_coords.alignment_to(self.ref_coords))
        return frame

    def copy(self):
        return Align(by=self.by, reference=self.reference, move_only=self.move_only)


class ScaleUnitCell(TrajectoryProcessor):

    def copy(self):
        return self

    def __init__(self, summary_volume_filename, column=1, max_rows=None):
        try:
            # Use faster pandas.read_csv() if available
            import pandas as pd
            self.volume = \
                pd.read_csv(summary_volume_filename,
                            sep=r"\s+", header=None, usecols=[column], nrows=max_rows)[0].values
        except ImportError:
            import numpy as np
            self.volume = np.genfromtxt(summary_volume_filename, usecols=[column], max_rows=max_rows)

    def __ror__(self, trajectory: Sequence[Frame]):
        return ProcessedTrajectory(trajectory, self)

    def __call__(self, frame: Frame):
        assert frame.index < len(self.volume), "Frame index is greater than supplied volume array"
        frame.cell.scale_to_volume(self.volume[frame.index])
        return frame


class AssembleQuaternaryStructure(TrajectoryProcessor):

    def __init__(self, of: MoleculePredicate, by: AtomPredicate, reference: Frame = None):
        self.molecules_selector = of
        self.reference = reference
        self.reference_atoms_selector = by

        self.ref_first_molecule_coords: CoordSelection = None
        self.molecules: List[Molecule] = []
        self.molecules_coords: List[CoordSelection] = []
        self.reference_mean_coords: List[XYZ] = []

    def __ror__(self, trajectory: Sequence[Frame]):
        if self.reference is None:
            self.reference = trajectory[0]
        mols = self.reference.molecules.filter(self.molecules_selector)
        self.reference_mean_coords = [
            mol.atoms.filter(self.reference_atoms_selector).coords.mean()
            for mol in mols
        ]
        self.ref_first_molecule_coords = mols[0].atoms.filter(self.reference_atoms_selector).coords
        assert len(self.reference_mean_coords) > 1, "Number of selected molecules must be greater than 1"
        return ProcessedTrajectory(trajectory, self)

    def __call__(self, frame: Frame):
        if not self.molecules_coords:
            self.molecules = [mol for mol in frame.molecules.filter(self.molecules_selector)]
            self.molecules_coords = [
                mol.atoms.filter(self.reference_atoms_selector).coords
                for mol in self.molecules
            ]
            assert len(self.molecules_coords) == len(self.reference_mean_coords)
            assert frame.cell.volume > 1, "Did you forget to set periodic box?"
        # first molecule in assembly is aligned by convention
        alignment = self.ref_first_molecule_coords.alignment_to(self.molecules_coords[0])
        # calculate reference coordinates for current frame
        ref_mean_coords = [alignment.transform(r) for r in self.reference_mean_coords]

        # shift rest of molecules to match reference coordinates as close as possible
        for mol_n in range(1, len(ref_mean_coords)):
            ref_point = ref_mean_coords[mol_n]
            mol = self.molecules[mol_n]
            mol_point = self.molecules_coords[mol_n].mean()
            closest = frame.cell.closest_image_to(ref_point, mol_point)
            if closest.shift.distance(XYZ()) > 0:
                mol.coords.apply(Translation(closest.shift))
        return frame

    def copy(self):
        return AssembleQuaternaryStructure(of=self.molecules_selector, by=self.reference_atoms_selector,
                                           reference=self.reference)
