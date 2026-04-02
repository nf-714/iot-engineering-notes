# IoT Core Building Blocks — Detailed Notes

---

## 1. IoT Enablers (Connectivity)

### What is an IoT Enabler?

An **IoT enabler** is any **technology, component, or service that makes an IoT solution possible**.  
The most important enabler category is **connectivity** — without a way for devices to send data, there is no "Internet" in "Internet of Things".

### Types of IoT Connectivity Enablers

#### Wi‑Fi

- **What**: Local wireless networking (2.4 / 5 GHz), high bandwidth.
- **Range**: ~30–50 m indoors.
- **Real‑life IoT example**: A **smart home** thermostat (like Nest) connects over the home Wi‑Fi router, sends temperature readings to Google Cloud, and receives heating schedule commands back.
- **Pros**: High throughput, cheap modules, uses existing routers and IP stack.
- **Cons**: High power draw (bad for batteries), needs local infrastructure.

#### Cellular (4G / 5G / NB‑IoT / LTE‑M)

- **What**: Uses mobile operator towers; wide‑area coverage.
- **Range**: Kilometers (wherever the operator has coverage).
- **Real‑life IoT example**: A **freight transportation** company installs a cellular GPS tracker on each truck. Every 60 seconds the tracker reports its lat/long to a fleet management dashboard.
- **Pros**: No local infrastructure needed, works while moving.
- **Cons**: Recurring SIM/data cost, higher power than short‑range radios.

#### LoRaWAN - Low Range WAN

- **What**: Long‑range, low‑power, low‑data‑rate protocol on unlicensed ISM bands.
- **Range**: 2–15 km depending on terrain.
- **Real‑life IoT example**: A **smart agriculture** farm deploys 200 soil‑moisture sensors across 500 acres. Each sensor sends 20 bytes of data every 15 minutes to a single LoRaWAN gateway, running on 2 AA batteries for 3+ years.
- **Pros**: Multi‑year battery life, long range, no SIM fees.
- **Cons**: Tiny payloads (tens of bytes), high latency, not suited for real‑time control.

#### Bluetooth Low Energy (BLE)

- **What**: Short‑range (~10–30 m), very low‑power wireless, often paired with a smartphone or gateway.
- **Real‑life IoT example**: A **smart diaper** has a tiny BLE moisture sensor patch. It talks to the parent's phone app which alerts them when the diaper is wet.
- **Pros**: Extremely low power, built into every smartphone.
- **Cons**: Very short range, needs a gateway to reach the internet.

#### Zigbee / Z‑Wave / Thread / Matter

- **What**: Short‑range, low‑power mesh‑networking protocols for home/building automation.
- **Real‑life IoT example**: A **smart home** uses Zigbee door sensors, motion sensors, and smart bulbs all connected through a hub. When you leave and the door closes, motion stops, all lights turn off.
- **Pros**: Mesh extends range; many devices per hub; very low power per node.
- **Cons**: Need a dedicated hub/coordinator; ecosystem fragmentation (Zigbee vs Z‑Wave vs Thread).

#### Ethernet / Industrial Fieldbuses (Modbus, CAN, Profibus)

- **What**: Wired connections for maximum reliability and low latency.
- **Real‑life IoT example**: A **smart factory** production line has PLCs connected via Modbus/Ethernet controlling robotic arms. A millisecond delay could cause a defective weld.
- **Pros**: Rock‑solid reliability, deterministic latency, no interference.
- **Cons**: Cabling cost, inflexible placement.

---

## 2. Sensors

### What is a Sensor?

A **sensor** is a device that **detects a physical quantity** (temperature, light, pressure, motion, etc.) and **converts it into an electrical signal** (analog voltage or digital data) that a microcontroller can read.

**Fullstack analogy**: A sensor is like an **HTTP request from the real world**. Instead of `{ "temperature": 23.5 }` arriving as JSON, it arrives as a 1.2 V analog signal or a digital I²C message — and your firmware "handler" processes it.

### Types of Sensors

#### Temperature Sensors

- **What they detect**: How hot or cold something is.
- **Examples**: Thermistor, LM35 (analog), DS18B20 (digital), TMP36.
- **Real‑life IoT**: A **smart building** HVAC system reads room temperatures every 30 s and adjusts air conditioning zone by zone. A **freight refrigeration truck** monitors cargo temperature and raises an alarm if it exceeds 4 °C.

