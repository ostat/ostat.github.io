---
layout: default
title: OpenSCAD Hose Adapter Connectors
nav_order: 1
has_children: true
parent: OpenSCAD Hose adapters
permalink: /docs/openscad/hose-adapter/connectors
---
# Connectors
There are currently 5 types of connectors, each can be use as **connector 1** or **connector 2**. Each connector type has settings that are only relevant to that specific connectors. Some connectors have no configurable settings.

![Hose Adapter connectors](/assets/openscad/hose-adapters/vacuum_hose_adapter-demo_text.gif){:.wrap-lightbox width="500"}

## Common settings
Common settings for all connectors. Some settings will be overridden by specific connectors. I.E. Dyson V5 has a fixed size.

Setting | Description
-|-
`End_Style` |The style of the end<br>options<br> - `hose`, Hose connector<br> - `flange`, Flange<br> - `mag`, Magnetic Flange<br> - `nozzle`, Nozzle<br> - `camlock`, Camlock connector<br> - `centec`, Centec connector<br> - `dyson`, Dyson connector<br> - `dw735`, Dewalt 735 connector
`End_Measurement` | ![vacuum_hose_adapter endcommon_measurement](/assets/openscad/hose-adapters/vacuum_hose_adapter-endcommon_measurement_text.gif){:.wrap-lightbox  width="150" }<BR>Is the measurement the adapter's outside or inside diameter? <br>options<br> - `inner`, Inner adapter measurement<br> - `outer`, Outer adapter measurement
`End_Wall_Thickness` | ![vacuum_hose_adapter endcommon_wallthickness](/assets/openscad/hose-adapters/vacuum_hose_adapter-endcommon_wallthickness_text.gif){:.wrap-lightbox  width="150" }<BR>Wall thickness<br>`default=2`
`End_Diameter`| ![vacuum_hose_adapter endcommon_diameter](/assets/openscad/hose-adapters/vacuum_hose_adapter-endcommon_diameter_text.gif){:.wrap-lightbox  width="150" }<BR>Diameter of the adapter (mm)
`End_Length` | ![vacuum_hose_adapter endcommon_length](/assets/openscad/hose-adapters/vacuum_hose_adapter-endcommon_length_text.gif){:.wrap-lightbox  width="150" }<BR>Length of the connector (including the flange).
`End_Taper` | ![vacuum_hose_adapter endcommon_taper](/assets/openscad/hose-adapters/vacuum_hose_adapter-endcommon_taper_text.gif){:.wrap-lightbox  width="150" }<BR>Taper of the connector, use negative to taper other direction.

## Connector - Hose connector
![Hose](/assets/openscad/hose-adapters/vacuum_hose_adapter-hose_demo_text.gif){:.wrap-lightbox width="500"}<br>
The hose connector is the most generic connector. Its intended to be pushed inside a hose or over an existing connector. We can enable a stop to prevent the adapter being pulled in to the hose, and barbs for soft style pipe.

Setting | Description
-|-
`End_StopThickness` | ![vacuum_hose_adapter hose_stopthickness](/assets/openscad/hose-adapters/vacuum_hose_adapter-hose_stopthickness_text.gif){:.wrap-lightbox  width="150" }<br>Thickness of hose stop
`End_StopLength` | ![vacuum_hose_adapter hose_stoplength](/assets/openscad/hose-adapters/vacuum_hose_adapter-hose_stoplength_text.gif){:.wrap-lightbox  width="150" }<br>Length of hose stop. It will be easier to if the length is greater than the StopThickness.
`End_Stop_Symmetrical` | ![vacuum_hose_adapter hose_stopsymmetrical](/assets/openscad/hose-adapters/vacuum_hose_adapter-hose_stopsymmetrical_text.gif){:.wrap-lightbox  width="150" }<br>Enabling will taper the stop on both sides, this can be helpful depending on your print orientation .
`End_Barbs_Count` | ![vacuum_hose_adapter hose_barbscount](/assets/openscad/hose-adapters/vacuum_hose_adapter-hose_barbscount_text.gif){:.wrap-lightbox  width="150" }<br>The number of barbs
`End_Barbs_Thickness` | ![vacuum_hose_adapter hose_barbsthickness](/assets/openscad/hose-adapters/vacuum_hose_adapter-hose_barbsthickness_text.gif){:.wrap-lightbox  width="150" }<br>Thickness of the barbs, default is half wall thickness
`End_Barbs_Symmetrical` | ![vacuum_hose_adapter hose_barbssymmetrical](/assets/openscad/hose-adapters/vacuum_hose_adapter-hose_barbssymmetrical_text.gif){:.wrap-lightbox  width="150" }<br>Should the barbs be tapered both sides. Might be easier to print.
`End_Hose_EndCap_Thickness` | ![vacuum_hose_adapter hose_endcapthickness](/assets/openscad/hose-adapters/vacuum_hose_adapter-hose_endcapthickness_text.gif){:.wrap-lightbox  width="150" }<br> Adds an end cap of the selected width in mm to the end of a hose connector. This can be used to create a closed connector, or you can add a hole using `End_Hose_EndCap_Diameter`.<BR>- `0`: disables the endcap. Default
`End_Hose_EndCap_Diameter` | ![vacuum_hose_adapter hose_endcapdiameter](/assets/openscad/hose-adapters/vacuum_hose_adapter-hose_endcapdiameter_text.gif){:.wrap-lightbox  width="150" }<br>Creates a hole in the endcap of the provided diameter in mm.

