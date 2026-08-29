## Networking in the Internet of Things (IoT) – Link & Physical Layers

### 1. Networking and Communication (Recap)

**Networking** is the linking of machines (especially computers and embedded devices) so they can operate and interact with each other.
**Communication** is the imparting or exchanging of information or news between entities over these networks.
In IoT systems, networking and communication connect sensors, actuators, gateways, and cloud services over a wide variety of wired and wireless technologies.

---

### 2. Link Layer

The **Link Layer** (often called the Data Link layer) sits just above the Physical layer. In IoT, it is crucial for local (single‑hop) communication.
Main responsibilities:

- **Reliable communication within a single transmission range**  
Ensures frames are delivered correctly between two directly connected nodes (one hop).
- **Media Access Control (MAC) sublayer**  
Decides who can use the shared wireless medium and when.
- **Interference handling**  
Reduces collisions and interference between nodes on the same channel.
- **Automatic Repeat Request (ARQ)**  
Implements retransmissions when frames are lost or corrupted.
- **Tight coupling with the Physical layer**  
The link layer is often implemented together with the radio hardware and PHY.

---

### 3. Link Layer Technologies in IoT

Several link‑layer technologies are commonly used in IoT deployments, each with different trade‑offs in speed, cost, range, and power consumption.

#### 3.1 Bluetooth

- **Popular, low energy, low cost** wireless technology.
- Different variants designed for **energy efficiency** and/or **higher speed** (up to a few Mbps).
- Widely used for short‑range IoT applications: wearables, beacons, personal devices.

#### 3.2 Wi‑Fi (IEEE 802.11)

- The most popular wireless option for general Internet access.
- **High data rates** (hundreds of Mbps to multi‑Gbps with recent standards).
- Typically **higher energy consumption and cost** than more constrained IoT radios.
- Well suited for mains‑powered devices (e.g., home gateways, cameras).

#### 3.3 X10 (Power Line Communication)

- Communicates over **existing power lines**.
- **Very low speed** (on the order of kbps).
- **Low cost** and benefits from **already‑deployed infrastructure**.
- Historically used for simple home automation, but limited by speed, interference, and modern security requirements.

#### 3.4 IEEE 802.15.4

- An **emerging and widely adopted choice for WSNs and IoT**.
- **Low cost** and **low speed** (typically < 1 Mbps).
- Optimized for **low‑power, low‑data‑rate sensor networks**.
- Forms the basis for many higher‑level IoT standards (e.g., ZigBee, 6LoWPAN, Thread).

---

### 4*. IEEE 802.15.4 and Time‑Division Access*

IEEE 802.15.4 defines both the **Physical** and **MAC** layers for low‑power wireless networks.
Key ideas:

- **Time Division** is used to conserve energy:
  - Nodes can **sleep until their assigned time slot** or the next required action.
  - This reduces idle listening and saves battery power.
- **Beacon‑enabled modes**:
  - The coordinator periodically sends **beacons** that define a **superframe** of slots.
  - Nodes know **when they can transmit** and when to sleep.
- **Adjustable beacon frequency and duty cycle**:
  - Beacons can be more or less frequent depending on the application.
  - The **duty cycle** (ratio of active to sleep time) can be tuned to balance latency vs. energy saving.
- **2.4 GHz operation**:
  - Operates in the 2.4 GHz ISM band (shared with Wi‑Fi, Bluetooth, and others).
  - Can suffer from **interference**, so **channel selection and frequency agility** are important.
- **Multi‑hop support**:
  - Supports multi‑hop topologies, but requires handshake protocols and routing above the MAC layer.
- **Open research questions**:
  - The exact way that time slots are distributed and allocated can be **implementation‑specific**.
  - No single standard for all use‑cases; scheduling and slot assignment remain active research areas.

---

### 5. Physical Layer

The **Physical (PHY) Layer** is responsible for actual signal transmission over a medium.
Characteristics:

- **Actual communication over a physical medium**  
(radio waves, power lines, copper, optical fiber, etc.).
- Typically requires **hardware implementation** (e.g., Digital Signal Processors, RF front‑ends).
- Once a radio/PHY is chosen, it is **difficult or impossible to change** without new hardware  
 (exceptions: **Software‑Defined Radios**, which can reconfigure PHY in software).
Common PHY properties:
- **Operating frequency and bandwidth**
  - Example: 2.4 GHz or 5 GHz for Wi‑Fi.
  - Bandwidth and modulation determine **data rate** (e.g., 10 Mbps – 10 Gbps for modern Wi‑Fi).
- **Constellation mapping and encoding**
  - How digital bits are mapped to signal constellations (e.g., QPSK, QAM).
  - Converts digital information into analog signals.
- **Forward Error Correction (FEC)**
  - Adds redundancy to correct errors due to noise and interference.
  - Often combined with ARQ at higher layers for reliability.
- **Signal shaping**
  - Smooths and confines signal pulses to reduce spectral leakage and meet regulations.
