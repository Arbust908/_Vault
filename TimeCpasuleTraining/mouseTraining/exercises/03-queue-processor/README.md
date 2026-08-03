# Mock 3: Sequential Queue Processor

## Interview prompt

Implement a service that receives commands against an in-memory watchlist-like store and returns one result for every command. Commands must be processed in input order. Start with the implementation in `broken/queue.ts`, then improve it without changing the public command types unless you can justify the change.

## Required behavior

- Support `ADD`, `UPDATE`, `DELETE`, and `GET`.
- Process every command sequentially.
- Return results in the same order as the commands.
- Validate identifiers and values.
- Decide and document duplicate/add-missing/update-missing behavior.
- Keep a failed command from corrupting later state.
- Make async persistence easy to add later.

## Extensions

- Add retry behavior for transient persistence errors.
- Add a bounded concurrency mode for independent reads.
- Add idempotency keys for retried writes.
- Return discriminated result types instead of throwing for expected domain failures.

## Start

```sh
npx tsx broken/queue.ts
```

Make your changes in `solution/`.
