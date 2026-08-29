# Introduction

IoT refers to Internet of Things, where a network of low-powered devices are interconnected to the internet. IoT device communicates with each other without any human interference. IoT are widely used on different platform for automation that impacts the productivity of a certain work into 10x times better. On today's modern world, IoT devices has expanded from smart homes to hospitals to garments sector, revolutionizing each sectors through automative workflows. However, IoT struggles to scale sometime due to it's low-powered features such as: less ram, less energy and less storage problem. To enable effective communication with security and reliability, IoT engineers requires to develop solutions (such as. networking protocols, architectures) that would let them design IoT infrastructure at scale.

This report analysis four research paper that explores different aspects of IoT communication and networking. The first paper discuss whether **ICN or NDN** has the potential to be a better communication model rather than usual and regular **6LoWPAN / IPv6 / RPL / UDP** stack. The second paper focuses on the **standard IP-based IoT protocol stack** explaining how IoT communication works on each layers and how each layers are connected to one another. Third research paper focuses on **wireless sensor networks** evolving into IoT systems. It focuses less on networking protocol but more into **WSN integration to IOT.** Fourth research paper suggest on how **IoT based WSN** devices can effectively operates on energy-effecient devices. It discusses on how someone can use resources effectively between a bunch of Wireless Sensor Network on an IoT Device.

The purpose of this report assignment is to summarize each papers and their approaches to recognize different IoT networking challenges and then perform a contrastive analysis between each of their methodologoies, objectives, findings and finally

# Overview of Selected Papers

### **1. Information-Centric Networking in the IOT: Experiments with NDN in wild**

The name of the first paper is **Information-Centric Networking in the IOT: Experiments with NDN in wild.** The main goal of the paper is whether ICN is practical for constrained IoT devices and if it can compete with common IoT stack `6LoWPAN / IPv6 / RPL / UDP`. Most IoT devices are constraineds by:

- much lower power budgets
- much weaker processing capability
- much smaller memory capacity

The author suggested using ICN in IOT as it can help IoT devices to reduce the use of **energy and resources** while providing high content and output with reduced protocol complexity. ICN distributed data through **hop-by-hop replication, in-network caching, name-based retrieval.** ICN helps to IoT to get data while on demand and received scheduled content updates.

The author also discussed several trade offs while using ICN in IoT. Firstly, fresh sensor data may conflict with caching. Secondly, on tiny devices, routing and forwarding state in ICN may stress. Finally, unoptimized cache content can enable cache content and forwarding structures consume too much system memory.

The author also discussed NDN, Named Data Networking. NDN helps IoT devices as data can to be cached and repeated request can be served more effeciently. The main purpose of this research paper were to experiment:

- Whether NDN can run on real constrained IoT hardware
- Whether routing and caching can reduce traffic and radio transmissions
- How optimized NDN using `RONR + caching` compares with `6LoWPAN / IPv6 / RPL / UDP`

#### **Whether NDN can run on real constrained IoT hardware**

**Yes, The author ported CCN-Lite to ROIT OS and tested it on a real 60-node IoT deployement that were spread across the floors. The author argued, NDN is feasible on such devices if it's carefully designed for constrained devices. Additionally, ICN/NDN setup has optimized and smaller memory footprint than conventional 6LoWPAN / RPL stack in their experiment.**

#### **Whether routing and caching can reduce traffic and radio transmissions**

Author implemented a simple method Vanilla Interest Flooding (VIF). VIF enable to every interest packet to broadcast widely even thoug, it causes a lot of unnecessary traffic. So, author proposed RONR (Reactive Optimistic Name-based Routing), which enables him to reduce radio transmission by 50%, compared with plain flooding in the single-consumer case. He also added small caches that enables the IoT devices to lead up to 50% fewer transmissions.

#### **How optimized NDN using** `RONR + caching` **compares with** `6LoWPAN / IPv6 / RPL / UDP?`

According to author, NDN can be pretty optimized with RONR and Caching if used carefully compares with traditional IOT stack. It gained advantage due to it's integration with proper caching and RONR.

On conclusion of paper one, the author don't claim NDN to be a universal solution in every IoT scenario. NDN performs well but if more work needed than traditional IoT stack suits better.

### 2. A Survey on the IETF Protocol Suite for the Internet of Things: Standards, Challenges, and Opportunities

