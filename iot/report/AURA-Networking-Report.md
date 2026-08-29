**AURA**

Adaptive Universal Robotic Assistant

**Networking Architecture of an Autonomous IoT-Based Mobile Home
Guardian System**

*Academic Technical Report*

  -------------------------- --------------------------------------------
  **Subject**                IoT Systems Design

  **Institution**            University of Liberal Arts Bangladesh (ULAB)

  **Programme**              Bachelor of Business Administration ---
                             Supply Chain & CS Minor

  **Project**                AURA --- Adaptive Universal Robotic
                             Assistant

  **Report Focus**           Networking Layer: WiFi, WebSocket, MQTT, GSM
                             Fallback

  **Date**                   2025
  -------------------------- --------------------------------------------

**Abstract**

This report provides a comprehensive academic analysis of the networking
architecture underpinning AURA (Adaptive Universal Robotic Assistant),
an AI-powered IoT-based autonomous mobile home guardian robot developed
for the Bangladesh market. AURA integrates a **dual-layer networking
model** comprising a primary WiFi stack and a GSM-based cellular
fallback, enabling continuous, real-time communication between the
robot, a cloud processing layer, and a mobile application interface. The
primary network stack employs **WebSocket** for real-time bidirectional
command-and-control and **MQTT over HTTP** for lightweight sensor
telemetry and cloud synchronisation. The GSM fallback layer ensures
uninterrupted alert delivery via SMS during WiFi disruptions --- a
critical reliability provision given Bangladesh\'s infrastructure
realities. This report examines the protocols selected, the rationale
for each architectural decision, the data flow across all four system
layers (Sensor, Network, Cloud, Application), security considerations,
and performance characteristics relevant to a real-time safety-critical
IoT deployment.

**Keywords:** *IoT, AURA, WebSocket, MQTT, GSM, ESP32, autonomous
robotics, home automation, real-time networking, Bangladesh*

**Table of Contents**

**1.** Introduction
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....
4

**2.** System Overview and Four-Layer Architecture
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....
5

**3.** Primary Network Stack: WiFi
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....
6

3.1 ESP32 WiFi Module
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....
6

3.2 WebSocket Protocol for Real-Time Control
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....
7

3.3 MQTT and HTTP for Sensor Telemetry
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....
8

**4.** Fallback Network Stack: GSM Cellular
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....
10

4.1 GSM Module Integration
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....
10

4.2 SMS Alert Mechanism
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....
11

4.3 NEO-6M GPS Module: Location Telemetry
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....
11

**5.** Network Data Flow: End-to-End Communication Model
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....
12

**6.** Protocol Comparison and Selection Rationale
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....
14

**7.** Security Considerations
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....
15

**8.** Performance and Reliability Analysis
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....
16

**9.** Deployment Context: Bangladesh Infrastructure
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....
17

**10.** Conclusion
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....
18

References
\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\...\.....
19

**1. Introduction**

The proliferation of Internet of Things (IoT) devices has fundamentally
transformed the concept of the smart home, enabling environments that
are not merely automated but responsive, adaptive, and connected to
cloud intelligence. AURA represents a significant step beyond
conventional home automation: rather than fixed sensors mounted to
walls, it deploys a mobile autonomous robot that physically patrols a
home, detects multi-dimensional environmental and security threats, and
transmits real-time data to both cloud systems and a mobile application
--- all while remaining remotely operable by the homeowner.

The networking layer is, fundamentally, what transforms AURA from an
embedded sensor platform into an intelligent, remotely aware guardian.
Without reliable, low-latency bidirectional communication, sensor data
remains siloed in the robot\'s microcontroller. With it, every gas
reading, motion event, flame detection, and camera frame becomes
immediately actionable by both an AI processing layer and the homeowner,
regardless of physical distance.

This report analyses the complete networking architecture of AURA,
examining the two-layer network design (WiFi primary, GSM fallback), the
protocols deployed at each layer (WebSocket, MQTT, HTTP, SMS), the
rationale behind each selection, the end-to-end data flow model, and the
security and reliability characteristics of the system. Special
attention is paid to the deployment context of Bangladesh, where
infrastructure limitations --- including frequent power outages, WiFi
instability, and variable network quality --- place unique demands on
the robustness of the networking design.

**2. System Overview and Four-Layer Architecture**

