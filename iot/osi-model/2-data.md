## OSI Layer 2 (Data Link): Ethernet/Wi‑Fi, MAC, switching, and ARP

Layer 2 answers: **how do I deliver data across one local link/LAN hop?**

Layer 3 (IP) gets you “end-to-end routing”. Layer 2 gets you “deliver to the next hop on this network segment”.

For backend engineers, Layer 2 is where you debug:
- “one host can’t reach the gateway” (ARP issues)
- intermittent connectivity inside a subnet
- duplicate IPs, MAC flaps, broadcast storms
- VLAN / segmentation mistakes (classic in enterprise + cloud-on-prem + some K8s setups)

---

## The mental model: frames on a local network (one hop)

On a LAN, traffic is delivered as **frames** identified by **MAC addresses**.

- **MAC address**: “which network interface on this local network?”
- **IP address**: “which host/network globally?”

When sending to an IP on the same subnet, your machine needs to learn:  
**“What MAC address corresponds to that IP?”**  
That mapping is **ARP** (IPv4) or **Neighbor Discovery** (IPv6).

---

## Switching: how a switch forwards frames

A switch builds a **MAC table** by observing source MACs:

```
MAC aa:bb:cc -> port 7
MAC 11:22:33 -> port 2
```

Then:
- if destination MAC is known → forward only to that port
- if unknown → flood (broadcast-like) until learned

Backend implication: when the switch is forced to flood a lot (unknown MACs, churn), you can see **latency spikes** and **loss** that look like “app flakiness”.

---

## Broadcast domains: why “local noise” can hurt everything

Layer 2 has broadcasts (e.g., ARP “who has 10.0.1.5?”). Broadcast traffic goes to all devices in the broadcast domain.

If broadcast volume is high (misconfig, loops, storms), it can:
- consume bandwidth
- overload NICs and kernel networking
- increase latency and packet loss for “normal” traffic

---

## VLANs: segmentation at Layer 2

**VLANs** partition one physical network into multiple logical Layer 2 networks.

Practical use:
- isolate environments/tenants
- reduce broadcast blast radius
- enforce network policy boundaries

Failure modes:
- wrong VLAN tag on a port → host “can’t reach anything” even though link is up
- trunk/access mismatch → intermittent or one-way connectivity

---

## ARP: the most common Layer 2 concept you’ll hit

ARP is basically “local DNS for IP→MAC”.

### Normal flow
1) Host needs MAC for an IP on the LAN  
2) Broadcast ARP request: “Who has 10.0.1.5?”  
3) Owner replies with its MAC  
4) Sender caches it for a while (ARP cache)

### Backend-relevant ARP failure modes

- **Duplicate IP**
  - two machines claim the same IP → ARP cache flaps → intermittent reachability
  - symptoms: “sometimes connects to the wrong box”, random resets/timeouts

- **ARP cache poisoning / spoofing** (security)
  - attacker claims “gateway IP is my MAC” → MITM
  - mitigations: network controls, segmentation, higher-layer encryption (TLS/mTLS)

- **ARP storms**
  - excessive ARP broadcasts (often from misconfig or large flat networks)
  - symptoms: general slowness inside a subnet

---

## Wi‑Fi vs Ethernet at Layer 2 (why clients behave differently)

Ethernet (wired):
- stable, low loss, predictable latency

Wi‑Fi (wireless):
- shared medium, contention, interference
- higher jitter/loss; roaming causes brief disconnects

Backend implication:
- mobile/Wi‑Fi clients need robust retry/backoff + idempotency + resumable flows

---

## What Layer 2 problems look like from an application

Layer 2 issues often masquerade as Layer 4/7 errors:
- intermittent timeouts
- connection resets
- sporadic DNS failures (because DNS is a network call)
- “only one host is bad” (bad cable/port, wrong VLAN, ARP cache weirdness)

Pattern recognition:
- if failures cluster by **rack/host/subnet**, suspect L2/L1/L3 before blaming code

---

## Practical debugging playbook (backend-friendly)

Even without switch access, you can gather strong signals:
- If **IP is reachable from some hosts but not others** on same subnet → suspect ARP/VLAN/L2 boundary.
- If one host can’t reach gateway but link is up → suspect ARP cache, duplicate IP, VLAN tagging.
- If issues are **bursty** and affect many hosts in the same subnet → suspect broadcast storm or loop (ops/network team will confirm via switch metrics).

If you have host access, ask/collect:
- ARP table entries (do they flap? wrong MAC?)
- interface error counters (CRC, drops)
- MAC address changes (on VMs/containers, can change with redeployments)

---

## Production takeaways

- Layer 2 is “local delivery”. When it’s wrong, everything above it looks flaky.
- ARP and broadcast domains are the big practical levers: keep networks segmented and avoid huge flat L2 domains when possible.
- Even as a backend engineer, knowing L2 helps you quickly distinguish **software bugs** from **network plumbing failures**.

