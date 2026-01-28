# Senior Frontend Engineer Interview Questions

**Focus:** React, Next.js | **Experience Level:** Senior

---

## Technical/Theoretical Questions (40%)

### 1. [Sr] [React, Next.js] - Server-Side Rendering Architecture

**Question:** Explain the differences between SSR, SSG, and ISR in Next.js. When would you choose each rendering strategy, and what are the performance implications? How does React Server Components change this landscape?

> @Fran: 
> These three rendering strategies are three points on an axis, where SSG is the most performant and cost effective option but compromises on data freshness while SSR gives you the most flexibility on Freshness while having a bigger server cost.
>  SSG delivers a static HTML that gets generated when the App gets built, pinning the freshness of the data to that point in time but in return returning the quickest response. Great for static pages or pages with very low change.
> SSR, on the other hand, delivers peak freshness by generating the HTML per request, this having a bigger impact on Server cost and Time to first byte. Good for pages that need up to date data like live Dashboards.
> ISR is a good middle point between SSG and SSR, serving a cached static page but with a revalidation strategy (time-based or on-demand) so that dynamic content can be the most up to date, without having a big load on the server and getting a better TTFB.
> As recommended by the Next team we should strive to make as much as a posible SSG for it performance and lower server cost. Going for ISR on high dynamic pages that can be cached for some time next (like product pages) and reaching for SSR when caching makes little sense for the recency of data needed like in user dashboards or comment sections.
> RSC (React Server Components) come to give the developer a fine grained way to choose what parts of the component tree get to send logic to the client, pushing to keep the bundle as small as possible. This means RSC have access to all Server API, Fetch and more without contributing too much to the client bundle while Client components add the interactivity needed for a fluid UX.

##### **Strong Answer Should Include:**

- Clear distinction: SSR (per-request), SSG (build-time), ISR (on-demand revalidation)
- Trade-offs: TTFB vs. build time vs. cache complexity
- Use cases: SSR for personalized content, SSG for marketing pages, ISR for semi-dynamic content
- RSC benefits: reduced bundle size, streaming, data fetching at component level
- **Red flags:** Confusion between strategies, not mentioning caching implications

---

### 2. [Sr] [React] - Performance Optimization Deep Dive

**Question:** A complex React dashboard with multiple data visualizations is experiencing performance issues. Walk me through your systematic approach to diagnosing and resolving performance bottlenecks. What specific React features and patterns would you employ?

> @Fran First we should aim to reproduce the issue on a controlled environment and then establishing the current metrics as a baseline and set a performance budget to push for with the fix. Then we should understand the context, is this issues only on specific data sets or is it a wide spread issue. Is it an initial load problem or is it an interaction problem.
> With that done we would turn to the Browsers' inspector tab to watch the flame graph to identify long tasks that are blocking the main thread, the network waterfall for oversized payloads and/or specific request ,and the rendering timeline for spots of excessive layout thrashing or forced reflows. 
> We could also use the React Dev tools to drill more into specifics metrics, such as which components are rendering the most frequent, render durations and even examining state and props of specific components.
> Once we find the culprits we most certainly will find unnecessary re renders, long API response times and/or expensive function. 
> When posible we should try and defer big third party packages or push them to a Web Worker to off load the main thread. Lazy load big images and optimize for correct sizes if not already done. Add loading states for heavy API responses and code split capable code for finer control on code inclusion.
> If excessive re-renders are the problem we should seek the root cause, making sure to be using the reconciliation algorithm correctly like having stable keys in lists and not having any component anti-pattern that would make them unmount and re mount. We should also make sure to check missing dependencies, the creation of new Objects or Arrays in every render, having broad context providers that may cause cascading re renders and check that we are not passing inline functions as props.
> In case optimizations are needed because the code is expensive but indispensable we should make sure to be using `useMemo` and/or `useCallback` (for computed values and methods respectively), making sure not to prematurely optimize.
> We could also make sure to move state down close to where it’s used avoiding full tree re-renders and move expensive operations out of the render path altogether.
> In case that the issue is tied to the visualization of the huge data sets we may need to use a virtualization library when long lists or tables, and reaching for WebGL or canvas solutions in the case of charts.
> Other powerful tools in our tool box are the `startTransition` and `useDeferredValue` for where we want to have interruptible heavy computations and not loose the fluidity of the UI
> Throughout out this process we should make sure to collect metric (using Lighthouse or WebPageTest) with each fix to make sure we are making progress towards the set budget, re evaluating the budget if needed, and only marking this issue as solved when metrics are equal or better that the budget (Big caveat is to make sure to keep in mind the expected changes in performance between environments and setting environment specific budgets aiming to have QA and PROD be equal).

