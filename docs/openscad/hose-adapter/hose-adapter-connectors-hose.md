---
layout: default
title: Connector Hose
nav_order: 1
parent: Connectors
grand_parent: OpenSCAD Hose adapters
permalink: /docs/openscad/hose-adapter/connectors/hose
---
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