// Task: Merge all overlapping or touching intervals.

export type Interval = readonly [start: number, end: number];

export function mergeIntervals(intervals: readonly Interval[]): Interval[] {
  const orderedIntervals = intervals.toSorted((a, b) => a[0] - b[0])
  const mergedIntervals = orderedIntervals.reduce((group, interval) => {
    const [start, end] = interval;
    if (end < start) {
      throw new RangeError();
    }
    if (group.length === 0) {
      group.push([start, end])
    } else {
      const prevIndex = group.length - 1
      const [prevStart, prevEnd] = group[prevIndex];
      if (start <= prevEnd) {
        // we merge
        const minStart = Math.min(start, prevStart)
        const maxEnd = Math.max(end, prevEnd);
        group[prevIndex] = [minStart, maxEnd]
      } else {
        // we can asume start is over end so we dont merge
        group.push([start, end])
      }
    }
    return group;
  }, [] as [number, number][])

  return mergedIntervals;
}

// Clarify whether touching intervals such as [1, 2] and [2, 3] should merge.