##### **Strong Answer Should Include:**

- Profiling with React DevTools Profiler, Chrome Performance tab
- Common culprits: unnecessary re-renders, large component trees, expensive computations
- Solutions: React.memo, useMemo, useCallback, code splitting, virtualization (react-window/react-virtualized)
- Concurrent features: useTransition, useDeferredValue for non-blocking updates
- Bundle analysis and lazy loading strategies
- **Red flags:** Only mentioning one technique, not discussing measurement first

---

### 3. [Sr] [Next.js] - Edge Computing and Middleware

**Question:** You need to implement A/B testing, bot detection, and geolocation-based redirects for a high-traffic e-commerce site. How would you leverage Next.js middleware and edge functions to accomplish this without impacting performance?

> @Fran First we need to acknowledge that to keep these important processed fast we’ll use middleware that runs at the edge, near the users physical location. Edge functions give us speed but the trade off is it’s not a Node runtime so we are limited in functionality
> For A/B testing we would check the request for the experiment cookies to see if the user has already been assigned a bucket. If not then we should use some kind of identifier, maybe in the same request header like user ID or a fresh UUID, and then use a hash function to have repeatable way to bucket users to a test group on the specific experiment, this would ensure that given the same ID and experiment name the user would end up in the same bucket. We would then set a cookie for persistence. After the group is lifted or decided we should use `NextResponse.rewrite()` for not default groups so the user get the new experience without any strange new urls
> For bot detection I would use some layered methods of detection but if needed we could use a purpose built solution like CloudeFlare Bot maze to catch and trap bot traffic. When building our solution, first we should check the request headers, mainly for User Agent given that most scrapers and basic bots don’t bother simulating those or upright specify the browser as a `Headless` one. After than we would pass them though a deeper check of the headers to check for regularly missing properties like Accepted-Language headers. Finally we could use an IP-based check where we compare the request IP to ones usually used by bots (Most edge providers have edge compatible Databases we can use). Once a bot is detected by our system we could decide to just add a cookie for easy identification, reroute for a CAPTCHA challenge of a purpose built bot version of the page that may be leaner, optimized only for bots and heavily cached so it doesn’t impact on DB calls and server load. If a solution wants to be built to protect the servers and not upright filter the traffic a rate limiter can be implemented that would let x amounts of request per IP with a timer window. 
> Lastly for geolocation-based redirections most edge providers enhance request headers with IP-based metadata, such as country code, region, city, and even latitude/longitud without needing an external API that would add latency. First we should make sure that our language and location. solutions are separate so we don’t force English speakers in France to navigate the site in french. Then we could check for a preference cookie or query string for users that have already expressed a specific preference (We could even prompt them with a modal when finding a difference between current location and preferred location). After that, if needed, we would use `NextResponse.redirect()` to push to the location specific page, keeping in mind that the user may express a preference to shop on a different location (setting the preferred cookie)  for when they are on a trip or using a VPN.
> We should always keep in mind when using Redirect that each one add an HTTP round trip that may have a final impact if two many are chained.
> On all these middleware we should keep a strict measurement of execution time and send it to an observability platform to catch early delays or problems. We should also add a analytic reporting layer that will help the product team see the decisions taken without impacting into latency. To that end I would have each of these add an X header, visible by out server side code that will report to our analytics platform without affecting Edge times. Finally if FeatureFlags want to be implemented we could work with  an Edge Cache that we keep in sync  in the background, keeping the middleware fast and effective (This is more suited to simple boolean flags and for per-user flags). 

##### **Strong Answer Should Include:**
- Middleware execution at edge (before request completes)
- Cookie/header manipulation for A/B testing
- Use of `NextResponse.rewrite()` vs `redirect()`
- Edge runtime limitations (no Node.js APIs)
- Performance considerations: minimal computation at edge
- Integration with analytics/feature flag services
- **Red flags:** Suggesting client-side only solutions, not understanding edge limitations

---

### 4. [Sr] [React] - State Management Architecture

**Question:** Compare and contrast different state management approaches for a large-scale React application (Context API, Redux, Zustand, Jotai, Server State with React Query/SWR). How would you decide which to use, and could you architect a solution using multiple approaches together?

