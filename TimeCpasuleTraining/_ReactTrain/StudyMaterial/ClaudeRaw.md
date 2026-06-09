# Senior Front End Engineer Interview Questions

## React & Next.js Focus

### React Architecture & Advanced Patterns

**1. Reconciliation & Performance** Explain React's reconciliation algorithm and how the fiber architecture improves upon the previous stack reconciler. How would you optimize a large list rendering (10,000+ items) that needs to support filtering, sorting, and real-time updates?

**2. Concurrent Features** How do React 18's concurrent features (useTransition, useDeferredValue, Suspense) work under the hood? Describe a real-world scenario where you'd use each, and explain the tradeoffs between startTransition and useDeferredValue.

**3. Custom Hooks Architecture** Design a custom hook system for managing complex form state with validation, async field dependencies, and optimistic updates. How would you handle race conditions, cleanup, and ensure the hook is reusable across different form structures?

**4. Context Performance** Explain why Context API can cause performance issues and describe multiple strategies to mitigate re-renders. How would you implement a performant global state solution using Context without external libraries?

### Next.js Specific

**5. Rendering Strategies** Compare and contrast Next.js App Router's Server Components, Client Components, and Server Actions. When would you use each? How does streaming SSR work, and what are the implications for SEO and user experience?

**6. Data Fetching Patterns** Explain the differences between getServerSideProps, getStaticProps, and App Router's data fetching with fetch caching. How would you implement incremental static regeneration (ISR) for a blog with 100,000 posts? What are the caching strategies and their tradeoffs?

**7. Route Handlers & Middleware** Design an authentication system using Next.js middleware and route handlers. How would you handle protected routes, role-based access control, and session management? What are the performance implications of middleware execution?

**8. Image & Font Optimization** Explain how Next.js Image component works internally. How does it handle responsive images, lazy loading, and different image formats? What build-time and runtime optimizations occur?

### State Management & Data Flow

**9. State Management at Scale** You're building a collaborative document editor (like Google Docs) in React. Design the state management architecture. How would you handle real-time updates, conflict resolution, undo/redo, and offline support? Compare approaches using Redux, Zustand, or React Query.

**10. Server State vs Client State** Explain the difference between server state and client state. How would you architect data fetching and caching for an e-commerce application with product listings, cart, and user preferences? Discuss React Query/SWR vs traditional approaches.

### Performance & Optimization

**11. Bundle Optimization** Your Next.js application's initial bundle is 2MB. Walk through your debugging and optimization process. What tools would you use? How would you implement code splitting, tree shaking, and dynamic imports effectively?

**12. Runtime Performance** How would you diagnose and fix a React application that's experiencing janky scrolling and slow interactions? Discuss profiling tools, common bottlenecks, and optimization techniques like virtualization, memoization, and Web Workers.

**13. Core Web Vitals** Explain LCP, FID/INP, and CLS. How does Next.js help optimize these metrics? Describe specific strategies you'd implement to achieve excellent Core Web Vitals scores on a content-heavy site.

### Advanced TypeScript & Patterns

**14. Type-Safe API Layer** Design a type-safe API client layer for a Next.js application that ensures runtime validation matches TypeScript types. How would you handle API versioning, error types, and generate types from OpenAPI specs or GraphQL schemas?

**15. Generic Component Design** Create a highly reusable, type-safe Table component that supports sorting, filtering, pagination, and custom cell renderers. How would you design the props API to be both flexible and type-safe?

### Testing & Quality

**16. Testing Strategy** Describe your comprehensive testing strategy for a large Next.js application. How would you balance unit tests, integration tests, and E2E tests? How do you test Server Components, Server Actions, and API routes?

**17. Mocking & Test Architecture** How would you test a component that uses multiple custom hooks, makes API calls, and interacts with browser APIs? Discuss mocking strategies and maintaining test reliability.

### System Design & Architecture

**18. Micro-Frontend Architecture** Design a micro-frontend system using Next.js where multiple teams own different parts of the application. How would you handle shared components, routing, state management, and deployments?

