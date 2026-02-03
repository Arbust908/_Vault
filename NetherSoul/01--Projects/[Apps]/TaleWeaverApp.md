I'll create two comprehensive documents for you: a Design Document (business/product decisions) and a Technical Document (architecture, directory structure, and flows).Perfect! I've created both comprehensive documents for TaleWeaver. Here's what you now have:

## 📋 Design Document
**Business & Product Specifications**:
- Complete product requirements (functional & non-functional)
- All 5 phases defined in detail
- AI archetype system specifications
- User stories for each epic
- Data requirements & business rules
- Success metrics & KPIs
- RAG and context preservation strategy

## 🔧 Technical Document
**Implementation Blueprint**:
- Complete directory structure with ~100-word descriptions for each file
- Database schema (PocketBase collections)
- API endpoints (both auto-generated and custom)
- 5 detailed user flows with step-by-step interactions
- Context management strategy with token budgets
- Deployment architecture
- Security & performance considerations

## What's Included:

### User Flows Documented:
1. **Standard Project Creation** (manual input, hybrid AI)
2. **Dazzle Mode** (full automation)
3. **Hybrid with Ollama** (privacy-focused local AI)
4. **Consistency Flag Resolution** (how errors are caught/fixed)
5. **Phase Transition & Locking** (workflow enforcement)

### Technical Highlights:
- 60+ file descriptions covering components, pages, composables, utilities
- PocketBase schema with 9 collections
- RAG implementation details with embedding strategy
- Chapter Outline Document format for context preservation
- Token budget allocation (15k context + 5k output)

## Ready for Development! 🚀

You can now:
- Start coding with clear file structure
- Reference flows during implementation
- Use Design Doc for business decisions
- Use Technical Doc for architecture questions

**What would you like to tackle next?**
- Start building a specific component?
- Set up the project scaffolding?
- Deep dive into a particular feature?
- Create wireframes/mockups?

# TaleWeaver - Technical Document
**Version**: 1.0  
**Last Updated**: November 21, 2025  
**Stack**: Nuxt 4 + PocketBase + OpenRouter/Ollama

---

## 1. Technology Stack

### Frontend
- **Nuxt 4** (Vue 3, TypeScript, Auto-imports)
- **Tailwind CSS** (Utility-first styling)
- **TipTap** (Rich text markdown editor)
- **Pinia** (State management)
- **VueUse** (Composition utilities)

### Backend
- **PocketBase** (SQLite + REST API + Realtime)
- **Go** (PocketBase extensions if needed)

### AI Integration
- **OpenRouter API** (Claude Sonnet, GPT-4o)
- **Ollama** (Local inference server)
- **Vector Embeddings** (Ollama or OpenAI for RAG)

### Deployment
- **Frontend**: Vercel/Netlify (SSR/SSG)
- **Backend**: Self-hosted PocketBase (VPS or PaaS)
- **Database**: SQLite (embedded in PocketBase)

---

## 2. Project Structure