> @Fran To start I should mention all of these state management solutions live on a spectrum that is determined by complexity, ergonomics and size, each solve diferent parts of the State keeping problem.
> Context API is the built in simple solution to shared state that helps avoid prop drilling but may lead to re-rending issues. This issues stem from the fundamental structure of how changes in the state triggers a re render on all consumers of the provider even if they don’t use the state. Some mitigations to combat this would be context splitting, Memoization, still I would not recommend it for a large-scale application.
> Redux is a robust state management library that is better suited for bigger states given its its predictable state container pattern, basically a ledger of cations that mutate state, that with its DevTools let’s you debug the ledger and see action to action changes. These make values immutable and deterministic, reliable and with no side effects. Still real application sometimes need to go out of those restrains, there is where the middleware ecosystem for Redux come in, bridging the gap and giving us the ability to fetch data and then dispatch the action that mutates the state. The main downside from Redux is is heavy reliance on boilerplate code, for types, actions and reducer but currently this can be partially mitigated by Redux Toolkit which lets use declare all three in one object.
> Libraries such as Zustand or Jotai are minimal on boilerplate and lightweight, both have a diferent approaches to the same end. Zustand creates a fine grain control over re renders by using a subscription model that runs outside of the React render cycle, it also has some valuable tools like lazy-loadable stores. While Jotai uses an atomic state management with automatic dependency tracking.  Both options makes re rendering problems less frequent and state more intentional.
> Server state with React Query (now Tan Stack Query) or SWR strong suit is storing data  state, because of its automatic caching, request deduplication, date revalidation, optimistic UI, error handling performance and TS support.
> A hybrid solution is possible and I would suggested for a large-scale application. Even though pairing any server side manage with any client side could fit, given the scale we can make a smart decision and use the batteries included on some of the options to get to peak performance, a tight control and good DX. I would choose Tan Stack Query as a Server state manager for its ergonomics, included features like the out of the box cache, revalidation and useful hooks like `useInfinateQuery` and compatibility with Typescript. Then would choose Zustan for app state management for is subscription model  that gives us fine re render control and its similar ergonomics to TSQuery (keeping a similar mental model). The orchestration would be as follows, TS Query for Database state, and useState for local state like forms until submitted using Zustand for app specific state and coordinate between multiple TS query  requests.

##### **Strong Answer Should Include:**

- Context API: prop drilling solution, but re-render issues at scale
- Redux: predictable, devtools, middleware, but boilerplate-heavy
- Zustand/Jotai: lightweight, minimal boilerplate
- Server state: React Query/SWR for async data, cache management
- Hybrid approach: server state separate from client state
- Decision factors: team size, complexity, server interaction patterns
- **Red flags:** Religious adherence to one solution, not acknowledging trade-offs

---

## Practical/Code-Based Questions (40%)

### 5. [Sr] [React, Next.js] - Custom Hook Implementation

**Question:** Design and implement a production-ready `useInfiniteScroll` custom hook for a Next.js application that:

- Loads paginated data from an API
- Handles loading/error states
- Supports both SSR initial data and client-side pagination
- Includes proper cleanup and edge case handling

**Provide pseudocode/starter:**

```typescript
// Expected signature
function useInfiniteScroll<T>(
  initialData: T[],
  fetchMore: (page: number) => Promise<T[]>,
  options?: { threshold?: number }
) {
  // Your implementation
}
```

> @Fran Important things to keep in mind, we should use an intersection observer to trigger the `fetchMore` method, keeping the current page as an internal state, we should have a return method that uses the Abort Controller to cancel any outstanding fetches, part of the internal state should include an `isLoading`, `error` 
##### ##### **Strong Answer Should Include:**

- IntersectionObserver for scroll detection
- Proper ref handling with useRef
- Cleanup in useEffect return
- Race condition handling (abort previous requests)
- Loading states, error boundaries consideration
- Memory leak prevention
- TypeScript generics for type safety
- **Red flags:** No cleanup, synchronous assumptions, missing edge cases

---

### 6. [Sr] [React] - Code Review Challenge

**Question:** Review this React component and identify all issues (performance, accessibility, security, best practices):

```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  });
  
  return (
    <div onClick={() => setUser({...user, active: true})}>
      <img src={user.avatar} />
      <div dangerouslySetInnerHTML={{__html: user.bio}} />
      {user.posts.map((post, i) => (
        <div key={i}>{post.title}</div>
      ))}
    </div>
  );
}
```

