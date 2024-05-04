---
layout: default
title: Transition Extension
nav_order: 2
parent: Transition
grand_parent: OpenSCAD Hose adapters
permalink: /docs/openscad/hose-adapter/transition/extension
---
## Transition Pre and Post Extension
![vacuum_hose_adapter transitionext_demo](/assets/openscad/hose-adapters/vacuum_hose_adapter-transitionext_demo_text.gif){:.wrap-lightbox  width="500" }<br>
Add a straight extension of the desired length before at the start or end of the transition. This can be used with all of the adapter types, and is helpful for connectors that don't allow you to change the length, I.E. Centec, DW735, nozzle and so on.<br>
The extension also supports adding a grid mesh. This is might be helpful in preventing large pieces being sucked in to fan blades.

Setting | Description
-|-
`Transition_Pre_Length` | ![vacuum_hose_adapter transitionextpre_length](/assets/openscad/hose-adapters/vacuum_hose_adapter-transitionextpre_length_text.gif){:.wrap-lightbox  width="250" }<br>Defines in mm the length of the pre transition extension.
`Transition_Pre_GridSize` | ![vacuum_hose_adapter transitionextpre_gridSize](/assets/openscad/hose-adapters/vacuum_hose_adapter-transitionextpre_gridSize_text.gif){:.wrap-lightbox  width="250" }<br>Defines in mm the size of the grid mesh. Both the `GridSize`. `Default is connectorInnerDiameter/6`.
`Transition_Pre_GridWallThickness` | ![vacuum_hose_adapter transitionextpre_wallthickness](/assets/openscad/hose-adapters/vacuum_hose_adapter-transitionextpre_wallthickness_text.gif){:.wrap-lightbox  width="250" }<br>Defines in mm the grid wall thickness, can't be greater than then length. If value is 0 the grid wont be rendered.
`Transition_Post_Length` | ![vacuum_hose_adapter transitionextpost_length_text](/assets/openscad/hose-adapters/vacuum_hose_adapter-transitionextpost_length_text.gif){:.wrap-lightbox  width="250" }<br>Defines in mm the length of the pre transition extension.
`Transition_Post_GridSize` | ![vacuum_hose_adapter transitionextpost_gridSize](/assets/openscad/hose-adapters/vacuum_hose_adapter-transitionextpost_gridSize_text.gif){:.wrap-lightbox  width="250" }<br>Defines in mm the size of the grid mesh. Both the `GridSize`. `Default is connectorInnerDiameter/6`.
`Transition_Post_GridWallThickness` | ![vacuum_hose_adapter transitionextpost_wallthickness](/assets/openscad/hose-adapters/vacuum_hose_adapter-transitionextpost_wallthickness_text.gif){:.wrap-lightbox  width="250" }<br>Defines in mm the grid wall thickness, can't be greater than then length. If value is 0 the grid wont be rendered.