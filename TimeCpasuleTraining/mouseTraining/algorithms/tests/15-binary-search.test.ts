import { describe, expect, test } from "bun:test";
import { binarySearch } from "../15-binary-search";

describe("binarySearch", () => {
  test("finds targets at the beginning, middle, and end", () => {
    const values = [1, 3, 5, 7, 9] as const;

    expect(binarySearch(values, 1)).toBe(0);
    expect(binarySearch(values, 5)).toBe(2);
    expect(binarySearch(values, 9)).toBe(4);
  });

  test("returns any matching index for duplicate values", () => {
    const values = [1, 2, 2, 2, 3] as const;
    const index = binarySearch(values, 2);

    expect(index).toBeGreaterThanOrEqual(1);
    expect(index).toBeLessThanOrEqual(3);
    expect(values[index]).toBe(2);
  });

  test("returns -1 when the target is absent or the input is empty", () => {
    expect(binarySearch([1, 3, 5], 4)).toBe(-1);
    expect(binarySearch([], 4)).toBe(-1);
  });

  test("does not mutate the input", () => {
    const values = [2, 4, 6, 8] as const;

    binarySearch(values, 6);

    expect(values).toEqual([2, 4, 6, 8]);
  });
});
