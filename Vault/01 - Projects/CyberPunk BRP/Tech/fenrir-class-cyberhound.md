---
# General Equipment Fields
name: "Fenrir-Class Cyberhound"
type: "War Machine" # Or "Drone"?
category: "AI Wolfpack Drones"
rarity: "Rare / Epic (depending on pack size/AI)" # Placeholder
manufacturer: "Unknown (Possibly Arasaka or Militech)" # Placeholder
status: "Operational" # Placeholder

# War Machine Specific Fields (Optional)
class: "Hunter-Killer Drone Pack" # Placeholder
location: "Urban Ruins, Badlands, Security Zones" # Placeholder

# Item Specific Fields (Optional)
installation_dc: null
humanity_cost: null
legal_status: "Restricted / Illegal"
street_price: "High (per unit)"
availability: "Rare (Black Market, Military Surplus)"
common_sources: "Corporate Security, Black Market Arms Dealers"
---

# <% tp.file.title %>

## Overview
Fast, agile quadrupedal drones designed for pack hunting and coordinated takedowns. Equipped with sharp monowire teeth/claws and sophisticated pack AI, they excel at isolating and overwhelming targets using swarm tactics.

## Technical Specifications
- **Type**: <% tp.frontmatter.type %>
- **Category**: <% tp.frontmatter.category %>
- **Rarity**: <% tp.frontmatter.rarity %>
- **Manufacturer**: <% tp.frontmatter.manufacturer %>
- **Status**: <% tp.frontmatter.status %>

<%* if (tp.frontmatter.type === "War Machine" || tp.frontmatter.category === "AI Wolfpack Drones") { %>
### War Machine Specs (If Applicable)
- **Class**: <% tp.frontmatter.class %>
- **Size**: Medium Dog Sized (Specify Dimensions)
- **Weight**: Moderate (Specify Weight)
- **Crew**: None (AI Controlled Pack)
- **Power Source**: High-Density Power Cells (Specify)
- **Operating Range**: Moderate (Specify Range)
- **Maximum Speed**: Very Fast (Specify Speed)
<%* } %>

## Capabilities
- High agility and speed
- Quadrupedal locomotion for complex terrain
- Monowire teeth/claws for melee attacks
- Advanced pack AI coordinating multiple units
- Integrated sensors (Optical, Thermal, Olfactory?)
- Potential for modular equipment (Small arms, sensors?)

## Game Statistics & Mechanics
### General Stats (If Applicable)
- **Damage/Protection**: Monowire Bite/Claw (Specify Damage)
- **Range/Coverage**: Melee
- **Duration**: N/A
- **Special Effects**: Pack Tactics, Bleeding (from monowire)

<%* if (tp.frontmatter.type === "War Machine" || tp.frontmatter.category === "AI Wolfpack Drones") { %>
### War Machine Combat Stats (If Applicable)
- **Armor Rating**: Light/Medium (Specify Armor)
- **Structure Points**: Moderate (Specify Structure per unit)
- **Shield Capacity**: N/A
- **Weapon Damage**: (See Monowire Attack)
- **Special Defenses**: Agility, Pack Coordination

### War Machine Game Mechanics (If Applicable)
- **Initiative Modifier**: High (Specify Modifier)
- **Actions Per Turn**: 1-2 (Move, Attack, Coordinate)
- **Possible Actions**: Sprint, Bite/Claw Attack, Pack Maneuver (Flank, Isolate), Howl (Comms?)
- **Special Abilities (Combat)**: Pack Tactics (Bonus when attacking same target), Monowire Bleed, Coordinated Takedown
- **Cooldown Periods**: N/A
- **Special Rules**: Rules for pack AI behavior, morale effects of coordinated attacks, vulnerability to AOE?
<%* } %>

## Requirements & Installation
- **Prerequisites**: N/A
- **Installation Needs**: N/A
<%* if (tp.frontmatter.type === "Cyberware") { %>
- **Installation DC**: <% tp.frontmatter.installation_dc %>
- **Humanity Cost**: <% tp.frontmatter.humanity_cost %>
<%* } %>
- **Power/RAM Requirements**: N/A
- **Maintenance Costs**: Moderate (per unit)

## Weaknesses & Side Effects
- Individually less durable than larger drones?
- Vulnerable to EMP or hacking targeting pack coordination?
- Monowire weapons require close range.
- Predictable pack behavior?

## History & Development
Developed as autonomous hunter-killer units for urban pacification, security, or special operations. Pack AI likely evolved from animal behavior studies.

## Current Status & Location (If Applicable)
- **Operational Status**: <% tp.frontmatter.status %>
<%* if (tp.frontmatter.location) { %>
- **Current Location**: <% tp.frontmatter.location %>
<%* } %>
Used by high-end corporate security forces, military units, and potentially rogue elements or gangs who've acquired them.

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
- A tech-worshiping gang modifies themselves to "bond" with Fenrir Cyberhounds, becoming feral cyber-liches. (From Index)
- Players are hunted through the ruins by a relentless pack of Fenrir drones.
- Hired to capture or reprogram a Fenrir pack's alpha unit.

## Flavor Text
> "You hear one howl, you're in trouble. You hear three? You're already dead."

## Related Content
- [[mythic-war-machines|Mythic War Machines]]

## GM Notes
Fenrir hounds are excellent for creating dynamic, high-mobility encounters. Emphasize their coordination and speed. Use them to harry players, split the party, or hunt down fleeing targets.

## Usage Examples
- A pack used to secure a perimeter around a corporate facility.
- Deployed to hunt down escaped prisoners or targets in complex urban environments.
