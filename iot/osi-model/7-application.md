## OSI Layer 7 (Application): protocols your backend actually speaks

Layer 7 is where network communication becomes **business behavior**:
- HTTP/HTTPS APIs
- gRPC service-to-service calls
- WebSockets/SSE real-time streams
- DNS lookups as app dependencies
- auth, rate limits, caching, and content negotiation

If Layers 1-6 move and protect bytes, Layer 7 decides **what those bytes mean to users and services**.

For backend engineers, Layer 7 is where outages are visible:
- 4xx/5xx spikes
- latency regressions
- retries causing load amplification
- auth/session failures

---

## The mental model: request pipeline and budgets

A single API request usually goes through:

1) DNS resolution  
2) TCP connect + TLS handshake  
3) HTTP/gRPC request/response  
4) App logic + downstream calls (DB, cache, other services)  
5) Response serialization/compression

Your job is to manage **time budget + failure budget** across this chain.

Example: 2s end-to-end budget at the edge
- gateway timeout: 2s
- service A timeout to B: 800ms
- service B timeout to DB: 200ms

If inner timeouts are longer than outer timeouts, you create retry storms and duplicate work.

---

## HTTP/HTTPS in production (most common Layer 7 workload)

### Request/response semantics that matter

- **Method semantics**
  - GET should be safe
  - PUT/DELETE are usually idempotent
  - POST is often non-idempotent unless you design idempotency keys

- **Status code discipline**
  - 2xx success
  - 4xx caller/input/auth issues
  - 5xx server/dependency issues

Clean status code usage is critical for retries, SLOs, and incident response.

### Headers and proxy chains

Behind LBs/proxies, preserve and validate:
- `X-Forwarded-For` / `Forwarded` (client IP chain)
- `X-Forwarded-Proto` (original scheme)
- trace headers (`traceparent`, request IDs)

If not standardized, logs and security controls become misleading.

### HTTP versions in practice

- **HTTP/1.1**: keep-alive required to avoid connection churn
- **HTTP/2**: multiplexing improves efficiency, common for gRPC
- **HTTP/3**: QUIC over UDP; better under some loss patterns, different operational footprint

---

## DNS is a Layer 7 dependency (and frequent outage root cause)

Application calls rely on DNS correctness and freshness.

Failure patterns:
- stale DNS cache after endpoint move
- low TTL assumptions not honored by all resolvers/clients
- resolver outages causing broad app failures

Mitigations:
- monitor DNS lookup latency/error rates
- use resilient resolver setups
- avoid excessive per-request DNS lookups by reusing connections and sane client behavior

---

## gRPC, REST, and WebSockets: choosing by workload shape

### REST/HTTP JSON
- best for external APIs and interoperability
- easier debugging, larger payloads, looser contracts

### gRPC + Protobuf
- strong contracts, binary efficiency, streaming support
- ideal for internal microservice traffic
- requires schema governance and tooling discipline

### WebSockets / SSE
- long-lived real-time channels
- need heartbeats, reconnect with backoff + jitter, and resume semantics

Pick based on traffic pattern:
- request/response CRUD: REST
- high-throughput internal RPC: gRPC
- server push / real-time: WebSocket/SSE

---

## API gateways and reverse proxies at Layer 7

Gateways/proxies commonly handle:
- authn/authz checks
- TLS termination
- rate limiting
- routing and canary traffic
- request/response transformations

Common failure mode:
- timeout mismatch between gateway and upstream services
  - gateway times out early -> client retries
  - upstream still processing -> duplicate load

Always align:
- request body limits
- header size limits
- idle/read/write timeouts

---

## Caching semantics: speed vs correctness

At Layer 7, caching can happen in browser, CDN, gateway, or service.

Use headers intentionally:
- `Cache-Control`
- `ETag` / `If-None-Match`
- `Last-Modified` / `If-Modified-Since`

Common mistakes:
- caching user-specific responses without proper keys
- no invalidation strategy (stale data incidents)
- caching error responses unintentionally

---

## Rate limiting and overload protection

Rate limiting protects:
- availability
- fairness
- cost

Typical models:
- token bucket
- sliding window

Operational pattern:
- return `429 Too Many Requests`
- include retry hints when possible
- log limit-key dimensions (IP, user, API key, tenant)

Pair with:
- circuit breakers
- bounded queues
- backpressure and admission control

---

## Security at Layer 7

Core controls:
- strong authentication (OIDC/JWT/mTLS where appropriate)
- authorization checks close to resource access
- input validation and output encoding
- WAF/rule protections for known attack patterns

Common real incidents:
- trusting spoofable headers from untrusted hops
- missing auth on “internal” endpoints exposed by routing mistakes
- excessive token/session lifetime

---

## Practical Layer 7 debugging playbook

When users say “API is slow/down”, quickly split where time is spent:
- DNS
- connect/TLS
- server processing
- downstream dependencies

Use:
- `curl -v` and timing breakdowns
- gateway logs (upstream status, upstream latency)
- distributed traces (edge -> service -> DB/cache)
- per-endpoint p50/p95/p99 + error rate dashboards

High-signal metrics:
- request rate, error rate, latency (RED)
- timeout and retry counters
- 4xx/5xx by route/method
- saturation (thread pools, connection pools, queue depth)

---

## Production takeaways

- Layer 7 is where users feel networking.
- Most severe incidents are not one bug; they are interactions between **timeouts, retries, routing, and dependency slowness**.
- Senior backend engineering means designing APIs and gateways with explicit budgets, idempotency, observability, and graceful degradation.

