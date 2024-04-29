---
layout: default
title: Transition Configuration
nav_order: 1
parent: Transition
grand_parent: OpenSCAD Hose adapters
permalink: /docs/openscad/hose-adapter/transition/configuration
---

## Transition Configuration

Setting | Description
-|-
`Transition_Style` | The style of the transition see **Transition Styles** above.<br> - `taper+bend`: Taper then bend<br> - `bend+taper`: Bend then taper<br> - `organicbend`: fully tapered bend<br> - `hull`: Hull for multiple end count<br> - `flat`: basic flat transition.
`Transition_Length` | ![vacuum_hose_adapter transition_length](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_length_text.gif){:.wrap-lightbox  width="250" }<br>Length of the transition between the two ends.<br> - For `taper+bend` and `bend+taper` this will be the tapered sections length.<br> - For `flat` its the length of the transitions. <br>For `organicbend` and `hull` it has no effect.
`Transition_Bend_Radius` | ![vacuum_hose_adapter transition_bendradius](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_bendradius_text.gif){:.wrap-lightbox  width="250" }<br>The radius in mm around which the bend will occur.<br> - Impacts `taper+bend`, `bend+taper` and `organicbend`.
`Transition_Angle` | ![vacuum_hose_adapter transition_angle](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_angle_text.gif){:.wrap-lightbox  width="250" }<br>Angle of bend through the transition section.<br> - Impacts `taper+bend`, `bend+taper` and `organicbend`.
`Transition_Offset` | ![vacuum_hose_adapter transition_offset](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_offset_text.gif){:.wrap-lightbox  width="250" }<br>This offset applies to the tapered section of `taper+bend`, `bend+taper`. It allows moving the second connector of the center.<br> - For '`organicbend` or `hull` this is not supported.
`Transition_End2_Count` | ![vacuum_hose_adapter transition_EndCount](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_EndCount_text.gif){:.wrap-lightbox  width="250" }<br>The number of ends will be rendered (does not include the hull center). The are all all evenly spaced around a full 360. You will need to adjust the angle and bend radius to make it work. Any number can be applied, however more then 6 is unlikely to be workable.