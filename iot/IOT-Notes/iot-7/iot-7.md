## Networking in the Internet of Things (IoT)

### 1. Networking and Communication

**Networking** is the linking of machines (especially computers and embedded devices) so they can operate and interact with each other.

**Communication** is the imparting or exchanging of information or news between entities over these networks.

IoT systems depend on networking and communication to connect sensors, actuators, gateways, cloud services, and user applications.

### 2. OSI Model Refresher

The OSI (Open Systems Interconnection) model has seven layers:

1. Application
2. Presentation
3. Session
4. Transport
5. Network
6. Data Link
7. Physical

Concrete examples:

- **Application**: Facebook, web apps, VoIP, home automation dashboards.
- **Presentation**: HTML, JSON, data serialization/formatting and encryption.
- **Session**: HTTP, managing sessions and dialogs.
- **Transport**: TCP or UDP, providing end‑to‑end data transfer between hosts.
- **Network**: I**P (IPv4/IPv6), logical addressing and routing.**
- **Data Link: IEEE 802.11 (Wi‑Fi), IEEE 802.15.4, Ethernet framing and MAC.**
- **Physical: The actual physical medium and signaling (e.g., IEEE 802.3 Ethernet, radio waves).**

### 3. Communication Stack and Encapsulation

When an application sends data, each layer **adds its own header** around the payload:

- The **application payload** is passed down to the transport layer.
- The **transport layer** adds a transport header (e.g., TCP/UDP) and passes it to the network layer.
- The **network layer** adds an IP header and passes it to the link layer.
- The **link layer** adds its header and trailer and sends frames over the physical medium.

On the receiving side, the process is reversed:

- Each layer **removes its own header**, interprets it, and passes the remaining payload up to the next (upper) layer.
- This is known as **encapsulation (TX)** and **decapsulation (RX)**.

Understanding the stack is important in IoT because each layer introduces overhead, latency, and energy cost—critical factors for constrained devices.

### 4. The Connection Problem in IoT

Wireless Sensor Networks (WSNs) and IoT deployments often use many different protocols at different layers:

- Different link technologies (e.g., IEEE 802.15.4, Wi‑Fi, BLE).
- Different routing and transport mechanisms.
- Different application protocols and data formats.

Problems:

- These heterogeneous networks often **cannot directly understand each other**.
- The incompatibility is **not only a software issue**; it also involves physical and MAC‑layer technologies, addressing schemes, and resource constraints.

A common solution is to use **gateways**:

- Gateways connect WSNs to the traditional Internet.
- They translate between local IoT/WSN protocols and Internet protocols (IPv6, TCP/UDP, HTTP, etc.).
- This makes devices globally reachable while hiding low‑level details.

However, the **current Internet alone is not enough** for IoT:

- It was not originally designed for billions of tiny, low‑power, intermittently connected devices.
- Extensions and adaptations are needed (e.g., IPv6, 6LoWPAN, new routing protocols, constrained application protocols).

### 5. Application Layer and IoT

#### 5.1 Role of the Application Layer

The traditional application layer is often considered together with **presentation** and **session**:

- Provides **common data representation and data retrieval**.
- Examples: lighting automation, home automation, distributed control systems, Skype, Facebook, Hangouts.
- Often **unaware of the underlying infrastructure** as long as it gets an abstract communication service.

In IoT, the application layer must work with **constrained devices**:

- Embedded devices in WSNs are limited in **memory, CPU, and energy**.
- Application protocols must be lightweight, efficient, and sometimes tolerant of lossy links.

Two key application protocols for IoT are **CoAP** and **MQTT**.

#### 5.2 CoAP – Constrained Application Protocol

CoAP (RFC 7252) is designed for constrained nodes and networks:

- **REST‑like**: similar to HTTP (methods like GET, PUT, POST, DELETE).
- **Easily translatable to HTTP**, enabling integration with the Web.
- **Supports multicast**, useful for scenarios like controlling groups of lights.
- Has **very low overhead**:
  - Minimal 4‑byte header + additional Type‑Length‑Value (TLV) options.
- Typically uses a **request/response model**:
  - Data is **polled** or manipulated via GET/PUT/POST requests.

CoAP runs over UDP and is well suited to low‑power, lossy networks.

#### 5.3 MQTT – Message Queuing Telemetry Transport

MQTT is a lightweight **publish–subscribe** protocol:

- Follows a **publisher–subscriber model** with a central **broker**:
  - Publishers send messages on topics.
  - Subscribers receive messages for topics they are interested in.
- Minimizes the code and resource usage on remote (edge) devices:
  - Clients are simple; the broker handles distribution.
