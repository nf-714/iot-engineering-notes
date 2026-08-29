# Networking Curriculum for IoT & Distributed Systems

> A comprehensive learning path for developers building IoT projects and scalable distributed architectures.

---

## Learning Objectives

By the end of this curriculum, you will be able to:
- Design network architectures for IoT and distributed systems
- Choose appropriate protocols for different use cases
- Troubleshoot network issues in production systems
- Implement secure communication between services
- Scale systems to handle millions of users/devices

---

## Module 1: Networking Fundamentals

### 1.1 Introduction to Networking
- What is Networking and why it matters in modern IT
- Real-world examples: How OpenAI, Amazon AWS, Anthropic (Claude), and Google leverage networking
- The evolution from mainframes to distributed cloud systems
- Why every developer needs networking knowledge

### 1.2 Network Topologies
Understanding how devices are physically/logically connected:

- **Bus Topology**
  - Single backbone cable connecting all devices
  - Pros: Simple, cheap for small networks
  - Cons: Single point of failure, limited scalability
  - Use case: Legacy systems, small lab setups

- **Star Topology**
  - Central hub/switch connecting all devices
  - Pros: Easy to manage, fault isolation
  - Cons: Hub failure takes down network
  - Use case: Most modern LANs, office networks

- **Extended Star (Hierarchical)**
  - Multiple star networks connected together
  - Use case: Enterprise networks, campus networks

- **Ring Topology**
  - Devices connected in circular fashion
  - Token passing mechanism
  - Use case: Some industrial networks, legacy token ring

- **Mesh Topology**
  - Every device connected to every other device
  - Full mesh vs Partial mesh
  - Pros: High redundancy, fault tolerance
  - Cons: Expensive, complex
  - Use case: Critical infrastructure, IoT sensor networks, WAN backbones

- **Hybrid Topologies**
  - Combining multiple topologies
  - Real-world networks are almost always hybrid

### 1.3 Network Types by Scale
- **PAN** (Personal Area Network) - Bluetooth, your devices
- **LAN** (Local Area Network) - Home, office
- **WLAN** (Wireless LAN) - WiFi networks
- **MAN** (Metropolitan Area Network) - City-wide
- **WAN** (Wide Area Network) - Internet, global
- **IoT Networks** - Sensor networks, smart cities

### 1.4 Network Administration Roles
- What does a Network Administrator do?
- Network Engineer vs Network Architect vs DevOps
- Roles at tech giants (OpenAI, AWS, Google, Anthropic)
- Site Reliability Engineering (SRE) and networking
- The rise of "Network as Code"

---

## Module 2: The OSI Model & Protocol Stack

### 2.1 Understanding Protocols and Standards
- What is a protocol? (Rules for communication)
- What are standards? (IEEE, IETF, W3C)
- Why standards matter for interoperability
- RFCs (Request for Comments) - How internet standards are born

### 2.2 The Seven Layers of OSI Model

#### Layer 1: Physical Layer
- Electrical signals, light pulses, radio waves
- Cables: Ethernet (Cat5e, Cat6), Fiber optic, Coaxial
- Wireless: WiFi frequencies, Bluetooth, cellular
- Hardware: Hubs, Repeaters, Network Interface Cards
- Concepts: Bandwidth, throughput, latency at physical level

#### Layer 2: Data Link Layer
- MAC addresses (hardware addresses)
- Frames and framing
- Error detection (CRC)
- Hardware: Switches, Bridges
- Protocols: Ethernet, WiFi (802.11), PPP
- Concepts: Collision domains, broadcast domains

#### Layer 3: Network Layer
- IP addresses (logical addressing)
- Routing and forwarding
- Packets
- Hardware: Routers, Layer 3 switches
- Protocols: IP (IPv4, IPv6), ICMP, ARP
- Concepts: Subnetting, routing tables, TTL

#### Layer 4: Transport Layer
- Port numbers (identifying applications)
- Segments
- Reliable vs Unreliable delivery
- Protocols: TCP, UDP, SCTP
- Concepts: Flow control, congestion control, multiplexing

#### Layer 5: Session Layer
- Managing connections/sessions
- Authentication, authorization
- Protocols: NetBIOS, RPC
- Concepts: Session establishment, maintenance, termination

#### Layer 6: Presentation Layer
- Data formatting and translation
- Encryption/Decryption
- Compression
- Concepts: Character encoding (ASCII, UTF-8), SSL/TLS handshake

#### Layer 7: Application Layer
- User-facing protocols
- Protocols: HTTP, HTTPS, FTP, SMTP, DNS, MQTT, CoAP
- Concepts: APIs, web services, application protocols

