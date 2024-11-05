---
layout: default
title: Remote Holder
nav_order: 1
has_children: true
parent: OpenSCAD Projects
permalink: /docs/openscad/remote-holder
---

#CNC Clamps

This is a customisable remote holder that allows for a few different way to be attached to a wall.

The holder section can be customised to suit the remote size you have, including width, depth, height and corner radius.

The backer currently has two main options.

**ScrewPlate**: Creates a solid back with screw holes for attachment. 

**Clipsal2000**: Generates a Clipsal 2000 compatible surround with the holder attached to the front. A use case for this is DC fans where you want to prevent access to the mains switch and use the remote in its place.

# Resources
- Repo source
- Downloadable models on including some pre-rendered models and the OpenSCAD Script.
 - **Printables**
 - [https://www.printables.com/model/461683-cnc-hold-down-clamps-all-sizes-openscad](https://www.printables.com/model/461683-cnc-hold-down-clamps-all-sizes-openscad)
 - **makerworld**: Models and online customiser
 - [https://makerworld.com/en/models/437224](https://makerworld.com/en/models/437224)
# Settings

OpenSCAD Customiser settings

## Main

Setting | Description
-|-
`holder`| Type of holder to create [none: backer only, remote: remote holder]
`backer`| Type of backer to use [clipsal2000: clipsal 2000, screw: screw plate]

## Remote Holder

Setting | Description
-|-
`remoteholder_remote_size` | Size of the remote (width, depth) 
`remoteholder_remote_radius` | Radius of the remote side corners 
`remoteholder_height` | Height of the remote holder (should be 1/4 the height of the remote) 
`remoteholder_wall_thickness` | Wall thickness of the remote holder 
`remoteholder_easyPrintStanding` | Easy print standing option 
`remoteholder_front_relief_enabled` | Open the front of the remote holder 
`remoteholder_front_relief_width` | Width of the front relief 
`remoteholder_front_relief_fillet` | Fillet radius of the front relief 
`remoteholder_front_relief_height` | Height of the front relief 
`remoteholder_back_relief_enabled` | Enable back relief 
`remoteholder_back_relief_width` | Width of the back relief 
`remoteholder_back_relief_fillet` | Fillet radius of the back relief 
`remoteholder_back_relief_height` | Height of the back relief 
`remoteholder_back_chamfer` | Chamfer size of the back 

## Backer Clipsal 2000

Setting | Description
-|-
`clipsal2000_top_thickness` | Top thickness of the Clipsal 2000 backer 
`clipsal2000_wall_thickness` | Wall thickness of the Clipsal 2000 backer 
`clipsal2000_easy_print_facedown` | Easy print facedown option for Clipsal 2000 backer 
`clipsal2000_easy_print_standing` | Easy print standing option for Clipsal 2000 backer 
`clipsal2000_Internal_size` | Internal size of the Clipsal 2000 (width, height, depth) 

## Backer ScrewPlate

Setting | Description
-|-
`screwplate_slot_diameter` | Diameter of the screw plate slot 
`screwplate_slot_length` | Length of the screw plate slot 
`screwplate_slot_upper_position` | Upper position of the screw plate slot 
`screwplate_slot_lower_position` | Lower position of the screw plate slot 