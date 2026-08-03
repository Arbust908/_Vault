Practice workspace: [Senior Software Engineer Practice](./README.md)

I found a **very relevant recent report that closely matches your process**, especially because it was for a **Senior Software Engineer role in Buenos Aires**.

## Most relevant Disney interview report

A candidate interviewed for Senior Software Engineer at Disney in February 2026 and reported three exercises:

1. **Debug an existing React calculator application**
2. **Model some data**
3. **Solve a TypeScript exercise involving consecutive modifications to queues and queries** ([Glassdoor][1])

That sounds extremely close to your announced structure:

* **1-hour Frontend Live Coding:** likely React debugging, component/state fixes, and feature implementation.
* **1-hour Full-stack Live Coding:** likely TypeScript data transformations, API/domain modeling, queues, request processing, or business logic.

Another Buenos Aires candidate in June 2026 reported a HackerRank technical challenge that had to be solved in **TypeScript**. They described the overall interview as difficult but positive. ([Glassdoor][2])

Separately, recent senior candidates reported live HackerRank coding and exercises such as implementing a `Set` without relying on built-in collection helpers. Another senior process included API optimization, rate-limiter tradeoffs, and system-design rounds. This suggests Disney may care more about clean fundamentals and engineering judgment than exotic algorithms. ([Glassdoor][2])

These are anonymous candidate reports, so they are useful signals rather than a guaranteed question bank.

# What I think you should expect

## 1-hour Frontend Live Coding

The strongest evidence points toward **working inside an existing React application**, rather than building an application from zero.

A plausible interview structure:

* 5 minutes: inspect the repository and requirements
* 10–20 minutes: find and explain bugs
* 20–30 minutes: implement or correct behavior
* 5–10 minutes: discuss testing, accessibility, performance, or refactoring

Likely topics:

### React state and rendering

Be completely comfortable with:

* Derived state versus stored state
* Functional state updates
* Stale closures
* Incorrect `useEffect` dependencies
* Controlled inputs
* Lifting state
* State immutability
* Lists and stable keys
* Conditional rendering
* Event propagation
* Component identity and unintended remounting

Expect bugs resembling:

```tsx
setCount(count + 1);
setCount(count + 1);
```

Or:

```tsx
useEffect(() => {
  fetchResults(query);
}, []);
```

Or mutating objects directly:

```tsx
items.push(newItem);
setItems(items);
```

You should immediately explain both the bug and the correction.

### React calculator

Since a calculator was specifically reported, practise one.

Potential requirements:

* Numeric input
* Operators
* Decimal handling
* Clear and reset
* Repeated operations
* Invalid expressions
* Keyboard support
* History
* Separating calculation logic from presentation

The important part is not the arithmetic. It is whether you model the state cleanly.

For example:

```ts
type Operator = "+" | "-" | "*" | "/";

type CalculatorState = {
  displayValue: string;
  accumulator: number | null;
  pendingOperator: Operator | null;
  waitingForOperand: boolean;
};
```

Be ready to explain why a small state machine is safer than several loosely related booleans.

### Data fetching

Practise implementing:

* Loading, success, empty and error states
* Request cancellation with `AbortController`
* Race-condition prevention
* Search debouncing
* Retry behavior
* Pagination
* Optimistic updates

A common live-coding task could be:

> Build a searchable list of Disney titles using an asynchronous API. Avoid showing stale responses when users type quickly.

### Senior-level frontend discussion

Disney’s current Buenos Aires frontend description emphasizes shared UI components, business logic, JavaScript/TypeScript code review, technical leadership, TDD and performance profiling. ([jobs.disneycareers.com][3])

Therefore, while coding, mention:

* Why you chose the component boundaries
* What belongs in a hook versus a component
* What you would test
* Accessibility implications
* Error handling
* Performance only where relevant
* How the code would evolve

Do not prematurely add `useMemo`, `useCallback` or abstractions. Explain when they would actually be justified.

---