AURA\'s overall system is structured into four discrete but
interdependent layers. Understanding this layered architecture is
essential context for analysing the networking decisions made at each
tier.

  ----------- --------------- ----------------------- ---------------------
  **Layer**   **Name**        **Function**            **Key Components**

  **1**       Sensor Layer    Data acquisition from   MQ-2, Flame ×2,
                              physical environment    HC-SR04 ×3, IR ×2,
                              via sensors attached to MPU-6050, NEO-6M,
                              ESP32                   ESP32-CAM

  **2**       Network Layer   Bidirectional           ESP32 WiFi,
                              transmission of data    WebSocket, MQTT/HTTP,
                              from robot to cloud and GSM Module, NEO-6M
                              application             GPS

  **3**       Cloud Layer     AI inference, alert     Cloud server, MQTT
                              processing, storage,    broker, AI models,
                              analytics dashboard     database, push
                                                      notification service

  **4**       Application     User interface for live Mobile app
              Layer           monitoring, control,    (Android/iOS),
                              alert history, and      WebSocket client,
                              video feed              dashboard, remote
                                                      control UI
  ----------- --------------- ----------------------- ---------------------

*Table 1: AURA Four-Layer System Architecture Overview*

The **Network Layer (Layer 2)** is the focus of this report. It serves
as the connective tissue between the physical sensor reality of the
robot and the digital intelligence of the cloud and user interface.
Every byte of sensor data, every command from the mobile app, and every
alert pushed to the homeowner must transit through this layer --- making
it both the most critical and most failure-sensitive component of the
overall system.

The network layer operates in two distinct modes: a **primary WiFi
mode** used during normal operation, and a **fallback GSM cellular
mode** that activates automatically when WiFi connectivity is lost. This
dual-redundancy design is the central architectural decision examined
throughout this report.

**3. Primary Network Stack: WiFi**

The primary network stack leverages the built-in WiFi capabilities of
the ESP32 microcontroller, operating across three protocol layers: a
WebSocket layer for command-and-control, and MQTT/HTTP for sensor
telemetry and cloud synchronisation.

**3.1 ESP32 WiFi Module**

The ESP32 DevKit V1 serves as AURA\'s main microcontroller unit (MCU).
Critically, it integrates a dual-mode wireless chipset supporting both
**WiFi 802.11 b/g/n (2.4 GHz)** and Bluetooth Low Energy (BLE 4.2),
making it uniquely suitable as the networking hub for an autonomous IoT
robot.

The ESP32\'s WiFi stack operates in **Station (STA) mode**, connecting
AURA to the home\'s existing WiFi network as a client. This enables
seamless integration without requiring any additional networking
infrastructure --- a key usability consideration for residential
deployment. The chip\'s dual-core Xtensa LX6 processor allows the
networking stack and sensor polling loop to run concurrently on separate
cores, preventing communication lag from blocking sensor acquisition.

Key WiFi performance specifications of the ESP32 relevant to AURA\'s
operation include:

  ------------------------- ---------------------------------------------
  **Parameter**             **Specification / AURA Relevance**

  **Standard**              IEEE 802.11 b/g/n --- compatible with all
                            standard home routers in Bangladesh

  **Frequency Band**        2.4 GHz --- wide penetration through walls;
                            suitable for indoor multi-room patrol

  **Data Rate**             Up to 150 Mbps --- far exceeds AURA\'s sensor
                            telemetry and video stream requirements

  **TCP/IP Stack**          Integrated LwIP stack --- enables full
                            socket-level programming for WebSocket and
                            HTTP

  **Security**              WPA/WPA2-PSK --- standard home network
                            authentication

  **Power Mode**            Modem-sleep mode available for battery
                            conservation between active transmissions

  **Operating Voltage**     3.3V logic --- directly compatible with
                            sensor signal voltage levels on the platform
  ------------------------- ---------------------------------------------

*Table 2: ESP32 WiFi Specifications and AURA Relevance*

The ESP32\'s integrated networking stack eliminates the need for a
separate WiFi module (e.g., ESP8266 shield), reducing component count,
power draw, and potential points of failure. This hardware consolidation
is a deliberate design choice aligned with AURA\'s goal of maximising
reliability within a compact mobile platform.

**3.2 WebSocket Protocol for Real-Time Command and Control**

WebSocket (RFC 6455) is the core communication protocol for AURA\'s
real-time command-and-control channel. It enables **full-duplex,
bidirectional communication** over a single persistent TCP connection,
fundamentally distinguishing it from the request-response model of HTTP.

