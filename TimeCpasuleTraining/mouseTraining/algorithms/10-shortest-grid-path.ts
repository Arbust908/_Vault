type Point = readonly [row: number, column: number];

export function shortestGridPath(
  grid: readonly (readonly (0 | 1)[])[],
  start: Point,
  end: Point,
): number {
  throw new Error("TODO");
}

// Treat 0 as open and 1 as blocked. Return -1 when the destination is unreachable.
