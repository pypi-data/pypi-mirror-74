import os
import numpy as np
import pytest
from brainrender.scene import Scene
from brainrender.Utils.volume import (
    load_labelled_volume,
    extract_volume_surface,
    extract_label_mesh,
)
from brainrender.Utils.camera import get_camera_params
from brainrender.Utils.data_io import listdir, get_subdirs, get_file_name
from brainrender.Utils.data_manipulation import get_coords, get_slice_coord
from brainrender.colors import (
    get_random_colormap,
    get_n_shades_of,
    getColor,
    getColorName,
    colorMap,
    check_colors,
)


@pytest.fixture
def scene():
    return Scene()


def test_volume_utils(scene):
    path = str(scene.atlas.root_dir / "annotation.tiff")

    vol = load_labelled_volume(path)
    extract_volume_surface(vol)
    extract_label_mesh(vol, 1)


def test_get_camera_params(scene):
    if not isinstance(get_camera_params(scene), dict):
        raise ValueError

    if not isinstance(get_camera_params(camera=scene.plotter.camera), dict):
        raise ValueError


def test_io():
    fld = os.getcwd()
    if not isinstance(listdir(fld), list):
        raise ValueError
    if not isinstance(get_subdirs(fld), list):
        raise ValueError
    if not isinstance(get_file_name("brainrender/scene.py"), str):
        raise ValueError


def test_get_coords():
    c1 = get_coords([1, 2, 3])

    c5 = get_coords([1, 2, 3], mirror_ax="x", mirror=1)
    c6 = get_coords([1, 2, 3], mirror_ax="y", mirror=1)
    c7 = get_coords([1, 2, 3], mirror_ax="z", mirror=1)

    for c in [c1, c5, c6, c7]:
        if not isinstance(c, (tuple, list)):
            raise ValueError
        if not len(c) == 3:
            raise ValueError


def test_get_slice():
    get_slice_coord([0.0, 100.0], 0.5)


def test_colors():
    if not isinstance(get_random_colormap(), str):
        raise ValueError

    cols = get_n_shades_of("green", 40)
    if not isinstance(cols, list):
        raise ValueError
    if len(cols) != 40:
        raise ValueError

    getColor("orange")
    getColor([1, 1, 1])
    getColor("k")
    getColor("#ffffff")
    getColor(7)
    getColor(-7)

    getColorName("#ffffff")

    cols = colorMap([0, 1, 2])
    if not isinstance(cols, (list, np.ndarray)):
        raise ValueError
    if len(cols) != 3:
        raise ValueError

    c = colorMap(3, vmin=-3, vmax=4)

    check_colors(cols)
    check_colors(c)
