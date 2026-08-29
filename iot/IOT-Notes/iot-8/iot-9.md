## CSE 4417 – Internet of Things (IoT)

### Lecture 09 – IoT Cloud Computing

**Semester:** Spring 2026  
**University:** University of Liberal Arts Bangladesh (ULAB)  
**Department:** Department of Computer Science & Engineering (CSE)  

**Instructor:** Atanu Shuvam Roy  
**Position:** Lecturer, Dept. of CSE, ULAB, Dhaka  
**Email:** [atanu.shuvam@ulab.edu.bd](mailto:atanu.shuvam@ulab.edu.bd)  
**Class code:** `bjedchaj`

---

### 1. Traditional vs. Distributed Computing

#### 1.1 Traditional (single‑machine) computing

Traditional computing assumes that **all components sit on the same computer**:

- **Data storage**
  - Database
  - File‑based storage
- **Core logic**
  - Application‑specific logic
  - Algorithm implementations
- **User interface**
  - Command‑line interface (CLI)
  - Graphical user interface (GUI)

#### 1.2 Distributed computing and distributed systems

- A **distributed system** is a **collection of independent computers** that appears to its users as a **single coherent system**.
- Examples:
  - The Internet
  - Computing clusters
  - Local‑area networks (LANs)
  - Data centres
  - Web‑based distributed applications

#### 1.3 Distributed applications

Distributed applications can be:

- One single system or one of several subsystems.
- A **collection of processors** performing **parallel processing**:
  - **Increased performance**
  - Improved reliability
  - Better fault tolerance
- Systems with **partitioned or replicated data** across multiple nodes.

#### 1.4 Why distribution?

Motivations for using distributed systems:

- **Sharing of information and services**
- **Increased reliability and fault tolerance**
- **Improved performance** by parallelism and resource pooling

---

### 2. Goals and Challenges for Distributed Systems

#### 2.1 Goals

Typical goals for distributed systems:

- **Making resources available** to users and applications
- **Distribution transparency**
  - Hide the fact that resources are distributed across multiple machines
- **Openness**
  - Use standard interfaces and protocols so components can interoperate
- **Scalability**
  - Support growth in users, resources, and geographic spread
- **Security**
  - Protect data and services despite being network‑accessible
- **Good system design**
  - Clear requirements, modularity, and maintainability

#### 2.2 Challenges

Key challenges include:

- **Naming and access control**
- **Security**
- **Performance**
- **Mutual exclusion and concurrency control**
- **Replication and migration of data/services**
- **Failure modes and fault handling**
- **Heterogeneity**
  - Different hardware, operating systems, and network technologies

---

### 3. Trends in Distributed Computing

#### 3.1 Cluster computing

- Uses **homogeneous computing nodes** (loosely or tightly coupled) connected and working together.
- Often found in:
  - Computing clusters
  - High‑performance computing (HPC)
  - Data‑centre style backends

#### 3.2 Grid computing

- Uses **heterogeneous computing nodes** distributed over a **wide area**.
- Targets **very large tasks** by pooling resources from different organizations or locations.

#### 3.3 Utility computing

- Provides **packaged resources** (compute and storage) available **on rent**.
- Users focus on **renting capacity** instead of owning hardware.

Questions a user should ask:

1. **Can I afford the rent?**
2. **Is there enough computing power and memory?**
3. **Is my data/code safe from other users?**
4. **Will other tenants’ applications affect my service?**
5. **Can I pay only for what I actually use?**

#### 3.4 Cloud computing

- A **model** for enabling **convenient, on‑demand network access** to a **shared pool of configurable computing resources**.
- Resources include:
  - Network infrastructure
  - Servers
  - Storage
  - Applications
- Evolves from **utility computing**:
  - High‑level generalization of computing and storage
  - Resources can be rapidly allocated and released with **low management effort**
  - Defined in terms of:
    - **Essential characteristics**
    - **Service models**
    - **Deployment models**

---

### 4. Virtualization

#### 4.1 Why virtualization?

Virtualization allows:

- Sharing the **same physical hardware among independent users**
- Increasing the degree of **hardware parallelism**
- **Easier management** and **more efficient energy usage**
- **Flexible allocation and utilization** of resources
- **Decoupling applications from underlying hardware**
  - Hardware upgrades can happen without impacting OS or applications

#### 4.2 Virtualization raises the abstraction level

Examples:

- **Virtual memory**
  - Applications see a large address space; physical memory mapping is hidden by the OS using paging.
