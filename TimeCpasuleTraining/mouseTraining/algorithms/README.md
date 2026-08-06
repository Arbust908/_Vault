# Algorithm Practice

Prepare for practical easy-to-medium algorithm problems in TypeScript, not obscure competitive-programming puzzles. These concrete exercises come from the study list in [`../initial.md`](../initial.md) and emphasize data transformations, queues, state management, debugging, and clean reasoning. Implement each starter file directly and state time and space complexity before optimizing.

Use [`practice-set.md`](./practice-set.md) for the final problem prompts and [`study-log.md`](./study-log.md) to record mistakes.

## Running tests

Run one exercise by passing part of its filename to Bun:

```sh
bun test 01-set
```

The root package script provides the equivalent command `pnpm test 01-set`. Run every algorithm suite with `bun test algorithms/tests` or `pnpm test algorithms/tests`.

The tests import the matching file in this directory, not `solutions/`. A starter's tests are expected to fail until it is implemented.

## Behavioral contract

The prompts leave several policies open. The shared tests use these decisions:

- `SimpleSet` uses SameValueZero equality, matching the native `Set` treatment of `NaN`, `0`, and `-0`.
- `groupBy` accepts string and number group values and throws `TypeError` for missing or unsupported values.
- `mergeIntervals` merges touching intervals and throws `RangeError` when an interval's start exceeds its end.
- `processCommands` returns one result per command. Successful adds, reads, updates, and deletes include the resulting or deleted value. Duplicate adds and operations on missing records fail with a non-empty error.
- `LruCache` requires a positive integer capacity. Reading or updating an entry makes it most recently used.
- `deduplicateEvents` keeps the first event for each ID and preserves input order.
- `mapWithConcurrency` requires a positive integer limit, preserves result order, and rejects when a worker rejects.
- `retry` requires a positive integer attempt count and a non-negative delay, throwing `RangeError` otherwise. It counts the first call as attempt 1, waits only between calls, and rethrows the most recent error.
- `normalizeTitles` uses the last occurrence when title or genre IDs repeat.
- `shortestGridPath` allows four-directional movement. Invalid points, blocked points, and unreachable destinations return `-1`; ragged grids throw `TypeError`.
- `twoSum` returns the first pair discovered from left to right, uses distinct indices, returns `null` when no pair exists, and does not mutate input.
- `groupAnagrams` is case-sensitive, keeps duplicate words, and preserves both first-group and member order.
- `lengthOfLongestSubstring` measures contiguous substrings by non-repeating UTF-16 code units.
- `isValidParentheses` accepts only `()`, `[]`, and `{}` input; the empty string is valid.
- `binarySearch` accepts a sorted input, returns any matching index or `-1`, and does not mutate input.
- `maxTreeDepth` counts the root as depth 1 and returns 0 for an empty tree.
- `levelOrder` groups values by depth and visits each level from left to right.
- `countIslands` uses four-directional adjacency without mutating input and throws `TypeError` for ragged grids.
- `canFinishCourses` requires a non-negative integer course count and in-range integer IDs. Duplicate edges are harmless, and invalid counts or IDs throw `RangeError`.
- `topKFrequent` requires an integer `k` from 0 through the number of distinct values, throwing `RangeError` otherwise. Frequency ties use first-seen order.
- `buildOrganizationTree` preserves root and sibling input order and returns copied nodes. Duplicate IDs, missing managers, self-references, and cycles throw `TypeError`.
- `mergePaginatedRecords` keeps the first occurrence of each ID in page and record order, treats numeric and string IDs as distinct, returns original record references, ignores cursors, and does not mutate input.
- `maximalSquareArea` returns the area of the largest all-1 square without mutating input. Empty grids return `0`, and ragged grids throw `TypeError`.

Ask clarifying questions, document assumptions, and test empty and invalid input even when a prompt does not prescribe a policy.

## Exercise catalog

### Original exercises

1. [`01-set.ts`](./01-set.ts) ([test](./tests/01-set.test.ts)): Implement a `Set` without built-in collection helpers.
2. [`02-group-records.ts`](./02-group-records.ts) ([test](./tests/02-group-records.test.ts)): Group records by a property.
3. [`03-merge-intervals.ts`](./03-merge-intervals.ts) ([test](./tests/03-merge-intervals.test.ts)): Merge overlapping intervals.
4. [`04-process-commands.ts`](./04-process-commands.ts) ([test](./tests/04-process-commands.test.ts)): Process commands against in-memory state.
5. [`05-lru-cache.ts`](./05-lru-cache.ts) ([test](./tests/05-lru-cache.test.ts)): Implement an LRU cache.
6. [`06-deduplicate-events.ts`](./06-deduplicate-events.ts) ([test](./tests/06-deduplicate-events.test.ts)): Deduplicate events while preserving order.
7. [`07-map-with-concurrency.ts`](./07-map-with-concurrency.ts) ([test](./tests/07-map-with-concurrency.test.ts)): Run promises with maximum concurrency.
8. [`08-retry-queue.ts`](./08-retry-queue.ts) ([test](./tests/08-retry-queue.test.ts)): Build a retry queue.
9. [`09-normalize-api-data.ts`](./09-normalize-api-data.ts) ([test](./tests/09-normalize-api-data.test.ts)): Flatten and normalize nested API data.
10. [`10-shortest-grid-path.ts`](./10-shortest-grid-path.ts) ([test](./tests/10-shortest-grid-path.test.ts)): Find the shortest path in a grid.

