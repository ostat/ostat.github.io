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

![gridfinity extended](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-multi_text.gif){:.wrap-lightbox width="300"}

# General Cup Settings

Setting | Description
-|-
`width` | X dimension in grid units  (multiples of 42mm)<br>options `[ 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]`
`depth` | Y dimension in grid units (multiples of 42mm)<br>options `[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]`
`height` | Height in Gridfinity height units (7mm) of the bin. Does not include the lip height which is about 4mm.
`filled_in` | ![gridfinity filled in](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-filledin_text.gif){:.wrap-lightbox  width="150" }<br>Fill in solid block (overrides all following options). Useful for generating a block to be later modified in OpenSCAD or exported and modified in another tool.<br>`default = "off"`<br>**Options**<bR>`off`: not filled in<br>`on`: filled in but still stackable<br>`notstackable`:filled in an not stackable<br>
`label` | ![gridfinity label](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-label_text.gif){:.wrap-lightbox width="150" }<br>Include overhang for labeling. <br>`default=disabled`<br>**Options**<br>`disabled`: no label<br>`left`: Left aligned<br>`right`: Right aligned<br>`center`: Center aligned<br>`leftchamber`: One label per chamber, left aligned<br>`rightchamber`: One label per chamber, right aligned<br>`centerchamber`: One label per chamber, center aligned<br>
`label_relief`| ![gridfinity label relief](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-label_relief_text.gif){:.wrap-lightbox width="150" }<br>Creates a relief in the Label shelf, so that a sticker label can be affixed without impacting the ability to stack.<br>Default = 0, no relief.
`label_width`| Width of the label in number of Gridfinity units (42mm), or zero means full width.
`wall_thickness` | Thickness of the bin walls, Zack's design is 0.95<br>`default = 0`, this will dynamically increase the wall as the bin size increases. `height < 8 = 0.95`, `height > 8 and < 16 = 1.2`, `height >= 16 = 1.6` <BR>
`lip_style` | ![gridfinity lip style](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-lip_style_text.gif){:.wrap-lightbox width="150" }<br>Removes some or all of lip.<br>`default = "normal"`<br>**Options**<br>`normal`: normal lip<br>`reduced`: smaller lip<br>`none`: no lip<br>
`position` | ![gridfinity position](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-position_text.gif){:.wrap-lightbox width="150" }<br>x and y position of the rendered bin. Useful of planing to further edit the bin with another script.<br>**options**<br>`default`: Centers x1 and y1<br>`center`: centers the whole bin<br>`zero`: Sets the lower left side of the bin on the zero mark

---

# Subdivisions
![Gridfinity Subdivisions](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-chambers_text.gif){:.wrap-lightbox width="300" }

Setting | Description
-|-
`chamber_wall_thickness` | The thickness of the chamber walls, default is 1.2.
`vertical_chambers`<br>`horizontal_chambers` | Number of chambers, or n-1 walls.<br>`default = 1`
`vertical_separator_bend_separation`<br>`horizontal_separator_bend_position` | Adds a bend to the wall, with this amount of separation in mm. I.E. 10 would result in a wall with a bend that has a 10mm offset<br>`default = 0` which is a straight wall.
`vertical_separator_bend_angle`<br>`horizontal_separator_bend_angle` | The angle of the wall bend when the `bend_separation` is greater than 1. A negative angle inverts the bend. The bend angle is inverted for the even number walls<br>`default = 45`.
`vertical_separator_bend_position`<br>`horizontal_separator_bend_position`| Shifts the bend away from the center of the wall<br>`default = 0`, 0 is the center, value is in mm.
`vertical_separator_cut_depth`<br>`horizontal_separator_cut_depth`|Produces a cut out on the separator wall, allowing for easier access to the chambers. The value is the number of mm to cut down. Negative values subtract 1/n height, I.E. -3 would cut down 1/3 the height.
`vertical_irregular_subdivisions`<br>`horizontal_irregular_subdivisions`| Enables the use of the `separator_config`.
`vertical_separator_config`<br>`horizontal_separator_config`|Provides the option to configure each wall position and options individually.<br>The value is a string of comma separated (`,`) values for each wall. The walls are separated by pipe (`\|`). The values are provided in the order `position,bend_separation,bend_angle,cut_depth,cut_length,wall_thickness`.<br>Example `30\|45,0,0,-2` would produce two walls one at 30mm, one at 45mm with a 50% cutout.

