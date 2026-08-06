# Redux

Answer with the Redux data flow, the reason for the pattern, and one tradeoff.

1. What problems is Redux designed to solve, and when would local React state be simpler?
2. How do the store, actions, reducers, and dispatch work together in Redux's one-way data flow?
3. Why must a reducer be predictable and free of side effects?
4. Why does immutable state matter in Redux, and how does Redux Toolkit let reducer code appear to mutate state safely?
5. What should belong in a Redux slice, and how do `createSlice` action creators and reducers relate to each other?
6. What is a selector, why should components use selectors instead of knowing the store shape, and when is a memoized selector useful?
7. How would you model a collection of entities in Redux, and what are the tradeoffs between normalized and nested state?
8. Where should asynchronous request logic live in a Redux application, and how would you represent loading, success, failure, cancellation, and stale responses?
9. What can Redux middleware do that reducers cannot, and when might you use listener middleware, a thunk, or RTK Query?
10. How would you test a reducer, an async Redux workflow, and a React component connected to the store at different levels?
