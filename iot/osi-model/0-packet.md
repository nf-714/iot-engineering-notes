### What’s a packet?

A **packet** is a **small, structured chunk of data** that a network sends from one place to another. It’s the unit that the **IP layer (Layer 3)** routes across networks.

---

### Visualize it: “Russian dolls” (encapsulation)

When your backend sends an HTTP request, the bytes are wrapped like this:

```
Ethernet / Wi‑Fi FRAME (Layer 2)  [one local hop: host -> next router]
┌───────────────────────────────────────────────────────────────────────────┐
│ L2 Header │                 IP PACKET (Layer 3)                     │ L2  │
│(MAC src/dst)┌───────────────────────────────────────────────────────┐Trailer│
│             │ IP Header │        TCP SEGMENT (Layer 4)             │ (CRC) │
│             │(src/dst IP)┌─────────────────────────────────────────┐       │
│             │            │ TCP Header │  APP DATA (HTTP, etc.)     │       │
│             │            │(src/dst port)                           │       │
│             │            └─────────────────────────────────────────┘       │
│             └───────────────────────────────────────────────────────┘       │
└───────────────────────────────────────────────────────────────────────────┘
```

**Key point**: “packet” usually means the **IP packet** (IP header + its payload). The Ethernet/Wi‑Fi **frame** is what carries that IP packet across a single local link.

### The mental model

Sending data over a network is like shipping goods:

- You don’t ship one giant blob—you split it into **packages (packets)**.
- Each package has a **label (header)** that says where it’s going and how to handle it.
- Routers forward each package hop-by-hop toward the destination.

### What’s inside a packet (practically)

- **Header (metadata)**: source IP, destination IP, TTL (hop limit), protocol (TCP/UDP), etc.
- **Payload (data)**: the actual content being carried (part of a TCP stream, a UDP datagram, etc.)

---

### Visualize one concrete example (typical backend call)

Imagine your service `10.0.1.10` calls a database `10.0.2.20` over TCP `5432`.

**TCP segment (Layer 4):**

```
┌───────────────────────────────────────────────────────────────┐
│ TCP hdr: src port=51032, dst port=5432, seq/ack, flags, win...│
├───────────────────────────────────────────────────────────────┤
│ Payload: bytes for "SELECT ..." (or TLS-encrypted bytes)       │
└───────────────────────────────────────────────────────────────┘
```

**IP packet (Layer 3) carrying that TCP segment:**

```
┌───────────────────────────────────────────────────────────────┐
│ IP hdr: src=10.0.1.10, dst=10.0.2.20, TTL=64, proto=TCP       │
├───────────────────────────────────────────────────────────────┤
│ Payload: the TCP segment above                                 │
└───────────────────────────────────────────────────────────────┘
```

**Ethernet frame (Layer 2) carrying the IP packet on one hop:**

```
┌───────────────────────────────────────────────────────────────┐
│ L2 hdr: src MAC, dst MAC(next hop), ethertype=IPv4            │
├───────────────────────────────────────────────────────────────┤
│ Payload: the IP packet above                                   │
├───────────────────────────────────────────────────────────────┤
│ L2 trailer: FCS/CRC                                             │
└───────────────────────────────────────────────────────────────┘
```

On the *next* hop, the **IP packet mostly stays the same**, but the **L2 frame is rebuilt** with different MAC addresses for that link.

### Packet vs related terms (common confusion)

- **Bit**: 0/1 at the wire (Layer 1).
- **Frame**: Layer 2 “envelope” on a local network (Ethernet/Wi‑Fi). A frame _carries_ an IP packet over one hop (e.g., laptop → router).
- **Packet**: Layer 3 unit routed across networks (router to router).
- **Segment (TCP)** / **Datagram (UDP)**: Layer 4 units carried _inside_ an IP packet.
- **Message (HTTP/gRPC)**: Layer 7 concept carried over TCP/UDP (often split across many packets).

### Why backend engineers care

Packets are why you see:

- **MTU issues** (too-large packets → fragmentation or drops → weird timeouts)
- **Loss/jitter** (dropped packets → TCP retransmits → p99 latency spikes)
- **Routing problems** (packets take bad paths → latency or outages)

---

### Quick Wireshark mapping (so the words line up)

- If you click an **Ethernet II** section: you’re looking at a **frame** (Layer 2).
- If you expand the **Internet Protocol Version 4/6** section: that’s the **packet** (Layer 3).
- If you expand **Transmission Control Protocol**: that’s the **segment** (Layer 4).
- If you expand **Hypertext Transfer Protocol**: that’s the **application message** (Layer 7).
