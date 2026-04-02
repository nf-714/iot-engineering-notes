## OSI Layer 4 (Transport): TCP vs UDP and how backends really break

Layer 4 answers: **which process on the host should get this data, and what delivery guarantees do we want?**

It introduces:
- **ports** (multiplexing many apps on one IP)
- **connection state** (for TCP)
- **reliability/ordering** (TCP) vs best-effort (UDP)

For backend systems, Layer 4 is where you debug:
- timeouts and retries
- tail latency explosions under mild packet loss
- “connection reset”, “broken pipe”, “socket hang up”
- connection pool exhaustion and ephemeral port exhaustion

---

## The mental model: TCP is a “reliable byte stream”, not “messages”

**TCP does not preserve application message boundaries.**

Your app writes bytes; TCP delivers bytes **in order** (or fails). “Requests” and “responses” are higher-layer framing (HTTP, gRPC, etc.).

This explains why:
- you can’t assume one `send()` equals one `recv()`
- partial reads/writes happen
- backpressure emerges naturally when receivers can’t keep up

---

## TCP essentials (what matters for production)

### 1) Three-way handshake
SYN → SYN-ACK → ACK

If you see slow “connect time”, it’s usually:
- DNS delay (not L4)
- packet loss on SYN/SYN-ACK
- overloaded server unable to accept quickly
- firewall/LB silently dropping

### 2) Flow control (receiver protection)
Receiver advertises a **window**: “I can accept N more bytes.”

If the receiver is slow (CPU, GC pauses, disk, app threadpool), TCP throughput drops and latency increases.

### 3) Congestion control (network protection)
TCP probes capacity; on loss, it backs off (slow start / congestion avoidance).

Implication: **tiny packet loss can destroy p99 latency**.

### 4) Retransmissions
Lost packets are retransmitted after timeout/dup-acks.

Backend symptom: p50 OK, p99 awful; “random” spikes.

---

## UDP essentials (when you’d choose it)

UDP is connectionless and does not guarantee delivery, ordering, or uniqueness.

You choose UDP when:
- you can tolerate loss or implement your own reliability
- low-latency matters and head-of-line blocking is harmful
- the protocol is designed around UDP (DNS, QUIC/HTTP/3, many real-time systems)

Backend reality: you might not write raw UDP often, but you *use* it via:
- **DNS** (UDP for many queries)
- **QUIC / HTTP/3** (runs over UDP)

---

## Ports, ephemeral ports, and connection pool gotchas

- **Server port**: stable well-known port (e.g., 443, 5432).
- **Client ephemeral port**: short-lived source port chosen by OS.

High-scale clients can hit **ephemeral port exhaustion**, especially behind NAT.

Symptoms:
- sudden spikes in connect failures (EADDRNOTAVAIL)
- only outbound calls failing; inbound still fine
- correlated with traffic bursts or retries

Mitigations:
- reuse connections (keep-alive)
- right-size connection pools
- reduce retry storms (backoff + jitter)
- distribute egress across more IPs/NATs

---

## Timeouts: the #1 senior-backend networking skill

There are multiple timeouts and they must be consistent:
- **connect timeout**: time to establish TCP (and maybe TLS)
- **read timeout**: time waiting for bytes after request sent
- **overall deadline**: end-to-end budget for the operation

Golden rule: **timeouts should get shorter as you go downstream** so failures fail fast and don’t stack.

Example:
- edge request deadline: 2s
- service A → B timeout: 800ms
- service B → DB timeout: 200ms

If downstream timeouts are longer than upstream, you get:
- retries while work is still running
- duplicate load
- amplified outages

---

## Common production failure signatures (and what they often mean)

- **Connection refused**
  - nothing listening on that port OR listener not reachable through LB/Security Group rules
- **Connection timed out**
  - packets dropped/filtered OR routing/NAT path issue OR severe congestion
- **Connection reset by peer**
  - peer closed abruptly (crash, restart, LB idle timeout, proxy behavior)
- **Broken pipe / socket hang up**
  - you wrote to a connection that was already closed
- **Too many open files**
  - local resource exhaustion; not “the network” but manifests as network errors

---

## Keep-alives and idle timeouts (LBs/proxies vs apps)

Many “random resets” are timeout mismatches:
- LB closes idle connections after N seconds
- app thinks connection is reusable and writes → reset/broken pipe

Mitigations:
- align idle timeouts across client, proxy/LB, and server
- enable TCP keepalive where appropriate
- implement safe retry for idempotent operations

---

## Practical debugging playbook

To reason about transport quickly:
- `curl -v https://host` to see connect/TLS timing and failures
- compare failures across instances/AZs (points to path/NAT/LB issues)
- look for p99 spikes + retransmits in packet capture if available

Observability tips:
- record client-side timings: DNS, connect, TLS, TTFB, total
- count retries and surface them in metrics
- track error codes by category (timeout vs reset vs refused)

---

## Production takeaways

- TCP is **reliable**, but reliability is paid with **latency under loss**.
- Most “network flakiness” in backends is **timeouts + retries + connection management** interacting with real networks.
- Treat deadlines as a design artifact, not a config afterthought.

