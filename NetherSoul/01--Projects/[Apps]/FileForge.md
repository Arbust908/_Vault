# File Forge - Application Blueprint

> A cross-platform desktop application for intelligent file organization, bulk renaming, tagging, and AI-powered content extraction.

---

## 1. Project Overview

### 1.1 Problem Statement

Managing large media libraries and file collections requires:
- Consistent naming conventions (especially for Plex/Jellyfin compatibility)
- Batch operations across deeply nested directories
- Metadata and tagging for organization
- Content extraction from images (OCR)
- Intelligent suggestions for ambiguous files

Current solutions are either platform-specific, lack AI integration, or require command-line expertise.

### 1.2 Solution

**File Forge** is a desktop app that provides:
- Visual, intuitive interface for file operations
- Preset naming rules (Plex Movies, Plex TV, custom patterns)
- Cross-platform tagging with portable storage
- OCR extraction with AI-enhanced cleanup
- OpenRouter integration for smart suggestions
- Safe, previewable operations with undo capability

### 1.3 Target Users

- Media library enthusiasts (Plex, Jellyfin, Emby users)
- Photographers organizing image collections
- Researchers extracting text from scanned documents
- Anyone managing large file collections

---

## 2. Technical Architecture

### 2.1 Stack Decision

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Framework** | Tauri 2.0 | Small bundle, native performance, security |
| **Frontend** | Solid.js + TypeScript | Reactive, performant, familiar to you |
| **Styling** | Tailwind CSS + shadcn/solid | Rapid UI development |
| **State** | TanStack Query + Solid signals | Async ops + local state |
| **Backend** | Rust | File ops, OCR, performance-critical paths |
| **Database** | SQLite (via rusqlite) | Tags, history, settings |
| **OCR** | Tesseract (via leptess crate) | Mature, accurate, offline |
| **AI** | OpenRouter API | Model flexibility, cost control |

### 2.2 System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         File Forge App                              │
├─────────────────────────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │                    Frontend (Webview)                          │ │
│  │  ┌──────────────┐ ┌──────────────┐ ┌────────────────────────┐  │ │
│  │  │  File Tree   │ │  Operations  │ │   Preview Panel        │  │ │
│  │  │  Browser     │ │  Sidebar     │ │   (Before/After)       │  │ │
│  │  └──────────────┘ └──────────────┘ └────────────────────────┘  │ │
│  │  ┌──────────────────────────────────────────────────────────┐  │ │
│  │  │              Action Bar / Batch Controls                 │  │ │
│  │  └──────────────────────────────────────────────────────────┘  │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                              │ IPC (invoke)                         │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │                    Rust Backend                                │ │
│  │  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌─────────────┐  │ │
│  │  │FileSystem  │ │  Renamer   │ │    OCR     │ │  Database   │  │ │
│  │  │  Walker    │ │  Engine    │ │  Engine    │ │  (SQLite)   │  │ │
│  │  └────────────┘ └────────────┘ └────────────┘ └─────────────┘  │ │
│  │  ┌────────────────────────────────────────────────────────────┐│ │
│  │  │                   Operation Queue                          ││ │
│  │  │         (atomic transactions, undo stack)                  ││ │
│  │  └────────────────────────────────────────────────────────────┘│ │
│  └────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
                                │
            ┌───────────────────┴───────────────────┐
            ▼                                       ▼
    ┌───────────────┐                     ┌─────────────────┐
    │  File System  │                     │  OpenRouter API │
    │  (local disk) │                     │  (AI services)  │
    └───────────────┘                     └─────────────────┘
```

### 2.3 Data Flow

```
User Action
    │
    ▼
Frontend (Solid.js)
    │ ── validate input
    │ ── optimistic UI update
    ▼
Tauri IPC (invoke)
    │
    ▼
Rust Command Handler
    │ ── queue operation
    │ ── execute with rollback capability
    │ ── emit progress events
    ▼
File System / Database
    │
    ▼
Event Stream back to Frontend
    │
    ▼
UI Update + History Log
```

---

## 3. Feature Specifications

### 3.1 Directory Browser

**Functionality:**
- Native directory picker dialog
- Virtual tree view (lazy-loaded for performance)
- File type icons and size display
- Multi-select with Shift/Ctrl
- Drag selection box
- Filter by extension, size, date
- Search within directory

**Technical Details:**
```rust
// Rust: Lazy directory reading
pub struct DirectoryEntry {
    path: PathBuf,
    name: String,
    entry_type: EntryType,  // File, Directory, Symlink
    size: u64,
    modified: SystemTime,
    extension: Option<String>,
    children_count: Option<usize>,  // For directories
}

