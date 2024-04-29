---
layout: default
title: Transition Multiple connector
nav_order: 2
parent: Transition
grand_parent: OpenSCAD Hose adapters
permalink: /docs/openscad/hose-adapter/transition/multiple-connector
---
## Transition Multiple connector settings
![vacuum_hose_adapter transition_hull](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_hull_text.gif){:.wrap-lightbox  width="500" }<br>
Settings specific to the Hull transition style.

Setting | Description
-|-
`Transition_HullLength` | ![vacuum_hose_adapter transition_hulllength](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_hulllength_text.gif){:.wrap-lightbox  width="250" }<br>The length of the connector inside the hull transition. You can also adjust the `Connector 2 length`, however this wont hull, meaning it might clip inside the shape.
`Transition_HullyOffset` | ![vacuum_hose_adapter transition_hulloffset](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_hulloffset_text.gif){:.wrap-lightbox  width="250" }<br>MultiConnector, connector in hull offset. Shifts the connectors away from the center by the amount provided. Shifting too far might results in thin walls in the transition.
`Transition_HullCenter` |Adds center connector, see `Transition_HullCenterHeight`.
`Transition_HullCenterHeight` | ![vacuum_hose_adapter transition_hullcenter](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_hullcenter_text.gif){:.wrap-lightbox  width="250" }<br>Sets the height of the center connector. `default is 2*lengthInHull`, but this will often not be enough, and its hard to calculate. Suggest you try different values till you find one that is appropriate.