**3.2.1 Why WebSocket Over HTTP**

Conventional HTTP follows a stateless request-response paradigm: the
client sends a request, the server responds, and the connection is
closed. For AURA\'s use case --- where the mobile application must
continuously stream directional commands to the robot and receive
real-time sensor data back --- this model introduces three fundamental
problems:

-   High latency from repeated connection establishment (TCP three-way
    handshake per request)

-   Significant overhead from HTTP headers transmitted with every
    message

-   No server-to-client push capability without polling, which wastes
    bandwidth and introduces unnecessary delays

WebSocket resolves all three issues through a single HTTP Upgrade
handshake that transitions the connection to a persistent, low-overhead
binary or text framing protocol. Once the connection is established,
data can flow in both directions simultaneously with minimal framing
overhead (as low as 2 bytes for small payloads), achieving typical
round-trip latencies of **under 50ms** on a local WiFi network --- well
within the responsiveness requirements of real-time robotic control.

**3.2.2 WebSocket Implementation in AURA**

On the ESP32 side, AURA runs a WebSocket **server** using the
*AsyncWebSocket* library (part of ESPAsyncWebServer), which handles
multiple concurrent WebSocket clients without blocking the main
processing loop. The mobile application acts as the WebSocket
**client**, connecting to the robot\'s IP address on the local network.

The WebSocket message model is event-driven. AURA processes three
primary command types received from the application:

  ---------------- ----------------- -------------------------------------
  **Command**      **Trigger**       **Robot Action**

  **PATROL**       User enables      Robot engages SLAM-based navigation
                   autonomous mode   loop, begins room-by-room patrol with
                                     obstacle avoidance

  **MANUAL**       User activates    Robot accepts directional input
                   manual control    (forward, reverse, left, right, stop)
                                     from on-screen joystick; servo camera
                                     responds to pan commands

  **ALERT**        Sensor threshold  Robot broadcasts hazard type, sensor
                   exceeded          reading, GPS coordinates, and live
                                     camera frame to cloud and all
                                     connected mobile clients
                                     simultaneously

  **STATUS**       Periodic or       Robot transmits current battery
                   on-demand         level, WiFi RSSI, active mode, last
                                     sensor readings, and GPS position to
                                     the mobile dashboard
  ---------------- ----------------- -------------------------------------

*Table 3: AURA WebSocket Command Types and Responses*

An important design decision is the **priority hierarchy** of incoming
WebSocket messages. Regardless of the current operational mode, an ALERT
message --- generated internally by the sensor monitoring loop ---
always pre-empts any active PATROL or MANUAL command. This ensures that
sensor-triggered events are never queued behind user commands, which is
a critical safety property for a system designed to respond to fire,
gas, or intrusion events.

**3.2.3 Connection State Management**

The WebSocket server maintains a connection state map for all active
clients. In a residential deployment, this typically means one mobile
app client, but the architecture supports multiple simultaneous
connections --- enabling, for example, both parents in a household to
simultaneously receive alerts and view the live camera feed. The server
broadcasts ALERT messages to **all connected clients simultaneously**,
ensuring no stakeholder misses a safety-critical notification.

If the WebSocket connection drops (e.g., due to transient WiFi
interruption), the mobile client implements **exponential backoff
reconnection logic**: the first retry occurs after 1 second, doubling
with each failure up to a maximum interval of 30 seconds.
Simultaneously, the ESP32 monitors the connection state; if no client
has been connected for more than 60 seconds and sensor thresholds are
exceeded, the system escalates to the GSM fallback layer to ensure alert
delivery.

**3.3 MQTT and HTTP for Sensor Telemetry**

While WebSocket handles the real-time command channel, AURA uses MQTT
and HTTP for a distinct class of communication: structured sensor
telemetry to the cloud layer.

**3.3.1 MQTT Protocol**

MQTT (Message Queuing Telemetry Transport) is a lightweight
publish-subscribe messaging protocol designed specifically for
constrained IoT devices operating over low-bandwidth or unreliable
networks. It operates over TCP/IP and is standardised under OASIS MQTT
v5.0.

In AURA\'s architecture, the ESP32 acts as an MQTT **publisher**,
transmitting structured sensor readings to a cloud-hosted MQTT broker at
configurable intervals (default: every 5 seconds for environmental
sensors, immediately on threshold breach). The mobile application and
cloud AI layer act as MQTT **subscribers** to the relevant topic
channels.

