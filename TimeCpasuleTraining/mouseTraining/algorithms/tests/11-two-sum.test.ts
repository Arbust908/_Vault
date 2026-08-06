import { describe, expect, test } from "bun:test";
import { twoSum } from "../11-two-sum";

describe("twoSum", () => {
  test("returns indices whose values add to the target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
    expect(twoSum([-3, 4, 3, 90], 87)).toEqual([0, 3]);
  });

  test("returns the first pair discovered from left to right", () => {
    expect(twoSum([3, 2, 4, 3], 6)).toEqual([1, 2]);
  });

  test("uses distinct indices when duplicate values form a pair", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    expect(twoSum([3], 6)).toBeNull();
  });

  test("returns null for empty input or when no pair exists", () => {
    expect(twoSum([], 0)).toBeNull();
    expect(twoSum([1, 2, 3], 7)).toBeNull();
  });

  test("does not mutate the input", () => {
    const numbers = [4, 1, 5, 2] as const;

    twoSum(numbers, 6);

    expect(numbers).toEqual([4, 1, 5, 2]);
  });
});
