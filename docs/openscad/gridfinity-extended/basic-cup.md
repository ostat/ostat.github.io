---
layout: default
title: Gridfinity Basic Cup
parent: OpenSCAD Gridfinity Extended
has_children: true
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

# Online Script
[Gridfinity Basic Cup](https://seasick.github.io/openscad-web-gui/?https%3A%2F%2Fraw.githubusercontent.com%2Fostat%2Fgridfinity_extended_openscad%2Fmain%2Fcombined%2Fgridfinity_basic_cup.scad)

# General Cup Settings

Setting | Description
-|-
`width` | <span id='scad_description'>X dimension. grid units (multiples of 42mm) or mm</span><br>default: <span id='scad_default'>[2, 0]</span>
`depth` | <span id='scad_description'>Y dimension. grid units (multiples of 42mm) or mm</span><br>Does not include the lip height which is about 4mm.<br>default: <span id='scad_default'>[1, 0]</span>
`height` | <span id='scad_description'>Z dimension excluding. grid units (multiples of 7mm) or mm</span><br>default: <span id='scad_default'>[3, 0]</span>
`filled_in` | ![gridfinity filled in](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-filledin_text.gif){:.wrap-lightbox  width="150" }<br><span id='scad_description'>Fill in solid block (overrides all following options).</span> Useful for generating a block to be later modified in OpenSCAD or exported and modified in another tool.<br>`default = "disabled"`<br>**Options**<br>`disabled`: not filled in<br>`enabled`: filled in to the Z height<br>`enabledfilllip`:Fill the cup and the Lip
`label` | ![gridfinity label](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-label_text.gif){:.wrap-lightbox width="150" }<br>Include overhang for labeling. <br>`default=disabled`<br>**Options**<br>`disabled`: no label<br>`left`: Left aligned<br>`right`: Right aligned<br>`center`: Center aligned<br>`leftchamber`: One label per chamber, left aligned<br>`rightchamber`: One label per chamber, right aligned<br>`centerchamber`: One label per chamber, center aligned
`label_relief` | ![gridfinity label relief](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-label_relief_text.gif){:.wrap-lightbox width="150" }<br>Creates a relief in the Label shelf, so that a sticker label can be affixed without impacting the ability to stack.<br>Default = 0, no relief.
`label_width` | Width of the label in number of Gridfinity units (42mm), or zero means full width.
`wall_thickness` | Thickness of the bin walls, Zack's design is 0.95<br>`default = 0`, this will dynamically increase the wall as the bin size increases. `height < 8 = 0.95`, `height > 8 and < 16 = 1.2`, `height >= 16 = 1.6` <BR>
`lip_style` | ![gridfinity lip style](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-lip_style_text.gif){:.wrap-lightbox width="150" }<br>Removes some or all of lip.<br>`default = "normal"`<br>**Options**<br>`normal`: normal lip<br>`reduced`: smaller lip<br>`minimum`: lip that is the wall thickness<br>`none`: no lip
`position` | ![gridfinity position](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-position_text.gif){:.wrap-lightbox width="150" }<br>x and y position of the rendered bin. Useful of planing to further edit the bin with another script.<br>**options**<br>`default`: Centers x1 and y1<br>`center`: centers the whole bin<br>`zero`: Sets the lower left side of the bin on the zero mark
`headroom` | <span id='scad_description'>Under size the bin top by this amount to allow for better stacking</span><br>default: <span id='scad_default'>0.8</span>

---

# Subdivisions
![Gridfinity Subdivisions](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-chambers_text.gif){:.wrap-lightbox width="300" }

Setting | Description
-|-

`chamber_wall_headroom` | <span id='scad_description'>Reduce the wall height by this amount</span><br>default: <span id='scad_default'>0</span>
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
`enable_magnets` | <span id='scad_description'>Enable magnets</span><br>default: <span id='scad_default'>true</span>
`magnet_size` | <span id='scad_description'>size of magnet, diameter and height. Zack's original used 6.5 and 2.4</span><br>default: <span id='scad_default'>[6.5, 2.4]</span>
`magnet_easy_release` | <span id='scad_description'>create relief for magnet removal</span><br>options: <span id='scad_options'>`["off","auto","inner","outer"]`</span><br>default: <span id='scad_default'>"auto"</span>
`enable_screws` | <span id='scad_description'>Enable screws</span><br>default: <span id='scad_default'>true</span>
`screw_size` | <span id='scad_description'>size of screw, diameter and height. Zack's original used 3 and 6</span><br>default: <span id='scad_default'>[3, 6]</span>
`center_magnet_size` | ![OpenSCAD base flatbase](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-center_magnet_text.gif){:.wrap-lightbox width="200" }<br><span id='scad_description'>size of center magnet, diameter and height.</span><br>default: <span id='scad_default'>[0,0]</span>
`hole_overhang_remedy` | ![OpenSCAD base flatbase](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-sequentialbridging_text.gif){:.wrap-lightbox width="200" }<br>Sequential bridging for hanging hole. Only  active only when both screws and magnets are nonzero (and this option is selected).<br>ref :[buried-nuts-and-hanging-holes](https://hydraraptor.blogspot.com/2014/03/buried-nuts-and-hanging-holes.html)<br>ref: [How to 3D Print bores without supports (Fusion 360 Masterclass)](https://www.youtube.com/watch?v=KBuWcT8XkhA)
`box_corner_attachments_only` | ![OpenSCAD base flatbase](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-box_corner_attachments_only_text.gif){:.wrap-lightbox width="200" }<br>Only add attachments (magnets and screw) to box corners, instead of each corner of the each cell. Reduces print time and filament used. <br>A standard 2x3x3 box goes from 2h50m 54g to 2h20m 50g. A light bin with corner attachments goes from 2h40m 40g to 1h40m 28g with corner only, or 1h23m 25g for no attachments. A standard 5x5x3 goes from 10h57 207g to 8h37m 197g. These are all relative values.<br>`default = true`
`floor_thickness` | ![OpenSCAD base flatbase](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-floorthickness_text.gif){:.wrap-lightbox width="200" }<br>Minimum thickness above cutouts in base (Zack's design is effectively 1.2).<br>`default = 0.7`
`cavity_floor_radius`| ![OpenSCAD base flatbase](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-basecorner_text.gif){:.wrap-lightbox width="200" }<br>The radius between the wall and the floor.<br>**Options**<br>`-1`: default, matches the wall radius,<br>`0`: no radius<br>`>0`: sets the to provided value
`efficient_floor` | ![OpenSCAD base efficient floor](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-efficient_floor_text.gif){:.wrap-lightbox width="200" }<BR>Light bin, saves material and print time, however the internal floor will not be flat (does not support finger slide).<br>`default = false`
`half_pitch` | ![OpenSCAD base efficient floor](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-halfpitch_text.gif){:.wrap-lightbox width="200" }<br>Subdivides the bottom pads in half, to allow half-cell offsets<BR>`default = false`
`flat_base` | ![OpenSCAD base flatbase](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-flatbase_text.gif){:.wrap-lightbox width="200" }<BR>Removes the base grid from inside the shape<BR>`default = false`
`spacer` | <span id='scad_description'>Remove floor to create a vertical spacer</span><br>default: <span id='scad_default'>false</span>
`minimum_printable_pad_size` | <span id='scad_description'>Pads smaller than this will not be rendered as it interferes with the baseplate. Ensure appropriate support is added in slicer.</span><br>default: <span id='scad_default'>0.2</span>
`flat_base_rounded_radius` | <span id='scad_description'>Adjust the radius of the rounded flat base. -1 uses the corner radius.</span><br>default: <span id='scad_default'>-1</span>
`flat_base_rounded_easyPrint` | <span id='scad_description'>Add chamfer to the rounded bottom corner to make easier to print. -1 add auto 45deg.</span><br>default: <span id='scad_default'>-1</span>

---

# Cup Lip

Setting | Description
-|-
`lip_style` | <span id='scad_description'>Style of the cup lip</span><br>default: <span id='scad_default'>"normal"</span>
`lip_side_relief_trigger` | <span id='scad_description'>Below this the inside of the lip will be reduced for easier access.</span><br>default: <span id='scad_default'>[1,1]</span>
`lip_top_relief_height` | <span id='scad_description'>Create a relief in the lip</span><br>default: <span id='scad_default'>-1</span>
`lip_top_relief_width` | <span id='scad_description'>how much of the lip to retain on each end</span><br>default: <span id='scad_default'>-1</span>
`lip_top_notches` | <span id='scad_description'>add a notch to the lip to prevent sliding.</span><br>default: <span id='scad_default'>true</span>
`lip_clip_position` | <span id='scad_description'>enable lip clip for connection cups</span><br>default: <span id='scad_default'>"disabled"</span>
`lip_non_blocking` | <span id='scad_description'>allow stacking when bin is not multiples of 42</span><br>default: <span id='scad_default'>false</span>

---

# Bottom Text

Setting | Description
-|-
`text_1` | <span id='scad_description'>Add bin size to bin bottom</span><br>default: <span id='scad_default'>false</span>
`text_size` | <span id='scad_description'>Font Size of text, in mm (0 will auto size)</span><br>default: <span id='scad_default'>0</span>
`text_depth` | <span id='scad_description'>Depth of text, in mm</span><br>default: <span id='scad_default'>0.3</span>
`text_font` | <span id='scad_description'>Font to use</span><br>options: <span id='scad_options'>`[Aldo, B612, "Open Sans", Ubuntu]`</span><br>default: <span id='scad_default'>"Aldo"</span>
`text_2` | <span id='scad_description'>Add free-form text line to bin bottom (printing date, serial, etc)</span><br>default: <span id='scad_default'>false</span>
`text_2_text` | <span id='scad_description'>Actual text to add</span><br>default: <span id='scad_default'>"Gridfinity Extended"</span>

---
# Finger Slide
![OpenSCAD Finger Slide](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-fingerslide_text.gif){:.wrap-lightbox width="300" }

{: .note }
**Finger Slide** does not work with **Wall Pattern**.

Setting | Description
-|-
`fingerslide` | Include larger base corner fillet, to allow easy removal of the items in the bin.<br>`default = "none"`<br>**Options**<br>`none`: no finger slide<br>`rounded`: rounded finger slide<br>`chamfered`:45deg angled finger slide
`fingerslide_radius` | Radius of the corner fillet,<br>`default = 8`
`fingerslide_walls` | <span id='scad_description'>wall to enable on, front, back, left, right. 0: disabled; 1: enabled using radius; >1: override radius.</span><br>default: <span id='scad_default'>[1,0,0,0]</span>
`fingerslide_lip_aligned` | <span id='scad_description'>Align the fingerslide with the lip</span><br>default: <span id='scad_default'>true</span>

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
`wallcutout_vertical` | <span id='scad_description'></span><br>default: <span id='scad_default'>"disabled"</span>
`wallcutout_vertical_position` | <span id='scad_description'>Wall to enable on, front, back, left, right. 0: disabled; Positive: GF units; Negative: ratio length/abs(value)</span><br>I.E. [1,0,0,0] front only, [1,1,1,1] all walls.<br>default: <span id='scad_default'>-2</span>
`wallcutout_vertical_width` | <span id='scad_description'>Default will be bin_width/2</span><br>default: <span id='scad_default'>0</span>
`wallcutout_vertical_angle` | <span id='scad_description'></span><br>default: <span id='scad_default'>70</span>
`wallcutout_vertical_height` | <span id='scad_description'>Default will be bin_height</span><br>default: <span id='scad_default'>0</span>
`wallcutout_vertical_corner_radius` | <span id='scad_description'></span><br>default: <span id='scad_default'>5</span>
`wallcutout_horizontal` | <span id='scad_description'></span><br>default: <span id='scad_default'>"disabled"</span>
`wallcutout_horizontal_position` | <span id='scad_description'>Wall to enable on, front, back, left, right. 0: disabled; Positive: GF units; Negative: ratio length/abs(value)</span><br>I.E. [1,0,0,0] front only, [1,1,1,1] all walls.<br>default: <span id='scad_default'>-2</span>
`wallcutout_horizontal_width` | <span id='scad_description'>Default will be bin_width/2</span><br>default: <span id='scad_default'>0</span>
`wallcutout_horizontal_angle` | <span id='scad_description'></span><br>default: <span id='scad_default'>70</span>
`wallcutout_horizontal_height` | <span id='scad_description'>Default will be bin_height</span><br>default: <span id='scad_default'>0</span>
`wallcutout_horizontal_corner_radius` | <span id='scad_description'></span><br>default: <span id='scad_default'>5</span>

---
# Wall Pattern
![OpenSCAD Wall Pattern](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-wallpattern_text.gif){:.wrap-lightbox width="300" }

Setting | Description
-|-
`wallpattern_enabled` | Enables a grid pattern to be removed from the walls of the bin.<br>`default=false`
`wallpattern_style` | ![OpenSCAD base wallpattern style](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-wallpatternstyle_text.gif){:.wrap-lightbox width="200" }<BR> Sets the grid style for the wall pattern.<br>**Options**<br>'`grid`: Aligns the holes in a square grid<br>`hexgrid`: Aligns the holes in a hexgrid. `voronoi`: Voronoi pattern of completely random placement.<br>`voronoigrid`: Voronoi pattern aligned to a grid,`voronoihexgrid`: : Voronoi pattern aligned to a hex grid. <br> `kumiko`: There are six kumiko patterns to chose from.
`wallpattern_strength` | Spacing between the pattern cells.
`wallpattern_walls` | Selects the walls to enable the wall pattern on. [front, back, left, right].<br>I.E. [1,0,0,0] front only, [1,1,1,1] all walls.
`wallpattern_rotate_grid` | Rotates the the pattern by 90deg, this can help with making the grid easier to print.
`wallpattern_cell_size` | Size of the hole or cell.
`wallpattern_dividers_enabled` | <span id='scad_description'>Add the pattern to the dividers</span><br>default: <span id='scad_default'>"disabled"</span>
`wallpattern_hole_sides` | Number of sides of the hole.<br>**Options**<br>`4`: square<br>`6`: hexagon<br>`64`: circle<br>Does not apply to `voronoi` styles.
`wallpattern_hole_radius` | <span id='scad_description'>Radius of hole corners</span><br>default: <span id='scad_default'>0.5</span>
`wallpattern_fill` | ![OpenSCAD base wallpattern fill](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-wallpatternfill_text.gif){:.wrap-lightbox width="200" }<BR>The pattern wont fill the space completely. These options allow for extending the patter to fill the space. Note, the pattern is rotated to make the hex shape easier to print. As such you need to swap vertical and horizontal.<br>**Options**<br>`none`: no fill<br>`space`: Increase Space between grid to fill<br>`crop`: Over fill and crop the the allowed space<br>`crophorizontal`:Crop horizontal only<br>`cropvertical`: Crop vertical only<br>`crophorizontal_spacevertical`: Crop horizontal space vertical<br>`cropvertical_spacehorizontal`: Crop vertical space horizontal<br>`spacevertical`:Space vertical<br>`spacehorizontal`:Space horizontal<br>Does not apply to `voronoi` styles.
`wallpattern_border` | <span id='scad_description'>Border around the wall pattern, default is wall thickness</span><br>default: <span id='scad_default'>0</span>
`wallpattern_depth` | The Depth of the pattern in the walls in mm. A value of 0 will use the wall thickness to create hole in the wall. A negative value is used as a ratio `wall_thickness/abs(value)`e.g. -2 is wall_thickness/2. 
`wallpattern_hole_spacing` | Spacing between pattern
`wallpattern_voronoi_noise` | 
`wallpattern_pattern_voronoi_noise` | <span id='scad_description'>Voronoi pattern noise</span><br>amount of noise to add to `voronoigrid` and `voronoihexgrid`<br>default: <span id='scad_default'>0.75</span>
`wallpattern_pattern_grid_chamfer` | <span id='scad_description'>Grid pattern hole taper</span><br>default: <span id='scad_default'>0</span>
`wallpattern_pattern_brick_weight` | <span id='scad_description'>Brick pattern center weight</span><br>default: <span id='scad_default'>5</span>
`wallpattern_pattern_kumiko_fill_ratio` | <span id='scad_description'>Kumiko pattern ratio of main wall to fill wall.</span><br>default: <span id='scad_default'>0.5</span>
`wallpattern_pattern_quality` | <span id='scad_description'>$fs for floor pattern, min size face</span><br>default: <span id='scad_default'>0.4</span>

The Kumiko patters are generated using the help of an OpenSCAD library called [kumikoPatterns](https://github.com/froqstar/kumikoPatterns) created by [froqstar](https://github.com/froqstar). This is a great library, thanks to froqstar for his work in this library.

---

# Floor Pattern

Setting | Description
-|-
`floorpattern_enabled` | <span id='scad_description'>enable Grid floor patter</span><br>default: <span id='scad_default'>false</span>
`floorpattern_style` | <span id='scad_description'>Style of the pattern</span><br>default: <span id='scad_default'>"hexgrid"</span>
`floorpattern_hole_spacing` | <span id='scad_description'>Spacing between pattern</span><br>default: <span id='scad_default'>2</span>
`floorpattern_hole_sides` | <span id='scad_description'>Number of sides of the hole op</span><br>default: <span id='scad_default'>6</span>
`floorpattern_hole_size` | <span id='scad_description'>Size of the hole</span><br>default: <span id='scad_default'>[5,5]</span>
`floorpattern_hole_radius` | <span id='scad_description'></span><br>default: <span id='scad_default'>0.5</span>
`floorpattern_fill` | <span id='scad_description'>pattern fill mode</span><br>default: <span id='scad_default'>"crop"</span>
`floorpattern_border` | <span id='scad_description'>border around the wall pattern, default is wall thickness</span><br>default: <span id='scad_default'>0</span>
`floorpattern_pattern_grid_chamfer` | <span id='scad_description'>grid pattern hole taper</span><br>default: <span id='scad_default'>0</span>
`floorpattern_pattern_voronoi_noise` | <span id='scad_description'>voronoi pattern noise,</span><br>default: <span id='scad_default'>0.75</span>
`floorpattern_pattern_brick_weight` | <span id='scad_description'>brick pattern center weight</span><br>default: <span id='scad_default'>5</span>
`floorpattern_pattern_quality` | <span id='scad_description'>$fs for floor pattern, min size face.</span><br>default: <span id='scad_default'>0.4</span>

---

# Split bin
![OpenSCAD split bin](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-split_bin_text.gif){:.wrap-lightbox width="300" }<br>
Splits a cup, with the intent of joining after printing to produce larger cups. When you have the target final bin, set the `extension_position`, then set `extension_enabled` to **front** render and then **back** to generate both halves.

Setting | Description
-|-
`extension_x_enabled` | Enable or disable extension in the X direction.<br>**Options**<br>`disabled`: Split bin disabled<br>`front`: Select front<br>`back`: Select back.
`extension_x_position` | Position of the extension in the X direction in gf units.
`extension_y_enabled` | Enable or disable extension in the Y direction.<br>**Options**<br>`disabled`: Split bin disabled<br>`front`: Select front<br>`back`: Select back.
`extension_y_position` | Position of the extension in the Y direction in gf units.
`extension_tabs_enabled` | Adds tabs to the cut walls to assist in gluing together.
`extension_tab_size` | ize of the extension tabs (height, width, thickness, style). Width default is height, thickness default is 1.4, style {0,1,2}

---

# Removable Divider Walls

Setting | Description
-|-
`divider_walls_enabled` | <span id='scad_description'></span><br>default: <span id='scad_default'>false</span>
`divider_walls` | <span id='scad_description'>Wall to enable on, x direction, y direction</span><br>default: <span id='scad_default'>[1, 1]</span>
`divider_walls_thickness` | <span id='scad_description'>Thickness of the divider walls</span><br>default: <span id='scad_default'>2.5</span>
`divider_walls_spacing` | <span id='scad_description'>Spacing between the divider walls (0=divider_walls_thickness*2)</span><br>default: <span id='scad_default'>0</span>
`divider_walls_support_thickness` | <span id='scad_description'>Thickness of the support walls (0=walls_thickness*2)</span><br>default: <span id='scad_default'>2</span>
`divider_wall_slot_size` | <span id='scad_description'>Size of the slot in the divider walls. width(0=divider_walls_thickness), depth(0=divider_walls_support_thickness)</span><br>default: <span id='scad_default'>[0, 0]</span>
`divider_headroom` | <span id='scad_description'>Clearance between the divider walls top</span><br>default: <span id='scad_default'>0.1</span>
`divider_clearance` | <span id='scad_description'>Clearance subtracted from the removable divider wall. Width, Length</span><br>default: <span id='scad_default'>[0.3, 0.2]</span>
`divider_slot_spanning` | <span id='scad_description'>Number of slot spanning divider to generate</span><br>default: <span id='scad_default'>2</span>

---

# Sliding Lid

Setting | Description
-|-
`sliding_lid_enabled` | <span id='scad_description'></span><br>default: <span id='scad_default'>false</span>
`sliding_lid_thickness` | <span id='scad_description'>0 = wall thickness*2</span><br>default: <span id='scad_default'>0</span>
`sliding_min_wallThickness` | <span id='scad_description'>0 = wall_thickness/2</span><br>default: <span id='scad_default'>0</span>
`sliding_min_support` | <span id='scad_description'>0 = default_sliding_lid_thickness/2</span><br>default: <span id='scad_default'>0</span>
`sliding_clearance` | <span id='scad_description'></span><br>default: <span id='scad_default'>0.1</span>
`sliding_lid_lip_enabled` | <span id='scad_description'></span><br>default: <span id='scad_default'>false</span>

---

# Split bin

Setting | Description
-|-
`extension_x_enabled` | <span id='scad_description'></span><br>default: <span id='scad_default'>"disabled"</span>
`extension_x_position` | <span id='scad_description'></span><br>default: <span id='scad_default'>0.5</span>
`extension_y_enabled` | <span id='scad_description'></span><br>default: <span id='scad_default'>"disabled"</span>
`extension_y_position` | <span id='scad_description'></span><br>default: <span id='scad_default'>0.5</span>
`extension_tabs_enabled` | <span id='scad_description'></span><br>default: <span id='scad_default'>true</span>
`extension_tab_size` | <span id='scad_description'>Tab size, height, width, thickness, style. width default is height, thickness default is 1.4, style {0,1,2}.</span><br>default: <span id='scad_default'>[10,0,0,0]</span>

---

# Model detail

Setting | Description
-|-
`pitch` | <span id='scad_description'>Work in progress, Modify the default grid size. Will break compatibility</span><br>default: <span id='scad_default'>[42,42,7]</span>
`set_colour` | <span id='scad_description'>Assign colours to the bin</span><br>default: <span id='scad_default'>"enable"</span>
`render_position` | <span id='scad_description'>Where to render the model</span><br>default: <span id='scad_default'>"center"</span>
`fa` | <span id='scad_description'>Minimum angle for a fragment (fragments = 360/fa). Low is more fragments</span><br>default: <span id='scad_default'>6</span>
`fs` | <span id='scad_description'>Minimum size of a fragment. Low is more fragments</span><br>default: <span id='scad_default'>0.4</span>
`fn` | <span id='scad_description'>Number of fragments, overrides $fa and $fs</span><br>default: <span id='scad_default'>0</span>
`random_seed` | <span id='scad_description'>Set random seed (for Voronoi patterns)</span><br>default: <span id='scad_default'>0</span>
`force_render` | <span id='scad_description'>Force render on costly components</span><br>default: <span id='scad_default'>true</span>

---

# Debug
![Gridfinity Basic Cup debug](/assets/openscad/gridfinity-extended/gridfinity_basic_cup-debug_text.gif){:.wrap-lightbox width="300" }

Setting | Description
-|-
`cutx` | Slice along the x axis, only active during preview.
`cuty` | Slice along the y axis, only active during preview.
`enable_help` | <span id='scad_description'>Enable logging of help messages during render</span><br>default: <span id='scad_default'>"disabled"</span>