AURA organises its MQTT topics in a hierarchical structure:

-   aura/{device_id}/sensors/gas --- MQ-2 gas concentration readings
    (ppm)

-   aura/{device_id}/sensors/fire --- Flame sensor output (boolean +
    intensity)

-   aura/{device_id}/sensors/motion --- MPU-6050 acceleration and fall
    detection state

-   aura/{device_id}/sensors/environment --- Temperature, humidity, air
    quality index

-   aura/{device_id}/location --- NEO-6M GPS coordinates
    (lat/long/altitude)

-   aura/{device_id}/alerts --- High-priority alert payloads with full
    sensor context

-   aura/{device_id}/status --- Heartbeat, battery level, WiFi RSSI,
    operational mode

MQTT\'s publish-subscribe model decouples the robot from the cloud
processing infrastructure: AURA need only know the broker address, not
the addresses of individual subscribers. This enables the cloud layer to
be scaled, modified, or replaced without any changes to the robot\'s
firmware --- a key maintainability advantage.

AURA uses MQTT **Quality of Service (QoS) Level 1** for all alert and
safety-critical topics. QoS 1 guarantees that a message is delivered *at
least once* through an acknowledgement mechanism: the publisher
retransmits until a PUBACK is received from the broker. This is the
appropriate QoS level for a safety system where message loss is
unacceptable but QoS 2\'s two-phase commit overhead is unnecessary for
event-driven sensor data.

AURA additionally configures a **Last Will and Testament (LWT)** message
on the MQTT broker. If AURA disconnects unexpectedly without sending an
explicit disconnect message, the broker automatically publishes the LWT
payload to the *aura/{device_id}/status* topic, alerting the cloud and
application layers that the device has gone offline. This is critical
for a safety system: an undetected disconnection could give a false
sense of security.

**3.3.2 HTTP for Configuration and Bulk Data**

HTTP is used selectively in AURA\'s architecture for operations where
the request-response model is appropriate: over-the-air (OTA) firmware
updates, initial device registration and configuration, bulk sensor log
retrieval, and camera snapshot uploads to cloud storage. The ESP32 runs
a lightweight HTTP server using the *ESPAsyncWebServer* library for
handling local configuration requests from the mobile app.

For all outbound HTTP requests to cloud APIs (snapshot uploads, OTA
check requests), AURA uses HTTPS (TLS 1.2) with certificate validation,
preventing man-in-the-middle interception of firmware payloads or API
credentials.

**4. Fallback Network Stack: GSM Cellular**

The GSM fallback layer is AURA\'s second line of communication, designed
to ensure that safety-critical alerts reach the homeowner even when the
primary WiFi network is unavailable. This is not a supplementary feature
but a fundamental architectural requirement given the deployment
context.

**4.1 GSM Module Integration**

AURA integrates a GSM/GPRS module (such as the SIM800L or SIM900A
series, both widely available in Bangladesh) connected to the ESP32 via
a UART serial interface. The module is powered through the LM2596 buck
converter, which provides a stable regulated voltage appropriate for the
GSM module\'s power draw --- particularly important during transmission
bursts, when current draw can spike to 2A.

The BSS138 logic level converters (×3 units deployed in AURA) handle the
voltage translation between the ESP32\'s 3.3V logic levels and the GSM
module\'s 4.2V UART interface, preventing signal integrity issues that
could corrupt AT command communication.

The GSM module communicates with the ESP32 via the **AT command set**
(Hayes command language), a standardised interface for cellular modems.
The ESP32 firmware includes an AT command abstraction layer that
handles:

-   Network registration and signal quality monitoring

-   SIM card PIN authentication and APN configuration

-   SMS message composition and transmission

-   GPRS data connection establishment (for HTTP/MQTT over cellular)

-   Signal strength (RSSI) polling for network quality assessment

**4.2 SMS Alert Mechanism**

