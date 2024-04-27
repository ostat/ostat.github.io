---
layout: default
title: Connector Magnetic
nav_order: 1
parent: Connectors
grand_parent: OpenSCAD Hose adapters
permalink: /docs/openscad/hose-adapter/connectors/magnetic
---
## Connector - Magnetic quick connector
![Magnetic Connector](/assets/openscad/hose-adapters/vacuum_hose_adapter-magnetic_flangedemo_text.gif){:.wrap-lightbox width="500"}<br>
These are a Magnetic quick connector that allows for quickly attaching one adapter to another. <br>
I use 8 10mmx3mm magnets on 50mm connector and find the attachment to be quite strong. They will pull off if you trip or pull the hose on an angle, This is why I have added the twist lock feature.<br>
When adding the magnets I prefer to always use an even number of magnets and alternate their polarity. This prevents one side becoming the male and one the female. I hold the magnets in with epoxy that seem to hold well. Superglue did not work well for me.<br>.

Setting | Description
-|-
`End_Magnets_Count` | ![vacuum_hose_adapter magnetic_magnetcount](/assets/openscad/hose-adapters/vacuum_hose_adapter-magnetic_magnetcount_text.gif){:.wrap-lightbox  width="150" }<br>Number of magnets in the connector
`End_Magnet_Diameter` | ![vacuum_hose_adapter magnetic_magnetdiameter](/assets/openscad/hose-adapters/vacuum_hose_adapter-magnetic_magnetdiameter_text.gif){:.wrap-lightbox  width="150" }<br>The diameter of the magnets (mm)
`End_Magnet_Thickness` | ![vacuum_hose_adapter magnetic_magnetthickness](/assets/openscad/hose-adapters/vacuum_hose_adapter-magnetic_magnetthickness_text.gif){:.wrap-lightbox  width="150" }<br>The thickness of the magnets (mm)
`End_Magnet_Border` | ![vacuum_hose_adapter magnetic_magnetborder](/assets/openscad/hose-adapters/vacuum_hose_adapter-magnetic_magnetborder_text.gif){:.wrap-lightbox  width="150" }<br>Minium amount of the material around the magnets (mm)
`End_Magnet_Flange_Thickness` | ![vacuum_hose_adapter magnetic_flangethickness](/assets/openscad/hose-adapters/vacuum_hose_adapter-magnetic_flangethickness_text.gif){:.wrap-lightbox  width="150" }<br>Thickness of the magnet flange (mm)
`End_Ring` | ![vacuum_hose_adapter magnetic_alignmentring](/assets/openscad/hose-adapters/vacuum_hose_adapter-magnetic_alignmentring_text.gif){:.wrap-lightbox  width="150" }<br>Include a flange alignment ring <br>- `no`: No alignment ring<br>- `protruding`: protruding ring<br>- `recessed`: Recessed ring
`Twist_Lock` | ![vacuum_hose_adapter magnetic_twistlock](/assets/openscad/hose-adapters/vacuum_hose_adapter-magnetic_twistlock_text.gif){:.wrap-lightbox  width="150" }<br>This is an experimental feature.<br>Add a mechanical twist lock by including the ability to add a bolt<br>- `0`: none<br>- `3`: M3<br>- `3cnc`: M3 with CNC Kitchen insert<br>- `4`: M4<br>- `4cnc`: M4 with CNC Kitchen insert<br>- `5`: M5<br>- `5cnc`: M5 with CNC Kitchen insert

## Connector - Magnetic Connector - Alignment Ring
The alignment ring is meant to help seal the magnetic rings. You can ether print a ring in TPU or you could use some from of sealing o-ring material. When I first designed the magnetic adapters I thought this was needed and important to prevent air leaking. But I don't use them and have no issues with the adapters sealing.<br>

Setting | Description
-|-
`Draw_Alignment_Ring` |draw just the alignment ring `default = "no"` `[end1: Draw end 1, end2: Draw end 2, no: Don't draw]`
`Alignment_Depth` | Alignment depth in to flange (mm)
`Alignment_Upper_Width` | Alignment upper width at widest part (mm)
`Alignment_Lower_Width` | Alignment lower width at narrowest part (mm)
`Alignment_Side_Clearance` | Alignment side clearance, to give nice fit (mm).
`Alignment Depth Clearance` | to prevent hitting bottom (mm).