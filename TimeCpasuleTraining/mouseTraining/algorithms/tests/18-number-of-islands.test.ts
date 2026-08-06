import { describe, expect, test } from "bun:test";
import { countIslands, type GridCell } from "../18-number-of-islands";

describe("countIslands", () => {
  test("counts four-directionally connected islands", () => {
    const grid = [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 1],
      [0, 0, 1, 0, 1],
      [0, 0, 0, 1, 1],
    ] as const;

    expect(countIslands(grid)).toBe(3);
  });

  test("does not connect land diagonally", () => {
    expect(
      countIslands([
        [1, 0],
        [0, 1],
      ]),
    ).toBe(2);
  });

  test("handles empty grids and grids without land", () => {
    expect(countIslands([])).toBe(0);
    expect(countIslands([[], []])).toBe(0);
    expect(
      countIslands([
        [0, 0],
        [0, 0],
      ]),
    ).toBe(0);
  });

  test("does not mutate the grid", () => {
    const grid: readonly (readonly GridCell[])[] = [
      [1, 0],
      [1, 1],
    ];

    countIslands(grid);

    expect(grid).toEqual([
      [1, 0],
      [1, 1],
    ]);
  });

  test("rejects ragged grids", () => {
    expect(() => countIslands([[1], [1, 0]])).toThrow(TypeError);
  });
});
