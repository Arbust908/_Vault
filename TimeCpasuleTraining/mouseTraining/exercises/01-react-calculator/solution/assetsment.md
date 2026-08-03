# React Calculator Assessment

## Overall assessment

This is a solid first debugging pass. The central React problems were recognized and several behaviors were improved, but the solution does not yet satisfy the complete interview prompt.

- **Diagnosis:** Good junior-to-mid instincts, but the reasoning needs more precision for a senior interview.
- **Implementation:** Partially correct, with important required behaviors still missing.
- **Interview readiness:** Promising, but the notes need clearer reasoning, explicit tradeoffs, and verification.
- **Approximate completion:** 60%.

## What was done well

### 1. Removed unnecessary derived state

The broken version stores both `expression` and `result`, then attempts to synchronize them with an effect at `broken/src/App.tsx:15-26`.

The solution instead calculates the preview from `expression` during render:

```tsx
const result = expression ? previewCalculations(expression) : 0;
```

See `solution/src/App.tsx:77`.

This follows an important React principle: if a value can be calculated from current props or state during render, it usually should not be stored as separate state. It makes `expression` the source of truth and removes a synchronization problem.

### 2. Fixed direct state mutation

The broken implementation mutates the existing history array:

```tsx
history.unshift({ expression, result: value });
setHistory(history);
```

See `broken/src/App.tsx:32-33`.

The replacement is correct:

```tsx
setHistory((prevHistory) => [
  { expression, result: value },
  ...prevHistory,
]);
```

See `solution/src/App.tsx:90-93`.

This is an immutable update and correctly uses the functional setter because the next history depends on previous history.

### 3. Added malformed-input prevention

The solution now prevents:

- Operators at the beginning.
- Repeated operators.
- Operators immediately after a decimal point.
- Multiple decimals in one number.
- Multiple leading zero digits.
- Evaluation of expressions ending with an operator or decimal point.

Relevant code is at `solution/src/App.tsx:29-37` and `solution/src/App.tsx:98-116`.

This is a significant improvement over the broken implementation, which passes every expression directly to `eval`.

### 4. Handled non-finite arithmetic

The solution checks evaluation results with `Number.isFinite` at `solution/src/App.tsx:47` and `solution/src/App.tsx:63`.

That catches both `Infinity` and `NaN`. This is the correct domain-level check for division by zero and similar invalid results.

### 5. Added backspace and preserved the original exercise

The original `broken/` implementation remains unchanged, and the work is isolated in `solution/`, as requested. Backspace is also a useful extension that fits naturally with input correction.

## Important remaining problems

### 1. Keyboard support is missing

The prompt explicitly requires keyboard input. The notes recognize this at `solution/notes.md:10`, but no keyboard handler exists.

A complete solution should define mappings for:

- `0` through `9` and `.` to append input.
- `+`, `-`, `*`, and `/` to enter operators.
- `Enter` and `=` to evaluate.
- `Backspace` to delete the final character.
- `Escape` to clear.

The mouse and keyboard paths should share the same transition logic so their behavior cannot diverge.

### 2. The computed result disappears after equals

After a successful calculation, `press("=")` calls `clear()` at `solution/src/App.tsx:94`. Because `result` is derived from `expression`, clearing the expression immediately changes the main display to zero.

For example:

1. Enter `2+3`.
2. The preview displays `5`.
3. Press `=`.
4. History receives `2+3 = 5`.
5. The main display resets to `0`.

That is surprising calculator behavior. Usually the completed result remains visible and may become the starting operand for the next operation.

The requirement to "evaluate repeated operations consistently" also needs an explicit interpretation. It could mean chained expressions, continuing from a completed result, or repeating the previous operation by pressing equals again. A senior candidate should state the chosen behavior as an assumption rather than silently choosing one.

### 3. Accessibility is only partially addressed

The calculator section has `aria-label="Calculator"`, and the display uses `aria-live="polite"`. Both are useful.

However, the backspace button renders `<=` at `solution/src/App.tsx:146`. Its accessible name is likely announced as "less than equals," not "Backspace" or "Delete last digit."

The backspace button needs a usable accessible name. Operator buttons may also benefit from explicit names such as "Divide," "Multiply," and "Subtract."

### 4. `isValidExpression` has a misleading name

The function at `solution/src/App.tsx:29-37` only checks that the expression is non-empty and does not end with an operator or decimal point. It does not validate the whole expression.

For example, `isValidExpression("1++2")` returns `true` when called independently. The mouse UI currently prevents that sequence, but future keyboard input or another caller could bypass those guards.

The design should distinguish between:

- **Transition validation:** Whether a key is allowed from the current state.
- **Expression validation:** Whether the complete expression is valid.
- **Evaluation:** Producing a result from a valid expression.

### 5. Evaluation logic is duplicated

`previewCalculations` and `calculations` both call `eval`, catch errors, and check `Number.isFinite`. See `solution/src/App.tsx:39-71`.

The functions differ mainly in how they report failure and how preview removes invalid suffixes. This duplication creates two places whose behavior could diverge.

The notes say the expression logic should be separated from the UI, but this has only been partially achieved. The helpers are outside the component, yet remain in `App.tsx` and duplicate evaluation behavior. A small pure calculator module would make the behavior easier to test without rendering React.

