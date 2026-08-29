## CSE 4417 – Internet of Things (IoT)

### Lecture 08 – IoT Middleware

**Semester:** Spring 2026  
**University:** University of Liberal Arts Bangladesh (ULAB)  
**Department:** Department of Computer Science & Engineering (CSE)  

**Instructor:** Atanu Shuvam Roy  
**Position:** Lecturer, Dept. of CSE, ULAB, Dhaka  
**Email:** atanu.shuvam@ulab.edu.bd  
**Class code:** `bjedchaj`

---

### 1. Middleware – haven’t we covered this already?

Middleware provides the common services and capabilities needed to connect IoT devices to applications.

Typical concerns it addresses include:

- **Communication**
- **Storage**
- **Data management**
- **Software**
- **Platforms**

Even though these topics appear in other layers (networking, storage systems, application logic), we **differentiate middleware** because it focuses on providing a unifying, reusable layer across many IoT applications and platforms.

---

### 2. Why differentiate middleware?

Middleware is important because it:

- **Unifies and standardizes protocols**  
  Provides common ways for heterogeneous devices and services to talk to each other.

- **Acts as infrastructure “glue”**  
  Offers abstraction layers that hide low-level details of devices, networks, and data formats.

- **Provides APIs and interfaces** to:
  - Connect with existing middleware components
  - Establish clear interfaces for components to be developed or modified later

---

### 3. Functional middleware building blocks

Key capabilities that middleware typically provides:

- **Interoperability**
- **Security and privacy**
- **Context detection**
- **Device discovery**
- **Scalability**

These building blocks appear repeatedly in different IoT platforms and architectures.

---

### 4. Interoperation

Interoperability can be viewed at several levels.

#### 4.1 Network interoperability

- **Physical-layer agnostic** – should work across different physical media (Wi‑Fi, BLE, cellular, etc.).  
- **Data-agnostic** – should not depend on any single type of payload.

#### 4.2 Syntactic interoperability

- **Data format/structure** – uses standard encodings (JSON, XML, CBOR, etc.).  
- **Data translatability** – supports translation between formats where needed.

#### 4.3 Semantic interoperability

- **Meaning of data – machine interpretation**  
  The system understands what the data represents (e.g., temperature in °C, location coordinates, occupancy state) rather than just treating it as raw bytes.

---

### 5. Interoperation and layering

Layering and clean APIs are long-standing software engineering traditions that help make interoperability possible:

- **APIs and abstraction**  
  Clearly defined interfaces separate concerns between layers and components.

- **Helps make interoperability possible by:**
  - Separating domain responsibilities
  - Identifying requirements for modular implementation (APIs)
  - Building upon established requirements/specifications instead of ad‑hoc designs

---

### 6. Context detection

Context detection is about turning **data ➔ knowledge**.

Middleware (often via higher-level services) helps answer fundamental questions about data:

- What does it mean?  
- Who needs to know about it?  
- Why is it important?  
- When did this happen?

To support this, middleware often uses **metadata** to encapsulate raw data (another form of layering), which:

- Enables automated consumption by IoT applications
- Provides machine-readable descriptions of data, devices, and situations

---

### 7. Semantic interoperability and context

Semantic interoperability ensures that:

- Different systems share a common understanding of context information.  
- Devices and services can reason about each other’s data using shared **ontologies** and **vocabularies**.

This is crucial for large-scale IoT systems where devices from many vendors must work together without manual integration for every combination.

---

### 8. Algorithms for context detection

Algorithms for context detection typically fall under **machine learning** and related techniques, including:

- **Model generation**  
  Formulate outputs based on functional combinations of input data (regression, classification models, etc.).

- **Discrete event detection**  
  Pattern matching, anomaly detection, clustering, and other techniques to detect important events.

- **Supervised / unsupervised learning of output states**  
  - Supervised: labeled examples of context (e.g., “home”, “office”, “away”)  
  - Unsupervised: discovering structure in data without explicit labels

- **State models**  
  Decision trees, Bayesian networks, and similar models to represent and infer system states.

---

### 9. Device discovery

Device discovery enables IoT entities to:

