# Networking

This section is focused on networking s the networking architecture for the autonomous IoT-based mobile home guardian system (AURA-class design). It discusses how the robot, cloud services, and mobile application exchange data over the primary **Wi‑Fi** infrastructure. The design separates **interactive, low-latency control** from **structured telemetry and cloud integration**, using complementary protocols suited to each role.

## Architecture and role of the network layer

The system is organized into four layers:

- Sensor
- Network layer
- Cloud Layer
- Application layer

The network layer enable us to connect with on-device sensors and actuators to remote processing, storage, and user interfaces. Its function is to carry sensor readings, status, commands, and alert payloads between the embedded platform (ESP32), an MQTT broker and related cloud services, and the mobile client.

On our intended deployement, the network layer operates over **IEEE 802.11 b/g/n (2.4 GHz)** in **Station (STA) mode**. When the robot joings the existing home wireless LAN as client. That choice avoids extra home infrastructure and aligns with typical residential routers. The ESP32 integrates a full **TCP/IP stack (LwIP)**, which supports socket-based protocols including WebSocket and MQTT, and enables concurrent handling of communication alongside sensor tasks where the firmware schedule permits.

## Components

#### **Edge node and radio.**

The ESP32 serves as the main microcontroller and wireless hub which provides Wi‑Fi connectivity and sufficient processing for asynchronous networking libraries. It enables us to control and telemetry traffic which do not unnecessarily block time-sensitive sensing loops.

#### **Real-time command and status (WebSocket):**

WebSocket (RFC 6455) is a persistent, full-duplex that channels over one TCP connection and opened with an HTTP Upgrade handshake, low framing overhead and LAN round-trip times typically in the tens of milliseconds. It support joystick-style manual control, mode changes, and prompt alerts to clients. The robot runs a WebSocket server that connects with the the mobile application is a client on the LAN. Handling is event-driven, with safety-relevant ALERT traffic taking precedence over PATROL and MANUAL. Message families include autonomous patrol activation, manual directional control with camera pan, threshold alerts bundling sensor context and imagery where applicable, and periodic or on-demand STATUS (battery, signal strength, mode, recent readings, location). The server may hold multiple simultaneous connections (e.g. several household devices) and broadcast high-priority events to all; clients use reconnection with backoff after transient Wi‑Fi drops.

**Structured telemetry and cloud decoupling (MQTT):**

MQTT is used for **publish–subscribe** that delivery of structured sensor and status data to a cloud-hosted **broker**. The device publishes to hierarchical topics (for example, namespaced by device identifier for gas, flame, motion, environment, location, alerts, and heartbeat/status). Subscribers (analytics, databases, dashboards) consume those topics without the device needing their individual endpoints. MQTT simplifies scaling and evolution of the cloud tier. **QoS 1** is appropriate for alert-related topics to obtain broker acknowledgement and at-least-once delivery. A **Last Will and Testament (LWT)** messages on the broker can signal unexpected disconnects on a status topic so that an unplanned offline state is visible to applications and operators.

**Configuration, bulk transfer, and secure cloud access (HTTP/HTTPS):**

HTTP complements WebSocket and MQTT where a **request–response** model fits with device registration, configuration, **over-the-air (OTA)** firmware updates, bulk log or snapshot retrieval, and uploading camera stills or similar payloads to cloud APIs. Outbound calls which are connected to cloud APIs should use **HTTPS** with TLS and proper certificate validation to protect credentials and binary artefacts.

**Location context.**:

A *GNSS* module (e.g., NEO-6M class) can supply latitude, longitude, and related NMEA-derived data for **geotagging** events and status fields carried over MQTT and WebSocket payloads, supporting situational awareness in reporting and mapping.

Together, these elements implements a **dual-protocol pattern** where 

- WebSocket are used for human-in-the-loop and immediate robot–app interaction
- MQTT for machine-oriented streams and broker-mediated distribution
- HTTP/S for administrative and bulk operations.

## Communication flow

On a periodic schedule, the firmware acquires readings from environmental and safety sensors.Then, It aggregates them (for example as structured JSON) and performs local threshold checks. When no emergency branch is triggered, it **publishes** the data to the appropriate MQTT topics. The broker forwards messages to cloud subscribers andthe application may reflect updated values through its UI path within a small end-to-end delay budget typical of home LAN plus broker processing.

When a monitored quantity crosses a configured limit, the firmware escalates processing by:

1. capturing additional evidence where designed (such as a camera frame)
2. **broadcasting** an alert-class message to WebSocket clients for immediate local awareness,
3. Lastly, **publishing** a high-priority MQTT alert (QoS 1) so cloud services can log the event, drive dashboards, and dispatch mobile push notifications through the vendor push channel. These Wi‑Fi–mediated paths run in parallel where applicable to reduce single-path dependency for alert visibility on-network.

When User-initiated commands arrive over WebSocket, the firmware maps message types to behaviours (patrol, manual driving, acknowledgement of status requests). The priority rules ensure that internal alert generation is not deferred behind routine user traffic.

## Security considerations (summary)

Operational practice should include **TLS for MQTT** to the broker (MQTTS), **HTTPS** for cloud APIs, and **authenticated access** to device-hosted services.

## Future enhancement

The current scope relies on **Wi‑Fi** as the sole wide-area path for robot–cloud–app connectivity. For a later revision and upgraded version, we could add **cellular-based control and communication** (for example LTE-M or NB-IoT modules) to reach the device when the premises LAN is unavailable, to deliver redundant alert channels, or to support limited remote steering and telemetry from outside the home network. Such an extension would require additional power and antenna considerations, cellular data and duty-cycle policies, and security measures appropriate to the public mobile network, integrated alongside the existing Wi‑Fi, WebSocket, and MQTT design rather than replacing it.