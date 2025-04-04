---
# General Equipment Fields
name: "Basilisk Electrowave Cannon"
type: "War Machine" # Or "Stationary Weapon"?
category: "Autonomous Artillery"
rarity: "Legendary" # Placeholder
manufacturer: "Unknown (Likely Zetatech or competitor)" # Placeholder
status: "Operational (Rare)" # Placeholder

# War Machine Specific Fields (Optional)
class: "Anti-Personnel Energy Weapon" # Placeholder
location: "Fortified Positions, Automated Defenses" # Placeholder

# Item Specific Fields (Optional)
installation_dc: null
humanity_cost: null
legal_status: "Highly Illegal (Inhumane Weapon)"
street_price: "Not Applicable"
availability: "Extremely Rare"
common_sources: "Black Sites, Pre-Collapse Military Bases"
---

# <% tp.file.title %>

## Overview
An autonomous artillery platform mounting a sophisticated electrowave cannon. Its defining feature is a retinal-tracking targeting system coupled with a beam designed to induce paralysis or seizures in organic targets by disrupting neural pathways, earning it the "Basilisk" moniker.

## Technical Specifications
- **Type**: <% tp.frontmatter.type %>
- **Category**: <% tp.frontmatter.category %>
- **Rarity**: <% tp.frontmatter.rarity %>
- **Manufacturer**: <% tp.frontmatter.manufacturer %>
- **Status**: <% tp.frontmatter.status %>

<%* if (tp.frontmatter.type === "War Machine" || tp.frontmatter.category === "Autonomous Artillery") { %>
### War Machine Specs (If Applicable)
- **Class**: <% tp.frontmatter.class %>
- **Size**: Large Artillery Piece (Specify Dimensions)
- **Weight**: Heavy (Specify Weight)
- **Crew**: None (Autonomous AI)
- **Power Source**: High-Capacity Power Cell / Grid Connection (Specify)
- **Operating Range**: Weapon Range (Specify)
- **Maximum Speed**: N/A (Stationary or Slow Traverse)
<%* } %>

## Capabilities
- Electrowave cannon with neural disruption effect
- Advanced retinal-tracking targeting system
- Autonomous operation via dedicated AI
- Likely integrated point-defense systems
- Can be mounted on fixed emplacements or potentially heavy vehicles

## Game Statistics & Mechanics
### General Stats (If Applicable)
- **Damage/Protection**: N/A (Effect is primary)
- **Range/Coverage**: Long Range (Specify)
- **Duration**: Paralysis/Seizure duration (Specify)
- **Special Effects**: Neural Disruption (Paralysis/Seizure), Retinal Targeting

<%* if (tp.frontmatter.type === "War Machine" || tp.frontmatter.category === "Autonomous Artillery") { %>
### War Machine Combat Stats (If Applicable)
- **Armor Rating**: High (Specify Armor for emplacement)
- **Structure Points**: High (Specify Structure)
- **Shield Capacity**: (Specify Shields, if any)
- **Weapon Damage**: Neural Effect (Specify CON save DC, effect)
- **Special Defenses**: Automated Targeting, Hardened Emplacement

### War Machine Game Mechanics (If Applicable)
- **Initiative Modifier**: High (Targeting System) (Specify Modifier)
- **Actions Per Turn**: 1 (Fire Cannon)
- **Possible Actions**: Target Acquisition, Fire Electrowave Cannon, Point Defense
- **Special Abilities (Combat)**: Retinal Lock (Targeting Bonus?), Neural Paralysis/Seizure Beam
- **Cooldown Periods**: (Specify for main cannon)
- **Special Rules**: Rules for targeting specific individuals in a crowd, effects of neural disruption, bypassing the effect (e.g., shielded optics).
<%* } %>

## Requirements & Installation
- **Prerequisites**: N/A
- **Installation Needs**: Requires stable platform, significant power supply
<%* if (tp.frontmatter.type === "Cyberware") { %>
- **Installation DC**: <% tp.frontmatter.installation_dc %>
- **Humanity Cost**: <% tp.frontmatter.humanity_cost %>
<%* } %>
- **Power/RAM Requirements**: Massive Power Draw
- **Maintenance Costs**: High (Specialized energy weapon maintenance)

## Weaknesses & Side Effects
- Targeting system vulnerable to obstruction/spoofing?
- Requires line of sight?
- Fixed emplacement limits mobility?
- Power source is a vulnerability?

## History & Development
Likely developed as a crowd control or anti-personnel area denial weapon, potentially deemed too inhumane for widespread deployment even by corporate standards.

## Current Status & Location (If Applicable)
- **Operational Status**: <% tp.frontmatter.status %>
<%* if (tp.frontmatter.location) { %>
- **Current Location**: <% tp.frontmatter.location %>
<%* } %>
Extremely rare, possibly found guarding forgotten black sites or high-security corporate vaults.

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
- Players need to infiltrate a facility guarded by a Basilisk cannon.
- Hired to steal or destroy a Basilisk prototype.
- A criminal organization acquires a Basilisk and uses it to terrorize a district.

## Flavor Text
> "Don't look at the light. Seriously. Just... don't look."

## Related Content
- [[mythic-war-machines|Mythic War Machines]]

## GM Notes
The Basilisk is a terrifying defensive weapon. Its psychological impact ("don't look at it") can be as powerful as its actual effect. Encounters should focus on bypassing its targeting system or destroying it indirectly.

## Usage Examples
- Guarding the entrance to a secret underground lab.
- Used as an automated sniper targeting specific individuals from a distance.
