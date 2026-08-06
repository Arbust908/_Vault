import { describe, expect, test } from "bun:test";
import { canFinishCourses } from "../19-course-schedule";

describe("canFinishCourses", () => {
  test("returns true when every course can be completed", () => {
    expect(
      canFinishCourses(4, [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
      ]),
    ).toBe(true);
  });

  test("returns false for direct and indirect cycles", () => {
    expect(
      canFinishCourses(2, [
        [0, 1],
        [1, 0],
      ]),
    ).toBe(false);
    expect(
      canFinishCourses(4, [
        [1, 0],
        [2, 1],
        [0, 2],
        [3, 2],
      ]),
    ).toBe(false);
  });

  test("treats duplicate edges as harmless", () => {
    expect(
      canFinishCourses(3, [
        [1, 0],
        [1, 0],
        [2, 1],
      ]),
    ).toBe(true);
  });

  test("handles no courses and courses without prerequisites", () => {
    expect(canFinishCourses(0, [])).toBe(true);
    expect(canFinishCourses(5, [])).toBe(true);
  });

  test("does not mutate prerequisites", () => {
    const prerequisites = [
      [2, 0],
      [1, 0],
    ] as const;

    canFinishCourses(3, prerequisites);

    expect(prerequisites).toEqual([
      [2, 0],
      [1, 0],
    ]);
  });

  test("rejects invalid course counts", () => {
    expect(() => canFinishCourses(-1, [])).toThrow(RangeError);
    expect(() => canFinishCourses(1.5, [])).toThrow(RangeError);
    expect(() => canFinishCourses(Number.NaN, [])).toThrow(RangeError);
  });

  test("rejects prerequisite IDs outside the course range", () => {
    expect(() => canFinishCourses(2, [[-1, 0]])).toThrow(RangeError);
    expect(() => canFinishCourses(2, [[2, 0]])).toThrow(RangeError);
    expect(() => canFinishCourses(2, [[1, 2]])).toThrow(RangeError);
    expect(() => canFinishCourses(2, [[1.5, 0]])).toThrow(RangeError);
  });
});
