Here’s a tight set of **Senior Front End Engineer** interview questions, centered on **React + Next.js**, aimed at depth, trade-offs, and real-world scars 🧠⚛️

---

## React (Senior Level)

**Architecture & Patterns**

- How do you decide when to introduce context, Redux, Zustand, or keep state local?
    
- Describe a React architecture you’ve refactored. What was wrong and how did you fix it?
    
- When does component composition beat inheritance, and when does it fail?
    

**Rendering & Performance**

- Explain how React’s reconciliation works and how keys actually affect it.
    
- Common causes of unnecessary re-renders and how you detect and prevent them.
    
- `useMemo` vs `useCallback`: when do they help, and when are they noise?
    
- How would you optimize a table with 50k rows?
    

**Hooks & Internals**

- Why must hooks be called unconditionally?
    
- Explain stale closures and how they appear in real code.
    
- Custom hooks: when is one justified vs inline logic?
    

**Concurrency & Modern React**

- What problems do `useTransition` and `useDeferredValue` solve?
    
- How do Suspense boundaries affect user experience and error handling?
    
- Differences between controlled, uncontrolled, and hybrid components.
    

**Testing**

- What should be tested at component level vs integration level?
    
- How do you test async UI states and race conditions?
    

---

## Next.js (Senior Level)

**Rendering Strategies**

- Compare SSR, SSG, ISR, and Client Components. When would you choose each?
    
- What are the hidden costs of SSR?
    
- How does hydration work and why does it fail?
    

**App Router (Next 13+)**

- Differences between Server Components and Client Components.
    
- What code _cannot_ run in a Server Component and why?
    
- How do layouts, templates, and nested routing interact?
    
- How do you handle global state with Server Components?
    

**Data Fetching**

- Explain `fetch` caching, `revalidate`, and `no-store`.
    
- How would you design a page that mixes static, dynamic, and user-specific data?
    
- Where should data fetching live: server, client, or both?
    

**Performance & Optimization**

- How do you reduce JS sent to the client in Next.js?
    
- Image optimization: what does `next/image` actually do?
    
- How do route segments and streaming improve TTFB?
    

**SEO & DX**

- How do you manage metadata dynamically in App Router?
    
- Common SEO mistakes in Next.js apps.
    
- How do you structure a large Next.js repo for multiple teams?
    

---

## Cross-Cutting / Real-World Scenarios

- You’re migrating a legacy React SPA to Next.js. What’s your plan?
    
- A page is fast locally but slow in production. How do you debug it?
    
- How do you handle auth securely in a Next.js app?
    
- What frontend decisions most affect backend scalability?
    
- Describe a frontend decision you regret and what you learned.
    

---

## Bonus “Senior Smell Test” Questions

- What React advice is commonly repeated but wrong?
    
- What would you remove from React if you could?
    
- How do you keep frontend complexity from silently exploding?
    

---

If you want, I can:

- Tailor these to **App Router only**
    
- Add **expected senior-level answers**
    
- Turn this into a **live coding + system design interview loop**
    
- Focus on **performance, DX, or testing**
    

Just point the compass 🧭

---
---
Here’s the **distilled study map** behind those questions. Think of it as the skeleton under the React + Next.js body. No fluff, just what a senior is expected to _understand deeply_ 🧠

---

## React – Key Concepts & Study Points

### Component Architecture

- State locality vs global state
    
- Composition patterns
    
- Separation of concerns
    
- Refactoring legacy component trees
    
- Avoiding prop drilling without overusing context
    

### Rendering & Reconciliation

- Virtual DOM and diffing
    
- Role of `key` in list rendering
    
- Render cycles and commit phase
    
- Causes of re-renders
    
- Memoization trade-offs
    

### Performance Optimization

- Identifying bottlenecks
    
- React Profiler usage
    
- Virtualization strategies
    
- When optimization hurts more than helps
    

### Hooks & State Management

- Rules of hooks
    
- Dependency arrays and referential equality
    
- Stale closures
    
- Custom hooks design
    
- Controlled vs uncontrolled components
    

### Concurrent React

- Interruptible rendering
    
- Transitions and deferred updates
    
- Suspense mental model
    
- Error boundaries interaction
    

### Testing Strategy

- Unit vs integration boundaries
    
- Testing async UI
    
- Deterministic vs behavior-driven tests
    
- Avoiding implementation-coupled tests
    

---

## Next.js – Key Concepts & Study Points

### Rendering Models

- SSR vs SSG vs ISR vs CSR
    
- Hydration and mismatch causes
    
- Performance vs freshness trade-offs
    
- Cost of server rendering
    

### App Router & React Server Components

- Server vs Client Components boundaries
    
- Data ownership and execution context
    
- Layouts, templates, and nested routes
    
- Streaming and partial rendering
    

### Data Fetching & Caching

- `fetch` cache layers
    
- `revalidate`, `no-store`, tags
    
- Mixing static and dynamic data
    
- Server-side data composition
    

### Performance Optimization

- Reducing JS payload
    
- Code splitting by route and component
    
- Image optimization pipeline
    
- TTFB vs LCP vs CLS trade-offs
    

### SEO & Metadata

- Metadata API usage
    
- Dynamic vs static metadata
    
- Indexing pitfalls
    
- Accessibility impact on SEO
    

---

## Cross-Cutting Senior Concepts

### System Design (Frontend)

- Frontend-backend contract design
    
- Data flow ownership
    
- Caching strategy alignment
    
- API over-fetching vs under-fetching
    

### Production Debugging

- Environment parity issues
    
- Observability (logs, metrics, traces)
    
- Client vs server performance diagnosis
    

### Security & Auth

- Auth boundaries in Next.js
    
- Cookie vs token trade-offs
    
- Server-only secrets
    
- CSRF and XSS considerations
    

### Codebase Health

- Repo structure at scale
    
- Dependency boundaries
    
- Avoiding architectural drift
    
- Managing tech debt intentionally
    

---

## Meta-Level Expectations (Senior Signal)

- Clear trade-off reasoning
    
- Knowing _why_, not just _how_
    
- Resisting premature abstraction
    
- Comfort with uncertainty and constraints
    
- Ability to say “this depends” and explain _what it depends on_
    

---

If you want, I can compress this into:

- A **1-page cram sheet**
    
- A **checklist for self-evaluation**
    
- A **study plan by weeks**
    
- Or map it to **real interview answers**
    

Say the word and we’ll sharpen it ✨