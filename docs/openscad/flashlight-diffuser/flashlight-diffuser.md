---
layout: default
title: Flashlight Diffuser
nav_order: 1
has_children: true
parent: OpenSCAD Projects
permalink: /docs/flashlight-diffuser
---

OpenSCAD script to create diffusers for flash lights. This can turn a standard flashlight in to a lamp style light.

# Resources
- Downloadable models on Printables including some pre-rendered models and the OpenSCAD Script.
  - https://www.printables.com/model/402801-flashlighttorch-diffusers

# Settings
OpenSCAD Customiser settings

## Flashlight
Setting | Description
-|-
`Measurement` | `inner`: Inner Diffuser - Fit over Flashlight.<br>`outer`: Outer Diffuser - Fit into Flashlight
`TorchDiameterTop` | Diameter flashlight at the top
`TorchDiameterLower` | Diameter flashlight at the base of the overlap (mm), `default is TorchDiameterTop``
`TorchOverlap` | Section of diffuser that fits on the torch (mm)

## Diffuser
![openscad Subdivisions](/assets/openscad/flashlight-diffuser/diffuser-style.gif){:.wrap-lightbox width="300" }<BR>

Setting | Description
-|-
`DiffuserStyle` | `ShortRound`: Short Rounded<br>`ShortFlat`: Short Flat<br>`WandShortRound`: Wand Short Rounded<br>`WandShortFlat`: Wand Short Flat<br>`WandLongRound`: Wand Long Rounded<br>`WandLongFlat`: Wand Long Flat<br>`Globe`: Light globe Shaped<br>`GlobeFlat`: Flat Light globe Shaped<br>`WandThinRound`: Thin Rounded Wand<br>`WandThinFlat`:  Thin Flat Wand<br>`custom`: Custom settings<br>`TestFit`: Minimal print for fit test
`WallThickness` | Thickness of the funnel walls

## Custom Diffuser
Setting | Description
-|-
`DiffuserLength` | Length of the diffuser, Default is the difference of opening and tip, to give 45deg walls.
`DiffuserEndDiameter` | Length of the diffuser, Default is the difference double the Flashlight diameter.
`DiffuserEndThickness` | Thickness of diffuser end, Default is wall thickness.
`DiffuserEndShape` | Thickness of diffuser end, Default is wall thickness. [flat: Flat, rounded: Rounded]

## Internal stop
`StopLength` | Length of internal stop, default is wall thickness
`StopThickness` | Thickness of the stop, default is wall thickness