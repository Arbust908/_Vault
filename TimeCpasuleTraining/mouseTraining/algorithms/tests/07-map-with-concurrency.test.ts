import { describe, expect, test } from "bun:test";
import { mapWithConcurrency } from "../07-map-with-concurrency";

describe("mapWithConcurrency", () => {
  test("limits active workers and preserves result order", async () => {
    let active = 0;
    let maximumActive = 0;

    const result = await mapWithConcurrency([30, 5, 15, 1], 2, async (delay) => {
      active += 1;
      maximumActive = Math.max(maximumActive, active);
      await Bun.sleep(delay);
      active -= 1;
      return delay * 2;
    });

    expect(result).toEqual([60, 10, 30, 2]);
    expect(maximumActive).toBe(2);
  });

  test("passes each value's index to the worker", async () => {
    expect(
      await mapWithConcurrency(["a", "b"], 1, async (value, index) =>
        `${index}:${value}`,
      ),
    ).toEqual(["0:a", "1:b"]);
  });

  test("handles empty input and rejects invalid limits", async () => {
    expect(await mapWithConcurrency([], 1, async () => 1)).toEqual([]);
    await expect(mapWithConcurrency([1], 0, async () => 1)).rejects.toBeInstanceOf(
      RangeError,
    );
    await expect(
      mapWithConcurrency([1], 1.5, async () => 1),
    ).rejects.toBeInstanceOf(RangeError);
  });

  test("rejects when a worker rejects", async () => {
    const failure = new Error("worker failed");

    await expect(
      mapWithConcurrency([1, 2], 1, async (value) => {
        if (value === 2) throw failure;
        return value;
      }),
    ).rejects.toBe(failure);
  });
});