#### Humidity Sensors

- **What they detect**: Water vapor concentration in the air.
- **Examples**: DHT11, DHT22, SHT31.
- **Real‑life IoT**: A **smart agriculture** greenhouse tracks humidity and opens roof vents (actuator) when it gets too humid to prevent mold.

#### Pressure Sensors

- **What they detect**: Force per unit area (air, fluid, or physical contact).
- **Examples**: BMP280 (barometric), force‑sensitive resistor (FSR).
- **Real‑life IoT**: A **next‑gen hospital** smart bed uses pressure sensors in the mattress to detect whether a patient is in bed and to prevent bedsores by alerting nurses if the patient hasn't moved.

#### Light Sensors

- **What they detect**: Ambient light intensity.
- **Examples**: LDR (Light Dependent Resistor), photodiodes, TSL2561 digital lux sensor.
- **Real‑life IoT**: A **smart building** dims corridor lights when natural sunlight is sufficient, saving energy.

#### Motion / Acceleration Sensors

- **What they detect**: Movement, tilt, vibration, acceleration, rotation.
- **Examples**: PIR (passive infrared), accelerometer (MPU6050), gyroscope, IMU.
- **Real‑life IoT**: A **smart factory** attaches vibration sensors to motors. When vibration patterns deviate from the baseline, the system predicts bearing failure weeks in advance (predictive maintenance).

#### Proximity / Distance Sensors

- **What they detect**: Presence or distance of nearby objects.
- **Examples**: Ultrasonic (HC‑SR04), infrared proximity, ToF (time‑of‑flight) lidar.
- **Real‑life IoT**: A **smart home** garage door senses an approaching car and opens automatically.

#### Gas / Air‑Quality Sensors

- **What they detect**: Concentration of specific gases or overall air quality.
- **Examples**: MQ‑2 (smoke/combustible gases), MQ‑135 (air quality), NDIR CO₂.
- **Real‑life IoT**: A **smart building** monitors CO₂ levels in conference rooms and increases ventilation when CO₂ exceeds 1000 ppm — improving occupant alertness and health.

#### Location / Position Sensors

- **What they detect**: Geographic coordinates or mechanical position.
- **Examples**: GPS module, rotary encoder, indoor RTLS (ultra‑wideband tags).
- **Real‑life IoT**: **Freight transportation** — GPS on every container lets the logistics dashboard show real‑time location on a map; geo‑fence alerts fire if a truck deviates from its route.

#### Biometric / Health Sensors

- **What they detect**: Heart rate, blood oxygen, skin temperature, EMG, ECG.
- **Examples**: MAX30102 (pulse oximeter), AD8232 (ECG), skin‑contact thermistors.
- **Real‑life IoT**: A **smart clothes** shirt with woven conductive threads measures heart rate and respiration during a workout and streams data via BLE to a coaching app.

#### Moisture Sensors

- **What they detect**: Wetness level in soil, fabric, or surfaces.
- **Examples**: Capacitive soil moisture probe, resistive wetness strip.
- **Real‑life IoT**: A **smart diaper** uses a thin moisture strip; when wetness crosses a threshold the parent's phone gets a push notification.

---

## 3. Actuators

### What is an Actuator?

An **actuator** is a device that **receives a command and changes something in the physical world** — it moves, heats, cools, locks, unlocks, opens, closes, or alerts.

**Fullstack analogy**: If a sensor is an incoming event/request, an actuator is the **side‑effect** your system performs — like sending an email, charging a card, or flipping a feature flag — except it happens in the real world (motor spins, valve opens, light turns on).

### Types of Actuators

#### Electric Motors (DC, Stepper)

- **What they do**: Provide continuous rotation.
- **Real‑life IoT**: A **smart factory** conveyor belt motor speeds up or slows down based on upstream sensor data to balance the production line.

#### Servo Motors

- **What they do**: Rotate to a precise angle and hold.
- **Real‑life IoT**: A **smart agriculture** greenhouse has servo‑driven roof vents that open to exactly 45° when temperature exceeds 30 °C, providing proportional ventilation.

#### Solenoid Valves