When AURA\'s firmware detects that the primary WiFi connection has been
lost and a sensor threshold has been exceeded, it immediately initiates
the GSM fallback procedure. The SMS alert payload is a structured
plain-text message containing:

  ----------------- -----------------------------------------------------
  **SMS Field**     **Content and Purpose**

  **ALERT TYPE**    Category of hazard: GAS / FIRE / INTRUSION / FALL /
                    WATER. Enables homeowner to immediately assess
                    severity without reading further.

  **SENSOR          Quantitative value from triggering sensor (e.g., gas
  READING**         concentration in ppm, flame intensity level) for
                    calibrated response.

  **TIMESTAMP**     UTC timestamp of event detection, formatted as
                    DD/MM/YYYY HH:MM:SS, providing a forensic record.

  **GPS LOCATION**  Latitude and longitude from NEO-6M module, enabling
                    verification of robot\'s room position at time of
                    alert.

  **WIFI STATUS**   Confirmation that WiFi is unavailable and the SMS is
                    the fallback notification, preventing confusion about
                    app silence.

  **CONTACT**       Instruction to call emergency services if applicable,
                    with relevant local emergency numbers (999 for
                    Bangladesh).
  ----------------- -----------------------------------------------------

*Table 4: AURA GSM SMS Alert Payload Structure*

The SMS destination is configurable by the homeowner during initial
setup, supporting up to three emergency contacts who will all receive
simultaneous SMS notifications. This multi-recipient design ensures
alert delivery even if one contact\'s phone is switched off.

**4.3 NEO-6M GPS Module: Location Telemetry**

The NEO-6M GPS module provides AURA with real-time geographic
coordinates via NMEA 0183 protocol over a UART interface. In the context
of the networking layer, its primary function is to **geotag all
transmitted data** --- whether delivered via MQTT, WebSocket, or SMS ---
with the robot\'s precise location at the time of the event.

While GPS is primarily associated with outdoor navigation, its indoor
utility in AURA is contextual accuracy: if AURA has recently been near
an external wall or window, the GPS fix persists and provides
approximate room-level location data. For multi-storey homes, AURA\'s
indoor map (generated via LiDAR/sonar-based SLAM) is transmitted
alongside the GPS coordinates to the mobile app, providing a visual room
indicator even when satellite accuracy is limited indoors.

**5. Network Data Flow: End-to-End Communication Model**

This section details the complete data flow for AURA\'s two primary
operational modes: the normal autonomous patrol telemetry flow and the
emergency alert flow. Understanding these flows is essential for
evaluating the system\'s latency, reliability, and failure behaviour.

**5.1 Normal Operation: Telemetry Data Flow**

During autonomous patrol operation, sensor data flows through the
following sequence:

> **Step 1: Sensor Acquisition ---** ESP32 polls all sensors on a
> 5-second cycle. MQ-2, flame sensors, HC-SR04, and MPU-6050 readings
> are aggregated into a structured JSON payload.
>
> **Step 2: Local Threshold Check ---** Firmware evaluates all readings
> against configurable alert thresholds. If thresholds are not exceeded,
> data is routed to the telemetry path. If exceeded, the emergency flow
> is triggered (Section 5.2).
>
> **Step 3: MQTT Publish ---** The JSON payload is published to the
> relevant MQTT topic at QoS 1. The ESP32 awaits PUBACK from the broker
> before clearing the message from its transmission buffer.
>
> **Step 4: Broker Distribution ---** The cloud MQTT broker receives the
> message and distributes it to all active subscribers: the AI analytics
> service, the time-series database, and the real-time dashboard feed.
>
> **Step 5: Dashboard Update ---** The mobile application\'s WebSocket
> connection to the dashboard service receives the updated sensor values
> and refreshes the live display --- typically within 200ms of original
> sensor acquisition.
>
> **Step 6: App Display ---** The homeowner sees current gas levels,
> motion status, robot position, and environmental readings in real time
> on the mobile dashboard.

**5.2 Emergency Alert: Priority Data Flow**

When any sensor reading exceeds its alert threshold, AURA immediately
switches to the emergency data flow, which operates in parallel across
both the WiFi and GSM stacks:

  -------- ----------------- ----------------------- ------------------------
  **\#**   **Action**        **Protocol / Channel**  **Recipient / Outcome**

  **1**    Sensor threshold  Internal firmware event Emergency handler
           breach detected                           pre-empts all other
                                                     tasks

  **2**    Live camera frame ESP32-CAM JPEG          Frame buffered for
           captured          acquisition             transmission

  **3**    WebSocket         WebSocket (WiFi)        Mobile app receives
           broadcast to all                          ALERT message with
           clients                                   sensor data + JPEG
                                                     within \~80ms

  **4**    MQTT alert        MQTT over WiFi          Cloud AI service
           publish (QoS 1)                           receives alert, triggers
                                                     push notification to app

  **5**    Push notification FCM/APNs                Homeowner receives phone
           dispatch          (cloud-to-mobile)       notification even if app
                                                     is backgrounded

  **6**    WiFi connection   Firmware WiFi status    If WiFi is up: steps
           status check      API                     3--5 complete; GSM step
                                                     skipped

  **7**    GSM SMS dispatch  AT+CMGS over GSM        Structured SMS delivered
           (if WiFi down)                            to all registered
                                                     emergency contacts

  **8**    Cloud log entry   HTTPS POST to cloud API Full event record stored
           written                                   with timestamp, sensor
                                                     values, GPS, camera
                                                     snapshot
  -------- ----------------- ----------------------- ------------------------

