IEEE Wireless Communications • December 2013 1536-1284/13/$25.00 © 2013 IEEE **91**

## ACCEPTED FROMOPENCALL

## INTRODUCTION

```
In recent years, the Internet of Things (IoT)
has become the new research focus for both
industry and academia. The concept of IoT can
be traced back to the pioneering work done by
Kevin Ashton in 1999 and was initially linked to
the new idea of using radio frequency identifi-
cation (RFID) in the supply chain. Soon after,
this term became popular and is well known as
a new communication system where the Inter-
net is connected to the physical world via ubiq-
```

```
uitous wireless sensor networks (WSNs). With
the development of IoT technologies in the
past few years, a wide range of intelligent and
tiny sensing devices have been massively
deployed in a variety of vertical applications
and several major standardization alliances
have formed based on the interests of technolo-
gy selections and commercial markets, such as
ZigBee and WAVE2M [1]. Generally, sensing
devices share common features, such as con-
strained energy resources, limited processing
capability, vulnerable radio conditions, the real-
time nature of applications, and minimal direct
human interaction. By interconnecting these
devices using low-cost wireless communication
technologies, usually WSNs, a new ecosystem
with a large deployment of smart applications
has been formed.
Motivated by the fact that TCP/IP is the de
facto standard for computer communications
in today’s networked world, many believe that
IP offers a more flexible architecture and
could be the future for IoT networks. Howev-
er, the biggest challenges in the deployment
of IPv6 sensor devices are to efficiently use
the low power and low bandwidth. In order to
tackle these challenges, such as extensive pro-
tocol overheads against memory and computa-
tional limitations of sensor devices, the
Internet Engineering Task Force (IETF) has
taken the lead in standardizing communica-
tion protocols for resource constrained devices
and develop a number of Internet protocols,
including the Routing Protocol for Low Power
and Lossy Networks (RPL) and Constrained
Application Protocol (CoAP) [2], among oth-
ers. Figure 1 illustrates the IoT system archi-
tecture where a normal IP device (e.g., PC or
smart phone) remotely accesses wireless sen-
sor devices via the HTTP-CoAP gateway.
Although it is still in too early a stage to be
commercialized, there are already a signifi-
```

### ZHENGGUOSHENG, ORANGELABS, BEIJING

### SHUSENYANG, IMPERIALCOLLEGELONDON

### YIFANYU, INTELLABSCHINA

### ATHANASIOSV. VASILAKOS, NAT I O N A LTECHNICALUNIVERSITY OFATHENS

### JULIEA. MCCANN ANDKINK. LEUNG, IMPERIALCOLLEGELONDON

## ABSTRACT

```
Technologies to support the Internet of
Things are becoming more important as the
need to better understand our environments
and make them smart increases. As a result it is
predicted that intelligent devices and networks,
such as WSNs, will not be isolated, but connect-
ed and integrated, composing computer net-
works. So far, the IP-based Internet is the
largest network in the world; therefore, there
are great strides to connect WSNs with the
Internet. To this end, the IETF has developed
a suite of protocols and open standards for
accessing applications and services for wireless
resource constrained networks. However, many
open challenges remain, mostly due to the com-
plex deployment characteristics of such systems
and the stringent requirements imposed by vari-
ous services wishing to make use of such com-
plex systems. Thus, it becomes critically
important to study how the current approaches
to standardization in this area can be improved,
and at the same time better understand the
opportunities for the research community to
contribute to the IoT field. To this end, this
article presents an overview of current stan-
dards and research activities in both industry
and academia.
```

# A SURVEY ON THE IETF PROTOCOL SUITE FOR THE

# INTERNET OF THINGS: STANDARDS, CHALLENGES,

# AND OPPORTUNITIES

**92** IEEE Wireless Communications • December 2013

```
cant number of IP-based WSN solutions as
demonstrated by a growing number of
research institutes.
To develop IoT communications on a large
scale, there is a considerable need to understand
its practical benefits and limitations, and its
interdependence with application functions.
There are still open challenges across layers to
date in deploying IP-based solutions because of
technical difficulties and the stringent require-
ments imposed by various services. To be specif-
ic, it is of fundamental importance to
understand:
```

- What are the IETF solutions for the IoT? We
  provide an introduction to the communication
  standards on a layer basis, ranging from the
  physical and medium access control (MAC)
  layers up to the application layer.
- What are technical challenges to the imple-
  mentation of the proposed standards on a
  large scale with the stringent service require-
  ments imposed by applications? It becomes
  critically important to understand how the
  current solutions can be improved and what
  the opportunities are for research community
  to contribute to IoT development. We there-
  fore analyze the technical challenges across
  layers and identify possible solutions for fur-
  ther improvement, which could fundamental-
  ly contribute to the field to further
  understanding and open the doors to better
  IoT practices.
  The remainder of this article is organized
  as follows. We introduce the physical and
  MAC layers as well as 6LowPAN layer proto-
  cols in IoT and discuss their technical chal-
  lenges and opportunities. The routing and
  application layers are reviewed and discussed,
  respectively. Future perspectives and conclu-
  sionS are then given.

