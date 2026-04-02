# ICN and IOT

## What's ICN

**Information-Centric Networking (ICN)** is a class of network designs where communication is about **accessing named content**, not primarily about maintaining an end-to-end transport session to a single origin host. In ICN, data can be **delocalized**: it need not be fetched only via a classic end-to-end stream to one server. Instead, **hop-wise replication** and **in-network caching** can spread information and ease the need for continuous connectivity. The paper studies ICN in IoT using **NDN/CCN** (Named Data Networking / Content-Centric Networking): consumers express interest in content **by name**; the network forwards interests and returns matching data, with caches and routing state as in that stack.

## Why ICN

For the **Internet of Things**, the paper argues ICN can match common patterns such as **on-request** and **scheduled** content retrieval, and can benefit from **cache-assisted, hop-by-hop replication**. **Data fusion** can be supported with lightweight replication logic. Together, these mechanisms may **save energy and radio bandwidth**, **raise availability**, and **reduce complexity**. A further motivation is architectural: ICN can **reduce layering**; in an optimized form it may subsume parts of **network, transport, and elementary application** behavior, which could simplify **autoconfiguration** compared with a deep layered stack. The authors also note a possible **smaller memory footprint** than **6LoWPAN/IPv6/RPL** on constrained devices (they measure this experimentally).

Trade-offs in the paper: **fresh sensor data** can conflict with caching; **actuator-style** or unscheduled traffic may fit classic end-to-end models better; and ICN **routing/forwarding and state** can stress **memory** on very small nodes if not designed carefully.

## What's before ICN

**Before treating the network as “get this name’s data,” the dominant reference in IoT (and the paper’s baseline) is host- and location-centric networking: IPv6 with 6LoWPAN an**d **RPL**, often with **UDP**—an open, layered stack the paper uses as the **reference** to compare against ICN. The introduction also mentions **silo** approaches (e.g. **Zigbee**) versus **open standards**. More broadly, “before ICN” includes **P2P, CDNs**, and classic **TCP/IP** delivery where you connect to **addresses and hosts**; content naming and replication are typically **added above** IP rather than being the core forwarding model.

## What Innovation did ICN do?

In *this* paper, “innovation” includes both **what ICN brings in principle** and **what the authors built and measured**:

- **First large real IoT deployment experiments** with NDN-style CCN (tens of nodes, building-scale), not only simulation or toy networks.
- **Porting CCN-Lite to RIOT** so NDN runs **directly above the link layer** on constrained hardware (aligned with IoT memory limits); open implementation.
- **Interoperable CCN enhancements** evaluated on real radios: **Vanilla Interest Flooding (VIF)** as a minimal-state baseline; **Reactive Optimistic Name-based Routing (RONR)**—after the first chunk, **temporary FIB entries** on the reverse path so later interests can **unicast** instead of flooding, cutting transmissions (about **50%** vs VIF in their single-consumer case).
- Showing **small in-network caches** (e.g. **20 chunks**, ~**2 KB** RAM in their setup) can cut traffic further (up to ~**50%** in a multi-consumer scenario) by shortening unicast paths.
- **First experimental comparison** of their CCN setup with **6LoWPAN/RPL/UDP**, reporting roughly **three times** more transmissions for RPL/UDP in their scenario (proactive **control traffic** plus **no path caching** like ICN’s content store).
- Additional mechanisms discussed (not fully evaluated in the paper): **Content Forwarding Aggregation (CFA)** and **Opportunistic Near-Path Caching (ONPC)**.

At a high level, ICN’s “innovation” in the paper is **naming data**, **interest/data forwarding**, **in-network caching**, and **IoT-specific routing** that keeps **control traffic low** and **state small**—while the authors stress remaining work (e.g. **header compression / fragmentation** for tiny MTUs, IoT-specific cache policies, and extending the **pull** model toward **push/observe** patterns where needed).