*Table 5: AURA Emergency Alert Data Flow Sequence*

The parallel execution of WiFi and GSM alert paths (steps 3--5 and step
7) is a deliberate redundancy design. In practice, the WiFi path
completes first on a stable network; the GSM path serves as the
guaranteed delivery mechanism. Both paths execute concurrently --- the
GSM path is not a fallback that activates only after WiFi failure is
confirmed, but rather a parallel transmission that fires whenever an
alert is generated, ensuring maximum coverage.

**6. Protocol Comparison and Selection Rationale**

The following comparative analysis contextualises AURA\'s protocol
choices against the principal alternatives considered during system
design.

  ------------------- ------------------ -------------- ------------- -------------------
  **Protocol**        **Model**          **Overhead**   **Latency**   **AURA Use /
                                                                      Decision**

  **WebSocket**       Persistent duplex  Minimal (2--10 \~20--80ms    **SELECTED ---
                                         B/frame)       (LAN)         real-time control &
                                                                      live sensor push**

  **HTTP/REST**       Request-response   High (headers  100--500ms+   **SELECTED (HTTPS)
                                         per request)                 --- OTA updates,
                                                                      snapshots only**

  **MQTT**            Pub/sub over TCP   Very low (2 B  50--200ms     **SELECTED ---
                                         fixed header)                structured
                                                                      telemetry to cloud
                                                                      broker**

  **CoAP**            Request-response   Very low       \~20--100ms   NOT selected ---
                      UDP                                             UDP unreliable on
                                                                      home WiFi; no
                                                                      browser support

  **AMQP**            Message queue      High           Variable      NOT selected ---
                                                                      enterprise-grade;
                                                                      excessive for
                                                                      embedded MCU

  **Bluetooth LE**    Point-to-point     Very low       \~10ms        NOT selected ---
                                                                      10m range
                                                                      insufficient for
                                                                      whole-home coverage

  **Zigbee/Z-Wave**   Mesh               Low            \~50--100ms   NOT selected ---
                                                                      requires
                                                                      hub/gateway; adds
                                                                      infrastructure
                                                                      dependency

  **GSM/SMS**         Cellular           Low            5--30 seconds **SELECTED ---
                      store-forward                                   fallback alert
                                                                      delivery when WiFi
                                                                      unavailable**
  ------------------- ------------------ -------------- ------------- -------------------

*Table 6: IoT Communication Protocol Comparison for AURA*

The selection of WebSocket + MQTT as complementary protocols represents
a deliberate separation of concerns: WebSocket for interactive,
human-loop operations (manual control, live video), and MQTT for
machine-to-machine telemetry (sensor data to cloud). These two protocols
operate on different channels and serve different QoS profiles ---
neither alone would satisfy both requirements.

**7. Security Considerations**

A home guardian system processing sensitive data --- live video feeds,
presence information, GPS location, and control access --- presents a
significant attack surface if not secured appropriately. AURA\'s
networking architecture incorporates the following security provisions:

**7.1 Transport Layer Security**

-   All HTTPS communications (OTA, snapshot uploads, cloud API) use TLS
    1.2 with server certificate validation

-   MQTT connections to the cloud broker are secured via TLS 1.2 (MQTTS
    on port 8883), preventing eavesdropping on sensor telemetry

-   The ESP32\'s hardware-accelerated AES and SHA engines enable TLS
    without significant performance penalty

**7.2 WebSocket Authentication**

-   The WebSocket server on the ESP32 implements a token-based
    authentication handshake: the mobile client must present a
    device-specific token (generated during initial pairing) before the
    Upgrade request is accepted

-   Connection attempts from unrecognised clients are rejected at the
    application layer

-   On local WiFi, the network itself provides a first layer of access
    control (WPA2 authentication required to join the network)