# 1-hour Full-stack Live Coding

I would prepare for **TypeScript-centric application logic**, not necessarily a complete deployed React/Node application.

## Data modeling

Be ready to turn vague requirements into types:

```ts
type MovieId = string;

type Movie = {
  id: MovieId;
  title: string;
  releaseDate: string;
  genres: string[];
};

type WatchlistEntry = {
  movieId: MovieId;
  addedAt: Date;
  priority: number;
};
```

Practise explaining:

* Domain entities versus API DTOs
* Optional versus nullable fields
* Discriminated unions
* Runtime validation versus compile-time types
* Maps versus arrays
* Normalized versus nested data

For example:

```ts
type ProcessingResult<T> =
  | { status: "success"; value: T }
  | { status: "failure"; error: Error }
  | { status: "skipped"; reason: string };
```

## Queues and sequential operations

The reported “queues and consecutive queries” exercise is ambiguous, but likely possibilities include:

* Processing operations sequentially
* Applying commands to a queue
* Limiting concurrency
* Preserving result order
* Combining queued writes and reads
* Handling failures without corrupting state

Practise implementing a simple concurrency limiter:

```ts
async function mapWithConcurrency<T, R>(
  values: readonly T[],
  limit: number,
  worker: (value: T) => Promise<R>,
): Promise<R[]> {
  if (!Number.isInteger(limit) || limit < 1) {
    throw new Error("limit must be a positive integer");
  }

  const results = new Array<R>(values.length);
  let nextIndex = 0;

  async function runWorker(): Promise<void> {
    while (true) {
      const index = nextIndex++;

      if (index >= values.length) {
        return;
      }

      results[index] = await worker(values[index]);
    }
  }

  await Promise.all(
    Array.from(
      { length: Math.min(limit, values.length) },
      () => runWorker(),
    ),
  );

  return results;
}
```

Also practise:

* FIFO queue
* Priority queue fundamentals
* `Promise.all` versus sequential `await`
* Backpressure
* Retry with limits
* Idempotency
* Partial failures
* Ordering guarantees

## API design

You may be asked to implement or describe:

```ts
GET /titles?query=star&page=1
POST /watchlists/:id/items
DELETE /watchlists/:id/items/:titleId
```

Be ready to discuss:

* Input validation
* HTTP status codes
* Error shapes
* Pagination
* Authentication boundaries
* Transactionality
* Duplicate requests
* Database constraints
* Caching
* Logging and observability

A recent Disney senior report mentioned optimizing an API and discussing rate-limiter tradeoffs, so basic backend performance and reliability are worth reviewing. ([Glassdoor][2])

---

# Algorithms to study

I would **not** spend all your time grinding hard LeetCode.

Prioritize the fundamentals that translate well into TypeScript application exercises:

1. Arrays and strings
2. `Map` and `Set`
3. Queue and stack
4. Sorting and grouping
5. Two pointers
6. Sliding window
7. BFS for simple graphs or grids
8. Basic recursion
9. Intervals
10. Promise scheduling and concurrency

Practise questions such as:

* Implement a `Set`
* Group records by a property
* Merge overlapping intervals
* Process commands against an in-memory state
* Implement an LRU cache
* Deduplicate events while preserving order
* Run promises with maximum concurrency
* Build a retry queue
* Flatten and normalize nested API data
* Find the shortest path in a grid

One Disney candidate described a 60-minute backend coding round, while discussion around the process suggested difficulty could vary significantly by team. ([Reddit][4])

# React-specific preparation for you

Since most of your recent work is Vue/Nuxt, the largest risk probably is not general frontend engineering. It is **losing time translating Vue instincts into React syntax**.

Practise these React equivalents until they are automatic:

| Vue                   | React                                                  |
| --------------------- | ------------------------------------------------------ |
| `ref()`               | `useState()`                                           |
| `computed()`          | Derived value during render / occasionally `useMemo()` |
| `watch()`             | Usually event logic or `useEffect()`                   |
| `onMounted()`         | `useEffect(..., [])`                                   |
| Composable            | Custom hook                                            |
| `v-model`             | Controlled input                                       |
| Pinia store           | Context, reducer or external store                     |
| Template conditionals | JSX expressions                                        |
| `defineProps`         | Typed component props                                  |

The biggest adjustment is this:

> In React, `useEffect` should synchronize with an external system—not serve as the default replacement for every Vue watcher.

Be ready to recognize unnecessary effects and replace them with derived values or event handlers.

# Recommended practice sessions

## Mock 1 — React debugging

Start with a deliberately broken React calculator containing:

* Direct state mutation
* Incorrect effect dependencies
* Stale state updates
* Missing keys
* Derived state duplicated in state
* Incorrect decimal/operator behavior

Give yourself 60 minutes and narrate every decision.

## Mock 2 — Searchable catalogue

Build:

* Search input
* Debouncing
* Fetching
* Loading/error/empty states
* Request cancellation
* Sorting and filtering
* A selected-item detail panel

Use React and TypeScript without a state-management library.

## Mock 3 — Queue processor

Implement a service that receives:

```ts
type Command =
  | { type: "ADD"; id: string; value: number }
  | { type: "UPDATE"; id: string; value: number }
  | { type: "DELETE"; id: string }
  | { type: "GET"; id: string };
```

Process the commands sequentially and return a result for every command.

Then add:

* Validation
* Duplicate handling
* Async persistence
* Retry behavior
* Concurrency constraints

## Mock 4 — Small full-stack feature

Build a tiny watchlist:

* React client
* Node API
* In-memory repository
* Runtime validation
* Search and add/remove operations
* One unit test for domain logic
* One component test

Do not spend time styling it. Optimize for correctness, boundaries and communication.

# How to behave during the interview

At senior level, your narration is part of the result.

Use this sequence:

1. Restate the expected behavior.
2. Ask about ambiguous edge cases.
3. Describe the simplest viable model.
4. Implement the happy path.
5. Manually verify it.
6. Add important edge cases.
7. Discuss tests and production improvements.

Good narration:

> “I could optimize this with a map immediately, but the current dataset appears small. I’ll start with the simpler representation and isolate access behind a repository so it can change later.”

Also say when you are intentionally deferring something:

> “I’m keeping the API in this file for the exercise. In production I would separate transport validation, domain logic and persistence.”

Avoid silently coding for 20 minutes.

# Highest-priority study list

Based on the closest Disney report, I would allocate preparation roughly as follows:

* **35%:** React debugging and state modeling
* **25%:** TypeScript data modeling and transformations
* **20%:** Async behavior, queues and promises
* **10%:** Basic algorithms and data structures
* **10%:** Testing, API design and verbal tradeoffs

The single most useful exercise would be reproducing the reported interview: **debug a React calculator, model its domain cleanly, and then implement a sequential TypeScript command/query queue**.

[1]: https://www.glassdoor.com/Interview/Debuguear-una-app-de-React-tipo-calculadora-modelar-datos-ejercicio-en-TS-para-manejar-modificaciones-en-queues-y-queries-QTN_8816142.htm "Walt Disney Company Interview Question: Debuguear una app de React tipo calculadora, modelar datos, ejercicio en TS para manejar modificaciones en queues y queries consecutivas. | Glassdoor"
[2]: https://www.glassdoor.co.in/Interview/Walt-Disney-Company-Senior-Software-Engineer-Interview-Questions-EI_IE717.0%2C19_KO20%2C44.htm "Walt Disney Company Senior Software Engineer Interview Questions | Glassdoor"
[3]: https://jobs.disneycareers.com/job/buenos-aires/software-engineer-frontend/391/97922453264 "Software Engineer (Frontend) at DISNEY"
[4]: https://www.reddit.com/r/csMajors/comments/1cycf81/disney_backend_engineer_interview/ "Disney backend engineer interview  : r/csMajors"