**19. Real-Time Features** Implement real-time notifications in a Next.js app. Compare WebSocket, Server-Sent Events, and polling approaches. How would you handle connection management, reconnection logic, and state synchronization?

**20. Migration Strategy** You need to migrate a large Create React App application to Next.js App Router. Design your migration strategy, considering SEO, routing, data fetching, and minimizing downtime. What would you migrate first and why?

---
---
These questions assess deep understanding of React and Next.js internals, architectural decision-making, performance optimization, and real-world problem-solving abilities expected at the senior level.

---
# Key Concepts & Study Points for Senior React/Next.js Interview Prep

## React Fundamentals & Internals

### Core Architecture

- **Fiber architecture** - how it differs from stack reconciler, work units, time slicing
- **Reconciliation algorithm** - diffing, key prop importance, how React decides what to update
- **Virtual DOM** - why it exists, how it works, when it's beneficial vs overhead
- **Component lifecycle** - mounting, updating, unmounting in both class and functional components

### Concurrent React (React 18+)

- **useTransition** - when to use, how it marks updates as non-urgent
- **useDeferredValue** - difference from useTransition, use cases
- **Suspense** - lazy loading, data fetching, error boundaries
- **startTransition** - tradeoffs vs other concurrent features
- **Streaming SSR** - how it works, benefits for UX and performance

### Performance Optimization

- **List virtualization** - techniques for rendering large lists (react-window, react-virtual)
- **Memoization** - React.memo, useMemo, useCallback, when to use each
- **Re-render optimization** - identifying causes, preventing unnecessary renders
- **Profiling tools** - React DevTools Profiler, Chrome DevTools Performance tab
- **Code splitting** - dynamic imports, lazy loading, route-based splitting
- **Tree shaking** - how it works, ensuring dependencies support it

## State Management

### Patterns & Libraries

- **Context API** - performance pitfalls, optimization strategies (splitting contexts, memo)
- **Redux** - when appropriate, modern Redux Toolkit patterns
- **Zustand** - lightweight alternative, use cases
- **React Query / SWR** - server state management, caching, revalidation
- **Server state vs client state** - distinguishing between them, appropriate tools for each

### Advanced State Patterns

- **Custom hooks** - designing reusable, composable hooks
- **State machines** - XState or similar for complex state logic
- **Optimistic updates** - implementing, rollback strategies
- **Race condition handling** - cleanup functions, abort controllers
- **Undo/redo** - implementation strategies, history management

## Next.js Architecture

### Rendering Strategies

- **Server Components** - what runs on server, benefits, limitations
- **Client Components** - when required, "use client" directive
- **Server Actions** - form handling, mutations, progressive enhancement
- **SSR (Server-Side Rendering)** - when to use, SEO benefits
- **SSG (Static Site Generation)** - getStaticProps, when appropriate
- **ISR (Incremental Static Regeneration)** - revalidation strategies, on-demand revalidation
- **CSR (Client-Side Rendering)** - when still necessary

### Data Fetching

- **App Router patterns** - fetch with caching, revalidation
- **Pages Router patterns** - getServerSideProps, getStaticProps, getStaticPaths
- **Caching strategies** - force-cache, no-store, revalidate options
- **Streaming** - loading.js, Suspense boundaries
- **Parallel routes** - simultaneous data fetching

### Routing & Navigation

- **App Router file conventions** - page.js, layout.js, loading.js, error.js
- **Dynamic routes** - [slug], [...slug], [[...slug]]
- **Route groups** - (folder) for organization without affecting URL
- **Middleware** - execution order, use cases (auth, redirects, headers)
- **Route handlers** - API routes in App Router (route.js)

### Optimization Features

- **Image component** - automatic optimization, responsive images, lazy loading, formats (WebP, AVIF)
- **Font optimization** - next/font, automatic subsetting, preloading
- **Script component** - loading strategies (beforeInteractive, afterInteractive, lazyOnload)
- **Bundle analysis** - @next/bundle-analyzer, understanding chunks