```
taleweaver/
├── app/                          # Nuxt 4 app directory
│   ├── components/               # Vue components
│   │   ├── layout/
│   │   │   ├── AppHeader.vue     # Global navigation and user menu
│   │   │   ├── AppSidebar.vue    # Phase navigation sidebar
│   │   │   └── AppFooter.vue     # Footer with links/credits
│   │   ├── project/
│   │   │   ├── ProjectCard.vue           # Display project summary in dashboard
│   │   │   ├── ProjectCreateModal.vue    # Modal for new project creation
│   │   │   ├── ProjectMetrics.vue        # Token/cost/word count display
│   │   │   └── PhaseProgress.vue         # Visual phase completion indicator
│   │   ├── phases/
│   │   │   ├── FoundationForm.vue        # Genre, themes, setting input
│   │   │   ├── CharacterForm.vue         # Character profile editor
│   │   │   ├── StructureForm.vue         # Synopsis, outline editor
│   │   │   ├── ChapterEditor.vue         # Chapter drafting interface
│   │   │   └── RefinementPanel.vue       # Editing suggestions display
│   │   ├── ai/
│   │   │   ├── ArchetypeSelector.vue     # AI archetype dropdown
│   │   │   ├── GenerationButton.vue      # Trigger AI generation with loading state
│   │   │   ├── CostEstimate.vue          # Show estimated tokens/cost before generation
│   │   │   └── DazzleModeToggle.vue      # Enable/configure Dazzle Mode
│   │   ├── editor/
│   │   │   ├── MarkdownEditor.vue        # TipTap-based markdown editor component
│   │   │   ├── EditorToolbar.vue         # Bold, italic, heading buttons
│   │   │   └── WordCounter.vue           # Live word count display
│   │   ├── consistency/
│   │   │   ├── EntityList.vue            # Display tracked characters/locations
│   │   │   ├── ConsistencyFlag.vue       # Show detected errors/warnings
│   │   │   └── EntityCard.vue            # Character/location detail card
│   │   └── export/
│   │       ├── ExportModal.vue           # Export format selection
│   │       └── ExportProgress.vue        # Export generation status
│   ├── pages/                    # Nuxt file-based routing
│   │   ├── index.vue             # Landing page with product info
│   │   ├── login.vue             # User authentication
│   │   ├── register.vue          # User registration
│   │   ├── dashboard.vue         # User's project list
│   │   └── projects/
│   │       ├── [id]/
│   │       │   ├── index.vue             # Project overview with phase selection
│   │       │   ├── foundation.vue        # Foundation phase interface
│   │       │   ├── characters.vue        # Character phase interface
│   │       │   ├── structure.vue         # Structure phase interface
│   │       │   ├── drafting.vue          # Chapter drafting interface
│   │       │   ├── refinement.vue        # Refinement phase interface
│   │       │   └── export.vue            # Export and completion
│   ├── composables/              # Composition API utilities
│   │   ├── useAuth.ts            # Authentication state and methods
│   │   ├── useProject.ts         # Project CRUD operations
│   │   ├── usePhase.ts           # Phase navigation and locking logic
│   │   ├── useAI.ts              # AI generation orchestration
│   │   ├── useConsistency.ts     # Entity tracking and flagging
│   │   ├── useRAG.ts             # Vector search and context retrieval
│   │   └── useExport.ts          # Export generation (MD, PDF)
│   ├── stores/                   # Pinia state stores
│   │   ├── auth.ts               # User session, tokens
│   │   ├── project.ts            # Current project state
│   │   ├── phase.ts              # Current phase data
│   │   └── ui.ts                 # Loading states, modals, toasts
│   ├── server/                   # Nuxt server endpoints
│   │   ├── api/
│   │   │   ├── ai/
│   │   │   │   ├── generate.post.ts      # Proxy to OpenRouter/Ollama
│   │   │   │   ├── embed.post.ts         # Generate embeddings for RAG
│   │   │   │   └── cost.post.ts          # Calculate cost estimate
│   │   │   ├── export/
│   │   │   │   ├── markdown.post.ts      # Generate MD export
│   │   │   │   └── pdf.post.ts           # Generate PDF export
│   │   │   └── consistency/
│   │   │       ├── extract.post.ts       # Extract entities from text
│   │   │       └── flag.post.ts          # Check for inconsistencies
│   │   └── middleware/
│   │       └── auth.ts           # Verify PocketBase auth tokens
│   ├── utils/                    # Utility functions
│   │   ├── ai/
│   │   │   ├── prompts.ts                # Archetype system prompts
│   │   │   ├── context-builder.ts        # Build context for AI requests
│   │   │   ├── token-counter.ts          # Estimate token usage
│   │   │   └── cost-calculator.ts        # Calculate USD cost from tokens
│   │   ├── export/
│   │   │   ├── markdown.ts               # Format project as markdown
│   │   │   └── pdf.ts                    # Generate PDF with styling
│   │   ├── consistency/
│   │   │   ├── entity-extractor.ts       # Parse entities from content
│   │   │   ├── similarity.ts             # Cosine similarity for RAG
│   │   │   └── flag-detector.ts          # Detect contradictions
│   │   └── validation/
│   │       ├── phase-rules.ts            # Validate phase completion
│   │       └── content-rules.ts          # Validate content requirements
│   ├── types/                    # TypeScript definitions
│   │   ├── project.ts            # Project, Section, Chapter types
│   │   ├── entity.ts             # Entity, RelevantEvent types
│   │   ├── ai.ts                 # AIProvider, Archetype types
│   │   └── export.ts             # ExportFormat types
│   ├── plugins/
│   │   ├── pocketbase.client.ts  # Initialize PocketBase SDK
│   │   └── tiptap.client.ts      # Initialize TipTap editor
│   ├── app.vue                   # Root app component
│   └── nuxt.config.ts            # Nuxt configuration
├── pocketbase/                   # PocketBase backend
│   ├── pb_migrations/            # Database migrations
│   │   ├── 001_initial_schema.js         # Create collections
│   │   ├── 002_add_indexes.js            # Performance indexes
│   │   └── 003_add_rag_support.js        # Vector embedding columns
│   ├── pb_hooks/                 # PocketBase hooks (Go)
│   │   ├── main.pb.go                    # Hook registration
│   │   ├── auto_save.go                  # Auto-save sections every 30s
│   │   ├── phase_lock.go                 # Lock phase on completion
│   │   └── metrics_update.go             # Update usage metrics
│   └── pb_data/                  # SQLite database (gitignored)
├── docs/                         # Documentation
│   ├── design-document.md        # Business requirements
│   ├── technical-document.md     # This file
│   ├── api-reference.md          # API endpoint documentation
│   └── deployment-guide.md       # Deployment instructions
├── scripts/                      # Utility scripts
│   ├── seed-database.ts          # Seed test projects
│   └── migrate-pocketbase.sh     # Run PocketBase migrations
├── public/                       # Static assets
│   ├── favicon.ico
│   └── images/
├── .env.example                  # Environment variable template
├── package.json
├── tsconfig.json
└── README.md
```

---

## 3. File Descriptions

### Frontend Components

