---
# General Equipment Fields
name: "Yggdrasil Orbital Laser"
type: "War Machine" # Or "Orbital Weapon Platform"?
category: "Satellite Weapon"
rarity: "Mythic (Unique?)" # Placeholder
manufacturer: "Unknown (Stolen Arasaka Tech Base?)" # Placeholder
status: "Operational? / Hidden?" # Placeholder

# War Machine Specific Fields (Optional)
class: "Orbital Directed Energy Weapon" # Placeholder
location: "Low Earth Orbit (Undetected?)" # Placeholder

# Item Specific Fields (Optional)
installation_dc: null
humanity_cost: null
legal_status: "Weapon of Mass Destruction (Illegal)"
street_price: "Not Applicable"
availability: "Unique / Mythical"
common_sources: "Rumors, Fragmented Pre-Collapse Data"
---

# <% tp.file.title %>

## Overview
Named after the World Tree of Norse mythology, Yggdrasil is a clandestine orbital weapon platform capable of firing a devastating energy beam from space. It can reportedly scorch an entire city block, representing the apex of directed energy weapons. Rumored to be fueled by or based on stolen Arasaka technology.

## Technical Specifications
- **Type**: <% tp.frontmatter.type %>
- **Category**: <% tp.frontmatter.category %>
- **Rarity**: <% tp.frontmatter.rarity %>
- **Manufacturer**: <% tp.frontmatter.manufacturer %>
- **Status**: <% tp.frontmatter.status %>

<%* if (tp.frontmatter.type === "War Machine" || tp.frontmatter.category === "Satellite Weapon") { %>
### War Machine Specs (If Applicable)
- **Class**: <% tp.frontmatter.class %>
- **Size**: Large Satellite (Specify Dimensions)
- **Weight**: Heavy Satellite (Specify Weight)
- **Crew**: None (AI / Remote Control from hidden base)
- **Power Source**: Advanced Fusion / Solar / Stolen Tech? (Specify)
- **Operating Range**: Orbital (Global Coverage?)
- **Maximum Speed**: Orbital Velocity
<%* } %>

## Capabilities
- High-energy orbital laser cannon
- Capable of precision strikes on ground targets from orbit
- Likely incorporates advanced stealth technology to avoid detection
- Sophisticated targeting and atmospheric compensation systems
- Requires immense power generation or storage

## Game Statistics & Mechanics
### General Stats (If Applicable)
- **Damage/Protection**: Catastrophic Area Damage (Specify Damage, Radius)
- **Range/Coverage**: Orbital (Effectively Global)
- **Duration**: Beam Duration (Specify)
- **Special Effects**: Massive Thermal/Energy Damage, Structure Destruction

<%* if (tp.frontmatter.type === "War Machine" || tp.frontmatter.category === "Satellite Weapon") { %>
### War Machine Combat Stats (If Applicable)
- **Armor Rating**: Satellite Armor (Specify)
- **Structure Points**: Satellite Structure (Specify)
- **Shield Capacity**: (Specify Shields, if any)
- **Weapon Damage**: Extreme (Specify Damage Dice / Effects)
- **Special Defenses**: Orbital Altitude, Stealth, Potential ECM

### War Machine Game Mechanics (If Applicable)
- **Initiative Modifier**: N/A (Strategic Weapon)
- **Actions Per Turn**: N/A (Requires targeting cycle)
- **Possible Actions**: Target Acquisition, Charge Weapon, Fire Laser, Reposition Orbit
- **Special Abilities (Combat)**: Orbital Strike, City Block Destruction
- **Cooldown Periods**: Significant Cooldown / Recharge Time
- **Special Rules**: Rules for targeting from orbit, atmospheric interference, detecting the satellite, time delay for strike authorization/execution.
<%* } %>

## Requirements & Installation
- **Prerequisites**: N/A
- **Installation Needs**: Requires space launch capability
<%* if (tp.frontmatter.type === "Cyberware") { %>
- **Installation DC**: <% tp.frontmatter.installation_dc %>
- **Humanity Cost**: <% tp.frontmatter.humanity_cost %>
<%* } %>
- **Power/RAM Requirements**: N/A
- **Maintenance Costs**: Astronomical (Requires space access/remote systems)

## Weaknesses & Side Effects
- Vulnerable to anti-satellite weapons?
- Control system can be hacked?
- Requires clear weather/line of sight to target?
- Firing reveals its position?
- Long charge/cooldown time?

## History & Development
A top-secret project, possibly initiated by Arasaka before the 4th Corporate War and later stolen or completed by another faction. Represents a violation of orbital treaties and an existential threat.

## Current Status & Location (If Applicable)
- **Operational Status**: <% tp.frontmatter.status %>
<%* if (tp.frontmatter.location) { %>
- **Current Location**: <% tp.frontmatter.location %>
<%* } %>
Its existence is highly classified. If active, it remains hidden among orbital debris or uses advanced stealth.

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
- Players uncover evidence of Yggdrasil's existence or targeting plans.
- Hired for an extremely difficult mission to disable or destroy the satellite (space mission?).
- A faction threatens to use Yggdrasil unless their demands are met.

## Flavor Text
> "They say the old gods watched from the heavens. Turns out, they were just aiming."

## Related Content
- [[mythic-war-machines|Mythic War Machines]]
- [[Arasaka]] (Possible Origin)

## GM Notes
Yggdrasil is the ultimate Chekhov's gun – a threat looming over the entire campaign world. It's less an enemy to fight directly and more a catalyst for high-stakes espionage, political maneuvering, or desperate preventative missions.

## Usage Examples
- A shadowy faction uses the threat of Yggdrasil to blackmail corporations or governments.
- The climax of a campaign involves preventing Yggdrasil from firing on Night City.
