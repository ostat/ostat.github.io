---
layout: default
title: CNC Clamps
nav_order: 1
has_children: true
parent: OpenSCAD Projects
permalink: /docs/openscad/cnc-clamps
---

#CNC Clamps

OpenSCAD script for creating 3d Printed CNC hold down clamps.

# Resources
- Downloadable models on including some pre-rendered models and the OpenSCAD Script.
  - **Printables**
    - [https://www.printables.com/model/461683-cnc-hold-down-clamps-all-sizes-openscad](https://www.printables.com/model/461683-cnc-hold-down-clamps-all-sizes-openscad)
  - **makerworld**: Models and online customiser
    - [https://makerworld.com/en/models/437224](https://makerworld.com/en/models/437224)

# Settings
OpenSCAD Customiser settings

## CNC hold down

Setting | Description
-|-
`Bolt_Cutout_Length` | Length of bolt cutout (mm)
`Bolt_Cutout_Diameter` | Diameter Length of bolt cutout (mm)
`Bolt_Clearance` | Clearance around the bolt head (mm), default = Bolt_Cutout_Diamater
`Wall_Thickness` | Thickness of the front and side walls (mm)
`Base_Thickness` | Thickness of the base(mm), Default = Wall_Thickness*2
`Base_Relief` | Back relief on base (mm), default = Wall_Thickness/2

## Front Lip

Setting | Description
-|-
`Front_Radius` | Radius of front lip (mm), default = Wall_Thickness
`Front_Lip_Length` | Length of front lip (mm), default = Front_Radius
`Front_Height` | Height of front lip (mm), default = Front_Radius
`Front_Relief_Angle` | Relief on front (deg)
`Front_Wall_Thickness` | Front wall thickness (mm), default = Wall_Thickness
`Support_Length` | The full height length (mm), default = half length
`Support_Height` | The full Length height (mm) , default = quarter height

## Back Lip

Setting | Description
-|-
`Back_Radius` | Radius of back lip, default = Base_Thickness*3/4
`Back_Lip_Length` | Extend length of back lip