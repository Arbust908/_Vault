---
# General Equipment Fields
name: "Equipment Name"
type: "Equipment Type (Weapon/Armor/Cyberware/Quickhack/Vehicle/Drone/War Machine)" # Expanded type
category: "Subcategory (e.g., Power Pistol, Heavy Combat Vehicle)" # Expanded category
rarity: "Common/Uncommon/Rare/Epic/Legendary/Unique" # Added Unique
manufacturer: "Corporation or Source"
status: "Operational/Prototype/Decommissioned/In Repair/Destroyed" # Expanded status

# War Machine Specific Fields (Optional)
class: "Classification (e.g., Light Mech, Heavy Tank)" # From War Machine
location: "Current Location" # From War Machine

# Item Specific Fields (Optional)
installation_dc: # From Item (Cyberware)
humanity_cost: # From Item (Cyberware)
legal_status: # From Item
street_price: # From Item
availability: # From Item
common_sources: # From Item
---

# <% tp.file.title %>

## Overview
Brief description of the equipment, its significance, and role in Night City.

## Technical Specifications
- **Type**: <% tp.frontmatter.type %>
- **Category**: <% tp.frontmatter.category %>
- **Rarity**: <% tp.frontmatter.rarity %>
- **Manufacturer**: <% tp.frontmatter.manufacturer %>
- **Status**: <% tp.frontmatter.status %>

<%* if (tp.frontmatter.type === "War Machine") { %>
### War Machine Specs (If Applicable)
- **Class**: <% tp.frontmatter.class %>
- **Size**: Dimensions/Scale
- **Weight**: Metric tons
- **Crew**: Required personnel
- **Power Source**: Energy system
- **Operating Range**: Effective range
- **Maximum Speed**: Movement capabilities
<%* } %>

## Capabilities
- Primary function/weapon systems
- Secondary features/systems
- Defense mechanisms
- Special abilities/features
- Limitations or drawbacks

## Game Statistics & Mechanics
### General Stats (If Applicable)
- **Damage/Protection**: (for weapons/armor)
- **Range/Coverage**: (for weapons/armor)
- **Duration**: (for quickhacks/temporary effects)
- **Special Effects**: 

<%* if (tp.frontmatter.type === "War Machine") { %>
### War Machine Combat Stats (If Applicable)
- **Armor Rating**: 
- **Structure Points**: 
- **Shield Capacity**: 
- **Weapon Damage**: (Detailed breakdown if complex)
- **Special Defenses**: 

### War Machine Game Mechanics (If Applicable)
- **Initiative Modifier**: 
- **Actions Per Turn**: 
- **Possible Actions**: 
- **Special Abilities (Combat)**: 
- **Cooldown Periods**: 
- **Special Rules**: 
<%* } %>

## Requirements & Installation
- **Prerequisites**: (skills, attributes, cyberware, licenses)
- **Installation Needs**: (facilities, time, cost)
<%* if (tp.frontmatter.type === "Cyberware") { %>
- **Installation DC**: <% tp.frontmatter.installation_dc %>
- **Humanity Cost**: <% tp.frontmatter.humanity_cost %>
<%* } %>
- **Power/RAM Requirements**: 
- **Maintenance Costs**: 

## Weaknesses & Side Effects
- **Known Vulnerabilities**: (Technical or combat weaknesses)
- **Side Effects**: (Drawbacks, risks, negative effects on user/environment)

## History & Development
Background, development history, notable deployments or uses.

## Current Status & Location (If Applicable)
- **Operational Status**: <% tp.frontmatter.status %>
<%* if (tp.frontmatter.location) { %>
- **Current Location**: <% tp.frontmatter.location %>
<%* } %>

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
Potential story hooks involving this equipment.

## Flavor Text
> Notable quote or street wisdom about the equipment.

## Related Content
- Links to related items/equipment
- Links to relevant factions
- Links to connected events/locations

## GM Notes
Additional notes for Game Masters about using this equipment in their campaigns.

## Usage Examples
Examples of how this equipment has been used in notable situations or by specific characters.