## COMMUNICATIONSTANDARDS FOR

## LOWERLAYERS

### DEFACTOSTANDARDS

```
IEEE 802.15.4 — IEEE 802.15.4 [3] is a radio
technology standard for low-power and low-data-
rate applications with a radio coverage of only a
few meters. The standard has been developed
within the IEEE 802.15 Personal Area Network
(PAN) Working Group. Because of its designat-
ed nature as low power and low complexity, an
increasing number of IoT devices have been
built as IEEE 802.15.4-compliant devices. More-
over, many well-known standardization organiza-
tions are also active in developing low-power
protocol stacks based on IEEE 802.15.4, such as
WirelessHART [4] and ZigBee.
IEEE 802.15.4 specifics both physical and
MAC layers. However, depending on application
requirements in different vertical scenarios, both
radio and MAC mechanisms could be altered to
guarantee certain requirements. For example, by
considering the sophisticated radio environment
and deployment challenges in dense building
space, IEEE 802.15.4c is developed for the newly
opened 314–316 MHz, 430–434 MHz, and
779–787 MHz bands in China. Also, Wire-
lessHART adopts part of the MAC header and
integrates its own logic on top of the MAC for-
mat.
IEEE 802.15.4 typically has a maximum data
rate of 250 kb/s and a maximum output power of
1 mW. The maximum packet size is 127 bytes.
Besides the physical and MAC layer headers, the
available space for an upper layer protocol is
between 86 and 116 bytes. The power consump-
tion is also critical for IEEE 802.15.4, which
shows that the idle power consumption of
CC2420, an IEEE 802.15.4 transceiver, is signifi-
```

```
Figure 1. IoT system architecture.
```

```
CoAP RPLobserve
```

```
CoAP RPL
blockwise
```

```
CoAP RPL
```

```
802.15.
```

```
CoAP RPL
```

```
IPv6 sensors
```

```
CoAP RPL
```

```
CoAP RPL
observe
```

```
IPv6/6LoWPAN/
802.15.
```

```
Internet
```

```
IPv6/Wi-Fi
```

```
CoAP RPL
```

```
HTTP
```

```
HTTP-CoAP proxy
Ethernet
IPv6/Ethernet
```

```
IPv6 enabled
low power sensor
network
```

```
IPv6 router/home
gateway
```

```
CoAPRPL
```

```
CoAP RPL
observe
```

### Because of its designat-

### ed nature of low power

### and low complexity, an

### increasing number of IoT

### devices have been built

### as IEEE 802.15.4-com-

### pliant devices. Moreover,

### many well-known stan-

### dardization organiza-

### tions are also active in

### developing low-power

### protocol stacks based on

### IEEE 802.15.4.

IEEE Wireless Communications • December 2013 **93**

cantly lower than both the listen and transmit
power consumption. In order to achieve energy
savings, radio power management (e.g., duty
cycling) is an essential part of MAC layer mech-
anisms. The radio transceiver must be managed
so that it can be switched off when there is no
traffic but switched on when nearby communica-
tion is engaged.

**6LoWPAN** — Since the beginning of the IETF
research on IoT related technologies, IPv6 has
been selected as the only choice to enable wire-
less communication. Its key features, such as
universality, extensibility, and stability, have
attracted a lot of attention and may become the
de facto solution for future Internet technology.
In order to enable IP connectivity in resource
constrained sensor networks, the IPv6 over Low-
Power WPAN (6LowPAN) Working Group has
been established and works on protocol opti-
mization of IPv6 over networks using IEEE
802.15.4. Specifically, the 6LoWPAN protocol
discusses how to apply IPv6 to the MAC and
PHY layers of IEEE 802.15.4.
In fact, there are two key challenges to apply-
ing IPv6 over the IEEE 802.15.4 network. On
one hand, consider that the maximum frame size
supported by IEEE 802.15.4 is only 127 bytes
and significant header overheads occupied by
layered protocols (e.g., MAC layer header, IPv
header, security header and transmission layer);
the payload size available for the application
layer is very limited. On the other hand, since
the minimum value of maximum transmission
unit (MTU) specified by IPv6 is 1280 bytes (RFC
2460), if MTU supported by the lower layer (i.e.,
IEEE 802.15.4) is smaller than this value, the
data link layer must fragment and reassemble
data packets. In order to address these issues,
6LoWPAN designs an adaptation layer right
above the data link layer to segment the IPv
packet into the small pieces required by the
lower layer. Moreover, 6LoWPAN specifies
stateless compression, that is, LOWPAN_HC
(RFC 4944) and LOWPAN_IPHC (RFC 6282),
for the IP header in order to reduce the over-
head of IPv6. The position of 6LoWPAN in the
IPv6 protocol stack is shown in Fig. 2.
In addition to stateless IPv6 header compres-
sion, 6LoWPAN also develops other relevant
standards, including the scheme supporting mesh
routing, simplified IPv6 neighbour discovery pro-
tocol, use cases, and routing requirements. In
summary, the 6LoWPAN Working Group is fun-
damental to IETF IoT communications, its con-
tributions significantly promoting the
establishment and research work of other work-
ing groups.

