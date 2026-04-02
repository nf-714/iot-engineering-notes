# Scenerio 1 - BBA

## Potential Financial Benefits, Risks, and ROI

### Financial Benefits
- The potential financial benefits are on good side, if the device is made with low cost equipment that would not make the quality drop
- **Water cost savings (30–50%):** Sensors ensure water is only used when soil actually needs it — no more over-irrigation or guesswork, directly cutting water bills
- **Higher crop yield (15–25%):** Consistent, optimal moisture levels lead to healthier crops and more output per acre
- **Labor cost reduction (40–60%):** Automated valves and remote monitoring replace the need for manual irrigation workers checking fields daily
- **Less crop loss:** Early alerts for drought stress, waterlogging, or pump failure help prevent expensive crop damage before it happens

### Risks
- **High upfront cost** — IoT sensors, solar panels, gateway hardware, and installation require significant initial capital; may be hard for a rural farm to finance at once
- **Technical skill gap** — Local farm workers may lack the knowledge to operate, troubleshoot, or maintain IoT equipment, leading to system downtime
- **Equipment theft/vandalism** — Sensors and solar panels deployed in open fields in rural areas are vulnerable to theft
- **Flood and monsoon damage** — Bangladesh's heavy monsoon season can physically destroy field-deployed electronics if not properly protected (IP67-rated enclosures needed)
- **Sensor inaccuracy over time** — Soil sensors degrade and need recalibration or replacement, adding ongoing maintenance costs
- **Vendor dependency** — If the company relies on a single vendor for hardware/software, they risk being locked in with limited bargaining power

### Return on Investment (ROI)
- Estimated total initial investment: ~৳5–8 lakh (sensors, valves, gateway, solar, installation)
- Estimated annual savings from water, labor, yield, and loss prevention: ~৳7–11 lakh/year
- Annual maintenance/cloud cost: ~৳80,000/year
- **Payback period: approximately 10–12 months**
- **3-year ROI: roughly 250–300%** — for every ৳1 invested, the company gets back ৳2.5–3 in net benefits over three years
- ROI improves further as the system scales to more land with minimal additional cost per acre

---

## Long-Term Strategic Advantages and Scalability

### Strategic Advantages
- **Data-driven decision making** — Over seasons, the system collects historical soil, weather, and crop data. This allows management to make smarter planting, watering, and harvesting decisions backed by real evidence rather than intuition
- **Competitive edge** — Early adoption of smart agriculture technology positions the company ahead of traditional farms. Export buyers and premium markets increasingly prefer produce from sustainable, tech-enabled farms
- **Sustainability and ESG value** — Reduced water waste and efficient resource use align with global Environmental, Social, and Governance (ESG) standards, opening access to green financing, carbon credits, and environmentally conscious buyers
- **Government and NGO support** — Bangladesh's government (e.g., a2i digital initiative) and international organizations actively fund and support digital agriculture projects — the company can tap into grants and subsidies
- **Reduced dependency on labor** — As rural labor becomes scarcer and wages rise over time, automation protects the business from future labor shortages

### Scalability
- **Phase 1 (Months 1–6):** Start with a pilot on one small zone (5–10 acres) to prove water savings and system reliability with minimal risk
- **Phase 2 (Months 7–12):** Expand to remaining farm zones; add cloud dashboard for management to monitor all zones remotely
- **Phase 3 (Year 2):** Introduce AI-based irrigation scheduling and crop-specific watering models using the historical data already collected
- **Phase 4 (Year 3+):** Replicate across multiple farm locations; potentially offer "Smart Farming as a Service" to neighboring farms as a new revenue stream
- The LoRaWAN + edge architecture is inherently scalable — adding a new sensor node costs only ~৳8,000–12,000, and a single gateway supports hundreds of devices across several kilometers
- The system grows with the business without needing to redesign the core architecture

# Scenerio 2 - Smart Home Security

## Should the Company Redesign Its Architecture? — Yes, Absolutely.

Let me be straightforward here — if customers are saying the alerts are delayed, and the company does nothing about it, they're going to lose those customers. This is a security product. People buy it because they want to feel safe. A motion sensor that detects an intruder but takes 5–8 seconds to send the alert to your phone? That's not security — that's a notification that something already went wrong.

The root of the problem is clear: everything is being processed in the cloud. That means every time a motion sensor triggers, the data has to travel from the device → through the home router → over the internet → to a cloud server somewhere → get processed → and then the alert travels all the way back to the user's phone. That's a long journey. Add in a slow internet connection or a busy server, and you've got several seconds of delay. In a break-in, several seconds is the difference between stopping an intruder and watching them on a recording the next morning.

