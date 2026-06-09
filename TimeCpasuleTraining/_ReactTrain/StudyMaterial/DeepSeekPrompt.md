# Senior Frontend Engineer Interview Questions
**Focus:** React, Next.js | **Experience Level:** Senior | **Role:** Front End Engineer

---

## Technical/Theoretical Questions (40%)

**1. [Sr] [React, Next.js]**
**Question:** Compare and contrast React's traditional client-side rendering (CSR) with Next.js's server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR). For a large-scale e-commerce application with thousands of product pages, which rendering strategy (or combination) would you recommend for the product detail pages and why? Consider factors like SEO, performance (TTFB, FCP), data freshness, and server load.

**2. [Sr] [React]**
**Question:** Explain the React component lifecycle (or the mental model with hooks) in the context of performance optimization. How would you identify and address a performance bottleneck related to unnecessary re-renders in a complex component tree? Discuss specific React APIs (e.g., `React.memo`, `useMemo`, `useCallback`) and tools you would use.

**3. [Sr] [Next.js]**
**Question:** Next.js App Router introduced new patterns like Server Components, Server Actions, and parallel/intercepting routes. Describe a practical use case for a Server Component versus a Client Component. What are the key architectural and security implications of using Server Actions for form submissions compared to a traditional API route?

**4. [Sr] [React]**
**Question:** In a micro-frontend architecture where multiple teams own different sections of a page built with React, what strategies would you propose to ensure component isolation, avoid version conflicts of shared libraries (like React itself), and facilitate independent deployment? Discuss module federation as a potential solution.

---

## Practical/Code-Based Questions (40%)

**5. [Sr] [React]**
**Problem:** You are given a buggy code snippet for a custom `useFetch` hook that is causing memory leaks and race conditions. Identify the issues and rewrite the hook correctly. Discuss how you would enhance it for production use (caching, retries, etc.).

```javascript
function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(setError);
  }, [url]); // What's missing or problematic here?
}
```
*(Candidate should discuss/implement cleanup function, abort controller, race condition handling, and potentially status/loading state)*

**6. [Sr] [Next.js, React]**
**Problem:** Design and pseudo-code a solution for a real-time dashboard page in Next.js (App Router) that shows live analytics. The page must:
*   Have an initial server-rendered shell with user-specific layout (SSR).
*   Embed a client-side chart that streams live data via WebSockets.
*   Include a static, publicly accessible "Help" section (SSG).
*   Ensure the live data section does not break React's hydration.
Describe your folder structure in the App Router, component types (Server/Client), and data fetching strategies for each part.

**7. [Sr] [React]**
**Challenge:** Implement a debounced search input component that fetches suggestions from an API. First, write the basic component. Then, we'll scale the problem: How would you modify your solution if the parent component of this search input re-renders frequently for unrelated reasons? Ensure your debounce mechanism remains effective and efficient.

**8. [Sr] [Next.js]**
**Debugging Scenario:** A page using `getServerSideProps` is experiencing slow Time to First Byte (TTFB). The page logic involves fetching user data from an auth API, then fetching personalized content from three different downstream services. How would you diagnose and resolve this performance issue? Propose specific Next.js features or patterns (e.g., caching, restructuring) to improve it.

---

## Behavioral/Scenario Questions (20%)

**9. [Sr] [Collaboration]**
**Question:** Tell me about a time you advocated for a significant frontend architectural change (e.g., migrating from Pages to App Router, adopting a new state management library). How did you build a business case, socialize the idea with backend engineers and product managers, and manage the rollout to minimize risk and disruption?

**10. [Sr] [Leadership]**
**Scenario:** You are the most senior frontend engineer on a project. A junior colleague has submitted a PR that uses a complex `useEffect` chain to synchronize state, which is becoming unmaintainable. The feature works, but the code is difficult to understand. How would you approach providing feedback and mentoring in this situation?

**11. [Sr] [Cross-Functional]**
**Scenario:** The backend team has proposed a new GraphQL API to replace your current RESTful endpoints for a major feature. As the frontend tech lead, what are the key considerations you would evaluate from a frontend perspective (e.g., tooling, caching, bundle size, developer experience) before agreeing to the migration? How would you collaborate with the backend team on the schema design?

**12. [Sr] [Performance]**
**Question:** Describe your process for conducting a frontend performance audit for a critical user journey in a Next.js application. What metrics do you prioritize (Core Web Vitals, business metrics)? What tools (e.g., Lighthouse, WebPageTest, React DevTools, profiling) do you use at each stage, and how do you translate findings into actionable engineering tasks for your team?

---
### **Evaluation Notes for Interviewers:**

*   **Depth over Breadth:** For Senior roles, look for answers that demonstrate deep understanding of the *why* behind patterns and tools, not just the *how*.
*   **Trade-off Analysis:** Strong candidates should consistently discuss trade-offs (e.g., SSR vs. CSR complexity vs. performance, bundle size vs. feature richness).
*   **System Thinking:** Even for an FE role, answers should consider the broader system (backend interactions, CDN, caching layers, DevOps).
*   **Leadership & Influence:** In behavioral questions, assess their ability to lead without authority, mentor, and make decisions with imperfect information.
*   **Modern React/Next.js Context:** Ensure their knowledge is up-to-date with concurrent features, Server Components, and App Router paradigms, not just class components and Pages Router.
  
  ---
  ---
  # Key Concepts & Study Points for Senior Frontend Engineer (React/Next.js)

## **Core Architectural Concepts**

### **1. Rendering Strategies & Performance**
- **CSR vs. SSR vs. SSG vs. ISR**: Deep understanding of each, including:
  - Hydration process and its implications
  - Time to First Byte (TTFB) and First Contentful Paint (FCP) trade-offs
  - Caching strategies at CDN and browser levels
  - Data fetching patterns for each strategy
