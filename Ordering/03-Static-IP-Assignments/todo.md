# Static IP Assignments via MAC Reservations

**Priority:** P2 - Infrastructure Stability
**Status:** Not Started

## Overview
Set static IP addresses via MAC address reservations for most stable devices to ensure network stability for multi-machine dev work and server operations.

## Devices to Configure
- [ ] Gaming PC (Beast) - for OpenWebUI
- [ ] NAS
- [ ] Mac Mini
- [ ] New Proxmox server
- [ ] TV

## Phase 1: Information Gathering
- [ ] Identify router/gateway type (UniFi, pfSense, consumer router, etc.)
- [ ] Document current IP scheme (192.168.1.x, 10.0.0.x, etc.)
- [ ] Determine subnet mask and gateway address
- [ ] Collect MAC addresses for all devices

### Collect MAC Addresses
- [ ] Gaming PC: `ip addr` or `ipconfig /all`
- [ ] NAS: Check admin interface or `ip addr`
- [ ] Mac Mini: System Preferences > Network or `ifconfig`
- [ ] Proxmox server: `ip addr` during/after installation
- [ ] TV: Settings > Network > Advanced

## Phase 2: IP Address Planning
Design IP layout based on device types:
- [ ] Define IP ranges for different device types
  - Example: .10-.20 for servers
  - Example: .21-.30 for client machines
  - Example: .31-.40 for media devices
- [ ] Assign specific IPs to each device:
  - Gaming PC: _______________
  - NAS: _______________
  - Mac Mini: _______________
  - Proxmox server: _______________
  - TV: _______________

## Phase 3: Router Configuration
- [ ] Access router admin interface
- [ ] Navigate to DHCP settings
- [ ] Add MAC address reservations for each device
- [ ] Document each reservation (MAC → IP mapping)
- [ ] Save and apply router configuration

## Phase 4: Device Configuration & Testing
- [ ] Release current DHCP leases on each device
- [ ] Renew DHCP to get new static assignments
- [ ] Verify each device received correct IP
- [ ] Test connectivity from each device
- [ ] Update any hardcoded IPs in configs/apps
- [ ] Document final IP assignments

## Phase 5: Documentation
- [ ] Create network diagram with IP assignments
- [ ] Document in secure location (password manager/wiki)
- [ ] Note router admin credentials securely
- [ ] Update any DNS entries if applicable

## Estimated Time
15-30 minutes once information is gathered

## Unresolved Questions
- Router type?
- Current IP scheme/subnet?
- Preferred IP layout strategy?
- Do you have MAC addresses handy?
