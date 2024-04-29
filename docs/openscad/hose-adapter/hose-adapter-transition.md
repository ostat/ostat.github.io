---
layout: default
title: Transitions
nav_order: 2
parent: OpenSCAD Hose adapters
permalink: /docs/openscad/hose-adapter/transitions
---
# Transition
![vacuum_hose_adapter transition_demo](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_demo_text.gif){:.wrap-lightbox  width="500" }
This covers the way that the two end of the adapter are connected. The transition will take in to account the size, wall and thickness of each end and using the provided settings created a shape. <br>

## Transition Styles

Setting | Description
-|-
`Taper+Bend` | ![vacuum_hose_adapter transition_taperbend](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_taperbend_text.gif){:.wrap-lightbox  width="250" }<br>Connects End1 to End2, first with a taper then a bend. The taper section wont hull together. Supports multiple connectors, but best suited to one to one connectors.
`Bend+Taper` | ![vacuum_hose_adapter transition_bendtaper](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_bendtaper_text.gif){:.wrap-lightbox  width="250" }<br>Connects End1 to End2, first with a bend then a taper. The taper section wont hull together. Supports multiple connectors, but best suited to one to one connectors.
`Organicbend` | ![vacuum_hose_adapter transition_organicbend](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_organicbend_text.gif){:.wrap-lightbox  width="250" }<br>Connects End1 to End2 with an *organic* taper. Supports multiple connectors.
`Hull` | ![vacuum_hose_adapter transition_hull](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_hull_text.gif){:.wrap-lightbox  width="250" }<br>Connects End1 to End2 with a hull. Supports multiple connectors, as well as a center connector. Best used for multiple connectors.
`Flat` | ![vacuum_hose_adapter transition_flat](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_flat_text.gif){:.wrap-lightbox  width="250" }<br>Connects End1 to End2 with simple flat transition. Does not support multiple connectors.

## Transition Configuration

Setting | Description
-|-
`Transition_Style` | The style of the transition see **Transition Styles** above.<br> - `taper+bend`: Taper then bend<br> - `bend+taper`: Bend then taper<br> - `organicbend`: fully tapered bend<br> - `hull`: Hull for multiple end count<br> - `flat`: basic flat transition.
`Transition_Length` | ![vacuum_hose_adapter transition_length](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_length_text.gif){:.wrap-lightbox  width="250" }Length of the transition between the two ends
`Transition_Bend_Radius` | ![vacuum_hose_adapter transition_bendradius](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_bendradius_text.gif){:.wrap-lightbox  width="250" }Radius of transition bend (mm)
`Transition_Angle` | ![vacuum_hose_adapter transition_angle](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_angle_text.gif){:.wrap-lightbox  width="250" }Angle of bend through the transition section.
`Transition_Offset` | ![vacuum_hose_adapter transition_offset](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_offset_text.gif){:.wrap-lightbox  width="250" }offset for the connector, not supported on taperedbend or hull.
`Transition_End2_Count` | ![vacuum_hose_adapter transition_EndCount](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_EndCount_text.gif){:.wrap-lightbox  width="250" }Duplicate the second connector. Adjust angle and bend radius to make it work. [1, 2, 3, 4, 5, 6]

## Transition Multiple connector settings
![vacuum_hose_adapter transition_hull](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_hull_text.gif){:.wrap-lightbox  width="500" }
Settings specific to the Hull transition style.

Setting | Description
-|-
`Transition_HullLength` | ![vacuum_hose_adapter transition_hulllength](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_hulllength_text.gif){:.wrap-lightbox  width="250" }<br>MultiConnector, connector in hull length.
`Transition_HullyOffset` | ![vacuum_hose_adapter transition_hulloffset](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_hulloffset_text.gif){:.wrap-lightbox  width="250" }<br>MultiConnector, connector in hull offset.
`Transition_HullCenter` |MultiConnector, add center connector, see `Transition_HullCenterHeight`.
`Transition_HullCenterHeight` | ![vacuum_hose_adapter transition_hullcenter](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_hullcenter_text.gif){:.wrap-lightbox  width="250" }<br>MultiConnector, center connector height. `default is 2*lengthInHull`

## Transition Support For Angled Adapters
![vacuum_hose_adapter transitionbase](/assets/openscad/hose-adapters/vacuum_hose_adapter-transitionbase_text.gif){:.wrap-lightbox  width="500" }
<br>The base support is intended to assist in printing the adapter allowing the for less support by orientating it on the bend. This wont work for all configurations, and often some support is still needed for angled adapters.<br>

Setting | Description
-|-
`Transition_Base_Type` | ![vacuum_hose_adapter transitionbase](/assets/openscad/hose-adapters/vacuum_hose_adapter-transitionbase_text.gif){:.wrap-lightbox  width="150" }<br> Include a flat section on the transition to assist with printing `[none, oval, rectangle]`
`Transition_Base_Thickness` |![vacuum_hose_adapter transitionbase_thickness](/assets/openscad/hose-adapters/vacuum_hose_adapter-transitionbase_thickness_text.gif){:.wrap-lightbox  width="150" }<br> Support Base Additional Thickness
`Transition_Base_Width` | ![vacuum_hose_adapter transitionbase_width](/assets/openscad/hose-adapters/vacuum_hose_adapter-transitionbase_width_text.gif){:.wrap-lightbox  width="150" }<br>Support Base Width. `default is half diameter`
`Transition_Base_Length` | ![vacuum_hose_adapter transitionbase_length](/assets/openscad/hose-adapters/vacuum_hose_adapter-transitionbase_length_text.gif){:.wrap-lightbox  width="150" }<br>Support Base Length `Default is 2/3 diameter`
`Transition_Base_Angle` | ![vacuum_hose_adapter transitionbase_angle_text](/assets/openscad/hose-adapters/vacuum_hose_adapter-transitionbase_angle_text.gif){:.wrap-lightbox  width="150" }<br>Support Base Angle position, `default half of Bend Radius`




