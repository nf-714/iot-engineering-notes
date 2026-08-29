# Resources and Budget

## Goal

This document lists the main resources needed to build the ElderCare IoT prototype with the lowest budget possible in Bangladeshi Taka (BDT).

## 1. Hardware Resources

### Wearable Device


| Item                            | Purpose                    | Estimated Cost (BDT) |
| ------------------------------- | -------------------------- | -------------------- |
| ESP32 development board         | Main controller with Wi-Fi | 500-800              |
| MAX30102 sensor                 | Heart rate monitoring      | 250-500              |
| MPU6050 sensor                  | Fall detection             | 120-250              |
| DS18B20 or similar sensor       | Temperature monitoring     | 80-250               |
| SOS push button                 | Emergency alert input      | 20-50                |
| Small buzzer or vibration motor | Alert feedback             | 50-150               |
| Battery + charging module       | Portable power             | 250-600              |
| Band/case/wires                 | Assembly materials         | 150-400              |


Estimated wearable total: **1,420-3,000 BDT**

### Smart Medicine Box


| Item                         | Purpose                     | Estimated Cost (BDT) |
| ---------------------------- | --------------------------- | -------------------- |
| ESP32 or Arduino Nano        | Main controller             | 400-800              |
| RTC module                   | Scheduled reminder timing   | 120-250              |
| Buzzer                       | Reminder sound              | 30-80                |
| LED                          | Visual reminder             | 20-50                |
| Push button or reed switch   | Medicine taken confirmation | 30-100               |
| Plastic box/enclosure        | Medicine storage body       | 150-400              |
| Jumper wires and basic parts | Assembly                    | 100-250              |


Estimated medicine box total: **850-1,930 BDT**

## 2. Gateway and Software Resources


| Item                           | Purpose                              | Estimated Cost (BDT)              |
| ------------------------------ | ------------------------------------ | --------------------------------- |
| Laptop                         | Gateway, backend API, dashboard host | 0 additional if already available |
| Wi-Fi connection or hotspot    | Device communication                 | existing resource                 |
| Mosquitto MQTT broker          | Real-time device messaging           | 0                                 |
| Node.js or Python backend      | API development                      | 0                                 |
| SQLite database                | Local data storage                   | 0                                 |
| React or simple HTML dashboard | Frontend                             | 0                                 |
| GitHub                         | Source control                       | 0                                 |


Estimated gateway/software total: **0 BDT** if existing laptop and internet are already available.

## 3. Optional Alerting Resources


| Item                     | Purpose                 | Estimated Cost (BDT) |
| ------------------------ | ----------------------- | -------------------- |
| Telegram or email alerts | Internet-based alerting | 0                    |
| Twilio or other SMS API  | SMS alerts              | depends on usage     |
| SIM800L GSM module       | Hardware SMS option     | 500-900              |


For the first version, internet-based alerts are the cheapest option. Real-time device communication can still be achieved locally using `MQTT` without adding hardware cost.

## 4. Estimated Total Budget

### Minimum practical prototype

- wearable: about `1,420-3,000 BDT`
- medicine box: about `850-1,930 BDT`
- gateway/software: `0 BDT` additional if laptop is available

Estimated full system total: **2,270-4,930 BDT**

### With optional GSM SMS support

Estimated full system total: **2,770-5,830 BDT**

## 5. Human Resources

Suggested team resource split:

- 1 member for embedded system and sensor integration
- 1 member for backend API and database
- 1 member for frontend dashboard
- 1 member for documentation, testing, and presentation

In a small group, members can share multiple roles.

## 6. Recommended Low-Budget Stack

To keep cost and complexity low, the recommended stack is:

- wearable with `ESP32 + MAX30102 + MPU6050 + DS18B20`
- medicine box with `ESP32`
- laptop as gateway and backend
- `Mosquitto MQTT broker` for real-time sensor data and alerts
- local database with `SQLite`
- web dashboard with `React` or plain web technologies
- `WebSocket` or `Socket.IO` for live dashboard updates
- browser, email, or Telegram alerts before adding SMS

## 7. Budget Reduction Notes

- avoid Raspberry Pi in the first prototype
- avoid custom mobile app in the first version
- use one wearable for both patient monitoring and fall detection
- use free software tools and open-source frameworks
- use local MQTT infrastructure on the laptop before moving to cloud services
- buy components from local electronics markets or trusted online sellers in Bangladesh

## Conclusion

ElderCare IoT can be built as a meaningful student prototype within a relatively low budget. Using a laptop as the gateway and running MQTT locally makes the project more affordable, practical, and suitable for real-time monitoring.