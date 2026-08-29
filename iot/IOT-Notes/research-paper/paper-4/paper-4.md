## A review paper on wireless sensor network techniques in Internet of

## Things (IoT)

## Kamal Gulati

## a,⇑

## , Raja Sarath Kumar Boddu

```
b
```

## , Dhiraj Kapila

```
c
```

## , Sunil L. Bangare

```
d
```

## , Neeraj Chandnani

```
e
```

## ,

## G. Saravanan

```
f
```

aASIBAS, Amity University, Noida, India
bDepartment of CSE, Lenora College of Engineering, Rampachodavaram, Andhra Pradesh, India
cDepartment of Computer Science & Engineering, Lovely Professional University Phagwara, India
dDepartment of I.T., Sinhgad Academy of Engineering, Pune, India
eMilitary College of Telecommunication Engineering, Mhow, Madhya Pradesh, India
fDepartment of Electrical and Electronics Engineering, KPR Institute of Engineering and Technology, Coimbatore, India

## article info

Article history:
Received 6 April 2021
Received in revised form 16 April 2021
Accepted 5 May 2021
Available online 19 May 2021

Keywords:
Internet of Things (IoT)
Wireless Sensor Networks (WSN)
Energy-efficiency
Network lifetime
Data aggregation

## abstract

```
In recent times, it has been witnessed that wireless systems based on IoT-based have developed rapidly
in various sectors. The IoT (Internet of Things) is the network in which physical devices, equipment, sen-
sors and other objects can communicate among themselves without human involvement. The WSN
(Wireless Sensor Network) is a central component of the IoT, which has proliferated into several different
applications in real-time. The IoT and WSNs now have various critical and non-critical applications
impacting nearly every area of our everyday life. WSN nodes are usually small and battery-driven
machines. Thus, the energy effective data aggregation techniques that increase the lifespan of the net-
work are highly significant. Various approaches and algorithms for energy-efficient data aggregation in
IoT-WSN systems were presented. This paper reviews the literature with specific attention to aspects
of wireless networking for the preservation of energy and aggregation of data.
Ó2021 Elsevier Ltd. All rights reserved.
Selection and peer-review under responsibility of the scientific committee of the 1st International Con-
ference on Computations in Materials and Applied Engineering – 2021.
```

1. Introduction

Our everyday life has changed significantly in all respects with
the beginning of wireless networking technology. The Internet of
Things (IoT) is especially one of the fastest evolving technologies
of the future. Multiple devices can be associated in the physical
world, which basically changes our everyday life, by adding IoT.
The need for communications everywhere and every-time, partic-
ularly in fields with increased activity, is, therefore, increasing
rapidly.
The IoT has been viewed as integration and communication
between intelligent objects (things). IoT’s supremacy contributes
to new technologies and applications. Such sensors and actuators
(for example, home appliances, security cameras and sensors for
environmental monitoring) are usually fitted with various types
of transceivers, microcontroller devices, and protocols for commu-

```
nication of control and sensor data[1]. Such real time modules
such as sensors, are interconnected with one another to transmit
sensed data to the centralized repositories, in which the data is
cumulatively stored and accessible for users with the right to
access. In comparison to conventional wired or wireless network-
ing systems, the features of IoT utilizing wireless technologies
are somewhat different as the number of communication devices
is quite high[2]. However, IoT-based traffic is not usually much
critical because of every IoT device senses and transmits some data
to a respective IoT Server, thus data produced by a large number of
objects might have some effects collectively on efficiency of the
network. Therefore, for a long time without any human interfer-
ence, the IoT networks will run in a safe and sustainable manner.
Heterogeneous WSN that link a wide range of intelligent sen-
sors has become the cornerstone for the IOT-based systems all
around us, introducing significant enhancements in the near future
[3]. The rapid development of these devices has resulted in energy
consumption problems[4], which have become highly attractive.
On one side, the drastic rise in the rate of communication and
```