- **Architecture virtualization**
  - Allow code built for one architecture to run on another.
- **Virtual devices**
  - Physical devices are abstracted as virtual devices with standardized interfaces.

#### 4.3 Virtualization in the cloud

Virtualization is a **core enabler** for cloud computing frameworks:

- Multiple **virtual machines or containers** share the same physical host.
- Elastic scaling by **creating or destroying virtual instances** as needed.
- Supports strong **isolation** between tenants.

---

### 5. Cloud Computing Characteristics

Common characteristics of cloud computing:

- **Improved agility** in resource provisioning
- **Ubiquity**
  - Access independent of device and location
- **Multi‑tenancy**
  - Sharing of resources and costs across a large pool of users
- **Dynamic load balancing**
- **High reliability and scalability**
- **Low cost and low maintenance** for end users
- **Improved security and access control** (when properly designed)

---

### 6. Cloud Computing Service Models

#### 6.1 Software‑as‑a‑Service (SaaS)

- Cloud provider hosts and executes the **service provider’s applications**.
- Services are accessed via:
  - Web browsers
  - Mobile apps
  - Other thin clients
- End users:
  - Do **not control** the underlying cloud platform or infrastructure.
- **Example:** Google Apps

#### 6.2 Platform‑as‑a‑Service (PaaS)

- Cloud provides a **platform** for deploying user‑created or acquired applications.
- Supports **development, deployment, and scaling** of applications.
- Users:
  - Control their **deployed applications and configurations**.
  - Do **not manage** the underlying cloud infrastructure.
- **Examples:** Google App Engine, Microsoft Azure

#### 6.3 Infrastructure‑as‑a‑Service (IaaS)

- Provides access to **basic computing resources**:
  - Virtual machines / Operating systems
  - Storage
  - Networks
- Users:
  - Can deploy and run **any software** (OS + applications).
  - In some cases, can control selected network components (e.g., firewalls, load balancers).
- **Examples:** Amazon EC2, GoGrid

---

### 7. Cloud Computing Deployment Models

Standard deployment models (conceptual recap):

- **Public cloud**
  - Cloud infrastructure available to the general public, owned by a cloud provider.
- **Private cloud**
  - Cloud infrastructure operated solely for a single organization.
- **Community cloud**
  - Shared by several organizations with common concerns.
- **Hybrid cloud**
  - Combination of two or more cloud deployment models.

---

### 8. Cloud Computing for IoT

#### 8.1 Cloud as an IoT enabler

Cloud is a key **enabler** for IoT because:

- **Huge amounts of IoT data** need:
  - Storage
  - Retrieval
  - Management for **sustained services**
- **Fast analytics** are needed for:
  - Prediction
  - Critical decision‑making

#### 8.2 Benefits of cloud in IoT

Typical benefits include:

- **Scalability**
- **Cost effectiveness**
- **Data mobility**
- **Faster time‑to‑market**
- **Security and manageability**

---

### 9. IoT Cloud Architecture and Management

#### 9.1 IoT‑A project [1]

- Physical entities are represented as **virtual entities**.
- These virtual entities act as **access points to the real world** for IoT applications.
- Interfaces are **well‑defined and standardized**.

#### 9.2 iCore project [2]

- Introduces the concept of a **virtual object (VO)** as an alter ego of a real‑world object.
- VOs are **dynamically created and destroyed**.
- VOs interact with each other, giving the system some **cognitive capabilities**.

---

### 10. Cloud‑Based IoT Platforms – Common Characteristics

Cloud‑based IoT platforms typically share these characteristics:

- Objects use the **HTTP protocol** to send and receive data:
  - Enables **interoperability** among platforms.
- Objects do **not communicate directly** with each other:
  - An **intermediate server/platform** is used.
- Each object has a **data point** associated with it on the server:
  - Keeps track of data sent by the object.
- Standard HTTP methods:
  - **POST** and **GET** are used to send and request data.
- Each data point is associated with a **tag**:
  - Data point discovery is performed via tags using an internal search engine.
- The system identifies each object with an **API key**.
- **RESTful architecture** is commonly used:
  - Lightweight and scalable; fits well with current Internet protocols.
  - Resources are **representations of objects**, uniquely identified by **URIs**.
  - Object information can be obtained, created, updated, or deleted via HTTP methods (**GET, POST, PUT, DELETE**).
  - Payload can be encoded in formats such as **XML** or **JSON**.

---

### 11. Example IoT Cloud Platforms

#### 11.1 Cosm / Pachube and Xively [3][4]

