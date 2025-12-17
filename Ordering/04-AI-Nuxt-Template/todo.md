# AI-Powered Nuxt Template

**Priority:** P3 - Foundation for all AI projects
**Status:** In Progress
**Dependencies:** Data migration done, stable network

## Overview
Build foundational Nuxt template that serves as the base for all AI-powered projects (Text Extractor, Novel Writer, Knowledge Builder).

## Phase 1: Core Requirements Definition
- [ ] Identify core features needed across all AI projects
- [ ] Define shared AI agent architecture
- [ ] Document common UI patterns needed
- [ ] List common dependencies

## Phase 2: Project Setup
- [ ] Create new Nuxt 3 project with TypeScript
- [ ] Configure Vite build settings
- [ ] Set up Biome for linting
- [ ] Configure TypeScript strict mode
- [ ] Set up project structure

## Phase 3: OpenRouter Integration
- [ ] Install and configure OpenRouter SDK
- [ ] Create reusable API client
- [ ] Implement standard OpenRouter integration setup
- [ ] Add streaming support
- [ ] Create composables for AI interactions
- [ ] Add error handling and retries
- [ ] Implement rate limiting if needed

## Phase 4: PocketBase Integration
- [ ] Install PocketBase SDK
- [ ] Set up PocketBase auth patterns
- [ ] Create auth composables/utilities
- [ ] Implement standard data patterns
- [ ] Set up realtime subscriptions
- [ ] Add file upload helpers
- [ ] Create base schema examples

## Phase 5: Shared AI Components
- [ ] Chat interface component
- [ ] Message history component
- [ ] Token counter display
- [ ] Model selector component
- [ ] Streaming response handler
- [ ] Error boundaries for AI failures
- [ ] Loading states

## Phase 6: UI Foundation
- [ ] Set up Tailwind v4 configuration
- [ ] Create design system tokens
- [ ] Build common layout components
- [ ] Implement responsive patterns
- [ ] Add dark mode support
- [ ] Create reusable form components

## Phase 7: State Management
- [ ] Choose state management approach (Pinia/composables)
- [ ] Set up stores/composables for:
  - [ ] AI conversation state
  - [ ] User preferences
  - [ ] App settings
- [ ] Implement persistence layer

## Phase 8: Developer Experience
- [ ] Add comprehensive README
- [ ] Create example pages/routes
- [ ] Document composables usage
- [ ] Add inline code comments
- [ ] Set up environment variables template
- [ ] Create deployment guide

## Phase 9: Testing & Validation
- [ ] Test OpenRouter integration
- [ ] Test PocketBase auth flow
- [ ] Verify all components render
- [ ] Test responsive behavior
- [ ] Validate TypeScript types
- [ ] Run build process

## Unresolved Questions
- Minimum viable shared foundation scope?
- Specific OpenRouter models to support?
- PocketBase hosting approach (local/cloud)?
- UI framework preferences beyond Tailwind?
