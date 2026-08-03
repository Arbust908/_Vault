# Mock 2: Searchable Catalogue

## Interview prompt

Build a searchable catalogue of Disney titles. The user should be able to search, see loading/error/empty states, sort results, and select an item to view details. The API in `broken/src/api.ts` is a local stand-in for a real asynchronous service.

The existing implementation appears to work for a single search, but it behaves incorrectly when users type quickly or repeat searches. Diagnose it before changing it.

## Required behavior

- Debounce search input by roughly 250 milliseconds.
- Cancel or ignore obsolete requests.
- Never display results for an older query after a newer query completes.
- Show loading, success, empty, and error states.
- Sort results without mutating the source response.
- Keep the selected detail panel consistent with the current result set.
- Use labels, keyboard-friendly controls, and stable list keys.

## Discussion prompts

- Would you put debouncing in the input component or a hook?
- When is `useEffect` appropriate here, and what external system is it synchronizing with?
- What should happen if the component unmounts during a request?
- Would cancellation alone be sufficient if the server cannot honor abort signals?

## Start

```sh
cd broken
npm install
npm run dev
```

Make your changes in `solution/`.