https://doi.org/10.1016/j.matpr.2021.05.
2214-7853/Ó2021 Elsevier Ltd. All rights reserved.
Selection and peer-review under responsibility of the scientific committee of the 1st International Conference on Computations in Materials and Applied Engineering – 2021.

```
⇑Corresponding author.
E-mail address:gulatikamal88@gmail.com(K. Gulati).
```

```
Materials Today: Proceedings 51 (2022) 161–
```

```
Contents lists available atScienceDirect
```

# Materials Today: Proceedings

```
journal homepage: http://www.elsevier.com/locate/matpr
```

the sharing of information has contributed to unsustainable rises
in energy usage and carbon emission[5]. The sensor nodes, on
the other side, are required to operate efficiently for longer periods
(even years) for different application specifications in most appli-
cations (e.g. for environmental control, protection, agriculture, bor-
der surveillance and protection etc.) [6]. The application’s
durability depends primarily on energy consumed by sensors,
whereby the dead nodes can affect device compatibility and
dependence and accuracy of data. However, a sensor node is typi-
cally composed of four major units:

```
the processing unit,
the sensing/identification unit,
the communication unit and
the power supply unit[7,8],
```

It is shown inFig. 1.
The afore mentioned components have secondary components,
like filters, amplifiers, transducers, comparators, etc. The sensing
device collects / senses data from workplace. The processing unit
conducts different tasks for data manipulation like data collection,
whereas the communication unit transmits data at the BS (base
stations), and the power unit, usually a battery-limited one, pro-
vides energy to all other devices.
The specific sensor node energy usage depends upon the oper-
ating situation, which may consist of three states- active, sleeping,
or idle. The node uses the maximum energy in active mode.
Thanks to the information transmission and receipt, the maximum
energy is dissipated and the least is absorbed by sensing device.
Though the energy required by processing unit is very less than
that of the subsystem for radio, but larger than subsystem for sens-
ing. It depends on the distance of communication, the monitoring
case, the criteria of operation and the activities in all units. During
idle mode, the node waits for data packets that and sent from
another node. It may result in much higher energy consumption
(by CPU, radio etc.) that can amount to up to 50%-100% energy dis-
sipated for data receipt. A lot less amount of energy is drained
away while sleeping, where the node fails to perform any process-
ing activity and the unit of communication is turned off. Though,
other energy dissipation sources, such as packet losses, packet col-
lisions, physical channel errors, frame overhearing, overhead pro-
tocols and overhead computation, exist. The IoT group has
therefore been inspired to develop energy-efficient and renewable
IoT solutions.

```
Battery energy sources generally are used for operating devices
in these IoT networks, which is why energy efficiency is of course
of highest concern for system management. With a view to a speci-
fic WSN domain, battery-operated sensor nodes’ energy efficiency,
as well as life extension, have been problems for research from
long time[9,10], whereby Medium Access Control (MAC) protocols
emphasizes on optimizing sensor node operation and protocols for
routing layer are built for aggregating data and transmitting it from
multiple-to-one. Thus, a review is presented in this paper with
specific attention to aspects of wireless networking for the preser-
vation of energy and aggregation of data.
```

2. Role of IoT in WSN