- **Next.js App Router Architecture**:
  - Server Components vs. Client Components: When and why to use each
  - Streaming and Suspense boundaries
  - Partial Pre-rendering concepts
  - Route groups and parallel/intercepting routes

### **2. React Advanced Patterns**
- **Performance Optimization**:
  - React's rendering behavior and reconciliation
  - `React.memo`, `useMemo`, `useCallback`:
    - When they help vs. when they add overhead
    - Dependency array pitfalls
  - Profiling with React DevTools and Chrome Performance tab
  - Code splitting strategies (dynamic imports, lazy loading)
- **State Management at Scale**:
  - Context API limitations for frequent updates
  - State colocation principles
  - Global vs. local state decisions
- **Custom Hooks Design**:
  - Cleanup functions and memory leak prevention
  - Race condition handling (especially with async operations)
  - Reusability and composability patterns

### **3. Data Fetching & Management**
- **Next.js Data Fetching**:
  - `fetch()` API extensions in Next.js (caching, revalidation)
  - `getServerSideProps`, `getStaticProps` vs. App Router approaches
  - Mutations with Server Actions vs. API Routes
  - Authentication patterns in different rendering strategies
- **Real-time Data**:
  - WebSocket integration in React/Next.js
  - Hydration mismatch avoidance
  - Optimistic updates
- **Caching Strategies**:
  - HTTP caching headers
  - Next.js built-in cache mechanisms
  - React Query/SWR patterns (even if using built-in solutions)

## **System Design & Architecture**

### **4. Application Structure**
- **Feature-based organization** vs. type-based organization
- **Micro-frontend integration strategies**:
  - Module Federation configuration and challenges
  - Version compatibility solutions
  - Shared dependency management
- **Design Systems Integration**:
  - Component library integration with Next.js
  - Server vs. Client component considerations for UI libraries

### **5. Performance & Monitoring**
- **Core Web Vitals**:
  - LCP optimization strategies (especially with images)
  - CLS avoidance patterns
  - INP improvement techniques
- **Performance Auditing**:
  - Lighthouse audit interpretation
  - Real User Monitoring (RUM) setup
  - Synthetic monitoring tools
- **Bundle Analysis**:
  - Identifying and reducing large dependencies
  - Tree-shaking effectiveness

## **Practical Implementation Skills**

### **6. Debugging & Optimization**
- **Memory Leak Identification**:
  - Cleanup in useEffect, event listeners, subscriptions
  - Closure memory retention patterns
- **Hydration Error Resolution**:
  - Server/client markup mismatch causes
  - Browser extension interference handling
- **Concurrent Feature Usage**:
  - `useTransition`, `useDeferredValue` patterns
  - Scheduler interaction understanding

### **7. Security Considerations**
- **Server Actions Security**:
  - Request validation patterns
  - CSRF protection understanding
- **Client-side Security**:
  - XSS prevention in React
  - Safe HTML rendering practices
  - Environment variable management

## **Collaboration & Leadership**

### **8. Technical Leadership**
- **Architecture Decision Records (ADR)** process
- **Migration Strategy Planning**:
  - Incremental adoption patterns
  - Backward compatibility maintenance
  - Feature flag usage for rollouts
- **Code Review Focus Areas**:
  - Performance regression spotting
  - Accessibility compliance
  - Testing strategy adequacy

### **9. Cross-functional Collaboration**
- **API Design Collaboration**:
  - GraphQL vs. REST considerations from frontend perspective
  - Error contract agreements
  - Type sharing strategies (TypeScript, OpenAPI)
- **DevOps Collaboration**:
  - Docker/containerization understanding
  - CI/CD pipeline requirements for frontend
  - Monitoring integration points

## **Modern Tooling Proficiency**

### **10. Essential Tools**
- **Next.js-specific**:
  - Next.js CLI and analysis commands
  - `next/image` optimization understanding
  - Middleware use cases
- **Testing Strategy**:
  - React Testing Library patterns for server/client components
  - E2E testing with Cypress/Playwright in Next.js context
  - Mock strategies for different rendering modes
- **TypeScript Advanced Patterns**:
  - Generic components
  - Type utilities for API responses
  - Strict mode configurations

## **Behavioral Competencies**

### **11. Communication & Mentoring**
- **Technical Explanation** to non-technical stakeholders
- **PR Feedback Delivery** that educates rather than criticizes
- **Knowledge Sharing** through documentation and workshops

### **12. Project Scoping & Estimation**
- **Breaking down** complex features considering frontend constraints
- **Identifying technical debt** vs. business need trade-offs
- **Performance budget** advocacy and monitoring

---

## **Study Resources & Practice**
1. **Official Documentation Deep Dives**:
   - React Beta docs (concurrent features)
   - Next.js App Router docs
   - Web Vitals documentation

2. **Practical Exercises**:
   - Convert a CSR React app to optimized Next.js with multiple rendering strategies
   - Profile and optimize a poorly performing React component tree
   - Design a migration plan from Pages Router to App Router

3. **Case Study Analysis**:
   - Review Vercel/Next.js conference talks on architecture
   - Study open-source Next.js codebases (like vercel.com)
   - Analyze Web Vitals reports of popular sites

4. **System Design Practice**:
   - Whiteboard designing a dashboard with real-time updates
   - Plan a micro-frontend architecture for a large organization
   - Design an A/B testing framework within Next.js

The key mindset shift for Senior level: from "How do I implement this?" to "What should we implement, why, and what are the long-term consequences of each approach?"