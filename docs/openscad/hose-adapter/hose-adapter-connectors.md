---
layout: default
parent: Connectors
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

## Options

Setting | Description
-|-
`End_Style` |The style of the end<br>options<br> - `hose`, Hose connector<br> - `flange`, Flange<br> - `mag`, Magnetic Flange<br> - `nozzle`, Nozzle<br> - `camlock`, Camlock connector<br> - `centec`, Centec connector<br> - `dyson`, Dyson connector<br> - `dw735`, Dewalt 735 connector
`End_Measurement` | ![vacuum_hose_adapter endcommon_measurement](/assets/openscad/hose-adapters/vacuum_hose_adapter-endcommon_measurement_text.gif){:.wrap-lightbox  width="150" }<BR>Is the measurement the adapter's outside or inside diameter? <br>options<br> - `inner`, Inner adapter measurement<br> - `outer`, Outer adapter measurement
`End_Wall_Thickness` | ![vacuum_hose_adapter endcommon_wallthickness](/assets/openscad/hose-adapters/vacuum_hose_adapter-endcommon_wallthickness_text.gif){:.wrap-lightbox  width="150" }<BR>Wall thickness<br>`default=2`
`End_Diameter`| ![vacuum_hose_adapter endcommon_diameter](/assets/openscad/hose-adapters/vacuum_hose_adapter-endcommon_diameter_text.gif){:.wrap-lightbox  width="150" }<BR>Diameter of the adapter (mm)
`End_Length` | ![vacuum_hose_adapter endcommon_length](/assets/openscad/hose-adapters/vacuum_hose_adapter-endcommon_length_text.gif){:.wrap-lightbox  width="150" }<BR>Length of the connector (including the flange).
`End_Taper` | ![vacuum_hose_adapter endcommon_taper](/assets/openscad/hose-adapters/vacuum_hose_adapter-endcommon_taper_text.gif){:.wrap-lightbox  width="150" }<BR>Taper of the connector, use negative to taper other direction.
`End_Rotation` | ![vacuum_hose_adapter endcommon_rotation](/assets/openscad/hose-adapters/vacuum_hose_adapter-endcommon_rotation_text.gif){:.wrap-lightbox  width="150" }<BR>Taper of the connector, use negative to taper other direction.

# other

Setting | Description
-|-
`Enable_Debug_Slice` | Slice model in half to be able to easy see inside
`Enable_Calipers_Slice` | Show the measurement calipers, most useful with `Debug_Slice` enabled.
`Enable_Help` | Outputs help to the console.