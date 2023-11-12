---
layout: default
title: Gridfinity Basic Cup
parent: Gridfinity Extended
grand_parent: OpenSCAD Projects
nav_order: 2
---

# Navigation Structure
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

<img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-multi_text.gif" alt="gridfinity extended" width="300"/>

# General Cup Settings

Setting | Description
-|-
`width` | X dimension in grid units  (multiples of 42mm)<br>options `[ 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]`
`depth` | Y dimension in grid units (multiples of 42mm)<br>options `[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]`
`height` | Height in Gridfinity height units (7mm) of the bin. Does not include the lip height which is about 4mm.
`filled_in` | <img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-filledin_text.gif" alt="openscad label" width="150"/><br>Fill in solid block (overrides all following options). Useful for generating a block to be later modified in OpenSCAD or exported and modified in another tool.<br>`default = "off"`<br>**Options**<bR>`off`: not filled in<br>`on`: filled in but still stackable<br>`notstackable`:filled in an not stackable<br>
`label` | <img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-label_text.gif" alt="openscad label" width="150"/><br>Include overhang for labeling. <br>`default=disabled`<br>**Options**<br>`disabled`: no label<br>`left`: Left aligned<br>`right`: Right aligned<br>`center`: Center aligned<br>`leftchamber`: One label per chamber, left aligned<br>`rightchamber`: One label per chamber, right aligned<br>`centerchamber`: One label per chamber, center aligned<br>
`label_width`| Width of the label in number of Gridfinity units (42mm), or zero means full width.
`wall_thickness` | thickness of the bin walls, Zack's design is 0.95<br>`default = 0.95`
`lip_style` | <img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-lip_style_text.gif" alt="openscad label" width="150"/><br>Removes some or all of lip.<br>`default = "normal"`<br>**Options**<br>`normal`: normal lip<br>`reduced`: smaller lip<br>`none`: no lip<br>
`position` | <img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-position_text.gif" width="150"><br>x and y position of the rendered bin. Useful of planing to further edit the bin with another script.<br>**options**<br>`default`: Centers x1 and y1<br>`center`: centers the whole bin<br>`zero`: Sets the lower left side of the bin on the zero mark

---

# Subdivisions
<img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-chambers_text.gif" alt="openscad Subdivisions" width="300"/>

Setting | Description
-|-
`chambers` | Number of chambers in the X dimension, smallest value is 1, which means no dividers.
`irregular_subdivisions` | Enable irregular subdivisions.<br>`default = false`
`separator_positions` | Separator positions are defined in terms of grid units from the left end. <br>Example `[0.25, 0.5, 1, 1.33, 1.66]`

---

# Base

Setting | Description
-|-
`magnet_diameter` | Zack's design uses magnet diameter of 6.5. 0 would disable the magnet hole.
`screw_depth` | Zack's design uses depth of 6. 0 would disable the screw hole.
`center_magnet_diameter` | <img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-center_magnet_text.gif" alt="OpenSCAD base flatbase" width="200"/><br>Magnet to be added to the center of a gridfinity cell. This is expected to be used to hold the items in the bin like screws in place.<br>Diameter of the center magnet.
`center_magnet_thickness` | Thickness of the center magnet.
`hole_overhang_remedy` | <img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-sequentialbridging_text.gif" alt="OpenSCAD base flatbase" width="200"/><br>Sequential bridging for hanging hole. Only  active only when both screws and magnets are nonzero (and this option is selected).<br>ref :[buried-nuts-and-hanging-holes](https://hydraraptor.blogspot.com/2014/03/buried-nuts-and-hanging-holes.html)<br>ref: [How to 3D Print bores without supports (Fusion 360 Masterclass)](https://www.youtube.com/watch?v=KBuWcT8XkhA)
`box_corner_attachments_only` | <img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-box_corner_attachments_only_text.gif" alt="OpenSCAD base flatbase" width="200"/><br>Only add attachments (magnets and screw) to box corners (prints faster). <br>`default = false`
`floor_thickness` | <img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-floorthickness_text.gif" alt="OpenSCAD base flatbase" width="200"/><br>Minimum thickness above cutouts in base (Zack's design is effectively 1.2).<br>`default = 0.7`
`cavity_floor_radius`| <img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-basecorner_text.gif" alt="OpenSCAD base flatbase" width="200"/><br>The radius between the wall and the floor.<br>**Options**<br>`-1`: default, matches the wall radius,<br>`0`: no radius<br>`>0`: sets the to provided value
`efficient_floor` | <img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-efficient_floor_text.gif" alt="OpenSCAD base efficient floor" width="200"/><BR>Efficient floor option saves material and time, but the internal floor is not flat (only applies if no magnets, screws, or finger-slide used).<br>`default = false`
`half_pitch` | <img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-halfpitch_text.gif" alt="OpenSCAD base efficient floor" width="200"/><br>Subdivides the bottom pads in half, to allow half-cell offsets<BR>`default = false`
`flat_base` | <img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-flatbase_text.gif" alt="OpenSCAD base flatbase" width="200"/><BR>Removes the base grid from inside the shape<BR>`default = false`

