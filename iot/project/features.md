# Features

This document lists the main functional features of the ElderCare IoT system.

## 1. User Authentication

- Sign up and sign in through the web application
- Separate access for guardian, family member, or administrator
- Secure account-based access to patient and device data

## 2. Device Registration and Linking

- Register wearable device using a unique `device_id`
- Register smart medicine box using a unique `device_id`
- Link devices to a patient account from the web app
- Show connection status for each device
- Verify whether each device is online and publishing data

## 3. Wearable Health Monitoring

The wearable combines patient monitoring and fall detection in one device.

- Heart rate monitoring using `MAX30102`
- Body or skin temperature monitoring using `DS18B20`
- Periodic sensor readings sent in real time over `MQTT`
- Abnormal reading detection based on preset thresholds

Possible threshold examples:

- heart rate below 50 bpm or above 120 bpm
- temperature above 38 C
- temperature below 35 C

## 4. Fall Detection

- Uses `MPU6050` accelerometer and gyroscope
- Detects sudden motion change and stillness pattern
- Sends emergency alert immediately when a possible fall is detected
- Wearable and fall detector remain in the same single device

## 5. SOS Emergency Support

- Dedicated SOS button on the wearable
- One press publishes an emergency event instantly to the backend
- Guardian receives immediate alert in the dashboard
- Optional support for SMS or app notification in later versions

## 6. Smart Medicine Box

- Scheduled medicine reminder using buzzer and LED
- Patient can confirm medicine taken
- Missed dose is tracked after a grace period
- Guardian is notified if the medicine is not taken on time
- Medicine box publishes reminder and dose status through `MQTT`

## 7. Real-Time Dashboard

The dashboard is the main interface for guardians and family members.

- View live heart rate and temperature
- See fall detection alerts
- See SOS emergency alerts
- Monitor medicine reminder and missed dose status
- View device online or offline state
- View recent patient event history
- Receive dashboard updates without manual page refresh

## 8. Historical Data and Trends

- Store sensor readings in the backend database
- Show recent charts for health trends
- Track medicine compliance history
- Review fall or emergency event logs
- Keep both live status and historical records in the same system

## 9. Real-Time Communication

- `MQTT` is used for device-to-laptop communication
- Devices publish readings and events to defined topics
- Laptop backend subscribes to those topics and processes events
- Dashboard receives live updates from backend through `WebSocket` or `Socket.IO`

## 10. Alerting System

- Dashboard-based instant alerts
- Browser notification or in-app alert
- Optional email, Telegram, or SMS integration
- Multiple guardians can receive the same alert

## 11. Low-Cost Deployment

- Uses affordable ESP32-based hardware
- Laptop acts as gateway and backend host
- MQTT broker can run locally on the laptop at no extra cost
- No Raspberry Pi required for the prototype
- Suitable for student demonstration and low-budget implementation
