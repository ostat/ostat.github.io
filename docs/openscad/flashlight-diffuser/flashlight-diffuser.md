---
layout: default
title: Flashlight Diffuser
nav_order: 1
has_children: true
permalink: /docs/flashlight-diffuser
---

# Flashlight
Setting | Description
-|-
`Measurement` | <br><ul><li>`inner`, Inner Diffuser - Fit over Flashlight.</li><li>`outer`, Outer Diffuser - Fit into Flashlight</li></ul>
`TorchDiameterTop` | Diameter flashlight at the top
`TorchDiameterLower` | Diameter flashlight at the base of the overlap (mm), `default is TorchDiameterTop``
`TorchOverlap` | Section of diffuser that fits on the torch (mm)

# Diffuser
Setting | Description
-|-
`DiffuserStyle` | "ShortRound"; <br><ul><li>`ShortRound`, Short Rounded.</li><li>`ShortFlat`, Short Flat</li><li>`WandShortRound`, Wand Short Rounded</li><li>`WandShortFlat`, Wand Short Flat</li><li>`WandLongRound`, Wand Long Rounded/li><li>`WandLongFlat`, Wand Long Flat</li><li>`Globe`, Light globe Shaped</li><li>`GlobeFlat`,  Flat Light globe Shaped</li><li>`WandThinRound`, Thin Rounded Wand</li><li>`WandThinFlat`,  Thin Flat Wand</li><li>`custom`, Custom settings</li><li>`TestFit`, Minimal print for fit test</li></ul>
`WallThickness` | Thickness of the funnel walls

# Custom Diffuser
Setting | Description
-|-
`DiffuserLength` | Length of the diffuser, Default is the difference of opening and tip, to give 45deg walls.
`DiffuserEndDiameter` | Length of the diffuser, Default is the difference double the Flashlight diameter.
`DiffuserEndThickness` | Thickness of diffuser end, Default is wall thickness.
`DiffuserEndShape` | Thickness of diffuser end, Default is wall thickness. [flat: Flat, rounded: Rounded]

# Internal stop
`StopLength` | Length of internal stop, default is wall thickness
`StopThickness` | Thickness of the stop, default is wall thickness