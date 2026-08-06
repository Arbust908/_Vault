import { describe, expect, test } from "bun:test";
import { shortestGridPath } from "../10-shortest-grid-path";

describe("shortestGridPath", () => {
  test("finds the shortest four-directional path", () => {
    const grid = [
      [0, 0, 1, 0],
      [1, 0, 1, 0],
      [0, 0, 0, 0],
    ] as const;

    expect(shortestGridPath(grid, [0, 0], [2, 3])).toBe(5);
  });

  test("returns zero when start and end are the same open cell", () => {
    expect(shortestGridPath([[0]], [0, 0], [0, 0])).toBe(0);
  });

  test("returns -1 for blocked, unreachable, or out-of-bounds points", () => {
    expect(shortestGridPath([[1]], [0, 0], [0, 0])).toBe(-1);
    expect(
      shortestGridPath(
        [
          [0, 1],
          [1, 0],
        ],
        [0, 0],
        [1, 1],
      ),
    ).toBe(-1);
    expect(shortestGridPath([[0]], [-1, 0], [0, 0])).toBe(-1);
    expect(shortestGridPath([[0]], [0, 0], [0, 1])).toBe(-1);
  });

  test("handles an empty grid and rejects ragged grids", () => {
    expect(shortestGridPath([], [0, 0], [0, 0])).toBe(-1);
    expect(() => shortestGridPath([[0], [0, 0]], [0, 0], [1, 1])).toThrow(
      TypeError,
    );
  });
});