#### `components/layout/AppHeader.vue`
Global navigation bar component. Displays user avatar, project title, and quick actions (save, export, settings). Includes logout button and links to dashboard. Handles responsive mobile menu. Integrates with auth store for user state.

#### `components/project/ProjectCard.vue`
Reusable card component for displaying project summary on dashboard. Shows project title, current phase, completion percentage, word count, and last updated timestamp. Includes click handler to navigate to project detail. Displays Dazzle Mode badge if applicable.

#### `components/ai/ArchetypeSelector.vue`
Dropdown component for selecting AI archetype (Architect, Pantser, Literary Editor). Displays archetype description on hover. Emits selected archetype to parent. Used in section forms and Dazzle Mode configuration. Validates selection before generation.

#### `components/editor/MarkdownEditor.vue`
TipTap-based WYSIWYG markdown editor. Supports bold, italic, headers, lists, links. Auto-saves content every 30 seconds via composable. Tracks word count and displays live. Accepts initial content prop and emits updates. Includes undo/redo functionality.

#### `components/consistency/ConsistencyFlag.vue`
Alert component displaying detected inconsistencies. Shows flag type (name mismatch, timeline error, location contradiction), affected content snippet, and suggested fix. Includes dismiss button and "apply fix" action. Color-coded by severity (warning, error).

### Pages

#### `pages/dashboard.vue`
User's main project list page. Fetches all projects from PocketBase via useProject composable. Displays ProjectCard components in grid. Includes "New Project" button triggering ProjectCreateModal. Shows loading skeleton during fetch. Implements infinite scroll for 100+ projects.

#### `pages/projects/[id]/foundation.vue`
Foundation phase interface. Renders FoundationForm component with fields for genre, themes, setting, target audience, and style guide. Includes AI generation buttons for each field. Shows phase completion progress. Locks phase button enabled only when all fields filled. Auto-saves form state.

#### `pages/projects/[id]/drafting.vue`
Chapter drafting interface. Displays chapter navigation sidebar (list of all chapters). Main area shows ChapterEditor for selected chapter. Includes AI generation button with cost estimate. Shows previous chapter summary for context. Displays consistency flags in real-time. Tracks word count vs. target.

### Composables

#### `composables/useAI.ts`
Orchestrates AI generation requests. Exports `generateContent(section, archetype, context)` function that calls Nuxt server API. Handles loading states, error handling, retry logic. Calculates cost estimate before generation. Manages token counting and metrics update. Supports both OpenRouter and Ollama providers.

#### `composables/useRAG.ts`
Manages retrieval-augmented generation. Exports `getRelevantContext(projectId, currentChapter)` function that queries vector embeddings. Uses cosine similarity to rank relevant events and entities. Returns top 5-10 results as context string. Handles embedding generation via server API.

#### `composables/useConsistency.ts`
Consistency engine logic. Exports `extractEntities(text)` to parse characters/locations from content. `flagInconsistencies(projectId, newContent)` compares against existing entities. Returns array of detected issues with severity and suggested fixes. Updates entity database with new mentions.

#### `composables/useExport.ts`
Export generation logic. Exports `exportMarkdown(projectId)` and `exportPDF(projectId)` functions that call server endpoints. Formats project content with metadata, style guide, and statistics. Handles file download in browser. Shows progress indicator for large projects. Includes error handling for failed exports.

### Server API

#### `server/api/ai/generate.post.ts`
Server endpoint proxying AI generation requests. Accepts section content, archetype, context. Builds full prompt using context-builder utility. Calls OpenRouter or Ollama based on project setting. Streams response if supported. Returns generated text, tokens used, estimated cost. Logs all requests for debugging.

#### `server/api/export/pdf.post.ts`
Server endpoint generating PDF exports. Accepts projectId. Fetches all project data from PocketBase. Uses library (e.g., pdfkit or puppeteer) to render PDF with custom styling. Includes cover page, table of contents, chapter text, and metadata appendix. Returns file buffer or download URL.

#### `server/api/consistency/flag.post.ts`
Server endpoint checking for inconsistencies. Accepts projectId and new content. Queries existing entities from database. Uses NLP (simple regex or AI) to detect name mismatches, timeline errors, location contradictions. Returns array of flags with context and suggestions. Caches results for performance.

### Utilities

#### `utils/ai/prompts.ts`
Exports system prompt templates for each archetype. `ARCHITECT_PROMPT`, `PANTSER_PROMPT`, `LITERARY_EDITOR_PROMPT` constants containing personality descriptions and writing guidelines. Includes helper function `buildSystemPrompt(archetype, styleGuide)` that merges archetype with project-specific style preferences.

#### `utils/ai/context-builder.ts`
Exports `buildContext(project, section, previousContent)` function that assembles context for AI requests. Includes project foundation, character profiles, chapter outline document, relevant events from RAG, and immediate previous content. Manages token budget to stay within context limits. Prioritizes most recent and relevant information.

#### `utils/consistency/entity-extractor.ts`
Exports `extractEntities(text, entityType)` function that parses entities from content. Uses regex patterns and NLP heuristics to identify character names, locations, objects. Returns array of entity objects with attributes. Handles edge cases (nicknames, aliases). Integrates with embedding generation for RAG.

