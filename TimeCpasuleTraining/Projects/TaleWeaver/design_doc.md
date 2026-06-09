# TaleWeaver - Design Document
**Version**: 1.0  
**Last Updated**: November 21, 2025  
**Status**: MVP Scope

---

## 1. Project Overview

### 1.1 Vision Statement
TaleWeaver is an AI-enhanced novel writing assistant that guides authors through a structured, linear workflow from concept to completed manuscript. The platform enables hybrid human-AI collaboration while offering fully autonomous generation via "Dazzle Mode."

### 1.2 Target Users
- **Primary**: Aspiring novelists who struggle with structure and consistency
- **Secondary**: Experienced writers seeking AI assistance for ideation or drafting
- **Tertiary**: Content creators exploring automated fiction generation

### 1.3 Core Value Propositions
1. **Structured Guidance**: Clear, sequential phases eliminate writer's block
2. **Flexible Automation**: Choose manual control or AI delegation per step
3. **Consistency Engine**: Automatic tracking prevents plot holes and contradictions
4. **Privacy Options**: Local Ollama support for sensitive/private projects

---

## 2. Product Requirements

### 2.1 Functional Requirements

#### FR-1: User Management
- User registration and authentication
- Project ownership and management
- Usage tracking (tokens, costs)

#### FR-2: Phase-Based Workflow
Users must complete 5 sequential phases:
1. **Foundation**: Genre, themes, setting, audience, style guide
2. **Characters**: Protagonist(s), antagonist(s), supporting cast, relationships
3. **Structure**: Title, premise, synopsis, act structure, chapter outline
4. **Drafting**: Chapter-by-chapter manuscript generation
5. **Refinement**: Developmental editing, style consistency, final polish

**Business Rule**: Phases lock upon completion and become immutable context for subsequent phases.

#### FR-3: Hybrid Input System
Every step in every phase must offer:
- **Manual Input**: User writes/fills content directly
- **AI Delegation**: User selects AI archetype to generate content

**Business Rule**: Users cannot proceed to next phase until all steps in current phase are completed (either manually or via AI).

#### FR-4: AI Archetype System
Minimum 3 archetypes for MVP:
- **The Architect**: Plot-focused, detailed outlining, cause-effect chains
- **The Pantser**: Character-driven, emotional depth, discovery writing style
- **The Literary Editor**: Prose-focused, stylistic polish, literary techniques

Each archetype has:
- Unique system prompt defining personality/approach
- Specific decision-making preferences
- Distinct output tone/voice

**Future Enhancement**: 6+ archetypes including "Sanderson-like," "YA Specialist," "Genre Masters"

#### FR-5: Dazzle Mode
- User selects ONE archetype at project creation
- System automatically generates all content through all phases
- No user intervention required
- Estimated completion time: 30-60 minutes for full outline + draft
- User receives notification when complete

**Business Rule**: Dazzle Mode cannot be cancelled once started. User can only review final output.

#### FR-6: Consistency Engine
System must track and maintain:
- **Character Entities**: Names, physical traits, personality, knowledge state, relationships
- **Location Entities**: Geography, description, access rules
- **Object Entities**: Important items, artifacts, weapons
- **Event Entities**: Key plot points with participants and outcomes
- **Timeline**: Chronological order of events

**Implementation**: Use RAG (Retrieval-Augmented Generation) to inject relevant context into AI generation prompts.

#### FR-7: Context Preservation Strategy
To maintain narrative coherence across long manuscripts:

**Chapter Outline Document**:
- Generated automatically after Structure phase locks
- Contains 100-word summary per planned chapter
- Injected into context for ALL chapter drafts
- Enables foreshadowing and plot thread tracking

**Relevant Events System**:
- Each chapter generates 3-5 "event cards" (50-100 words each)
- Format: `[Characters] | [What Happened] | [Significance]`
- Tagged by chapter number, characters involved, themes
- RAG retrieves relevant events when drafting subsequent chapters

**Entity State Tracking**:
- Character knowledge/emotional state at each chapter
- Location status changes
- Object possession/location

