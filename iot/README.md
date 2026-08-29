# Internet of Things (IoT) — Notes & Project

Personal notes and materials for **CSE 4417 – Internet of Things (IoT)**, Spring 2026, at the University of Liberal Arts Bangladesh (ULAB), Dept. of Computer Science & Engineering.

These notes cover the full IoT stack — from sensors and actuators at the edge, through networking protocols, up to middleware and cloud platforms. They mix plain-concepts with software-engineering analogies (sensors as "request bodies", actuators as "side effects", microcontrollers as tiny "edge servers") to make the hardware world click for programmers.

## Repository Structure

```
iot/
├── README.md                          # this file
├── distributed-system-nodejs.pdf      # distributed systems reference (Node.js)
├── IOT-Notes/                         # handwritten-style course notes by lecture
│   ├── iot-1/..iot-9/                 # lecture notes (sensors, actuation, networking, middleware, cloud, ...)
│   ├── after-mid.md                   # networking in IoT + WSN recap
│   ├── questions/                     # exam / practice questions
│   └── research-paper/                # research paper material
├── osi-model/                         # OSI model deep dive (layer-by-layer)
├── project/                           # ElderCare IoT student project
├── questions/                         # scenario-based exam questions
└── slides/                            # lecture PDFs
```

## Topics Covered

### Foundations
- What IoT is and the **three-layer architecture** (Perception / Network / Application)
- The **sensor → decision → actuator** control loop
- Sensors: analog vs. digital, scalar vs. vector, resolution, accuracy, hysteresis
- Actuators: hydraulic, pneumatic, electric, magnetic/thermal, mechanical, soft, shape-memory polymer

### Networking
- **OSI model** refresher (layer-by-layer, see `osi-model/`)
- Encapsulation & decapsulation, packets, and the "connection problem" in IoT
- **Application layer**: MQTT (publish/subscribe) and CoAP
- **Transport layer**: TCP vs. UDP vs. DCCP vs. SCTP, and why TCP is expensive on constrained devices
- **Network layer**: IPv6, **6LoWPAN**, **RPL** routing (DODAGs, storing/non-storing modes)
- **Link & physical layers**: Bluetooth, Wi-Fi, IEEE 802.15.4, ZigBee, Z-Wave, RFID, X10

### Middleware & Cloud
- IoT middleware: interoperability (network/syntactic/semantic), context detection, device discovery, multi-tier privacy, scalability
- **IoT cloud computing**: distributed systems, virtualization, service models (SaaS / PaaS / IaaS), deployment models (public / private / community / hybrid)
- Example platforms: Cosm/Xively, Nimbits, MATLAB ThingSpeak

## Project: ElderCare IoT

The `project/` folder contains a full student project roadmap: a **smart elderly-care IoT system** (chosen over the broader AURA concept for its focus, realism, and feasibility). Includes architecture, features, business canvas, resources/budget, and a presentation source.

## Resource Materials

- `slides/` — lecture PDFs (Introduction to IoT → Networking)
- `IOT-Notes/research-paper/` — research paper material for the networking assignment
- `questions/` and `IOT-Notes/questions/` — scenario-based exam practice

## Contact

Course lecturer: **Atanu Shuvam Roy** — [atanu.shuvam@ulab.edu.bd](mailto:atanu.shuvam@ulab.edu.bd)