- **What they do**: Open or close a fluid/gas pathway.
- **Real‑life IoT**: A **smart agriculture** drip‑irrigation system opens individual zone valves when soil‑moisture drops below a threshold, then closes them when the threshold is met.

#### Relays and Contactors

- **What they do**: Electrically switch high‑power loads using a low‑voltage control signal.
- **Real‑life IoT**: A **smart home** uses a relay to turn a 220 V water heater on/off based on schedule and occupancy. The relay is controlled by a 3.3 V ESP32 GPIO pin.

#### Heaters and Coolers (Peltier, heating elements)

- **What they do**: Change temperature of a surface or environment.
- **Real‑life IoT**: **Smart clothes** with built‑in heating pads activate when the wearer's body temperature sensor detects cold conditions.

#### Locks and Latches

- **What they do**: Physically secure or release a door, drawer, or container.
- **Real‑life IoT**: A **freight transportation** container has a smart lock that only unlocks when GPS confirms the truck is within the destination geo‑fence AND the driver authenticates with a code.

#### Pumps

- **What they do**: Move fluids (water, fertilizer solution, medication).
- **Real‑life IoT**: A **next‑gen hospital** smart infusion pump adjusts dosage rate based on patient vitals — slowing down if blood pressure drops.

#### Visual / Audio Indicators (LEDs, buzzers, screens, sirens)

- **What they do**: Alert or inform humans.
- **Real‑life IoT**: A **smart home** security siren activates when the motion sensor detects intrusion and the homeowner is marked "away".

---

## 4. Microcontrollers

### What is a Microcontroller?

A **microcontroller (MCU)** is a **small, self‑contained computer on a single chip**: CPU + RAM + flash storage + GPIO pins + peripherals (ADC, timers, UART, SPI, I²C, PWM, etc.).

It runs **firmware** — a single long‑running program that reads sensors, applies logic, drives actuators, and communicates over a network.

**Fullstack analogy**: A microcontroller is like a tiny **edge server**:
- Very limited resources (think 256 KB flash, 64 KB RAM) compared to a cloud VM.
- Runs one "service" (firmware) that listens to "requests" (sensor data), applies "business rules", and produces "side‑effects" (actuator commands + cloud telemetry).

### Types of Microcontrollers for IoT

#### 8‑bit / 16‑bit MCUs

- **Examples**: ATmega328P (Arduino Uno), PIC16/18, MSP430.
- **Real‑life IoT**: A simple **smart home** door sensor on an ATmega reads a reed switch and sends HIGH/LOW over a Zigbee radio module.
- **Cost**: ~$1–3 per chip.
- **Pros**: Extremely cheap, low power, huge community (Arduino).
- **Cons**: Limited RAM/flash, no built‑in Wi‑Fi/BLE, can't do TLS easily.

#### 32‑bit ARM Cortex‑M MCUs

- **Examples**: STM32 (F1, F4, L4 series), nRF52840, TI CC2652, NXP LPC.
- **Real‑life IoT**: A **next‑gen hospital** wearable patient monitor uses an nRF52840 to sample ECG at 250 Hz, apply a real‑time filter, and stream data over BLE to a bedside gateway.
- **Cost**: ~$2–8 per chip.
- **Pros**: More processing power, rich peripherals, can run RTOS, good low‑power modes.
- **Cons**: Steeper learning curve than Arduino, often bare‑metal C / RTOS development.

#### Wi‑Fi / BLE SoCs (MCU + radio on one chip)

- **Examples**: ESP32, ESP32‑S3, ESP32‑C3, ESP8266.
- **Real‑life IoT**: A **smart building** room sensor node uses an ESP32 to read temperature, humidity, CO₂, and light, then publishes MQTT messages over Wi‑Fi to the building management platform.
- **Cost**: ~$2–5 per module.
- **Pros**: Integrated connectivity, rich SDK (ESP‑IDF, Arduino core), very low cost, can do TLS.
- **Cons**: Higher power than pure low‑power MCUs (Wi‑Fi radio is hungry); not ideal for multi‑year battery life.

#### LoRa‑integrated MCUs