- **Cosm (formerly Pachube)**:
  - Platform to **store and redistribute real‑time data**.
  - Managed **millions of devices per day**.
  - After the nuclear accidents in Japan (2011), Cosm was used by volunteers to interlink **Geiger counters across the country** to monitor fallout.
- **Xively IoT platform (formerly Cosm)**:
  - Commercial **PaaS** for IoT data.
  - Provides APIs to **transmit, store, and access** data generated by objects.
  - Data is stored in provider databases (partially visible to users).
  - Later acquired by **Google**.

#### 11.2 Nimbits [8]

- Open‑source web application built on **Google App Engine**.
- Supports:
  - Email alerts
  - Math calculations on data
  - Storing and processing sensor data
- Users can:
  - Define **data points** and use them to share several kinds of data.
  - Integrate with **Twitter** and **Facebook**.
  - Manage data points and share sensor diagrams.

#### 11.3 MATLAB ThingSpeak

- Cloud platform for **IoT analytics** from MathWorks.  
- URL: `https://in.mathworks.com/products/thingspeak.html`

---

### 12. References

- [1] `http://www.iot-a.eu`
- [2] G. Giaffreda, *iCore: A Cognitive Management Framework for the Internet of Things*, in **The Future Internet**, FIA 2013, Lecture Notes in Computer Science, vol. 7858.
- [3] `http://www.cosm.com`
- [4] `http://www.xively.com`
- [8] `http://nimbits.com`

Additional lecture material:

- `https://qiriro.com/ecs6264/lectures/`
- `https://cseweb.ucsd.edu/classes/wi16/cse291-c/`

---

### 13. End of Lecture

**Thank you!**  
For questions or feedback, you may contact: **[atanu.shuvam@ulab.edu.bd](mailto:atanu.shuvam@ulab.edu.bd)**

University of Liberal Arts Bangladesh  
**Department of Computer Science & Engineering**

```
University of Liberal Arts Bangladesh
Department of Computer Science & Engineering
```

```
Lecturer,
Dept. of CSE, ULAB, Dhaka
```

**EMAIL:
[atanu.shuvam@ulab.edu.bd](mailto:atanu.shuvam@ulab.edu.bd)**

### Spring 2026

```
Atanu Shuvam Roy
```

---

### 14. Quick Revision Cheat Sheet

**Core ideas (1–2 lines each)**  

- **Traditional computing**: One machine holds storage + core logic + user interface.  
- **Distributed system**: Many independent computers appear as one system to users; used for sharing resources, reliability, and higher performance.  
- **Cloud computing**: On‑demand access over the network to a shared pool of configurable resources (compute, storage, networks, apps).  
- **Virtualization**: Software layer that lets many virtual machines/containers safely share the same physical hardware.

**Why distributed / cloud? (3 S’s + R)**  

- **Sharing of information and services.**  
- **Scalability by adding machines instead of buying one huge server.**  
- **Speed (better performance) via parallel processing.**  
- **Reliability and fault tolerance (system keeps working even if some n**odes fail).

**Service models – “S P I” (top → bottom):**  

- **SaaS – “Use the app”**: You only use the software (e.g., Gmail, Google Docs).  
- **PaaS – “Deploy your code”**: You control apps + config; provider runs the platform (e.g., Google App Engine, Azure App Service).  
- **IaaS – “Rent machines”**: You get virtual machines, storage, and networks (e.g., Amazon EC2).

**Deployment models – “PPCH”**  

- **Public cloud** – Provider’s data center, open to many customers.  
- **Private cloud** – For a single organization only.  
- **Community cloud** – Shared by organizations with similar goals (e.g., same sector).  
- **Hybrid cloud** – Mix of two or more of the above.

**Cloud for IoT – why it matters**  

- Handles **huge IoT data**: storage, retrieval, and long‑term management.  
- Supports **fast analytics** for prediction and critical decisions.  
- Gives **scalability**, **cost effectiveness**, **data mobility**, **time‑to‑market**, and **security/manageability**.

**Typical IoT cloud platform pattern**  

- Devices send data using **HTTP** to an **intermediate server/platform** (not directly to each other).  
- Each device has a **data point** on the server plus a **tag** for search.  
- Each device is identified by an **API key**.  
- Uses **REST**: resources identified by **URIs**, accessed via **GET, POST, PUT, DELETE**, payload often **JSON** or **XML**.

**Named IoT projects and platforms**  

