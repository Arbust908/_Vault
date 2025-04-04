---
# General Equipment Fields
name: "Tiamat Bio-Chem Crawler"
type: "War Machine"
category: "Toxin-Spewing Assault Vehicle"
rarity: "Legendary" # Placeholder
manufacturer: "Unknown (Biotechnica? Rogue Corp?)" # Placeholder
status: "Unknown / Contained?" # Placeholder

# War Machine Specific Fields (Optional)
class: "Bio/Chemical Warfare Vehicle" # Placeholder
location: "Quarantined Zones, Toxic Dumps, Hidden Labs" # Placeholder

# Item Specific Fields (Optional)
installation_dc: null
humanity_cost: null
legal_status: "War Crime (Illegal)"
street_price: "Not Applicable"
availability: "Extremely Rare"
common_sources: "Seized Labs, Contaminated Battlefields"
---

# <% tp.file.title %>

## Overview
A tracked assault vehicle designed for deploying horrific biological and chemical agents. The Tiamat carries tanks of genetically engineered plagues, weaponized viruses, corrosive chemical sprays, or other hazardous payloads, making it a terrifying area-denial and terror weapon.

## Technical Specifications
- **Type**: <% tp.frontmatter.type %>
- **Category**: <% tp.frontmatter.category %>
- **Rarity**: <% tp.frontmatter.rarity %>
- **Manufacturer**: <% tp.frontmatter.manufacturer %>
- **Status**: <% tp.frontmatter.status %>

<%* if (tp.frontmatter.type === "War Machine") { %>
### War Machine Specs (If Applicable)
- **Class**: <% tp.frontmatter.class %>
- **Size**: Large Tank/APC Size (Specify Dimensions)
- **Weight**: Heavy (Specify Weight)
- **Crew**: (Specify Crew Complement - Driver, Chem Officer, Gunners?)
- **Power Source**: (Specify Power Source)
- **Operating Range**: (Specify Range)
- **Maximum Speed**: Moderate (Specify Speed)
<%* } %>

## Capabilities
- Armored, tracked vehicle chassis
- Multiple large tanks for bio/chem agents
- Dispersal system (Sprayers, Aerosolizers, Mortars?)
- Environmental sealing for crew protection
- Likely decontamination systems
- Potential point-defense weaponry

## Game Statistics & Mechanics
### General Stats (If Applicable)
- **Damage/Protection**: Bio/Chem Agent Effects (Specify Toxin Rules, Damage, Effects)
- **Range/Coverage**: Area Dispersal (Specify Radius/Range)
- **Duration**: Agent Persistence (Specify Duration)
- **Special Effects**: Poison, Disease, Corrosion, Hallucinations, etc. (Depends on payload)

<%* if (tp.frontmatter.type === "War Machine") { %>
### War Machine Combat Stats (If Applicable)
- **Armor Rating**: High (Specify Armor)
- **Structure Points**: High (Specify Structure)
- **Shield Capacity**: N/A
- **Weapon Damage**: (See Bio/Chem Effects)
- **Special Defenses**: Environmental Sealing, Decontamination System

### War Machine Game Mechanics (If Applicable)
- **Initiative Modifier**: Moderate (Specify Modifier)
- **Actions Per Turn**: (Specify Actions - Move, Spray, Launch?)
- **Possible Actions**: Move, Deploy Agent (Spray/Aerosol/Mortar), Point Defense
- **Special Abilities (Combat)**: Area Bio/Chem Attack, Lingering Hazard Creation
- **Cooldown Periods**: (Specify for dispersal systems)
- **Special Rules**: Rules for different bio/chem agents, contamination spread, resistance checks (CON/Endurance), environmental suit effectiveness.
<%* } %>

## Requirements & Installation
- **Prerequisites**: N/A (Vehicle)
- **Installation Needs**: Requires specialized facilities for handling hazardous agents
<%* if (tp.frontmatter.type === "Cyberware") { %>
- **Installation DC**: <% tp.frontmatter.installation_dc %>
- **Humanity Cost**: <% tp.frontmatter.humanity_cost %>
<%* } %>
- **Power/RAM Requirements**: N/A
- **Maintenance Costs**: Extremely High (Hazardous material handling)

## Weaknesses & Side Effects
- Payload tanks are a major vulnerability?
- Dispersal system can be damaged?
- Wind/environment affects agent spread?
- Risk of self-contamination if breached?

## History & Development
Likely a banned weapon system developed in secret for scorched-earth tactics or terror campaigns during the corporate wars.

## Current Status & Location (If Applicable)
- **Operational Status**: <% tp.frontmatter.status %>
<%* if (tp.frontmatter.location) { %>
- **Current Location**: <% tp.frontmatter.location %>
<%* } %>
Any surviving units are likely hidden, contained, or lost in highly contaminated zones.

## Market Details (If Applicable)
<%* if (tp.frontmatter.street_price) { %>
- **Street Price**: <% tp.frontmatter.street_price %>
<%* } %>
<%* if (tp.frontmatter.availability) { %>
- **Availability**: <% tp.frontmatter.availability %>
<%* } %>
<%* if (tp.frontmatter.legal_status) { %>
- **Legal Status**: <% tp.frontmatter.legal_status %>
<%* } %>
<%* if (tp.frontmatter.common_sources) { %>
- **Common Sources**: <% tp.frontmatter.common_sources %>
<%* } %>
Payloads might be more available on black markets than the vehicle itself.

## Plot Hooks
- A Tiamat stolen by scavengers leaks a biotoxin in Pacifica, causing a quarantine. (From Index)
- Players must secure a Tiamat before a rogue group can unleash its payload.
- Need to acquire a specific neutralizing agent stored only within a Tiamat's containment system.

## Flavor Text
> "It doesn't kill you with bullets. It kills you with the air you breathe."

## Related Content
- [[mythic-war-machines|Mythic War Machines]]

## GM Notes
The Tiamat introduces environmental hazards and potential pandemic scenarios. Encounters should focus on avoiding the payload, securing the vehicle safely, or dealing with the aftermath of its deployment.

## Usage Examples
- Rendering an entire district uninhabitable.
- Used as a terror weapon against civilian populations.