**7.3 MQTT Broker Authentication**

-   AURA authenticates to the MQTT broker using a unique client
    certificate per device (X.509 mutual TLS), preventing spoofed
    devices from publishing false sensor data

-   Topic-level ACL (Access Control List) rules on the broker restrict
    each device to publishing only to its own device-ID-namespaced
    topics

**7.4 Known Limitations**

The primary security limitation in the current design is the **WebSocket
server running on HTTP (not WSS)** for the local control channel. While
local WiFi traffic is not exposed to the public internet, an attacker on
the same WiFi network could theoretically intercept or inject control
commands. A future revision should implement WSS (WebSocket Secure) with
a self-signed certificate for the local control server. Additionally,
the SMS fallback channel is inherently unencrypted at the cellular
layer, though the payload does not contain personally identifying
information beyond sensor readings and GPS coordinates.

**8. Performance and Reliability Analysis**

  ----------------------- --------------------- --------------------------
  **Metric**              **Target / Expected   **Design Mechanism**
                          Value**               

  **WebSocket command     **\<100ms             Persistent connection,
  latency (local WiFi)**  round-trip**          minimal frame overhead,
                                                async processing on ESP32

  **MQTT telemetry        **\<500ms             QoS 1 with broker
  delivery (to cloud      end-to-end**          acknowledgement; LwIP TCP
  broker)**                                     stack on ESP32

  **Emergency alert       **\<3 seconds to      Parallel WebSocket push +
  delivery (WiFi path)**  phone screen**        FCM/APNs cloud
                                                notification

  **Emergency alert       **\<30 seconds SMS    Direct AT command SMS;
  delivery (GSM           delivery**            typical GSM
  fallback)**                                   store-and-forward latency
                                                in Bangladesh

  **System uptime         **\>99% with          WiFi primary + automatic
  (network                dual-stack**          GSM fallback on connection
  availability)**                               loss

  **Reconnection time     **\<60 seconds**      Exponential backoff (1s,
  after WiFi drop**                             2s, 4s\... up to 30s) with
                                                GSM escalation at 60s

  **Sensor polling rate** **5 seconds (normal), FreeRTOS task scheduler on
                          100ms (alert mode)**  ESP32 with priority
                                                elevation on threshold
                                                breach

  **Video stream latency  **\<2 seconds**       JPEG frame capture +
  (ESP32-CAM to app)**                          WebSocket binary frame
                                                transmission + app decode
  ----------------------- --------------------- --------------------------

*Table 7: AURA Network Performance Targets and Design Mechanisms*

The dual-stack architecture is the primary reliability mechanism. A
single-network system would be unavailable during WiFi disruptions ---
precisely the scenario most likely to coincide with emergencies (e.g., a
fire may damage the router before the alert is transmitted). AURA\'s
parallel transmission model means the probability of complete
communication failure is the product of the WiFi failure probability and
the GSM failure probability, which is significantly lower than either
alone.

**9. Deployment Context: Bangladesh Infrastructure**

The networking architecture of AURA is not designed in a generic
technological vacuum but in direct response to the infrastructure
realities of its target market: residential and small commercial
deployments in Bangladesh, primarily in urban centres such as Dhaka,
Chittagong, and Sylhet.

**9.1 WiFi Infrastructure in Bangladesh**

Broadband internet penetration in Bangladesh has grown significantly,
with the Bangladesh Telecommunication Regulatory Commission (BTRC)
reporting over 120 million internet subscribers as of 2024. Home WiFi
routers are standard in middle-to-upper-middle-class households in Dhaka
--- AURA\'s primary target segment. However, power outages (load
shedding) remain a common occurrence, and many homes rely on
Uninterruptible Power Supplies (UPS) that may not power routers during
extended outages. This makes WiFi instability a realistic operational
scenario rather than an edge case.

**9.2 GSM / Cellular Infrastructure**

Bangladesh has four major mobile network operators --- Grameenphone
(Telenor), Robi Axiata, Banglalink, and Teletalk --- providing extensive
GSM (2G) and 4G LTE coverage across urban and semi-urban areas.
Critically, cellular infrastructure is **powered independently from
residential power grids**: towers have backup generators ensuring
continued operation during the same power outages that would disrupt
home WiFi. This makes GSM a genuinely independent fallback channel, not
merely a redundant path on the same infrastructure.

**9.3 Implications for Architecture Validation**

