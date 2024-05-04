---
layout: default
parent: Connectors
nav_order: 1
has_children: true
parent: OpenSCAD Hose adapters
permalink: /docs/openscad/hose-adapter/connectors
---
# Connectors
There are currently 8 types of connectors, each can be use as **End 1** or **End 2**. Each connector type has settings that are only relevant to that specific connectors. Some connectors have no configurable settings.

![Hose Adapter connectors](/assets/openscad/hose-adapters/vacuum_hose_adapter-demo_text.gif){:.wrap-lightbox width="500"}

## Common settings
Common settings for all connectors. Some settings will be overridden by specific connectors. I.E. Dyson V5 has a fixed size.

## Options

Setting | Description
-|-
`End_Style` |The style of the end<br>options<br> - `hose`, Hose connector (configurable)<br> - `flange`, Flange (configurable)<br> - `mag`, Magnetic Flange (configurable)<br> - `nozzle`, Nozzle (configurable)<br> - `camlock`, Camlock connector (fixed)<br> - `centec`, Centec connector (fixed)<br> - `dyson`, Dyson connector (fixed)<br> - `dw735`, Dewalt 735 connector (fixed)
`End_Measurement` | ![vacuum_hose_adapter endcommon_measurement](/assets/openscad/hose-adapters/vacuum_hose_adapter-endcommon_measurement_text.gif){:.wrap-lightbox  width="150" }<BR>Is the measurement the adapter's outside or inside diameter? <br>options<br> - `inner`, Inner adapter measurement<br> - `outer`, Outer adapter measurement.<br>Only applies to configurable styles, `hose`, `flange`, `mag` `nozzle`.
`End_Wall_Thickness` | ![vacuum_hose_adapter endcommon_wallthickness](/assets/openscad/hose-adapters/vacuum_hose_adapter-endcommon_wallthickness_text.gif){:.wrap-lightbox  width="150" }<BR>Wall thickness<br>`default=2`.<br>Only applies to configurable styles, `hose`, `flange`, `mag` `nozzle`.
`End_Diameter`| ![vacuum_hose_adapter endcommon_diameter](/assets/openscad/hose-adapters/vacuum_hose_adapter-endcommon_diameter_text.gif){:.wrap-lightbox  width="150" }<BR>Diameter of the adapter (mm).<br>Only applies to configurable styles, `hose`, `flange`, `mag` `nozzle`.
`End_Length` | ![vacuum_hose_adapter endcommon_length](/assets/openscad/hose-adapters/vacuum_hose_adapter-endcommon_length_text.gif){:.wrap-lightbox  width="150" }<BR>Length of the connector (including the flange).<br>Only applies to configurable styles, `hose`, `flange`, `mag` `nozzle`.
`End_Taper` | ![vacuum_hose_adapter endcommon_taper](/assets/openscad/hose-adapters/vacuum_hose_adapter-endcommon_taper_text.gif){:.wrap-lightbox  width="150" }<BR>Taper of the connector, use negative to taper other direction.<br>Only applies to configurable styles, `hose`, `flange`, `mag` `nozzle`.
`End_Rotation` | ![vacuum_hose_adapter endcommon_rotation](/assets/openscad/hose-adapters/vacuum_hose_adapter-endcommon_rotation_text.gif){:.wrap-lightbox  width="150" }<BR>Rotation in deg of the connector. This is useful when the connector is not symmetrical (nozzle, dw735, dyson).<br>Applies to styles.

# other

Setting | Description
-|-
`Enable_Debug_Slice` | Slice model in half to be able to easy see inside
`Enable_Calipers_Slice` | Show the measurement calipers, most useful with `Debug_Slice` enabled.
`Enable_Help` | Outputs help to the console.