```
Significant classification opinions and surveys of WSN and IoT-
based energy-saving technologies have been supported by several
research papers and studies. Throughout this section, some of
these important literary works are reviewed, which present their
main areas and different categories identified by them:
The paper[11]presented the design as well as the accomplish-
ment of solar energy powered precision agricultural (PA) network
with the WSN by utilizing IoT architecture to fulfil the requirement
of identifying extremely effective ways for a smart agriculture
management system. This presented system provided farmers
with useful information in a user-friendly and easy to access way
with real-time data communications through IoT about saltwater
intrusions, the moisture of soil, level of water, wet conditions, tem-
perature and the general state of the land.
The authors in[12]provided a study of IOT data gathering and
the concepts of making a decision.
The operational and maintenance survey of PV systems and
WSNs based on IoT for the monitoring of PV panels was presented
in[13].
The research[14]suggested an approach used to enhnance
energy usage in WSN-IoT environmental operations via the Chaotic
Whale Optimization Process. The results of energy efficiency rela-
tive to other traditional approaches were obtained. The results
demonstrated that in the WSN-IoT integrated system, the proposed
approach achieves better energy efficiency.
The survey was performed in[15]on the delays, energies, jit-
ters, throughput, packet-delivery ratios (PDR) from the viewpoint
of WSN and performance of routing protocols was measured using
latencies, bandwidth, jitter and delay. An algorithm was designed
to improve AODV routing in IoT. Two tables were merged into
one table, i.e. table of routing and internet access table for protocol
optimization. This paper aimed mainly to analyze simulation stud-
ies of the IoT AODV routing protocol, and to utilize the NS2 simu-
lator to improve AODV performance and IoT AODV performance.
The latest version is available.
Also, WSN-assisted IoT has many limitations, making it impos-
sible for traditional routing protocols to be used directly. Energy is
major constraint for IoT devices assisted by WSN. To communicate
among sensor nodes, more power is consumed than sensing and
computing. Consequently, effective energy management
approaches are essential to extend the network’s life. In paper
[16], the author proposed an energy-conscious multi-user &
Multi-Hop Hierarchical Routing Protocol (EAMMH-RP) which cov-
ers Communication with Multi-Hop wherein energy is distributed
equally across cluster formation sensor nodes, a novel sequence of
algorithms for cluster adaptation and rotating and a novel energy
consumption reduction mechanism for long-range
communications.
The sensors can be used to track the atmosphere and return the
information for longer. A protocol was proposed in[17]which
Fig.1.A typical IoT-based sensor node architecture. encompass a robust routing protocol for IoT sensing network. At
```

first, in the centre of the network field, a rendezvous area was built.
The strategies of clustering and multipath were utilized as it min-
imizes energy usage and improves reliability. In the Castalia simu-
lator, the introduced protocol was simulated in order to achieve
efficiency under different conditions, such as packet transmission,
average energy usage, end to end delays and network longevity.
The routing algorithms and models were reviewed in[18]with
respect to succession parameters, like reducing delay, energy usage
and optimizing the data delivery ratio. The IoT and WSN algo-
rithms based on IoT were divided into two classes for classifying:
energy consciousness, delay, throughput, data transmission and
packet loss aware.
The article[19]optimized the conventional routing protocol
and introduced an innovative protocol with characteristics like a
new data transmission system and an enhanced method of selec-
tion of CHs. Thus the gap of the WSNs in real world and the actual
heterogeneous setting was related. With the help of performance
measurements, the outcome of simulation revealed the contrast
between existing Hy-IoT and projected protocol.

3. Challenges of WSN in IoT

Different heterogeneous artefacts presented and communicat-
ing in different settings accomplish IoT ’s complexity and make
deployment of security mechanisms even more complicated. Exist-
ing WSN security research offers primarily solutions to subjective
issues, without taking into consideration the impact of the IoT
principles and features as examined in this document.

3.1. 3.1. Real time management

For resource-controlled sensor networks, it is a difficult prob-
lem. In that case, an efficient service gateway design is needed in
the IoT system to minimise the amount of data to be transmitted
by constantly reviewing user data, and smart data-driven middle-
ware design to communicate real-time information only when
reading more than threshold.

3.2. 3.2. Security and privacy

In real world applications, safety, trust and privacy are also
important issues. The way to achieve different levels of safety is
both difficult and soft. These safety methods are suitable for M
M deployments where the device and the server have an existing
trust relationship.[30]
Besides its usual sensor functionality sensor nodes with this ‘‘IP
to the field” paradigm have additional responsibilities. The sensor
nodes will therefore confront new tasks or challenges with this
additional responsibility. Three potential tasks will be discussed:
security, service quality (QoS) and network configuration. The fol-
lowing are addressed.