#### FR-8: Style Guide
User-defined preferences (or AI-suggested):
- **Point of View**: 1st person, 3rd limited, 3rd omniscient
- **Tense**: Past, present
- **Tone**: Dark, humorous, dramatic, lighthearted
- **Vocabulary Level**: Simple, moderate, complex
- **Content Rating**: PG, PG-13, R (violence/sexuality levels)
- **Genre Conventions**: Specific tropes to include/avoid
- **Target Chapter Length**: Default 3,000 words (user adjustable)

#### FR-9: Progress Metrics
Display per project:
- Current phase and completion percentage
- Total word count (by chapter, by phase)
- Chapters completed / total planned
- Tokens used (input/output separately)
- Estimated cost by provider
- Generation time per phase
- Writing session history (if manual input)

#### FR-10: Export System
**MVP Formats**:
- **Markdown (.md)**: Preserves formatting, easy to edit externally
- **PDF**: Publication-ready format with customizable styling

**Export Includes**:
- Full manuscript text
- Metadata (title, author, word count)
- Project statistics (generation data, costs)
- Style guide used
- Optional: Character profiles, outline, foundation documents

**Future Enhancement**: EPUB, DOCX, RTF formats

### 2.2 Non-Functional Requirements

#### NFR-1: Performance
- Chapter generation: <5 minutes per 3,000-word chapter
- Phase transitions: <2 seconds
- UI responsiveness: <200ms for user interactions
- Dazzle Mode full generation: <60 minutes for 80,000-word novel

#### NFR-2: Scalability
- Support 1,000 concurrent users (MVP)
- 10,000+ projects stored
- Handle 100k+ tokens per AI request (long context)

#### NFR-3: Reliability
- 99% uptime for web interface
- Graceful degradation if AI provider is down
- Auto-save user input every 30 seconds
- Automatic retry for failed AI requests (3 attempts)

#### NFR-4: Security
- Encrypted storage for user projects
- API key management for OpenRouter
- Rate limiting to prevent abuse
- Optional local-only mode (Ollama) for privacy

#### NFR-5: Usability
- Onboarding tutorial for new users
- Clear phase progression indicators
- Inline help/tooltips for complex features
- Mobile-responsive design (desktop-first)

---

## 3. User Stories

### Epic 1: Project Creation & Setup

**US-1.1**: As a user, I want to create a new project with a working title so I can begin my novel.

**US-1.2**: As a user, I want to choose between standard mode and Dazzle Mode so I can decide my level of involvement.

**US-1.3**: As a user selecting Dazzle Mode, I want to choose an AI archetype so the system generates a novel matching my preferred style.

### Epic 2: Foundation Phase

**US-2.1**: As a user, I want to select my novel's genre and subgenre so the AI understands the conventions to follow.

**US-2.2**: As a user, I want to define story themes and core message so the narrative has thematic coherence.

**US-2.3**: As a user, I want to describe my setting/world so characters and events feel grounded.

**US-2.4**: As a user, I want to define a style guide (POV, tense, tone) so the manuscript has consistent voice.

**US-2.5**: As a user, I want to delegate any foundation step to an AI archetype if I lack inspiration.

### Epic 3: Character Phase

**US-3.1**: As a user, I want to create detailed protagonist profiles so my main character feels real.

**US-3.2**: As a user, I want to define antagonist motivations so the conflict is compelling.

**US-3.3**: As a user, I want to establish character relationships so interactions are believable.

**US-3.4**: As a user, I want to generate character voice samples so dialogue feels distinct.

**US-3.5**: As a user, I want AI to suggest supporting cast based on my protagonist's needs.

### Epic 4: Structure Phase

**US-4.1**: As a user, I want AI to brainstorm title options so I can choose the most compelling one.

**US-4.2**: As a user, I want to write a one-sentence logline so I can pitch my story succinctly.

**US-4.3**: As a user, I want to expand my logline into a full synopsis so the story arc is clear.

