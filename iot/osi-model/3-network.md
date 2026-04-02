## OSI Layer 3 (Network): IP, routing, and “where packets go”

Layer 3 answers: **which network is the destination on, and what next hop should I send to?**

If Layer 2 is “deliver a frame on _this_ link”, Layer 3 is “deliver a packet _across networks_”.

For backend engineering, Layer 3 is where you debug:

- “works on my machine but not in prod” (subnets, routes, NAT)
- cross-AZ / cross-region connectivity
- intermittent reachability (route flaps, asymmetric paths)
- MTU black holes and fragmentation weirdness

---

## The mental model: a packet is forwarded hop-by-hop

An **IP packet** has:

- **src IP / dst IP**
- **TTL** (hop limit)
- **protocol** (TCP/UDP/ICMP)
- payload (usually a TCP segment or UDP datagram)

Routers forward packets by consulting a **routing table**:

```
destination CIDR -> next hop / interface
10.0.2.0/24      -> local VPC subnet
0.0.0.0/0        -> internet gateway / NAT
```

Each hop decrements **TTL**. If TTL hits 0, routers drop the packet and send back **ICMP Time Exceeded** (this is how traceroute works).

---

## IP addressing, subnets, and why backend engineers must know CIDR

You don’t need to do subnet math in your head daily, but you must recognize what it implies:

- **Same subnet**: hosts can ARP and talk directly (L2 + L3).
- **Different subnet**: traffic goes through a router (default gateway).

### Private IP ranges (IPv4)

- 10.0.0.0/8
- 172.16.0.0/12
- 192.168.0.0/16

In cloud, most of your services live on private IPs. Public access is typically via **load balancers**, **NAT**, or **ingress gateways**.

---

## NAT: why “source IP” is often not what you think

**NAT (Network Address Translation)** rewrites IP addresses (and often ports).

Common patterns:

- **SNAT / outbound NAT**: private -> public for egress (instances in private subnets reaching the internet).
- **DNAT**: public -> private for inbound (less common directly; LBs/ingress usually handle this).

Backend implications:

- **IP-based allowlists**: you must know the NAT egress IP(s), not the instance IPs.
- **Client IP visibility**: at the application, you often see the LB/proxy IP unless headers like `X-Forwarded-For` or `Forwarded` are correctly set and trusted.
- **Port exhaustion**: high outbound connection rates through one NAT can exhaust ephemeral ports, causing sporadic connect failures.

Symptoms of NAT/egress trouble:

- spikes in connect errors to external APIs
- intermittent timeouts, often correlated with traffic bursts

---

## Routing failures you’ll actually see

### 1) “No route to host” / unreachable

Usually:

- missing route table entry
- wrong subnet association
- security group/NACL blocking (not L3 strictly, but shows up similarly)

### 2) Asymmetric routing

Request goes A -> B one path, response goes B -> A a different path and gets dropped by a stateful firewall/NAT.

Symptoms:

- SYNs seen, SYN-ACKs never arrive
- intermittent connectivity depending on which node you hit

### 3) Route flaps / BGP instability (more advanced)

Less common in a single VPC, but real in hybrid, multi-region, or on-prem:

- intermittent spikes
- traceroute path changes

---

## MTU and fragmentation: “it hangs only for large payloads”

**MTU** = maximum packet size on a link (commonly 1500 bytes on Ethernet; can be larger with jumbo frames).

If a packet is too large:

- it may be **fragmented** (IPv4) OR
- it may be dropped if fragmentation is not allowed and “Packet Too Big” signaling is blocked (classic **PMTUD black hole**)

Backend symptom pattern:

- small requests OK
- large requests (large headers, big payloads, gRPC, TLS records) hang or timeout

What to do:

- reduce payload size / enable compression carefully
- ensure ICMP “Packet Too Big” is not blocked where needed
- align MTU across tunnels/overlays (VPN, Kubernetes overlay networks)

---

## ICMP: not “optional” in practice

ICMP powers:

- ping (Echo)
- traceroute (Time Exceeded)
- PMTUD (Packet Too Big / Fragmentation Needed)

Blocking all ICMP can create “mysterious” performance/path problems.

---

## Practical debugging playbook (backend engineer version)

When connectivity is broken, isolate where:

- **Name resolution**: `nslookup your-host`
- **Reachability**: `ping ip` (note: ping can be blocked; absence isn’t proof)
- **Path**: `tracert ip` (Windows) to see hop changes/timeouts
- **Transport confirmation**: `curl -v https://host` to see DNS/connect/TLS timing

When only _some_ nodes fail:

- compare subnets/route tables of good vs bad nodes
- suspect asymmetric routing or security boundary differences

When only _large_ payloads fail:

- suspect MTU/fragmentation/PMTUD

---

## Production takeaways

- Layer 3 is the “plumbing”: most outages are not exotic—**routes, NAT, MTU**.
- Prefer architectures where apps don’t need to know networking quirks: use **L7 gateways/LBs**, consistent **egress**, and **observability** (connect errors, handshake timings, tail latency).
