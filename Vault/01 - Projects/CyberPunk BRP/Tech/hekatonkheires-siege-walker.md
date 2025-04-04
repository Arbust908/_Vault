---
# General Equipment Fields
name: "Hekatonkheires Siege Walker"
type: "War Machine"
category: "Gigantic 3-Armed Combat Mech"
rarity: "Legendary (Unique?)" # Placeholder
manufacturer: "Unknown (Likely custom or heavily modified)" # Placeholder
status: "Unknown" # Placeholder

# War Machine Specific Fields (Optional)
class: "Siege Mech / Demolition Platform" # Placeholder
location: "Unknown (Deep Ruins?)" # Placeholder

# Item Specific Fields (Optional)
installation_dc: null
humanity_cost: null
legal_status: "Military Prototype (Illegal)"
street_price: "Not Applicable"
availability: "Unique / Extremely Rare"
common_sources: "Pre-Collapse Skunkworks, Hidden Arsenals"
---

# <% tp.file.title %>

## Overview
Named after the hundred-handed giants of Greek myth, the Hekatonkheires is a gigantic combat mech distinguished by its three powerful, modular arms. Each arm typically wields a different heavy weapon (e.g., railgun, flamethrower, ion saw), making it an incredibly versatile and destructive platform designed for urban demolition and siege warfare.

## Technical Specifications
- **Type**: <% tp.frontmatter.type %>
- **Category**: <% tp.frontmatter.category %>
- **Rarity**: <% tp.frontmatter.rarity %>
- **Manufacturer**: <% tp.frontmatter.manufacturer %>
- **Status**: <% tp.frontmatter.status %>

<%* if (tp.frontmatter.type === "War Machine") { %>
### War Machine Specs (If Applicable)
- **Class**: <% tp.frontmatter.class %>
- **Size**: Gigantic (Specify Dimensions - likely skyscraper height)
- **Weight**: Immense (Specify Weight)
- **Crew**: Multiple (Specify Crew Complement - Pilot, 3x Gunners, Commander, Engineer?)
- **Power Source**: Multiple Fusion Cores? (Specify)
- **Operating Range**: Limited (Specify Range)
- **Maximum Speed**: Very Slow (Specify Speed)
<%* } %>

## Capabilities
- Three independent, modular weapon arms
- Capable of wielding diverse heavy weaponry simultaneously (e.g., Railgun, Flamethrower, Ion Saw, Heavy Cannon, Missile Pods)
- Extremely heavy armor plating
- Designed for breaching fortifications and urban demolition
- Likely advanced targeting and coordination systems for managing three arms

## Game Statistics & Mechanics
### General Stats (If Applicable)
- **Damage/Protection**: Depends on modular weapon loadout (Specify examples)
- **Range/Coverage**: Depends on weapon loadout (Specify examples)
- **Duration**: N/A
- **Special Effects**: Multi-Weapon Attack, Urban Demolition

<%* if (tp.frontmatter.type === "War Machine") { %>
### War Machine Combat Stats (If Applicable)
- **Armor Rating**: Immense (Specify Armor)
- **Structure Points**: Colossal (Specify Structure)
- **Shield Capacity**: (Specify Shields, if any)
- **Weapon Damage**: High (Specify per weapon type)
- **Special Defenses**: Massive Armor, Redundant Systems?

### War Machine Game Mechanics (If Applicable)
- **Initiative Modifier**: Very Low (Specify Modifier)
- **Actions Per Turn**: Multiple (Likely 1 per arm + movement?)
- **Possible Actions**: Move, Attack (Arm 1), Attack (Arm 2), Attack (Arm 3), Brace, Demolish Structure
- **Special Abilities (Combat)**: Multi-Arm Attack Barrage, Modular Weapon Swap (if possible), Siege Mode
- **Cooldown Periods**: (Specify for heavy weapons)
- **Special Rules**: Rules for targeting specific arms, structural damage to buildings, managing multiple weapon systems.
<%* } %>

## Requirements & Installation
- **Prerequisites**: N/A (Vehicle)
- **Installation Needs**: N/A
<%* if (tp.frontmatter.type === "Cyberware") { %>
- **Installation DC**: <% tp.frontmatter.installation_dc %>
- **Humanity Cost**: <% tp.frontmatter.humanity_cost %>
<%* } %>
- **Power/RAM Requirements**: N/A
- **Maintenance Costs**: Unfathomable

## Weaknesses & Side Effects
- Extremely slow and large target?
- Complex systems prone to failure?
- Massive power requirements?
- Vulnerable joints or power cores?
- Collateral damage is unavoidable.

## History & Development
A likely unique or extremely limited prototype from the height of pre-collapse military excess, designed for overwhelming siege power. Its practicality was likely questionable even when built.

## Current Status & Location (If Applicable)
- **Operational Status**: <% tp.frontmatter.status %>
<%* if (tp.frontmatter.location) { %>
- **Current Location**: <% tp.frontmatter.location %>
<%* } %>
If it exists, it's likely hidden deep within military ruins or a forgotten subterranean hangar.

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
- Players discover schematics or the location of the Hekatonkheires.
- A rogue faction attempts to reactivate the mech.
- Players must find a way to stop the Hekatonkheires after it's unleashed on Night City.

## Flavor Text
> "Three arms... each holding something that could level a city block. It wasn't built for war; it was built to end them."

## Related Content
- [[mythic-war-machines|Mythic War Machines]]

## GM Notes
The Hekatonkheires is an endgame threat, a walking natural disaster. Encounters should focus on exploiting its weaknesses (speed, specific joints) or finding a way to disable its power source or weapon systems, rather than direct confrontation.

## Usage Examples
- A final boss encounter for a high-level campaign.
- The centerpiece of a "lost superweapon" discovery plot.
