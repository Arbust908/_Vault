# System Patterns

## Architecture
The vault follows a hierarchical folder structure with clear separation of concerns:

```mermaid
graph TD
    A[Vault Root] --> B[00 Maps of Content]
    A --> C[01 Projects]
    A --> D[02 Areas]
    A --> E[03 Resources]
    A --> F[04 Permanent]
    A --> G[05 Fleeting]
    A --> H[06 Daily]
    A --> I[07 Archives]
    A --> J[99 Meta]
    J --> K[Templates]
    J --> L[CSS Classes]
    
    %% TTRPG Project Structure
    C --> T[CyberPunk BRP]
    T --> W[World Building]
    T --> R[Rules]
    T --> CH[Characters]
    T --> S[Sessions]
    T --> AS[Assets]
    
    W --> WL[Locations]
    W --> WF[Factions]
    W --> WT[Technology]
    
    CH --> PC[Player Characters]
    CH --> NPC[NPCs]
    
    S --> SL[Session Logs]
    S --> SP[Session Plans]
    
    AS --> M[Maps]
    AS --> EQ[Equipment]
    AS --> IM[Images]
```

## Key Technical Decisions
1. **Folder Numbering**: Numerical prefixes ensure consistent ordering and clear hierarchy
2. **Template System**: Standardized templates in Meta folder for consistent note creation. **Utilizes Templater plugin for dynamic content.**
3. **CSS Customization**: Dedicated classes for visual styling and organization
4. **Meta Section**: Isolated space for system configuration and maintenance
5. **Archive Strategy**: Dedicated space for older content to maintain active vault performance
6. **TTRPG Organization**:
   - Modular project structure for game components
   - **Standardized Character template** (with faction support, specific layout).
   - **Consolidated Equipment template** (covering items, war machines, etc.).
   - Session log format for consistent recording (To Be Defined).
   - Asset management system for game resources.
   - Rules reference organization (initial structure created).

## Design Patterns
1. **Progressive Organization**:
   - Fleeting → Permanent note progression
   - Daily notes as entry point
   - Project/Area separation for focus
2. **Content Hierarchy**:
   - Maps of Content for navigation
   - Clear categorization system
   - Metadata consistency
3. **Template Usage**:
   - Daily note templates
   - Project templates (Character, Equipment updated)
   - Consistent formatting
   - **Templater syntax for dynamic fields and conditional sections.**
4. **TTRPG Patterns**:
   - Character progression tracking
   - World state management
   - Session preparation workflow
   - Asset organization system
   - Rules reference structure (Characteristics folder created)
   - **Unified Equipment/Item/War Machine handling via single template.**
   - **Faction tracking integrated into Character template.**

## Component Relationships
- **Daily Notes** feed into **Fleeting Notes** and **Projects**
- **Fleeting Notes** evolve into **Permanent Notes**
- **Projects** and **Areas** reference **Resources**
- **Maps of Content** link across all categories
- **Meta** section supports all other components
- **Archives** store processed content from all sections

### TTRPG Component Relationships
- **World Building** informs **Session Plans** and **NPCs**
- **Character Template** references **Rules** (Characteristics) and uses **Faction** data.
- **Equipment Template** used for **Technology** entries (including War Machines).
- **Session Logs** update **World State** and **Character Progress**
- **Maps** link to **Locations** and **Session Plans**
- **Factions** interact with **NPCs** (via Character template) and **Technology**
- **Technology** (War Machines) uses **Equipment Template**.