### OPENQUESTIONS ANDOPPORTUNITIES

The state of the art shows that IoT working
groups mainly aim to build the wireless subnet-
works of the future IoT on top of the IEEE
802.15.4 MAC as well as other carrier sense
multiple access (CSMA)-based lower-power
wireless MACs such as IEEE 802.15.4 e/g and
low-power Wi-Fi. However, extensive studies
have shown that there is great opportunity to
improve the practical performance of IEEE
802.15.4 MAC, and many promising solutions

```
have been proposed. Current efforts on IoT
communication have not paid enough attention
to these fruitful results. In this subsection, we
summarize the key issues of implementing IEEE
802.15.4 MAC for future IoTs and discuss possi-
ble solutions to these issues.
```

```
Limited Channel Capacity — The channel rate of
IEEE 802.15.4 is only 250 kb/s in the 2.4 GHz
band, which limits the scalability and application
traffic load of the IoT. For instance, experiment
results show that the CC2420 radio can only sup-
port around 100 40-byte packets/s [5], which
implies that serious congestion would occur at
the nodes close to the gateway when sensing
applications produce heavy traffic (e.g., traffic
burstiness for target tracking applications or use
of many sensors to monitor a large geographic
area). Furthermore, although 6LoWPAN has
already compressed the IPv6 packet header, the
residual overhead still aggravates congestion,
which significantly impedes the ambitious IoT
objective of connecting billions of things in the
future.
On the MAC layer, one approach to solving
the limited capacity issue is to exploit the multi-
ple communication channels provided by IEEE
802.15.4 (e.g., up to 16 channels in the 2.4 GHz
band), such as the time slotted channel hopping
(TSCH) MAC proposed by the IEEE 802.15.4e
group. In addition, max-weight scheduling is also
a promising solution, as it has been proven to be
throughput optimal in theory. Recent practical
studies also show that it is easy to implement
max-weight scheduling schemes on top of CSMA,
which is used in the IEEE 802.15.4 MAC.
```

```
Energy Scarcity — The energy scarcity of the low-
cost and low-powered sensor node has been a
key issue for WSNs and for future IoT [6]. To
prolong its lifetime, the sensor node operates in
a duty-cycled mode. The recent development of
energy harvesting technologies mitigates the
energy scarcity issue, but the sensor node still
has to operate in duty-cycled mode due to limit-
ed energy collection from the environment (e.g.,
light, RF, and vibration), and has to dynamically
adjust its duty cycles to adapt to the availability
of environmental energy. Such dynamic duty
cycles pose challenges for networks with IEEE
802.15.4 MAC in terms of synchronization, pack-
et loss, waste of channel resource and energy,
and so on. Therefore, standards of duty-cycling-
```

```
Figure 2. The position of 6LowPAN in the IPv6 protocol stack.
```

```
TCP/UDP
```

```
IPv
```

```
6LowPAN
```

```
IEEE 802.15.4 MAC
```

```
IEEE 802.15.4 PHY
```

```
TCP/UDP
```

```
Sensor
```

```
IPv
```

```
6LowPAN
```

```
IEEE 802.15.4 MAC
```

```
IEEE 802.15.4 PHY
```

```
Sensor
```

**94** IEEE Wireless Communications • December 2013

```
aware middleware between MAC and power
management are highly desired.
```

```
Traffic Diversity — Similar to today’s Internet,
future IoT will also provide numerous types of
applications. Such applications will produce data
traffic with highly different patterns and quality
of service (QoS) requirements. For instance,
data traffic produced by target tracking and
information query applications would have much
harsher QoS requirements than regular environ-
ment monitoring applications. In order to reuse
resources and reduce implementation costs,
more and more multi-purpose sensor networks
will be implemented and connected to the Inter-
net by using IoT standards. However, several
studies such as [7] show that IEEE 802.15.4 per-
forms poorly in QoS support for networks with
heterogeneous coexisting traffic. As proposed in
[7], this problem could be solved by adopting
multiple transmission queues in 802.15.4 as in
IEEE 802.11e, which maintains four transport
queues to separately deal with different traffic
classes based on their level of urgency.
```

## NETWORKLAYERPROTOCOL

### DEFACTOSTANDARD

