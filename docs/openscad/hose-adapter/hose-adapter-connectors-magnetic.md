---
layout: default
title: Connector Magnetic
nav_order: 1
parent: Connectors
grand_parent: OpenSCAD Hose adapters
permalink: /docs/openscad/hose-adapter/connectors/magnetic
---
## Connector - Magnetic Connector

Setting | Description
-|-
`End_Magnets_Count` | Number of magnets in the connector
`End_Magnet_Diameter` | The diameter of the magnets (mm)
`End_Magnet_Thickness` | The thickness of the magnets (mm)
`End_Magnet_Border` | Minium amount of the material around the magnets (mm)
`End_Magnet_Flange_Thickness` | Thickness of the magnet flange (mm)
`End_Ring` | Include a flange alignment ring `[no: No alignment ring, protruding: protruding ring, recessed: Recessed ring]`

## Connector - Magnetic Connector - Alignment Ring

Setting | Description
-|-
`Draw_Alignment_Ring` |draw just the alignment ring `default = "no"` `[end1: Draw end 1, end2: Draw end 2, no: Don't draw]`
`Alignment_Depth` | Alignment depth in to flange (mm)
`Alignment_Upper_Width` | Alignment upper width at widest part (mm)
`Alignment_Lower_Width` | Alignment lower width at narrowest part (mm)
`Alignment_Side_Clearance` | Alignment side clearance, to give nice fit (mm).
`Alignment Depth Clearance` | to prevent hitting bottom (mm).