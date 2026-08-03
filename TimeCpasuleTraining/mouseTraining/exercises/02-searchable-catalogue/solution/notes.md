# Attempt Notes

## Diagnosis

- Record that the existing timeout is not a functioning debounce because the effect has an empty dependency array and never reruns when query changes.
- Add missing effect cleanup for the debounce timer and in-flight request.
- Recommend extracting search lifecycle logic into useTitleSearch.
- Use AbortController and extend searchTitles to accept an AbortSignal.
- Also ignore stale responses, since cancellation alone may not prevent races when an API cannot honor abort signals.
- Replace inline sort branching with named comparator functions selected by sortOrder, making future sort modes easier to add.
- Sort a copied array rather than mutating React state through titles.sort(...).
- Derive visibleTitles with useMemo; note that this is mainly useful for larger lists and avoiding repeated sorting.
- Replace key={index} with the stable key={title.uuid}.
- I would also separate this into at least three components to have each be more cleanly focused on one job.

## Race condition

- For stainless prevention me we may want to save the last send query with date time send ID. So we can save that as a state and check before showing if it's the last send query. If not we discard that

## Fixes made

## Tests and manual checks
