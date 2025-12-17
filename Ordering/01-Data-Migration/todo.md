# Data Migration to External Drive

**Priority:** P0 - BLOCKING EVERYTHING
**Status:** Done

## Overview
Move and symlink internal files from main Mac to external drive using proper symlink approach to keep everything transparent to apps.

## Prerequisites
- [x] External drive connected and formatted (APFS recommended)
- [x] Verify drive mount point and available space
- [ ] ~Create backup/snapshot before starting~
- [ ] ~Time Machine or other backup active and verified~

## Phase 1: Prep & Test (30 mins)
- [x] Verify drive format and mount point
- [x] Document current disk usage: `df -h`
- [x] Identify top space hogs: `du -sh ~/* | sort -h`
- [x] Select one non-critical large folder for testing
- [x] Test migration process with selected folder
- [x] Verify apps can still access via symlink
- [x] Document the working process

## Phase 2: Identify & Prioritize Folders to Move
- [x] Development projects folders
- [x] Large media/assets (videos, images, design files)
- [ ] ~Docker volumes/containers~
- [ ] ~Database files~
- [x] Node_modules / build caches
- [x] Document total size to move vs available space

## Phase 3: Big Moves (1-2 hours)
- [x] Move major space hogs to external drive
- [x] Create symlinks for each moved folder
- [x] Test each symlink after creation
- [x] Document what's been moved and where

## Phase 4: Validation (30 mins)
- [ ] Open key apps and verify they work
- [ ] Run a dev project to confirm tooling works
- [ ] Test file access across moved directories
- [ ] Update any hardcoded paths in configs
- [ ] Document final structure and locations

## Commands Reference
```bash
# Example migration commands (adjust paths as needed)
# 1. Move folder to external
mv ~/source/folder /Volumes/ExternalDrive/folder

# 2. Create symlink
ln -s /Volumes/ExternalDrive/folder ~/source/folder

# 3. Verify symlink
ls -la ~/source/
```

## Unresolved Questions
- Which specific directories need migration?
- What's total size to move?
- External drive name/mount point?
