# Vue To React Translation

Explain the React mental model rather than translating syntax mechanically.

1. What is the closest React equivalent to Vue `ref()`, and what important differences remain?
2. When does a Vue `computed()` become a plain derived value during React render rather than `useMemo()`?
3. Which Vue `watch()` use cases should become event handlers instead of `useEffect()`?
4. What does a controlled React input replace from a Vue `v-model` workflow?
5. How would you translate a composable into a custom hook while preserving clear ownership of side effects?
6. What are the React equivalents of Pinia state, getters, and actions, and when would you use an external store?
7. How do typed React props differ from Vue `defineProps` in component usage and inference?
8. Why should `useEffect` synchronize with an external system rather than serve as a general-purpose watcher?
9. How do React component identity and keys affect local state compared with Vue conditional rendering?
10. What React habit would be most likely to cause an accidental bug for someone coming from Vue, and how would you catch it quickly?