### 2.3 Following a Packet Through the Layers
- Practical walkthrough: What happens when you visit a website
- Encapsulation and de-encapsulation
- Headers at each layer
- Using Wireshark to observe layer transitions

### 2.4 TCP/IP Model (Practical Model)
- Comparison with OSI (4 layers vs 7 layers)
- Why TCP/IP won in practice
- Network Interface → Internet → Transport → Application

---

## Module 3: Core Protocols Deep Dive

### 3.1 The Ethernet Protocol
- History and evolution (10Mbps to 100Gbps)
- Ethernet frame structure
- MAC addressing scheme
- CSMA/CD (Carrier Sense Multiple Access with Collision Detection)
- Ethernet switching
- VLANs (Virtual LANs)

### 3.2 Internet Protocol (IP)

#### IPv4
- Address structure (32-bit, dotted decimal)
- Address classes (historical: A, B, C, D, E)
- Private IP ranges (10.x.x.x, 172.16-31.x.x, 192.168.x.x)
- Subnetting and CIDR notation
- Subnet masks and calculations
- IPv4 exhaustion problem

#### IPv6
- Address structure (128-bit, hexadecimal)
- Why we need IPv6 (address exhaustion, IoT explosion)
- IPv6 address types (unicast, multicast, anycast)
- IPv6 header simplification
- Transition mechanisms (dual-stack, tunneling)
- **Critical for IoT**: Every device can have a public IP

### 3.3 Transmission Control Protocol (TCP)
- Connection-oriented protocol
- Three-way handshake (SYN, SYN-ACK, ACK)
- Four-way termination (FIN, ACK, FIN, ACK)
- Sequence numbers and acknowledgments
- Flow control (sliding window)
- Congestion control (slow start, congestion avoidance)
- TCP flags and their meanings
- When to use TCP: Web, email, file transfer, APIs

### 3.4 User Datagram Protocol (UDP)
- Connectionless protocol
- No handshake, no guarantees
- Lower overhead, faster
- UDP header structure (simple!)
- When to use UDP: 
  - Real-time applications (gaming, VoIP, video streaming)
  - IoT sensor data (acceptable loss)
  - DNS queries
  - MQTT over UDP variants

### 3.5 Other Essential Protocols

#### ARP (Address Resolution Protocol)
- Mapping IP addresses to MAC addresses
- ARP cache and ARP tables
- ARP spoofing attacks

#### ICMP (Internet Control Message Protocol)
- Error reporting and diagnostics
- Ping and traceroute
- ICMP message types

#### DHCP (Dynamic Host Configuration Protocol)
- Automatic IP address assignment
- DHCP lease process (DORA: Discover, Offer, Request, Acknowledge)
- DHCP relay agents
- Static vs Dynamic IP allocation

#### DNS (Domain Name System)
- Hierarchical naming system
- DNS record types (A, AAAA, CNAME, MX, TXT, NS, SOA)
- DNS resolution process (recursive vs iterative)
- DNS caching (TTL)
- DNS security (DNSSEC)
- **Critical for distributed systems**: Service discovery patterns

---

## Module 4: Application Layer Protocols

### 4.1 HTTP/HTTPS Deep Dive

#### HTTP Fundamentals
- Request/Response model
- HTTP methods (GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS)
- Status codes (1xx, 2xx, 3xx, 4xx, 5xx)
- Headers (request headers, response headers, custom headers)
- Cookies and sessions
- Content negotiation

#### HTTP Versions Evolution
- **HTTP/1.0**: One request per connection
- **HTTP/1.1**: Keep-alive, pipelining, chunked transfer
- **HTTP/2**: Binary protocol, multiplexing, header compression, server push
- **HTTP/3 (QUIC)**: UDP-based, built-in encryption, faster connection establishment

#### HTTPS and TLS
- Why HTTPS matters (encryption, integrity, authentication)
- TLS handshake process
- Certificates and Certificate Authorities (CA)
- Let's Encrypt and automated certificates
- mTLS (Mutual TLS) for service-to-service communication

### 4.2 WebSockets
- Full-duplex communication over single TCP connection
- WebSocket handshake (HTTP upgrade)
- Use cases: Real-time apps, live updates, chat, gaming
- WebSocket vs HTTP polling vs Server-Sent Events (SSE)
- Scaling WebSocket connections

### 4.3 gRPC and Protocol Buffers
- RPC (Remote Procedure Call) concept
- Protocol Buffers: Binary serialization format
- gRPC features: Streaming, bidirectional, multiplexing
- HTTP/2 as transport
- Use cases: Microservices communication, high-performance APIs
- gRPC vs REST comparison

