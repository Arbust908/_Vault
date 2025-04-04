---
# General Equipment Fields
name: "Banshee-Class Stealth Bomber"
type: "War Machine" # Updated type
category: "Hypersonic Drone" # Moved from type
rarity: "Legendary" # Added rarity
manufacturer: "Unknown (Black Ops Project)" # Placeholder
status: "Operational (Presumed)" # Placeholder

# War Machine Specific Fields (Optional)
class: "Stealth Bomber Drone" # Placeholder
location: "Unknown" # Placeholder

# Item Specific Fields (Optional)
installation_dc: null
humanity_cost: null
legal_status: "Highly Illegal" # Added
street_price: "Not Applicable" # Added
availability: "Extremely Rare" # Added
common_sources: "Military Black Sites, Crashed Wreckage" # Added
---

# <% tp.file.title %>

## Overview
A near-silent, cloaked hypersonic drone aircraft. Emits a destabilizing shriek targeting enemy communications before delivering payload strikes. Represents advanced, likely experimental, stealth and sonic weapon technology.

## Technical Specifications
- **Type**: <% tp.frontmatter.type %>
- **Category**: <% tp.frontmatter.category %>
- **Rarity**: <% tp.frontmatter.rarity %>
- **Manufacturer**: <% tp.frontmatter.manufacturer %>
- **Status**: <% tp.frontmatter.status %>

<%* if (tp.frontmatter.type === "War Machine") { %>
### War Machine Specs (If Applicable)
- **Class**: <% tp.frontmatter.class %>
- **Size**: (Specify Dimensions)
- **Weight**: (Specify Weight)
- **Crew**: None (AI or Remote Piloted)
- **Power Source**: (Specify Power Source)
- **Operating Range**: (Specify Range)
- **Maximum Speed**: Hypersonic (Specify Mach number)
<%* } %>

## Capabilities
- Advanced active camouflage/cloaking system
- Hypersonic flight capability
- Sonic emitter ("Shriek") designed to disrupt communications and potentially sensory input
- Payload delivery system (Bombs, Missiles, EMP)
- Likely advanced ECM/ECCM suite

## Game Statistics & Mechanics
### General Stats (If Applicable)
- **Damage/Protection**: (Specify Payload Damage)
- **Range/Coverage**: (Specify Weapon/Sensor Range)
- **Duration**: N/A
- **Special Effects**: Sonic Shriek (Specify effects: Comms Jamming, Sensory Disruption?)

<%* if (tp.frontmatter.type === "War Machine") { %>
### War Machine Combat Stats (If Applicable)
- **Armor Rating**: (Specify Armor)
- **Structure Points**: (Specify Structure)
- **Shield Capacity**: (Specify Shields, if any)
- **Weapon Damage**: (See Payload)
- **Special Defenses**: Stealth Systems, High Speed, ECM

### War Machine Game Mechanics (If Applicable)
- **Initiative Modifier**: (Specify Modifier)
- **Actions Per Turn**: (Specify Actions)
- **Possible Actions**: Attack Run, Sonic Shriek, Evade, Deploy Payload
- **Special Abilities (Combat)**: Stealth Flight, Hypersonic Speed
- **Cooldown Periods**: (Specify for Shriek/Payload)
- **Special Rules**: Rules for detecting stealth aircraft, sonic disruption effects.
<%* } %>

## Requirements & Installation
- **Prerequisites**: N/A (Drone)
- **Installation Needs**: N/A
<%* if (tp.frontmatter.type === "Cyberware") { %>
- **Installation DC**: <% tp.frontmatter.installation_dc %>
- **Humanity Cost**: <% tp.frontmatter.humanity_cost %>
<%* } %>
- **Power/RAM Requirements**: N/A
- **Maintenance Costs**: Extremely High

## Weaknesses & Side Effects
- Vulnerable if detected/grounded
- High energy signature during hypersonic flight or weapon deployment?
- Sonic shriek might affect allies?
- Complex systems prone to malfunction?

## History & Development
Likely a top-secret military or corporate black project. Origins and exact capabilities are classified or unknown.

## Current Status & Location (If Applicable)
- **Operational Status**: <% tp.frontmatter.status %>
<%* if (tp.frontmatter.location) { %>
- **Current Location**: <% tp.frontmatter.location %>
<%* } %>
Existence is typically denied; sightings are rare and often dismissed.

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

## Plot Hooks
- Players detect faint energy signature of a cloaked Banshee.
- Hired to recover wreckage or data recorder from a crashed unit.
- Targeted by a Banshee strike during another mission.

## Flavor Text
> "You don't hear the Banshee coming. You just hear the silence where the screams used to be."

## Related Content
- [[mythic-war-machines|Mythic War Machines]]

## GM Notes
Use the Banshee for high-tension stealth encounters or devastating surprise attacks. Its presence should feel ominous and technologically overwhelming.

## Usage Examples
- A Banshee performs a surgical strike on a rival corp facility without being detected.
- Used to enforce a no-fly zone over a black site.
