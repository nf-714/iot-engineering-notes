# ElderCare IoT

ElderCare IoT is a low-cost elderly care monitoring system designed for families who want peace of mind when they cannot stay with aging parents all the time. The project combines a wearable health and fall detection device, a smart medicine box, and a real-time web dashboard for guardians or family members.

The main goal is to monitor important daily risks for elderly people without making the system too expensive or too complex. Instead of using a Raspberry Pi as the gateway, this project uses a laptop as the local gateway and backend server. This reduces hardware cost and makes the prototype easier for a student team to build and demonstrate. To support real-time monitoring, the devices communicate through MQTT and the dashboard receives live updates from the backend.

## Problem Statement

Many elderly people live alone or spend long periods without direct supervision. Families often worry about:

- sudden falls
- unusual heart rate or body temperature
- missed medicine doses
- delayed emergency response

Traditional healthcare monitoring devices are often expensive, difficult to install, or not designed for low-budget family use. This project aims to create a practical student-built alternative using affordable IoT components.

## Proposed Solution

The proposed system has three main parts:

1. A wearable device for heart rate, temperature, fall detection, and emergency SOS.
2. A smart medicine box that reminds the patient to take medicine and reports missed doses.
3. A web-based system for sign-in, device connection, and live dashboard monitoring.

## Project Objectives

- Build a wearable device that combines patient health monitoring and fall detection.
- Build a smart medicine reminder box for medicine schedule support.
- Create a secure web app with sign-in and patient-device linking.
- Show real-time data and alerts on a guardian dashboard.
- Use MQTT-based communication for fast device-to-backend data delivery.
- Keep the full prototype affordable in Bangladeshi Taka.

## Why Laptop Gateway

Using a laptop as the gateway is suitable for this project because:

- it removes the cost of a Raspberry Pi
- it can run the backend API and database locally
- it can host the dashboard during demos
- it is easier for a student team to debug and maintain

In the prototype, ESP32-based devices will connect over Wi-Fi to the laptop. The laptop will run an MQTT broker, backend API, and database. It will receive sensor data in real time, store records, process alerts, and serve the web dashboard.

## Basic User Flow

1. The guardian or user signs in to the web app.
2. The user connects and registers the wearable and medicine box with the account.
3. The dashboard shows live health data, fall alerts, medicine reminders, and device status.

## Expected Outcome

The final result will be a practical low-cost IoT healthcare monitoring prototype that helps families track elderly safety and daily care needs through one simple real-time web system.
