# Async Data Fetching

Answer with a concrete request lifecycle and name the edge case you are handling.

1. What are the minimum UI states for an asynchronous search request?
2. How would you debounce user input without leaving timers behind after unmount or query changes?
3. Why can cancellation and stale-response protection both be useful?
4. How does `AbortController` work, and how should an aborted request differ from a user-visible error?
5. What race condition occurs when a user searches for `star` and then `star wars` quickly?
6. Where should retry behavior live, and which failures should not be retried automatically?
7. How would you implement pagination while preserving the correct loading and error state for each page?
8. What makes an optimistic update safe, and how do you roll it back when the server rejects the change?
