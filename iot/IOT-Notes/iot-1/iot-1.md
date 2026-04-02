# What's IOT
IOT stands for Internet of Things

It's an concepts where machines are programmed and connected with sensors and software to help human being automate tasks

Some examples of IOT are
- Smart Home Security
- RFID Based Identification Checking
- AI Based Cars

## IOT Components
Four things that makes helps an IOT to do enable humans to emulate tasks

- Things
- Controller
- Sensor
- Actuator
- Communicator

## Architecture of IoT
It's divided into three layer
- **Perception Layer** 
    - This layer is used to collect data

- **Network Layer**
    - This layer is used for data transmission services

- **Application Layer**
    - This layer used to deliver application services to user

## Functional View of IoT
We can also look at IoT as a simple data journey:

- **Create (Sensors / Physical devices)**  
    - Sensor devices in the physical world collect raw data (temperature, motion, location, etc.).

- **Communicate (Network / Connectivity)**  
    - The collected data is sent over networks (Wi‑Fi, cellular, etc.).  
    - Connectivity elements and frameworks make sure devices can talk to each other and to the cloud.

- **Aggregate (Integration / Management)**  
    - IoT middleware receives data from many devices.  
    - It ingests, stores, and cleans the data, and combines it with existing structured and unstructured data.

- **Analyze (Augmented intelligence / Processing & Analytics)**  
    - Processing engines/frameworks read the stored data and messages.  
    - Analytics tools do real‑time (stream) analysis and offline (batch, machine learning) analysis to find patterns and insights.

- **Act (Augmented behavior / Applications & Edge computing)**  
    - User applications and reports show insights to people.  
    - Edge devices (intelligent gateways, fog platforms) can automatically take actions close to where data is created (e.g., turning a device on/off).

In short: **sensors create data, networks move it, platforms store and organize it, analytics understand it, and applications/edge devices act on it.**

### What is a sensor?

- **Simple idea**: A sensor is a device that **detects something in the real world** (light, temperature, motion, sound, etc.) and **converts it into data** (usually a voltage or a digital value) that a computer/microcontroller can read.  
- **Fullstack analogy**: Think of a sensor as the **“request body” from the physical world**. Instead of JSON from a client, you get voltage values from hardware that describe what’s happening outside.

---

### Common types of sensors (by what they measure)

- **Temperature sensor**: Measures how hot or cold something is.  
  - Examples: Thermistor, LM35, DS18B20.
- **Light sensor**: Measures brightness of light in the environment.  
  - Example: LDR (Light Dependent Resistor).
- **Proximity / distance sensor**: Detects how far an object is or if something is nearby.  
  - Examples: Ultrasonic sensor (HC-SR04), infrared proximity sensor.
- **Motion sensor**: Detects movement or changes in motion.  
  - Examples: PIR (detects people moving), accelerometer (detects acceleration, tilt).
- **Pressure sensor**: Measures force per unit area, e.g. air pressure, touch pressure.  
  - Example: Barometric pressure sensor.
- **Humidity sensor**: Measures how much water vapor is in the air.  
  - Example: DHT11, DHT22.
- **Gas / chemical sensor**: Detects presence or concentration of gases (CO₂, CO, smoke, etc.).  
  - Example: MQ series sensors.
- **Position / location sensor**: Gives position in space.  
  - Examples: GPS module (lat/long), rotary encoder (shaft angle).
- **Touch sensor**: Detects when a user touches or presses something.  
  - Examples: Capacitive touch sensor, touch button.
- **Sound sensor**: Converts sound/air pressure changes into electrical signals.  
  - Example: Microphone module.

(There are many more, but these are the ones you’ll see most in IoT projects.)

---

### Analog vs Digital sensors (core idea)

- **Analog sensor**  
  - Outputs a **continuous range of values** (usually a voltage, e.g. 0–5 V) that is **proportional to the physical quantity**.  
  - Example: A light sensor might output 0.2 V in the dark, 2.5 V indoors, 4.8 V in bright sun — any value in between is possible.  
  - A microcontroller reads this via an **ADC (Analog‑to‑Digital Converter)**, like `analogRead()` on Arduino.

