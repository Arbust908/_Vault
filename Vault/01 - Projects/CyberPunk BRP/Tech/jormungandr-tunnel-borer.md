---
# General Equipment Fields
name: "Jörmungandr Tunnel Borer"
type: "War Machine"
category: "Underground Drilling Machine"
rarity: "Legendary (Unique?)" # Placeholder
manufacturer: "Unknown (Mining Corp? Military Project?)" # Placeholder
status: "Unknown" # Placeholder

# War Machine Specific Fields (Optional)
class: "Subterranean Siege Weapon" # Placeholder
location: "Deep Underground, Abandoned Tunnel Networks" # Placeholder

# Item Specific Fields (Optional)
installation_dc: null
humanity_cost: null
legal_status: "Military Prototype / Terror Weapon (Illegal)"
street_price: "Not Applicable"
availability: "Unique / Extremely Rare"
common_sources: "Forgotten Military Bunkers, Deep Mining Operations"
---

# <% tp.file.title %>

## Overview
A massive tunnel boring machine repurposed or designed as a subterranean weapon. The Jörmungandr drills beneath enemy fortifications or city districts to deploy powerful seismic charges, causing earthquakes or collapsing structures from below.

## Technical Specifications
- **Type**: <% tp.frontmatter.type %>
- **Category**: <% tp.frontmatter.category %>
- **Rarity**: <% tp.frontmatter.rarity %>
- **Manufacturer**: <% tp.frontmatter.manufacturer %>
- **Status**: <% tp.frontmatter.status %>

<%* if (tp.frontmatter.type === "War Machine") { %>
### War Machine Specs (If Applicable)
- **Class**: <% tp.frontmatter.class %>
- **Size**: Enormous (Specify Length/Diameter)
- **Weight**: Immense (Specify Weight)
- **Crew**: Large Crew Required (Specify Crew Complement)
- **Power Source**: Multiple Fusion Cores / Geothermal Tap? (Specify)
- **Operating Range**: Limited by Power/Maintenance (Specify Range)
- **Maximum Speed**: Very Slow (Drilling Speed / Subterranean Movement Speed)
<%* } %>

## Capabilities
- Advanced tunnel boring drill head (Plasma Cutter? Sonic Drill?)
- Subterranean navigation systems (Ground Penetrating Radar?)
- Deployment system for seismic charges
- Reinforced hull for extreme pressure/heat
- Life support for long duration underground operation
- Potential defensive systems against underground threats?

## Game Statistics & Mechanics
### General Stats (If Applicable)
- **Damage/Protection**: Seismic Charge Damage (Specify Area Damage, Structural Damage)
- **Range/Coverage**: N/A (Deploys charges at location)
- **Duration**: N/A
- **Special Effects**: Tunnel Creation, Seismic Blast, Ground Collapse

<%* if (tp.frontmatter.type === "War Machine") { %>
### War Machine Combat Stats (If Applicable)
- **Armor Rating**: Extremely High (Specify Armor)
- **Structure Points**: Colossal (Specify Structure)
- **Shield Capacity**: N/A
- **Weapon Damage**: (See Seismic Charge)
- **Special Defenses**: Subterranean Operation, Heavy Armor

### War Machine Game Mechanics (If Applicable)
- **Initiative Modifier**: Extremely Low (Specify Modifier)
- **Actions Per Turn**: Very Limited (Drill, Move, Deploy Charge?)
- **Possible Actions**: Activate Drill, Advance Tunnel, Deploy Seismic Charge, Retract/Surface (if possible)
- **Special Abilities (Combat)**: Seismic Detonation, Create Tunnel Network
- **Cooldown Periods**: Long cooldown for seismic charge deployment/arming
- **Special Rules**: Rules for subterranean detection/combat, seismic damage effects, tunnel stability/collapse.
<%* } %>

## Requirements & Installation
- **Prerequisites**: N/A (Vehicle)
- **Installation Needs**: N/A (Self-contained, but requires launch point)
<%* if (tp.frontmatter.type === "Cyberware") { %>
- **Installation DC**: <% tp.frontmatter.installation_dc %>
- **Humanity Cost**: <% tp.frontmatter.humanity_cost %>
<%* } %>
- **Power/RAM Requirements**: N/A
- **Maintenance Costs**: Astronomical (Requires specialized underground support)

## Weaknesses & Side Effects
- Extremely slow and predictable movement path?
- Vulnerable if drill head is damaged or jammed?
- Difficult to extract or redeploy?
- Seismic activity is easily detectable?
- Creates unstable tunnels in its wake?

## History & Development
Likely a unique prototype developed for bypassing heavily fortified surface defenses during the corporate wars. May have been inspired by large-scale mining equipment.

## Current Status & Location (If Applicable)
- **Operational Status**: <% tp.frontmatter.status %>
<%* if (tp.frontmatter.location) { %>
- **Current Location**: <% tp.frontmatter.location %>
<%* } %>
If operational, likely buried deep underground, possibly dormant or trapped.

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
- Players detect unusual seismic activity leading to the Jörmungandr.
- Hired for a dangerous mission into the deep underground to find and disable the machine.
- A faction plans to use the Jörmungandr to collapse a rival's underground headquarters (or a section of the city).

## Flavor Text
> "Forget bombing runs. This thing attacks the ground you stand on."

## Related Content
- [[mythic-war-machines|Mythic War Machines]]

## GM Notes
The Jörmungandr is a siege engine that operates on a different axis. Encounters likely involve navigating treacherous tunnels, dealing with its environmental effects (collapses, seismic tremors), or infiltrating the machine itself.

## Usage Examples
- Used historically to undermine and collapse enemy bunkers from below.
- A dormant unit accidentally discovered during subway expansion creates a crisis.
