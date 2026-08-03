The feedback is really solid — "Strong Middle" from Lemon.io with that level of detail is actually a useful signal, not just a rejection. The gaps are precise and closeable. Let me build a plan around them.

---

## Study Plan: Closing the Gap to Senior

### How to read this plan

Four parallel tracks, each with a cadence. You don't do them sequentially — you run them concurrently, weighted by priority. Total active time: roughly **6–8 hrs/week** over **12–16 weeks**.

---

### Track 1 — Advanced TypeScript

**Priority: High | ~2h/week**

The feedback pinpoints a specific ceiling: you can _use_ utility types fluently but can't yet _design_ them. The goal is to be able to build small internal type libraries from scratch.

**Weeks 1–4 — Generics & Indexed Access**

- Implement `getUsersBy<K extends keyof User>(key: K, value: User[K])` from scratch, then generalise it to work on any object type.
- Practice constraint patterns: `T extends Record<string, unknown>`, `T extends keyof U`.
- Build a typed `pick`, `omit`, and `deepReadonly` without importing from any lib.

**Weeks 5–8 — Function Overloads & `never`**

- Write functions with 2–3 overload signatures and understand how the implementation signature differs.
- Use `never` for exhaustive checks in discriminated unions — the classic `assertNever(x: never)` switch pattern.
- Study conditional types: `T extends U ? X : Y`, infer keyword.

**Weeks 9–12 — Utility Library Design**

- Clone a subset of `type-fest` by hand (just 6–8 utilities). This forces you to think like a library author.
- Read the TypeScript source for `Parameters<T>`, `ReturnType<T>`, `ConstructorParameters<T>` — they're short and illuminating.

**Resources**: _Type-Level TypeScript_ (book, free online), Matt Pocock's Total TypeScript free workshops, TypeScript playground for rapid iteration.

---

### Track 2 — Modern React to Match Vue Depth

**Priority: High | ~2h/week**

You have strong mental models from Vue — the goal isn't to start from scratch but to achieve _symmetry_. You should be able to answer any React hooks question as comfortably as a Vue one.

**Weeks 1–3 — Hooks internals**

- `useEffect`: cleanup functions, dependency arrays, what "runs after paint" actually means. Write 5 different `useEffect` patterns (data fetching, subscriptions, timers) correctly from memory.
- `useRef` vs `useState`: when a ref is the right call (previous value tracking, DOM imperative access, skipping rerenders).
- `useMemo` vs `useCallback`: the actual cost/benefit tradeoff, not just "memoize expensive things".

**Weeks 4–6 — React 19 specifics**

- `useTransition`, `useOptimistic`, `use()` for async — these are the new mental models React 19 introduces.
- Server Components vs Client Components: the boundary model and how it differs from Nuxt's `<ClientOnly>` approach.
- StrictMode double-invocation: _why_ React does this, what it reveals, and how to write effects that tolerate it.

**Weeks 7–10 — Patterns**

- Derived state: how to compute from props without `useEffect` (just compute inline or with `useMemo`). This is a very common interview trip-wire.
- Composition patterns: compound components, render props, custom hooks as the React equivalent of Vue composables.
- Build one non-trivial component (e.g. a paginated data table with sorting) in React from scratch, no libraries.

**Resources**: React docs (they're excellent now), Jack Herrington's YouTube, Theo's content for React 19 specifics.

---

### Track 3 — Sharpening Conceptual Explanations

**Priority: Medium | ~1h/week**

You _know_ these things. You just need crisp, 60-second answers. The format that works best: **concept → why it exists → one concrete example → one gotcha**.

Work through each of these and write out your answer, then trim it to under 90 seconds spoken:

|Concept|The key insight to nail|
|---|---|
|Virtual DOM|Why diffing + batching matters, not just "it's faster"|
|`key` prop|What happens without it, why index-as-key is dangerous|
|Deep vs shallow copy|Mutation bugs in state, structuredClone vs spread|
|Event bubbling / capture|`stopPropagation` vs `preventDefault`, capture phase use case|
|Scoped CSS|How it works under the hood (data attributes), vs CSS Modules, vs BEM|
|SSR hydration|What a hydration mismatch actually is and why it happens|

**Practice method**: record yourself explaining each one on your phone. If you can't get through it cleanly in 90s, it's not ready. The bar is "could you explain this to a sharp junior in a Slack message."

---

### Track 4 — Scope & Boundary Conversations

**Priority: Medium | ~30min/week, ongoing**

This is a soft skill but it'll affect how senior you're perceived to be. The pattern to break: _absorbing scope creep personally instead of surfacing it early_.

The practical drill is simple — every time an estimate is at risk, practice the 3-part message before defaulting to extra hours:

1. **Signal early**: "I'm seeing X is taking longer than estimated because Y."
2. **Offer options**: "We can cut Z, push the date, or ship this part now and phase the rest."
3. **Ask for a decision**: "Which do you prefer?" — not "I'll figure it out."

This isn't about saying no. It's about making tradeoffs visible so the _stakeholder_ owns them, not you. It also makes you look more senior, not less.

---

### Milestone Check-ins

|Week|Goal|
|---|---|
|4|Can implement `getUsersBy` and 3 other generic helpers from scratch|
|8|Can explain all 6 concepts from Track 3 cleanly in under 90s|
|10|Can build a non-trivial React component with correct hook usage from memory|
|12|Have designed one small TypeScript utility library (5–8 types) without help|
|16|Ready to re-approach Lemon.io or comparable platforms|

---

### One thing the feedback _also_ said

Your architecture stories — merchant pages, caching, mixed SSR/CSR — are your **highest-leverage asset**. Keep adding to that bank. Every time you solve something interesting at Demand.io, write it down in two paragraphs. Those turn directly into case studies for `/work` and into interview answers.

The gap between "Strong Middle" and "Senior" here is mostly polish on specific mechanics, not a fundamental rethink. The foundations are solid.