```
The IETF Routing over Lossy and Low-Power
Networks (RoLL) working group was established
in February 2008. It focuses on routing protocol
design and is committed to the standardization
of the IPv6 routing protocol for lossy and low-
power networks (LLNs). Its tasks began with the
routing requirements of various application sce-
narios. So far, the routing requirements of four
application scenarios have been standardized:
home automation (RFC 5826), industrial control
(RFC 5673), urban environment (RFC 5548),
and building automation (RFC 5867).
In order to develop suitable standards for
LLNs, RoLL first provided an overview of exist-
ing routing protocols for WSNs. The literature
[8] analyzes the characteristics and shortcomings
of the relevant standards and then discusses the
quantitative metrics for constructing routes in
the routing protocol. RFC 6551 introduces two
kinds of quantitative metrics: node metrics,
including node state, node energy, and hop
count, and link metrics, including throughput,
latency, link reliability, expected transmission
count (ETC), and link color object. In order to
assist dynamic routing, nodes can select path(s)
based on the quantitative metrics to achieve the
defined objective.
Based on the results of routing requirements
and quantitative static link metrics, RoLL devel-
oped a routing protocol for LLN (RPL) [9].
RPL supports three kinds of traffic flow: point-
to-point (between devices inside the LLN),
point-to-multipoint (from a central control point
to a subset of devices inside the LLN), and mul-
tipoint-to-point (from devices inside the LLN
toward a central control point). RPL is a dis-
tance-vector routing protocol, in which nodes
construct a destination-oriented acyclic graph
(DODAG) by exchanging distance vectors and
root with a controller, illustrated in Fig. 3.
Through broadcasting routing constraints, the
```

```
root node (i.e., central control point) filters out
the nodes that do not meet the constraints and
selects the optimum path according to the met-
rics. In the stable state, each sensor node has
identified a stable set of parents and forwarded
packets along the path toward the root of the
DODAG.
```

### OPENQUESTIONS ANDOPPORTUNITIES

```
Routing plays an important role in providing
efficient end-to-end networking services in com-
munication networks. The emerging IETF rout-
ing standard, RPL, aims to support ubiquitous
sensing applications in future large-scale low-
power IoTs. Although the current RPL has pro-
vided many nice features such as supporting
multiple link and node metrics, it still needs to
be improved to achieve this ambitious goal. In
this subsection, we summarize the potential
issues of the current RPL and propose possible
solutions.
```

```
End-to-End Throughput — Similar to the IEEE
802.15.4 MAC in data link layer, RPL in the net-
work layer also meets the throughput challenges
because of multiple coexisting applications in
one physical network and the potential large net-
work size. Different from the DAG routing
topology used by RPL, the queue-aware back-
pressure routing algorithm sends packets to the
gateway(s) by exploiting all possible end-to-end
paths, which has been proved to be throughput
optimal in theory and successfully implemented
in real-world sensor networks [10]. To improve
the potential throughput, RPL could define the
queue backlog as a node metric and combine
this with link quality metrics (e.g., data rate) for
data forwarding. Besides the back-pressure
approach, integrating the ideas of opportunistic
routing and network coding are also promising
and practical solutions.
```

```
Packet Reordering — Different from traditional
tree-based WSN routing, RPL provides multi-
path routing solutions (i.e., the DAG routing
topology; a node can have multiple parents).
The multi-path routing structure would result in
packet reordering; that is, earlier generated
```

```
Figure 3. RPL routing tree: DODAG.
```

```
Leaf node
```

```
Parent node
```

```
S Root node
```

```
b
```

```
d
```

```
g
```

```
e
```

```
c
```

```
a
```

```
f
```

### The emerging IETF

### routing standard, RPL,

### aims to support ubiqui-

### tous sensing applications

### in future large-scale

### low-power IoTs.

### Although the current RPL

### has provided many nice

### features such as

### supporting multiple link

### and node metrics,

### it still needs to be

### improved to achieve this

### ambitious goal.

```
IEEE Wireless Communications • December 2013 95
```

```
packets may be received by the gateway later.
Therefore, this fundamental issue of multi-path
routing should be addressed when RPL is used
to provide networking services for jitter-sensitive
applications such as target tracking.
```

**Impact of Duty Cycling** — Besides the MAC layer,
dynamic duty cycling also has a non-trivial
impact on the end-to-end performance of the
network layer (e.g., [11]), including end-to-end
latency, throughput, delivery radio, and other
factors. In energy-harvesting networks, for
instance, every sensor node should adapt to the
time-varying environment energy by adjusting its
duty cycle (i.e., energy consumption) dynamical-
ly, in order to achieve sustainable operation (i.e.,
no node should run out of battery). Our previ-
ous work [12] also demonstrates that such
dynamic duty cycling significantly affects end-to-
end throughput of routing, as shown in Fig. 4.
However, the current RPL design has paid
very little attention to duty cycling. Therefore,
how to seamlessly integrate duty-cycle awareness
into the multi-path routing RPL remains an
open question.

```
Multi-Topology Routing vs. Traffic Diversity — In a net-
work carrying multiple traffic types, different
routes should be constructed to support different
types of application traffic, according to their
requirements of physical resources, such as
bandwidth-aware routing and delay-aware rout-
ing. To support different applications (e.g.,
information query and data collection) in one
wireless network, RPL adopts the multi-topology
routing (MTR) approach to construct and iden-
tify a routing graph (e.g., a DAG) over one
physical mesh network for each application.
MTR should work well in LLNs with small num-
bers of light traffic applications. However, the
cost of DAG construction and maintenance
increases as the number of applications increas-
es. Furthermore, since routing traffic over each
DAG coexists and competes for resources of the
same physical network (e.g., link rate, energy,
and node memory), the priority and fairness for
every DAG become nontrivial issues. Therefore,
separately optimizing each DAG cannot result in
an efficient routing policy as a whole. Recently
developed network optimization approaches
such as [13] could be useful to solve such prob-
lems, but it is a challenge to minimize the modi-
fication of RPL when adopting these theoretical
optimization ideas.
```