The combination of widely available home WiFi and robust independent GSM
coverage validates AURA\'s dual-stack design as specifically well-suited
to the Bangladesh deployment context. A system relying solely on WiFi
would be functionally blind during precisely the infrastructure
disruptions --- power failures, network faults --- most correlated with
domestic emergencies. AURA\'s architecture turns this infrastructure
weakness into a design strength by treating GSM as a co-equal
communication channel rather than an afterthought.

**10. Conclusion**

The networking architecture of AURA represents a thoughtful,
multi-layered approach to the communication requirements of an
autonomous home guardian IoT system. By combining WebSocket for
real-time bidirectional command-and-control, MQTT for structured sensor
telemetry, HTTPS for secure cloud operations, and GSM/SMS as an
independent fallback alert channel, AURA achieves a communication model
that is simultaneously low-latency, reliable, and resilient to the
infrastructure realities of its deployment context.

The central architectural insight --- that WiFi and GSM should operate
as parallel rather than sequential communication layers --- ensures that
the most critical function of the system (alert delivery during an
emergency) is never dependent on a single point of failure. This design
philosophy, applied at the networking layer, is what elevates AURA from
a capable prototype to a genuinely deployable safety system.

Future enhancements to the networking architecture should prioritise:
(1) implementation of WSS (WebSocket Secure) for the local control
channel to address the identified TLS gap; (2) evaluation of MQTT 5.0\'s
enhanced session management features for improved reconnection
semantics; (3) exploration of LPWAN technologies (LoRaWAN, NB-IoT) for
ultra-low-power extended-range communication as AURA is deployed in
larger premises; and (4) integration of a local edge computing node to
enable AI inference and alert generation without cloud dependency,
further reducing the system\'s reliance on any single external
infrastructure component.

AURA\'s networking layer ultimately embodies the core design philosophy
of the project: build for the world as it is --- with its outages, its
unstable connections, and its emergencies --- not for the idealised
world of perfect infrastructure. In Bangladesh, that philosophy is not
merely good engineering practice. It is the difference between a system
that protects families and one that fails them at the worst possible
moment.

**References**

**\[1\] IETF RFC 6455.** Fette, I. & Melnikov, A. (2011). The WebSocket
Protocol. Internet Engineering Task Force.
https://datatracker.ietf.org/doc/html/rfc6455

**\[2\] OASIS MQTT v5.0.** Banks, A., Briggs, E., Borgendale, K. &
Gupta, R. (2019). MQTT Version 5.0. OASIS Standard.
https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html

**\[3\] ESP32 Technical Reference.** Espressif Systems. (2024). ESP32
Technical Reference Manual v5.3.
https://www.espressif.com/sites/default/files/documentation/esp32_technical_reference_manual_en.pdf

**\[4\] IETF RFC 7252.** Shelby, Z., Hartke, K. & Bormann, C. (2014).
The Constrained Application Protocol (CoAP). Internet Engineering Task
Force. https://datatracker.ietf.org/doc/html/rfc7252

**\[5\] Bangladesh Fire Service.** Fire Service and Civil Defence
(FSCD), Bangladesh. (2025). Annual Fire Statistics 2024. Ministry of
Home Affairs, Bangladesh.

**\[6\] NEO-6M Datasheet.** u-blox AG. (2014). NEO-6 u-blox 6 GPS
Modules Data Sheet.
https://content.u-blox.com/sites/default/files/products/documents/NEO-6_DataSheet\_(GPS.G6-HW-09005).pdf

**\[7\] IoT Security.** Sicari, S., Rizzardi, A., Grieco, L.A. &
Coen-Porisini, A. (2015). Security, Privacy and Trust in Internet of
Things: The Road Ahead. Computer Networks, 76, 146--164.

**\[8\] MQTT in IoT.** Al-Fuqaha, A., Guizani, M., Mohammadi, M.,
Aledhari, M. & Ayyash, M. (2015). Internet of Things: A Survey on
Enabling Technologies, Protocols, and Applications. IEEE Communications
Surveys & Tutorials, 17(4), 2347--2376.

**\[9\] L298N Motor Driver.** STMicroelectronics. (2000). L298N Dual
Full-Bridge Driver Datasheet.
https://www.st.com/resource/en/datasheet/l298.pdf

**\[10\] Bangladesh Telecom.** Bangladesh Telecommunication Regulatory
Commission (BTRC). (2024). Internet Subscribers Report.
https://www.btrc.gov.bd/
