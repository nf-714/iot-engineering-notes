# ElderCare IoT Presentation Source

## Project Title

**ElderCare IoT: A Low-Cost Real-Time Elderly Monitoring and Safety Support System**

## Project Overview

ElderCare IoT is a low-cost healthcare monitoring system designed for families who want to support elderly parents or relatives from a distance. The system combines a wearable health and fall detection device, a smart medicine box, and a real-time web dashboard for guardians or caregivers.

The project is designed to be practical, affordable, and achievable for a student team. Instead of using expensive hardware such as a Raspberry Pi for the gateway, the system uses a laptop as the local gateway and backend host. This reduces cost and makes development, testing, and demonstration easier.

The system focuses on a real and common problem: families worry about elderly people falling, missing medicine, or facing abnormal health conditions while alone at home.

## Problem Statement

Many elderly people live alone or spend long hours without direct supervision. Their families often worry about:

- sudden falls
- abnormal heart rate or temperature
- missed medicine doses
- delayed emergency response

Existing healthcare devices are often costly, difficult to set up, or not suitable for low-budget family use. There is a need for a simple and affordable real-time monitoring system that can improve safety and peace of mind.

## Proposed Solution

ElderCare IoT solves this problem through three connected parts:

1. A wearable device for heart rate monitoring, temperature monitoring, fall detection, and SOS emergency support.
2. A smart medicine box that reminds the patient to take medicine and reports missed doses.
3. A web application that supports sign-in, device connection, and real-time dashboard monitoring.

## Why We Chose ElderCare IoT Instead of AURA

Our team considered another concept called `AURA (Adaptive Universal Robotic Assistant)`. AURA is creative and futuristic, but it combines too many different ideas into one system, including robotics, emotional interaction, smart home control, child care, hazard detection, and home patrol.

We selected ElderCare IoT instead because it is more focused, more practical, and more achievable for a student group project.

### Why AURA Was Not Selected

- it is too broad and scattered
- it tries to solve many unrelated problems at once
- it requires robotics, AI, video, navigation, smart home control, and many other complex subsystems
- it would cost more to build
- it is harder to explain clearly as one product
- it has a higher risk of becoming an incomplete prototype

### Why ElderCare IoT Was Selected

- it solves one clear problem: elderly safety and care monitoring
- it has a clear target user: families and guardians of elderly people
- it has a realistic business value
- it is technically strong but still manageable
- it is lower-cost and more suitable for a student prototype
- it can be demonstrated clearly with real-time data

## Business and Real-World Value

ElderCare IoT has a stronger and clearer value proposition than AURA.

### Target Users

- families with elderly parents
- guardians and caregivers
- small clinics or community health workers

### Core Value

- affordable elderly safety monitoring
- real-time health updates
- fall detection and emergency alerting
- medicine adherence support
- peace of mind for families

### Why It Makes Sense in the Real World

- fall detection is a meaningful and understandable need
- families care about missed medicine and abnormal health conditions
- wearable monitoring and a medicine box are easier to adopt than a mobile robot
- the system can start as a student prototype and later be expanded

## Main Objectives

- build a wearable device that combines health monitoring and fall detection
- build a smart medicine reminder box
- create a secure web application with sign-in and device linking
- provide a real-time dashboard for guardians
- keep the system affordable in Bangladeshi Taka
- use real-time IoT communication for live monitoring

## Key Features

### Wearable Features

- heart rate monitoring using `MAX30102`
- body or skin temperature monitoring using `DS18B20`
- fall detection using `MPU6050`
- SOS emergency button
- real-time data publishing

### Medicine Box Features

- scheduled reminder using buzzer and LED
- medicine taken confirmation
- missed-dose detection after grace period
- guardian notification support

### Web Dashboard Features

- sign-in and account access
- device registration and linking
- live display of health values
- fall and SOS alerts
- medicine reminder status
- device online or offline status
- recent event history
- historical trend charts

## System Architecture

The ElderCare IoT system has three main layers:

1. Edge devices
2. Gateway and backend
3. Web application

### 1. Edge Devices

#### Wearable Device

Main components:

- `ESP32`
- `MAX30102`
- `MPU6050`
- `DS18B20`
- SOS push button
- battery and charging module

Responsibilities:

- read health data
- detect fall events
- trigger SOS alerts
- publish data in real time

#### Smart Medicine Box

Main components:

- `ESP32`
- RTC module
- buzzer
- LED
- confirmation button or reed switch

Responsibilities:

- remind medicine times
- detect whether medicine was taken
- publish medicine status and missed-dose events

### 2. Gateway and Backend

The laptop acts as:

- local gateway
- MQTT broker host
- backend API server
- local database host

Responsibilities:

- receive real-time messages from devices
- process alert logic
- store patient and device data
- push live updates to the dashboard

Suggested backend technologies:

- `Mosquitto MQTT broker`
- `Node.js + Express` or `Python FastAPI`
- `SQLite`
- `WebSocket` or `Socket.IO`

### 3. Web Application

The web app is used by guardians or family members.

Core modules:

- sign-in and authentication
- patient profile management
- device registration and linking
- live monitoring dashboard
- event and alert history

Suggested frontend technologies:

- `React`
- `Chart.js`
- `WebSocket` or `Socket.IO` client