3.3. 3.3. Security

WSNs can have security, verification, fairness and usability to
data without Internet connectivity, depending on the complexity
of the programme. The attacker requires physical activity near
the WSN to add malicious nodes to the current network or to block
or catch them. This establishment of WSNs to internet, however,
enables attackers from around the world to carry out their mali-
cious activities [31]. The WSNs should therefore definitively
address the issues arising from this Internet connexion such as
malware and others. The key and special effective gateway is pro-
vided to ensure efficient security by current WSNs. However, it is
impossible to replicate the same security framework due to the

```
limited amount of computing power, energy and memory con-
straints. Compared to other Internet networks, sensor nodes for
greater secrecy have not yet embraced cryptography with key
lengths such as RSA-1024. In addition , it is important that better
security mechanisms [32] take existing resource constraints into
account in order to avoid various attacks resulting from the
Internet.
```

```
3.4. 3.4. Quality of service
```

```
Regarding the intelligence offered to the sensor nodes, all
heterogeneous devices of the internet of things have to contribute
to the quality of service. This heterogeneous devices allow a distri-
bution of workload between the nodes with the resources accessi-
ble. The current QoS approaches available on the Internet still
requires enhamnecemnt due to dynamic network configurations
and link features [33].
```

```
3.5. 3.5. Configuration
```

```
Along with QoS management and security, sensor nodes need to
manage various tasks, such as networking for the new node joining
the network [34] and making sure self-healing by identifying and
deleting of flawed nodes and addressing management for construc-
tions of scalable network etc. However, it is not a standard function
of self-configuring the latest node on the Internet. Therefore, the
user must instal the appropriate software and take sufficient mea-
sures to prevent device failures if this network setup is to run
easily.
```

```
3.6. 3.6. Availability
```

```
WSNs can be availed by presence of compromised nodes [35]. In
order to incorporate encryption algorithm for WSN security, extra
cost ould be charged. However, esearchers have developed signifi-
cant methods in which some modified the code and reused it, some
used supplementary communications to meet the goals. Besides
this, methodologies have been designed to access the data. Thus,
need of availability is imperative t preserve the operational ser-
vices of WSN’s. It also assist in the maintenance of the entire net-
work till its termination.
Table 1:Numerous Data Aggregation Techniques
```

```
3.7. 3.7. Data integrity
```

```
WSN can be compromised when malicious node enters the net-
work and injects the wrong data or vacillating wireless channel
corrupts the original data [36]. For example, if a maovelent node
transfers the false data to the packets received by the BS, it will
affect the integrity of data. yet , the data loss or alteration in data
might be caused due to faulty network. Thus, it is required that
data integrity must be maintained throughout the transmission
of data packets.
```

```
3.8. 3.8. Confidentiality
```

```
Security in IoT comprises of various challenges , amongst which
confidentalityis the major aspect. The data is kept confidential by
opting encryption functions such as common and shared secret
key encryption algorithms, e.g., the Blowfish, AES block cipher,
and Triple DES [37]. But encryption process is not sufficient to pro-
tect privacy of the data and information alone as a security mech-
anism. A traffic analysis for the cypher data can be carried out by
the attacker so that sensitive data can be effectively published. Fur-
thermore, the malicious node can effectively compromise the
```

range of other sensor nodes by using a shared group keypad and
then wake up and decode sensitive information.

4. Data aggregation

As described — WSNs are essential IoT blocks that have prolifer-
ated in several diverse applications in real-time. WSN nodes are
usually small and battery-driven appliances. Thus, the longevity
of the network is a primary consideration for WSN data aggrega-
tion. During the collection of data, numerous problems like
increased energy usage, i.e. energy ineffectiveness and increased
lifespan, were found.
Data aggregation strategies are widely used to preserve accept-
able servicing efficiency in the distribution of sensed data. The pur-