### 4.4 GraphQL from Network Perspective
- Single endpoint vs multiple endpoints
- Query batching
- Network efficiency considerations
- Subscriptions for real-time data

---

## Module 5: IoT-Specific Networking

### 5.1 IoT Networking Challenges
- Constrained devices (limited CPU, memory, power)
- Intermittent connectivity
- Massive scale (billions of devices)
- Security in constrained environments
- Battery life considerations
- Edge vs Cloud processing decisions

### 5.2 MQTT (Message Queuing Telemetry Transport)
- **The most important IoT protocol**
- Publish/Subscribe pattern
- Topics and topic hierarchies
- QoS levels (0, 1, 2)
- Retained messages
- Last Will and Testament (LWT)
- MQTT brokers (Mosquitto, HiveMQ, AWS IoT Core)
- MQTT over WebSockets
- MQTT 5.0 new features
- Practical: Building sensor data pipeline with MQTT

### 5.3 CoAP (Constrained Application Protocol)
- REST for constrained devices
- UDP-based (unlike HTTP)
- Request/Response model similar to HTTP
- Observe option (pub/sub-like)
- CoAP vs MQTT: When to use which
- Proxy between CoAP and HTTP

### 5.4 AMQP (Advanced Message Queuing Protocol)
- Enterprise messaging protocol
- Queues, exchanges, bindings
- Reliable message delivery
- Use cases: Enterprise IoT, financial systems
- RabbitMQ as AMQP broker

### 5.5 Wireless IoT Protocols

#### Short-Range
- **Bluetooth Low Energy (BLE)**
  - GATT (Generic Attribute Profile)
  - Beacons
  - Mesh networking (Bluetooth Mesh)
  
- **Zigbee**
  - IEEE 802.15.4 based
  - Mesh networking
  - Low power, low data rate
  - Smart home applications
  
- **Z-Wave**
  - Proprietary protocol
  - Home automation focus
  - Interoperability certification

- **Thread**
  - IPv6-based mesh
  - Low power
  - Apple, Google backing
  - Matter smart home standard

#### Long-Range (LPWAN)
- **LoRaWAN**
  - Long range (10+ km rural, 2+ km urban)
  - Low power
  - Low data rate
  - Use cases: Agriculture, smart cities, asset tracking
  
- **NB-IoT (Narrowband IoT)**
  - Cellular-based
  - Licensed spectrum
  - Better coverage in buildings
  
- **LTE-M (Cat-M1)**
  - Higher data rates than NB-IoT
  - Mobility support
  - Voice capable

### 5.6 Edge Computing and Fog Computing
- Processing data closer to source
- Reducing latency and bandwidth
- Edge gateways and their role
- Fog computing architecture
- When to process at edge vs cloud

---

## Module 6: Network Security

### 6.1 Security Fundamentals
- CIA Triad (Confidentiality, Integrity, Availability)
- Authentication vs Authorization
- Encryption: Symmetric vs Asymmetric
- Hashing and digital signatures
- PKI (Public Key Infrastructure)

### 6.2 Transport Layer Security (TLS/SSL)
- TLS versions (avoid SSL, TLS 1.0/1.1; use TLS 1.2/1.3)
- TLS handshake detailed walkthrough
- Certificate chain validation
- Certificate pinning
- Perfect Forward Secrecy (PFS)

### 6.3 Network Security Mechanisms

#### Firewalls
- Packet filtering firewalls
- Stateful firewalls
- Application layer firewalls (WAF)
- Firewall rules and policies

#### VPNs (Virtual Private Networks)
- Site-to-site VPN
- Remote access VPN
- VPN protocols (IPSec, OpenVPN, WireGuard)
- Split tunneling

#### Network Segmentation
- VLANs for segmentation
- DMZ (Demilitarized Zone)
- Microsegmentation in cloud
- Zero Trust networking

### 6.4 Common Network Attacks
- **DDoS (Distributed Denial of Service)**
  - Volumetric attacks
  - Protocol attacks
  - Application layer attacks
  - Mitigation strategies

- **Man-in-the-Middle (MITM)**
  - ARP spoofing
  - DNS spoofing
  - SSL stripping
  - Prevention: HTTPS, certificate pinning

- **DNS Attacks**
  - DNS spoofing/poisoning
  - DNS amplification
  - DNSSEC as protection

- **IoT-Specific Threats**
  - Botnets (Mirai)
  - Device hijacking
  - Data interception
  - Firmware vulnerabilities

### 6.5 IoT Security Best Practices
- Secure boot and firmware updates
- Device authentication
- Encrypted communication (even for constrained devices)
- Network isolation for IoT devices
- Regular security audits