---
# Finger Slide
<img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-fingerslide_text.gif" alt="OpenSCAD Finger Slide" width="300"/>

{: .note }
**Finger Slide** does not work with **Efficient Floor**.<BR>**Finger Slide** does not work with **Wall Pattern**.

Setting | Description
-|-
`fingerslide` | Include larger base corner fillet, to allow easy removal of the items in the bin.<br>`default = "none"`<br>**Options**<br>`none`: no finger slide<br>`rounded`: rounded finger slide<br>`chamfered`:45deg angled finger slide
`fingerslide_radius` | Radius of the corner fillet,<br>`default = 8`

---
# Tapered Corner
<img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-taperedcorner_text.gif" alt="OpenSCAD Tapered Corner" width="300"/>

Setting | Description
-|-
`tapered_corner` | style of the tapered corner.<br>`default = "none"`<br>**Options**<br>`none`: no tapered corner<br>`rounded`: rounded corner<br>`chamfered`:45deg angled taper
`tapered_corner_size` | Size of the tapered corner, in both the x and y directions.`default = 10`<br>'`-1`: sets the base of the Floor height.`0`: Sets the base to just above the inner corner round over.
`tapered_setback` | Set back of the tapered corner in to the box, default is the gridfinity corner radius `default = -1` results in `gridfinity_corner_radius/2`

---
# Wall Cutout
<img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-wallcutout_text.gif" alt="OpenSCAD Wall Cutout" width="300"/>

Setting | Description
-|-
`wallcutout_enabled` | `default=false`
`wallcutout_walls` | wall to enable on, front, back, left, right.<br>I.E. [1,0,0,0] front only, [1,1,1,1] all walls.
`wallcutout_width` | `default = binwidth/2`
`wallcutout_angle` | `default = 70 deg`
`wallcutout_height` | `default = binHeight`<br>'`-1`: Sets the base of the Floor height.`0`: Sets the base to just above the inner corner round over.
`wallcutout_corner_radius` | `default = 5`

---
# Wall Pattern
<img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-wallpattern_text.gif" alt="OpenSCAD Wall Pattern" width="300"/>

Setting | Description
-|-
`wallpattern_enabled` | Enables a grid pattern to be removed from the walls of the bin.<br>`default=false`
`wallpattern_hexgrid` | Switches between a square and hex pattern<br>`default=true` which is hex.
`wallpattern_walls` | Selects the walls to enable the wall pattern on. [front, back, left, right].<br>I.E. [1,0,0,0] front only, [1,1,1,1] all walls.
`wallpattern_fill` | <img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-wallpatternfill_text.gif" alt="OpenSCAD base flatbase" width="200"/><BR>The pattern wont fill the space completely. These options allow for extending the patter to fill the space. Note, the pattern is rotated to make the hex shape easier to print. As such you need to swap vertical and horizontal.<br>**Options**<br>`none`: no fill<br>`space`: Increase Space between grid to fill<br>`crop`: Over fill and crop the the allowed space<br>`crophorizontal`:Crop horizontal only<br>`cropvertical`: Crop vertical only<br>`crophorizontal_spacevertical`: Crop horizontal space vertical<br>`cropvertical_spacehorizontal`: Crop vertical space horizontal<br>`spacevertical`:Space vertical<br>`spacehorizontal`:Space horizontal
`wallpattern_hole_sides` | Number of sides of the hole.<br>**Options**<br>`4`: square<br>`6`: hexagon<br>`64`: circle
`wallpattern_hole_size` | Size of the hole
`wallpattern_hole_spacing` | Spacing between pattern


---
# Debug
<img src="../../../assets/openscad/gridfinity-extended/gridfinity_basic_cup-debug_text.gif" width="300"/>

Setting | Description
-|-
`cutx` | Slice along the x axis, only active during preview.
`cuty` | Slice along the y axis, only active during preview.
`help` | Enables logging of help messages during render, also enables caliper measurements if `cutx` or `cuty` are enabled.

