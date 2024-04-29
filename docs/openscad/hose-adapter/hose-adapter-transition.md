---
layout: default
title: Transition
nav_order: 2
parent: OpenSCAD Hose adapters
has_children: true
permalink: /docs/openscad/hose-adapter/transition
---
# Transition
![vacuum_hose_adapter transition_demo](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_demo_text.gif){:.wrap-lightbox  width="500" }<br>
This covers the way that the two end of the adapter are connected. The transition will take in to account the size, wall and thickness of each end and using the provided settings created a shape.<br>

## Transition Styles
There are currently 5 types of transitions. Each different scenarios they are suited to.<br>

Setting | Description
-|-
`Taper+Bend` | ![vacuum_hose_adapter transition_taperbend](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_taperbend_text.gif){:.wrap-lightbox  width="250" }<br>Connects End1 to End2, first with a taper then a bend. The taper section wont hull together. Supports multiple connectors, but best suited to one to one connectors.
`Bend+Taper` | ![vacuum_hose_adapter transition_bendtaper](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_bendtaper_text.gif){:.wrap-lightbox  width="250" }<br>Connects End1 to End2, first with a bend then a taper. The taper section wont hull together. Supports multiple connectors, but best suited to one to one connectors.
`Organicbend` | ![vacuum_hose_adapter transition_organicbend](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_organicbend_text.gif){:.wrap-lightbox  width="250" }<br>Connects End1 to End2 with an *organic* taper. Supports multiple connectors.
`Hull` | ![vacuum_hose_adapter transition_hull](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_hull_text.gif){:.wrap-lightbox  width="250" }<br>Connects End1 to End2 with a hull. Supports multiple connectors, as well as a center connector. Best used for multiple connectors.
`Flat` | ![vacuum_hose_adapter transition_flat](/assets/openscad/hose-adapters/vacuum_hose_adapter-transition_flat_text.gif){:.wrap-lightbox  width="250" }<br>Connects End1 to End2 with simple flat transition. Does not support multiple connectors.