# Proxmox Server Setup

**Priority:** P5 - Long-term infrastructure
**Status:** Not Started
**Dependencies:** Static IP must be assigned before installation

## Overview
Set up new Proxmox server as addition to TechDome infrastructure. Can be done in phases while other work progresses.

## Phase 1: Hardware Preparation
- [ ] Document hardware specs:
  - CPU: _______________
  - RAM: _______________
  - Storage: _______________
  - Network: _______________
- [ ] Verify hardware compatibility with Proxmox
- [ ] Backup any existing data if reusing hardware
- [ ] Prepare installation media (USB drive)

## Phase 2: Network Planning
- [ ] Assign static IP from router (MUST DO FIRST)
- [ ] Document assigned IP: _______________
- [ ] Plan network configuration:
  - [ ] Management interface IP
  - [ ] Gateway address
  - [ ] DNS servers
  - [ ] Subnet mask
- [ ] Plan VLAN setup if needed

## Phase 3: Proxmox Installation
- [ ] Download latest Proxmox VE ISO
- [ ] Create bootable USB with Proxmox installer
- [ ] Boot from USB
- [ ] Follow installation wizard:
  - [ ] Select target disk
  - [ ] Set timezone and keyboard layout
  - [ ] Configure network with static IP
  - [ ] Set root password (store securely)
  - [ ] Set hostname
- [ ] Complete installation and reboot

## Phase 4: Initial Configuration
- [ ] Access web interface: `https://[PROXMOX-IP]:8006`
- [ ] Log in with root credentials
- [ ] Update Proxmox:
  - [ ] Remove enterprise repo if no subscription
  - [ ] Add no-subscription repo
  - [ ] Run updates: `apt update && apt dist-upgrade`
- [ ] Configure storage:
  - [ ] Set up local storage
  - [ ] Configure additional disks if available
  - [ ] Set up ZFS/LVM as needed

## Phase 5: Basic Security
- [ ] Change default SSH port (optional)
- [ ] Configure firewall rules
- [ ] Set up fail2ban
- [ ] Create non-root user for daily use
- [ ] Configure two-factor authentication (optional)
- [ ] Set up automated backups

## Phase 6: Storage Configuration
- [ ] Create storage pools
- [ ] Set up NFS mounts if connecting to NAS
- [ ] Configure ISO storage location
- [ ] Set up VM backup storage
- [ ] Configure container template storage

## Phase 7: Network Configuration
- [ ] Configure Linux Bridge
- [ ] Set up VLANs if needed
- [ ] Configure additional network interfaces
- [ ] Test network connectivity
- [ ] Document network topology

## Phase 8: Plan VM/Container Workloads
Decide what to run on Proxmox:
- [ ] Development environments?
- [ ] Home automation services?
- [ ] Media servers?
- [ ] Game servers?
- [ ] Testing/staging environments?
- [ ] Docker host VMs?

## Phase 9: Create First VM/Container
- [ ] Upload ISO or template
- [ ] Create test VM or LXC container
- [ ] Configure resources (CPU, RAM, disk)
- [ ] Start and verify operation
- [ ] Test backup and restore
- [ ] Document creation process

## Phase 10: Integration with TechDome
- [ ] Document how Proxmox fits into existing infrastructure
- [ ] Set up monitoring/alerting
- [ ] Configure backup integration
- [ ] Update network documentation
- [ ] Add to management tools

## Useful Resources
- Proxmox VE documentation: https://pve.proxmox.com/wiki/
- Community forums: https://forum.proxmox.com/
- Install guide: https://pve.proxmox.com/wiki/Installation

## Unresolved Questions
- Hardware already acquired and ready?
- What workloads planned for Proxmox?
- Integration points with existing TechDome setup?
- Backup strategy for VMs/containers?
