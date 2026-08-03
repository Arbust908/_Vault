# Final Practice Set

Solve these in TypeScript without external help. Before coding each problem, restate it, clarify assumptions, walk through one example, and give a baseline approach. After coding, test aloud and state time and space complexity.

Record each attempt in [`study-log.md`](./study-log.md). A problem counts as complete only when the implementation is correct, you can explain it, and you can re-solve it later without notes.

## Core algorithms

### 1. Two Sum

Given an array of numbers and a target, return the indices of two distinct values whose sum equals the target, or `null` when no pair exists.

Clarify whether exactly one pair exists and whether the same value can appear twice. Target: O(n) time.

### 2. Group Anagrams

Group strings that contain the same characters with the same frequencies. Preserve the input order within each group.

Clarify character set and case sensitivity. Compare sorting each word with using a frequency signature.

### 3. Longest Substring Without Repeating Characters

Return the length of the longest contiguous substring containing no repeated characters.

Explain what state belongs in the sliding window and how the left boundary moves.

### 4. Valid Parentheses

Given a string containing `()`, `[]`, and `{}`, return whether every opening bracket is closed in the correct order.

Test empty input, a leading closing bracket, mismatched pairs, and unclosed brackets.

### 5. Merge Intervals

Given intervals with numeric `start` and `end` values, merge all overlaps and return the merged intervals ordered by start.

Clarify whether touching intervals overlap and whether input mutation is allowed.

### 6. Binary Search

Given a sorted numeric array and a target, return its index or `-1` when absent.

State and preserve the loop invariant. Test an empty array and both boundaries.

### 7. Maximum Depth of Binary Tree

Return the maximum number of nodes on a path from the root to a leaf. An empty tree has depth zero.

Implement recursively, then explain an iterative BFS alternative and its space tradeoff.

### 8. Binary Tree Level Order Traversal

Return a nested array containing node values grouped by tree depth from left to right.

Use a queue with a read index rather than repeated `shift()` calls.

### 9. Number of Islands

Given a rectangular grid of land and water cells, count connected land regions using horizontal and vertical adjacency.

Clarify whether mutation is allowed. Compare a visited set with marking the input grid.

### 10. Course Schedule

Given a course count and prerequisite pairs, return whether every course can be completed.

Solve by detecting a directed cycle with DFS states or by topological sorting with indegrees. Explain the complexity in terms of vertices and edges.

### 11. Top K Frequent Elements

Return the `k` most frequent values in an integer array.

Start with counting plus sorting. Then discuss a heap or bucket approach and when the added complexity is justified.

## Practical exercises

### 12. Build a tree from a flat list

Convert employees containing `id` and nullable `managerId` fields into organization-tree roots. Preserve sibling input order.

Clarify duplicate IDs, missing managers, self-references, and cycles. Target: O(n) time and O(n) space for valid input.

### 13. Implement a concurrency-limited promise queue

Run an array of async task functions with no more than `limit` tasks active at once. Return results in input order.

Validate the limit. Follow-ups: fail-fast behavior, collecting individual failures, cancellation, and tasks added while processing.

### 14. Merge and deduplicate paginated API responses

Merge ordered pages of records into one array, deduplicate by ID, and preserve the first-seen position. Define whether later records replace the earlier value.

Follow-ups: missing pages, stable sorting by server timestamp, cursor metadata, and incremental merging.

### 15. Debug stale or duplicated React state

Given a searchable component that stores raw records, filtered records, and a result count separately, identify stale or duplicated state. Refactor so derived values are calculated from the source data and current controls.

Explain effect dependencies, stale requests, functional updates, stable list keys, and when memoization is or is not useful.

## Completion checklist

| # | Problem | First pass | Re-solved | Target time |
| --- | --- | --- | --- | --- |
| 1 | Two Sum | [ ] | [ ] | 20 min |
| 2 | Group Anagrams | [ ] | [ ] | 25 min |
| 3 | Longest Substring | [ ] | [ ] | 30 min |
| 4 | Valid Parentheses | [ ] | [ ] | 20 min |
| 5 | Merge Intervals | [ ] | [ ] | 30 min |
| 6 | Binary Search | [ ] | [ ] | 20 min |
| 7 | Maximum Depth | [ ] | [ ] | 20 min |
| 8 | Level Order Traversal | [ ] | [ ] | 25 min |
| 9 | Number of Islands | [ ] | [ ] | 30 min |
| 10 | Course Schedule | [ ] | [ ] | 30 min |
| 11 | Top K Frequent | [ ] | [ ] | 30 min |
| 12 | Flat list to tree | [ ] | [ ] | 35 min |
| 13 | Promise queue | [ ] | [ ] | 45 min |
| 14 | Paginated merge | [ ] | [ ] | 35 min |
| 15 | React state debugging | [ ] | [ ] | 45 min |
