---
layout: default
title: Basic Cup Optimisations 
parent: Gridfinity Extended
grand_parent: OpenSCAD Projects
nav_order: 2
---

# Navigation Structure
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

# Overview

Gridfinity if it has any criticisms it is the time it takes the print and the amount of plastic used. With the bulk of that criticism being aimed at the base/floor of the basic cup. Here we are going to discus the causes of the filament usage and options we have to reduce the plastic used and increase the speed of the print.

The relevant options we have are `floor_thickness`, `magnet_diameter` and `screw_depth` and `box_corner_attachments_only`. These settings set how high the floor (internal bottom of the bin). Adding magnet and screw holes does not change the filament usage much but do increase the print time. We can also use `efficient_floor` and `flat_base` to reduce the height of the floor, however this results in the floor not being flat, or in the case of `flat_base` not being compatible with the the grid plates.

# Summary 
Summary showing the print time and filament used for a bin of `width 2 depth 3 height 5`.

options |Attachments|Corner Attachments|Corner Magnets|no Attachments
-|-|-|-|-
Standard Base|2h27m<br>64.46g|2h4m<br>62.62g|1h:54m<br>58.30g|1h53m<br>58.03g
Efficient Base|2h10m<br>47.52g|1h23m<br>35.78g|1h16m<br>33.97g|1h11m<br>32.82g
Smooth Efficient Base|2h12m<br>48.37g|1h29m<br>37.44g|1h20m<br>34.58g|1h18m<br>34.16g
Flat Base|-|-|-|1h33m<br>51.64g
Flat Base - Efficient Floor |-|-|-|1h3m<br>30.40g
Flat Base - Smooth Efficient Floor |-|-|-|1h5m<br>31.26g

# Comparisons
When comparing print time and filament used the values will differ printer to printer. Whats important is to compare the relative values. The values below are all created using Prusa Slicer 2.7, 15% infill 0.4mm nozzle 0.30mm Quality profile for an MKS3+.

