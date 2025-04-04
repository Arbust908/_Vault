---
type: character
category: [PC, NPC] # Choose one
status: [active, inactive]
affiliation: "Primary Faction" # New field
secondary_affiliations: [] # Optional additional factions
creation_date: <% tp.date.now("YYYY-MM-DD") %>
last_modified: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

## Basic Information
**Real Name**: 
**Street Name**: 
**Age**: 
**Gender**: 
**Occupation**: 

## Faction Relationships
<%* if (tp.frontmatter.affiliation) { %>
### <% tp.frontmatter.affiliation %> 
- **Role**: 
- **Status**: [Loyal/Questioning/Renegade]
- **Benefits**: 
- **Obligations**: 
<%* } %>

<%* if (tp.frontmatter.secondary_affiliations && tp.frontmatter.secondary_affiliations.length > 0) { %>
### Other Affiliations
<%* tp.frontmatter.secondary_affiliations.forEach(faction => { %>
- **<% faction %>**: 
  - Relationship: 
  - Current Standing: 
<%* }) %>
<%* } %>

## Characteristics
| Attribute       | [[Rules/Characteristics/STR\|STR]] | [[Rules/Characteristics/CON\|CON]] | [[Rules/Characteristics/SIZ\|SIZ]] | [[Rules/Characteristics/DEX\|DEX]] | [[Rules/Characteristics/APP\|APP]] | [[Rules/Characteristics/INT\|INT]] | [[Rules/Characteristics/POW\|POW]] | [[Rules/Characteristics/EDU\|EDU]] |
|-----------------|-----|-----|-----|-----|-----|-----|-----|-----|
| **Value**       |     |     |     |     |     |     |     |     |
| **Bonus**       |     |     |     |     |     |     |     |     |

| Derived Stat    | [[Rules/Characteristics/HP\|HP]] | [[Rules/Characteristics/Major Wound\|Major Wound]] | [[Rules/Characteristics/PP\|PP]] | [[Rules/Characteristics/Damage Bonus\|Damage Bonus]] | [[Rules/Characteristics/Build\|Build]] | [[Rules/Characteristics/Move Rate\|Move Rate]] |
|-----------------|-----|-------------|-----|--------------|-------|-----------|
| **Value**       |     |             |     |              |       |           |

## Skills
### Professional Skills
| Skill | Base | Bonus | Total |
|-------|------|-------|-------|
|       |      |       |       |

### Combat Skills
| Skill | Base | Bonus | Total |
|-------|------|-------|-------|
|       |      |       |       |

### Knowledge Skills
| Skill | Base | Bonus | Total |
|-------|------|-------|-------|
|       |      |       |       |

## Cyberware
| Type | Location | Effect | Notes |
|------|----------|--------|-------|
|      |          |        |       |

## Equipment
### Weapons
| Weapon | Damage | Range | Ammo | Notes |
|--------|--------|-------|------|-------|
|        |        |       |      |       |

### Armor
| Location | Protection | Notes |
|----------|------------|-------|
|          |            |       |

### Gear
- 

## Background
### History


### Connections
- 

### Goals
- 

## Notes
- 

## Session Log
-