#### `utils/export/markdown.ts`
Exports `formatMarkdown(project)` function that converts project to markdown format. Includes YAML frontmatter with metadata. Formats chapters with headers, separators. Appends style guide and statistics as footnotes. Ensures proper escaping of special characters. Returns string ready for file download.

### Types

#### `types/project.ts`
TypeScript interfaces for project domain. `Project`, `Section`, `Chapter`, `StyleGuide`, `UsageMetrics` types. Includes enums for `PhaseType`, `Archetype`, `AIProvider`, `ContentRating`. Exports validation schemas for runtime type checking. Documents all properties with JSDoc comments.

#### `types/entity.ts`
TypeScript interfaces for consistency engine. `Entity`, `Character`, `Location`, `ObjectEntity`, `RelevantEvent` types. Includes `EntityType` enum. `ConsistencyFlag` interface for detected issues. Defines embedding vector type for RAG integration. Exports helper functions for entity comparison.

### PocketBase Migrations

#### `pb_migrations/001_initial_schema.js`
Creates core collections: users, projects, sections, chapters, entities, relevant_events, chapter_outline_documents, exports, usage_metrics. Defines all fields with types, constraints, indexes. Sets up relationships (foreign keys). Configures access rules (users can only access their own projects). Runs on first PocketBase start.

#### `pb_hooks/phase_lock.go`
PocketBase hook that triggers when section.is_locked changes to true. Validates all required sections in phase are complete. Updates project.current_phase if entire phase is locked. Prevents lock if phase incomplete. Generates ChapterOutlineDocument when Structure phase locks. Sends notification when phase completes.

---

## 4. Database Schema

### Collections (PocketBase)

#### `users` (built-in PocketBase collection)
- `id` (auto)
- `email` (unique)
- `username` (unique)
- `name` (text)
- `avatar` (file)
- `created`, `updated` (auto)

#### `projects`
- `id` (text, 15 chars)
- `user` (relation to users)
- `title` (text, required)
- `status` (select: active, complete, archived)
- `current_phase` (select: foundation, characters, structure, drafting, refinement, complete)
- `is_dazzle_mode` (bool, default: false)
- `selected_archetype` (select: architect, pantser, literary_editor)
- `ai_provider` (select: openrouter, ollama)
- `style_guide` (json)
- `target_chapter_length` (number, default: 3000)
- `created`, `updated` (auto)

**Indexes**: `user`, `status`, `current_phase`

#### `sections`
- `id` (text, 15 chars)
- `project` (relation to projects)
- `phase` (select: foundation, characters, structure, drafting, refinement)
- `step_name` (text, e.g., "genre_selection")
- `content` (text, markdown)
- `is_locked` (bool, default: false)
- `filled_by` (select: user, ai)
- `ai_archetype_used` (select: architect, pantser, literary_editor, nullable)
- `tokens_input` (number)
- `tokens_output` (number)
- `generation_time_seconds` (number)
- `estimated_cost_usd` (number)
- `version_number` (number, default: 1)
- `created`, `updated`, `locked_at` (auto)

**Indexes**: `project`, `phase`, `is_locked`

#### `chapters`
- `id` (text, 15 chars)
- `project` (relation to projects)
- `chapter_number` (number, required)
- `title` (text)
- `content` (text, markdown)
- `outline_summary` (text, ~100 words)
- `word_count` (number)
- `is_locked` (bool, default: false)
- `filled_by` (select: user, ai)
- `ai_archetype_used` (select, nullable)
- `tokens_input` (number)
- `tokens_output` (number)
- `generation_time_seconds` (number)
- `estimated_cost_usd` (number)
- `created`, `updated`, `locked_at` (auto)

**Indexes**: `project`, `chapter_number`, `is_locked`

#### `entities`
- `id` (text, 15 chars)
- `project` (relation to projects)
- `entity_type` (select: character, location, object, event)
- `name` (text, required)
- `attributes` (json)
- `first_mentioned_section` (relation to sections)
- `embedding` (text, serialized vector)
- `created`, `updated` (auto)

**Indexes**: `project`, `entity_type`, `name`

#### `relevant_events`
- `id` (text, 15 chars)
- `project` (relation to projects)
- `chapter` (relation to chapters)
- `characters_involved` (text)
- `what_happened` (text)
- `significance` (text)
- `tags` (json array)
- `embedding` (text, serialized vector)
- `created` (auto)

**Indexes**: `project`, `chapter`

#### `chapter_outline_documents`
- `id` (text, 15 chars)
- `project` (relation to projects, unique)
- `full_outline` (text)
- `created` (auto)

#### `exports`
- `id` (text, 15 chars)
- `project` (relation to projects)
- `format` (select: md, pdf)
- `file` (file, stored in PocketBase)
- `word_count` (number)
- `includes_metadata` (bool)
- `created` (auto)

