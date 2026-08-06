Assessment
I’m grading technical understanding rather than transcription issues such as “board controller” instead of AbortController.
1. Minimum UI states for asynchronous search
Score: 3/5
Loading, data, and error are important, but “data” is not quite a UI state by itself. A robust minimum usually distinguishes:
- Idle: no search has started, often because the query is empty.
- Loading: the first request is pending.
- Success with results.
- Success with no results: different from an error.
- Error.
You may also distinguish initial loading from refreshing, because existing results can remain visible while a new request runs.
2. Debouncing without leaving timers behind
Score: 5/5
Correct. The effect depends on the query, creates a timer, and returns a cleanup function that calls clearTimeout.
The important detail is that cleanup runs both:
- Before the effect runs again after the query changes.
- When the component unmounts.
useEffect(() => {
  const timer = setTimeout(() => {
    search(query)
  }, 300)

  return () => clearTimeout(timer)
}, [query])
Debouncing only delays starting a request. It does not protect against an older request that has already started, so cancellation or stale-response protection is still needed.
3. Cancellation and stale-response protection
Score: 5/5
You correctly identified their different purposes:
- Cancellation stops work that is no longer useful, potentially saving bandwidth and processing.
- Stale-response protection prevents an old response from updating the UI.
Both are useful because cancellation is not always sufficient. A request might finish before cancellation is processed, a dependency might ignore the abort signal, or some asynchronous work may happen after the network request.
Stale-response protection is therefore the final correctness guarantee.
4. AbortController and user-visible errors
Score: 4/5
Your behavioral explanation is correct. The missing piece is the precise mechanism:
const controller = new AbortController()

fetch(url, { signal: controller.signal })

controller.abort()
Aborting normally rejects fetch with an abort-related error, commonly AbortError. That outcome should generally be ignored because it was intentional, not presented as a failure:
catch (error) {
  if (error instanceof DOMException && error.name === 'AbortError')
    return

  setError(error)
}
Unexpected network, server, parsing, or application failures may require visible feedback.
5. The “star” then “Star Wars” race condition
Score: 4/5
You recognized the stale-response problem, but the exact race is about response order, not merely the first result appearing while the user is typing:
1. The request for “star” starts.
2. The request for “Star Wars” starts later.
3. “Star Wars” returns first and displays correct results.
4. “star” returns afterward and overwrites them.
The older request finishing last is the dangerous case. Debouncing reduces how often this happens, while cancellation and stale-response protection address it directly.
6. Retry ownership and non-retryable failures
Score: 3/5
Putting reusable retry behavior in a data-fetching hook or request layer is sensible. A component can own retry behavior when it is specific to that UI, but generic retry policy usually belongs below the component.
You correctly said aborted requests should not retry. Other failures that normally should not retry automatically include:
- Most 4xx responses caused by invalid input.
- Authentication and authorization failures such as 401 and 403.
- Validation failures.
- Usually 404, unless the resource is expected to appear shortly.
- Application-level business-rule rejection.
Good automatic-retry candidates include:
- Temporary network failures.
- 408 Request Timeout.
- 429 Too Many Requests, respecting Retry-After.
- Some 5xx server failures.
Retries should generally be limited and use exponential backoff, often with jitter. “Server error” alone does not mean unlimited or immediate retries.
7. Pagination with correct per-page states
Score: 4/5
Assuming the question was about pagination, your per-page map is a strong answer. Each page or query-page combination can be used as a cache key:
{
  "star:1": { data, status, error },
  "star:2": { data, status, error }
}
This supports caching, background loading, out-of-order responses, and immediate back-navigation.
Two refinements are important:
- The key must include every parameter affecting the result, not only the page number.
- The screen must render the entry for the currently selected key, so a response for another page can update the cache without replacing the visible page.
Retries should not necessarily occur only after errors; successful cached data may also be revalidated according to its freshness policy.
8. Safe optimistic updates and rollback
Score: 3/5
Your basic explanation is correct: capture the prior state, update locally, send the request, and restore the prior state if the request fails.
“Safe” adds several requirements:
- The change must be reversible.
- The expected server behavior should be predictable.
- The UI must retain enough information to undo only that change.
- Rollback must not overwrite newer user actions.
- Temporary client IDs may need reconciliation with server-generated IDs.
- The user should be told when the server rejects the operation.
A simple rollback looks like:
const previousItems = items

setItems(applyOptimisticChange(items))

try {
  await saveChange()
}
catch (error) {
  setItems(previousItems)
}
However, restoring the entire old snapshot can erase later successful changes. In concurrent interfaces, rolling back the specific optimistic patch, or invalidating and refetching authoritative server data, is safer.
Overall
31/40
You have a solid practical understanding of asynchronous UI behavior. Your strongest area is recognizing that cancellation, debouncing, and stale-response protection solve different problems. The main knowledge gaps are precise state modeling, retry classification, and handling concurrency during optimistic updates.