- **Signal timing and synchronization**
  - Ensures sender and receiver clocks are aligned enough to demodulate signals correctly.

---

### 6. 6LoWPAN (IPv6 over Low‑Power Wireless Personal Area Networks)

**Problem**:

- **IPv6 addresses** are 128 bits long.
- IEEE 802.15.4 networks have smaller address spaces and very small frame sizes.
- Standard IPv6 headers (40 bytes) are too large for constrained links and waste bandwidth.
**6LoWPAN** provides an adaptation layer between IPv6 and low‑power links like IEEE 802.15.4:
- Observes that **much IPv6 traffic is repetitive**:
  - Same prefix, same ports, similar header fields.
- **Compresses IPv6 headers**:
  - Can reduce a 40‑byte IPv6 header to as little as **2 bytes** in common cases (without needing per‑flow state).
- Adds **fragmentation and reassembly** mechanisms suited to small MTUs.
- Makes **IP on WSNs practical**, enabling end‑to‑end IPv6 from tiny nodes to the global Internet.
Relevant RFCs: RFC 4944, RFC 6282, RFC 6775 (among others).

---

### 7. Suite Solutions for IoT Networking

Some technologies define an **entire protocol suite**, from the physical layer up through the application layer, specifically for home and building automation.

#### 7.1 ZigBee

- Uses **IEEE 802.15.4** as the **PHY and MAC** layer.
- Defines its **own network and routing protocols** (not originally IP‑based).
- Newer versions support **IP as the network layer** using **6LoWPAN**, enabling better Internet integration.
- Maintained by the **ZigBee Alliance**.
- Commonly used for **home automation, lighting, and sensor networks**.

#### 7.2 Z‑Wave

- A **smart‑home communication solution**.
- Defines **all layers** (PHY, MAC, network, application) and is **not an open IEEE standard**.
- Uses sub‑GHz frequencies (< 1 GHz) in many regions:
  - Reduces interference compared to crowded 2.4 GHz band.
  - Often provides better wall penetration in buildings.
- Relies on **source routing** and **master‑slave (controller–device) coordination**.
- Popular for **lighting, door locks, thermostats, and other home devices**.

#### 7.3 INSTEON (Deprecated)

- Used both **power line communication** and **RF**.
- Evolved from older **X10** systems.
- Targeted **home automation** (lighting, switches, sensors).
Reasons for deprecation and decline:
- **Limited speed** compared to modern wireless standards.
- **Limited functionality** and flexibility.
- **Interference issues** on power lines and crowded bands.
- Lack of support for **modern encryption and security practices**.

---

### 8. RFID (Radio‑Frequency Identification)

**RFID** is a technology used for automatic identification and tracking using radio waves.
Layer coverage:

- Typically defines only the **Physical** and **Link** layers.
- Commonly used for **unique identifier (ID) reading**, not full IP networking.
Key properties:
- Used to receive **fixed‑length ID codes** (e.g., 128‑bit identifiers).
- Typical capacities:
  - 128‑bit IDs are common; some retail tags use **198‑bit** identifiers.
  - Basic passive cards may store up to **10 bytes** of user data.
  - Banking or secure cards can store up to **480 bits** or more.
  - Some tags provide **user memory up to several kilobytes (e.g., 8 KB)**.
- **Passive RFID** tags harvest energy from the reader’s signal; **active tags** have their own power source.
- Link layer often uses **Slotted ALOHA**:
  - A simple random access protocol where tags respond in time slots to reduce collisions.
  RFID is widely used in **access control, inventory management, logistics, and contactless payments**.

---

### 9. References

- `https://qiriro.com/ecs6264/lectures/`
- `https://cseweb.ucsd.edu/classes/wi16/cse291-c/`
- `https://profile.iiita.ac.in/bibhas.ghoshal/IoT_2021/Slides/Application_Protocols.pdf`
- `https://profile.iiita.ac.in/bibhas.ghoshal/teaching_iot_new.html`

---

### 10. Assignment (Course Context)

- Download the following papers and write a **500–1000 word** assignment explaining your understanding of each paper, with a focus on IoT networking and protocols.
- Then perform a **contrastive analysis** across the papers.
Old (10+ years) papers:
- Paper 1: `https://arxiv.org/abs/1406.6608`
- Paper 2: `https://ieeexplore.ieee.org/abstract/document/6704479/`
- Paper 3: `https://ieeexplore.ieee.org/abstract/document/6064380`  
Recent review paper:
- Paper 4: `https://www.sciencedirect.com/science/article/pii/S2214785321036439#bi005`
  > Your work will be checked with Turnitin. Any AI detection (>20%) or plagiarism (>10%) may result in a zero.

---

### 11. Course and Contact Information

- University of Liberal Arts Bangladesh (ULAB)
- Department of Computer Science & Engineering
- Course: **CSE 4417 – Internet of Things (IoT)**
- Lecturer: **Atanu Shuvam Roy**
- Email: **[atanu.shuvam@ulab.edu.bd](mailto:atanu.shuvam@ulab.edu.bd)**

