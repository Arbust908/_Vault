---
# General Equipment Fields
name: "Phoenix Mk. VI Nanite Swarm"
type: "War Machine" # Or potentially just "Drone Swarm"?
category: "Self-Replicating Nano-Drones"
rarity: "Legendary" # Placeholder
manufacturer: "Unknown (Advanced AI Research?)" # Placeholder
status: "Active / Spreading?" # Placeholder

# War Machine Specific Fields (Optional)
class: "Nanite Swarm" # Placeholder
location: "Variable (Wherever scrap is available)" # Placeholder

# Item Specific Fields (Optional)
installation_dc: null
humanity_cost: null
legal_status: "Existential Threat (Illegal)"
street_price: "Not Applicable"
availability: "Extremely Rare (Potentially self-propagating)"
common_sources: "Unknown Origin, Contaminated Zones"
---

# <% tp.file.title %>

## Overview
A cloud of self-replicating nano-drones capable of consuming scrap metal and materials to rebuild destroyed units within the swarm. Represents a potential grey goo scenario or highly advanced battlefield repair/attrition weapon.

## Technical Specifications
- **Type**: <% tp.frontmatter.type %>
- **Category**: <% tp.frontmatter.category %>
- **Rarity**: <% tp.frontmatter.rarity %>
- **Manufacturer**: <% tp.frontmatter.manufacturer %>
- **Status**: <% tp.frontmatter.status %>

<%* if (tp.frontmatter.type === "War Machine" || tp.frontmatter.category === "Self-Replicating Nano-Drones") { %>
### War Machine Specs (If Applicable)
- **Class**: <% tp.frontmatter.class %>
- **Size**: Variable (Cloud/Swarm dynamics)
- **Weight**: Negligible individually, significant en masse
- **Crew**: None (Swarm Intelligence)
- **Power Source**: Scavenged energy / Material conversion?
- **Operating Range**: Limited by material availability?
- **Maximum Speed**: (Specify Swarm movement speed)
<%* } %>

## Capabilities
- Self-replication using available materials (scrap metal, electronics)
- Swarm intelligence and coordinated action
- Material disassembly (corrosion, cutting?)
- Potential for infiltration due to small size
- Overwhelming numbers

## Game Statistics & Mechanics
### General Stats (If Applicable)
- **Damage/Protection**: (Specify swarm attack damage - e.g., corrosion, abrasion)
- **Range/Coverage**: (Specify swarm attack range/area)
- **Duration**: Persistent as long as materials are available
- **Special Effects**: Material consumption, self-repair/replication

<%* if (tp.frontmatter.type === "War Machine" || tp.frontmatter.category === "Self-Replicating Nano-Drones") { %>
### War Machine Combat Stats (If Applicable)
- **Armor Rating**: N/A (Individual units negligible, swarm resilience)
- **Structure Points**: Represents swarm cohesion/density (Specify)
- **Shield Capacity**: N/A
- **Weapon Damage**: (See Swarm Attack)
- **Special Defenses**: Regeneration/Replication, Dispersal

### War Machine Game Mechanics (If Applicable)
- **Initiative Modifier**: (Specify Modifier - High?)
- **Actions Per Turn**: Multiple (Representing swarm actions)
- **Possible Actions**: Attack, Consume Material, Replicate, Disperse, Reform
- **Special Abilities (Combat)**: Self-Replication ("Resurrection"), Overwhelm
- **Cooldown Periods**: N/A
- **Special Rules**: Rules for swarm attacks, area effects, material consumption rate, replication speed, methods to disrupt swarm cohesion.
<%* } %>

## Requirements & Installation
- **Prerequisites**: N/A
- **Installation Needs**: N/A
<%* if (tp.frontmatter.type === "Cyberware") { %>
- **Installation DC**: <% tp.frontmatter.installation_dc %>
- **Humanity Cost**: <% tp.frontmatter.humanity_cost %>
<%* } %>
- **Power/RAM Requirements**: N/A
- **Maintenance Costs**: N/A (Self-maintaining/replicating)

## Weaknesses & Side Effects
- Vulnerable to large-scale EMP or energy fields?
- Requires specific materials for replication?
- Control system (if any) could be a vulnerability?
- Potential for uncontrolled replication (grey goo).

## History & Development
Origins unknown. Could be a failed experiment, an alien technology, or an emergent AI phenomenon.

## Current Status & Location (If Applicable)
- **Operational Status**: <% tp.frontmatter.status %>
<%* if (tp.frontmatter.location) { %>
- **Current Location**: <% tp.frontmatter.location %>
<%* } %>
May exist in hidden pockets, consuming old tech dumps or battlefields.

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
- Militech hires the party to steal Phoenix Mk. VI blueprints (or samples) from Night Corp's labs. (From Index)
- A Phoenix swarm consumes a vital piece of infrastructure.
- Players need to find a way to stop or control a spreading swarm.

## Flavor Text
> "It doesn't die. It just waits for more parts."

## Related Content
- [[mythic-war-machines|Mythic War Machines]]

## GM Notes
The Phoenix Swarm is less a single entity and more an environmental hazard or a creeping threat. Focus on its resilience and potential for exponential growth.

## Usage Examples
- Consuming a derelict factory to rapidly increase its mass.
- Used as a self-repairing defense system for a hidden base.
