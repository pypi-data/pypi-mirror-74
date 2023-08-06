"""
    This example shows how to add 3D text to your scenes
"""

import brainrender

brainrender.SHADER_STYLE = "cartoon"

from brainrender.scene import Scene
from brainrender.colors import makePalette
from vedo import Text


# Crate a scene
scene = Scene(
    add_root=False, display_inset=False, use_default_key_bindings=False
)


# Text to add
s = "BRAINRENDER"

# Specify a color for each letter
colors = makePalette(len(s), "salmon", "powderblue")

x = 0  # use to specify the position of each letter

# Add letters one at the time to color them individually
for n, letter in enumerate("BRAINRENDER"):
    if "I" == letter or "N" == letter and n < 5:  # make the spacing right
        x += 0.6
    else:
        x += 1

    # Add letter and silhouette to the scne
    act = Text(
        letter, depth=0.5, c=colors[n], pos=(x, 0, 0), justify="centered"
    )

    scene.add_add_mesh_silhouette(act, lw=3)


scene.render()