- **IoT‑A**: Real objects are represented as **virtual entities** with standard interfaces.  
- **iCore**: Introduces **virtual objects (VOs)** with some cognitive capabilities.  
- **Cosm/Pachube → Xively**: Early IoT PaaS to store/redistribute real‑time data; later acquired by Google.  
- **Nimbits**: Open‑source web app on Google App Engine for sensor data, alerts, and sharing.  
- **MATLAB ThingSpeak**: MathWorks cloud for IoT analytics.

---

Raw slide text (optional, unedited)

## CSE 4417 IoT

## Theory

### Lecture 09:

##### IoT Cloud Computing

```
Class Code
bjedchaj
```

# Traditional Computing

```
Traditional Computing Components:
```

```
A l componentssitonthesamecomputer
```

```
DistributedComputing:
```

```
DataStorage
```

1. DataBase
2. File Based

```
CoreLogic
```

1. ApplicationSpecific
2. AlgorithmImplementation

```
UserInterface
```

1. CommandLine 2. GUI

```
DataStorage
```

1. DataBase
2. File Based

```
CoreLogic
```

1. ApplicationSpecific
2. AlgorithmImplementation

```
UserInterface
```

1. CommandLine 2. GUI

# Distributed Computing

- Distributed System : A collection of independentcomputers that appears
to its users as a single coherent system
- Ex : Internet, computing cluster, LAN, Data centre, web Distributed

Application :

- Onesinglesystem orone ofseveral subsystems
- Collection of processors – parallel processing ( increased performance, reliability
andfaulttolerance)
- Partitioned or replicated data
- Why Distribution?
- Sharing of information andservices
- Increasein reliability, fault tolerance andimproved performance

# Goals and Challenges for Distributed

# Systems

###### Goals :

```
MakingResourcesAvailable
DistributionTransparency
Openness
Scalability
Security
System Designrequirements
```

###### Challenges:

```
Naming andAccess control, Security,Performance, Mutualexclusion
of users, replicationandmigration, failure modes, concurrency,
heterogeneity
```

# Client Server Architectures in Distributed

# Systems

#### ClusterlooselyTrendsComputingortightly)inworkingDistributed: HomogeneoustogetherComputingcomputing nodes ( connected

```
6
```

#### GridwideComputingareaTrendsto perform: Heterogeneousin Distributedvery large taskscomputingComputingnodes distributed over a

```
7
```

# Trends in Distributed Computing

###### Utility Computing : Packaged resources available for

###### computing and storage ( on rent )

```
Q:What do you look outfor? Ans:
```

1. Can I affordthe rent?
2. Is there enough computingand power And
  memory?
3. Is it safe fromother users - memory / code leaks
4. willtheapplicationuseaffectme?
5. Can I pay forwhatI use?

# Trends in Distributed Computing

###### Cloud Computing : Model for enabling convenient, on-

###### demand network access to shared pool of configurable

###### computing resources.

###### Ex:network infrastructures, servers, storage, application

```
Stepfromutilitycomputing
High level generalization ofcomputing and storage model
It can be rapidly allocated and released with lowmanagement effort
Some essential characteristics,service models and deployment
models
```

# Trends in Distributed Computing

# Virtualization

- Sharesamehardwareamongindependentusers
- Increasesdegreeofhardwareparallelism
- Easiermanagementandenergy usage
- Flexibleallocationandutilization
- Decoupleappsfromunderlying hardware
H/WupgradeswithoutimpactonOS

# Virtualization Raises Abstraction

- VirtualMemorytoaccess large
addressspace ( Physicalmemory
mappingis hiddenby OSusing
paging)
- Allowcode onone architecture to
runon another
- Physical devicestoVirtual
Devices

# Virtualization in Cloud

# Cloud Computing Framework

# Cloud Computing : Characteristics

###### Improved agility inresource provisioning

###### Ubiquitous – independent of device and location

###### Multi tenancy – sharing of resources and costs accross a

###### large pool of users

###### Dynamic load balancing

###### Highly reliable and scalable

###### Low cost and low maintenance

###### Improve security andaccess control

# Cloud Computing : Service Models

# Software-as-a Service (SaaS)

```
Facilitytoexecuteserviceprovider’sapplicationatusersend
Servicescanbeaccessedviadifferenttypesofclientdevicessuchaswebbrowserorapp
Endusersdonothavecontrolofcloudplatform
Example: GoogleApps
```

# Platform-as-a-Service(PaaS)

- Facilitatesconsumercreatedoracquired
applicationsontocloudinfrastructure Support
fordeploymentofsuchapplications
- Usersdonotcontrolcloudinfrastructure
- Userscancontrol
deployedappsusing
givenconfiguration Ex:
GoogleAppEngine,
WindowsAzure

