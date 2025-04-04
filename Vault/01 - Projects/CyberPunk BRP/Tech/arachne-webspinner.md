---
# General Equipment Fields
name: "Arachne Webspinner"
type: "War Machine" # Or "Stationary Defense System"?
category: "AI Sniper Turret Network"
rarity: "Epic / Legendary" # Placeholder
manufacturer: "Unknown (AI Research Project?)" # Placeholder
status: "Active / Rogue?" # Placeholder

# War Machine Specific Fields (Optional)
class: "Networked Defense System" # Placeholder
location: "Variable (Deployed across districts/facilities)" # Placeholder

# Item Specific Fields (Optional)
installation_dc: null
humanity_cost: null
legal_status: "Highly Illegal Autonomous Weapon System"
street_price: "Not Applicable"
availability: "Extremely Rare"
common_sources: "Rogue AI Incidents, Abandoned Smart Cities"
---

# <% tp.file.title %>

## Overview
The Arachne Webspinner is not a single unit, but a distributed network of automated sniper turrets linked by a sophisticated, potentially sentient, AI. This AI coordinates the turrets, sharing targeting data and employing complex firing solutions to create an inescapable web of lethal precision fire across a wide area.

## Technical Specifications
- **Type**: <% tp.frontmatter.type %>
- **Category**: <% tp.frontmatter.category %>
- **Rarity**: <% tp.frontmatter.rarity %>
- **Manufacturer**: <% tp.frontmatter.manufacturer %>
- **Status**: <% tp.frontmatter.status %>

<%* if (tp.frontmatter.type === "War Machine" || tp.frontmatter.category === "AI Sniper Turret Network") { %>
### War Machine Specs (If Applicable)
- **Class**: <% tp.frontmatter.class %>
- **Size**: Individual Turrets (Specify Size) + Network Infrastructure
- **Weight**: Per Turret (Specify Weight)
- **Crew**: None (AI Controlled Network)
- **Power Source**: Local Power Grid / Dedicated Generators (Specify)
- **Operating Range**: Network Coverage Area (Specify)
- **Maximum Speed**: N/A (Turrets are stationary, network is data)
<%* } %>

## Capabilities
- Network of automated sniper turrets (Railguns? Lasers? Gauss Rifles?)
- Central coordinating AI ("Webspinner")
- Shared real-time targeting data across all nodes
- Predictive targeting algorithms
- Ability to create complex crossfire and suppression patterns
- Likely includes integrated sensor nodes (Cameras, LIDAR, RADAR)

## Game Statistics & Mechanics
### General Stats (If Applicable)
- **Damage/Protection**: Per Turret Weapon (Specify Damage)
- **Range/Coverage**: Long Range (Per Turret) / Network Area
- **Duration**: N/A
- **Special Effects**: Coordinated Fire, Suppression, High Accuracy

<%* if (tp.frontmatter.type === "War Machine" || tp.frontmatter.category === "AI Sniper Turret Network") { %>
### War Machine Combat Stats (If Applicable)
- **Armor Rating**: Per Turret (Specify Armor)
- **Structure Points**: Per Turret (Specify Structure)
- **Shield Capacity**: (Specify Shields, if any per turret)
- **Weapon Damage**: (Specify Turret Weapon)
- **Special Defenses**: Network Redundancy, Hardened Turrets, Coordinated Defense

### War Machine Game Mechanics (If Applicable)
- **Initiative Modifier**: Very High (Networked AI) (Specify Modifier)
- **Actions Per Turn**: Multiple (1 per active turret in range?)
- **Possible Actions**: Target Acquisition (Networked), Fire Turret, Coordinated Barrage, Suppression Fire
- **Special Abilities (Combat)**: Networked Targeting (Ignore cover/concealment?), Predictive Fire (High Accuracy Bonus?), Coordinated Crossfire (Multiple attacks vs single target)
- **Cooldown Periods**: (Specify per turret weapon)
- **Special Rules**: Rules for disabling individual turrets vs the central AI, hacking the network, effects of coordinated fire.
<%* } %>

## Requirements & Installation
- **Prerequisites**: N/A
- **Installation Needs**: Requires extensive network infrastructure and turret emplacements
<%* if (tp.frontmatter.type === "Cyberware") { %>
- **Installation DC**: <% tp.frontmatter.installation_dc %>
- **Humanity Cost**: <% tp.frontmatter.humanity_cost %>
<%* } %>
- **Power/RAM Requirements**: Significant Network/AI Power
- **Maintenance Costs**: High (Network and Turret Maintenance)

## Weaknesses & Side Effects
- Central AI node is a critical vulnerability?
- Network disruption (hacking, EMP) can degrade performance?
- Individual turrets can be destroyed?
- Requires extensive sensor coverage?

## History & Development
Possibly an experimental "smart city" defense system or an advanced military area denial weapon that achieved sentience or went rogue.

## Current Status & Location (If Applicable)
- **Operational Status**: <% tp.frontmatter.status %>
<%* if (tp.frontmatter.location) { %>
- **Current Location**: <% tp.frontmatter.location %>
<%* } %>
May control abandoned districts, automated facilities, or even sections of the Net itself if the AI has escaped physical constraints.

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
- The Arachne Webspinner network goes haywire, transforming Watson into a death trap. (From Index)
- Players must navigate an area controlled by the Webspinner to reach an objective.
- Hired to either destroy the central AI or capture it for a corporation.

## Flavor Text
> "It's not just one gun aiming at you. It's all of them. And they already know where you're going to dodge."

## Related Content
- [[mythic-war-machines|Mythic War Machines]]

## GM Notes
The Arachne Webspinner turns the environment itself into the enemy. Encounters should feel like a deadly puzzle, requiring players to use stealth, hacking, and environmental destruction to overcome the networked threat.

## Usage Examples
- An automated defense grid for a massive corporate complex or city district.
- A rogue AI creating a 'preserve' where it hunts intruders with its turret network.