## Real-Time Communication Flow

The prototype requires real-time data, so the system uses `MQTT` as the main device communication protocol.

### Why MQTT

- lightweight and suitable for IoT
- supports publish/subscribe communication
- good for instant alerts such as fall detection and SOS
- works well with ESP32 and laptop-based backend
- supports real-time prototype demonstrations

### Data Flow

1. The wearable reads heart rate, temperature, and fall status.
2. The wearable publishes the data to MQTT topics.
3. The medicine box publishes reminder and medicine status events.
4. The laptop runs an MQTT broker and backend subscriber.
5. The backend stores the data and checks alert conditions.
6. The backend sends live updates to the dashboard through WebSocket.
7. The guardian sees changes in real time.

### Example MQTT Topics

- `eldercare/patient_id/wearable/heartrate`
- `eldercare/patient_id/wearable/temperature`
- `eldercare/patient_id/wearable/fall`
- `eldercare/patient_id/wearable/sos`
- `eldercare/patient_id/medicine/reminder`
- `eldercare/patient_id/medicine/missed`

## Why Laptop Gateway Instead of Raspberry Pi

Using a laptop as the gateway is a practical choice for this prototype because:

- it avoids additional hardware cost
- it can run the backend, MQTT broker, and database
- it is easier to debug and maintain
- it is suitable for classroom or lab demonstration
- it helps keep the project within a student budget

## Communication Choice

### Why Wi-Fi Is Suitable

Wi-Fi is the most suitable communication medium for this prototype because:

- ESP32 already supports Wi-Fi
- the laptop can easily connect on the same network
- it supports real-time MQTT messaging
- it does not require extra gateway hardware
- it is practical for indoor demo environments

### Why Not LoRa as the Main Option

LoRa is useful for long-range, low-data-rate communication, but it is not ideal here because:

- the project is mainly indoor and home-based
- the prototype needs more frequent real-time updates
- LoRa adds extra hardware and setup complexity
- Wi-Fi is more practical for laptop-based live monitoring

## OSI Model Explanation

The system can also be explained using the OSI model:

- **Physical Layer:** Wi-Fi radio signals are transmitted between ESP32 and laptop
- **Data Link Layer:** Wi-Fi frames and MAC addressing handle local delivery
- **Network Layer:** IP addresses route data between devices and laptop
- **Transport Layer:** TCP provides reliable delivery for MQTT
- **Session Layer:** MQTT session maintains connection between devices and broker
- **Presentation Layer:** data is formatted as JSON or structured payloads
- **Application Layer:** MQTT, HTTP, and WebSocket support the actual services

## Resources and Budget

The project is designed to be low-cost in Bangladeshi Taka.

### Wearable Device Budget

| Item | Estimated Cost (BDT) |
| --- | ---: |
| ESP32 development board | 500-800 |
| MAX30102 sensor | 250-500 |
| MPU6050 sensor | 120-250 |
| DS18B20 or similar sensor | 80-250 |
| SOS push button | 20-50 |
| Buzzer or vibration motor | 50-150 |
| Battery and charging module | 250-600 |
| Band, case, and wires | 150-400 |

Estimated wearable total: **1,420-3,000 BDT**

### Smart Medicine Box Budget

| Item | Estimated Cost (BDT) |
| --- | ---: |
| ESP32 or Arduino Nano | 400-800 |
| RTC module | 120-250 |
| Buzzer | 30-80 |
| LED | 20-50 |
| Push button or reed switch | 30-100 |
| Plastic box or enclosure | 150-400 |
| Jumper wires and basic parts | 100-250 |

Estimated medicine box total: **850-1,930 BDT**

### Gateway and Software Budget

| Item | Estimated Cost (BDT) |
| --- | ---: |
| Laptop | 0 additional if already available |
| Wi-Fi connection | existing resource |
| Mosquitto MQTT broker | 0 |
| Backend framework | 0 |
| SQLite database | 0 |
| Dashboard frontend | 0 |

Estimated gateway/software total: **0 BDT** if the laptop and internet are already available.

### Total Estimated Budget

- wearable: `1,420-3,000 BDT`
- medicine box: `850-1,930 BDT`
- gateway/software: `0 BDT` additional

Estimated total prototype budget: **2,270-4,930 BDT**

## Why This Project Is Strong for Presentation

This project is strong for presentation because it has:

- a clear social problem
- a focused and understandable solution
- real-time IoT communication
- embedded systems and web technologies together
- a realistic low-cost implementation
- practical future expansion possibilities

It is easier to defend than a broad idea because every part of the system directly supports one central goal: protecting and assisting elderly people.

## Future Expansion Ideas

After the first version, the project can be extended with:

- SMS alerts using `SIM800L` or an SMS API
- doctor view and health analytics
- cloud deployment for remote internet access
- battery health monitoring
- simple voice assistant features
- hazard detection as a later extension

## Final Conclusion

ElderCare IoT is a focused, practical, and affordable IoT project for real-time elderly monitoring and support. Compared to AURA, it is more realistic for a student group, more useful for a clear user group, and more achievable within limited time and budget.

It combines a wearable device, a medicine box, and a live dashboard into one coherent system that solves a meaningful real-world problem.