#### `usage_metrics`
- `id` (text, 15 chars)
- `project` (relation to projects, unique)
- `total_tokens_input` (number, default: 0)
- `total_tokens_output` (number, default: 0)
- `total_cost_usd` (number, default: 0)
- `total_generation_time_seconds` (number, default: 0)
- `updated` (auto)

---

## 5. API Endpoints

### PocketBase REST API (Auto-generated)

#### Authentication
- `POST /api/collections/users/auth-with-password` - Login
- `POST /api/collections/users/auth-refresh` - Refresh token
- `POST /api/collections/users/records` - Register

#### Projects
- `GET /api/collections/projects/records` - List user's projects
- `POST /api/collections/projects/records` - Create project
- `GET /api/collections/projects/records/:id` - Get project details
- `PATCH /api/collections/projects/records/:id` - Update project
- `DELETE /api/collections/projects/records/:id` - Delete project

#### Sections
- `GET /api/collections/sections/records?filter=project=':id'` - Get sections for project
- `POST /api/collections/sections/records` - Create/update section
- `PATCH /api/collections/sections/records/:id` - Update section content
- `PATCH /api/collections/sections/records/:id` - Lock section

#### Chapters
- `GET /api/collections/chapters/records?filter=project=':id'&sort=chapter_number` - Get chapters
- `POST /api/collections/chapters/records` - Create chapter
- `PATCH /api/collections/chapters/records/:id` - Update chapter content

#### Entities
- `GET /api/collections/entities/records?filter=project=':id'` - Get entities for consistency
- `POST /api/collections/entities/records` - Create entity

### Custom Nuxt Server Endpoints

#### AI Generation
- `POST /api/ai/generate`
  - Body: `{ sectionId, archetype, contextData }`
  - Returns: `{ generatedContent, tokensUsed, cost }`

- `POST /api/ai/embed`
  - Body: `{ text }`
  - Returns: `{ embedding: number[] }`

- `POST /api/ai/cost`
  - Body: `{ estimatedTokens, provider }`
  - Returns: `{ estimatedCostUSD }`

#### Export
- `POST /api/export/markdown`
  - Body: `{ projectId, includeMetadata }`
  - Returns: `{ markdown: string }`

- `POST /api/export/pdf`
  - Body: `{ projectId, includeMetadata }`
  - Returns: `{ fileUrl: string }` (PocketBase file URL)

#### Consistency
- `POST /api/consistency/extract`
  - Body: `{ text, entityType }`
  - Returns: `{ entities: Entity[] }`

- `POST /api/consistency/flag`
  - Body: `{ projectId, newContent }`
  - Returns: `{ flags: ConsistencyFlag[] }`

---

## 6. User Flows

### Flow 1: Standard Project Creation (Manual Input)

**Actors**: Aspiring novelist  
**Goal**: Create a novel project with manual input at each step

**Steps**:
1. User clicks "New Project" on dashboard
2. ProjectCreateModal appears
3. User enters project title ("My Fantasy Novel")
4. User selects "Standard Mode" (not Dazzle)
5. User selects AI provider (OpenRouter)
6. Modal closes, redirects to `/projects/{id}/foundation`

**Foundation Phase**:
7. User fills genre field manually ("Epic Fantasy")
8. User clicks AI icon next to "Themes" field
9. ArchetypeSelector appears, user selects "The Architect"
10. System calls `/api/ai/generate` with context
11. Loading spinner displays (~10 seconds)
12. Generated themes populate field ("Redemption, power, sacrifice")
13. User manually fills setting field
14. User defines style guide (3rd person, past tense, dark tone)
15. "Complete Foundation" button becomes enabled
16. User clicks "Complete Foundation"
17. Phase locks, system redirects to `/projects/{id}/characters`

**Characters Phase**:
18. User creates protagonist profile manually
19. User clicks "Generate Antagonist" button
20. System calls AI with protagonist context
21. Antagonist profile populates
22. User reviews, makes manual edits
23. User creates 2 supporting characters manually
24. User clicks "Complete Characters"
25. Phase locks, redirects to `/projects/{id}/structure`

**Structure Phase**:
26. User clicks "Generate Title Ideas"
27. System generates 5 options
28. User selects "The Fallen Throne"
29. User writes logline manually
30. User clicks "Generate Synopsis"
31. AI expands logline to 500-word synopsis
32. User reviews synopsis
33. User clicks "Generate Chapter Outline" (20 chapters)
34. System generates ChapterOutlineDocument
35. User reviews outline, adjusts chapter 5 title manually
36. User clicks "Complete Structure"
37. ChapterOutlineDocument is locked and saved
38. Redirects to `/projects/{id}/drafting`

**Drafting Phase**:
39. Chapter 1 displays in editor
40. User clicks "Generate Chapter 1"
41. CostEstimate shows: "~4,000 tokens, $0.12"
42. User confirms
43. System calls AI with:
    - Chapter outline
    - Character profiles
    - Style guide
    - Previous chapter summary (none for Ch 1)
