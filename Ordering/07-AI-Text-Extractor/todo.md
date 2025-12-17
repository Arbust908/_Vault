# AI Text Extractor (OCR → Markdown)

**Priority:** P6 - After template ready
**Status:** Not Started
**Dependencies:** AI-Powered Nuxt Template completed

## Overview
Build AI-powered text extraction tool that converts OCR output to clean markdown.

## Phase 1: Requirements & Planning
- [ ] Review existing work if any - what's current status?
- [ ] Define input formats (image, PDF, scanned docs)
- [ ] Define output format (markdown structure)
- [ ] List OCR services to support:
  - [ ] Tesseract
  - [ ] Cloud OCR APIs (Google Vision, AWS Textract, Azure)
  - [ ] Built-in browser OCR
- [ ] Define AI enhancement features:
  - [ ] Formatting cleanup
  - [ ] Structure detection (headers, lists, tables)
  - [ ] Error correction
  - [ ] Language detection

## Phase 2: Project Setup from Template
- [ ] Clone AI-Powered Nuxt Template
- [ ] Rename and configure for Text Extractor
- [ ] Update project metadata
- [ ] Install project-specific dependencies

## Phase 3: File Upload & Processing
- [ ] Create file upload interface
- [ ] Support drag-and-drop
- [ ] Add file type validation (images, PDFs)
- [ ] Implement client-side preview
- [ ] Set up file size limits
- [ ] Create upload progress indicator

## Phase 4: OCR Integration
Choose primary OCR approach:
- [ ] Integrate Tesseract.js for client-side OCR
- [ ] OR set up server-side OCR service
- [ ] OR integrate cloud OCR API
- [ ] Handle multi-page documents
- [ ] Extract text with position data
- [ ] Detect text orientation
- [ ] Handle multiple languages

## Phase 5: AI Enhancement Pipeline
- [ ] Create OpenRouter integration for text cleanup
- [ ] Design prompts for:
  - [ ] Structure detection (headers, paragraphs)
  - [ ] Table extraction
  - [ ] List formatting
  - [ ] Code block detection
- [ ] Implement streaming for real-time preview
- [ ] Add confidence scoring
- [ ] Handle special characters and formatting

## Phase 6: Markdown Conversion
- [ ] Create markdown generation engine
- [ ] Implement structure rules:
  - [ ] Headers (# ## ###)
  - [ ] Bold and italic
  - [ ] Lists (ordered/unordered)
  - [ ] Links
  - [ ] Code blocks
  - [ ] Tables
  - [ ] Blockquotes
- [ ] Add front matter options
- [ ] Support custom templates

## Phase 7: User Interface
- [ ] Build upload page
- [ ] Create preview/editor split view
- [ ] Add real-time markdown preview
- [ ] Implement editing tools
- [ ] Add copy/download options
- [ ] Create batch processing interface
- [ ] Add settings/preferences panel

## Phase 8: Storage & History
- [ ] Use PocketBase for:
  - [ ] Processed documents storage
  - [ ] User history
  - [ ] Templates and presets
- [ ] Create collections schema
- [ ] Implement document retrieval
- [ ] Add search functionality
- [ ] Export history

## Phase 9: Advanced Features
- [ ] Batch processing
- [ ] Custom OCR training
- [ ] Template system for common document types
- [ ] API for integration with other tools
- [ ] Webhook support for automation
- [ ] CLI tool for scripting

## Phase 10: Testing & Optimization
- [ ] Test with various document types
- [ ] Test different image qualities
- [ ] Measure accuracy rates
- [ ] Optimize processing speed
- [ ] Test edge cases
- [ ] Gather user feedback

## Unresolved Questions
- Current status of this project?
- Is this the OCR-to-markdown tool previously worked on?
- Primary use case (books, notes, invoices, forms)?
- Client-side or server-side processing preferred?
