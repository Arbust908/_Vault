---
# General Equipment Fields
name: "Oni Exosuit"
type: "Powered Armor" # Explicitly Armor, not War Machine
category: "Corporate Special Ops Exosuit"
rarity: "Legendary" # Placeholder
manufacturer: "Unknown (Arasaka Advanced Projects?)" # Placeholder
status: "Prototype / Limited Deployment" # Placeholder

# War Machine Specific Fields (Optional)
class: "Stealth Assault Armor" # Placeholder
location: "Corporate Black Sites, Spec Ops Armories" # Placeholder

# Item Specific Fields (Optional)
installation_dc: null
humanity_cost: Moderate-High? # Placeholder - Exosuits might have neural interface costs
legal_status: "Military Grade / Corporate Secret (Illegal)"
street_price: "Not Applicable"
availability: "Extremely Rare"
common_sources: "Defected Spec Ops, Raided Corp Facilities"
---

# <% tp.file.title %>

## Overview
An experimental suit of powered armor likely designed for corporate special operations. The Oni Exosuit emphasizes strength enhancement, stealth capabilities (cloaking), and integrated melee weaponry, specifically mentioning monokatana interfaces. Its design likely draws inspiration from Japanese folklore, suggesting an Arasaka origin.

## Technical Specifications
- **Type**: <% tp.frontmatter.type %>
- **Category**: <% tp.frontmatter.category %>
- **Rarity**: <% tp.frontmatter.rarity %>
- **Manufacturer**: <% tp.frontmatter.manufacturer %>
- **Status**: <% tp.frontmatter.status %>

<%* if (tp.frontmatter.type === "Powered Armor") { %>
### Powered Armor Specs (If Applicable)
- **Class**: <% tp.frontmatter.class %>
- **Size**: Humanoid (Slightly Larger)
- **Weight**: Heavy (Specify Weight)
- **Crew**: 1 (Pilot/Wearer)
- **Power Source**: High-Density Power Cell (Specify Duration)
- **Operating Range**: Limited by Power Cell (Specify)
- **Maximum Speed**: Enhanced Human Speed/Agility (Specify)
<%* } %>

## Capabilities
- Significant strength enhancement
- Advanced active camouflage/cloaking system
- Integrated interface for monokatana or similar melee weapons
- Enhanced mobility and agility systems
- Likely advanced sensor suite integrated into helmet/visor
- Sealed environmental systems?

## Game Statistics & Mechanics
### General Stats (If Applicable)
- **Damage/Protection**: High Armor Value (Specify SP), Strength Bonus to Melee
- **Range/Coverage**: N/A (Armor)
- **Duration**: Power Cell Life
- **Special Effects**: Strength Boost, Cloaking, Enhanced Melee

<%* if (tp.frontmatter.type === "Powered Armor") { %>
### Powered Armor Combat Stats (If Applicable)
- **Armor Rating**: High (Specify SP per location)
- **Structure Points**: N/A (Wearer's HP + Armor bonuses?)
- **Shield Capacity**: (Specify Shields, if any)
- **Weapon Damage**: Via integrated or wielded weapons (Monokatana)
- **Special Defenses**: Armor, Cloaking, Agility

### Powered Armor Game Mechanics (If Applicable)
- **Initiative Modifier**: Potential Bonus (Enhanced Reflexes?) (Specify)
- **Actions Per Turn**: Standard Humanoid Actions (Enhanced)
- **Possible Actions**: Move (Enhanced), Attack (Melee/Ranged), Cloak, Use Equipment
- **Special Abilities (Combat)**: Cloaking Field, Power Strike (Strength Bonus), Monokatana Integration (Accuracy/Damage Bonus?)
- **Cooldown Periods**: (Specify for Cloaking?)
- **Special Rules**: Rules for detecting cloaked suit, power cell limitations, humanity cost/integration effects.
<%* } %>

## Requirements & Installation
- **Prerequisites**: Specialized Training, High Strength/Endurance?
- **Installation Needs**: N/A (Worn)
<%* if (tp.frontmatter.type === "Cyberware") { %>
- **Installation DC**: <% tp.frontmatter.installation_dc %>
- **Humanity Cost**: <% tp.frontmatter.humanity_cost %>
<%* } %>
- **Power/RAM Requirements**: Requires charged power cells
- **Maintenance Costs**: High (Advanced prototype maintenance)

## Weaknesses & Side Effects
- Power cell limitation?
- Cloaking vulnerable to certain sensors (Thermal, EM?)?
- Noise generated while moving?
- Potential neural strain or humanity cost from interface?

## History & Development
An experimental project aiming to create the ultimate corporate assassin or special forces operative, blending heavy armor benefits with stealth and melee prowess.

## Current Status & Location (If Applicable)
- **Operational Status**: <% tp.frontmatter.status %>
<%* if (tp.frontmatter.location) { %>
- **Current Location**: <% tp.frontmatter.location %>
<%* } %>
Likely exists only in prototype stages within secure corporate R&D facilities or in the hands of elite, deniable operatives.

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
- Players are hired to steal an Oni Exosuit prototype.
- An assassin equipped with an Oni Exosuit is targeting the players or their client.
- Discovering the hidden R&D facility where the Oni Exosuits are developed.

## Flavor Text
> "It moved like a ghost, hit like a freight train, and vanished before the blood hit the floor."

## Related Content
- [[mythic-war-machines|Mythic War Machines]] (Though technically armor)
- [[Arasaka]] (Possible Manufacturer)

## GM Notes
The Oni Exosuit represents a pinnacle of personal combat technology, blurring the line between soldier and machine. It's ideal for creating formidable single opponents or representing elite enemy units.

## Usage Examples
- A corporate black ops team using Oni Exosuits for infiltration and assassination.
- A legendary solo rumored to possess a stolen or custom-built Oni suit.