### Final practice set

11. [`11-two-sum.ts`](./11-two-sum.ts) ([test](./tests/11-two-sum.test.ts)): Find two distinct indices whose values meet a target sum.
12. [`12-group-anagrams.ts`](./12-group-anagrams.ts) ([test](./tests/12-group-anagrams.test.ts)): Group strings with the same character frequencies.
13. [`13-longest-substring-without-repeating.ts`](./13-longest-substring-without-repeating.ts) ([test](./tests/13-longest-substring-without-repeating.test.ts)): Find the longest contiguous substring without repeated code units.
14. [`14-valid-parentheses.ts`](./14-valid-parentheses.ts) ([test](./tests/14-valid-parentheses.test.ts)): Validate nested bracket pairs.
15. [`15-binary-search.ts`](./15-binary-search.ts) ([test](./tests/15-binary-search.test.ts)): Search a sorted numeric array.
16. [`16-maximum-tree-depth.ts`](./16-maximum-tree-depth.ts) ([test](./tests/16-maximum-tree-depth.test.ts)): Find the maximum root-to-leaf depth.
17. [`17-tree-level-order.ts`](./17-tree-level-order.ts) ([test](./tests/17-tree-level-order.test.ts)): Traverse a tree by level from left to right.
18. [`18-number-of-islands.ts`](./18-number-of-islands.ts) ([test](./tests/18-number-of-islands.test.ts)): Count four-directionally connected land regions.
19. [`19-course-schedule.ts`](./19-course-schedule.ts) ([test](./tests/19-course-schedule.test.ts)): Detect whether prerequisites contain a cycle.
20. [`20-top-k-frequent.ts`](./20-top-k-frequent.ts) ([test](./tests/20-top-k-frequent.test.ts)): Return the most frequent values with stable tie-breaking.
21. [`21-build-organization-tree.ts`](./21-build-organization-tree.ts) ([test](./tests/21-build-organization-tree.test.ts)): Build an organization forest from a flat employee list.
22. [`22-merge-paginated-records.ts`](./22-merge-paginated-records.ts) ([test](./tests/22-merge-paginated-records.test.ts)): Merge pages and deduplicate records by ID.
23. [`23-maximal-square-area.ts`](./23-maximal-square-area.ts) ([test](./tests/23-maximal-square-area.test.ts)): Find the largest square containing only good land and return its area.

## Two-week curriculum

Train for 90 minutes per day, six days per week. Day 7 can be rest or light review.

By the interview, you should be able to:

- Recognize the main pattern within 3-5 minutes.
- Produce a correct baseline solution before optimizing.
- Explain time and space complexity.
- Write fluent TypeScript without fighting the language.
- Test your code aloud with normal and edge cases.
- Handle follow-up requirements without rewriting everything.

Use the same 90-minute structure each day:

1. **10 minutes:** Review yesterday's mistakes.
2. **15 minutes:** Learn or revise one pattern.
3. **45 minutes:** Solve two problems.
4. **15 minutes:** Refactor and explain complexity.
5. **5 minutes:** Record mistakes in the study log.

Do not merely read solutions. Re-type and explain your own solutions from memory.

| Day | Topic | Practice |
| --- | --- | --- |
| 1 | Big-O and TypeScript foundations | Array/object iteration, `Map`, `Set`, sorting, mutation vs. copying |
| 2 | Arrays and hash maps | Two Sum, Contains Duplicate, Valid Anagram, Group Anagrams |
| 3 | Two pointers and sliding windows | Valid Palindrome, Move Zeroes, Longest Substring Without Repeating Characters |
| 4 | Stacks and queues | Valid Parentheses, Min Stack, task queue simulation |
| 5 | Sorting, intervals, binary search | Binary Search, Merge Intervals, Insert Interval |
| 6 | Mixed mock interview | One 45-minute problem plus review |
| 7 | Rest or light review | Re-solve two failed problems without notes |
| 8 | Recursion and trees | Maximum Depth, Invert Tree, Validate BST, Level Order Traversal |
| 9 | BFS and DFS | Number of Islands, Flood Fill, shortest path on a grid |
| 10 | Graphs and dependencies | Course Schedule, dependency ordering, cycle detection |
| 11 | Heaps and top-K problems | Kth Largest Element, Top K Frequent Elements |
| 12 | Async algorithms and concurrency | Promise pool, concurrency-limited queue, retry scheduling |
| 13 | Frontend-oriented algorithms | Nested tree transformations, filtering, grouping, normalized state |
| 14 | Full mock interview | 60-minute TypeScript session under interview conditions |