- **Examples**: STM32WL, Heltec LoRa 32, RAK modules.
- **Real‑life IoT**: A **smart agriculture** sensor node uses an STM32WL (ARM + LoRa radio in one chip) to send soil data every 15 minutes, running on a solar cell + supercapacitor for years.
- **Cost**: ~$5–12 per module.
- **Pros**: Single‑chip LoRa + MCU, ultra‑low power, long range.
- **Cons**: Limited data rate, need a LoRaWAN gateway, smaller community than ESP32.

#### Linux‑capable Single‑Board Computers (SBCs)

- **Examples**: Raspberry Pi, BeagleBone, Jetson Nano.
- **Real‑life IoT**: A **smart factory** edge gateway runs on a Raspberry Pi 4 — it collects Modbus data from PLCs, runs a local anomaly‑detection ML model, and forwards alerts to the cloud.
- **Cost**: ~$15–75 per board.
- **Pros**: Full Linux, containers, Python/Node.js, camera/ML support.
- **Cons**: Much higher power, not real‑time without add‑ons, overkill for simple sensor nodes.

---

## 5. Network Protocols

### What is a Network Protocol?

A **network protocol** is a **set of rules governing how devices format, send, receive, and acknowledge messages** over a network.

**Fullstack analogy**: You already know HTTP, WebSockets, and maybe GraphQL for web apps. IoT adds specialized protocols optimized for tiny devices, unreliable links, and millions of connections.

### Types of IoT Network Protocols

#### MQTT (Message Queuing Telemetry Transport)

- **What**: Lightweight **publish/subscribe** protocol over TCP.
- **How it works**: Devices connect to a **broker**. A sensor publishes to a topic (e.g. `hospital/room12/heartrate`). Any service subscribed to that topic receives the message.
- **QoS levels**: 0 (fire‑and‑forget), 1 (at‑least‑once), 2 (exactly‑once).
- **Real‑life IoT**: A **smart building** with 500 sensor nodes all publish to an MQTT broker (e.g. Mosquitto). The building management dashboard and alerting service both subscribe to relevant topics.
- **Pros**: Very low overhead, bi‑directional (cloud can send commands to devices), great ecosystem.
- **Cons**: Needs a broker; message model is different from request/response.

#### HTTP / HTTPS

- **What**: Standard web **request/response** protocol.
- **Real‑life IoT**: An ESP32 in a **smart home** periodically POSTs sensor JSON to a REST API. A mobile app GETs the latest readings via the same API.
- **Pros**: Universally understood, huge tooling, easy integration with web backends.
- **Cons**: Verbose headers, higher bandwidth per message, server can't push to device without WebSockets/SSE.

#### CoAP (Constrained Application Protocol)

- **What**: Lightweight REST‑like protocol over **UDP** (not TCP), designed for very constrained devices.
- **Real‑life IoT**: An NB‑IoT water meter with 64 KB RAM uses CoAP to send readings to the utility's backend — UDP keeps the overhead minimal.
- **Pros**: Very small packet size, REST semantics (GET/PUT/POST), supports observe (like subscribe).
- **Cons**: Smaller ecosystem than MQTT/HTTP, UDP means you handle reliability yourself.

#### AMQP (Advanced Message Queuing Protocol)

- **What**: Enterprise‑grade message‑queuing protocol with strong delivery guarantees.
- **Real‑life IoT**: A **smart factory** MES system uses AMQP (via RabbitMQ or Azure Service Bus) between backend services where guaranteed delivery and complex routing are needed.
- **Pros**: Rich routing, transactions, strong delivery guarantees.
- **Cons**: Heavier than MQTT, generally used server‑to‑server rather than on constrained devices.

#### WebSockets

- **What**: Full‑duplex communication channel over a single TCP connection, initiated via HTTP upgrade.
- **Real‑life IoT**: A **smart home** dashboard in the browser maintains a WebSocket to the backend for real‑time updates of sensor values and actuator states.
- **Pros**: Real‑time, bi‑directional, works in browsers.
- **Cons**: Higher resource usage than MQTT, not as efficient for very constrained devices.

#### LoRaWAN (MAC‑layer protocol)

- **What**: Defines how devices join, transmit, and receive over LoRa radio.
- **Real‑life IoT**: Hundreds of **smart agriculture** field sensors talk LoRaWAN to a single gateway that forwards data via Ethernet/cellular to the cloud.
- **Pros**: Long range, very low power, supports thousands of nodes per gateway.
- **Cons**: Tiny payloads, high latency, duty‑cycle restrictions.