## Connector - Flange
![Flange](/assets/openscad/hose-adapters/vacuum_hose_adapter-flange_demo_text.gif){:.wrap-lightbox width="500"}<br>

Setting | Description
-|-
`End_Flange_Width` | ![vacuum_hose_adapter flange_width](/assets/openscad/hose-adapters/vacuum_hose_adapter-flange_width_text.gif){:.wrap-lightbox  width="150" }<br>Width of Flange added to the connector diameter
`End_Flange_Thickness` | ![vacuum_hose_adapter flange_thickness](/assets/openscad/hose-adapters/vacuum_hose_adapter-flange_thickness_text.gif){:.wrap-lightbox  width="150" }<br>Thickness of the flange
`End_Flange_Screw_Position` | ![vacuum_hose_adapter flange_screwposition](/assets/openscad/hose-adapters/vacuum_hose_adapter-flange_screwposition_text.gif){:.wrap-lightbox  width="150" }<br>Position of the screws added to the connector diameter, 0 = middle of flange
`End_Flange_Screw_Border` | ![vacuum_hose_adapter flange_screwborder](/assets/openscad/hose-adapters/vacuum_hose_adapter-flange_screwborder_text.gif){:.wrap-lightbox  width="150" }<br>Minium amount of the material around the magnets (mm), 0 = End_Flange_Width / 4
`End_Flange_Screw_Count` | ![vacuum_hose_adapter flange_screwcount](/assets/openscad/hose-adapters/vacuum_hose_adapter-flange_screwcount_text.gif){:.wrap-lightbox  width="150" }<br>Number of Screw holes flange
`End_Flange_Screw_Diameter` | ![vacuum_hose_adapter flange_screwdiameter](/assets/openscad/hose-adapters/vacuum_hose_adapter-flange_screwdiameter_text.gif){:.wrap-lightbox  width="150" }<br>The diameter of the screws (mm)

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

## Connector - Nozzle

Setting | Description
-|-
`End_Nozzle_Shape` | `[square, circle]`
`End_Nozzle_Square_Width` | 
`End_Nozzle_Square_Depth` | 
`End_Nozzle_Tip_Wall_Thickness` | 
`End_Nozzle_Radius` | 
`End_Nozzle_Length` | 
`End_Nozzle_xOffset` | 
`End_Nozzle_yOffset` | 
`End_Nozzle_Chamfer_Percentage` | 
`End_Nozzle_Chamfer_Angle` | 

## Connector - camlock
This connector is compatible with (PeterH)[PeterH]'s (camlock connectors)[https://www.printables.com/model/461256-shopvac-50mm-camlock-connectors-with-magnetic-catc]<br>
![camlock](/assets/openscad/hose-adapters/vacuum_hose_adapter-camlock_demo_text.gif){:.wrap-lightbox width="500"}<br>

## Connector - centec
This connector is compatible with CenTec quick connect system.<br>
![centec](/assets/openscad/hose-adapters/vacuum_hose_adapter-centec_demo_text.gif){:.wrap-lightbox width="500"}<br>

## Connector - dyson
This connector is compatible with the Dyson DC35/DC45/DC52/DC58/DC59/V6 vacuums. It has the connector on four sides of the connector, which is handy for bent style nozzles.<br>
![dyson](/assets/openscad/hose-adapters/vacuum_hose_adapter-dyson_demo_text.gif){:.wrap-lightbox width="500"}<br>

## Connector - dw735
This connector is compatible with the Dewalt dw735 planer. If the transition has an angle (I.E. is not straight) it will have a range of attachment points to allow for more rotational options when attaching.<br>
![dw735](/assets/openscad/hose-adapters/vacuum_hose_adapter-dw735_demo_text.gif){:.wrap-lightbox width="500"}<br>

# other

Setting | Description
-|-
`Enable_Debug_Slice` | Slice model in half to be able to easy see inside