Response
> @Fran 
> First the `useEffect` needs dependency array, with out that it would create an infinite loop. I would also add a clean up function for when the fetch hasn’t finished and the component gets unmounted via a return method. With that done I would also add a `loading` state and an error state so we can correctly render a loading UI or communicate the error. For the error state we should populate it with the error returned by adding a  catch clause on the `fetch`.
> The main `div` with `onClick` is too generic for good a11y. I would use a button with an aria-label. Also the setUser should use the previews user instead of the stale user state, buy using it like `setUser(prevUser => { ...prevUser, active: true})`.
> Given we now have the `loading` state we can check for both the loading and the existence of the user object.
> Image should have alt-text and I would suggest also adding loading=lazy for optimization if the avatar is below the fold. Also we should make sure to check the existence of the `.avatar` key and value on the user object and if not fallback to a default image.
> On the bio div, once again, I would check with optional chaining if `.bio` exists. We should also not use `dangerouslySetInnerHTML` for user provided content given its a huge vulnerability, for this kind of content the correct procedure would be to sanitize it before rendering. I would also change the tag for a more semantic one, maybe an article or section.
> Finally on the user post list we should first make sure the user has any post and render an empty state if not and the I would replace the key for a more stable one, potentially post.id
##### **Strong Answer Should Include:**

- Missing dependency array (infinite loop)
- No error/loading states
- XSS vulnerability with dangerouslySetInnerHTML
- Missing alt text on image
- Non-semantic div click handler (accessibility)
- Array index as key (performance issue)
- No null check before accessing user properties
- Suggestions: TypeScript, proper error boundaries, sanitization
- **Red flags:** Missing security issues, only surface-level observations

---

### 7. [Sr] [Next.js] - API Route Optimization

**Question:** You have a Next.js API route that aggregates data from 5 different microservices, taking 3+ seconds to respond. The data changes infrequently. Design an optimal caching and data-fetching strategy using Next.js features.

**Expected discussion/pseudocode:**

```typescript
// Current slow implementation
export async function GET(request: Request) {
  const [users, posts, comments, analytics, metadata] = await Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchComments(),
    fetchAnalytics(),
    fetchMetadata()
  ]);
  
  return Response.json({ users, posts, comments, analytics, metadata });
}

// Optimize this
```


##### **Strong Answer Should Include:**

- `revalidate` option for time-based ISR
- On-demand revalidation with `revalidatePath`/`revalidateTag`
- Edge caching with appropriate headers
- Parallel vs sequential fetching strategy
- Streaming responses for progressive loading
- Redis/CDN layer discussion
- Monitoring and cache invalidation strategy
- **Red flags:** Only suggesting client-side caching, ignoring Next.js native features

---

### 8. [Sr] [React] - Complex Form State Management

**Question:** Implement a multi-step wizard form (3+ steps) with validation, persistent state (survives refresh), conditional fields, and the ability to go back/forward. Discuss your state management approach and validation strategy.

## Architecture Overview

I'd build a 3-step registration wizard using **React Hook Form + Zod + sessionStorage**, structured as a state machine to prevent invalid transitions.

typescript

```typescript
// Form schema with progressive validation
const stepSchemas = {
  1: z.object({
    email: z.string().email(),
    password: z.string().min(8).regex(/^(?=.*[A-Z])(?=.*\d)/),
  }),
  2: z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    age: z.number().min(18),
  }),
  3: z.object({
    acceptTerms: z.literal(true),
    newsletter: z.boolean().optional(),
    // Conditional: only required if age > 65
    insuranceProvider: z.string().optional(),
  }),
};

type WizardData = z.infer<typeof stepSchemas[1]> & 
                  z.infer<typeof stepSchemas[2]> & 
                  z.infer<typeof stepSchemas[3]>;
```

## State Management Strategy

**Why sessionStorage over localStorage:**

- Auto-clears on tab close (security)
- Prevents stale multi-device conflicts
- Still survives refresh

typescript

