# Mock 1: React Calculator Debugging

## Interview prompt

The repository contains a calculator used by a streaming subscription team. Make it correct, predictable, accessible, and easy to extend. You may change the state model and component boundaries, but do not add a state-management library.

Start by running the app in `broken/` and manually exercising it. Do not inspect a solution: there is intentionally no completed solution. `eval` is ok to use in this exercise to keep it simple.

## Required behavior

- Enter integers and decimal numbers.
- Support `+`, `-`, `*`, and `/`.
- Prevent malformed expressions such as repeated operators or multiple decimals in one number.
- Clear the current calculation.
- Evaluate repeated operations consistently.
- Show a useful result for division by zero instead of `NaN` or `Infinity`.
- Keep a history of completed calculations.
- Support keyboard input and usable labels for assistive technology.

## Review prompts

- Which values are source state and which values can be derived during render?
- Where can a stale closure occur?
- Which updates need the functional form of a state setter?
- What state machine would make invalid transitions impossible?
- Which tests would you add before changing the implementation?

## Start

```sh
cd broken
npm install
npm run dev
```

Make your changes in `solution/`, not `broken/`.