- Identify other nearby devices and make themselves known  
- Expose their **semantic state** via a device ontology (what the device is, what it can do, how to interact with it)

Typical elements of a device’s description:

- **Virtual device interface**
- **Identification / association information**
- **Capabilities / remote procedure calls (RPCs)**
- **State information about the rest of the infrastructure** (e.g., neighbors, gateways)

Effective discovery enables:

- Further communication between devices
- Transfer of information
- Peer-to-peer (P2P) routing
- Application-specific implementation changes based on what is discovered

---

### 10. Device discovery implementations

Examples of technologies and protocols used for device discovery:

- **Bluetooth beacons**
  - One-directional location/metadata detection

- **Wi‑Fi Aware**
  - One-directional identifier broadcast  
  - Metadata can allow for ad‑hoc, two-way communication

- **Physical Web**
  - One-way signal + URL for additional connectivity through the web

- **Service discovery protocols**
  - **DNS‑SD** (Service Discovery)  
  - **Multicast DNS (mDNS)**  
  - **W3C Network Service Discovery**

These mechanisms provide different trade-offs in terms of range, power, bandwidth, and ease of deployment.

---

### 11. Security and privacy

#### 11.1 Fundamental problem

IoT nodes need to **discover other nodes** to communicate, but must **still maintain privacy** and control over what is exposed.

#### 11.2 Middleware solution: multi-tier privacy

Middleware can implement multi-tier privacy mechanisms to balance discoverability and protection:

- Management of **discoverability** and **data access**  
- Use of **device semantics** to identify what is accessible, to whom, and under what conditions  
- Mechanisms to limit how easily a device can be discovered or profiled by unknown parties

---

### 12. Security implementations (examples)

Common approaches used in IoT middleware:

- **Public Key Infrastructure (PKI)**
  - Relies on certificates and keys, usually with backend access for validation and issuance.

- **Group keys / authorization before inclusion**
  - New devices must register one time with a backend or controller before joining a secure group.

- **Local access control**
  - Local DNS or other local control planes to restrict which devices can see or reach which services.

- **Multi-stage access**
  - **Public:** advertise only an identifier (e.g., a basic beacon)  
  - **Semi-private:** authorization allows access to metadata  
  - **Private:** full authorization allows access to data and control interfaces

---

### 13. Scalability

#### 13.1 Expected scale

- **Trillions of devices**  
- **Exabytes of data**

#### 13.2 Current reality (approximate)

- **Millions of devices**  
- **Approaching petabytes of data**

#### 13.3 Fundamental scalability problems

- **Storage**
  - What should be stored? Persistent vs. raw vs. summarized data  
  - How long should data be retained?

- **Processing**
  - How much data should be processed, and where (edge vs. cloud)?  
  - Which computations are necessary vs. optional?

- **Communication**
  - How much data should be transmitted?  
  - What infrastructure will scale to allow more data transmission **while still meeting application deadlines**?

Applications must be designed so they **scale with more data availability** without overwhelming networks, storage, or processing resources.

---

### 14. Middleware implementation resources

Some useful resources on IoT middleware and application protocols:

- **Open-source IoT middleware frameworks (SlideShare)**  
  `[slideshare – open-source IoT middleware frameworks](https://www.slideshare.net/slideshow/opensource-iot-middleware-frameworks/)`

- **Middleware implementations (UCSD course slides)**  
  `[UCSD – Week 7: Middleware implementations](https://cseweb.ucsd.edu/classes/wi16/cse291-c/Week7_Middleware_implementations.pdf)`

- **Networking and application protocols (IoT slides)**  
  `[IoT 2021 – Application protocols](https://profile.iiita.ac.in/bibhas.ghoshal/IoT_2021/Slides/Application_Protocols.pdf)`

---

### 15. References

- `[ECS6264 lecture materials](https://qiriro.com/ecs6264/lectures/)`
- `[UCSD CSE291‑C course page](https://cseweb.ucsd.edu/classes/wi16/cse291-c/)`

---

### 16. End of lecture

**Thank you!**  
For questions or feedback, you may contact: **atanu.shuvam@ulab.edu.bd**

University of Liberal Arts Bangladesh  
**Department of Computer Science & Engineering**
