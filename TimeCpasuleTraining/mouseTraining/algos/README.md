# Disney Senior Software Engineer Algorithm Training

Prepare for practical easy-to-medium algorithm problems in TypeScript, not obscure competitive-programming puzzles. Emphasize data transformations, queues, state management, debugging, and clean reasoning.

Use [`practice-set.md`](./practice-set.md) for the final problem prompts and [`study-log.md`](./study-log.md) to record mistakes. The existing [`../algorithms`](../algorithms) directory also contains ten TypeScript starter files.

## Target outcome

By the interview, you should be able to:

- Recognize the main pattern within 3-5 minutes.
- Produce a correct baseline solution before optimizing.
- Explain time and space complexity.
- Write fluent TypeScript without fighting the language.
- Test your code aloud with normal and edge cases.
- Handle follow-up requirements without rewriting everything.

## Daily session

Use the same 90-minute structure each day:

1. **10 minutes:** Review yesterday's mistakes.
2. **15 minutes:** Learn or revise one pattern.
3. **45 minutes:** Solve two problems.
4. **15 minutes:** Refactor and explain complexity.
5. **5 minutes:** Record mistakes in the study log.

Do not merely read solutions. Re-type and explain them from memory.

## Two-week curriculum

Train for 90 minutes per day, six days per week. Day 7 can be rest or light review.

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

Think of `Map` or `Set` when the problem involves:

- Counting
- Detecting duplicates
- Grouping
- Looking up complements
- Tracking previously seen values

```ts
function twoSum(numbers: number[], target: number): [number, number] | null {
  const seen = new Map<number, number>();

  for (let index = 0; index < numbers.length; index++) {
    const complement = target - numbers[index];

    if (seen.has(complement)) {
      return [seen.get(complement)!, index];
    }

    seen.set(numbers[index], index);
  }

  return null;
}
```

This is O(n) time and O(n) additional space.

### Two pointers and sliding windows

Use these for:

- Contiguous ranges
- Palindromes
- Sorted arrays
- Longest or shortest valid subsequences
- Problems where recalculating every range would be too slow

For a fixed or expanding contiguous range, ask what small piece of state lets the window move without recomputing its entire contents.

### Stack, queue, BFS, and DFS

These patterns appear in both algorithm questions and application work:

- Nested structures
- Undo and history
- Dependency processing
- Tree traversal
- Graph traversal
- Work queues
- Breadth-first searches

In TypeScript, avoid repeatedly calling `Array.shift()` in performance-sensitive BFS code because it can reindex the array. Keep a numeric read index instead.

### Sorting and intervals

Sorting can turn many comparisons into one linear pass. Be comfortable writing:

```ts
items.sort((a, b) => a.start - b.start);
```

JavaScript's default `.sort()` is lexicographical. Also clarify whether mutating the input is allowed before sorting it in place.

### Async queues and concurrency

This pattern is unusually relevant to the interview context:

```ts
async function runWithConcurrency<T>(
  tasks: Array<() => Promise<T>>,
  limit: number,
): Promise<T[]> {
  if (!Number.isInteger(limit) || limit < 1) {
    throw new Error("Concurrency limit must be a positive integer");
  }

  const results: T[] = new Array(tasks.length);
  let nextTaskIndex = 0;

  async function worker(): Promise<void> {
    while (true) {
      const currentIndex = nextTaskIndex++;

      if (currentIndex >= tasks.length) {
        return;
      }

      results[currentIndex] = await tasks[currentIndex]();
    }
  }

  const workers = Array.from(
    { length: Math.min(limit, tasks.length) },
    () => worker(),
  );

  await Promise.all(workers);
  return results;
}
```

Be ready to discuss:

- Preserving result order
- Fail-fast vs. collecting errors
- Continuing after failures
- Cancellation with `AbortSignal`
- Rate limiting vs. concurrency limiting
- Shared mutable state
- Behavior for an empty task list

## Frontend-oriented transformations

Practice these application-shaped exercises:

- Convert a flat list into a tree.
- Flatten a nested navigation tree.
- Group records by category.
- Deduplicate API results.
- Merge paginated responses.
- Normalize nested data by ID.
- Update one deeply nested item immutably.
- Implement search, filtering, and sorting.
- Calculate derived UI state without duplicating state.
- Process events in chronological order.

Example:

```ts
type Employee = {
  id: string;
  managerId: string | null;
  name: string;
};

type EmployeeNode = Employee & {
  reports: EmployeeNode[];
};

function buildOrganizationTree(employees: Employee[]): EmployeeNode[] {
  const nodes = new Map<string, EmployeeNode>();

  for (const employee of employees) {
    nodes.set(employee.id, {
      ...employee,
      reports: [],
    });
  }

  const roots: EmployeeNode[] = [];

  for (const employee of employees) {
    const node = nodes.get(employee.id)!;

    if (employee.managerId === null) {
      roots.push(node);
      continue;
    }

    const manager = nodes.get(employee.managerId);

    if (manager) {
      manager.reports.push(node);
    } else {
      roots.push(node);
    }
  }

  return roots;
}
```

Building the node map takes O(n), and connecting nodes takes O(n), so total time is O(n). The map and output require O(n) space. Clarify how duplicate IDs, missing managers, and cycles should be handled.

## Interview solving protocol

Use this sequence for every mock interview.

### 1. Restate the problem

> We need to return X given Y, while preserving Z.

### 2. Clarify constraints

Ask about:

- Empty input
- Duplicate values
- Input size
- Invalid data
- Mutation
- Required output order

### 3. Walk through an example

Use a small input manually before coding.

### 4. Present a baseline solution

Even when inefficient, establish correctness first.

### 5. Identify the bottleneck

> The nested search makes this O(n^2). We can replace the inner lookup with a map.

### 6. Implement in small steps

Prefer clear names and helper functions. Avoid clever one-liners.

### 7. Test aloud

Always test:

- Normal input
- Empty input
- Single element
- Duplicates
- Boundary conditions

### 8. State complexity

Be precise:

> Building the map takes O(n), and traversal takes O(n), so total time is O(n). The map and output require O(n) additional space.

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

Until the core curriculum is solid, spend little time on:

- Hard dynamic programming
- Tries
- Advanced union-find
- Segment trees
- Bit-manipulation puzzles
- Mathematical tricks
- Competitive-programming syntax

Basic dynamic programming, such as Climbing Stairs or Coin Change, is enough as optional preparation.

## Completion standard

Complete all 15 items in [`practice-set.md`](./practice-set.md) without external help. Aim to solve the first ten in 20-30 minutes each and the practical exercises in 30-45 minutes each.

The objective is not memorizing solutions. It is recognizing patterns and communicating a controlled problem-solving process.