```typescript
const useWizardState = () => {
  const [currentStep, setCurrentStep] = useState(() => 
    Number(sessionStorage.getItem('wizardStep')) || 1
  );
  
  const { register, handleSubmit, watch, formState } = useForm<WizardData>({
    resolver: zodResolver(stepSchemas[currentStep]),
    defaultValues: JSON.parse(sessionStorage.getItem('wizardData') || '{}'),
    mode: 'onTouched', // Validate after field blur, not on every keystroke
  });

  // Persist on every change with debouncing
  const formData = watch();
  useEffect(() => {
    const timer = setTimeout(() => {
      sessionStorage.setItem('wizardData', JSON.stringify(formData));
      sessionStorage.setItem('wizardStep', String(currentStep));
    }, 300);
    return () => clearTimeout(timer);
  }, [formData, currentStep]);
};
```

## Validation Strategy

**Per-step validation** prevents overwhelming users:

- Step 1-2: Validate on blur (`mode: 'onTouched'`)
- Step 3: Validate on submit only (consent flows feel less intrusive)

**Conditional fields** handled via watched values:

typescript

```typescript
const age = watch('age');
const needsInsurance = age && age > 65;

// Dynamic schema
const step3Schema = needsInsurance 
  ? stepSchemas[3].extend({ 
      insuranceProvider: z.string().min(1, 'Required for 65+') 
    })
  : stepSchemas[3];
```

## Navigation & State Machine

typescript

```typescript
type WizardState = 'STEP_1' | 'STEP_2' | 'STEP_3' | 'SUBMITTING' | 'ERROR';

const transitions = {
  STEP_1: { next: 'STEP_2' },
  STEP_2: { next: 'STEP_3', prev: 'STEP_1' },
  STEP_3: { prev: 'STEP_2', submit: 'SUBMITTING' },
};

const goNext = async () => {
  const isValid = await trigger(); // RHF validation
  if (!isValid) return;
  
  setCurrentStep(prev => 
    Math.min(prev + 1, 3)
  );
};

// Navigation guard
useEffect(() => {
  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    if (Object.keys(formData).length > 0) {
      e.preventDefault();
    }
  };
  window.addEventListener('beforeunload', handleBeforeUnload);
  return () => window.removeEventListener('beforeunload', handleBeforeUnload);
}, [formData]);
```

## Error Recovery & Edge Cases

**localStorage quota exceeded:**

typescript

```typescript
const safeStore = (key: string, value: string) => {
  try {
    sessionStorage.setItem(key, value);
  } catch (e) {
    if (e.name === 'QuotaExceededError') {
      sessionStorage.clear(); // Clear and retry
      sessionStorage.setItem(key, value);
    }
  }
};
```

**Browser back button:**

typescript

```typescript
useEffect(() => {
  const handlePopState = () => {
    const savedStep = Number(sessionStorage.getItem('wizardStep'));
    setCurrentStep(savedStep || 1);
  };
  window.addEventListener('popstate', handlePopState);
}, []);
```

## Accessibility Implementation

tsx

```tsx
<form 
  role="region" 
  aria-label={`Step ${currentStep} of 3`}
  onSubmit={handleSubmit(onSubmit)}
>
  <div role="group" aria-labelledby="step-title">
    <h2 id="step-title" tabIndex={-1} ref={stepTitleRef}>
      Account Details
    </h2>
    {/* Focus title on step change */}
  </div>

  {/* Progress bar */}
  <div role="progressbar" aria-valuenow={currentStep} aria-valuemax={3}>
    {currentStep}/3 Complete
  </div>

  {/* Announce errors to screen readers */}
  <div role="alert" aria-live="polite">
    {errors.email?.message}
  </div>
</form>
```

**Focus management:**

typescript

```typescript
useEffect(() => {
  stepTitleRef.current?.focus();
  // Announce step change
  announceToScreenReader(`Step ${currentStep} of 3`);
}, [currentStep]);
```

## Performance Optimizations

- Lazy load step components: `const Step3 = lazy(() => import('./Step3'))`
- Debounce sessionStorage writes (300ms)
- Memoize validation schemas: `useMemo(() => stepSchemas[currentStep], [currentStep])`

## Why This Approach

**React Hook Form over Formik:**

- 50% smaller bundle (~9kb vs 18kb)
- Uncontrolled inputs = fewer re-renders
- Better TypeScript inference

**Zod over Yup:**

- TypeScript-first (infer types from schema)
- Better error messages out of the box
- Tree-shakeable

**sessionStorage over URL params:**

- Handles complex objects (files, dates)
- Doesn't expose sensitive data in URL
- Better UX (clean URLs)
##### **Strong Answer Should Include:**

