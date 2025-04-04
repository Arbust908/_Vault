---
# General Equipment Fields
name: "Sleipnir-88 Mobile Fortress"
type: "War Machine"
category: "8-Legged Spider Tank"
rarity: "Legendary" # Placeholder
manufacturer: "Unknown (European Design?)" # Placeholder
status: "Operational (Rare)" # Placeholder

# War Machine Specific Fields (Optional)
class: "Mobile Fortress / Transport" # Placeholder
location: "Urban Environments, Corporate Zones" # Placeholder

# Item Specific Fields (Optional)
installation_dc: null
humanity_cost: null
legal_status: "Military Grade (Illegal)"
street_price: "Not Applicable"
availability: "Extremely Rare"
common_sources: "Military Surplus (Black Market), Corporate Vaults"
---

# <% tp.file.title %>

## Overview
An agile, eight-legged spider tank designed as a mobile fortress and armored transport. Features magnetic legs allowing it to scale vertical surfaces like skyscrapers. Capable of carrying a platoon of troops into difficult urban terrain.

## Technical Specifications
- **Type**: <% tp.frontmatter.type %>
- **Category**: <% tp.frontmatter.category %>
- **Rarity**: <% tp.frontmatter.rarity %>
- **Manufacturer**: <% tp.frontmatter.manufacturer %>
- **Status**: <% tp.frontmatter.status %>

<%* if (tp.frontmatter.type === "War Machine") { %>
### War Machine Specs (If Applicable)
- **Class**: <% tp.frontmatter.class %>
- **Size**: Large (Specify Dimensions)
- **Weight**: Heavy (Specify Weight)
- **Crew**: (Specify Crew Complement - Pilot, Gunner, Commander?)
- **Power Source**: (Specify Power Source)
- **Operating Range**: (Specify Range)
- **Maximum Speed**: Moderate, Agile (Specify Speed, Climb Speed)
<%* } %>

## Capabilities
- All-terrain locomotion with 8 legs
- Magnetic grip system for climbing vertical surfaces
- Armored troop transport bay (Platoon size)
- Integrated weapon systems (Turrets, Point Defense?)
- Advanced sensor suite for urban navigation

## Game Statistics & Mechanics
### General Stats (If Applicable)
- **Damage/Protection**: (Specify Weapon Damage)
- **Range/Coverage**: (Specify Weapon/Sensor Range)
- **Duration**: N/A
- **Special Effects**: Troop Transport

<%* if (tp.frontmatter.type === "War Machine") { %>
### War Machine Combat Stats (If Applicable)
- **Armor Rating**: High (Specify Armor)
- **Structure Points**: High (Specify Structure)
- **Shield Capacity**: (Specify Shields, if any)
- **Weapon Damage**: (Specify Weapon Systems)
- **Special Defenses**: Agility, Climbing Ability, Armor

### War Machine Game Mechanics (If Applicable)
- **Initiative Modifier**: (Specify Modifier)
- **Actions Per Turn**: (Specify Actions)
- **Possible Actions**: Move, Climb, Attack, Deploy Troops, Hunker Down
- **Special Abilities (Combat)**: Wall Climbing, Rapid Deployment
- **Cooldown Periods**: (Specify for special weapons)
- **Special Rules**: Rules for climbing, troop deployment under fire, stability checks.
<%* } %>

## Requirements & Installation
- **Prerequisites**: N/A (Vehicle)
- **Installation Needs**: N/A
<%* if (tp.frontmatter.type === "Cyberware") { %>
- **Installation DC**: <% tp.frontmatter.installation_dc %>
- **Humanity Cost**: <% tp.frontmatter.humanity_cost %>
<%* } %>
- **Power/RAM Requirements**: N/A
- **Maintenance Costs**: Very High

## Weaknesses & Side Effects
- Vulnerable leg joints?
- High profile makes it a target?
- Complex locomotion system prone to failure?
- Magnetic grip requires specific surfaces?

## History & Development
Likely developed for urban warfare scenarios, specializing in vertical assaults on high-rise buildings.

## Current Status & Location (If Applicable)
- **Operational Status**: <% tp.frontmatter.status %>
<%* if (tp.frontmatter.location) { %>
- **Current Location**: <% tp.frontmatter.location %>
<%* } %>
Rarely seen, possibly used by elite corporate security or special forces.

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
- Players witness a Sleipnir scaling Arasaka Tower during a lockdown.
- Hired to disable or hijack a Sleipnir being transported.
- Need to infiltrate a location accessible only via a Sleipnir's climbing ability.

## Flavor Text
> "Saw one of those eight-legged freaks crawl right up the side of the Petrochem building like gravity was optional."

## Related Content
- [[mythic-war-machines|Mythic War Machines]]

## GM Notes
The Sleipnir excels at changing the battlefield's verticality. Use it for dramatic entrances, high-stakes urban assaults, or as a mobile command post in unexpected locations.

## Usage Examples
- Deploying troops directly onto the roof of a skyscraper during a siege.
- Used as a mobile sniper platform clinging to the side of a building.
