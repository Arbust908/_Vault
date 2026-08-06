import { describe, expect, test } from "bun:test";
import { topKFrequent } from "../20-top-k-frequent";

describe("topKFrequent", () => {
  test("returns the k most frequent values", () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  });

  test("uses first-seen order to break frequency ties", () => {
    expect(topKFrequent([4, 2, 4, 3, 2, 3], 3)).toEqual([4, 2, 3]);
    expect(topKFrequent([9, 8, 7, 8, 7, 9], 2)).toEqual([9, 8]);
  });

  test("handles negative values and zero", () => {
    expect(topKFrequent([-1, 0, -1, 2, 0, -1], 3)).toEqual([-1, 0, 2]);
  });

  test("returns an empty array when k is zero", () => {
    expect(topKFrequent([], 0)).toEqual([]);
    expect(topKFrequent([1, 1, 2], 0)).toEqual([]);
  });

  test("does not mutate the input", () => {
    const values = [3, 1, 3, 2, 1] as const;

    topKFrequent(values, 2);

    expect(values).toEqual([3, 1, 3, 2, 1]);
  });

  test("rejects non-integer and negative k values", () => {
    expect(() => topKFrequent([1], -1)).toThrow(RangeError);
    expect(() => topKFrequent([1], 0.5)).toThrow(RangeError);
    expect(() => topKFrequent([1], Number.NaN)).toThrow(RangeError);
  });

  test("rejects k greater than the distinct value count", () => {
    expect(() => topKFrequent([], 1)).toThrow(RangeError);
    expect(() => topKFrequent([1, 1, 2], 3)).toThrow(RangeError);
  });
});
