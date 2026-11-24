---
# Localisation on the Programme page (full) and the Flights page (`status:` only). Owned by ST Engineering; CMU advises.
# The three items are the three questions, shown as cards. The plan's steps and the pass marks are targets, not results; no dates.
eyebrow: Localisation
title: Knowing where every drone is
order: 9
status: In the AirStack simulator, camera-only localisation followed a 162 m flight without losing track; a real Starling comes next.
items:
  - label: "1 · Each drone, by itself"
    title: Where am I?
    text: Each drone works out its own position from its camera and motion sensor. This is the only layer that steers the drone.
  - label: "2 · One shared picture"
    title: Where are my teammates?
    text: Teammates share only their position and heading, and the drones measure the distance to each other by radio ranging. This picture never steers a drone.
  - label: "3 · Moving obstacles"
    title: Where is the other team?
    text: The other side does not share where it is, so its drones are treated as moving obstacles, detected by our drones' cameras and two ground sensor stations.
openLabel: What we haven't solved yet
open:
  - "The 0.081 m error is measured against the drone's own estimate, not against the simulator's true position."
  - "We have no number from a real Starling yet. The first, from a camera carried by hand, is the next target."
  - "In a bare, flat world the camera's path jumped 5–10 m away. It needs things to look at, and we can't choose the scenery outdoors."
note: Only layer 1 steers a drone. Layers 2 and 3 feed the team strategy and the safety filter, never the autopilot, so a bad message from a teammate can never crash a drone.
image: ./images/loc-sim-scenes.png
imageAlt: "Two plots of a simulated flight path. Left: in a bare flat world the camera's path (red) jumps away from the drone's own estimate (grey). Right: over a construction site the two paths stay together."
caption: "Simulation only, camera only. Left: a bare flat world gives the camera few features, and its path (red) jumped 5–10 m from the drone's estimate (grey). Right: the construction site, with no jumps over 162 m."
---

**Why.** Today our drones fly indoors, with cameras on the walls telling each one where it is. Later in the programme they have to fly without that system and without GPS, so each drone has to work out its position by itself.

**How.** Each drone carries a camera and a motion sensor, and an add-on computer turns them into a position (visual-inertial odometry). If that computer goes quiet, or its answer looks wrong, the drone falls back to its built-in estimate within a second.

**Status.** Camera-only localisation works in the AirStack simulator, where the Starling 2 Max now flies. Over a 162 m simulated flight it was off by 0.081 m on average and never lost track. Three Starlings have run it at once. A real Starling is next.

**Plan.** What comes next, in this order. These are targets, not results.

1. A first accuracy number, from a camera carried by hand
2. Flying on the camera
3. Radio ranging tags on the drones
4. Tests in the Singapore hangar
5. Tests in an outdoor flight cage

**Target pass marks:** drift of at most 1 % of the distance flown; teammates lined up within 0.3 m and 2° of heading; drones of the other team spotted at 15 m, with their position within 2 m.