- **Digital sensor**  
  - Outputs **discrete digital values**, usually:  
    - Either **ON/OFF (HIGH/LOW)**, or  
    - A **digital data stream** over a protocol (I²C, SPI, 1‑Wire, UART, etc.).  
  - Example: A digital temperature sensor might directly send “23.5 °C” as a number via I²C, or a motion sensor might just send HIGH when motion is detected and LOW otherwise.

---

### Difference between Analog and Digital sensors (in dev terms)

- **Signal form**
  - **Analog**: Continuous voltage value (like an **uncompressed audio waveform**).  
  - **Digital**: Discrete bits (like a **PCM-encoded audio file**, or boolean events).

- **Data richness**
  - **Analog**: Can represent **fine‑grained changes** (e.g., exact brightness level).  
  - **Digital**: Often **simplified** (e.g., just “motion/no motion”) or **pre‑processed** (sensor already does the conversion and sends you a clean number).

- **Processing location**
  - **Analog**: MCU/board must **sample the voltage and convert it** (ADC). You handle scaling and calibration in code.  
  - **Digital**: Sensor often has its **own microcontroller inside** that converts the physical signal to digital and may apply filtering; you just read values like from an API.

- **Noise and accuracy**
  - **Analog**: More sensitive to **electrical noise**, wiring length, power issues; you may need filtering (both hardware and software).  
  - **Digital**: More **robust** over distance; as long as the logic levels are valid, you get clean data.

- **Interfacing complexity**
  - **Analog**: Hardware is simple to wire (just power + 1 signal line), but you must have **available ADC pins** and handle resolution (e.g., 10‑bit or 12‑bit).  
  - **Digital**: May need to understand a **protocol** (I²C, SPI, UART), addresses, timing, etc., but libraries usually abstract this (like using an SDK client for an HTTP API).

- **Examples**
  - **Analog sensor example**:  
    - LDR light sensor: output 0–3.3 V → `analogRead()` → your code maps 0–1023 to 0–100% brightness.  
  - **Digital sensor example**:  
    - DHT22: you call a library function like `readTemperature()` and it returns `23.4` directly, using a digital protocol under the hood.

### What is an actuator?

- **Simple idea**: An actuator is a device that **takes action in the physical world** when it receives a command (e.g., turn something on/off, move, open/close, heat/cool).  
- **Fullstack analogy**: If a sensor is the **incoming request body**, an actuator is the **side effect** your service performs (send an email, trigger a payment, toggle a feature) — but on physical things like motors, valves, lights, pumps, etc.

Common actuator examples:
- Motors (rotate a fan, wheel, or conveyor belt)
- Servo motors (move to a precise angle, e.g., open a door 30°)
- Relays (switch AC loads like lights, pumps)
- Valves (open/close water, gas, fertilizer, etc.)
- Heaters/coolers (change temperature)
- Buzzers, LEDs, screens (notify humans)

Actuators usually sit behind a **controller** (microcontroller, PLC, or edge device) that decides *when* and *how* to move them based on sensor data and business rules.

---

### Sensor → Decision → Actuator loop (control loop)

In most IoT systems, the pattern is:

1. **Sense**: Sensors measure the environment (temperature, motion, moisture, etc.).  
2. **Decide**: A controller (device firmware, edge gateway, or cloud service) runs rules/algorithms.  
3. **Act**: Actuators change something in the real world.  
4. **Sense again**: New sensor data confirms whether the action worked (feedback loop).

You can think of this like an **event-driven system**: sensor data is an event, rules are handlers, actuators are side effects.

---

### Generic IoT architecture (for all use cases)

- **Device layer (edge)**  
  - Sensors + actuators connected to a microcontroller (e.g., ESP32, STM32, Arduino, industrial PLC).  
  - Runs firmware that reads sensors, applies basic rules, and drives actuators.