```
pose of data collection program is to effectively incarcerate and
distribute data packets so that energy usage, traffic congestion
and network life, data consistency, etc. can be minimized.
Thus, in this field, numerous techniques were proposed which
are discussed below:
```

5. Conclusion

```
Advancements in computer technology have contributed to the
growth of WSNs, which at any time sense the requisite parameters.
The IoT based WSN systems are gaining huge attention in recent
times. Nonetheless, during point-to-point transmission, these sys-
tems suffer from restricted bandwidth, power and resources. Data
gathering is an illustrious method for alleviating this problem. A
```

Table 1
Numerous Data Aggregation Techniques.

```
Approach Parameters Projected design
hybrid QoS-Aware Data
Aggregation (QADA)[20]
```

```
Power Consumption
Network Lifetime
```

```
The paper[20]suggested a hybrid QoS-Aware Data Aggregation (QADA) method. The method
incorporated the characteristics of the aggregation of the clusters and tree-based data and discussed a
few of their essential drawbacks.
Compressed sensing (CS)[21] Reduce Global Scale
Communication Cost
```

```
Compressed sensing (CS) was presented in[21]which is very useful for WSN data aggregation such that
it gives high reliability in reconstruction with fewer samples than Nyquist Shannon, given the data is
scanty in any domain[21]. Numerous methods have been studied in data aggregation using CS, showing
that CS can maximize its network existence by reducing communication costs during data collection in
WSN.
Cross-Layer Commit Protocol
(CLCP)[22]
```

```
Query Based IOT The distributed Cross-Layer Commit Protocol (CLCP) was evaluated in[22]for collecting data and it
supports IoT application based on query search.
CSDA[23] Energy Consumption As data collection is a tool for integration and transmission of data from the different sensors, yet, when
the sensor networks are installed in a harsh atmosphere, protection becomes crucial, as in the existence
of malicious nodes, to assure robustness, precision and privacy. Many current systems have therefore
been proposed to ensure secure data collection, however, the efficiency of these algorithms was not
adequate. Therefore, paper[22]proposed a new algorithm i.e. Efficient-CSDA (Data Aggregation based
on consensus) algorithm.
Mixed-integer programming
[24]
```

```
Energy Consumption Mixed-integer programming formulas and algorithms were presented in[24]to deal with the problems
of energy-efficient routing and multi-sink aggregation and also combined gathering and distribution of
sensor data to IoT networks. The network optimization was taken into consideration both for minimum
overall energy consumption and for minimal-maximum per node energy consumption. A conceptual-
ization and algorithm were provided for efficient transmissions scheduling in the case of pure
aggregation under the model of physical interference.
DiDAMoK[25] Life Span Enhancement
Of Periodic WSN
```

```
The high-density installation of the sensor nodes results in a greater redundancy of data in the obtained
sensor node readings. The energy-saving collection of data can be an important way to reduce data
redundancies. In paper[25], the author proposed an approach i.e. Distributed Data Aggregation based
Modified K-means (DiDAMoK), for enhancing the lifespan of WSNs. DiDAMoK was distributed within
every sensor node. This functions in periods. Three stages were comprised in each process. Firstly,
readings of sensor were recorded and stored in the sensor node. Secondly, the updated K-means was
used to turn these readings into reading clusters. The cluster count relied on the obtained reading’s
nature. At last, a representative reading of each cluster was passed on to the BS.
Power Effective Gathering
[26]
```

```
Throughput
Energy Consumption
End To End Delay
Routing Overhead
Packet Delivery Ratio
Security
```

```
Energy, memory and bandwidth have been used by the data aggregation and routing algorithm during
their operation. Previous data gathering and routing algorithms decrease usage of energy by preventing
redundant data and thereby minimizing both the memory and bandwidth efficiently. In addition, the
balanace amid security levels of data collection and routing and energy usage since the security level has
a thorough computational operation and vice versa. Thus, for the effective aggregation of data and
routing of IoT WSN, the author in[26]proposed the improved Enhanced Power Effective Gathering in
Sensor Information System algorithm.
CTEEDG[27] Throughput
Energy Consumption
```