## What the Redesign Should Look Like

The fix isn't to throw away the cloud — it's to stop depending on it for time-critical decisions. The company should introduce **edge computing** at the home level. In simple terms, put a small local hub (like a Raspberry Pi or a dedicated gateway) inside the customer's home that can process sensor data right there.

Here's how it would work after the redesign:

- Motion sensor detects movement → sends data to the **local hub** (milliseconds, no internet needed)
- The hub instantly decides: "This looks like an intrusion" → pushes alert to the phone **and** triggers the siren/camera recording locally
- At the same time, the hub sends the data to the cloud in the background for storage, history, and remote access

The alert goes from seconds to under a second. The customer's phone buzzes almost instantly. The camera is already recording before the cloud even knows what happened.

## The Cost Question — Short-Term Pain, Long-Term Survival

Yes, this redesign costs money. The company would need to:

- **Develop or source a local hub device** — hardware design, firmware, testing. This is probably the biggest cost.
- **Rewrite parts of the software** — the decision-making logic that currently sits in the cloud needs to also run locally on the hub
- **Update the mobile app** — so it can receive alerts from both the local hub (on the same WiFi) and the cloud (when away from home)
- **Manage inventory and logistics** — now there's a physical device to manufacture, ship, and support

Rough estimate: this could cost the company several months of engineering time and a meaningful chunk of their budget. For a startup, that stings.

But here's the business reality — **they don't have a choice.** The smart home security market is brutally competitive. Companies like Ring, Arlo, and local competitors are all fighting for the same customers. If word spreads (and it will — through reviews, social media, word of mouth) that this product has slow alerts, the startup is done. No amount of marketing can fix a product that doesn't deliver on its core promise.

## The Financial Upside

- **Customer retention goes up** — happy customers stay, renew subscriptions, and don't return the product
- **Better reviews and ratings** — in this market, a jump from 3.5 stars to 4.5 stars on an app store can double sales
- **Premium pricing becomes possible** — a system that responds in under a second is genuinely better than budget competitors. The company can justify a higher price
- **Reduced cloud costs** — if most processing happens locally, the company actually spends less on cloud server capacity over time. Fewer API calls, less bandwidth, lower bills
- **New feature opportunities** — a local hub opens the door to features like offline operation (system works even if internet goes down), local video storage, and faster automation triggers

## The Risk of Doing Nothing

- Customers leave and write bad reviews
- Refund requests increase
- The brand gets a reputation for being unreliable — and in security, unreliable is unforgivable
- Competitors with edge-based systems take the market share
- The startup burns through cash trying to acquire new customers to replace the ones it keeps losing

## Bottom Line

The short-term cost of redesigning the architecture is real, but it's an investment in the product actually working the way customers expect it to. The startup's entire value proposition is "we keep your home safe." If the alerts are slow, that promise is broken. Redesigning around edge computing fixes the core problem, reduces long-term cloud costs, and gives the company a genuinely competitive product. Delay the redesign, and the company risks becoming irrelevant in a market that doesn't forgive slow responses.


# Scenerio 3 - Smart Campus Network

## 1. Business Purpose of Each WiFi Mode

**Client Mode** — This is the most straightforward one. The Raspberry Pi simply connects to the university's existing WiFi network, just like a laptop or phone would. The business purpose here is to let devices like smart attendance systems, classroom controllers, and environmental sensors send their data back to the central server. It's the workhorse mode — it keeps everything connected and talking to each other without needing extra networking hardware.

**Soft AP Mode** — Here the Raspberry Pi itself becomes a mini WiFi hotspot. This is really useful in areas of the campus where the main WiFi doesn't reach well, or where you have a cluster of IoT devices (say, a set of CCTV cameras in a new building wing) that need a local access point. Instead of spending money to extend the university's main network infrastructure to every corner, a Raspberry Pi in Soft AP mode gives you a quick, low-cost way to create a local network. It's practical and saves the university from expensive access point installations in remote spots.

**Monitor Mode** — This one is about security. In Monitor Mode, the Raspberry Pi quietly listens to all the WiFi traffic passing through the air around it. It doesn't connect to anything — it just watches. The business purpose is to detect unauthorized devices, spot rogue hotspots that someone may have set up, or catch suspicious activity on the network. For a university handling student records, exam data, and CCTV footage, having this kind of passive surveillance on the network is genuinely important.