44. Chapter 1 generates (~3,200 words, 2 minutes)
45. User reads chapter, makes minor edits
46. User clicks "Lock Chapter 1"
47. System extracts entities and relevant events
48. Chapter 2 becomes active
49. User manually writes chapter 2 (takes 1 hour)
50. User clicks "Lock Chapter 2"
51. Repeat for remaining 18 chapters (mix of AI and manual)

**Refinement Phase**:
52. After all chapters locked, redirects to `/projects/{id}/refinement`
53. User clicks "Analyze Consistency"
54. System flags 3 issues:
    - Character name typo ("Jon" vs "John")
    - Timeline contradiction (event happens twice)
    - Location error (castle door described differently)
55. User reviews flags, applies suggested fixes
56. User clicks "Generate Style Report"
57. AI analyzes prose, suggests improvements
58. User clicks "Complete Refinement"
59. Project status changes to "Complete"
60. Redirects to `/projects/{id}/export`

**Export**:
61. User clicks "Export as PDF"
62. ExportModal appears with options (include metadata: yes)
63. User confirms
64. System generates PDF (~30 seconds)
65. PDF downloads automatically
66. User clicks "Back to Dashboard"
67. Project shows "Complete" badge

**Metrics Displayed**:
- Total word count: 64,000 words
- Tokens used: 180,000 input, 45,000 output
- Estimated cost: $6.75
- Time spent: 12 hours 30 minutes

---

### Flow 2: Dazzle Mode (Full Automation)

**Actors**: Busy writer wanting quick draft  
**Goal**: Generate complete novel with zero manual input

**Steps**:
1. User clicks "New Project" on dashboard
2. ProjectCreateModal appears
3. User enters project title ("AI Sci-Fi Novel")
4. User toggles "Dazzle Mode" ON
5. ArchetypeSelector appears (global archetype selection)
6. User selects "The Pantser" archetype
7. User selects AI provider (OpenRouter)
8. User sets target chapter count: 15
9. User sets target chapter length: 4,000 words
10. User clicks "Start Dazzle Mode"
11. Modal shows confirmation: "This will take ~45 minutes. Proceed?"
12. User confirms

**Automated Generation**:
13. System starts background job
14. Dashboard shows project with "Generating..." status
15. Progress bar displays (0% → 100%)

**Behind the scenes**:
- Foundation phase generates (genre: sci-fi, themes, setting, style guide)
- Characters phase generates (protagonist, antagonist, 3 supporting)
- Structure phase generates (title, synopsis, 15-chapter outline)
- Drafting phase generates all 15 chapters sequentially
- Refinement phase runs consistency check, applies fixes

16. After 48 minutes, user receives email notification
17. User clicks notification link, opens project
18. Project status: "Complete"
19. User navigates to `/projects/{id}/drafting`
20. All 15 chapters displayed, all locked
21. User reads chapters, satisfied with quality
22. User clicks "Export as Markdown"
23. 60,000-word manuscript downloads

**Metrics Displayed**:
- Total word count: 60,000 words
- Tokens used: 220,000 input, 65,000 output
- Estimated cost: $8.50
- Generation time: 48 minutes

**User's next steps**:
- Manually edit chapters in external editor (e.g., Scrivener)
- Use as first draft for traditional editing process
- Publish to Wattpad for feedback

---

### Flow 3: Hybrid Approach with Ollama (Privacy Mode)

**Actors**: Author writing sensitive content (e.g., memoir)  
**Goal**: Use local AI for privacy, manual input for personal details

**Steps**:
1. User has Ollama running locally with Llama 3.1 model
2. User creates new project
3. User selects "Ollama (Local)" as AI provider
4. System checks Ollama availability (localhost:11434)
5. Connection successful, project created

**Foundation Phase**:
6. User manually fills genre ("Memoir")
7. User manually writes themes (deeply personal)
8. User clicks "Generate Setting Description" via Ollama
9. Local AI generates (~30 seconds, slower than cloud)
10. User completes foundation

**Characters Phase**:
11. User manually creates all character profiles (real people)
12. User does NOT use AI for characters (privacy concern)
13. Completes phase manually

**Structure Phase**:
14. User writes outline manually (12 chapters)
15. User clicks "Refine Outline" via Ollama
16. Local AI suggests structure improvements
17. User applies suggestions, completes phase

**Drafting Phase**:
18. User manually writes chapters 1-3 (personal stories)
19. User clicks "Generate Chapter 4" via Ollama
20. Ollama generates chapter using local context (~2 minutes)
21. User edits generated content heavily
22. Continues pattern for remaining 9 chapters

**Benefits**:
- All data stays on local machine
- No cloud provider has access to sensitive content
- User retains full control over personal details
- Trade-off: Slower generation, slightly lower quality

**Export**:
23. User exports as Markdown
24. No data sent to external servers
25. Project metadata shows "Ollama (local)" provider

---

### Flow 4: Consistency Flag Resolution

**Context**: User drafting chapter 8, system detects inconsistencies