```
The paper[27]proposed a CTEEDG protocol to enhance the throughput and lifespan of WSNs. It utilizes
the Fuzzy logic for selecting the locally gathered data based CH. During the communication within the
cluster, the tree topology was created amongst the clusters to the BS, ensuring that the smallest path
with no congestion to the BS is available. The obtained outcome revealed that the proposed approach
performed better than FAMACROW and DL-LEACH with respect to throughput. Based upon simulation
results, the CTEEDG proposed production is 28.81% more than that of FAMACROW and 38.28% above
than that of DL-LEACH. Furthermore, the presented scheme reduces the average energy usage by 29.
per cent and 49.29 per cent compared to previoius methods.
ME[28] Network Lifetime The issue of enhancing the lifespan of WSN was considered in[28]utilizing data aggregation algorithm
based on cluster. A new way of dealing with this problem was proposed in this paper. In IoT
environment, the Mobile Elements (ME) were used to function as CHs in a cluster-oriented aggregation
algorithm. It had been realized that the use of IoT technology in combination with WSN technology
attained better results.
Light Weight Compressed DA
[29]
```

```
Transmission Cost
Network Life
Enhncement
```

```
Best possible data aggregation to optimize IoT network lifespan by reducing constrain on-board resource
use is still a challenge. The author in paper[29]introduced a new Light Weight Compressed DA
algorithm that splits the whole network into random data aggregation clusters without any over lapping
of clusters. There were two significant benefits to arbitrary non-overlapping clustering: 1) efficient
energy, because every node does have to only transfer its capacity to its CH; and 2) extremely sparse
measuring matrix that results in a lower-complexity implementable system.
```

key problem in sensor networks is how important information can
be processed in a more energy-saving way. Thus, various data
aggregation algorithms were used to reducing the power con-
sumption which is reviewed in this paper. In this paper, the exist-
ing works defining the role of IoT in WSN is reviewed and then the
various data aggregation approaches proposed in previous works is
presented. The data aggregation techniques focus on the energy
conservation, lifetime enhancement, better QoS and high-level
security of the network.

CRediT authorship contribution statement

Kamal Gulati:Investigation, Writing - original draft.Raja Sar-
ath Kumar Boddu:Conceptualization, Writing - review & editing,
Supervision.Dhiraj Kapila:Formal analysis, Data curation.Sunil L.
Bangare:Conceptualization.Neeraj Chandnani:Writing - review
& editing.G. Saravanan:Writing - review & editing, Supervision.

Declaration of Competing Interest

The authors declare that they have no known competing finan-
cial interests or personal relationships that could have appeared
to influence the work reported in this paper.

References

