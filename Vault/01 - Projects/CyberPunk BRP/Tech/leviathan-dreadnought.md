---
# General Equipment Fields
name: "Leviathan Dreadnought"
type: "War Machine"
category: "Amphibious Assault Mech"
rarity: "Legendary" # Placeholder
manufacturer: "Unknown (Likely Militech or SovOil)" # Placeholder
status: "Unknown (Presumed Lost/Dormant)" # Placeholder

# War Machine Specific Fields (Optional)
class: "Heavy Assault Mech" # Placeholder
location: "Coastal Ruins / Seabed" # Placeholder

# Item Specific Fields (Optional)
installation_dc: null
humanity_cost: null
legal_status: "Highly Illegal"
street_price: "Not Applicable"
availability: "Extremely Rare (Unique?)"
common_sources: "Deep Salvage, Pre-Collapse Military Bunkers"
---

# <% tp.file.title %>

## Overview
A towering amphibious assault mech, infamous for its hydraulic tentacle-like grappling arms and devastating potential for coastal destruction ("urbicide"). A relic of pre-collapse warfare, feared even in dormancy.

## Technical Specifications
- **Type**: <% tp.frontmatter.type %>
- **Category**: <% tp.frontmatter.category %>
- **Rarity**: <% tp.frontmatter.rarity %>
- **Manufacturer**: <% tp.frontmatter.manufacturer %>
- **Status**: <% tp.frontmatter.status %>

<%* if (tp.frontmatter.type === "War Machine") { %>
### War Machine Specs (If Applicable)
- **Class**: <% tp.frontmatter.class %>
- **Size**: Massive (Specify Dimensions)
- **Weight**: Extremely Heavy (Specify Weight)
- **Crew**: (Specify Crew Complement)
- **Power Source**: (Specify Power Source - likely fusion)
- **Operating Range**: (Specify Range - Land & Sea)
- **Maximum Speed**: Slow (Specify Land/Sea Speed)
<%* } %>

## Capabilities
- Amphibious operation (Land and Underwater)
- Multiple hydraulic tentacle-arms (Grappling, Crushing, Melee)
- Heavy integrated weapon systems (Cannons, Missiles?)
- Heavy armor plating
- Likely advanced sensor suite for underwater/coastal operations

## Game Statistics & Mechanics
### General Stats (If Applicable)
- **Damage/Protection**: (Specify Weapon Damage)
- **Range/Coverage**: (Specify Weapon/Sensor Range)
- **Duration**: N/A
- **Special Effects**: Grappling/Crushing attacks

<%* if (tp.frontmatter.type === "War Machine") { %>
### War Machine Combat Stats (If Applicable)
- **Armor Rating**: Extremely High (Specify Armor)
- **Structure Points**: Massive (Specify Structure)
- **Shield Capacity**: (Specify Shields, if any)
- **Weapon Damage**: (Specify Weapon Systems)
- **Special Defenses**: Heavy Armor, Amphibious

### War Machine Game Mechanics (If Applicable)
- **Initiative Modifier**: Low (Specify Modifier)
- **Actions Per Turn**: (Specify Actions)
- **Possible Actions**: Move, Attack (Ranged/Melee), Grapple, Submerge/Surface
- **Special Abilities (Combat)**: Tentacle Grapple/Crush, Amphibious Movement
- **Cooldown Periods**: (Specify for special weapons)
- **Special Rules**: Rules for underwater combat, grappling vehicles/buildings.
<%* } %>

## Requirements & Installation
- **Prerequisites**: N/A (Vehicle)
- **Installation Needs**: N/A
<%* if (tp.frontmatter.type === "Cyberware") { %>
- **Installation DC**: <% tp.frontmatter.installation_dc %>
- **Humanity Cost**: <% tp.frontmatter.humanity_cost %>
<%* } %>
- **Power/RAM Requirements**: N/A
- **Maintenance Costs**: Astronomical

## Weaknesses & Side Effects
- Slow moving on land?
- Vulnerable joints or power core?
- Massive sensor signature?
- Environmental damage caused by movement/combat.

## History & Development
Likely developed during the last corporate war for coastal assaults. Few were built, most presumed destroyed or lost at sea.

## Current Status & Location (If Applicable)
- **Operational Status**: <% tp.frontmatter.status %>
<%* if (tp.frontmatter.location) { %>
- **Current Location**: <% tp.frontmatter.location %>
<%* } %>
Rumored to lie dormant in deep water trenches or buried in coastal ruins.

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
- A Nomad clan discovers a buried Leviathan in the Badlands, but its AI refuses non-military personnel. (From Index)
- Salvage operation to recover parts or data from a submerged Leviathan.
- Reactivated Leviathan emerges from the bay, threatening the docks.

## Flavor Text
> "Saw it rise from the waves once. Looked like the whole damn ocean got angry and decided to walk ashore."

## Related Content
- [[mythic-war-machines|Mythic War Machines]]

## GM Notes
The Leviathan is a force of nature, suitable as a campaign centerpiece or a terrifying environmental hazard. Emphasize its scale and destructive power.

## Usage Examples
- Used historically to level coastal fortifications.
- A dormant unit becomes an artificial reef, hiding secrets within.
