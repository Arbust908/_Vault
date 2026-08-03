# Attempt Notes

## Diagnosis
- The use effect with no dependency sounds wrong
- The keys array smells
- we should separate the logic of the expression from it's UI
- concerning history we could use the `(prev) =>` pattern to better handle the state updates
- There is no gouard for multiple symbols in a row.
- We need to catch the `/0` case and return some error message instead of `Infinity` or `NaN`
- we need to add hotkey bindings for the calculator keys

## Assumptions

## Fixes made

## Tests and manual checks