**US-4.4**: As a user, I want to choose an act structure (3-act, hero's journey, etc.) so my plot follows proven patterns.

**US-4.5**: As a user, I want to create a chapter-by-chapter outline so I have a roadmap for drafting.

### Epic 5: Drafting Phase

**US-5.1**: As a user, I want to draft chapters sequentially so the narrative flows logically.

**US-5.2**: As a user, I want AI to reference previous chapters automatically so consistency is maintained.

**US-5.3**: As a user, I want to track word count per chapter so I meet my target lengths.

**US-5.4**: As a user, I want the Consistency Engine to flag errors (wrong names, contradictions) so I can fix them.

**US-5.5**: As a user, I want to delegate chapter drafting to AI while retaining the ability to manually write some chapters.

### Epic 6: Refinement Phase

**US-6.1**: As a user, I want AI to provide developmental edit suggestions (pacing, structure) so I can improve my manuscript.

**US-6.2**: As a user, I want style consistency checks so my prose maintains uniform voice.

**US-6.3**: As a user, I want line editing suggestions so I can polish my prose.

**US-6.4**: As a user, I want to review all changes before finalizing so I retain creative control.

### Epic 7: Export & Completion

**US-7.1**: As a user, I want to export my manuscript as Markdown so I can edit it externally.

**US-7.2**: As a user, I want to export as PDF so I can share it for beta reading.

**US-7.3**: As a user, I want to see total project statistics (word count, tokens used, cost) so I understand resource usage.

**US-7.4**: As a user, I want to mark my project as "Complete" so I can archive it and start a new one.

---

## 4. AI Integration Specifications

### 4.1 Provider Strategy

#### OpenRouter (Cloud, Primary)
- **Models**: Claude Sonnet 4 (primary), GPT-4o (fallback)
- **Use Case**: Default for all users
- **Advantages**: High quality, large context window, fast
- **Cost Tracking**: Per-token pricing, display to user

#### Ollama (Local, Optional)
- **Models**: Llama 3.1, Mistral Large, Qwen 2.5
- **Use Case**: Privacy-conscious users, offline mode
- **Advantages**: No cost, complete privacy, no internet required
- **Trade-offs**: Slower, requires local GPU, lower quality

**Business Rule**: Users choose provider per project. Cannot switch mid-project.

### 4.2 Context Window Management

#### Maximum Context Sizes
- **Claude Sonnet**: 200k tokens (~150k words)
- **GPT-4o**: 128k tokens (~96k words)
- **Llama 3.1**: 128k tokens (~96k words)

#### Context Injection Strategy
For each AI generation request, include:
1. **System Prompt**: Archetype personality + task instruction (~500 tokens)
2. **Project Foundation**: Genre, themes, setting, style guide (~1,000 tokens)
3. **Character Profiles**: All active characters (~2,000 tokens)
4. **Chapter Outline Document**: Full chapter summaries (~3,000 tokens)
5. **Relevant Events**: RAG-retrieved events from previous chapters (~2,000 tokens)
6. **Immediate Context**: Previous 2 chapters in full (if drafting) (~6,000 tokens)
7. **Current Task**: Specific instructions for this step (~500 tokens)

**Total Context Budget**: ~15,000 tokens per request (leaves room for 5,000+ token outputs)

### 4.3 Archetype System Prompts

#### The Architect
```
You are The Architect, a master of plot structure and logical storytelling. You approach novel writing with meticulous planning, focusing on cause-and-effect chains, plot beats, and narrative tension. You excel at:
- Creating detailed outlines with clear turning points
- Establishing and paying off setups (Chekhov's gun principle)
- Balancing multiple plot threads and subplots
- Ensuring each scene advances the plot or character arc
- Writing tight, purposeful prose with minimal digression

When generating content, prioritize plot logic, pacing, and structural integrity. Ask yourself: "Does this scene serve the story?" and "What are the consequences?"
```

#### The Pantser
```
You are The Pantser, a character-driven storyteller who discovers the story through the characters' journeys. You prioritize emotional authenticity and organic development over rigid structure. You excel at:
- Creating deeply flawed, relatable characters
- Writing emotionally resonant scenes
- Discovering plot through character choices
- Natural, flowing dialogue that reveals character
- Allowing the story to evolve based on character needs

When generating content, prioritize character voice, emotional truth, and interpersonal dynamics. Ask yourself: "What would this character really do?" and "How does this moment change them?"
```

#### The Literary Editor
```
You are The Literary Editor, a prose stylist focused on the craft of writing itself. You approach fiction as an art form, emphasizing language, imagery, and thematic depth. You excel at:
- Crafting beautiful, evocative prose
- Using literary devices (metaphor, symbolism, motif)
- Creating vivid sensory details
- Varying sentence rhythm and structure for effect
- Elevating theme through subtext

When generating content, prioritize language quality, stylistic consistency, and artistic expression. Ask yourself: "How can I make this sentence sing?" and "What deeper meaning does this moment carry?"
```

### 4.4 Prompt Templates

#### Chapter Drafting Prompt Structure
```
{ARCHETYPE_SYSTEM_PROMPT}

# Project Context
Genre: {genre}
Themes: {themes}
Setting: {setting}
Style Guide: {style_guide}

# Characters in This Chapter
{character_profiles_filtered}

# Story So Far
{chapter_outline_document}

# Recent Events
{rag_retrieved_events}

# Previous Chapter Summary
{previous_chapter_summary}

# Your Task
Write Chapter {chapter_number}: "{chapter_title}"
Target Length: {target_word_count} words
Chapter Outline: {chapter_outline_from_structure_phase}

Focus on:
- Advancing the plot as outlined
- Maintaining character consistency
- Incorporating foreshadowing for future events
- Matching the established style guide

Begin writing the chapter now.
```

---

## 5. Data Requirements

### 5.1 Core Data Entities

#### Project
- `id` (UUID)
- `user_id` (FK)
- `title` (string)
- `status` (enum: active, complete, archived)
- `current_phase` (enum: foundation, characters, structure, drafting, refinement, complete)
- `is_dazzle_mode` (boolean)
- `selected_archetype` (enum: architect, pantser, literary_editor)
- `ai_provider` (enum: openrouter, ollama)
- `style_guide` (JSON)
- `target_chapter_length` (integer, default 3000)
- `created_at`, `updated_at`

#### Section
Represents each step within a phase.
- `id` (UUID)
- `project_id` (FK)
- `phase` (enum: foundation, characters, structure, drafting, refinement)
- `step_name` (string, e.g., "genre_selection", "protagonist_profile")
- `content` (text, markdown)
- `is_locked` (boolean)
- `filled_by` (enum: user, ai)
- `ai_archetype_used` (enum, nullable)
- `tokens_input` (integer)
- `tokens_output` (integer)
- `generation_time_seconds` (integer)
- `estimated_cost_usd` (decimal)
- `version_number` (integer)
- `created_at`, `locked_at`

#### Entity (Consistency Engine)
- `id` (UUID)
- `project_id` (FK)
- `entity_type` (enum: character, location, object, event)
- `name` (string)
- `attributes` (JSON)
  - For characters: `{physical_description, personality_traits, relationships, knowledge_state}`
  - For locations: `{description, geography, access_rules}`
  - For objects: `{description, owner, significance}`
  - For events: `{participants, what_happened, significance, chapter_number}`
- `first_mentioned_section_id` (FK)
- `embedding` (vector, for RAG)
- `created_at`, `updated_at`

#### Chapter
- `id` (UUID)
- `project_id` (FK)
- `chapter_number` (integer)
- `title` (string)
- `content` (text, markdown)
- `outline_summary` (text, ~100 words)
- `word_count` (integer)
- `is_locked` (boolean)
- `filled_by` (enum: user, ai)
- `ai_archetype_used` (enum, nullable)
- `tokens_input` (integer)
- `tokens_output` (integer)
- `generation_time_seconds` (integer)
- `estimated_cost_usd` (decimal)
- `created_at`, `locked_at`

#### ChapterOutlineDocument
Generated once after Structure phase.
- `id` (UUID)
- `project_id` (FK, unique)
- `full_outline` (text, contains all chapter summaries)
- `created_at`

#### RelevantEvent
Generated per chapter for context preservation.
- `id` (UUID)
- `project_id` (FK)
- `chapter_id` (FK)
- `characters_involved` (string, comma-separated)
- `what_happened` (text, 50-100 words)
- `significance` (text, 50-100 words)
- `tags` (JSON array, e.g., ["romance", "betrayal"])
- `embedding` (vector, for RAG)
- `created_at`

#### Export
- `id` (UUID)
- `project_id` (FK)
- `format` (enum: md, pdf)
- `file_path` (string)
- `word_count` (integer)
- `includes_metadata` (boolean)
- `created_at`

#### UsageMetrics
Aggregate usage per project.
- `id` (UUID)
- `project_id` (FK, unique)
- `total_tokens_input` (integer)
- `total_tokens_output` (integer)
- `total_cost_usd` (decimal)
- `total_generation_time_seconds` (integer)
- `last_updated`

---

## 6. Business Rules

### BR-1: Phase Progression
- Users MUST complete all steps in a phase before unlocking the next phase.
- Completed phases automatically LOCK and become immutable.
- Locked phases serve as context for all subsequent phases.

### BR-2: Step Completion
- Each step can be completed via:
  - Manual input (user types content), OR
  - AI generation (user selects archetype, system generates)
- Empty steps block phase completion.

### BR-3: Dazzle Mode Restrictions
- Dazzle Mode must be selected at project creation.
- Once started, Dazzle Mode runs to completion without interruption.
- User cannot switch to manual mode mid-generation.
- User receives email/notification when complete.

### BR-4: AI Provider Lock-In
- User selects AI provider (OpenRouter or Ollama) at project creation.
- Provider cannot be changed mid-project to ensure consistency.

### BR-5: Version Locking
- Once a section/chapter is locked, it increments `version_number`.
- Locked content cannot be edited (MVP).
- Future feature: Unlock with ripple effect warning.

### BR-6: Context Preservation
- System MUST inject relevant context into all AI generation requests.
- RAG must retrieve at least 3-5 relevant events per chapter draft.
- Chapter Outline Document MUST be included in all drafting requests.

### BR-7: Consistency Enforcement
- System flags inconsistencies (character name changes, contradicting facts).
- User must resolve flags before locking a chapter.
- Auto-detected issues: name mismatches, timeline contradictions, location errors.

### BR-8: Cost Transparency
- Display estimated cost BEFORE each AI generation.
- Track and display cumulative costs per project.
- Warn user if project exceeds predefined budget threshold.

---

## 7. Success Metrics

### 7.1 MVP Success Criteria
- **Completion Rate**: 30%+ of users complete all 5 phases
- **Dazzle Mode Adoption**: 20%+ of projects use Dazzle Mode
- **Average Project Size**: 50,000+ words per completed manuscript
- **Generation Quality**: 80%+ user satisfaction (post-project survey)
- **Consistency Accuracy**: 90%+ of flagged issues are actual errors

### 7.2 KPIs (Post-Launch)
- **Monthly Active Users (MAU)**: 500+ within 6 months
- **Projects Created**: 1,000+ in first year
- **Completed Novels**: 100+ in first year
- **Return User Rate**: 40%+ create a second project
- **Ollama Adoption**: 10%+ of users enable local mode

### 7.3 User Engagement Metrics
- Average session duration: 30+ minutes
- Chapters completed per session: 2-3
- Phase completion time:
  - Foundation: <30 minutes
  - Characters: <1 hour
  - Structure: <1 hour
  - Drafting: 5-10 hours (varies by novel length)
  - Refinement: <2 hours

---

## 8. Out of Scope (Future Versions)

### Version 2.0 Features
- Phase unlocking with ripple effect management
- Custom AI archetype creation
- Import existing manuscripts (full or partial)
- Version branching and comparison
- Collaborative editing (multi-user projects)

### Version 3.0+ Features
- Community features (share outlines, archetypes)
- Inspiration library (save unused AI suggestions)
- Advanced analytics (readability scores, genre conformance)
- Multi-language support
- Mobile app (native iOS/Android)
- Integration with publishing platforms (Kindle Direct, Wattpad)

---

## 9. Glossary

**Archetype**: A predefined AI personality with specific writing preferences and approach.

**Consistency Engine**: System component that tracks entities (characters, locations) and flags contradictions.

**Dazzle Mode**: Fully autonomous generation mode where AI completes all phases without user intervention.

**Entity**: A tracked element in the story (character, location, object, event) used for consistency checking.

**Phase**: One of five major stages in the novel creation workflow (Foundation, Characters, Structure, Drafting, Refinement).

**RAG (Retrieval-Augmented Generation)**: Technique to inject relevant context from previous content into AI prompts.

**Relevant Events**: Short summaries of key plot points used to maintain context across chapters.

**Section**: An individual step within a phase (e.g., "protagonist profile" in Characters phase).

**Style Guide**: User-defined writing preferences (POV, tense, tone, etc.) that guide AI generation.

**Version Locking**: Making content immutable after phase completion to prevent cascading edits.

---

## 10. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-11-21 | Initial | MVP scope defined |

---

**End of Design Document**