---

# Base

Setting | Description
-|-
`magnet_diameter` | Zack's design uses magnet diameter of 6.5. `value of 0`: disables the magnet hole.
`screw_depth` | Zack's design uses depth of 6. `value of 0`: disables the screw hole.
`center_magnet_diameter` | ![OpenSCAD base flatbase](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-center_magnet_text.gif){:.wrap-lightbox width="200" }<br>Magnet to be added to the center of a gridfinity cell. This is expected to be used to hold the items in the bin like screws in place.<br>Diameter of the center magnet.
`center_magnet_thickness` | Thickness of the center magnet.
`hole_overhang_remedy` | ![OpenSCAD base flatbase](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-sequentialbridging_text.gif){:.wrap-lightbox width="200" }<br>Sequential bridging for hanging hole. Only  active only when both screws and magnets are nonzero (and this option is selected).<br>ref :[buried-nuts-and-hanging-holes](https://hydraraptor.blogspot.com/2014/03/buried-nuts-and-hanging-holes.html)<br>ref: [How to 3D Print bores without supports (Fusion 360 Masterclass)](https://www.youtube.com/watch?v=KBuWcT8XkhA)
`box_corner_attachments_only` | ![OpenSCAD base flatbase](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-box_corner_attachments_only_text.gif){:.wrap-lightbox width="200" }<br>Only add attachments (magnets and screw) to box corners, instead of each corner of the each cell. Reduces print time and filament used. <br>A standard 2x3x3 box goes from 2h50m 54g to 2h20m 50g. A light bin with corner attachments goes from 2h40m 40g to 1h40m 28g with corner only, or 1h23m 25g for no attachments. A standard 5x5x3 goes from 10h57 207g to 8h37m 197g. These are all relative values.<br>`default = true`
`floor_thickness` | ![OpenSCAD base flatbase](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-floorthickness_text.gif){:.wrap-lightbox width="200" }<br>Minimum thickness above cutouts in base (Zack's design is effectively 1.2).<br>`default = 0.7`
`cavity_floor_radius`| ![OpenSCAD base flatbase](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-basecorner_text.gif){:.wrap-lightbox width="200" }<br>The radius between the wall and the floor.<br>**Options**<br>`-1`: default, matches the wall radius,<br>`0`: no radius<br>`>0`: sets the to provided value
`efficient_floor` | ![OpenSCAD base efficient floor](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-efficient_floor_text.gif){:.wrap-lightbox width="200" }<BR>Light bin, saves material and print time, however the internal floor will not be flat (does not support finger slide).<br>`default = false`
`half_pitch` | ![OpenSCAD base efficient floor](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-halfpitch_text.gif){:.wrap-lightbox width="200" }<br>Subdivides the bottom pads in half, to allow half-cell offsets<BR>`default = false`
`flat_base` | ![OpenSCAD base flatbase](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-flatbase_text.gif){:.wrap-lightbox width="200" }<BR>Removes the base grid from inside the shape<BR>`default = false`

---
# Finger Slide
![OpenSCAD Finger Slide](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-fingerslide_text.gif){:.wrap-lightbox width="300" }

{: .note }
**Finger Slide** does not work with **Wall Pattern**.

Setting | Description
-|-
`fingerslide` | Include larger base corner fillet, to allow easy removal of the items in the bin.<br>`default = "none"`<br>**Options**<br>`none`: no finger slide<br>`rounded`: rounded finger slide<br>`chamfered`:45deg angled finger slide
`fingerslide_radius` | Radius of the corner fillet,<br>`default = 8`

---
# Tapered Corner
![OpenSCAD Tapered Corner](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-taperedcorner_text.gif){:.wrap-lightbox width="300" }

Setting | Description
-|-
`tapered_corner` | style of the tapered corner.<br>`default = "none"`<br>**Options**<br>`none`: no tapered corner<br>`rounded`: rounded corner<br>`chamfered`:45deg angled taper
`tapered_corner_size` | Size of the tapered corner, in both the x and y directions.`default = 10`<br>'`-1`: sets the base of the Floor height.`0`: Sets the base to just above the inner corner round over.
`tapered_setback` | Set back of the tapered corner in to the box, default is the gridfinity corner radius `default = -1` results in `gridfinity_corner_radius/2`

---
# Wall Cutout
![OpenSCAD Wall Cutout](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-wallcutout_text.gif){:.wrap-lightbox width="300" }

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
![OpenSCAD Wall Pattern](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-wallpattern_text.gif){:.wrap-lightbox width="300" }

Setting | Description
-|-
`wallpattern_enabled` | Enables a grid pattern to be removed from the walls of the bin.<br>`default=false`
`wallpattern_style` | ![OpenSCAD base wallpattern style](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-wallpatternstyle_text.gif){:.wrap-lightbox width="200" }<BR> Sets the grid style for the wall pattern.<br>**Options**<br>'`grid`: Aligns the holes in a square grid<br>`hexgrid`: Aligns the holes in a hexgrid. `voronoi`: Voronoi pattern of completely random placement.<br>`voronoigrid`: Voronoi pattern aligned to a grid,`voronoihexgrid`: : Voronoi pattern aligned to a hex grid.
`wallpattern_walls` | Selects the walls to enable the wall pattern on. [front, back, left, right].<br>I.E. [1,0,0,0] front only, [1,1,1,1] all walls.
`wallpattern_fill` | ![OpenSCAD base wallpattern fill](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-wallpatternfill_text.gif){:.wrap-lightbox width="200" }<BR>The pattern wont fill the space completely. These options allow for extending the patter to fill the space. Note, the pattern is rotated to make the hex shape easier to print. As such you need to swap vertical and horizontal.<br>**Options**<br>`none`: no fill<br>`space`: Increase Space between grid to fill<br>`crop`: Over fill and crop the the allowed space<br>`crophorizontal`:Crop horizontal only<br>`cropvertical`: Crop vertical only<br>`crophorizontal_spacevertical`: Crop horizontal space vertical<br>`cropvertical_spacehorizontal`: Crop vertical space horizontal<br>`spacevertical`:Space vertical<br>`spacehorizontal`:Space horizontal<br>Does not apply to `voronoi` styles.
`wallpattern_hole_sides` | Number of sides of the hole.<br>**Options**<br>`4`: square<br>`6`: hexagon<br>`64`: circle<br>Does not apply to `voronoi` styles.
`wallpattern_hole_size` | Size of the hole
`wallpattern_hole_spacing` | Spacing between pattern
`wallpattern_voronoi_noise` | amount of noise to add to `voronoigrid` and `voronoihexgrid`
`wallpattern_voronoi_radius` | Radius of corners on voronoi shapes

---
# Split bin
![OpenSCAD split bin](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-split_bin_text.gif){:.wrap-lightbox width="300" }<br>
Splits a cup, with the intent of joining after printing to produce larger cups. The split removes half a cell. If you want a 9 cell bin, configure a 5 cell cup with `extention_x_enabled`. This will produce a 4.5 cell cup which you can print twice and glue together.

Setting | Description
-|-
`extention_x_enabled` | Cuts the first half cell along the x axis (21mm) from the bin.
`extention_y_enabled` | Cuts the first half cell along the y axis (21mm) from the bin.
`extention_tabs_enabled` | Adds tabs to the cut walls to assist in gluing together.

---
# Debug
![Gridfinity Basic Cup debug](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-debug_text.gif){:.wrap-lightbox width="300" }

Setting | Description
-|-
`cutx` | Slice along the x axis, only active during preview.
`cuty` | Slice along the y axis, only active during preview.
`help` | Enables logging of help messages during render, also enables caliper measurements if `cutx` or `cuty` are enabled.

