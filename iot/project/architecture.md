# Architecture

## Overview

The ElderCare IoT architecture is designed for a low-cost student prototype with real-time monitoring. The system uses a laptop as the gateway and backend host instead of a Raspberry Pi. This keeps the budget lower, supports faster development, and still allows live device communication through MQTT.

The architecture has three main layers:

1. Edge devices
2. Gateway and backend
3. Web application

## 1. Edge Devices

### Wearable Device

The wearable combines health monitoring, fall detection, and emergency support in one device.

Main components:

- `ESP32` microcontroller
- `MAX30102` for heart rate monitoring
- `MPU6050` for fall detection
- `DS18B20` for temperature monitoring
- push button for SOS alert
- battery and charging module

Responsibilities:

- read sensor data at regular intervals
- detect possible fall events
- trigger SOS alert when button is pressed
- publish readings and events over Wi-Fi using `MQTT`

### Smart Medicine Box

Main components:

- `ESP32` or `Arduino Nano + ESP8266`
- buzzer
- LED
- confirmation button or compartment sensor
- RTC module for scheduled reminders

Responsibilities:

- remind the patient at medicine times
- track whether medicine was taken
- publish reminder and missed-dose events to the backend

## 2. Gateway and Backend

The laptop acts as the local gateway, MQTT broker host, and backend server.

Responsibilities:

- run a local `MQTT` broker such as `Mosquitto`
- receive data from ESP32 devices over Wi-Fi
- subscribe to device topics and process incoming messages
- expose backend API endpoints
- store patient and device data in a local database
- process alert rules
- serve the dashboard frontend
- forward live updates to the dashboard

Suggested backend stack:

- `Node.js + Express` *or* `Python FastAPI`
- `Mosquitto MQTT broker` *for device messaging*
- `SQLite` *for local database*
- `REST API` *for sign-in, device linking, and dashboard data*
- `WebSocket` or `Socket.IO` *for live dashboard updates*

*Optional:*

- `CoAP` can be explored later for lightweight control commands if required academically
- cloud sync can be added in a future version

## 3. Web Application

The web app is the main user interface.

Core modules:

- sign-in and account management
- patient profile management
- device registration and linking
- dashboard for live monitoring
- alert and event history view

Suggested frontend stack:

- `React` for the dashboard
- `Chart.js` for health trend graphs
- browser notifications for alerts
- `WebSocket` or `Socket.IO` client for live updates

## Data Flow

### Step 1: User Sign-In

- guardian signs in to the web application
- backend verifies credentials
- session starts and dashboard becomes accessible

### Step 2: Device Connection

- wearable and medicine box are powered on
- devices connect to Wi-Fi
- each device is configured with Wi-Fi and MQTT broker information
- each device sends its `device_id` to the backend
- user links device to patient from the web app

### Step 3: Monitoring and Alerts

- wearable publishes heart rate, temperature, fall, and SOS data to MQTT topics
- medicine box publishes reminder and dose status to MQTT topics
- backend subscribes to device topics, stores data, and checks alert conditions
- backend pushes live updates to the dashboard
- dashboard shows live status and recent events in real time

## Example MQTT Topics

- `eldercare/patient_id/wearable/heartrate`
- `eldercare/patient_id/wearable/temperature`
- `eldercare/patient_id/wearable/fall`
- `eldercare/patient_id/wearable/sos`
- `eldercare/patient_id/medicine/reminder`
- `eldercare/patient_id/medicine/missed`

## OSI Model Data Transfer

This project can also be explained using the OSI model. When the wearable or medicine box sends data to the laptop backend, the message passes through several communication layers.

### 1. Physical Layer

This is the actual hardware transmission layer.

In this project:

- the `ESP32` sends wireless signals through Wi-Fi
- the laptop receives those wireless signals through its Wi-Fi adapter
- data is physically carried as radio waves

### 2. Data Link Layer

This layer handles communication inside the local network and transfers frames between nearby devices.

In this project:

- the ESP32 and laptop communicate through Wi-Fi frames
- MAC addresses help identify sender and receiver on the local network
- local delivery happens before the data moves to higher layers

### 3. Network Layer

This layer is responsible for logical addressing and routing using IP.

In this project:

- each ESP32 device and the laptop has an IP address
- data is sent from the device IP to the laptop IP
- `IP` makes sure packets reach the correct destination inside the network

### 4. Transport Layer

This layer manages end-to-end delivery between applications.

In this project:

- `TCP` is commonly used with `MQTT`
- TCP helps provide reliable delivery, ordered packets, and retransmission when needed
- this is useful because health alerts and sensor updates should not be lost easily

### 5. Session Layer

This layer manages the communication session between endpoints.

In this project:

- the ESP32 maintains a session with the MQTT broker running on the laptop
- when the connection is active, the device can keep publishing sensor data
- if the connection drops, the device can reconnect and continue sending data

### 6. Presentation Layer

This layer handles data formatting so both sides understand the message.

In this project:

- sensor data may be formatted as `JSON` or another structured message format
- values such as heart rate, temperature, fall status, and device ID are organized into a readable payload
- encoding ensures the backend can correctly parse the incoming data

Example payload:

```json
{
  "device_id": "wearable_01",
  "heart_rate": 82,
  "temperature": 36.8,
  "fall": false,
  "timestamp": "2026-04-03T10:15:00Z"
}
```

### 7. Application Layer

This is the layer where the actual user-facing or system-specific service operates.

In this project:

- `MQTT` works at the application layer for device messaging
- the backend application subscribes to MQTT topics and processes incoming data
- the web system uses `HTTP` for sign-in and device linking
- the dashboard uses `WebSocket` or `Socket.IO` for live updates

## End-to-End Example

If the wearable detects a heart rate reading:

1. The sensor reading is collected by the `ESP32`.
2. The reading is placed into a payload such as JSON.
3. The ESP32 publishes the message to an MQTT topic.
4. Wi-Fi carries the data from the ESP32 to the laptop.
5. TCP/IP delivers the packets reliably to the MQTT broker.
6. The backend receives the message from the broker and stores it in the database.
7. The backend pushes the new value to the dashboard in real time.

## OSI Mapping Summary

| OSI Layer | Role in ElderCare IoT |
| --- | --- |
| Application | MQTT, HTTP, WebSocket |
| Presentation | JSON payload formatting |
| Session | MQTT connection/session management |
| Transport | TCP |
| Network | IP addressing and routing |
| Data Link | Wi-Fi frame transfer, MAC addressing |
| Physical | Radio signal over Wi-Fi hardware |

## Proposed High-Level Diagram

```text
[Wearable: ESP32 + MAX30102 + MPU6050 + DS18B20]
                     |
                     | Wi-Fi + MQTT
                     v
   [Laptop Gateway + Mosquitto + Backend API + SQLite]
                     ^
                     | Wi-Fi + MQTT
[Smart Medicine Box: ESP32 + RTC + buzzer + LED]
                     |
                     v
        [Web Dashboard + WebSocket for Guardian]
```

## Why This Architecture Fits the Project

- lower hardware cost
- simpler to build and debug
- suitable for group project demonstration
- enough for real-time prototype monitoring
- MQTT makes live data and instant alerting easier to demonstrate
- easy to extend later with cloud hosting or mobile app

## Future Extension Ideas

- add SMS alerts using `SIM800L` or an online SMS API
- add cloud deployment for remote access outside local network
- add doctor analytics view
- add battery and device health monitoring

