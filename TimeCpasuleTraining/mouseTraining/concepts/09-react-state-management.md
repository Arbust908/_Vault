# React State Management

For each answer, identify the state owner, update path, consumers, and reason for the chosen scope.

1. How do you decide whether a value is local UI state, shared client state, server state, URL state, or a derived value?
2. What does lifting state up solve, and what problems appear when state is lifted farther than necessary?
3. When is `useReducer` a better fit than several `useState` calls, and what makes a reducer's transitions easy to test?
4. How do React Context and Redux differ in purpose, update behavior, tooling, and appropriate use cases?
5. What kinds of values are good candidates for Context, and how can a frequently changing context value cause unnecessary re-renders?
6. How would you split state, actions, and contexts so that components depend only on what they consume without overengineering the design?
7. Why should server data usually not be treated like ordinary client state, and what concerns can a query library manage for you?
8. When is an external state store justified, and which requirements would you compare before choosing Redux, Zustand, another store, or no library?
9. How would persistence, hydration, multiple browser tabs, optimistic updates, and failed requests affect your state-management design?
10. How would you debug and test a state-management bug involving stale closures, accidental mutation, unstable keys, or an incorrect source of truth?
