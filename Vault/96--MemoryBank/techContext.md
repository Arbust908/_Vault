# Technical Context

## Technologies Used
1. **Obsidian**
   - Version: Latest
   - Core Features: Markdown support, backlinks, graph view
   - Plugin Support: Yes
   - Theme Support: Yes
   - TTRPG-Specific Plugins:
     - Dice Roller (for game mechanics)
     - Initiative Tracker (for combat)
     - Dataview (for character/inventory management)
     - Kanban (for session planning)
   - **Templater (for dynamic templates)** [Templater DOCs](https://silentvoid13.github.io/Templater/introduction.html)

2. **Markdown**
   - Standard Markdown syntax
   - Obsidian-specific extensions
   - Support for embedded content
   - YAML frontmatter
   - Table support for character sheets
   - Callouts for game mechanics
   - **Templater syntax (`<% ... %>`) used within templates.**

3. **CSS**
   - Custom classes for styling
   - Theme compatibility
   - Responsive design support
   - TTRPG-specific styling:
     - Character sheet layouts
     - Stat block formatting
     - Game reference styling

## Development Setup
1. **Required Software**
   - Obsidian (latest version)
   - Git (for version control)
   - Recommended TTRPG plugins

2. **Folder Structure**
   - Numbered folders (00-99)
   - Clear naming conventions
   - Template organization
   - CSS in dedicated location
   - Game-specific organization:
     - Character sheets
     - World building
     - Rules reference
     - Session logs

3. **Configuration**
   - Core plugins enabled
   - Template folder configured
   - Daily notes setup
   - CSS snippets activated
   - TTRPG plugin settings:
     - Dice roll syntax
   - Initiative tracker setup
   - Dataview queries
   - **Templater configuration (if needed)**
   - Custom CSS for game elements

## Technical Constraints
1. **File System**
   - Local storage based
   - Markdown files only
   - Plain text assets
   - File naming limitations:
     - No spaces in filenames
     - Use hyphens (-) or underscores (_) instead
   - Support for embedded images (maps, character art)

2. **Compatibility**
   - Cross-platform support
   - Mobile compatibility
   - Plugin dependencies
   - Theme requirements
   - Dice roller compatibility

3. **Performance**
   - Local processing
   - Graph view limitations
   - Search indexing
   - Cache management
   - Large map handling

## Dependencies
1. **Core Dependencies**
   - Obsidian application
   - File system access
   - Markdown processor
   - CSS renderer

2. **Optional Dependencies**
   - Git for version control
   - Community plugins
   - Custom themes
   - External tools integration
   - TTRPG Support Tools:
     - Dice roller plugins
     - Character sheet templates
     - Map visualization tools
     - Timeline plugins

3. **System Requirements**
   - Modern operating system
   - Sufficient storage space
   - Memory for graph processing
   - CPU for search operations

4. **TTRPG-Specific Requirements**
   - Dice roll syntax support
   - Character sheet formatting
   - Map embedding capabilities
   - Table support for game data
   - Tag system for game elements
   - Initiative tracking
   - Combat reference sheets
   - NPC database management