- Data is **pushed**: it is published as soon as it becomes available, rather than polled.
- Well suited for **Machine‑to‑Machine (M2M)** communication and **distributed control applications**.

MQTT is frequently used in cloud‑connected IoT systems.

### 6. Transport Layer in IoT

The transport layer provides:

- **Segmentation and reassembly** of large messages.
- **End‑to‑end communication reliability** (e.g., acknowledgments, retransmissions).
- **Congestion control** to avoid overwhelming the network.
- **Reordering** to deliver packets to the application in the correct order.
- **Security** is often added via **Transport Layer Security (TLS/DTLS)**.

Comparison of common transport protocols:

- **TCP**:
  - Segmentation & reassembly: **Yes**
  - End‑to‑end reliability: **Yes**
  - Congestion control: **Yes**
  - Reordering: **Yes**
- **UDP**:
  - Segmentation & reassembly: **No** (handled minimally)
  - End‑to‑end reliability: **No**
  - Congestion control: **No**
  - Reordering: **No**
- **DCCP (Datagram Congestion Control Protocol)**:
  - Reliability: **No**
  - Congestion control: **Yes**
  - Focuses on congestion control for unreliable flows.
- **SCTP (Stream Control Transmission Protocol)**:
  - Reliability: **Yes**
  - Congestion control: **Yes**
  - Reordering: **Yes (optional, per stream)**.

#### 6.1 Open Problems at the Transport Layer

- **TCP is expensive** for constrained IoT environments:
  - High memory usage (state, buffers).
  - End‑to‑end communication overhead and connection setup.
  - Performs poorly over **high‑loss links**.
- **UDP is unreliable**:
  - No built‑in reliability, ordering, or congestion control.
  - Applications or higher‑layer protocols must handle these aspects themselves.

Research and standardization efforts continue on:

- Lightweight reliability mechanisms over UDP (e.g., CoAP confirmable messages).
- New transport designs tailored to lossy, low‑power networks.

### 7. Network Layer in IoT

Responsibilities of the network layer:

- **Managing multiple nodes** and their connectivity.
- **Addressing and routing** between networks.
- Providing **security** (e.g., IPsec for IP).

The dominant solution on the Internet is the **Internet Protocol (IP)**, especially **IPv6** for IoT, but there are additional protocols in the overall “suite” to make IP practical on constrained links.

Key IoT components:

- **6LoWPAN (IPv6 over Low‑Power Wireless Personal Area Networks)**:
  - Adapts IPv6 to low‑power, low‑MTU links such as IEEE 802.15.4.
  - Performs **header compression and fragmentation**.
  - Enables efficient IPv6 communication over WSNs.
- **RPL (Routing Protocol for Low‑Power and Lossy Networks)**:
  - Dominant routing protocol for IPv6 on WSNs.

### 8. RPL – Routing for Low‑Power and Lossy Networks

RPL is designed specifically for **Low‑Power and Lossy Networks (LLNs)**:

- LLNs have **high packet loss rates**, unstable links, and constrained nodes.
- RPL is primarily used with IPv6 (but the ideas are more general).
- It is a **distance‑vector routing protocol**.
- Builds and maintains structures called **Destination Oriented Directed Acyclic Graphs (DODAGs)**.

#### 8.1 Core Concepts and Terminology

- **Directed Acyclic Graph (DAG)**:  
A graph with no cycles. Example: a spanning tree.
- **Root**:  
The destination node of a DAG; it has no outgoing edges (in the logical direction of traffic).
- **Up (link)**:  
Edge pointing toward the root.
- **Down (link)**:  
Edge pointing away from the root.
- **DODAG (Destination Oriented DAG)**:  
A DAG where all nodes want to reach a **single destination (the root)**.
- **Objective Function (OF)**:  
A function (chosen by the designer) that defines what “closer to the root” means:
  - May depend on hop count, link quality, energy cost, latency, etc.
  - The goal is to **minimize** the objective function.
- **Rank**:  
A scalar value that indicates how far a node is from the root according to the objective function (often related to hop count).

Additional terms:

- **RPL Instance**:  
One or more DODAGs that are part of the same logical routing instance (e.g., for a specific application).
- **DODAG ID**:  
A 128‑bit IPv6 address that uniquely identifies a DODAG’s root.
- **DODAG Version**:  
Each new shape/topology of a DODAG is given a new version; used for consistency and repairs.
- **RPL Goal**:  
Find the **best route** to the root according to the objective function.

Topology‑related:

- **Parent / Child**:
  - **Parent**: The next hop a node forwards packets to (toward the root).
  - **Child**: A node that uses this node as its parent.
