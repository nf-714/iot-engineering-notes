## OSI Layer 6 (Presentation): data formats, encoding, and encryption (TLS)

Layer 6 is about **how bytes represent meaning** and how to transform them safely:
- **serialization / data formats** (JSON, Protobuf, Avro)
- **character encoding** (UTF‑8, UTF‑16)
- **compression** (gzip, brotli)
- **encryption/integrity** (TLS in practice is often taught here, even if it spans layers)

For backend engineering, Layer 6 is where you debug:
- “it works locally but prod clients can’t parse it”
- “garbled text / emoji breaks” (encoding)
- sudden latency regressions after enabling compression or TLS changes
- certificate/handshake failures
- payload bloat and MTU/tail latency issues from huge headers

---

## The mental model: same bytes, different interpretations

Two systems can exchange the same bytes and still fail if they disagree on:
- schema (fields, types)
- encoding (UTF‑8 vs something else)
- framing (where one message ends)
- compression/encryption settings

So Layer 6 is “make sure both sides interpret bytes the same way”.

---

## Encoding: UTF‑8 is the default for the web (and still easy to break)

Most modern APIs should standardize on:
- request/response body: **UTF‑8**
- explicit `Content-Type` with charset when relevant (e.g., `application/json; charset=utf-8`)

Common failure modes:
- double-encoding (encoding UTF‑8 bytes as if they were Latin-1)
- mixing UTF‑16 strings with byte lengths (length != character count)
- logging/DB layers that assume a different collation/encoding

Production symptom: “only fails for certain users/languages/emoji”.

---

## Serialization: choose formats based on boundaries and change rate

### JSON (typical public HTTP APIs)
- **Pros**: human-readable, ubiquitous tooling
- **Cons**: larger payloads, slower parsing, ambiguous numeric types

### Protocol Buffers / gRPC
- **Pros**: compact, fast, strongly-typed schemas, great for internal services
- **Cons**: schema management and backward compatibility discipline required

Key backend discipline: **schema evolution**
- only add optional fields in a backward-compatible way
- keep “unknown fields” behavior in mind (especially across languages)

---

## Compression: a latency trade-off, not a free win

Compression reduces bytes over the wire but costs CPU and can add latency.

Rules of thumb:
- compress large responses; skip tiny responses (overhead dominates)
- brotli is great for static assets; gzip is common for APIs
- beware of compressing already-compressed data (images, zip)

Failure modes:
- CPU spikes on services after enabling compression
- proxy/client mismatch on `Content-Encoding`
- decompression bombs (security)

---

## TLS/HTTPS: confidentiality, integrity, and authentication

TLS gives you:
- **Confidentiality**: eavesdroppers can’t read traffic
- **Integrity**: tampering is detected
- **Authentication**: server identity via certificates (and optionally client identity via mTLS)

### Handshake costs (why it shows up in p95/p99)
TLS handshake adds RTTs and CPU.

Mitigations:
- keep connections alive (HTTP keep-alive, HTTP/2 multiplexing)
- enable session resumption where appropriate
- use modern TLS (1.2/1.3) and sane cipher suites

### Certificates: the most common real-world TLS outage
Failure modes:
- expired cert
- wrong SAN/hostname
- incomplete chain
- clock skew (validity window)

Backend best practice:
- automate issuance/renewal (ACME/Let’s Encrypt or managed certs)
- monitor expiry, handshake error rates, and client failures

### mTLS (service-to-service)
mTLS provides client identity at the transport boundary, often used with:
- service mesh (Istio/Linkerd)
- internal APIs requiring strong auth

Operational reality: key rotation and trust bundles become part of your deployment pipeline.

---

## Presentation-layer problems that look like “network issues”

- huge headers (cookies, auth tokens) → larger packets → fragmentation/MTU issues → timeouts
- mismatched compression settings → clients fail to decode
- TLS handshake failures → “connection reset” or “EOF” in clients

This is why senior debugging ties together L3/L4 symptoms with L6 causes.

---

## Practical debugging playbook

- verify encoding and content-type with `curl -v` and headers
- if clients can’t parse: log raw payload sizes, version, and schema IDs
- for TLS: capture handshake errors (client + server), check cert validity and chain
- measure: handshake time, CPU, response sizes, compression ratio

---

## Production takeaways

- Pick defaults: UTF‑8 + JSON (public) / Protobuf (internal) + TLS everywhere.
- Treat compression and encryption as performance features: measure them.
- Most “TLS incidents” are certificate lifecycle problems—solve with automation and monitoring.