---

## Module 7: Scalability & System Design Networking

### 7.1 Understanding Performance Metrics
- **Latency**: Time for packet to travel (ms)
- **Bandwidth**: Maximum data rate (Mbps, Gbps)
- **Throughput**: Actual data transferred
- **Jitter**: Variation in latency
- **Packet loss**: Percentage of lost packets
- Measuring and monitoring these metrics

### 7.2 Load Balancing

#### Layer 4 (Transport) Load Balancing
- Based on IP and port
- Faster, less intelligent
- TCP/UDP level distribution

#### Layer 7 (Application) Load Balancing
- Based on HTTP headers, cookies, URL
- Content-based routing
- SSL termination
- More flexible, more overhead

#### Load Balancing Algorithms
- Round Robin
- Weighted Round Robin
- Least Connections
- IP Hash (sticky sessions)
- Least Response Time
- Random

#### Load Balancer Solutions
- Hardware: F5, Citrix
- Software: HAProxy, Nginx
- Cloud: AWS ALB/NLB, GCP Load Balancer, Azure Load Balancer

### 7.3 Reverse Proxies
- What is a reverse proxy
- Use cases: SSL termination, caching, compression
- Nginx, Apache, Caddy, Traefik
- Reverse proxy vs Load balancer vs API Gateway

### 7.4 Content Delivery Networks (CDN)
- Distributed edge servers
- Caching static content
- Reducing latency globally
- CDN providers: Cloudflare, Akamai, AWS CloudFront, Fastly
- Cache invalidation strategies
- Dynamic content acceleration

### 7.5 API Gateways
- Single entry point for APIs
- Features: Authentication, rate limiting, transformation
- API Gateway patterns
- Solutions: Kong, AWS API Gateway, Apigee
- API Gateway vs Service Mesh

### 7.6 Service Discovery
- Problem: How do services find each other?
- Client-side discovery vs Server-side discovery
- Service registries (Consul, etcd, ZooKeeper)
- DNS-based service discovery
- Kubernetes service discovery

### 7.7 Rate Limiting and Throttling
- Why rate limit (protection, fairness, cost)
- Token bucket algorithm
- Leaky bucket algorithm
- Fixed window vs Sliding window
- Implementing rate limiting
- HTTP 429 Too Many Requests

### 7.8 Health Checks and Heartbeats
- Liveness vs Readiness checks
- Active vs Passive health checks
- Heartbeat protocols
- Failure detection and recovery
- Circuit breaker pattern

---

## Module 8: Distributed Systems Networking

### 8.1 CAP Theorem and Network Partitions
- Consistency, Availability, Partition Tolerance
- You can only pick two
- Network partitions in real world
- Designing for partition tolerance
- Eventual consistency

### 8.2 Consensus Protocols
- Why consensus is hard in distributed systems
- **Raft Protocol**
  - Leader election
  - Log replication
  - Network considerations
  
- **Paxos** (brief overview)
- Practical implementations (etcd, Consul)

### 8.3 Message Queues from Network Perspective
- Asynchronous communication patterns
- **RabbitMQ**: AMQP, exchanges, queues
- **Apache Kafka**: Distributed log, partitions, replication
- **Redis Pub/Sub**: Simple, fast
- **AWS SQS/SNS**: Managed services
- Choosing the right messaging system

### 8.4 Event-Driven Architecture
- Events vs Commands vs Queries
- Event sourcing basics
- CQRS pattern
- Event streaming with Kafka

### 8.5 Service Mesh
- What is a service mesh
- Sidecar proxy pattern
- Features: Traffic management, security, observability
- **Istio**: Architecture and components
- **Linkerd**: Lightweight alternative
- When to use a service mesh

### 8.6 Network Resilience Patterns

#### Circuit Breaker
- Preventing cascade failures
- States: Closed, Open, Half-Open
- Implementation libraries (Hystrix, Resilience4j)

#### Retry with Backoff
- Exponential backoff
- Jitter to prevent thundering herd
- Idempotency considerations

#### Bulkhead Pattern
- Isolating failures
- Resource pools
- Thread pool isolation

#### Timeout Patterns
- Connection timeout vs Read timeout
- Timeout budgets in microservices

---

## Module 9: Cloud Networking

### 9.1 Virtual Private Cloud (VPC)
- Isolated network in cloud
- CIDR blocks and subnets
- Public vs Private subnets
- Internet Gateways and NAT Gateways
- VPC Peering

### 9.2 Cloud Security Groups and NACLs
- Security Groups (stateful, instance-level)
- Network ACLs (stateless, subnet-level)
- Inbound vs Outbound rules
- Best practices for cloud network security