# Infrastructure-as-a Service(Iaas)

```
AccessofcomputingresourcessuchasOperatingSystem,StorageandNetwork
Userscandeployandexecuteanysoftware
Insomecases,userscancontrolselectednetwork components
Ex: AmazonEC2,GoGrid
```

# Cloud Computing Services

# Cloud Computing : Deployment Models

```
24/02/2021
```

# Cloud Computing for IoT

## • Cloud is anIoT enabler :

- HugeamountofIoTDataneedsstorage,
retrievalandmanagement( sustainedservices)
FastAnalyticsforPredictionandCriticalDecision
making

## • Benefits of Cloud in IoT :

- ScalabilityCosteffectiveness; DataMobility; TimetoMarket; Security;

# IoT Cloud Architecture

# IoT Management

IoT-A Project[1]: physicalentitiesrepresented
asvirtualentitiesaccesspointto thereal
worldbyIoTappsthroughwelldefinedand
standardizedinterfaces
EuropeanFP7iCoreproject[2]: virtual
objectasalteregoofrealworldobject,
dynamicallycreatedanddestroyed.VOs
interactgivingthemsomeCognitive
capabilities

```
1 http://www.iot-a.eu
```

(^2) **TheGiaffredaFutureInternet.: iCore:FIAA Cognitive2013.LectureManagementNotesinFrameworkComputerScience,fortheInternetvol7858.ofThings, In:GalisA.,GavrasA.(eds)**

# Cloud Based IoT Platforms - Characteristics

- ObjectsuseHTTPprotocoltosendandreceivedata;allowsinteroperabilityamongplatforms Objectsdonodirectly
communicatewitheachother.Anintermediateserverisused
- Everyobjecthasa datapointassociatedwithit ontheserversidetokeeptrackofthedatasent ThemethodsPOSTand
GETareareusedtosendandrequestdata
- ***Tag*** isassignedtoeverydatapoint
- Datapointdiscoveryisperformedthroughtagsthroughaninternalsearchengine Systemidentifiesevery
objectwithits ***APIkey***
- **RESTfulArchitecture:**
- **Lightweight,scalableandthenfitsperfectlywiththeprinciplesandthecurrentprotocolsoftheInternet.**
- **Resourcesasrepresentationoftheobjects,thatareuniquelyidentifiedthroughUniformResource Identifiers(URIs).**
- **ObjectPUT). informationcanbeobtained,deletedorpostedthroughtheHTTPprotocol usinga givenmethod ( GET,DELETE, POST,**
- **Thepayloadofthemessagecanbeincapsulatedina negotiatedformatsuchasXMLorJSON.**

# IoT Platform Implementation

```
Cosm( formerlyPachube)[3] : platformto
storeandredistributereal-timedata,freely
usable,whichmanagesmillions ofdevicesper
day. Followingthe nuclearaccidentsin Japanin
2011,Cosmwasusedbyvolunteersto interlink
Geiger countersacrossthecountrytomonitor
thefallout.
Xively IoTplatform (formerly totransmit, Cosm) store [4] : commercialandaccess
toPaaSdatapartiallygenerated( databyobjects. storedinIt exploitsproviderDB
only).NowownedbyGoogle.
```

```
[3]http://www.cosm.com
[4] http://www.xively.com
```

# IoT Platform Implementation

```
Nimbits[8] :
```

```
●
●
●
```

```
●
●
```

```
● opensourcewebapplicationbuiltonGoogleAppengine
Providesemailalert,mathcalculations
Storingandprocessingdata
Usercandefine datapointsandusethem toshare severalkindsof
data
IntegratedwithTwitter,Facebook
Allowstomanage datapoints,sharesensor diagrams
```

```
[8]http://nimbits.com
```

# IoT Platform Implementation

```
MATLABThinkSpeak
```

###### [https://in.mathworks.com/products/thingspeak.html](https://in.mathworks.com/products/thingspeak.html)

# References

## • [https://qiriro.com/ecs6264/lectures/](https://qiriro.com/ecs6264/lectures/)

## • [https://cseweb.ucsd.edu/classes/wi16/cse291-c/](https://cseweb.ucsd.edu/classes/wi16/cse291-c/)

# Thank You

[atanu.Shuvam@ulab.edu.bd](mailto:atanu.Shuvam@ulab.edu.bd)
University of Liberal Arts Bangladesh
**Department of Computer Science & Engineering**

