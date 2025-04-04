---
# General Equipment Fields
name: "Kraken EMP Harvester"
type: "War Machine" # Or "Stationary Weapon"?
category: "Submersible Energy Weapon"
rarity: "Legendary" # Placeholder
manufacturer: "Unknown (Oceanic Corp?)" # Placeholder
status: "Unknown (Dormant?)" # Placeholder

# War Machine Specific Fields (Optional)
class: "Area Denial / Energy Weapon Platform" # Placeholder
location: "Deep Sea / Coastal Power Conduits" # Placeholder

# Item Specific Fields (Optional)
installation_dc: null
humanity_cost: null
legal_status: "Weapon of Mass Disruption (Illegal)"
street_price: "Not Applicable"
availability: "Unique / Extremely Rare"
common_sources: "Pre-Collapse Naval Bases, Deep Sea Wreckage"
---

# <% tp.file.title %>

## Overview
A massive, submersible energy weapon platform designed to latch onto underwater power grids or geothermal vents. It harvests vast amounts of energy to charge and release devastating electromagnetic pulses (EMP) capable of crippling the electronic infrastructure of entire city districts.

## Technical Specifications
- **Type**: <% tp.frontmatter.type %>
- **Category**: <% tp.frontmatter.category %>
- **Rarity**: <% tp.frontmatter.rarity %>
- **Manufacturer**: <% tp.frontmatter.manufacturer %>
- **Status**: <% tp.frontmatter.status %>

<%* if (tp.frontmatter.type === "War Machine" || tp.frontmatter.category === "Submersible Energy Weapon") { %>
### War Machine Specs (If Applicable)
- **Class**: <% tp.frontmatter.class %>
- **Size**: Enormous (Specify Dimensions)
- **Weight**: Massive (Specify Weight)
- **Crew**: Minimal / Automated? (Specify Crew)
- **Power Source**: Harvested Environmental Power (Grid/Geothermal)
- **Operating Range**: Stationary when deployed, Submersible movement otherwise (Specify Range)
- **Maximum Speed**: Slow Submersible Speed (Specify)
<%* } %>

## Capabilities
- Deep-sea submersible capability
- Energy harvesting system (Power Taps, Geothermal Drills?)
- Massive capacitor banks for energy storage
- Large-scale EMP generator/emitter array
- Potential for localized energy draining ("brownouts")
- Heavy armor / pressure hull

## Game Statistics & Mechanics
### General Stats (If Applicable)
- **Damage/Protection**: N/A (EMP is primary effect)
- **Range/Coverage**: Massive Area EMP (Specify Radius/Effect)
- **Duration**: EMP effect duration (Specify)
- **Special Effects**: Power Grid Drain, Wide-Area EMP

<%* if (tp.frontmatter.type === "War Machine" || tp.frontmatter.category === "Submersible Energy Weapon") { %>
### War Machine Combat Stats (If Applicable)
- **Armor Rating**: Very High (Specify Armor)
- **Structure Points**: Enormous (Specify Structure)
- **Shield Capacity**: (Specify Shields, likely energy-based)
- **Weapon Damage**: EMP Effect (Specify system damage/disruption rules)
- **Special Defenses**: Submersible, Heavy Armor, Potential Energy Shielding

### War Machine Game Mechanics (If Applicable)
- **Initiative Modifier**: Very Low (Specify Modifier)
- **Actions Per Turn**: Limited (Charge / Fire / Defend?)
- **Possible Actions**: Harvest Energy, Charge Capacitors, Fire EMP, Submerge/Surface, Defensive Systems
- **Special Abilities (Combat)**: Area EMP Blast, Power Drain Field
- **Cooldown Periods**: Long Cooldown/Charge Time for EMP
- **Special Rules**: Rules for EMP effects on characters/vehicles/infrastructure, energy harvesting mechanics, detecting submerged unit.
<%* } %>

## Requirements & Installation
- **Prerequisites**: N/A
- **Installation Needs**: Requires access to major underwater power source
<%* if (tp.frontmatter.type === "Cyberware") { %>
- **Installation DC**: <% tp.frontmatter.installation_dc %>
- **Humanity Cost**: <% tp.frontmatter.humanity_cost %>
<%* } %>
- **Power/RAM Requirements**: N/A (Self-powering via harvesting)
- **Maintenance Costs**: Extremely High (Specialized deep-sea maintenance)

## Weaknesses & Side Effects
- Vulnerable during energy harvesting/charging cycle?
- EMP blast affects allies?
- Requires specific deployment locations?
- Slow moving and potentially detectable when moving?

## History & Development
Likely a strategic denial weapon from the last corporate war, designed to paralyze enemy cities or naval bases.

## Current Status & Location (If Applicable)
- **Operational Status**: <% tp.frontmatter.status %>
<%* if (tp.frontmatter.location) { %>
- **Current Location**: <% tp.frontmatter.location %>
<%* } %>
Most likely dormant on the seabed near major coastal cities or power infrastructure.

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
- A series of unexplained blackouts hits Night City, traced to a Kraken activating offshore.
- Players are hired for a deep-sea mission to disable or destroy a Kraken before it fires.
- A corporation wants to reactivate a dormant Kraken for their own purposes.

## Flavor Text
> "It doesn't just turn off the lights, choom. It turns off the whole damn century."

## Related Content
- [[mythic-war-machines|Mythic War Machines]]

## GM Notes
The Kraken is a plot device weapon, capable of causing city-wide chaos. Its threat lies in its potential energy, making the countdown to its firing a source of major tension.

## Usage Examples
- Historically used to disable enemy naval fleets or coastal defenses before an invasion.
- A dormant Kraken becomes the target of a salvage or sabotage mission.