- State persistence: sessionStorage/localStorage or URL params
- Validation libraries: React Hook Form, Formik, or Zod
- Wizard state machine pattern
- Partial validation per step
- Error handling and recovery
- Accessibility (ARIA landmarks, focus management)
- TypeScript for type-safe form data
- **Red flags:** Over-complicated solutions, no persistence strategy, poor UX handling

---

## Behavioral/Scenario Questions (20%)

### 9. [Sr] [React, Next.js] - Migration Leadership

**Question:** Tell me about a time when you led a significant technical migration or refactoring (e.g., migrating from Create React App to Next.js, or upgrading React versions). How did you plan it, handle risks, and ensure team buy-in?

##### **Strong Answer Should Include:**

- Clear business justification for migration
- Incremental migration strategy (strangler fig pattern)
- Risk mitigation: feature flags, parallel running
- Team communication and documentation
- Measuring success (performance metrics, developer experience)
- Handling unexpected challenges
- **Red flags:** Big bang rewrites, no metrics, lack of stakeholder management

---

### 10. [Sr] [Cross-functional] - Performance Crisis Management

**Question:** You're two weeks before a major product launch when monitoring shows that Core Web Vitals have degraded significantly on mobile devices. The CEO is asking for daily updates. Walk me through how you would handle this situation.

##### **Strong Answer Should Include:**

- Immediate triage: identify critical vs. nice-to-have fixes
- Measurement: RUM vs lab data, prioritize real user impact
- Quick wins: image optimization, code splitting, font loading
- Communication: transparent updates, realistic timelines
- Team coordination: pairing with backend/infra if needed
- Balancing quality vs. deadline pressure
- Post-mortem and prevention strategies
- **Red flags:** Panic responses, working in isolation, no prioritization

---

### 11. [Sr] [Collaboration] - Technical Debt & Stakeholder Management

**Question:** Your team has accumulated significant technical debt in the React codebase (legacy class components, inconsistent patterns, poor type safety). How would you advocate for addressing this debt while balancing feature delivery pressure from product management?

##### **Strong Answer Should Include:**

- Quantifying impact: developer velocity, bug rates, onboarding time
- Incremental approach: boy scout rule, allocating X% sprint capacity
- Business case: cost of delay, maintenance burden
- Visibility: tech debt tracking, regular demos
- Compromise: refactoring alongside features
- Setting boundaries and saying no when appropriate
- **Red flags:** All-or-nothing thinking, inability to compromise, poor business justification

---

## Bonus Advanced Question

### 12. [Sr] [React, Next.js] - Architectural Design

**Question:** Design the frontend architecture for a real-time collaborative document editor (think Google Docs-lite) using React and Next.js. Address: state synchronization, conflict resolution, offline support, performance at scale (100+ concurrent editors), and deployment strategy.

##### **Strong Answer Should Include:**

- Real-time: WebSockets or Server-Sent Events
- CRDT (Conflict-Free Replicated Data Types) or OT (Operational Transformation)
- Optimistic UI updates
- Offline-first with service workers
- State management for collaborative cursors/selections
- Next.js API routes as WebSocket gateway or Edge functions
- Horizontal scaling considerations
- Performance: virtualization, debouncing, web workers
- **Red flags:** Naive polling solutions, ignoring conflict resolution, no offline strategy

---

## Scoring Framework

**For each question, evaluate:**

- **Technical Depth (40%):** Demonstrates deep understanding beyond surface knowledge
- **Trade-off Analysis (30%):** Can articulate pros/cons and context-dependent decisions
- **Real-world Experience (20%):** References actual projects, lessons learned, production challenges
- **Communication (10%):** Explains clearly, adjusts technical level for audience

**Overall Assessment:**

- **Strong Senior Candidate:** Answers 8+ questions comprehensively, shows system-level thinking, acknowledges complexity
- **Mid-Senior:** Answers 6-7 questions well but lacks depth on architecture/leadership aspects
- **Needs Growth:** Struggles with trade-offs, focuses only on happy path, limited production experience
  
---
---
# Key Concepts & Study Points - Senior Frontend Engineer (React/Next.js)

## 1. Next.js Rendering Strategies

### Core Concepts

- **SSR (Server-Side Rendering)**: Per-request HTML generation
- **SSG (Static Site Generation)**: Build-time page generation
- **ISR (Incremental Static Regeneration)**: On-demand cache revalidation
- **RSC (React Server Components)**: Server-rendered component tree

