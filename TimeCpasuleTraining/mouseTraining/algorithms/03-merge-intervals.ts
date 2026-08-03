export type Interval = readonly [start: number, end: number];

export function mergeIntervals(intervals: readonly Interval[]): Interval[] {
  throw new Error("TODO");
}

// Clarify whether touching intervals such as [1, 2] and [2, 3] should merge.
