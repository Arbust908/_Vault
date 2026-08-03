# Senior Software Engineer Practice

These exercises are based on [`initial.md`](./initial.md). The code cases intentionally contain bugs or weak design choices. Run or read the `broken` version first, explain what is wrong, and make changes only in that exercise's `solution` directory.

## Suggested workflow

1. Read the exercise README and restate the expected behavior.
2. Inspect the broken code without fixing it immediately.
3. Run the app or execute the TypeScript file where a command is provided.
4. Keep a short diagnosis in `solution/notes.md`.
5. Ask for one fix at a time, or implement the fix yourself.
6. Add tests and explain the tradeoffs after the happy path works.

## Exercises

| Path | Format | Focus |
| --- | --- | --- |
| [`exercises/01-react-calculator`](./exercises/01-react-calculator) | Runnable broken React app | State modeling, effects, immutability, input edge cases |
| [`exercises/02-searchable-catalogue`](./exercises/02-searchable-catalogue) | Runnable broken React app | Async state, debouncing, cancellation, stale responses |
| [`exercises/03-queue-processor`](./exercises/03-queue-processor) | Broken TypeScript service | Sequential commands, result ordering, validation, failures |
| [`exercises/04-watchlist`](./exercises/04-watchlist) | Broken full-stack sketch | Domain modeling, API boundaries, validation, persistence |
| [`algos`](./algos) | Two-week Disney interview curriculum | Core patterns, daily practice, mock interviews, study log |
| [`algorithms`](./algorithms) | Ten implementation prompts | Collections, transformations, queues, caching, concurrency |
| [`concepts`](./concepts) | Question-only drills | React, TypeScript modeling, API design, senior discussion |

## Timing

- Code mocks: 60 minutes each.
- Algorithm prompts: 15-25 minutes each.
- Concept files: answer each question aloud in 60-90 seconds, then write down the gotcha or tradeoff.

The `broken` directories are deliberately imperfect. They are not reference implementations and should not be copied into production code.

---

Created the practice workspace under mouseTraining/.
- 4 implementation mocks with intentionally broken code and separate solution/ workspaces:
- React calculator
- Searchable catalogue
- Sequential queue processor
- Full-stack watchlist
- 10 TypeScript algorithm starters.
- 7 concept drill files containing 8–10 questions each.
- Added navigation from initial.md to the new workspace.
- Added notes templates for documenting fixes and tradeoffs.
Verified 56 files, question counts, and ASCII consistency. Dependencies were not installed, so the apps were not built or run.