### Study Points

- When to use each strategy (personalization vs. performance vs. freshness)
- Performance metrics: TTFB, FCP, LCP implications
- Caching strategies and invalidation patterns
- Data fetching in each paradigm
- Bundle size impact of RSC

---

## 2. React Performance Optimization

### Core Concepts

- **Re-render Prevention**: React.memo, useMemo, useCallback
- **Code Splitting**: Dynamic imports, lazy loading, route-based splitting
- **Virtualization**: Rendering only visible items in large lists
- **Concurrent React**: useTransition, useDeferredValue, Suspense

### Study Points

- React DevTools Profiler usage
- Chrome Performance tab analysis
- Identifying unnecessary re-renders
- Memoization trade-offs (when NOT to use)
- Bundle analysis tools (webpack-bundle-analyzer, Next.js analyzer)
- List virtualization libraries (react-window, react-virtualized)
- Web Workers for heavy computation

---

## 3. Next.js Edge Computing & Middleware

### Core Concepts

- **Edge Functions**: Code running at CDN edge locations
- **Middleware**: Request interception before routing
- **Edge Runtime**: Subset of Node.js APIs, faster cold starts

### Study Points

- Middleware use cases: A/B testing, auth, redirects, rewrites
- Edge runtime limitations (no fs, limited Node.js APIs)
- NextResponse.rewrite() vs redirect() vs next()
- Cookie and header manipulation
- Geo-location based routing
- Performance considerations at edge

---

## 4. State Management Patterns

### Core Concepts

- **Context API**: Built-in React state sharing
- **Redux**: Predictable state container with actions/reducers
- **Zustand/Jotai**: Lightweight atomic state
- **Server State**: React Query, SWR, TanStack Query

### Study Points

- When to use each solution
- Context re-render pitfalls and optimization
- Redux middleware, DevTools, RTK Query
- Server state vs. client state separation
- Cache invalidation strategies
- Optimistic updates
- State normalization patterns

---

## 5. Custom Hooks Best Practices

### Core Concepts

- **Hook Rules**: Only call at top level, only in React functions
- **Cleanup**: Returning functions from useEffect
- **Refs**: useRef for mutable values, DOM references
- **Race Conditions**: Handling async operations safely

### Study Points

- IntersectionObserver API
- AbortController for request cancellation
- Memory leak prevention
- TypeScript generics in hooks
- Dependency arrays and exhaustive-deps ESLint rule
- Error boundary integration
- Testing custom hooks (React Testing Library)

---

## 6. Code Quality & Security

### Security Vulnerabilities

- **XSS (Cross-Site Scripting)**: dangerouslySetInnerHTML, user input sanitization
- **CSRF**: Token validation, SameSite cookies
- **Dependency vulnerabilities**: npm audit, Snyk

### Best Practices

- **Accessibility**: ARIA attributes, semantic HTML, keyboard navigation
- **React keys**: Proper unique keys (not array indices)
- **Error handling**: Error boundaries, loading states, null checks
- **TypeScript**: Type safety, interfaces, generics

### Study Points

- DOMPurify for HTML sanitization
- Content Security Policy (CSP)
- WCAG 2.1 guidelines
- axe DevTools, Lighthouse accessibility audits
- ESLint + Prettier configuration
- Husky for pre-commit hooks

---

## 7. API & Data Fetching Optimization

### Core Concepts

- **Caching Strategies**: Time-based, tag-based, stale-while-revalidate
- **Revalidation**: On-demand, time-based, background
- **Streaming**: Progressive data loading
- **Parallel vs. Sequential**: Request waterfall optimization

### Study Points

- Next.js `revalidate` option
- `revalidatePath()` and `revalidateTag()`
- HTTP cache headers (Cache-Control, ETag)
- CDN configuration (Vercel, Cloudflare)
- Redis for application-level caching
- GraphQL data loading patterns (if applicable)
- Monitoring: Sentry, DataDog, New Relic

---

## 8. Form Management

### Core Concepts

- **Form Libraries**: React Hook Form, Formik, Final Form
- **Validation**: Zod, Yup, Joi
- **State Persistence**: localStorage, sessionStorage, URL params
- **Wizard Patterns**: Multi-step forms, state machines

### Study Points

- Controlled vs. uncontrolled components
- Field-level vs. form-level validation
- Debouncing input validation
- File upload handling
- XState for complex form flows
- Accessibility in forms (labels, error announcements)
- Form submission error recovery