**Steps**:
1. User writing chapter 8 in MarkdownEditor
2. User mentions character "Sarah" multiple times
3. User clicks "Generate Rest of Chapter" via AI
4. AI generates remaining 1,500 words
5. System auto-runs consistency check
6. ConsistencyFlag appears:
   - **Type**: Name mismatch
   - **Issue**: Character introduced as "Sara" in chapter 3
   - **Current**: Chapter 8 uses "Sarah" (with 'h')
   - **Suggestion**: Update chapter 8 to use "Sara"
7. User clicks flag to view context
8. Modal shows:
   - Chapter 3 excerpt: "Sara walked into the room"
   - Chapter 8 excerpt: "Sarah couldn't believe it"
9. User realizes mistake, clicks "Apply Fix"
10. System replaces all "Sarah" → "Sara" in chapter 8
11. Flag disappears
12. Second flag appears:
    - **Type**: Timeline contradiction
    - **Issue**: Chapter 6 states "three days later," but chapter 8 references "last week"
    - **Suggestion**: Adjust chapter 8 timeline reference
13. User manually edits chapter 8 text
14. User clicks "Dismiss Flag"
15. System marks flag as resolved
16. User clicks "Lock Chapter 8"
17. Chapter locks successfully (no remaining flags)

**Entity Tracking Update**:
- System adds new entities from chapter 8 to database
- RAG embeddings generated for new events
- Future chapters will reference chapter 8 context

---

### Flow 5: Phase Transition and Locking

**Context**: User completing Structure phase with outline

**Steps**:
1. User on `/projects/{id}/structure`
2. User has filled:
   - ✅ Title
   - ✅ Logline
   - ✅ Synopsis
   - ✅ Act structure
   - ⏳ Chapter outline (in progress)
3. "Complete Structure" button disabled (gray)
4. User clicks "Generate Chapter Outline"
5. AI generates 18 chapters with summaries
6. User reviews outline
7. User manually adjusts chapter 12 summary
8. All required fields now complete
9. "Complete Structure" button enabled (blue)
10. User clicks "Complete Structure"

**System Actions**:
11. Modal appears: "Lock Structure Phase?"
    - Warning: "You cannot edit this phase after locking"
    - Info: "Structure will be used as context for drafting"
12. User clicks "Confirm Lock"
13. System creates ChapterOutlineDocument:
    ```
    Chapter 1: The Beginning
    [100-word summary]
    
    Chapter 2: Rising Tension
    [100-word summary]
    
    ... (18 chapters total)
    ```
14. System sets `sections.is_locked = true` for all Structure sections
15. System updates `projects.current_phase = 'drafting'`
16. System triggers PocketBase hook `phase_lock.go`
17. Hook validates all Structure sections locked
18. Hook generates initial Relevant Events (if any)
19. System displays success toast: "Structure phase complete!"
20. Page redirects to `/projects/{id}/drafting`

**Drafting Interface**:
21. Sidebar displays chapter list (1-18)
22. Chapter 1 is active
23. ChapterOutlineDocument loaded as context
24. User begins drafting chapter 1

**Attempt to Edit Locked Phase**:
25. User clicks browser back button
26. Lands on `/projects/{id}/structure`
27. All form fields are read-only (disabled)
28. Gray badge displays: "Phase Locked"
29. Info message: "Structure is locked. Changes would require unlocking (v2 feature)"

---

## 7. Context Management Strategy

### Token Budget Allocation

For each AI generation request, context includes:

| Component | Tokens | Priority |
|-----------|--------|----------|
| System Prompt (archetype) | 500 | Required |
| Project Foundation | 1,000 | Required |
| Character Profiles (active) | 2,000 | Required |
| Style Guide | 200 | Required |
| Chapter Outline Document | 3,000 | Required |
| RAG: Relevant Events | 2,000 | High |
| Previous 2 Chapters (full text) | 6,000 | Medium |
| Current Chapter Outline | 300 | Required |
| **Total Context Budget** | **15,000** | |
| **Output Budget** | **5,000** | |
| **Total Request** | **20,000** | |

### Dynamic Context Pruning

If context exceeds budget:
1. Remove older chapters (keep only previous 1 chapter)
2. Reduce Relevant Events to top 3 (by RAG score)
3. Summarize character profiles (keep only names, key traits)
4. Truncate Chapter Outline Document (keep only nearby chapters)

### RAG Retrieval Process

When drafting chapter N:
1. Generate embedding for chapter N outline
2. Query `relevant_events` table with cosine similarity
3. Retrieve top 5 events with similarity > 0.7
4. Query `entities` table for characters mentioned in chapter N outline
5. Retrieve full profiles for those characters
6. Concatenate results into context string
7. Inject into AI prompt

### ChapterOutlineDocument Format

Generated after Structure phase:
```markdown
# Chapter Outline

## Chapter 1: The Awakening
Protagonist discovers their hidden power. Setting: underground bunker. 
Introduces antagonist via hologram message. Ends with decision to flee.
Key Event: Power manifestation
Characters: Alex (protagonist), mysterious voice

## Chapter 2: Flight
Protagonist escapes city. Chased by agents. Meets mentor figure. 
Setting: urban wasteland. Theme: trust.
Key Event: Mentor introduction
Characters: Alex, Mentor (Zara)

... (continues for all chapters)
```