- **Connectivity layer**  
  - Short‑range: BLE, Zigbee, Wi‑Fi.  
  - Long‑range: Cellular (4G/5G), LoRaWAN, NB‑IoT, wired Ethernet.  
  - Protocols: MQTT, HTTP/REST, WebSockets, proprietary fieldbuses (Modbus, CAN, etc.).

- **Platform / backend layer**  
  - Ingests device data, stores time‑series, runs analytics and alert rules.  
  - Often microservices + message queues (Kafka, MQTT broker) + time‑series DB.  
  - Device management (firmware updates, configuration, authentication).

- **Application layer**  
  - Dashboards, mobile apps, APIs for other systems (ERP, hospital HIS, building management, etc.).  
  - Business logic and workflows (who gets notified, escalation rules, reports).

Design choice: **where to run decisions** (on‑device vs edge vs cloud) depends on latency, reliability, and privacy requirements.


### Example use cases: sensors + actuators

Below, each use case follows this pattern: **Sensors → Connectivity → Backend → Decisions → Actuators**.

#### 1. Smart Diapers

- **Goal**: Monitor baby’s wetness/health and alert caregivers early.  
- **Sensors**: Moisture sensor, temperature sensor, optional skin‑contact sensor.  
- **Actuators**: Phone notifications, wearable vibration alert, night‑light turning on.  
- **Architecture**:  
  - Ultra‑low‑power patch on diaper with BLE to parent’s smartphone (gateway).  
  - Smartphone app sends data to cloud (HTTPS/MQTT) and receives push notifications.  
  - Basic rules (e.g., “wetness > threshold for N minutes”) can run locally in the app for offline alerts.  
- **Key design decisions**:  
  - Prioritize **battery life and comfort** (tiny form factor, rare transmissions).  
  - **Privacy by design**: minimal data, strong encryption, strict access control.  
  - Local alerts first (parent’s phone) before cloud analytics.

#### 2. Smart Clothes

- **Goal**: Track activity, posture, or health signals from clothing.  
- **Sensors**: Accelerometer, heart‑rate, temperature, stretch/pressure sensors.  
- **Actuators**: Haptic feedback (vibrations), LEDs, heating elements.  
- **Architecture**:  
  - Wearable controller (small MCU with BLE) embedded in clothing.  
  - Streams periodic sensor data to a companion mobile app.  
  - Cloud backend stores history, runs ML models for coaching/health alerts.  
- **Key design decisions**:  
  - **Washability and durability** of electronics; detachable modules.  
  - Edge processing on the wearable to filter noise and compress data.  
  - UX: clear feedback patterns so users understand actuator signals (e.g., different vibration patterns).

#### 3. Smart Home

- **Goal**: Comfort, energy savings, and security.  
- **Sensors**: Motion, door/window contact, temperature, light, smoke, occupancy detection.  
- **Actuators**: Lights, HVAC, smart plugs, door locks, blinds, sirens.  
- **Architecture**:  
  - Home hub (smart speaker or dedicated gateway) connects Zigbee/Z‑Wave/BLE devices.  
  - Local rules (“if motion and it’s dark → turn on lights”) run on the hub for low latency.  
  - Cloud platform for remote control, voice assistants, scenes, and analytics.  
- **Key design decisions**:  
  - **Fail‑safe**: doors must unlock or alarms must work even if cloud is down.  
  - **Interoperability**: choose protocols/standards (e.g., Matter) to avoid lock‑in.  
  - Strong **security** (device auth, encrypted channels) because actuators control doors and power.

#### 4. Next Gen Hospital

- **Goal**: Real‑time patient monitoring and smart equipment orchestration.  
- **Sensors**: Vital signs (ECG, SpO₂, blood pressure), bed occupancy, location tags (RTLS).  
- **Actuators**: Infusion pumps, smart beds (tilt, height), nurse call lights, alerts to staff devices.  
- **Architecture**:  
  - Medical‑grade devices on wired/Wi‑Fi networks with strict segmentation.  
  - Edge servers in the hospital aggregate data and integrate with HIS/EMR systems.  
  - Cloud (or private datacenter) runs analytics for risk scoring, early warning systems.  