---

## 9. Real-Time & Collaborative Features

### Core Concepts

- **WebSockets**: Bidirectional real-time communication
- **Server-Sent Events (SSE)**: Server-to-client streaming
- **CRDTs**: Conflict-Free Replicated Data Types
- **OT**: Operational Transformation
- **Optimistic UI**: Immediate feedback before server confirmation

### Study Points

- Socket.io vs. native WebSockets
- Pusher, Ably (managed solutions)
- Yjs, Automerge (CRDT libraries)
- Offline-first architecture
- Service Workers for offline support
- IndexedDB for client-side storage
- Conflict resolution strategies

---

## 10. Architecture & System Design

### Core Concepts

- **Micro-frontends**: Independent deployable frontend modules
- **Monorepo**: Turborepo, Nx, pnpm workspaces
- **Design Systems**: Component libraries, theming
- **Build Optimization**: Tree shaking, minification, compression

### Study Points

- Module federation (Webpack 5)
- Shared component libraries
- CSS-in-JS vs. CSS Modules vs. Tailwind
- Asset optimization (images, fonts, videos)
- Progressive Web Apps (PWA)
- Browser compatibility and polyfills
- Deployment strategies (blue-green, canary)

---

## 11. Testing Strategies

### Core Concepts

- **Unit Testing**: Jest, Vitest
- **Component Testing**: React Testing Library
- **E2E Testing**: Playwright, Cypress
- **Visual Regression**: Percy, Chromatic

### Study Points

- Testing Library best practices (queries, user events)
- Mocking API calls (MSW - Mock Service Worker)
- Testing hooks in isolation
- Snapshot testing (when appropriate)
- Code coverage metrics
- CI/CD integration
- Accessibility testing automation

---

## 12. Performance Monitoring & Metrics

### Core Concepts

- **Core Web Vitals**: LCP, FID/INP, CLS
- **Performance API**: Navigation Timing, Resource Timing
- **RUM (Real User Monitoring)**: Actual user experience data
- **Lab Testing**: Lighthouse, WebPageTest

### Study Points

- Chrome DevTools Performance panel
- React Profiler API
- Bundle size tracking over time
- Performance budgets
- Synthetic monitoring vs. RUM
- Field data (CrUX) vs. lab data
- Alerting on performance regressions

---

## 13. Soft Skills & Leadership

### Core Concepts

- **Technical Debt Management**: Quantifying, prioritizing, communicating
- **Migration Planning**: Incremental strategies, risk mitigation
- **Stakeholder Communication**: Translating technical to business value
- **Mentoring**: Code reviews, pairing, knowledge sharing

### Study Points

- Writing technical RFCs (Request for Comments)
- Creating decision documentation (ADRs - Architecture Decision Records)
- Running effective retrospectives
- Balancing quality vs. speed
- Building business cases for technical work
- Incident response and postmortems
- Cross-functional collaboration (design, product, backend)

---

## 14. Developer Experience (DX)

### Core Concepts

- **Tooling**: ESLint, Prettier, TypeScript strict mode
- **Documentation**: Storybook, TSDoc, README standards
- **Automation**: GitHub Actions, pre-commit hooks
- **Observability**: Logging, error tracking, analytics

### Study Points

- Setting up monorepo tooling
- Creating component libraries
- Automating dependency updates (Renovate, Dependabot)
- Setting up local development environments
- Docker for consistency
- Hot module replacement (HMR) optimization

---

## Priority Study Areas by Difficulty

### Must Master (80% of interviews)

1. React hooks and custom hook creation
2. Next.js rendering strategies (SSR/SSG/ISR)
3. Performance profiling and optimization
4. State management patterns
5. Security best practices

### Should Know Well (60% of interviews)

6. Edge functions and middleware
7. Form management and validation
8. API optimization and caching
9. TypeScript advanced patterns
10. Testing strategies

### Good to Understand (40% of interviews)

11. Real-time communication
12. System architecture design
13. Migration strategies
14. Micro-frontends
15. Performance monitoring tools

---

## Recommended Practice Projects

1. **Build a dashboard** with data visualization, infinite scroll, and real-time updates
2. **Create a form wizard** with validation, persistence, and conditional logic
3. **Optimize a slow app** using profiling tools and implement fixes
4. **Set up a Next.js project** with all rendering strategies demonstrated
5. **Implement A/B testing** using middleware and edge functions