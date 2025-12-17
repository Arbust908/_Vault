# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a project planning and task management repository using a numbered priority system. Each project has its own folder (01-14) with detailed todo.md files tracking implementation phases. This is NOT a code repository—it's a planning vault for organizing multiple concurrent infrastructure, development, and creative projects.

## Repository Structure

```
Ordering/
├── README.md                    # Quick navigation and execution strategy
├── main.md                      # Conversational planning history
├── 01-Data-Migration/          # P0 - Blocking all work
├── 02-Client-Dev-Droplet/      # P1 - Client work (urgent)
├── 03-Static-IP-Assignments/   # P2 - Infrastructure foundation
├── 04-AI-Nuxt-Template/        # P3 - Unblocks all AI projects
├── 05-OpenWebUI-Gaming-PC/     # P4 - D&D work enabler
├── 06-Proxmox-Server/          # P5 - Long-term infrastructure
├── 07-AI-Text-Extractor/       # P6-P8 - AI projects (need template)
├── 08-AI-Novel-Writer/
├── 09-AI-Knowledge-Builder/
├── 10-Obsidian-Shard-Adventure/# P9-P13 - Creative projects (2-week deadline)
├── 11-Fantasy-Setting-Blog/
├── 12-Grimdark-Setting-Blog/
├── 13-Grimdark-BRP-System/
└── 14-Westmarches-Map/
```

Each numbered folder contains a `todo.md` with:
- Priority level and status
- Dependencies on other projects
- Phase-by-phase implementation checklist
- Unresolved questions

## Project Dependencies & Execution Order

**Critical Path:**
1. Data Migration (P0) - BLOCKS EVERYTHING - must complete first
2. Client Dev Droplet (P1) - High priority client work

**Foundation Layer (enables parallel work):**
3. Static IP Assignments (P2) - Required before multi-machine dev and server setup
4. AI Nuxt Template (P3) - Blocks all AI projects (07, 08, 09)

**Infrastructure (can run parallel after foundation):**
5. OpenWebUI + Proxmox (P4-P5) - Require static IPs

**AI Projects (after template ready):**
7-9. Text Extractor, Novel Writer, Knowledge Builder

**Creative Projects (independent, 2-week soft deadline):**
10-14. D&D adventures, setting blogs, RPG system, campaign map

## Key Architectural Patterns

### AI Projects Stack
All AI projects (07-09) share this foundation:
- **Framework:** Nuxt 3 with TypeScript (strict mode)
- **AI Integration:** OpenRouter SDK with streaming support
- **Backend:** PocketBase for auth and data patterns
- **Styling:** Tailwind v4
- **Linting:** Biome (not ESLint/Prettier)
- **Build Tool:** Vite
- Composables for AI interactions with error handling and retries
- Shared components: chat interface, message history, token counter, model selector

### Infrastructure Projects
- Static IPs via MAC address reservations for: Gaming PC, NAS, Mac Mini, Proxmox server, TV
- Data migration uses symlink strategy to external drive (APFS formatted)
- OpenWebUI runs on gaming PC with Ollama for D&D campaign management
- Proxmox server is new addition to existing TechDome setup

### Creative Projects
- D&D content uses OpenWebUI for NPC dialogue and encounter balancing
- West Marches project involves region map + adventure seeding
- Grim dark BRP system builds on existing "tiny BRP" work
- 2-week soft deadline for all creative projects

## Common Commands

Since this is a planning repository, there are no build/test commands. Work happens by:
1. Reading and updating todo.md files in numbered folders
2. Updating README.md execution strategy when priorities shift
3. Adding conversation history to main.md when needed

## Working in This Repository

**When asked to help with projects:**
1. Read the relevant todo.md file first to understand current status
2. Check dependencies in README.md - don't suggest work on blocked projects
3. Update todo checkboxes when phases complete
4. Add new phases if scope expands
5. Note unresolved questions at bottom of todo files

**When updating priorities:**
1. Review entire dependency chain in README.md
2. Consider parallel work opportunities
3. Respect blocking relationships (especially Data Migration)
4. Keep 2-week creative project deadline in mind

**When planning AI projects (07-09):**
- Always reference 04-AI-Nuxt-Template/todo.md for shared foundation
- Don't duplicate template features in individual project todos
- Focus on what's unique to each AI project

## Notes

- All projects except Client Dev Droplet (02) are personal
- Data Migration (01) blocks all work - highest priority
- AI Nuxt Template (04) must complete before any AI project work begins
- Static IPs (03) should be set before Proxmox/OpenWebUI setup
- Creative projects have flexibility but aim for 2-week completion
- Infrastructure projects (OpenWebUI, Proxmox) can run parallel to AI work after template is ready
