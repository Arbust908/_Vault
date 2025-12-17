# Client Dev Droplet Setup

**Priority:** P1 - HIGH PRIORITY (Client Work)
**Status:** Done

## Overview
Set up development droplet for client project to test changes before implementing to production.

## Phase 1: Planning & Requirements
- [ ] Determine cloud provider (DigitalOcean, Vultr, etc.)
- [ ] Define project specs
  - [ ] Node version required
  - [ ] Database needs (PostgreSQL, MySQL, MongoDB?)
  - [ ] Memory/CPU requirements
  - [ ] Storage needs
- [ ] Identify what needs testing that can't be done locally
- [ ] Document current production environment specs

## Phase 2: Droplet Provisioning
- [ ] Create account/login to cloud provider
- [ ] Select appropriate droplet size
- [ ] Choose OS (Ubuntu 22.04 LTS recommended)
- [ ] Configure SSH keys
- [ ] Set up firewall rules
- [ ] Assign static IP or note droplet IP
- [ ] Configure DNS if needed

## Phase 3: Server Setup
- [ ] SSH into droplet
- [ ] Update system: `apt update && apt upgrade`
- [ ] Install Node.js (via nvm or official repos)
- [ ] Install database if needed
- [ ] Install nginx/caddy for reverse proxy
- [ ] Configure SSL/TLS (Let's Encrypt)
- [ ] Set up firewall (ufw)
- [ ] Create deploy user with proper permissions

## Phase 4: Application Deployment
- [ ] Clone project repository
- [ ] Install dependencies
- [ ] Configure environment variables
- [ ] Set up database migrations
- [ ] Configure process manager (PM2/systemd)
- [ ] Test application starts successfully
- [ ] Configure nginx/caddy reverse proxy
- [ ] Test external access

## Phase 5: CI/CD & Documentation
- [ ] Set up deployment script or CI/CD pipeline
- [ ] Configure automatic deployments (optional)
- [ ] Document deployment process
- [ ] Document rollback procedure
- [ ] Share access details with team if needed

## Unresolved Questions
- Which cloud provider to use?
- Project tech stack details?
- Production environment specs to match?
- Budget constraints for droplet size?