## Performance & Core Web Vitals

### Metrics

- **LCP (Largest Contentful Paint)** - what it measures, optimization techniques
- **FID/INP (First Input Delay / Interaction to Next Paint)** - measuring interactivity, reducing JavaScript
- **CLS (Cumulative Layout Shift)** - preventing layout shifts, reserve space for dynamic content
- **TTFB (Time to First Byte)** - server response optimization
- **FCP (First Contentful Paint)** - initial render speed

### Debugging & Tools

- **Lighthouse** - running audits, understanding recommendations
- **React DevTools Profiler** - flame graphs, ranked charts, identifying slow components
- **Chrome DevTools Performance** - main thread analysis, long tasks
- **Web Workers** - offloading heavy computation
- **Network optimization** - compression, CDN, prefetching, preloading

## TypeScript Integration

### Type Safety

- **Generic components** - creating flexible, reusable typed components
- **Prop types** - union types, discriminated unions for polymorphic components
- **API typing** - generating types from schemas (OpenAPI, GraphQL)
- **Runtime validation** - Zod, Yup integration with TypeScript
- **Utility types** - Pick, Omit, Partial, Required, Record
- **Type inference** - leveraging TypeScript's inference for cleaner code

## Testing Strategies

### Testing Layers

- **Unit tests** - testing hooks, utilities, pure functions (Jest, Vitest)
- **Component tests** - React Testing Library, user interactions
- **Integration tests** - testing component combinations, data flow
- **E2E tests** - Playwright, Cypress for full user journeys
- **Visual regression** - screenshot testing (Percy, Chromatic)

### Testing Techniques

- **Mocking** - API calls, modules, browser APIs
- **Testing Server Components** - specific approaches for RSC
- **Testing Server Actions** - form submissions, mutations
- **Testing hooks** - @testing-library/react-hooks or component wrappers
- **Test reliability** - avoiding flaky tests, proper cleanup

## Architecture & Design Patterns

### Application Architecture

- **Micro-frontends** - module federation, independent deployments, shared dependencies
- **Monorepo** - Turborepo, Nx for managing multiple apps
- **Component libraries** - building internal design systems
- **Folder structure** - feature-based vs type-based organization
- **Separation of concerns** - presentation vs container components

### Real-Time & Advanced Features

- **WebSockets** - bidirectional communication, Socket.io
- **Server-Sent Events (SSE)** - one-way streaming from server
- **Polling strategies** - short polling, long polling, tradeoffs
- **Connection management** - reconnection logic, heartbeats
- **State synchronization** - keeping client and server in sync

### Migration & Scalability

- **CRA to Next.js migration** - incremental approach, routing strategies
- **Pages to App Router migration** - planning, feature parity
- **Authentication** - NextAuth, custom solutions, middleware patterns
- **Authorization** - RBAC (role-based access control), protecting routes
- **Error handling** - error boundaries, error.js, global error handling

## Best Practices to Study

- **Accessibility (a11y)** - ARIA labels, keyboard navigation, screen reader support
- **Security** - XSS prevention, CSRF, environment variables, API security
- **SEO** - metadata, structured data, sitemaps, robots.txt
- **Internationalization (i18n)** - next-intl, routing strategies
- **Analytics & monitoring** - performance monitoring, error tracking (Sentry)
- **Build optimization** - analyzing bundle size, eliminating dead code
- **Progressive enhancement** - working without JavaScript, form handling
- **Deployment strategies** - Vercel, self-hosting, Docker, edge functions

---

## Recommended Practice Approach

1. **Build projects** demonstrating each concept (not just reading)
2. **Read source code** of React and Next.js for deep understanding
3. **Performance audit** existing apps using Chrome DevTools
4. **Write technical blog posts** explaining concepts (teaches deeply)
5. **Contribute to open source** React/Next.js projects
6. **Practice system design** - whiteboard component architecture
7. **Mock interviews** - explain concepts out loud to others