### 9.3 Cloud Load Balancing Services
- AWS: ALB, NLB, CLB, GWLB
- GCP: HTTP(S) LB, TCP/UDP LB
- Azure: Application Gateway, Load Balancer
- Choosing the right load balancer

### 9.4 Hybrid Cloud Networking
- VPN connections to cloud
- AWS Direct Connect / Azure ExpressRoute / GCP Interconnect
- Transit Gateway architectures

### 9.5 Container Networking
- Docker networking modes (bridge, host, overlay)
- Kubernetes networking model
- CNI (Container Network Interface)
- Network policies in Kubernetes
- Service types: ClusterIP, NodePort, LoadBalancer

### 9.6 Serverless and Networking
- Cold starts and network latency
- VPC Lambda/Functions considerations
- API Gateway integration

---

## Module 10: Practical Tools & Debugging

### 10.1 Command Line Tools

#### Basic Diagnostics
```
ping          - Test reachability
traceroute    - Trace packet path (tracert on Windows)
nslookup      - DNS lookup
dig           - Advanced DNS queries
host          - DNS lookup
```

#### Connection Tools
```
netstat       - Network statistics
ss            - Socket statistics (modern netstat)
netcat (nc)   - TCP/UDP connections, port scanning
telnet        - Test TCP connectivity
curl          - HTTP requests
wget          - Download files
```

#### Advanced Tools
```
tcpdump       - Packet capture (CLI)
nmap          - Network scanning
iperf         - Bandwidth testing
mtr           - Combines ping and traceroute
```

### 10.2 Wireshark
- Packet capture and analysis
- Filters (capture filters vs display filters)
- Following TCP streams
- Analyzing protocols
- Troubleshooting common issues

### 10.3 Network Monitoring
- **Prometheus**: Metrics collection
- **Grafana**: Visualization
- **Nagios/Zabbix**: Traditional monitoring
- **Datadog/New Relic**: SaaS solutions
- Key metrics to monitor

### 10.4 Log Aggregation
- Centralized logging importance
- **ELK Stack**: Elasticsearch, Logstash, Kibana
- **Fluentd/Fluent Bit**: Log collection
- **Loki**: Logs with Grafana
- Correlating logs across services

### 10.5 Distributed Tracing
- Following requests across services
- **Jaeger**: Open-source tracing
- **Zipkin**: Distributed tracing
- **OpenTelemetry**: Unified observability
- Trace context propagation

---

## Module 11: Real-World Projects

### Project 1: IoT Sensor Network
- Build a temperature/humidity monitoring system
- Multiple sensors → MQTT broker → Backend → Dashboard
- Implement QoS and retain messages
- Handle offline devices gracefully

### Project 2: Scalable API Backend
- Design a REST API with proper networking
- Implement load balancing
- Add caching layer
- Set up health checks
- Rate limiting implementation

### Project 3: Real-Time Application
- WebSocket-based chat or notification system
- Handle connection scaling
- Implement heartbeats
- Graceful reconnection

### Project 4: Distributed System
- Multi-service architecture
- Service discovery
- Circuit breaker implementation
- Distributed tracing integration

### Project 5: IoT Edge Gateway
- Build an edge gateway that:
  - Collects data from BLE/Zigbee devices
  - Processes locally
  - Syncs with cloud
  - Handles offline scenarios

---

## Recommended Resources

### Books
- "Computer Networking: A Top-Down Approach" by Kurose & Ross
- "TCP/IP Illustrated" by W. Richard Stevens
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "Building Microservices" by Sam Newman

### Online Resources
- Cloudflare Learning Center (excellent free content)
- AWS Networking documentation
- Cisco Networking Academy (basics)
- High Scalability blog

### Tools to Install
- Wireshark
- Postman/Insomnia
- Docker (for network experiments)
- Mosquitto (MQTT broker for IoT practice)

---

## Learning Path Recommendation

1. **Week 1-2**: Modules 1-2 (Fundamentals & OSI Model)
2. **Week 3-4**: Module 3 (Core Protocols)
3. **Week 5-6**: Module 4 (Application Protocols)
4. **Week 7-8**: Module 5 (IoT Protocols) - *Critical for your IoT work*
5. **Week 9-10**: Module 6 (Security)
6. **Week 11-12**: Module 7 (Scalability)
7. **Week 13-14**: Module 8 (Distributed Systems)
8. **Week 15-16**: Modules 9-10 (Cloud & Tools)
9. **Ongoing**: Module 11 (Projects)

---

*Remember: Networking is best learned by doing. Set up labs, capture packets, break things, and fix them. Theory without practice won't stick.*