## APPLICATIONLAYERPROTOCOL

### DEFACTOSTANDARD

```
The Constrained Application Protocol (CoAP)
specified by the IETF CoRE Working Group, is
a specialized web transfer protocol for resource
constrained nodes and networks. CoAP con-
forms to the REST style. It abstracts all the
objects in the network as resources. Each
resource corresponds to a unique universal
resource identifier (URI) from which the
resources can be operated stateless, including
GET, PUT, POST, DELETE, and so on.
Strictly speaking, CoAP is not an HTTP com-
```

```
pression protocol. On one hand, CoAP realizes a
subset of HTTP functions and is optimized for
constrained environments. On the other hand, it
offers features such as built-in resource discov-
ery, multicast support, and asynchronous mes-
sage exchange.
Unlike HTTP, CoAP adopts datagram-orient-
ed transport protocols, such as UDP. In order to
ensure reliable transmission over UDP, CoAP
introduces a two-layer structure, which is shown
in Fig. 5. The messaging layer is used to deal
with asynchronous interactions with UDP, such
as confirmable (CON), non-confirmable (NON),
acknowledgment (ACK), and reset (RST) mes-
sages.
The request/response interaction layer is used
to transmit resource operation requests and the
request/response data. As a summary, CoAP has
the following features:
```

- Constrained Web protocol fulfilling M2M
  requirements
- Asynchronous message exchanges
- Low header overhead and parsing complexity
- URI and Content-type support
- Simple proxy and caching capabilities
- Built-in resource discovery
- UDP binding with optional reliability support-
  ing unicast and multicast requests
- A stateless HTTP-CoAP mapping, allowing
  proxy to provide access to CoAP resources via
  HTTP in a uniform way and vice versa

### OPENQUESTIONS ANDOPPORTUNITIES

```
Although CoAP is extensively developed in
IETF to act as the core application layer proto-
col in resource constrained networks, it is still
```

```
Figure 4. Experiment results to show the impact of dynamic duty cycling on
end-to-end network throughput of a backpressure routing algorithm in a 16-
node solar powered WSN for three days.
```

```
Days
```

```
0 1
```

```
4
```

```
2
```

```
Throughput (packet/second)
```

```
6
```

```
2 3
```

**96** IEEE Wireless Communications • December 2013

```
confronted with challenges in application deploy-
ment scalability, network robustness, device cost
and power efficiency.
```

```
Application Deployment Scalability — The CoAP is nor-
mally coupled with the 6LoWPAN and IP proto-
col suite to provide application layer services.
The successful delivery of a CoAP message
requires the reachability of the device with an IP
address. However, the application provided by
the device with 6LoWPAN cannot have a con-
stant IP address and is usually associated with
the MAC address of the network interface. Once
the device is replaced, the destination IP address
assigned by previous applications should be
modified to ensure routability of new CoAP
messages. Such update procedures will increase
the operational complexity, especially in situa-
tions where lots of external clients need to be
served. Existing solutions, for instance, the
Dynamic Domain Name System (DDNS), can
successfully track dynamic IP address. However,
it is difficult for a constrained device to allocate
more resources for DNS client implementation.
```

```
Network Robustness — It is highly possible that
some constrained devices (e.g., a temperature
sensor for public access) will have to cope with a
vast amount of requests from clients. They may
collapse due to extremely high processing loads,
which is similar to the situation in the presence
of distributed denial of service (DDoS) attacks.
It is unfortunate that the CoAP fails to provide
any solutions to deal with massive access. The
caching mechanism in CoAP can merely reduce
the access traffic from the users that have
already issued the requests within a limited
duration of time, but is unable to alleviate the
processing loads caused by new clients.
```

```
Device Cost — Reference [14] evaluates the mem-
ory consumption of the IETF protocol suite
including CoAP in Contiki.^1 The whole operat-
ing system, including the IPv6 protocol stack,
takes up 6 kbytes RAM and 35 kbytes ROM,
which means that the IETF suite cannot be real-
ized in a single-chip solution with an inexpensive
microcontroller such as 89C51X2, whose built-in
ROM and RAM are only 4 kbytes and 128 bytes,
respectively. Therefore, without mass production
of a mature IP-based solution, the unit price of a
sensor device with a simple service (e.g., a light
sensor) is relatively higher than customer expec-
tation, given that it is implemented with the
IETF protocols. For instance, the price of a plug
switch with IP-based remote control capability is
about 10 times that of an ordinary one.
```