#### BLE, Zigbee, Z‑Wave, Thread (link‑layer / mesh protocols)

- **What**: Define how nearby devices discover each other, pair, and exchange data.
- **Real‑life IoT**: **Smart home** Zigbee mesh — a motion sensor tells the Zigbee hub "motion detected", the hub tells the Zigbee smart bulb "turn on". Messages hop through other Zigbee devices (mesh) to extend range.
- **Pros**: Very low power, mesh extends coverage.
- **Cons**: Need a hub/gateway, limited payload, interoperability varies by vendor.

#### Modbus / CAN / OPC UA (industrial protocols)

- **What**: Mature wired protocols for industrial control.
- **Real‑life IoT**: A **smart factory** PLC reads 50 sensors via Modbus RTU (serial). An edge gateway translates Modbus data to MQTT for cloud analytics.
- **Pros**: Battle‑tested, deterministic timing, safety‑certified.
- **Cons**: Often proprietary or wired‑only; need protocol translation to integrate with modern cloud.

---

## 6. Putting It ALL Together — Full Example

### Smart Greenhouse for Urban Farming

**Goal**: Automatically control temperature, humidity, irrigation, and lighting to grow vegetables on an urban rooftop — while keeping cost and power reasonable.

#### Components Map

| Layer | Choice | Why |
|-------|--------|-----|
| **Sensors** | DHT22 (temp + humidity), capacitive soil moisture probes, TSL2561 (light), MQ‑135 (CO₂) | Cover the four key growing parameters |
| **Actuators** | 12 V solenoid valves (irrigation), exhaust fans via relay, servo‑driven roof vents, LED grow lights via relay | Affordable, widely available, relay‑controlled |
| **Microcontroller** | ESP32 | Built‑in Wi‑Fi, enough GPIO for all sensors/actuators, can do TLS, ~$3/module |
| **Network protocol** | MQTT over Wi‑Fi (TLS) | Low overhead, pub/sub for real‑time dashboards and cloud commands |
| **IoT enabler** | Wi‑Fi router (existing building internet) + Mosquitto MQTT broker on a cloud VM | No extra infrastructure cost beyond the VM |
| **Backend** | Node.js service subscribing to MQTT topics, time‑series DB (InfluxDB), REST API for dashboard | Familiar stack for a fullstack developer |
| **Application** | React web dashboard + mobile PWA | Shows live sensor charts, actuator status, manual override buttons |

#### Data and Control Flow

```
Sensors  ──►  ESP32  ──► (MQTT over Wi‑Fi) ──►  Mosquitto Broker  ──►  Node.js Backend
                                                                            │
                                                                   ┌────────┴────────┐
                                                                   ▼                  ▼
                                                              InfluxDB          Rule Engine
                                                            (time‑series)    (threshold checks,
                                                                              weather API data)
                                                                   │
                                                                   ▼
                                                            MQTT command
                                                                   │
ESP32  ◄── (subscribes to greenhouse/commands/#) ◄─────────────────┘
  │
  ▼
Actuators (valves, fans, vents, lights)
```

1. ESP32 reads all sensors every 30 seconds.
2. Publishes JSON to topics like `greenhouse/zone1/soil-moisture`.
3. Backend subscribes, stores in InfluxDB, evaluates rules:
   - Soil moisture < 30% AND no rain forecast → open irrigation valve for zone 1.
   - Air temp > 32 °C → open roof vent to 60° and start exhaust fan.
   - Light < 200 lux after 8 AM → turn on grow lights.
4. Backend publishes commands to `greenhouse/commands/zone1` (e.g. `{"valve": "open", "duration_s": 120}`).
5. ESP32 receives command, drives the relay/servo.
6. Dashboard shows real‑time graphs and allows manual override.

#### Trade‑offs and Cost Breakdown

