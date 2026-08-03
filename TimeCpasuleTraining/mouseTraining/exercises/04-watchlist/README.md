# Mock 4: Small Full-Stack Watchlist

## Interview prompt

Build a tiny watchlist feature with a React client, a Node HTTP API, an in-memory repository, runtime validation, and one unit test for domain logic. The fixture in `broken/` is intentionally compact and flawed so the interview discussion can focus on boundaries rather than styling.

## Required behavior

- Search titles.
- Add a title to a watchlist.
- Remove a title from a watchlist.
- Reject malformed identifiers and duplicate entries.
- Return consistent JSON error shapes and meaningful HTTP statuses.
- Keep transport concerns separate from domain decisions.
- Make the in-memory repository replaceable by persistence later.

## Senior discussion

- Which types are API DTOs and which are domain entities?
- What must be validated at runtime even if TypeScript types are present?
- How would authentication change the route boundary?
- Which operations need transactionality or a database constraint?
- What would you log and measure in production?

## Start

Read `broken/server.ts` and `broken/client.tsx`, then create the corrected feature in `solution/`. The server uses only Node built-ins; run it with `npx tsx broken/server.ts`.