- **Key design decisions**:  
  - **Safety‑critical**: actions must be validated; often require human confirmation before actuating pumps/beds.  
  - Compliance (HIPAA‑style privacy, audit logs, access control).  
  - High availability and redundancy; no single point of failure for life‑critical actuators.

#### 5. Smart Factory

- **Goal**: Increase throughput, reduce downtime, improve safety.  
- **Sensors**: Vibration, temperature, current draw, position/limit switches, vision systems.  
- **Actuators**: Motors, robotic arms, conveyors, valves, alarms, safety interlocks.  
- **Architecture**:  
  - Field devices connected to PLCs/industrial controllers via fieldbus (Modbus, Profibus, CAN).  
  - Edge gateway translates to MQTT/HTTP and sends data to MES/SCADA and cloud analytics.  
  - Local safety logic and emergency stops run directly on PLCs (never dependent on cloud).  
- **Key design decisions**:  
  - **Real‑time constraints**: millisecond‑level control loops stay on PLCs.  
  - Use predictive maintenance models in the cloud to plan actuator interventions (e.g., slow a line, schedule shutdown).  
  - Robustness to electrical noise, dust, temperature in industrial environments.

#### 6. Freight Transportation

- **Goal**: Track location, condition, and security of goods in transit.  
- **Sensors**: GPS, temperature, humidity, door open/close, shock/vibration.  
- **Actuators**: Door locks, refrigeration unit control, internal lights/alarms.  
- **Architecture**:  
  - Telematics device on each truck/container with cellular or satellite connectivity.  
  - Periodic data uploads to cloud; local buffering when offline.  
  - Fleet management platform exposes APIs and dashboards for logistics teams.  
- **Key design decisions**:  
  - Design for **intermittent connectivity** (store‑and‑forward, idempotent messages).  
  - **Geo‑fencing rules** that trigger actuators (e.g., lock doors outside allowed zones, alarm if opened unexpectedly).  
  - Power budgeting so devices can run for days/weeks on vehicle or battery power.

#### 7. Smart Building

- **Goal**: Energy efficiency, comfort, and operational visibility.  
- **Sensors**: Occupancy, CO₂, light levels, temperature, humidity, equipment status.  
- **Actuators**: HVAC dampers, fans, blinds, lighting circuits, access control.  
- **Architecture**:  
  - Building Management System (BMS) server connects to field controllers (BACnet, Modbus, KNX).  
  - Floor‑level controllers run schedules and local optimization rules.  
  - Cloud analytics optimize energy usage and detect anomalies in equipment behavior.  
- **Key design decisions**:  
  - **Zoning strategy** (group rooms/floors) for fine‑grained control vs complexity.  
  - Integration with enterprise systems (room booking, security) to drive actuator behavior.  
  - Gradual, smooth actuator changes to avoid discomfort (e.g., don’t blast HVAC on/off).

#### 8. Smart Agriculture

- **Goal**: Optimize crop yield and resource usage (water, fertilizer, energy).  
- **Sensors**: Soil moisture, soil nutrients, weather (rain, wind, sunlight), tank levels.  
- **Actuators**: Irrigation valves, fertilizer pumps, greenhouse vents, fans, shading systems.  
- **Architecture**:  
  - Sensor/actuator nodes across fields using LoRaWAN or sub‑GHz RF to a central gateway.  
  - Gateway uploads data to cloud via cellular or wired backhaul.  
  - Cloud runs rules or ML models to schedule irrigation and dosing; gateway can cache rules for offline operation.  
- **Key design decisions**:  
  - **Energy autonomy**: solar‑powered nodes with aggressive sleep modes.  
  - Design for **rugged outdoor conditions** (waterproofing, temperature extremes).  
  - Fail‑safe defaults (e.g., stop irrigation on sensor failure, or use conservative schedules).