```
Power Efficiency — Different from the network
layer protocols to improve energy efficiency [15],
the application layer protocol can also improve
the power efficiency of constrained devices.
CoAP introduces the observer/subject mecha-
nism, where a client can subscribe to a resource,
and the server only responds once the resource
changes. It helps the server process multiple
requests in a more efficient way and accordingly
reduce power consumption. However, the CoAP
server must be kept alive to listen to possible
requests from clients. It turns out that devices
```

```
with CoAP still have to face relatively large
power consumption even if CoAP has been opti-
mized for the power issues.
Content-centric networking (CCN) [16] pro-
vides a promising way to overcome the above
concerns for resource constrained networks. The
communication in CCN is driven by a data con-
sumer who sends out a request message carrying
a URI-like name that identifies the desired data.
The router in the network maintains a data
structure to remember the interface where the
request arrives and then forwards it by looking
up the data name in another data structure
where the list of interfaces that can serve the
request is recorded. Once the request reaches a
node with the target data in its local storage, a
data packet containing the requested content
with the data name will be sent back via the
reverse path created by the request message.
Figure 6 illustrates the comparison of the IP
protocol stack and CCN stack. It is worth noting
that the content layer of CCN is the crucial com-
ponent for the application request/response pro-
cessing, which is equivalent to the request/
response exchange in CoAP except that the
intermediate device may also interpret RESTful
messages besides the server and client. To fur-
ther improve the transport performance, we pro-
pose in [17] a content identifier compression
method. Specifically, the method defines a series
of message exchanges between sensor devices
and upward devices such as routers or gateways
to generate a 2-byte code representing the con-
tent identifier.
In essence, there is great convenience in
building IoT systems with the CCN architecture.
As for the application deployment scalability, the
named-based routing can enable the CCN-based
IoT to implement the addressing scheme, which
is independent of the IP address and tightly cou-
pled with the hardware with no DNS required.
In addition, the CCN-based IoT is superior to
the CoAP in dealing with massive access,
because CCN is primarily designed for content
dissemination. The routers may identify multiple
requests destined to the same resource object
and make the destination respond to a single
request even in the presence of many requests.
Furthermore, there is a significant advantage in
```

```
Figure 5. CoAP protocol stack.
```

```
CoAP
```

```
Application
```

```
Request/responses
```

```
Messages
```

```
UDP
```

(^1) _Contiki is an open
source operating system
for the IoT. Contiki
allows tiny battery-operat-
ed low-power systems to
communicate with the
Internet._

### Strictly speaking, CoAP

### is not an HTTP compres-

### sion protocol. On one

### hand, CoAP realizes a

### subset of HTTP functions

### and is optimized for con-

### strained environments.

### On the other hand, it

### offers features such as

### built-in resource discov-

### ery, multicast support,

### and asynchronous mes-

### sage exchange.

IEEE Wireless Communications • December 2013 **97**

reducing the device cost for CCN-based IoT
solutions as well. In particular, a device using
the protocol stack in Fig. 6b can further elimi-
nate the IP address management procedure.
Power saving can easily be achieved in the CCN
architecture. Given the request arrival, the
router can respond with the cached data without
waiting for the activation of the target. More-
over, by introducing resource subscription, the
IoT device can only keep the subscription mes-
sage from the router serving the request with the
cached data to enable timely reaction to the
access request even if it is in sleep mode for
power saving.

## FUTURERESEARCHCHALLENGES

So far, we have introduced the IETF effort on
developing the global communication solution
for WSN and summarized some of the critical
opportunities and challenges of bringing the cur-
rent IoT standards into reality. From the techni-
cal perspective, the Internet of Things relies not
only on industry efforts to promote network con-
vergency, but also academic innovations at a fun-
damental level to improve engineering designs.
For a long-term vision, we identify some inter-
esting research opportunities and challenges for
future IoTs:

1. Convergent networks: Future IoT infrastruc-
   tures may exist everywhere, in home, industry,
   cities, and so on. Considering that the emerg-
   ing number of IoT standards (e.g., ZigBee)
   and different communication technologies
   (e.g., power line communications [PLC], WiFi)
   coexist, it is necessary to develop heteroge-
   neous technologies to enable convergent net-
   works. For instance, ZigBee has officially
   released its ZigBee IPv6 specification to con-
   sider its compatibility with the IETF stan-
   dards. By taking advantage of possible radio
   resources nearby, different communication
   technologies can cooperate together to deliver
   highly efficient and green communications.
2. Hybrid communication paradigm: Current IoT
   solutions focus on a multihop short-range
   communication paradigm, which is limited by
   poor end-to-end throughput and the high cost
   of large-scale deployment. Alternatively, sen-
   sor data can also be forwarded to the Internet
   using opportunistic (i.e., carry-and-forward)
   [18] or one-hop long-range (e.g., third/fourth
   generation [3/4G] cellular) communications.
   Seamlessly combining these communication
   paradigms could result in more cost-effective
   IoT solutions.
3. Joint data processing and networking: It is
   expensive to transmit huge volumes of raw
   data produced by numerous smart things to
   the Internet. Fortunately, sensor data process-
   ing techniques such as compressive sensing
   and data fusion can significantly reduce the
   sensor data volume. Consequently, designing a
   communication paradigm with data processing
   awareness for future IoTs is highly desired.