---

## 2. Where Each Mode Should Be Used

**Client Mode — Classrooms, lecture halls, and main campus buildings**
- This is where the core IoT devices live: smart attendance trackers, classroom AC/light controllers, environmental sensors. These areas already have solid WiFi coverage from the university network, so the Raspberry Pi just needs to connect and send data. No need to complicate things — Client Mode gets the job done reliably here.

**Soft AP Mode — Remote or poorly connected areas (new buildings, parking lots, outdoor zones, labs)**
- Some parts of campus won't have great WiFi coverage. Maybe a newly constructed block, outdoor environmental sensors near gardens, or CCTV cameras in the parking area. Placing a Raspberry Pi in Soft AP mode there creates a local hotspot that nearby IoT devices can connect to. It's far cheaper than installing a full enterprise-grade access point in every corner of campus. The Pi collects data locally and forwards it when it can reach the main network.

**Monitor Mode — Administrative buildings, server rooms, exam halls, entry gates**
- These are the sensitive zones. The admin building handles student records and financial data. Exam halls need to be free from unauthorized devices (think cheating via hidden hotspots). Server rooms are obvious targets. Placing Raspberry Pis in Monitor Mode here lets the IT team passively scan for rogue devices, unauthorized access points, or unusual network traffic — all without interfering with normal operations.

---

## 3. Security Risks

To be honest, each mode carries its own set of risks that the university needs to be aware of:

- **Client Mode** — If the Raspberry Pi's login credentials for the WiFi network are weak or stored in plain text, an attacker who gains physical access to the device could extract them and get onto the university network. Also, if the Pi isn't regularly updated, it becomes a vulnerable entry point that hackers could exploit to reach other systems on the network.

- **Soft AP Mode** — This is probably the riskiest from a security standpoint. If the hotspot is set up with a weak password (or worse, no password), anyone nearby can connect to it. An attacker could use it as a gateway into the campus network. There's also the risk of an "evil twin" — someone could set up a fake hotspot with the same name to trick devices or users into connecting to it, intercepting their data.

- **Monitor Mode** — The risk here is misuse. Monitor Mode captures all WiFi traffic in its range, which could include personal data, login credentials, or private communications. If someone with bad intentions gets access to a Pi in Monitor Mode, they could essentially eavesdrop on everyone nearby. There's also a legal and ethical concern — the university needs clear policies about what data is captured and who can access it, otherwise it could violate privacy regulations.

- **Physical security across all modes** — Raspberry Pis are small and easy to steal or tamper with. If they're not physically secured (locked enclosures, mounted in protected areas), someone could walk off with one or plug in a USB device to compromise it.

---

## 4. Impact of Incorrect Configuration on Operations and Reputation

This is where things can go really wrong for the university, and honestly, most of the damage wouldn't be from hackers — it would be from simple misconfiguration by the IT team.

**Operational impact:**
- If a Pi meant to be in Client Mode is accidentally set to Soft AP Mode, it could create an unintended open hotspot on campus. Students or outsiders might connect to it, slowing down network performance or creating a security hole nobody even knows about.
- If Monitor Mode is configured on a Pi that should be serving as a network node, that entire area loses connectivity — attendance systems stop working, cameras go offline, classroom controllers become unresponsive. Imagine smart attendance failing on exam day — chaos.
- Wrong network credentials in Client Mode means the Pi simply can't connect. Sensors stop sending data, CCTV feeds drop, and the "smart campus" suddenly feels very dumb. The IT team would be stuck troubleshooting device by device.

**Reputation impact:**
- If a misconfigured Monitor Mode Pi is found to be capturing student or faculty personal data without proper authorization, it could trigger a serious privacy scandal. Parents, students, and media won't care that it was an accident — the headline would still read "University spying on students."
- A security breach through a poorly secured Soft AP hotspot could leak student records, grades, or financial information. For a private university, trust is everything. One data breach can lead to enrollment drops, legal action, and lasting damage to the institution's brand.
- Even something as simple as repeated network outages caused by misconfigured devices makes the university look incompetent. If the "smart campus" keeps failing, the administration loses credibility — both with students and with potential investors or accreditation bodies.

**Bottom line:** The technology itself is sound and cost-effective. But the university must invest in proper IT training, clear configuration documentation, regular audits, and physical security for the devices. The cost of getting the configuration wrong isn't just technical downtime — it's the university's reputation on the line.