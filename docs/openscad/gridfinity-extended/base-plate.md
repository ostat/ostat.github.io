---
layout: default
title: Base Plate
parent: Gridfinity Extended
grand_parent: OpenSCAD Projects
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

# Base Plate Settings
![openscad Subdivisions](/assets/openscad/gridfinity-extended/gridfinity_baseplate-baseplate_text.gif){:.wrap-lightbox width="300" }

Setting | Description
-|-
`Width` | X dimension in grid units  (multiples of 42mm)<br>`[ 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]`
`Depth` | Y dimension in grid units (multiples of 42mm)<br>`[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]`
`Plate_Style` | The style of the plate to generate.<br>**Options** <br>`base`: Base plate to go under Gridfinity bins.<br>`lid`:Lid Plate, that go on a Gridfinity bin and is also a base 
`Base_Plate_Options` | Options for the **base plate**.<br>**Options**<br>![openscad label](/assets/openscad/gridfinity-extended/gridfinity_baseplate-baseplate_text.gif){:.wrap-lightbox width="150" }<br>`default`:Default, simple base grid<br>![openscad label](/assets/openscad/gridfinity-extended/gridfinity_baseplate-magnet_text.gif){:.wrap-lightbox width="150" }<BR>`Magnet`:Efficient magnet base, <br>![openscad label](/assets/openscad/gridfinity-extended/gridfinity_baseplate-weighted_text.gif){:.wrap-lightbox width="150" }<br>`Weighted`: Thicker base with space for weights
`Lid_Options` | Options for the **lid plate**<br>**Options**<br>![openscad label](/assets/openscad/gridfinity-extended/gridfinity_baseplate-lid_text.gif){:.wrap-lightbox width="150" }<br>`default`: Lid that is also a Gridfinity base<br>![openscad label](/assets/openscad/gridfinity-extended/gridfinity_baseplate-lid_flat_base_text.gif){:.wrap-lightbox width="150" }<br>`flat`: Removes the internal grid from base the lid<BR>![openscad label](/assets/openscad/gridfinity-extended/gridfinity_baseplate-lid_half_pitch_text.gif){:.wrap-lightbox width="150" }<br>`halfpitch`: Adds half pitch grid to the base of the lid
`Custom_Grid_Enabled`| Enables custom base plate shapes. This can only be done by the script. This only works for the Base plate not the lid.

# Size Customisation
The `Custom_Grid_Enabled` allows for creating custom grid patters. To enable this you must first enable the `Custom_Grid_Enabled` flag and then configure the xpos1 to xpos7 variables in the script.

The xpos1 to xpos7 variables are each arrays of 7 values creating a 7 by 7 grid, where each value represents a single Gridfinity cell. The number in the array will define how the cell is represented. Some cells will need rounded corners and some square corners, however he  script does not workout is up to the user.

- `0`: The cell is off
- `1`: The cell is on, and all corners will be rounded.
- `2-17`: Represent a 4bit value used to calculate what corners of the cell should be rounded or square cut. Bitwise logic then used  to perform the calculation, 2 must be subtracted from the value for the bitwise logic to make work, this allows 0 and 1 to turn the cell on and off
  - *`0` The cell is off*
  - *`1` The cell is on all corners are rounded*
  - *ref  [4,3,2,1] The corner that relates to the bitwise value*
  - `2` [0,0,0,0] all corners square
  - `3` [0,0,0,1] corner 1 rounded
  - `4` [0,0,1,0] corner 2 rounded
  - `5` [0,0,1,1] corner 1,2 rounded
  - `6` [0,1,0,0] corner 3 rounded
  - `7` [0,1,0,1] corner 1,3 rounded
  - `8` [0,1,1,0] corner 1,2 rounded
  - `9` [0,1,1,1] corner 1,2,3 rounded
  - `10` [1,0,0,0] corner 4 rounded
  - `11` [1,0,0,1] corner 1,4 rounded
  - `12` [1,0,1,0] corner 2,4 rounded
  - `13` [1,0,1,1] corner 1,2,4 rounded
  - `14` [1,1,0,0] corner 3,4 rounded
  - `15` [1,1,0,1] corner 1,3,4 rounded
  - `16` [1,1,1,0] corner 2,3,4 rounded
  - `17` [1,1,1,1] corner 1,2,3,4 rounded

I am not sure it this is that useful, but its possible and was fun to code, so here we are.

**Example**<br>
![openscad label](/assets/openscad/gridfinity-extended/gridfinity_baseplate-customsize_text.gif){:.wrap-lightbox width="300" }<br>
```
xpos1 = [3,4,0,0,0,0,0];
xpos2 = [2,2,0,5,0,0,0];
xpos3 = [6,2,2,2,0,0,0];
xpos4 = [0,6,2,2,0,0,0];
xpos5 = [0,0,6,10,0,0,0];
xpos6 = [0,0,0,0,0,0,0];
xpos7 = [0,0,0,0,0,0,0];
```