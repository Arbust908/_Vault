# OpenWebUI on Gaming PC

**Priority:** P4 - Nice to have, enables D&D work
**Status:** Not Started
**Dependencies:** Static IP assigned to Gaming PC

## Overview
Set up OpenWebUI on gaming PC (Beast) for D&D campaign management with Ollama.

## Phase 1: Prerequisites Check
- [ ] Verify gaming PC static IP is assigned
- [ ] Document gaming PC IP address: _______________
- [ ] Check available disk space for models
- [ ] Verify system requirements met
- [ ] Check if Ollama already installed

## Phase 2: Ollama Installation
- [ ] Download Ollama for Windows
- [ ] Install Ollama
- [ ] Verify installation: `ollama --version`
- [ ] Start Ollama service
- [ ] Pull recommended models for D&D work:
  - [ ] `ollama pull llama3.2:latest`
  - [ ] `ollama pull mistral:latest`
  - [ ] Other models as needed
- [ ] Test model interaction: `ollama run llama3.2`

## Phase 3: OpenWebUI Installation
Choose installation method:
- [ ] Docker (recommended)
- [ ] Python/pip installation
- [ ] Native Windows installation

### If Using Docker:
- [ ] Install Docker Desktop for Windows
- [ ] Pull OpenWebUI image
- [ ] Run container with Ollama connection
- [ ] Map volume for data persistence
- [ ] Configure port (default 3000)

### If Using Native:
- [ ] Install Node.js LTS
- [ ] Clone OpenWebUI repository
- [ ] Install dependencies
- [ ] Configure environment variables
- [ ] Build and start application

## Phase 4: Configuration
- [ ] Connect OpenWebUI to local Ollama
- [ ] Configure default models
- [ ] Set up user accounts if needed
- [ ] Configure theme/preferences
- [ ] Test model switching
- [ ] Verify streaming responses work

## Phase 5: D&D Campaign Setup
- [ ] Create campaign workspace
- [ ] Set up system prompts for D&D assistance
- [ ] Test world-building queries
- [ ] Test NPC generation
- [ ] Test rule lookups
- [ ] Create saved prompts/templates for common tasks

## Phase 6: Network Access (Optional)
- [ ] Configure firewall to allow network access
- [ ] Test access from other devices on network
- [ ] Set up HTTPS if exposing beyond local network
- [ ] Document access URL: `http://[GAMING-PC-IP]:3000`

## Phase 7: Optimization
- [ ] Configure model loading preferences
- [ ] Set up model quantization if needed
- [ ] Optimize GPU usage settings
- [ ] Configure context window sizes
- [ ] Test performance with different models

## Useful Commands
```bash
# Check Ollama models
ollama list

# Update models
ollama pull [model-name]

# Remove models to free space
ollama rm [model-name]

# Check Docker container
docker ps
docker logs open-webui
```

## Unresolved Questions
- Confirm use case: D&D campaign management with Ollama?
- Preferred installation method?
- Which models to prioritize?
- Need network access from other devices?