This document is:
- Generated once, locked with Structure phase
- Injected into ALL chapter drafting requests
- Enables AI to foreshadow future events
- Maintains narrative arc coherence

---

## 8. Deployment Architecture

### Development Environment

```
Frontend (localhost:3000)
  ↓ Nuxt Dev Server
  ↓ SSR + HMR

Backend (localhost:8090)
  ↓ PocketBase
  ↓ SQLite (pb_data/data.db)

AI (localhost:11434)
  ↓ Ollama (optional, for local testing)

AI (api.openrouter.ai)
  ↓ OpenRouter API
```

### Production Environment

```
Frontend (vercel.app)
  ↓ Nuxt SSR
  ↓ Edge Functions

Backend (vps.example.com:8090)
  ↓ PocketBase (systemd service)
  ↓ SQLite (persistent volume)
  ↓ Nginx reverse proxy

AI (api.openrouter.ai)
  ↓ OpenRouter API (primary)

AI (User's localhost:11434)
  ↓ Ollama (user-installed)
```

### Environment Variables

**Frontend (.env)**:
```bash
NUXT_PUBLIC_POCKETBASE_URL=https://api.taleweaver.app
NUXT_PUBLIC_APP_URL=https://taleweaver.app
```

**Backend (PocketBase env)**:
```bash
OPENROUTER_API_KEY=sk-or-...
OPENAI_API_KEY=sk-... (for embeddings)
ALLOWED_ORIGINS=https://taleweaver.app
```

### Deployment Steps

1. **PocketBase Setup**:
   - Install PocketBase binary on VPS
   - Run migrations: `./pocketbase migrate up`
   - Configure systemd service
   - Set up Nginx reverse proxy with SSL
   - Configure CORS for frontend domain

2. **Frontend Deployment**:
   - Push to GitHub
   - Vercel auto-deploys from main branch
   - Configure environment variables in Vercel dashboard
   - Set up custom domain

3. **AI Provider Setup**:
   - Create OpenRouter account
   - Generate API key
   - Set key in PocketBase environment
   - (Optional) Install Ollama on VPS for server-side local mode

---

## 9. Performance Considerations

### Optimization Strategies

1. **Database Indexing**:
   - Index `project` foreign keys in all collections
   - Index `chapter_number` for fast chapter retrieval
   - Index `entity_type` and `name` for consistency checks

2. **Caching**:
   - Cache ChapterOutlineDocument in memory (per project)
   - Cache character profiles (Redis or in-memory)
   - Cache RAG embeddings (avoid regenerating)

3. **Lazy Loading**:
   - Load chapters on-demand (not all at once)
   - Paginate entity list in UI
   - Defer non-critical consistency checks

4. **Background Jobs**:
   - Process Dazzle Mode in background worker
   - Generate embeddings asynchronously
   - Export PDF in background, notify when ready

5. **Token Optimization**:
   - Use Claude Sonnet (efficient) over GPT-4o when possible
   - Compress context by summarizing old chapters
   - Cache AI responses for identical prompts

### Scalability Limits (MVP)

- Max projects per user: 50
- Max chapters per project: 100
- Max entities per project: 500
- Max concurrent Dazzle Mode jobs: 10
- Max file upload size (import): 10 MB

---

## 10. Security Considerations

### Authentication
- PocketBase handles JWT tokens
- HTTP-only cookies for web clients
- Refresh token rotation

### Authorization
- Row-level security: Users can only access their projects
- PocketBase rules enforce ownership checks
- Admin role for support access (view-only)

### API Key Protection
- OpenRouter key stored server-side only
- Never exposed to frontend
- Rotate keys quarterly

### Rate Limiting
- 100 AI requests per user per day
- 10 exports per user per day
- 5 project creations per user per day

### Data Privacy
- Ollama mode keeps all data local
- No telemetry sent from Ollama requests
- Optional: Encrypt project content at rest

---

## 11. Testing Strategy

### Unit Tests
- Utility functions (token counter, context builder)
- Entity extraction logic
- Cost calculation accuracy

### Integration Tests
- PocketBase CRUD operations
- AI generation flow (mock responses)
- Export generation (MD, PDF)

### E2E Tests (Playwright)
- Complete manual project flow
- Dazzle Mode end-to-end
- Consistency flag resolution
- Export download

### Load Tests
- 100 concurrent users
- 1,000 AI generation requests/hour
- Database query performance under load

---

## 12. Future Enhancements (Post-MVP)

### v1.1 Features
- Phase unlocking with ripple effect warning
- Import existing manuscripts (MD, DOCX)
- Additional archetypes (Sanderson, YA Specialist, Genre Masters)

### v2.0 Features
- Custom archetype creator
- Version branching and comparison
- Collaboration (multi-user projects)
- Community features (share outlines, archetypes)

### v3.0 Features
- Mobile app (React Native or Flutter)
- Advanced analytics (readability scores, genre conformance)
- Integration with publishing platforms (Kindle Direct, Wattpad)
- Multi-language support (Spanish, French, German)

---

**End of Technical Document**