- **Sub‑DODAG**:  
A subtree of a given DODAG, rooted at some intermediate node.

Routing state:

- **Storing Nodes**:
  - Maintain full routing tables for their sub‑DODAG.
  - Know how to route packets between arbitrary nodes.
  - The root is always a storing node.
- **Non‑Storing Nodes**:
  - Only know their immediate parent(s).
  - Do not store full routing tables.

Network status:

- **Grounded DODAG**:  
The network is considered established and has a path to the desired destination or service.
- **Floating DODAG**:  
Not yet fully established; may not provide connectivity to the intended destination.

#### 8.2 RPL Control Messages

RPL uses several control messages:

- **DIS (DODAG Information Solicitation)**:
  - Sent when a node hears no RPL announcements.
  - Asks nearby nodes to advertise any existing DODAGs.
- **DIO (DODAG Information Object)**:
  - Multicast **downwards (from root toward others)**.
  - Announces DODAG parameters: grounded vs floating, storing vs non‑storing, objective function, version, etc.
  - Helps nodes decide whether and how to join a DODAG.
- **DAO (Destination Advertisement Object)**:
  - Sent **upward (from child to root)**.
  - A child requests to join and advertises that it can reach certain destinations.
- **DAO‑ACK**:
  - Response from parent/root to DAO.
  - Indicates acceptance or rejection of the child’s request.
- **Consistency Check (CC)**:
  - Mechanism related to verifying and maintaining consistency and security in the DODAG topology.

#### 8.3 DODAG Formation Example

Consider four nodes: A, B, C, and D.

1. Node **A** is chosen as the **root** and has the DODAG ID.
2. A **multicasts DIO messages** to announce the DODAG.
3. Nodes **B, C, and D** receive the DIOs:
  - They learn about the DODAG, root A, and approximate distance (rank).
4. B, C, and D send **DAO messages** back toward A to request joining.
5. Root A accepts the DAOs and replies with **DAO‑ACK**.
6. Nodes then select parents (e.g., B may become a parent for C and D) based on:
  - Objective function (e.g., fewest hops, best link quality, lowest energy).
7. **Ranks and routes** are established, forming the full DODAG.

Traffic is typically **upward** (from sensors toward the root), but RPL also supports downward and point‑to‑point traffic.

### 9. RPL and Memory Constraints: Non‑Storing Mode

Routing tables consume memory:

- A single routing entry might contain a Node ID and next hop, requiring tens of bytes (e.g., ~32 bytes) per destination.
- In small IoT devices, **RAM is a scarce resource**.

RPL addresses this via **non‑storing mode**:

- Only the **gateway/root** stores the full routing table.
- Intermediate nodes keep minimal state (e.g., only parent information).
- Downward routes can be encoded in source routing headers from the root.
- This greatly reduces memory usage on constrained devices at the cost of:
  - More overhead in some packets.
  - More work for the root.

### 10. Learning Resources

Recommended introductory videos:

- `https://www.youtube.com/watch?v=UGDHnjJxukI`
- `https://www.youtube.com/watch?v=kSiUGeUgJYQ`

Additional references:

- `https://qiriro.com/ecs6264/lectures/`
- `https://cseweb.ucsd.edu/classes/wi16/cse291-c/`
- `https://profile.iiita.ac.in/bibhas.ghoshal/IoT_2021/Slides/Application_Protocols.pdf`
- `https://profile.iiita.ac.in/bibhas.ghoshal/teaching_iot_new.html`

### 11. Assignment (Course Context)

- Download the following papers and write a **500–1000 word** assignment explaining your understanding of each paper.
- Focus especially on **networking aspects in IoT**, and then do a **contrastive analysis** across the papers.

Old (10+ years) papers:

- Paper 1: `https://arxiv.org/abs/1406.6608`
- Paper 2: `https://ieeexplore.ieee.org/abstract/document/6704479/`
- Paper 3: `https://ieeexplore.ieee.org/abstract/document/6064380`

Recent review paper:

- Paper 4: `https://www.sciencedirect.com/science/article/pii/S2214785321036439#bi005`

> Note: Work will be checked with Turnitin. High AI‑generated content (>20%) or plagiarism (>10%) may result in a zero.

### 12. Course and Contact Information

- University of Liberal Arts Bangladesh (ULAB)
- Department of Computer Science & Engineering
- Course: **CSE 4417 – Internet of Things (IoT)**
- Lecturer: **Atanu Shuvam Roy**
- Email: **[atanu.shuvam@ulab.edu.bd](mailto:atanu.shuvam@ulab.edu.bd)**

