import { describe, expect, test } from "bun:test";
import { mergeIntervals } from "../03-merge-intervals";

describe("mergeIntervals", () => {
  test("sorts and merges overlapping and touching intervals", () => {
    expect(
      mergeIntervals([
        [8, 10],
        [1, 3],
        [2, 6],
        [10, 12],
        [15, 18],
      ]),
    ).toEqual([
      [1, 6],
      [8, 12],
      [15, 18],
    ]);
  });

  test("does not mutate the input", () => {
    const intervals = [
      [5, 7],
      [1, 2],
    ] as const;

    mergeIntervals(intervals);

    expect(intervals).toEqual([
      [5, 7],
      [1, 2],
    ]);
  });

  test("merges contained and duplicate intervals", () => {
    expect(
      mergeIntervals([
        [1, 10],
        [2, 3],
        [1, 10],
      ]),
    ).toEqual([[1, 10]]);
  });

  test("merges an interval that bridges multiple groups", () => {
    expect(
      mergeIntervals([
        [1, 3],
        [5, 7],
        [3, 5],
      ]),
    ).toEqual([[1, 7]]);
  });

  test("returns disjoint intervals sorted by start", () => {
    expect(
      mergeIntervals([
        [5, 6],
        [1, 2],
        [3, 4],
      ]),
    ).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  test("accepts an interval whose start equals its end", () => {
    expect(mergeIntervals([[2, 2]])).toEqual([[2, 2]]);
  });

  test("handles empty input and rejects reversed intervals", () => {
    expect(mergeIntervals([])).toEqual([]);
    expect(() => mergeIntervals([[3, 1]])).toThrow(RangeError);
  });
});
