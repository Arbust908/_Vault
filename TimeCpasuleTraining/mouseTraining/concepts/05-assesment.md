Average: 2.8/5
You understand the main concepts, especially separation of logic, evidence-based optimization, keyboard access, and test-driven iteration. To reach a senior-level answer, be more precise about tradeoffs, APIs, measurement tools, and production constraints. Avoid absolute rules such as “components should be as small as possible.”
1. Component Boundaries: 3/5
What is correct
- You recognize that component boundaries depend on context.
- You consider responsibility, state sharing, prop drilling, and reuse.
- You aim for a balance between monolithic components and excessive wrappers.
What is missing
The goal is not to make components as small as possible. A component should represent a cohesive responsibility. Good boundaries often occur where:
- A section has its own state or behavior.
- A section changes for different reasons from its parent.
- A meaningful UI concept can be named.
- Logic can be tested independently.
- Rendering performance requires isolation.
- The component is reused, although reuse is not required.
Prop drilling is not automatically evidence of a bad boundary. A few explicit props are often clearer than context or global state.
Proposed answer
I extract a component when a section has a cohesive responsibility, meaningful behavior, independent state, or a reason to change separately. Reuse is useful evidence, but not a requirement. I avoid extracting wrappers that only rename markup without improving readability, testing, ownership, or performance. I keep state near the components that use it and accept limited prop passing when it keeps data flow explicit.
2. Custom Hooks vs. Presentational Components: 3/5
What is correct
- Hooks can hide complex work behind a smaller interface.
- Reusable stateful behavior is a good hook candidate.
- One-off logic does not automatically require extraction.
What is missing
The fundamental distinction is:
- A custom hook encapsulates stateful behavior and React lifecycle integration.
- A component owns rendering, composition, and user-facing interaction.
Hooks are not only for producing one or two final values. They can expose state, actions, status, and refs. A hook may also be worthwhile without reuse if it creates a strong separation between domain behavior and rendering.
Presentational components may still have local UI state, such as whether a tooltip or disclosure is open.
Proposed answer
A custom hook should encapsulate stateful behavior, effects, subscriptions, or coordination with browser and external APIs. A presentational component should primarily translate props and UI state into accessible markup and interactions. I extract a hook when the behavior is reusable or when separating it significantly improves clarity and testing, but I avoid creating hooks that merely move a few lines out of a component.
3. useMemo and useCallback: 3/5
What is correct
- Memoization should be driven by evidence rather than habit.
- Memoization has runtime and maintenance costs.
- The React Compiler can reduce the need for manual memoization.
Corrections
- useMemo memoizes a computed value, not a component.
- useCallback preserves a function reference, not the result of calling the function.
- React.memo memoizes component rendering based on props.
- Frequency of use is not enough to justify memoization.
Typical justifications include:
- An expensive calculation appears in profiling.
- Stable object or function identity is required by a memoized child.
- Referential stability is required by another hook or external API.
The React Compiler does not mean developers never need to consider memoization. It must be enabled, and manual memoization can remain necessary in particular cases.
Proposed answer
I use useMemo for a measured expensive computation or when stable object identity is necessary. I use useCallback when function identity affects a memoized child, hook dependency, or external subscription. Adding them by default introduces dependency management, comparison work, memory retention, stale-closure risks, and cognitive overhead. With the React Compiler enabled, many routine cases can be optimized automatically, but profiling and understanding referential identity still matter.
4. Testing Calculator State Transitions: 4/5
What is correct
- Extracting calculator transitions into pure functions is the right approach.
- Pure logic can be tested without rendering UI.
- UI tests can separately verify event wiring and displayed results.
What would strengthen it
Model the calculator as a reducer or explicit state-transition function:
nextState = calculatorReducer(currentState, action)
Tests should cover transitions such as:
- Entering the first number.
- Choosing an operator.
- Entering the second number.
- Evaluating the expression.
- Repeated decimal input.
- Division by zero.
- Clearing or deleting.
- Starting a new expression after a result.
Proposed answer
I would model the calculator as a pure reducer that accepts the current calculator state and an action such as digitPressed, operatorPressed, or equalsPressed. Unit tests can then verify transition tables without rendering React. Separate component tests would verify that clicking or pressing a key dispatches the correct action and renders the resulting state.
5. Accessibility Checks: 3/5
What is correct
- You considered keyboard operation.
- You mentioned semantic HTML and accessible names.
- You considered both Enter and Escape behavior.
Corrections and additions
Use native buttons for calculator keys before adding ARIA. Special symbols need accessible names, such as “divide” rather than relying only on ÷.
For a calculator, verify:
- Every control is reachable and operable by keyboard.
- Focus is visible and follows a logical order.
- Results and errors are announced appropriately.
- Color is not the only way to communicate meaning.
- Text contrast and touch-target sizes are sufficient.
- Keyboard shortcuts do not interfere with typing or browser shortcuts.
For searchable results, keyboard behavior depends on the interaction pattern. A simple list of links may use normal Tab navigation. A combobox/listbox generally uses arrow keys to move between options and Enter to select. Tab should usually leave the widget, not move through every listbox option.
Use ARIA only where native HTML does not provide the required semantics. Also, the correct spelling is ARIA, not “area.”
Proposed answer
I would begin with native inputs, buttons, links, and lists. I would test keyboard-only operation, visible focus, accessible names, screen-reader announcements, contrast, zoom, and touch-target size. For searchable suggestions, I would implement the established combobox pattern: arrow keys navigate options, Enter selects, Escape closes, and ARIA communicates the expanded state and active option.
6. Profiling a Slow React Screen: 2/5
What is correct
- Browser performance and network tools are useful.
- Third-party scripts and large resources can affect responsiveness.
- Lighthouse can identify broad page-level issues.
Corrections
The Chrome tool is a flame chart, not a candle chart. More importantly, the primary React-specific tool is the React DevTools Profiler.
A slow screen may result from:
- Excessive React renders.
- A single expensive render.
- Expensive effects or layout work.
- Large lists.
- Network latency.
- Large JavaScript bundles.
- Main-thread blocking.
- Layout thrashing or expensive painting.
Lighthouse is useful for broad performance auditing, but it is not the main tool for diagnosing unnecessary React renders.
Proposed answer
First, I would reproduce the slowdown consistently and define the interaction being measured. I would profile a production build with React DevTools to identify slow commits, frequently rendered components, and why they rendered. I would then use Chrome Performance to inspect scripting, layout, paint, and long tasks, and Network tools to separate rendering problems from data-fetching or bundle problems. I would optimize only the measured bottleneck and profile again to verify the improvement.
7. TDD in a One-Hour Exercise: 3/5
What is correct
- Clarifying expected behavior is essential.
- You understand the test-first implementation cycle.
- You would include edge cases and manual verification.
What is missing
TDD is specifically the repeated red, green, refactor loop:
1. Write one small failing test.
2. Implement the minimum required to pass it.
3. Refactor while keeping tests green.
4. Repeat for the next behavior.
Do not try to design a “perfect” happy-path test suite before writing implementation. In a one-hour exercise, prioritize representative domain behavior and communicate which production concerns are intentionally deferred.
Proposed answer
I would clarify the acceptance criteria, identify the smallest meaningful behavior, and write one failing test for it. I would implement the minimum code to pass, refactor if necessary, and repeat with the next behavior and one or two important edge cases. I would keep the UI thin and test domain transitions directly. Because the exercise is time-boxed, I would explicitly state which additional cases and integration tests I would add in production.
8. Deliberate Production Simplification: 1/5
Your answer describes a normal refactoring that preserves behavior. The question is asking how you would explain a shortcut used during the exercise that is intentionally insufficient for production.
Examples include:
- Keeping data in memory instead of persistent storage.
- Using client-side filtering instead of server-side search.
- Omitting retries or cancellation.
- Supporting a small data set with an algorithm that will not scale.
- Using basic error handling.
- Skipping localization, telemetry, or comprehensive accessibility testing.
A strong answer should explain:
- What was simplified.
- Why it was reasonable under the current constraints.
- What risk or limitation it introduces.
- What production replacement you would use.
- What evidence would trigger or validate that replacement.
Proposed answer
For this exercise, I used client-side filtering because the data set is small and it keeps the implementation focused on the requested interaction. In production, this would not scale to a large or frequently changing data set. I would replace it with debounced, cancellable server-side search with pagination, loading and error states, and request observability. I would also add tests for stale responses and keyboard accessibility. The simplification is deliberate and isolated, so replacing it would not require rewriting the presentation layer.
Highest-Priority Improvements
1. Use precise React terminology: useMemo, useCallback, React.memo, React Profiler, and flame chart.
2. Explain decisions using tradeoffs rather than general rules.
3. Distinguish browser performance, React rendering, and network performance.
4. Discuss production limitations explicitly when defending shortcuts.
5. Structure verbal answers as: decision, rationale, tradeoff, verification.