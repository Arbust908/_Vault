---
# General Equipment Fields
name: "Harpy VTOL Gunship"
type: "War Machine" # Or "Aircraft"?
category: "Aerial Assault Craft / Drone Carrier"
rarity: "Epic / Legendary" # Placeholder
manufacturer: "Unknown (Likely Militech or competitor)" # Placeholder
status: "Operational" # Placeholder

# War Machine Specific Fields (Optional)
class: "VTOL Gunship / Drone Carrier" # Placeholder
location: "Airspace, Hidden Airfields, Corporate Carriers" # Placeholder

# Item Specific Fields (Optional)
installation_dc: null
humanity_cost: null
legal_status: "Military Grade (Illegal)"
street_price: "Not Applicable"
availability: "Rare / Extremely Rare"
common_sources: "Military Bases, Black Market Arms Dealers"
---

# <% tp.file.title %>

## Overview
A Vertical Take-Off and Landing (VTOL) gunship, characterized by its sharp, "razor-winged" design. The Harpy functions not only as an assault craft but also as a carrier for smaller drones, and is known for deploying munitions like grenades and cyber-mines from the air.

## Technical Specifications
- **Type**: <% tp.frontmatter.type %>
- **Category**: <% tp.frontmatter.category %>
- **Rarity**: <% tp.frontmatter.rarity %>
- **Manufacturer**: <% tp.frontmatter.manufacturer %>
- **Status**: <% tp.frontmatter.status %>

<%* if (tp.frontmatter.type === "War Machine" || tp.frontmatter.category === "Aerial Assault Craft / Drone Carrier") { %>
### War Machine Specs (If Applicable)
- **Class**: <% tp.frontmatter.class %>
- **Size**: Large Aircraft (Specify Dimensions)
- **Weight**: Heavy (Specify Weight)
- **Crew**: 1-2 (Pilot, Gunner/Drone Operator?) (Specify)
- **Power Source**: Jet Turbines / Fusion? (Specify)
- **Operating Range**: Long (Specify Range / Flight Time)
- **Maximum Speed**: High Subsonic / Supersonic? (Specify Speed)
<%* } %>

## Capabilities
- VTOL capability for versatile deployment
- Integrated gunship weaponry (Cannons, Missiles?)
- Drone deployment bay (Specify drone types/capacity)
- Munition deployment system (Grenades, Cyber-Mines, Bomblets)
- Advanced targeting and sensor systems
- Likely armored cockpit and critical systems

## Game Statistics & Mechanics
### General Stats (If Applicable)
- **Damage/Protection**: (Specify Gunship Weapons + Deployed Munitions Damage)
- **Range/Coverage**: Long Range (Weapons/Sensors) / Area (Deployed Munitions)
- **Duration**: N/A
- **Special Effects**: Air Support, Drone Swarm Deployment, Area Denial (Mines)

<%* if (tp.frontmatter.type === "War Machine" || tp.frontmatter.category === "Aerial Assault Craft / Drone Carrier") { %>
### War Machine Combat Stats (If Applicable)
- **Armor Rating**: Medium/High (Specify Aircraft Armor)
- **Structure Points**: High (Specify Structure)
- **Shield Capacity**: (Specify Shields, if any)
- **Weapon Damage**: (Specify Cannons, Missiles, Grenades, Mines)
- **Special Defenses**: Speed, Altitude, ECM, Flares/Chaff?

### War Machine Game Mechanics (If Applicable)
- **Initiative Modifier**: High (Specify Modifier)
- **Actions Per Turn**: Multiple (Move, Fire Weapons, Deploy Drones/Munitions)
- **Possible Actions**: VTOL Flight, Strafing Run, Missile Attack, Deploy Drones, Drop Grenades/Mines, Evasive Maneuvers
- **Special Abilities (Combat)**: Drone Carrier, Air Superiority, Area Bombardment
- **Cooldown Periods**: (Specify for special weapons/deployments)
- **Special Rules**: Rules for aerial combat, drone control, minefield deployment, targeting ground units from air.
<%* } %>

## Requirements & Installation
- **Prerequisites**: N/A (Vehicle)
- **Installation Needs**: Requires landing pad/hangar
<%* if (tp.frontmatter.type === "Cyberware") { %>
- **Installation DC**: <% tp.frontmatter.installation_dc %>
- **Humanity Cost**: <% tp.frontmatter.humanity_cost %>
<%* } %>
- **Power/RAM Requirements**: N/A
- **Maintenance Costs**: Very High (Aircraft + Drone Maintenance)

## Weaknesses & Side Effects
- Vulnerable to dedicated anti-air weaponry?
- Requires clear airspace to operate effectively?
- Drone control link can be jammed/hacked?
- High noise signature?

## History & Development
Represents an evolution of gunship design, integrating drone carrier capabilities for increased battlefield versatility and force projection.

## Current Status & Location (If Applicable)
- **Operational Status**: <% tp.frontmatter.status %>
<%* if (tp.frontmatter.location) { %>
- **Current Location**: <% tp.frontmatter.location %>
<%* } %>
Likely in service with well-funded corporate security forces or elite military units.

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
- Players are targeted by a Harpy gunship during an extraction.
- Hired to sabotage a Harpy's drone deployment system.
- Need to steal data or cargo being transported by a Harpy.

## Flavor Text
> "First you hear the rotors, then the cannons, then the little buzzing things come for the leftovers."

## Related Content
- [[mythic-war-machines|Mythic War Machines]]

## GM Notes
The Harpy is a versatile aerial threat, capable of direct attack, area denial, and deploying additional smaller threats. Use it to control the airspace and complicate ground encounters.

## Usage Examples
- Providing close air support for ground troops.
- Deploying a swarm of reconnaissance or attack drones over a target area.
- Creating a temporary minefield to block an escape route.