| Decision | Option A | Option B | Our choice & why |
|----------|----------|----------|------------------|
| **Connectivity** | Wi‑Fi | LoRaWAN | **Wi‑Fi** — single rooftop, building already has internet; we need enough bandwidth for occasional firmware OTA updates and a rich dashboard. LoRaWAN would make sense if we had 50 greenhouses across a city. |
| **MCU** | ESP32 (~$3) | STM32 + external Wi‑Fi module (~$8) | **ESP32** — cheaper total BOM, integrated Wi‑Fi, large community, Arduino & ESP‑IDF support. STM32 would be better for ultra‑low‑power or safety‑critical applications. |
| **Protocol** | MQTT | HTTP polling | **MQTT** — persistent connection means the cloud can push commands instantly; much lower overhead for frequent small messages. HTTP polling would waste bandwidth and add latency. |
| **Actuator control** | On/off relays (~$1 each) | Variable‑speed drives (~$20+ each) | **Relays** for now — cheaper, simpler; proportional control (like variable fan speed) can be added later for the vents if needed. |
| **Edge vs cloud logic** | All logic in cloud | All logic on ESP32 | **Hybrid** — ESP32 has basic fail‑safe rules (e.g., "if soil very dry → water 30 s even without cloud") so plants survive an internet outage. Advanced rules (weather forecast integration, ML‑based scheduling) run in the cloud. |
| **Security** | No TLS | TLS + device auth | **TLS** — MQTT over TLS with username/password per device. Cost is negligible (ESP32 handles TLS fine); risk of someone remotely opening valves is real. |

#### Estimated Hardware Cost (per greenhouse)

| Item | Qty | Unit cost | Total |
|------|-----|-----------|-------|
| ESP32 module | 1 | $3 | $3 |
| DHT22 | 2 | $3 | $6 |
| Capacitive soil moisture sensor | 4 | $2 | $8 |
| TSL2561 light sensor | 1 | $3 | $3 |
| MQ‑135 air quality sensor | 1 | $4 | $4 |
| 12 V solenoid valve | 4 | $5 | $20 |
| 4‑channel relay module | 2 | $3 | $6 |
| SG90 servo (for vents) | 2 | $2 | $4 |
| 12 V exhaust fan | 1 | $8 | $8 |
| LED grow light strip | 1 | $12 | $12 |
| 12 V power supply | 1 | $6 | $6 |
| Wiring, enclosure, misc | — | — | ~$10 |
| **Total hardware** | | | **~$90** |

Cloud cost: a small VM ($5–10/month) running Mosquitto + Node.js + InfluxDB handles a single greenhouse easily.

This example ties together every building block: **sensors** (DHT22, soil moisture, light, CO₂), **actuators** (valves, fans, servos, lights), **microcontroller** (ESP32), **network protocol** (MQTT over TLS), **IoT enabler** (Wi‑Fi + cloud platform), and **networking** (TCP/IP, Wi‑Fi, MQTT broker) — with clear trade‑off reasoning and realistic cost.

---

## 7. Raspberry Pi vs Arduino in IoT

### 7.1 What They Are

- **Arduino (e.g., Arduino Uno, Nano)**
  - A **microcontroller board** built around a chip like the ATmega328P.
  - Runs **one small program (firmware)** at a time, with **no operating system**.
  - Designed for **direct control of hardware**: reading sensors, driving LEDs, motors, relays, etc.

- **Raspberry Pi (e.g., Pi 4, Pi Zero 2 W)**
  - A **single‑board computer (SBC)** — like a tiny Linux PC.
  - Runs a full **operating system** (usually Raspberry Pi OS, a Linux distro).
  - Can run **many programs at once**: Python scripts, databases, web servers, browser, etc.

**Analogy**:  
Arduino is like a simple **embedded controller** inside a microwave oven.  
Raspberry Pi is like a small **desktop computer** that happens to have pins for electronics.

### 7.2 Hardware Resources

- **Arduino**
  - CPU: 8‑bit, tens of MHz (e.g., 16 MHz).
  - RAM: a few **KB** (e.g., 2 KB on Uno).
  - Flash (program storage): tens of KB.
  - No built‑in storage beyond flash; no HDMI; very limited peripherals.

- **Raspberry Pi**
  - CPU: 32‑/64‑bit, **hundreds of MHz to GHz** (multi‑core).
  - RAM: **hundreds of MB to several GB**.
  - Storage: uses microSD card (GBs).
  - Has HDMI, USB, audio, camera interface, Ethernet/Wi‑Fi (on many models).