### 6. Preview recursively hides invalid suffixes

The preview recursively removes characters at `solution/src/App.tsx:42` and `solution/src/App.tsx:53`.

Showing the result of `12` while the expression is `12+` can be a reasonable product decision, but it should be deliberate. The current behavior conflates a valid incomplete expression with a genuinely malformed expression. A clearer state model would represent these cases directly.

### 7. Expression updates still use captured state

Input and backspace use:

```tsx
setExpression(expression + key);
setExpression(expression.slice(0, -1));
```

See `solution/src/App.tsx:118` and `solution/src/App.tsx:127`.

Normal button clicks usually flush as separate interactions, so this often works. However, keyboard input, batching, or programmatic calls make captured-state updates more vulnerable. Since the next expression depends on the previous expression, a functional update or central transition function would be easier to reason about.

### 8. History uses index keys

History entries are prepended but rendered with `key={index}` at `solution/src/App.tsx:164-168`. Inserting at the front changes the identity of every existing row.

This is not currently causing visible damage because each entry is a simple paragraph. It could become a bug if rows later acquire state, focus, animation, or controls. Stable identity should be preferred when available.

The index key on the static keypad is less concerning because that list never changes order. Therefore, the note that "the keys array smells" is too vague: a static configuration array is a clean way to render the keypad.

### 9. Rejected actions rely on console messages

Invalid calculation, repeated operators, multiple decimals, and leading zeros are reported through `console.log` at `solution/src/App.tsx:87-113`.

Console output is not user feedback. Silently ignoring impossible transitions can be reasonable, but that should be an explicit decision. Invalid arithmetic should remain represented clearly in the visible interface.

### 10. There are no tests

No test files or test script exist. This is a substantial gap because the prompt explicitly asks which tests should be added before changing the implementation.

At minimum, the test plan should cover:

- Integer and decimal entry.
- One decimal per operand.
- Repeated-operator prevention.
- Operator precedence and chained expressions.
- Division by zero.
- Clear and backspace.
- Successful history insertion and ordering.
- Keyboard input.
- Accessible button names.
- Post-equals and repeated-equals behavior.

## Evaluation of the notes

The diagnosis contains good instincts, but it is incomplete and occasionally imprecise.

### "The use effect with no dependency sounds wrong"

The effect has an empty dependency array, so it runs once after mount. At that time `expression` is empty and the effect immediately returns. It never recalculates anything.

Merely adding `expression` to the dependency array is not the best correction. The stronger explanation is that the effect is unnecessary because the result is derived synchronously from the expression. Adding the dependency would repair synchronization, but removing duplicate state removes the synchronization problem entirely.

### "The keys array smells"

The array itself is static configuration and is not inherently a smell. More precise concerns could include:

- `key={index}` rather than a stable value.
- Keys being typed as arbitrary strings instead of a constrained union.
- Accessibility metadata being absent.
- Labels and behavior being encoded indirectly.

Senior explanations should name the precise concern rather than describing an entire construct as suspicious.

### "Separate the logic of the expression from its UI"

This is the correct direction. The important reasons are:

- Pure transitions can be tested without a browser.
- Invalid states can be prevented centrally.
- Mouse and keyboard input can share behavior.
- Rendering no longer owns arithmetic policy.

The possessive form is `its`, not `it's`.

### Functional history update

This diagnosis is correct. The notes should also state why: the next history depends on previous history, and React state must not be mutated.

### Missing diagnosis items

The notes should also identify:

- Direct history mutation in the broken version.
- Reuse of the same array reference in `setHistory(history)`.
- The uncaught `eval` in the equals branch.
- Derived result state drifting from expression.
- Incomplete accessibility labels.
- Missing keyboard behavior.
- Ambiguous post-equals behavior.
- Unstable index keys for prepended history.
- Missing tests and manual verification.

The empty `Assumptions`, `Fixes made`, and `Tests and manual checks` sections make the document look unfinished.

## Senior interview framing

A strong explanation of this exercise could sound like this:

> I first separated source state from derived values. The expression and completed history are source state; the preview result can be derived from the expression, so I removed the effect and separate result state. I then replaced the in-place history mutation with a functional immutable update. For input correctness, I would model key presses as transitions rather than relying on `eval` to reject malformed strings. That lets button and keyboard input share the same behavior. Finally, I would define the product semantics after equals and division by zero, add accessible names, and cover the transition logic with table-driven tests.

This explanation demonstrates React knowledge, state-model reasoning, product awareness, accessibility awareness, testability, and recognition of ambiguous requirements.

## Recommended next pass

1. Define post-equals and repeated-equals behavior in `notes.md`.
2. Move arithmetic and input transitions into a pure module.
3. Use one explicit evaluation result type instead of `number | string` and `number | false`.
4. Add keyboard handling through the same transition path as mouse input.
5. Add accessible operator and backspace labels.
6. Keep the completed result visible after equals.
7. Add unit tests for transitions and component tests for keyboard and history behavior.
8. Complete every section in `notes.md` with diagnosis, assumptions, fixes, tradeoffs, and verification.