On the 2nd Paper, The author discusses the potential and some negitive points for the traditional stack IEEE 802.15.4, **6LoWPAN**, **RPL**, **CoAP over UDP** and how it's shaped today's modern IoT landscape. The paper surveys the main IETF IoT standards and highlights the open challenges and opportunities that remain for future research. On paper one, this stack were used against NDN/ICN to challenge it's effeciency.

According to the author, `6LoWPAN / IPv6 / RPL / CoAP`is a important standard for the IoT devices of modern ages. It's an important foundation. Even though, it's a foundational standard. the paper pointed out its difficulty for making IOT devices turning into scalable, robust, cheap and energy-effecient.

This paper discussed each of the layer / stack of the standard approaches and pointed out some weak side of those. According to the author, This stack is real standard to deal with IP-Style IOT. But deployement is still hard.

On a interesting note, the author discuessed the **Content-Centric Networking (CCN)** and he believes it can be a possible alternative to the standard IP-Based IOT Approach

So, throughout the whole paper, the author explained the goods and bads of the standard while stating that, the standard are still valuable but it's not overly optimistic and repetedly stresses practical limit.

### 3. Review Paper onEvolution of WSN toward the Internet of Things.

The paper treats WSN as an important technology for IoT. The authors point out that many sensors run on different, often proprietary stacks tied together with custom gateways, which creates isolated islands. To make legacy and new devices work together, they stress **open standards** (especially **IPv6**, **6LoWPAN**, **CoAP**) and **middleware** such as **GSN** with virtual sensors, so applications see a unified logical layer.

### 4. A Review Paper on Wireless Sensor Network Techniques in Internet of Things (IoT)

The fourth paper is all about creating IoT-based WSN devices that are energy effecient and good at data aggregation. It explained how radio dominates the power usage, survey challenges and catalogs aggegation oriented techniques. the paper mainly provided importance on how to spend less radio transmission and extend network lifetime by not defining a single new networking stack.

# Contrastive Analysis

The four paper discusses how IoT can operate on scale even if it's constrained by energy, memory and heterogeneity. Each of the paper explained in their own way that differs the questions, method and the layer of focus.

The paper one provided an architectural paradigm to tackle the weakness of **6LoWPAN / IPv6 / RPL / UDP.** It introduces NDN/ICN stack that has the potential to fulfill the lack of traditional stack but at the conclusion, the author argued to use this stack with carefullness to unleash it's full potential. Paper 2 explained and criticized the **IETF IP-based stack** layer by layer. Paper 3 discuesses Wireless Sensor Networks evolution into IOT. Paper 4 explained the prior work on **WSN-in-IoT** with emphasis on **energy** and **in-network data aggregation.**

Paper 2 prefers 6LoWPAN, RPL, CoAP/UDP as central architecture for IOT, despite of listing open problems at each layer. Paper 1 uses the same stack to compare and shows how NDN/ICN can reduce transmissions and memory when tuned in but not as a universal replacement. Paper 3 aligns with IP for new deployments but argues practical IoT must still absorb ZigBee-class and other legacy systems via gateways and middleware. Paper 4 does not focus on naming or routing standards; it treats communication cost as the driver and pushes aggregation, clustering, and signal-processing-style savings above or across strict per-layer descriptions.

The most interesting thing is, all four of the **radio use and protocol overhead** matter. No single scenario can solve the universal problem of IoT devices. As paper 1 solves the one thing, paper two solves another thing. With solutions, there are challenges that IoT developers need to tackle in order to make their system efficient.

Additionaly, two of these papers were fascinated by the idea of ICN / content-centric ideas, while other don't. paper 1 implements and evaluates ICN/NDN. While, paper 2 mentions CCN briefly as a possible alternative research direction to pure IP-CoAP IoT. On the other hand, paper 3’s integration story is middleware and gateway centric, not ICN-first. Additionally, paper 4 stays focused on efficiency and security of data handling, not on named-data networking.

# Conclusion

The methodologies and other factor of these four paper might be different. But, they offer the same objective, to reduce radio transmission, utilize caching for memory optimization and use IP-based standard to connect IOT devices. All of the methods has pros and cons, a engineer's job is to choose the optimal way for architecting and designing IoT Based Systems that scales with effeciency
