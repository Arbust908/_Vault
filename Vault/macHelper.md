Got it — that screenshot is from your **Windows SFF desktop**, and the MAC you actually want is crystal clear.

Here’s the breakdown:

---

# ✅ **Your REAL MAC addresses (Windows PC)**

From the screenshot:

### **Ethernet (Intel I225-V)**

Status: **Up**
Link: **1 Gbps**
**MAC:** `CC-28-AA-A5-6A-8B` ← **This is the one you care about**

### **Wi-Fi (MediaTek MT7922 / RZ616)**

Status: **Up**
Link: **1.2 Gbps**
**MAC:** `E8-65-38-A5-21-E5`

Everything else (Bluetooth, Wi-Fi Direct, Tailscale…) is irrelevant for DHCP reservations.

---

# 🧱 What goes in your inventory?

For the `sff_pc` entry:

```json
"sff_pc": {
  "mac": "CC-28-AA-A5-6A-8B",
  ...
}
```

If you also want to store the Wi-Fi MAC just for documentation:

```json
"mac_wifi": "E8-65-38-A5-21-E5"
```

—but for static IP reservations, only the **Ethernet MAC** matters.

---

# 📌 What to do next

On your router:

* Add a DHCP reservation for `CC-28-AA-A5-6A-8B`
* Pick the IP you want to assign
* Save → then reboot the PC or disable/enable the NIC

---

If you want, paste the next device output (NAS, Shield, TVs, APs, whatever) and I’ll keep extracting the correct MACs and mapping them into your inventory cleanly.