**Key point**: Raspberry Pi is **much more powerful** but also **uses more power** and is more complex.

### 7.3 Programming Model

- **Arduino**
  - You write code in the **Arduino IDE** (C/C++ style).
  - Program structure: `setup()` (runs once) and `loop()` (runs forever).
  - Code is **flashed directly** into the microcontroller.
  - No operating system: your code has **full control** of the chip and timing.

- **Raspberry Pi**
  - You write code like on any Linux machine: **Python, Node.js, C/C++, Go**, etc.
  - You can run multiple programs, use the terminal, install packages (`apt`, `pip`, `npm`).
  - Has a **file system**, users, processes, networking stack, etc.

**Key point**: Arduino firmware is more like a **single infinite loop**. Raspberry Pi programs are like **normal apps on a computer**.

### 7.4 I/O and Real‑Time Control

- **Arduino**
  - Lots of **GPIO pins**, easy to do **analog input** (via ADC) and **PWM** for motor/LED control.
  - Very good for **precise timing** (microseconds to milliseconds), since there is no OS interrupting your code.
  - Ideal when you need **hard real‑time** behavior (e.g., generate clean PWM signals, read sensors at exact intervals).

- **Raspberry Pi**
  - Has GPIO pins too, but:
    - Many models **do not have built‑in analog inputs** (need external ADC).
    - Timing is less precise because Linux is multitasking.
  - Fine for **"soft real‑time"** tasks (e.g., reading a sensor every 100 ms), but not as deterministic as an MCU.

**Key point**: For **very precise hardware timing**, Arduino (or other MCUs) is usually better.

### 7.5 Connectivity and High‑Level Features

- **Arduino**
  - Classic boards (like Uno) **do not have Wi‑Fi/Ethernet** built‑in; you add shields/modules.
  - Limited CPU/RAM makes **TLS, HTTPS, complex protocols** harder (though possible with some boards).

- **Raspberry Pi**
  - Often has **built‑in Ethernet and Wi‑Fi**, sometimes Bluetooth.
  - Can easily run **full network stacks**: HTTPS servers, MQTT clients/brokers, databases, Docker containers, etc.
  - Can handle **cameras, UI, edge ML (TensorFlow Lite)** and store logs locally.

**Key point**: For **networking, UI, and heavy processing**, Raspberry Pi is usually the better fit.

### 7.6 Power, Cost, and Use Cases

- **Arduino**
  - Very **low power consumption** — can run on batteries for a long time (months/years with proper design).
  - **Cheaper** per node (basic boards are <$10).
  - Ideal for:
    - Tiny **sensor nodes** in the field.
    - Simple **control tasks** (switch a relay, blink LEDs, read a button).
    - **Battery‑powered** or energy‑harvesting designs.

- **Raspberry Pi**
  - **Higher power draw** — usually powered from mains/USB adapters.
  - **More expensive** than a simple Arduino board.
  - Ideal for:
    - **Edge gateways** that collect data from many microcontrollers/sensors.
    - Running **local dashboards, web servers, or ML models**.
    - **Prototyping** where you want a full OS, keyboard, monitor, and internet.

### 7.7 How They Work Together in IoT

In many realistic IoT systems you **use both**:

- **Arduino (or other MCUs)** sit **close to the sensors and actuators**:
  - Read raw data (temperature, pressure, acceleration).
  - Apply simple rules (thresholds, debouncing, safety cut‑offs).
  - Send processed data (e.g., averaged values) to a higher‑level device.

- **Raspberry Pi** acts as an **edge gateway / mini‑server**:
  - Talks to several Arduinos via **UART, I²C, SPI, or USB/serial**.
  - Aggregates data, stores it temporarily, maybe runs local analytics.
  - Connects to the **cloud** via Wi‑Fi/Ethernet using MQTT/HTTP.
  - Provides a **local web dashboard** or APIs for other services.

**Summary**:

- **Choose Arduino** when you need **simple, low‑power, reliable hardware control** close to the sensors/actuators.
- **Choose Raspberry Pi** when you need a **small computer with networking, storage, and the ability to run complex software**.
- In many IoT projects, **Arduino‑class MCUs + Raspberry Pi as a gateway** give the best of both worlds.