[1]Y. Cho, M. Kim, S. Woo, Energy Efficient IoT based on Wireless Sensor Networks
for Healthcare, Int. Conf. Adv. Commun. Technol. (ICACT) (2018).
[2]H.W. Kim, D. Kyue, Technology and Security of IoT, J. Korea Instit. Informat.
Secur. Cryptol. 22 (1) (2012) 7–13.
[3]S.A.H. Antar, N.M. Abdul-Qaw, S. Almurisi, S. Tadisetty, Classification of Energy
Saving Techniques for IoT-based Heterogeneous Wireless Nodes, Procedia
Comput. Sci. 171 (2020) 2590–2599.
[4]N. Kaur, S.K. Sood, An Energy-Efficient Architecture for the Internet of Things
(IoT), IEEE Syst. J. 11 (2) (2017) 796–805.
[5]A.S. Abdul-Qawy, P.P.J.E. Magesh, T. Srinivasulu, The Internet of Things (IoT):
An Overview, Int. J. Eng. Res. Appl. (IJERA) 5 (12) (2015) 71–82.
[6]X. Zhou, Green Communication Protocols for Mobile Wireless Networks Ph.D.
thesis, University of Ottawa, 2017.
[7] M. Healy, T. Newe, E. Lewis, Wireless Sensor Node hardware: A review, in:
2008 IEEE Sensors, 621-624, 2008.
[8] H.M., FahmyWireless Sensor Networks: Concepts. Applications,
Experimentation and Analysis, Signal and Communication Technology,
Springer, 2016.
[9] K.I. Kim, ‘‘Clustering Scheme for (m, k)-Firm Streams in Wireless Sensor
Networks,” the Journal of information and communication convergence
engineering, vol.14, no. 2, pp. 84-88, 2016
[10]Young-bok Cho, Sang-ho Lee, Sung-Hee Woo, ‘‘An Adaptive Clustering
Algorithm of Wireless Sensor Networks for Energy Efficiency”, Journal of The
Institute of Internet, Broadcast. Commun. (IIBC) 17 (1) (2017) 99–106.
[11] M. S. Islam, G. K. Dey, ‘‘Precision Agriculture: Renewable Energy Based Smart
Crop Field Monitoring and Management System Using WSN via IoT,” 2019
International Conference on Sustainable Technologies for Industry 4.0 (STI),
Dhaka, Bangladesh, 2019, pp. 1-6, doi: 10.1109/STI47673.2019.
[12] K. Begum, S. Dixit, ‘‘Industrial WSN using IoT: A survey,” 2016 International
Conference on Electrical, Electronics, and Optimization Techniques (ICEEOT),
Chennai, 2016, pp. 499-504, doi: 10.1109/ICEEOT.2016.7755660.
[13] S. Sarkar, K. U. Rao, J. Bhargav, S. Sheshaprasad and A. Sharma C.A., ‘‘IoT Based
Wireless Sensor Network (WSN) for Condition Monitoring of Low Power
Rooftop PV Panels,” 2019 IEEE 4th International Conference on Condition
Assessment Techniques in Electrical Systems (CATCON), Chennai, India, 2019,
pp. 1-5, doi: 10.1109/CATCON47128.2019.CN