## Pattern recognition

### Hash maps and sets

Think of `Map` or `Set` when the problem involves counting, detecting duplicates, grouping, looking up complements, or tracking previously seen values.

For Two Sum, scan left to right: look up the current value's complement in a map, then record the current value only after checking. This keeps each index distinct and reaches O(n) time with O(n) additional space. Implement the details in [`11-two-sum.ts`](./11-two-sum.ts).

### Two pointers and sliding windows

Use these for contiguous ranges, palindromes, sorted arrays, longest or shortest valid subsequences, and problems where recalculating every range would be too slow.

For a fixed or expanding contiguous range, ask what small piece of state lets the window move without recomputing its entire contents.

### Stack, queue, BFS, and DFS

These patterns appear in nested structures, undo/history, dependency processing, tree or graph traversal, work queues, and breadth-first searches.

In TypeScript, avoid repeatedly calling `Array.shift()` in performance-sensitive BFS code because it can reindex the array. Keep a numeric read index instead. For tree-building, first map IDs to copied nodes, then connect each node to its manager while validating malformed relationships; implement the full behavior in [`21-build-organization-tree.ts`](./21-build-organization-tree.ts).

### Sorting and intervals

Sorting can turn many comparisons into one linear pass. Be comfortable writing `items.sort((a, b) => a.start - b.start)`. JavaScript's default `.sort()` is lexicographical. Also clarify whether mutating the input is allowed before sorting it in place.

### Async queues and concurrency

For concurrency-limited work, validate the limit, reserve the next task index synchronously, start at most `limit` workers, and write each result back to its original index. Implement the full behavior in [`07-map-with-concurrency.ts`](./07-map-with-concurrency.ts).

Be ready to discuss preserving result order, fail-fast vs. collecting errors, continuing after failures, cancellation with `AbortSignal`, rate limiting vs. concurrency limiting, shared mutable state, and behavior for an empty task list.

### Frontend-oriented transformations

Practice converting a flat list into a tree, flattening nested navigation, grouping records, deduplicating API results, merging pages, normalizing nested data by ID, updating nested items immutably, filtering and sorting, calculating derived UI state, and processing chronological events.

For flat-list tree construction, a two-pass map-and-connect approach is O(n) time and O(n) space for valid input. Clarify how duplicate IDs, missing parents, self-references, and cycles should be handled rather than silently choosing a policy.

## Interview solving protocol

Use this sequence for every mock interview.

1. **Restate the problem:** "We need to return X given Y, while preserving Z."
2. **Clarify constraints:** Ask about empty input, duplicates, input size, invalid data, mutation, and required output order.
3. **Walk through an example:** Use a small input manually before coding.
4. **Present a baseline solution:** Even when inefficient, establish correctness first.
5. **Identify the bottleneck:** Explain which repeated work or lookup dominates the cost and which data structure can remove it.
6. **Implement in small steps:** Prefer clear names and helper functions over clever one-liners.
7. **Test aloud:** Cover normal input, empty input, one element, duplicates, and boundary conditions.
8. **State complexity:** Account separately for setup, traversal, output, and additional space.

## Mock interview timing

### Day 6: 45-minute mixed mock

1. **0-5 minutes:** Restate, clarify, and walk through an example.
2. **5-10 minutes:** Describe the baseline and intended optimization.
3. **10-32 minutes:** Implement while narrating decisions.
4. **32-40 minutes:** Test normal and edge cases.
5. **40-45 minutes:** State complexity and answer one follow-up.

### Day 14: 60-minute full mock

1. **0-5 minutes:** Clarify requirements and constraints.
2. **5-12 minutes:** Work through an example and present a baseline.
3. **12-42 minutes:** Implement the solution.
4. **42-52 minutes:** Test and debug aloud.
5. **52-60 minutes:** Refactor, state complexity, and discuss follow-ups.

Do not use notes, autocomplete-generated solutions, or external help during mocks. Record the result only after the timer ends.

## What not to prioritize

Until the core curriculum is solid, spend little time on hard dynamic programming, tries, advanced union-find, segment trees, bit-manipulation puzzles, mathematical tricks, or competitive-programming syntax.

Basic dynamic programming, such as Climbing Stairs or Coin Change, is enough as optional preparation.

## Completion standard

Complete all 15 items in [`practice-set.md`](./practice-set.md) without external help. Aim to solve the first ten in 20-30 minutes each and the practical exercises in 30-45 minutes each.

The objective is not memorizing solutions. It is recognizing patterns and communicating a controlled problem-solving process.
