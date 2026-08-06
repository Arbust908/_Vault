import { describe, expect, test } from "bun:test";
import {
  maximalSquareArea,
  type LandCell,
} from "../23-maximal-square-area";

describe("maximalSquareArea", () => {
  test("returns the area of the largest all-good square", () => {
    expect(
      maximalSquareArea([
        [1, 0, 1, 0, 0],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0],
      ]),
    ).toBe(4);
  });

  test("supports rectangular matrices and returns area rather than side length", () => {
    expect(
      maximalSquareArea([
        [1, 1, 1, 0],
        [1, 1, 1, 0],
        [1, 1, 1, 0],
      ]),
    ).toBe(9);
  });

  test("does not count a non-square rectangle as a larger region", () => {
    expect(
      maximalSquareArea([
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ]),
    ).toBe(4);
  });

  test("handles one-cell squares, empty matrices, and matrices without good land", () => {
    expect(maximalSquareArea([[1]])).toBe(1);
    expect(maximalSquareArea([])).toBe(0);
    expect(maximalSquareArea([[], []])).toBe(0);
    expect(
      maximalSquareArea([
        [0, 0],
        [0, 0],
      ]),
    ).toBe(0);
  });

  test("does not mutate the matrix", () => {
    const land: readonly (readonly LandCell[])[] = [
      [1, 1],
      [1, 1],
    ];

    maximalSquareArea(land);

    expect(land).toEqual([
      [1, 1],
      [1, 1],
    ]);
  });

  test("rejects ragged matrices", () => {
    expect(() => maximalSquareArea([[1], [1, 1]])).toThrow(TypeError);
  });
});
