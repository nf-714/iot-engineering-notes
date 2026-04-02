## OSI Layer 5 (Session): long-lived conversations, state, and failure recovery

Layer 5 is about **managing a “conversation” over time**:
- establishing context (“who are you?”, “what are we doing?”)
- keeping it alive across multiple messages/requests
- resuming/recovering after interruptions
- coordinating multiple related streams

In modern Internet stacks, session concepts are often implemented in:
- **HTTP cookies + server-side session stores**
- **TLS sessions / resumption**
- **WebSockets** (long-lived bidirectional sessions)
- **gRPC streams**
- **database connections** (connection is a session!)
- **authentication tokens** (session-like state, even when “stateless”)

For backend engineering, Layer 5 is where you debug:
- “users randomly logged out”
- “sticky sessions required?” and why that’s a smell
- “WebSockets keep dropping”
- “connection pools go bad after deploy”

---

## The mental model: a session is “shared context + liveness”

A session usually needs:
- **Identity**: who is this party? (auth)
- **State**: what have we agreed so far? (negotiation, sequence, subscriptions)
- **Liveness**: is the other side still there? (heartbeats/keepalive)
- **Recovery**: what happens after reconnect? (resume vs restart)

If you don’t define recovery semantics, outages become data bugs.

---

## Common session implementations in production

### 1) Browser sessions (cookies)
- Cookie holds a **session ID** (opaque) or a **token** (JWT-like).
- Server maps session ID → state in Redis/DB.

Failure modes:
- session store eviction or partition → “logged out”
- clock skew (token exp/nbf issues)
- cookie domain/path misconfig → “works on one subdomain only”

### 2) “Stateless” tokens (JWT)
JWT reduces server-side session state, but you still have session-like concerns:
- key rotation
 - revocation (hard problem)
- replay risk and binding (audience/issuer, nonce, DPoP-like patterns)

### 3) WebSockets / long polling / SSE
Long-lived sessions are sensitive to:
- NAT/LB idle timeouts
- mobile network changes
- proxy buffering

You almost always need:
- **ping/pong heartbeats**
- **reconnect with backoff + jitter**
- **resume logic** (last event id / cursor / offset)

### 4) Connection pools (DB/HTTP clients)
Pools are session managers:
- they reuse expensive setup (TCP+TLS+auth)
- they must detect “stale” connections

Failure modes:
- deploy rotates certs → pooled connections break
- server restarts → pool has dead sockets
- LB closes idle connections → broken pipes

---

## Sticky sessions: what they are and why you should avoid them

Sticky sessions route a client consistently to the same backend instance (LB cookie or IP hash).

They help when session state is in-memory, but create problems:
- uneven load distribution
- poor failover (instance loss logs users out)
- hard horizontal scaling

Preferred pattern: store session state in a **shared store** (Redis) or use **stateless tokens** with careful security design.

---

## Session lifetime: renewal, expiration, and “logout semantics”

You need to choose:
- absolute lifetime (max session age)
- idle timeout (expire after inactivity)
- renewal strategy (sliding vs fixed)

Backend best practice:
- keep access tokens short-lived
- use refresh tokens (or server-side sessions) with rotation and revocation strategy
- log and monitor auth failures separately from general 4xx

---

## Practical debugging playbook

When “sessions are broken”, ask:
- **where is the state stored?** (cookie only, Redis, DB, in-memory)
- **is traffic routed consistently?** (sticky sessions? multi-region?)
- **are long-lived connections being killed?** (LB idle timeout, NAT, proxy)
- **is recovery/resume defined?** (cursor-based resume vs “start over”)

High-signal telemetry:
- reconnect rate
- auth refresh failures
- session store latency/errors
- WebSocket close codes / durations

---

## Production takeaways

- Sessions are “state + time”. If you don’t design expirations and recovery, you’ll get correctness bugs during outages.
- Prefer architectures that don’t require stickiness: shared session stores, stateless auth, and resumable streams.
- Treat connection pools as session systems: health-check and refresh them intentionally.