pub async fn read_directory(path: &Path, depth: usize) -> Result<Vec<DirectoryEntry>>
```

### 3.2 Naming Rules Engine

**Preset Rules:**

| Rule Set | Pattern | Example |
|----------|---------|---------|
| Plex Movies | `{title} ({year})` | `The Matrix (1999)` |
| Plex Movies + Quality | `{title} ({year}) - {quality}` | `The Matrix (1999) - 1080p` |
| Plex TV Shows | `{series}/Season {season:02}/{series} - S{season:02}E{episode:02} - {title}` | `Breaking Bad/Season 01/Breaking Bad - S01E01 - Pilot` |
| Date Prefix | `{date:YYYY-MM-DD} - {original}` | `2024-03-15 - document.pdf` |
| Slug | `{slug}` | `my-vacation-photos` |
| Custom | User-defined pattern | Any combination |

**Pattern Variables:**
```typescript
interface PatternVariables {
  // Extracted from filename or AI
  title: string;
  year: string;
  season: string;
  episode: string;
  quality: string;  // 720p, 1080p, 4K, etc.
  
  // From file metadata
  date: Date;
  size: number;
  extension: string;
  original: string;  // Original filename without extension
  
  // Generated
  slug: string;      // URL-safe version
  index: number;     // Position in batch
  uuid: string;      // Unique identifier
}
```

**Extraction Logic:**
```rust
// Rust: Pattern matching for media files
pub fn extract_media_info(filename: &str) -> MediaInfo {
    // Patterns to try (in order):
    // 1. "Movie.Name.2020.1080p.BluRay.x264.mkv"
    // 2. "Movie Name (2020) [1080p].mkv"
    // 3. "S01E05 - Episode Title.mkv"
    // 4. "Series.Name.S01E05.Episode.Title.mkv"
    // Falls back to AI if patterns fail
}
```

### 3.3 Bulk Rename Operations

**Workflow:**
1. User selects files/directories
2. Chooses naming rule or creates custom pattern
3. Preview shows before → after for all files
4. User can edit individual results
5. Execute with progress indicator
6. All operations logged for undo

**Conflict Resolution:**
```typescript
type ConflictStrategy = 
  | 'skip'           // Leave file unchanged
  | 'increment'      // Add (1), (2), etc.
  | 'timestamp'      // Add timestamp suffix
  | 'ask'            // Prompt for each conflict
  | 'overwrite';     // Replace existing (dangerous)
