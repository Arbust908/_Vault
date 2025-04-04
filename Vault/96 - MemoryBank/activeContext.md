# Active Context

## Current Focus
- Refining CyberPunk BRP TTRPG templates with Templater syntax
- Consolidating Item and War Machine templates
- Populating initial content based on index files
- Ensuring template consistency across the project

## Recent Changes
1. **Character Template Update:**
   - Added `affiliation` and `secondary_affiliations` fields for NPC faction tracking.
   - Added `Faction Relationships` section.
   - Changed `Characteristics` table to a horizontal layout.
   - Added wiki-style links from Characteristics to planned Rules files.
   - Integrated Templater syntax for title, dates, and conditional faction sections.
2. **Equipment Template Consolidation:**
   - Merged `(TEMPLATE) CyberPunk Item.md` and `(TEMPLATE) CyberPunk War Machine.md` into `(TEMPLATE) CyberPunk Equipment.md`.
   - Incorporated fields from both original templates.
   - Added conditional sections (using Templater) for War Machine specific details.
   - Integrated Templater syntax for title and frontmatter references.
3. **War Machine File Population:**
   - Updated `gorgon-7x-neural-disruptor.md` to the new Equipment template.
   - Created placeholder files for 13 other war machines listed in `war-machines.md` (Banshee, Leviathan, Phoenix, Sleipnir, Kraken, Basilisk, Fenrir, Hekatonkheires, Tiamat, Jormungandr, Arachne, Oni, Harpy, Yggdrasil), populating them with the new Equipment template structure and basic info.
4. **Template Cleanup:**
   - Deleted old `(TEMPLATE) CyberPunk Item.md` and `(TEMPLATE) CyberPunk War Machine.md`.
5. **Rules Structure:**
   - Created `Rules/Characteristics` directory.

## Next Steps
1. **Template Refinement:**
   - Review and potentially further enhance Character and Equipment templates with more Templater features (e.g., calculations).
   - Create/update other core templates (Faction, Location, Session) with Templater syntax.
2. **Content Population:**
   - Fill in details for the newly created War Machine placeholder files.
   - Create the actual Characteristic rule files linked from the Character template.
   - Begin populating other sections (Rules, World Building, NPCs).
3. **Plugin Configuration:**
   - Configure Templater plugin settings if needed.
   - Set up Dice Roller, Initiative Tracker, Dataview.
4. **Game Setup**
   - Establish session log format
   - Design world-building framework

2. **Plugin Configuration**
   - Install recommended TTRPG plugins
   - Configure dice roller
   - Set up initiative tracker
   - Implement dataview queries

3. **Content Development**
   - Begin world-building documentation
   - Create core rule references
   - Design character creation guide
   - Develop session planning tools

## Active Decisions
1. **Project Organization**
   - Modular TTRPG folder structure
   - Clear separation of game components
   - Asset management system
   - Version control for rules

2. **Game Management**
   - Character progression tracking
   - Session documentation format
   - World state management
   - NPC/faction relationships

3. **Technical Implementation**
   - Plugin selection and configuration
   - Template standardization
   - Metadata organization
   - Asset linking strategy