4. Social and economic awareness: As sensors or
   smart things are owned by the public, organi-
   zations, or individuals, social and economic
   behaviors of users, network service providers,
   and sensor data providers should be consid-

```
ered in the IoT design [19], such as incentive,
resource pricing, and social-aware privacy.
```

## CONCLUSION

```
This survey provides a brief overview of the
IETF protocol suite proposed to support the
Internet of Things. Taking each layer in the pro-
tocol in turn, we have presented the technical
challenges and opportunities that exist. That is,
the physical layer, MAC layer, 6LowPAN, RPL
protocols, and CoAP standards have been
reviewed and critiqued. It is our view that these
standards are a good start, but there are many
open issues remaining. However, based on the
current trajectory of research combined with
more forward thinking, better solutions capable
of combating radio unreliability and meeting
future application requirements of high-speed
and high-quality services with high energy effi-
ciency can be developed. New insights regarding
protocol analysis could also provide precise
guidelines that will result in efficient designs of
practical and reliable communications systems.
The resulting ideas have the potential to have a
broad impact across a range of areas, including
wireless communications, network protocols, and
radio transceiver design.
```

### REFERENCES

```
[1] A. Garcia-Hernando et al. , Problem Solving for Wireless
Sensor Networks , Springer, July 2008.
[2] IETF Working Groups RoLL and Core,
http://datatracker.ietf.org/wg/.
[3] IEEE Std 802.15.4-2003, IEEE Comp. Soc., 2003.
[4] J. Song et al. , “Wirelesshart: Applying Wireless Technol-
ogy in Real-Time Industrial Process Control,” Proc. IEEE
RTAS , 2008, pp. 377–86.
[5] A. Sridharan and B. Krishnamachari, “Explicit and Pre-
cise Rate Control for Wireless Sensor Networks,” Proc.
ACM SenSys , 2009, pp.29–42.
[6] X. Wang et al. , “A Survey of Green Mobile Networks:
Opportunities and Challenges,” Mobile Networks and
Applications , vol. 17, no. 1, Feb. 2012.
[7] Y.-S. Shin, K.-W. Lee, and J.-S. Ahn, “Analytical Perfor-
mance Evaluation of IEEE 802.15. 4 with Multiple
Transmission Queues for Providing QoS under Non-Sat-
urated Conditions,” Proc. 16th Asia-Pacific Conf. Com-
mun. , 2010, pp. 334–39.
```

```
Figure 6. Comparison of IP protocol stack and the proposed solution: a) IP-
based stack; b) non-IP-based stack.
```

```
Content
```

```
UDP
```

```
Content
```

```
IEEE 802.15.4, WiFi,
Ethernet,...
```

```
(b)
```

```
IPv
```

```
6LoWPAN
```

```
IEEE 802.15.
```

```
(a)
```

**98** IEEE Wireless Communications • December 2013

```
[8] P. Levisi, A. Tavakoli, and S. Dawson-Haggerty,
“Overview of Existing Routing Protocols for Low Power
and Lossy Networks,” Internet draft, http://tools.ietf.
org/html/draft-ietf-roll-protocols-survey-07.
[9] Routing over Low Power and Lossy Networks (RoLL),
IETF, http://datatracker.ietf.org/wg/roll/charter.
[10] S. Moeller et al. , “Routing Without Routes: The Back-
pressure Collection Protocol,” Proc. IPSN , 2010, pp.
279–90.
[11] Y. Sun et al. , “Adb: An Efficient Multihop Broadcast
Protocol Based on Asynchronous Duty-Cycling in Wire-
less Sensor Networks,” Proc. ACM SenSys , 2009, pp.
43–56.
[12] S. Yang et al. , “Distributed Networking in Autonomic
Solar Powered Wireless Sensor Networks,” IEEE JSAC ,
https://sites.google.com/site/zsheng0625/ieee-jsac-
shusen, 2013.
[13] C. Joe-Wong et al. , “Multi-Resource Allocation: Fair-
ness-Efficiency Tradeoffs in a Unifying Framework,”
Proc. IEEE INFOCOM , 2012, pp. 1206–14.
[14] J. Schnwlder, T. Tsou, and B. Sarikaya, “Protocol Pro-
files for Constrained Devices,” http://www.iab.org/wp-
content/IABuploads/2011/03/Schoenwaelder.pdf, Feb.
2011.
[15] N. Chilamkurti et al. , “Cross-Layer Support for Energy
Efficient Routing in Wireless Sensor Networks,” J. Sen-
sors , vol. 2009, 2009.
[16] V. Jacobson et al. , “Networking Named Content,”
Proc. CoNEXT ’09 , Dec. 2009.
[17] Y. Yu and D. Gu, “The Resource Efficient Forwarding
in the Content Centric Network,” NETWORKING 2011 ,
2011, vol. 6640, pp.66–77.
[18] S. Yang, U. Adeel, and J. A. McCann, “Selfish Mules:
Social Profit Maximization in Sparse Sensornets Using
Rationally-Selfish Human Relays,” IEEE JSAC , vol. 31,
no. 6, 2013, pp. 1124–34.
[19] J.-M. Bohli, C. Sorge, and D. Westhoff, “Initial Obser-
vations on Economics, Pricing, and Penetration of the
Internet of Things Market,” ACM SIGCOMM Comp.
Commun. Rev. , vol. 39, no. 2, 2009, pp. 50–55.
```