```
[14] G. Thangarasu, P. D. D. Dominic, M. bin Othman, R. Sokkalingam and K.
Subramanian, ‘‘An Efficient Energy Consumption Technique in Integrated
WSN-IoT Environment Operations,” 2019 IEEE Student Conference on
Research and Development (SCOReD), Bandar Seri Iskandar, Malaysia, 2019,
pp. 45-48, doi: 10.1109/SCORED.2019.
[15] N. Mahakalkar, R. Pethe, ‘‘Review of Routing Protocol in a Wireless Sensor
Network for an IOT Application,” 2018 3rd International Conference on
Communication and Electronics Systems (ICCES), Coimbatore, India, 2018, pp.
21-25, doi: 10.1109/CESYS.2018.
[16] M. Priyanga, S. Leones Sherwin Vimalraj, J. Lydia, ‘‘Energy Aware Multiuser &
Multi-hop Hierarchical –Based Routing Protocol for Energy Management in
WSN-Assisted IoT,” 2018 3rd International Conference on Communication and
Electronics Systems (ICCES), Coimbatore, India, 2018, pp. 701-705, doi:
10.1109/CESYS.2018.
[17] Rakesh Kumar Lenka, Amiya Kumar Rath, Suraj Sharma, Building Reliable
Routing Infrastructure for Green IoT Network, IEEE Access 7 (2019) 129892–
129909, https://doi.org/10.1109/Access.628763910.1109/
ACCESS.2019.2939883.
[18] F. Arat, S. Demirci, ‘‘Energy and QoS Aware Analysis and Classification of
Routing Protocols for IoT and WSN,” 2020 7th International Conference on
Electrical and Electronics Engineering (ICEEE), Antalya, Turkey, 2020, pp. 221-
225, doi: 10.1109/ICEEE49618.2020.
[19] R. Prakash, P. Kansal, V. K. Kakar, ‘‘Optimized Hybrid Clustered Protocol for IoT
Heterogeneous Wireless Sensor Networks,” 2019 IEEE Conference on
Information and Communication Technology, Allahabad, India, 2019, pp. 1-6,
doi: 10.1109/CICT48419.2019.
[20] H. Rahman, N. Ahmed, M.I. Hussain, A hybrid data aggregation scheme for
provisioning Quality of Service (QoS) in Internet of Things (IoT),‘‘
Cloudification of the Internet of Things (CIoT), Paris 2016 (2016) 1–5,
https://doi.org/10.1109/CIOT.2016.7872917.
[21] C. Luo, F. Wu, J. Sun, and C. W. Chen, ‘‘Compressive data gathering for large-
scale wireless sensor networks,” in Proc. 15th ACM MobiCom, pp. 145-156,
2009
[22] A. Alkhamisi, M.S.H. Nazmudeen, S.M. Buhari, ‘‘A cross-layer framework for
sensor data aggregation for IoT applications in smart cities”,, IEEE International
Smart Cities Conference (ISC2), Trento 2016 (2016) 1–6,https://doi.org/
10.1109/ISC2.2016.7580853.
[23] S. Swathi, H. K. Yogish, ‘‘Efficient-CSDA (Consensus based) Approach to
Achieve Secure Data Aggregation,” 2018 International Conference on
Electrical, Electronics, Communication, Computer, and Optimization
Techniques (ICEECCOT), Msyuru, India, 2018, pp. 355-361, doi: 10.1109/
ICEECCOT43722.2018.
[24] Emma Fitzgerald, Michal Pioro, Artur Tomaszwski, Energy-Optimal Data
Aggregation and Dissemination for the Internet of Things, IEEE Int. Things J.
5 (2) (2018) 955–969, https://doi.org/10.1109/JIoT.648890710.1109/
JIOT.2018.2803792.
[25] A. K. Idrees, W. L. Al-Yaseen, M. A. Taam and O. Zahwe, ‘‘Distributed Data
Aggregation based Modified K-means technique for energy conservation in
periodic wireless sensor networks,” 2018 IEEE Middle East and North Africa
Communications Conference (MENACOMM), Jounieh, 2018, pp. 1-6, doi:
10.1109/MENACOMM.2018.8371007.
[26] N. Chandnani, C. N. Khairnar, ‘‘Efficient Data Aggregation and Routing
Algorithm for IoT Wireless Sensor Networks,” 2019 Sixteenth International
Conference on Wireless and Optical Communication Networks (WOCN),
Bhopal, India, 2019, pp. 1-7, doi: 10.1109/WOCN45266.2019.
[27] Kalaivanan Karunanithy, Bhanumathi Velusamy, Cluster-tree based energy
efficient data gathering protocol for industrial automation using WSNs and
IoT, J. Indust. Informat. Integrat. 19 (2020) 100156,https://doi.org/10.1016/j.
jii.2020.100156.
[28]Hanady M. Abdulsalam, Bader A. Ali, Eman AlRoumi, EmanAlRoumi, ‘‘Usage of
mobile elements in internet of things environment for data aggregation in
wireless sensor networks”, Comput. Electr. Eng. 72 (2018) 789–807.
[29] Amarlingam M, Pradeep Kumar Mishra, Rajalakshmi, P., Sumohana S.
Channappayya, C.S.Sastry, ‘‘Novel Light Weight Compressed Data
Aggregation using sparse measurements for IoT networks”, J. Network
Comput. Appl., Vol. 121, 1 November 2018, Pages 119-
[30] Mr.K. Muruganandam, Dr.B. Balamurugan, Dr.Sibaram Khara, ,Design Of
Wireless Sensor Networks For IOT Application : A Challenges and survey,
ijecs, 26 March 2018, Page No.: 23790-
[31] J. Claessens. Trust, Security, Privacy, and Identity perspective. Panel on Future
Internet Service Offer, 2008
```