```

**Safety Features:**
- Dry-run preview (default)
- Atomic batch operations
- Full undo history (stored in SQLite)
- Backup option before destructive operations

### 3.4 Tagging System

**Storage Strategy:** SQLite + Optional Sidecar

```sql
-- Core schema
CREATE TABLE files (
    id INTEGER PRIMARY KEY,
    path TEXT UNIQUE NOT NULL,
    hash TEXT,  -- For tracking moves/renames
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tags (
    id INTEGER PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    color TEXT,  -- Hex color for UI
    parent_id INTEGER REFERENCES tags(id)  -- Hierarchical tags
);

CREATE TABLE file_tags (
    file_id INTEGER REFERENCES files(id) ON DELETE CASCADE,
    tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (file_id, tag_id)
);

-- For undo/history
CREATE TABLE operations (
    id INTEGER PRIMARY KEY,
    type TEXT NOT NULL,  -- 'rename', 'tag', 'extract'
    data JSON NOT NULL,  -- Operation details
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    undone BOOLEAN DEFAULT FALSE
);
```

**Tagging Features:**
- Create/edit/delete tags
- Tag hierarchy (folders/sub-tags)
- Color coding
- Bulk tag application
- Tag-based search and filtering
- Export tags as sidecar files (optional)

### 3.5 OCR Text Extraction

**Supported Formats:**
- Images: PNG, JPG, JPEG, TIFF, BMP, WebP
- Documents: PDF (rasterized pages)

**Workflow:**
1. Select image(s) or directory
2. Choose extraction options:
   - Language(s) for OCR
   - AI cleanup (fix OCR errors, format as Markdown)
   - Output location (same directory or specified)
3. Preview extracted text
4. Generate `.md` files

**Output Format:**
```markdown
<!-- Auto-generated by File Forge -->
<!-- Source: vacation-photo-001.jpg -->
<!-- Extracted: 2024-03-15T10:30:00Z -->

# Extracted Text

[OCR content here, cleaned up by AI if enabled]
```

**AI Enhancement:**
```typescript
interface OCREnhancementPrompt {
  systemPrompt: `You are an OCR cleanup assistant. 
    Fix obvious OCR errors, add proper formatting, 
    convert to clean Markdown. Preserve original meaning exactly.`;
  userPrompt: (rawText: string) => `Clean up this OCR text:\n\n${rawText}`;
}
```

### 3.6 OpenRouter AI Integration

**Use Cases:**
1. **Filename Inference:** Guess movie/show title from messy filename
2. **OCR Cleanup:** Fix errors, format extracted text
3. **Tag Suggestions:** Analyze file/content and suggest tags
4. **Pattern Assistance:** Help user build custom rename patterns

**Configuration:**
```typescript
interface OpenRouterConfig {
  apiKey: string;
  defaultModel: string;  // e.g., 'anthropic/claude-3-haiku'
  models: {
    inference: string;   // For quick filename guesses
    cleanup: string;     // For OCR enhancement
    complex: string;     // For pattern building
  };
  maxTokens: number;
  temperature: number;
}
```

**Cost Control:**
- Token usage tracking
- Monthly/daily limits
- Confirmation for expensive operations
- Cache recent AI responses

### 3.7 Recursive Operations

**Options:**
```typescript
interface RecursiveOptions {
  maxDepth: number;        // -1 for unlimited
  includeHidden: boolean;  // .files and .folders
  followSymlinks: boolean;
  fileFilter: {
    extensions: string[];  // Empty = all
    minSize: number;
    maxSize: number;
    modifiedAfter: Date;
    modifiedBefore: Date;
    namePattern: RegExp;
  };
  directoryFilter: {
    exclude: string[];     // e.g., ['node_modules', '.git']
    include: string[];     // If set, only these
  };
}
```

**Progress Reporting:**
```typescript
interface ProgressEvent {
  phase: 'scanning' | 'processing' | 'finalizing';
  current: number;
  total: number;
  currentFile: string;
  errors: ErrorEntry[];
}
```

---

## 4. User Interface Design

### 4.1 Layout

```
┌─────────────────────────────────────────────────────────────────────────┐
│  ≡  File Forge                                    [─] [□] [×]           │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────┬─────────────────────────────────────────────────────┤
│ │                 │  📁 /Users/fran/Media/Movies                    🔍  │
│ │   OPERATIONS    ├─────────────────────────────────────────────────────┤
│ │                 │ ┌─────────────────────────────────────────────────┐ │
│ │  📁 Browse      │ │  □ ▸ 📁 Action                                  │ │
│ │  ✏️  Rename      │ │  □   ├── movie.2019.1080p.mkv                  │ │
│ │  🏷️  Tags        │ │  □   └── movie.2019.1080p.srt                  │ │
│ │  📝 Extract     │ │  ☑ ▸ 📁 Comedy                                  │ │
│ │  🤖 AI Assist   │ │  ☑   ├── funny.movie.2020.mkv    →  The Fun... │ │
│ │                 │ │  ☑   └── another.comedy.mkv      →  Another...  │ │
│ │  ───────────    │ │  □ ▸ 📁 Drama                                   │ │
│ │                 │ │                                                  │ │
│ │  TAGS           │ │                                                  │ │
│ │  🔴 To Process  │ │                                                  │ │
│ │  🟢 Complete    │ │                                                  │ │
│ │  🔵 Review      │ │                                                  │ │
│ │                 │ └─────────────────────────────────────────────────┘ │
│ │                 ├─────────────────────────────────────────────────────┤
│ │  ───────────    │           PREVIEW / DETAILS                         │
│ │                 │  ┌────────────────────┬────────────────────┐        │
│ │  ⚙️  Settings    │  │      BEFORE        │       AFTER        │        │
│ │  📜 History     │  │                    │                    │        │
│ │                 │  │ funny.movie.2020   │ The Funny Movie    │        │
│ │                 │  │ .1080p.bluray.mkv  │ (2020).mkv         │        │
│ │                 │  │                    │                    │        │
│ │                 │  └────────────────────┴────────────────────┘        │
│ └─────────────────┴─────────────────────────────────────────────────────┤
├─────────────────────────────────────────────────────────────────────────┤
│  ☑ 23 files selected    [Apply Tags ▾]  [Rename Selected]  [Extract]   │
└─────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Key Screens

**1. Main Browser View** (shown above)
- Left sidebar: Operations + Tags
- Center: File tree with inline rename preview
- Bottom: Action bar for batch operations
- Right/Bottom panel: Preview details

**2. Rename Configuration Modal**
```
┌─────────────────────────────────────────────────────────────┐
│  Rename Configuration                                   ×   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Preset: [Plex Movies              ▾]                       │
│                                                             │
│  Pattern: {title} ({year})                                  │
│           ├── {title}  : Extracted movie title              │
│           ├── {year}   : Release year                       │
│           └── {quality}: Video quality (optional)           │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ + Add variable   🤖 AI Suggest Pattern                │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  Options:                                                   │
│  ☑ Apply recursively                                        │
│  ☐ Include directories                                      │
│  ☑ Preserve extension                                       │
│  Conflict: [Add number suffix     ▾]                        │
│                                                             │
│  Preview (5 of 23 files):                                   │
│  ┌─────────────────────────┬─────────────────────────────┐  │
│  │ Before                  │ After                       │  │
│  ├─────────────────────────┼─────────────────────────────┤  │
│  │ inception.2010.1080p    │ Inception (2010)            │  │
│  │ the.matrix.1999.720p    │ The Matrix (1999)           │  │
│  │ unknown.movie.file      │ ⚠️ unknown.movie.file       │  │
│  └─────────────────────────┴─────────────────────────────┘  │
│                                                             │
│            [Cancel]                    [Apply to 23 files]  │
└─────────────────────────────────────────────────────────────┘
```

**3. OCR Extraction View**
```
┌─────────────────────────────────────────────────────────────┐
│  Text Extraction                                        ×   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Source: 12 images selected                                 │
│                                                             │
│  Options:                                                   │
│  Language: [English            ▾] [+ Add language]          │
│  ☑ AI cleanup (fix OCR errors, format as Markdown)          │
│  ☐ Combine all into single file                             │
│  Output: ○ Same directory  ● Custom: [~/extracted/    📁]   │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  Preview: scan-001.png                                      │
│  ┌─────────────────────────┬─────────────────────────────┐  │
│  │ [Image thumbnail]       │ # Meeting Notes             │  │
│  │                         │                             │  │
│  │                         │ Attendees:                  │  │
│  │                         │ - John Smith                │  │
│  │                         │ - Jane Doe                  │  │
│  │                         │                             │  │
│  │                         │ ## Action Items             │  │
│  │                         │ 1. Review proposal...       │  │
│  └─────────────────────────┴─────────────────────────────┘  │
│                                                             │
│  ◀ Previous    [3 / 12]    Next ▶                           │
│                                                             │
│            [Cancel]                [Extract All]            │
└─────────────────────────────────────────────────────────────┘
```

### 4.3 Component Library

Using **shadcn/ui** adapted for Solid.js (or Kobalte as base):

- Dialog / Modal
- Command palette (⌘K)
- Tree view (custom, virtualized)
- Context menu (right-click)
- Toast notifications
- Progress indicators
- Keyboard shortcuts display

---

## 5. Data Models

### 5.1 Core Types

```typescript
// ─────────────────────────────────────────────────────────────
// File System Types
// ─────────────────────────────────────────────────────────────

interface FileEntry {
  id: string;           // UUID for tracking
  path: string;         // Absolute path
  name: string;         // Filename with extension
  extension: string;    // Just the extension
  size: number;         // Bytes
  modified: Date;
  created: Date;
  type: 'file' | 'directory' | 'symlink';
  
  // Computed/cached
  tags: Tag[];
  hasPendingOperation: boolean;
  previewPath?: string; // For rename preview
}

interface DirectoryTree {
  root: FileEntry;
  children: Map<string, DirectoryTree | FileEntry>;
  isExpanded: boolean;
  isLoaded: boolean;
}

// ─────────────────────────────────────────────────────────────
// Tagging Types
// ─────────────────────────────────────────────────────────────

interface Tag {
  id: string;
  name: string;
  color: string;        // Hex color
  parentId?: string;    // For hierarchy
  fileCount: number;    // Cached count
}

interface TagAssignment {
  fileId: string;
  tagId: string;
  assignedAt: Date;
}

// ─────────────────────────────────────────────────────────────
// Rename Types
// ─────────────────────────────────────────────────────────────

interface RenamePattern {
  id: string;
  name: string;
  pattern: string;      // e.g., "{title} ({year})"
  isBuiltIn: boolean;
  category: 'movies' | 'tv' | 'photos' | 'documents' | 'custom';
}

interface RenameOperation {
  fileId: string;
  originalPath: string;
  newPath: string;
  status: 'pending' | 'success' | 'error' | 'skipped';
  error?: string;
  variables: Record<string, string>; // Extracted variables
}

interface RenameBatch {
  id: string;
  patternId: string;
  operations: RenameOperation[];
  createdAt: Date;
  executedAt?: Date;
  status: 'preview' | 'executing' | 'completed' | 'rolled_back';
}

// ─────────────────────────────────────────────────────────────
// OCR Types
// ─────────────────────────────────────────────────────────────

interface OCRJob {
  id: string;
  sourceFiles: string[];
  language: string[];
  aiCleanup: boolean;
  outputDirectory: string;
  combineOutput: boolean;
  status: 'pending' | 'processing' | 'completed' | 'error';
  progress: number;     // 0-100
  results: OCRResult[];
}

interface OCRResult {
  sourceFile: string;
  outputFile: string;
  rawText: string;
  cleanedText?: string;
  confidence: number;   // 0-1
  error?: string;
}

// ─────────────────────────────────────────────────────────────
// AI Types
// ─────────────────────────────────────────────────────────────

interface AIRequest {
  id: string;
  type: 'filename_inference' | 'ocr_cleanup' | 'tag_suggestion' | 'pattern_help';
  input: string;
  model: string;
  status: 'pending' | 'streaming' | 'completed' | 'error';
  output?: string;
  tokens: { input: number; output: number };
  cost: number;
}

// ─────────────────────────────────────────────────────────────
// Settings Types
// ─────────────────────────────────────────────────────────────

interface AppSettings {
  // General
  theme: 'light' | 'dark' | 'system';
  language: string;
  
  // File operations
  confirmBeforeRename: boolean;
  createBackups: boolean;
  backupDirectory: string;
  
  // AI
  openRouterApiKey: string;
  defaultModel: string;
  aiTokenLimit: number;
  
  // OCR
  defaultOCRLanguage: string[];
  ocrOutputLocation: 'same' | 'custom';
  ocrCustomOutputPath: string;
  
  // Advanced
  maxRecursionDepth: number;
  excludedDirectories: string[];
  hiddenFilesVisible: boolean;
}
```

### 5.2 IPC Commands (Tauri)

```rust
// Commands exposed to frontend

#[tauri::command]
async fn read_directory(path: String, options: ReadOptions) -> Result<Vec<FileEntry>, Error>;

#[tauri::command]
async fn preview_rename(files: Vec<String>, pattern: String) -> Result<Vec<RenamePreview>, Error>;

#[tauri::command]
async fn execute_rename(batch: RenameBatch) -> Result<RenameResult, Error>;

#[tauri::command]
async fn undo_operation(operation_id: String) -> Result<(), Error>;

#[tauri::command]
async fn get_tags() -> Result<Vec<Tag>, Error>;

#[tauri::command]
async fn apply_tags(file_ids: Vec<String>, tag_ids: Vec<String>) -> Result<(), Error>;

#[tauri::command]
async fn extract_text(job: OCRJob) -> Result<(), Error>;  // Streams progress

#[tauri::command]
async fn get_settings() -> Result<AppSettings, Error>;

#[tauri::command]
async fn update_settings(settings: AppSettings) -> Result<(), Error>;
```

---

## 6. Execution Plan

### Phase 0: Project Setup (Week 1)

**Goals:** Development environment, project scaffold, CI/CD

**Tasks:**
- [ ] Initialize Tauri 2.0 project with Solid.js template
- [ ] Configure TypeScript (strict mode)
- [ ] Set up Tailwind CSS + shadcn/solid components
- [ ] Configure Rust workspace and dependencies
- [ ] Set up SQLite with migrations (sqlx or diesel)
- [ ] Create GitHub repo with branch protection
- [ ] Set up GitHub Actions for build/test
- [ ] Create development documentation

**Deliverables:**
- Working dev environment on Mac + Windows
- Empty app shell that builds and runs
- README with setup instructions

---

### Phase 1: Core File Operations (Weeks 2-3)

**Goals:** Browse directories, view files, basic operations

**Tasks:**
- [ ] Implement directory picker (native dialog)
- [ ] Build recursive directory walker in Rust
- [ ] Create virtualized tree view component
- [ ] Implement file selection (single, multi, range)
- [ ] Add file filtering (extension, size, date)
- [ ] Build basic file info panel
- [ ] Add context menu foundation
- [ ] Implement keyboard navigation

**Deliverables:**
- Can open any directory and browse contents
- Smooth performance with 10,000+ files
- Basic file details display

---

### Phase 2: Rename Engine (Weeks 4-5)

**Goals:** Pattern-based renaming with preview

**Tasks:**
- [ ] Implement pattern parser (variable extraction)
- [ ] Build media filename analyzer (regex patterns)
- [ ] Create rename preview system
- [ ] Build Plex Movies preset
- [ ] Build Plex TV Shows preset
- [ ] Add custom pattern builder UI
- [ ] Implement conflict detection
- [ ] Build conflict resolution strategies
- [ ] Create atomic rename executor
- [ ] Implement undo functionality
- [ ] Add batch progress indicator

**Deliverables:**
- Working rename with 3+ presets
- Before/after preview
- Safe execution with undo

---

### Phase 3: Tagging System (Week 6)

**Goals:** Full tagging with persistence

**Tasks:**
- [ ] Design and implement SQLite schema
- [ ] Build tag CRUD operations
- [ ] Create tag manager UI (sidebar)
- [ ] Implement tag assignment (single file)
- [ ] Implement bulk tag operations
- [ ] Add tag filtering to file browser
- [ ] Build tag hierarchy support
- [ ] Add tag color customization
- [ ] Create tag export (sidecar files)

**Deliverables:**
- Full tagging functionality
- Tags persist across sessions
- Filter files by tags

---

### Phase 4: OCR Integration (Weeks 7-8)

**Goals:** Extract text from images to Markdown

**Tasks:**
- [ ] Integrate Tesseract (Rust bindings)
- [ ] Build OCR queue system
- [ ] Create extraction options UI
- [ ] Implement preview panel (image + text)
- [ ] Add multi-language support
- [ ] Build Markdown output generator
- [ ] Add progress reporting
- [ ] Handle batch operations
- [ ] Implement error recovery

**Deliverables:**
- OCR extraction for images
- Clean Markdown output
- Multi-file batch processing

---

### Phase 5: AI Integration (Weeks 9-10)

**Goals:** OpenRouter integration for smart features

**Tasks:**
- [ ] Build OpenRouter API client
- [ ] Create API key configuration UI
- [ ] Implement filename inference
- [ ] Add OCR cleanup enhancement
- [ ] Build tag suggestion feature
- [ ] Create pattern help assistant
- [ ] Add token tracking/limits
- [ ] Implement response caching
- [ ] Add cost display/confirmation
- [ ] Handle streaming responses

**Deliverables:**
- AI-powered filename guessing
- OCR cleanup with AI
- Token usage tracking

---

### Phase 6: Polish & Advanced Features (Weeks 11-12)

**Goals:** UX polish, settings, edge cases

**Tasks:**
- [ ] Build settings panel
- [ ] Implement theme switching
- [ ] Add operation history view
- [ ] Create keyboard shortcuts system
- [ ] Build command palette (⌘K)
- [ ] Add drag-and-drop support
- [ ] Implement window state persistence
- [ ] Add update checker
- [ ] Create first-run onboarding
- [ ] Write user documentation
- [ ] Performance optimization pass
- [ ] Accessibility audit

**Deliverables:**
- Polished, complete application
- User documentation
- Ready for beta testing

---

### Phase 7: Testing & Release (Weeks 13-14)

**Goals:** Quality assurance, distribution

**Tasks:**
- [ ] Write integration tests
- [ ] Cross-platform testing (Mac + Windows)
- [ ] Edge case testing (permissions, large files, unicode)
- [ ] Set up code signing (Mac + Windows)
- [ ] Configure auto-updater
- [ ] Create release builds
- [ ] Write release notes
- [ ] Submit to package managers (Homebrew, Winget)

**Deliverables:**
- Signed installers for Mac + Windows
- Public release v1.0

---

## 7. Project Structure

```
file-forge/
├── src/                          # Frontend (Solid.js)
│   ├── components/
│   │   ├── ui/                   # shadcn components
│   │   ├── FileTree/
│   │   │   ├── FileTree.tsx
│   │   │   ├── FileNode.tsx
│   │   │   └── VirtualList.tsx
│   │   ├── Operations/
│   │   │   ├── RenamePanel.tsx
│   │   │   ├── TagPanel.tsx
│   │   │   └── ExtractPanel.tsx
│   │   ├── Preview/
│   │   │   ├── FilePreview.tsx
│   │   │   ├── RenamePreview.tsx
│   │   │   └── OCRPreview.tsx
│   │   └── Layout/
│   │       ├── Sidebar.tsx
│   │       ├── ActionBar.tsx
│   │       └── CommandPalette.tsx
│   ├── lib/
│   │   ├── api.ts                # Tauri IPC wrappers
│   │   ├── openrouter.ts         # AI client
│   │   ├── patterns.ts           # Rename pattern logic
│   │   └── utils.ts
│   ├── stores/
│   │   ├── files.ts              # File tree state
│   │   ├── tags.ts               # Tags state
│   │   ├── operations.ts         # Active operations
│   │   └── settings.ts           # App settings
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css                 # Tailwind imports
│
├── src-tauri/                    # Backend (Rust)
│   ├── src/
│   │   ├── main.rs
│   │   ├── commands/
│   │   │   ├── mod.rs
│   │   │   ├── filesystem.rs
│   │   │   ├── rename.rs
│   │   │   ├── tags.rs
│   │   │   ├── ocr.rs
│   │   │   └── settings.rs
│   │   ├── services/
│   │   │   ├── mod.rs
│   │   │   ├── walker.rs         # Directory traversal
│   │   │   ├── renamer.rs        # Rename engine
│   │   │   ├── tagger.rs         # Tag management
│   │   │   ├── extractor.rs      # OCR engine
│   │   │   └── database.rs       # SQLite operations
│   │   ├── models/
│   │   │   ├── mod.rs
│   │   │   ├── file.rs
│   │   │   ├── tag.rs
│   │   │   ├── operation.rs
│   │   │   └── settings.rs
│   │   └── utils/
│   │       ├── mod.rs
│   │       └── patterns.rs       # Media name parsing
│   ├── migrations/               # SQLite migrations
│   │   ├── 001_init.sql
│   │   └── 002_tags.sql
│   ├── Cargo.toml
│   └── tauri.conf.json
│
├── tests/
│   ├── e2e/                      # Playwright/Webdriver tests
│   └── fixtures/                 # Test files
│
├── docs/
│   ├── user-guide.md
│   └── development.md
│
├── .github/
│   └── workflows/
│       ├── build.yml
│       └── release.yml
│
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## 8. Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| OCR accuracy issues | Medium | Medium | Allow AI cleanup, manual editing |
| Large directory performance | Medium | High | Virtualization, lazy loading, Rust |
| Cross-platform file system differences | High | Medium | Abstract FS operations, extensive testing |
| Tesseract bundling complexity | Medium | Medium | Consider optional download, system install |
| AI API costs | Low | Low | Clear token tracking, user limits |
| Code signing costs | Low | Medium | Apple Developer ($99), Windows ($300+) |
| Unicode filename handling | Medium | High | Extensive testing, use Path not String |

---

## 9. Future Enhancements (v2.0+)

- **Cloud storage integration** (Google Drive, Dropbox, S3)
- **Watch folders** (auto-process new files)
- **Plugin system** for custom rules
- **Duplicate detection** (hash-based)
- **Metadata editing** (EXIF, ID3, etc.)
- **Batch image processing** (resize, convert)
- **Mobile companion app** for remote triggering
- **Collaborative tagging** (shared database)

---

## 10. Success Metrics

**Alpha (Week 8):**
- Core features functional
- Used successfully on 1,000+ file library
- < 3 critical bugs

**Beta (Week 12):**
- All features complete
- Tested on Mac + Windows
- < 5 non-critical bugs
- Performance: < 100ms for 10,000 file tree

**v1.0 Release (Week 14):**
- Zero critical bugs
- User documentation complete
- Signed installers available
- Positive feedback from 5+ beta testers

---

*Document Version: 1.0*  
*Last Updated: 2024*  
*Author: Claude + Fran*