### BIOGRAPHIES

```
ZHENGGUOSHENGis with France Telecom Orange Labs as the
project leader in charge of technical research and project
management in M2M and Internet of Things, as well as
the coordinator of Orange and Asia telco on NFC partner-
ship. His current research focuses on M2M technologies,
especially the capillary networks (or WSN) driven technical
challenges, including radio connectivity, device/network
management, IT enabler platform and smart cities, and
others. Before joining Orange Labs, he received his Ph.D.
and M.S. degrees with distinction at Imperial College Lon-
don in 2011 and 2007, respectively, and his B.Sc. degree
from the University of Electronic Science and Technology of
China.
```

```
SHUSENYANG(s.yang09@imperial.ac.uk) is a research associ-
ate at Imperial College London and the Intel Collaborative
Research Institute for Sustainable Connected Cites. He
received his Ph.D. from the Department of Computing at
Imperial College London in April 2013. His research inter-
ests are network and information optimization in dynamic
networked sensing systems, including data processing and
```

```
networking, cross-layer optimization, and sustainable sys-
tems with renewable energy. He is also interested in apply-
ing social and economic ideas in city sensing and
communication systems, such as incentive, pricing, and
social-aware privacy.
```

```
YIFANYUreceived his B.S. and Ph.D degrees in telecommu-
nication engineering from Beijing University of Posts and
Telecommunications in 2001 and 2006, respectively. He
was engaged in the research of radio access technologies
for WLAN and the heterogeneous network in NTT DOCO-
MO’s Beijing Laboratory from 2006 to 2008. He worked as
a researcher and principal researcher at Orange Labs Bei-
jing from 2008 to 2013. He is currently a senior research
scientist at Intel Labs China. His research interests include
MIMO technologies for 3GPP LTE-A and the future Internet
architecture based on the idea of content centricity.
```

```
ATHANASIOSV. VASILAKOSis currently a visiting professor at
the National Technical University of Athens, Greece. He has
served or is serving as an Editor for many technical jour-
nals, such as IEEE TNSM , IEEE TSMC-PART B , IEEE TITB , IEEE
TC , ACM TAAS , and IEEE JSAC Special Issues in May 2009,
and January and March 2011. He is Chairman of the Coun-
cil of Computing of the European Alliances for Innovation.
```

```
JULIEA. MCCANN[M] is a reader in computer systems at
Imperial College London. Her research centers on highly
decentralized and self-organizing scalable algorithms for
spatial computing systems such as wireless sensing net-
works. She leads both the Adaptive Embedded Systems
Engineering Research Group and the Intel Collaborative
Research Institute for Sustainable Cities, and is currently
working with NEC and others on substantive smart city
projects. She has received significant funding through bod-
ies such as the United Kingdom’s EPSRC, TSB, and NERC as
well as various international funds, and is an elected peer
for the EPSRC. She has actively served on and chaired
many conference committees and is currently Associate
Editor for ACM Transactions on Autonomous and Adaptive
Systems. She is a member of the ACM as well as a Char-
tered Engineer, and was elected a Fellow of the BCS in
2013.
```

```
KINK. LEUNG[F] received his B.S. degree from the Chinese
University of Hong Kong in 1980, and M.S. and Ph.D.
degrees in computer science from the University of Califor-
nia, Los Angeles, in 1982 and 1985, respectively. He start-
ed his career at AT&T Bell Labs in 1986. Following Lucent
Technologies’ spinoff from AT&T in 1996, he was with
AT&T Labs from 1996 to 2002. In 2002, he rejoined Bell
Labs Lucent Technologies. Since 2004, he has been the
Tanaka Chair Professor of Internet Technology at Imperial
College London. His research interests include radio
resource allocation, MAC protocol, TCP/IP protocol, mobili-
ty management, network architecture, real-time applica-
tions, and teletraffic issues for broadband wireless
networks. He is also interested in a wide variety of wireless
technologies, including 802.11, 802.16, and 3G and future
generation wireless networks. He received the Distin-
guished Member of Technical Staff Award from AT&T Bell
Labs in 1994, and was a co-recipient of the 1997 Lanch-
ester Prize Honorable Mention Award. He holds the Royal
Society Wolfson Research Merit Award from 2004 to 2009.
```

### It is our view that these

### standards are a good

### start, but there are

### many open issues

### remaining. However,

### based on the current tra-

### jectory of research com-

### bined with more forward

### thinking, better solutions

### capable of combating

### radio unreliability and

### meeting future applica-

### tion requirements of

### high-speed and high-

### quality services with

### high energy efficiency

### can be developed.