### What is a microcontroller?

**Short answer**:  
A microcontroller is a **small computer on a single chip** that can read inputs (like sensors), run simple programs, and control outputs (like actuators: motors, LEDs, relays).

### In slightly more detail

- **Hardware bundle**:  
  A microcontroller usually includes on one chip:
  - CPU  
  - RAM  
  - Flash storage (where your firmware lives)  
  - GPIO pins (for sensors/actuators)  
  - Peripherals (timers, ADC, PWM, UART/I²C/SPI, etc.)

- **Role in IoT**:  
  It sits **close to the physical world**, doing things like:
  - Reading sensor values every few milliseconds  
  - Applying simple logic or control algorithms  
  - Driving actuators (turning devices on/off, moving motors)  
  - Talking to other devices/cloud over serial, Wi‑Fi, BLE, etc.

- **Fullstack analogy**:  
  Think of a microcontroller as a tiny **edge server**:
  - It has a very limited CPU/RAM compared to a cloud VM.  
  - It runs a single “service” (firmware) that:
    - Listens to “requests” from sensors (ADC, digital inputs)  
    - Applies “business rules”  
    - Sends “responses” to actuators and maybe “logs” to the cloud.

- **Common examples**:  
  - Arduino (ATmega328P, etc.)  
  - ESP32 / ESP8266  
  - STM32, PIC, nRF52, etc.

---

### What is MQTT?

- **Simple idea**: MQTT is a **lightweight messaging protocol** built for devices with low bandwidth and limited power. Devices **publish** messages to *topics* on a **broker**, and other devices **subscribe** to those topics to receive the messages.  
- **Typical use**: Tiny IoT devices send sensor readings to an MQTT broker; backends, dashboards, or other devices subscribe and react.

Key pieces:
- **Client**: Any device/app that connects (sensor node, gateway, backend service).  
- **Broker**: Central server that receives all messages and routes them to subscribers.  
- **Topic**: String path like `home/living-room/temperature` used for routing.  
- **QoS levels**: Delivery guarantees (`at most once`, `at least once`, `exactly once`).  
- **Transport**: Usually runs over TCP, often secured with TLS (`mqtts`).

---

### MQTT vs HTTPS (HTTP)

- **Communication pattern**  
  - **HTTPS (HTTP over TLS)**: Request/response. Client must ask the server every time (polling, long polling, SSE, WebSockets).  
  - **MQTT**: Publish/subscribe. Devices push messages to a broker; subscribers get updates **automatically** without polling.

- **Connection behavior**  
  - **HTTPS**: Often short‑lived connections (especially on constrained devices); each request carries full headers.  
  - **MQTT**: Typically **long‑lived TCP connection** with small keep‑alive packets; great for frequent, small updates.

- **Overhead and efficiency**  
  - **HTTPS**: Verbose headers, text payloads (JSON), higher bandwidth and power cost.  
  - **MQTT**: Very small header, binary framing; optimized for **low bandwidth and battery‑powered** devices.

- **Directionality**  
  - **HTTPS**: Server cannot easily contact the device unless the device initiates (or uses WebSockets/SSE).  
  - **MQTT**: Broker can deliver messages to any subscribed client as long as its connection is open (good for **commands from cloud → device**).

- **Security model**  
  - **HTTPS**: TLS + HTTP semantics (cookies, auth headers, etc.).  
  - **MQTT**: Uses TLS for encryption plus its own auth (username/password, client certs); access control is usually **topic‑based** on the broker.

- **How they work together in IoT**  
  - Devices ↔ Broker: **MQTT** (efficient, pub/sub).  
  - Web/mobile apps ↔ Backend: **HTTPS** (REST/GraphQL).  
  - Backend ↔ Broker: Both often speak MQTT or use a bridge so your HTTP APIs can publish/subscribe on behalf of users.