Style|Details
-|-
![basic cup](/assets/openscad/gridfinity-extended/multi_floor_ef_off.png){:.wrap-lightbox width="300" }|**Standard Box**<BR>This is the standard original Gridfinity box<br><br>**w1 d1 h5 cup**<br>- Print time: 38m<br>- Filament used: 14.67g<br>**w2 d3 h5 cup**<br>- Print time: 2h27m<br>- Filament used: 64.46g
![basic cup](/assets/openscad/gridfinity-extended/multi_floor_ef_off_corner.png){:.wrap-lightbox width="300" }|**Corner Attachments**<br>Limiting the attachments to the corners only saves a small amount of filament, but significantly reduces the print time<br><br>**w1 d1 h5 cup**<br>- Print time: 38m<br>- Filament used: 14.67g<br>**w2 d3 h5 cup**<br>- Print time: 2h4m<br>- Filament used: 62.62g<br><br>[Printables Download - Standard Cup](https://www.printables.com/model/752095-gridfinity-collection-with-magnet-and-screw)
![basic cup](/assets/openscad/gridfinity-extended/multi_floor_demo_ef_off_magnet_corner.png){:.wrap-lightbox width="300" }|**Corner Attachments, Only Magnets**<br>Removing the screw reduces the floor height by 1mm, (as the screw depth is 6mm and the next highest item to clear is the grid). <BR>If you need a flat base with Magnets and a grid, this is a good choice.<br><br>**w1 d1 h5 cup**<br>- Print time: 35m<br>- Filament used: 14.11g<br>**w2 d3 h5 cup**<br>- Print time: 1h:54m<br>- Filament used: 58.30g<br><br>[Printables - Gridfinity Collection with Magnet](https://www.printables.com/model/762975-gridfinity-collection-with-magnet)
![basic cup](/assets/openscad/gridfinity-extended/multi_floor_ef_off_noatt.png){:.wrap-lightbox width="300" }|**No Attachments**<br>If you don't plan on using the attachments (I.E. its in a draw). Not much savings from Corner magnets.<br><br>**w1 d1 h5 cup**<br>- Print time: 33m<br>- Filament used: 13.8g<br>**w2 d3 h5 cup**<br>- Print time: 1h53m<br>- Filament used: 58.03g<br><br>[Printables - Gridfinity Basic cup](https://www.printables.com/model/752084-gridfinity-basic-cup)
![basic cup](/assets/openscad/gridfinity-extended/multi_floor_ef_on.png){:.wrap-lightbox width="300" }|**Efficient Floor**<br>Efficient Floor with attachments reduces the filament and print time, however you wont get flat base in the bin. This to catch dust and is hard to clean.<br>**w1 d1 h5 cup**<br>- Print time: 36m<br>- Filament used: 11.70g<br>**w2 d3 h5 cup**<br>- Print time: 2h10m<br>- Filament used: 47.52g
![basic cup](/assets/openscad/gridfinity-extended/multi_floor_ef_on_corner.png){:.wrap-lightbox width="300" }|**Efficient Floor Corner attachments**<br>Efficient Floor combined with only corner attachments further reduces the filament and print time. It still has the issue of collecting dust.<BR><br>**w1 d1 h5 cup**<br>- Print time: 34m<br>- Filament used: 11.32g<br>**w2 d3 h5 cup**<br>- Print time: 1h23m<br>- Filament used: 35.78g<br><br>[Printables - Light Gridfinity Bins Collection with Magnet and Screw](https://www.printables.com/model/752124-light-gridfinity-bins-collection-with-magnet-and-s)
![basic cup](/assets/openscad/gridfinity-extended/multi_floor_ef_on_noatt.png){:.wrap-lightbox width="300" }|**Efficient Floor No attachments**<br>Very efficient if you don't need a flat bottom or magnet/screw attachments.<BR><br>**w1 d1 h5 cup**<br>- Print time: 26m<br>- Filament used: 9.42g<br>**w2 d3 h5 cup**<br>- Print time: 1h11m<br>- Filament used: 32.82g<br><br>[Printables - Light Gridfinity Bins Collection](https://www.printables.com/model/752105-light-gridfinity-bins-collection)
![basic cup](/assets/openscad/gridfinity-extended/multi_floor_ef_off_flat_noatt.png){:.wrap-lightbox width="300" }|**Flat Base**<br>Flat base removes the grid from inside the cup. The cup wont fit in to a grid, but this is not always desired any way. This reduces the floor height while keeping a flat floor.<br>**w1 d1 h5 cup**<br>- Print time: 31m<br>- Filament used: 12.36g<br><BR>**w2 d3 h5 cup**<br>- Print time: 1h33m<br>- Filament used: 51.64g<BR><BR>[Printables - Gridfinity Bins Collection Flat Base](https://www.printables.com/model/776932-gridfinity-bins-collection-flat-base)
![basic cup](/assets/openscad/gridfinity-extended/multi_floor_ef_on_flat_noatt.png){:.wrap-lightbox width="300" }|**Flat Base with Efficient Floor**<br><br>**w1 d1 h5 cup**<br>- Print time: 26m<br>- Filament used: 9.34g<br><BR>**w2 d3 h5 cup**<br>- Print time: 1h3m<br>- Filament used: 30.40g<br><br>[Printables - Light Gridfinity Bins Collection Flat Base ](https://www.printables.com/model/776952-light-gridfinity-bins-collection-flat-base)
![basic cup](/assets/openscad/gridfinity-extended/multi_floor_ef_slide_flat_noatt.png){:.wrap-lightbox width="300" }|**Flat Base with Smooth Efficient Floor**<br>Similar to efficient floor, except the transition is smoother. Slightly more print time than but gives a superior result.<BR>If you dont need the internal grid, this is a good choice.<BR><BR>**w1 d1 h5 cup**<br>- Print time: 27m<br>- Filament used: 9.65g<br>**w2 d3 h5 cup**<br>- Print time: 1h5m<br>- Filament used: 31.26g


