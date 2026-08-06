import { describe, expect, test } from "bun:test";
import { SimpleSet } from "../01-set";

describe("SimpleSet", () => {
  test("adds unique primitive values and reports its size", () => {
    const values = new SimpleSet<number>();

    values.add(1);
    values.add(2);
    values.add(1);

    expect(values.has(1)).toBe(true);
    expect(values.has(3)).toBe(false);
    expect(values.size).toBe(2);
  });

  test("uses SameValueZero equality", () => {
    const values = new SimpleSet<number>();

    values.add(Number.NaN);
    values.add(Number.NaN);
    values.add(-0);

    expect(values.has(Number.NaN)).toBe(true);
    expect(values.has(0)).toBe(true);
    expect(values.size).toBe(2);
  });

  test("compares objects by reference", () => {
    const first = { id: 1 };
    const equalButDifferent = { id: 1 };
    const values = new SimpleSet<object>();

    values.add(first);

    expect(values.has(first)).toBe(true);
    expect(values.has(equalButDifferent)).toBe(false);
  });

  test("deletes an existing value only once", () => {
    const values = new SimpleSet<string>();
    values.add("a");

    expect(values.delete("a")).toBe(true);
    expect(values.delete("a")).toBe(false);
    expect(values.has("a")).toBe(false);
    expect(values.size).toBe(0);
  });

  test("delete a NaN value", () => {
    const values = new SimpleSet<number>();
    values.add(Number.NaN);

    expect(values.delete(Number.NaN)).toBe(true);
    expect(values.has(Number.NaN)).toBe(false);
    expect(values.size).toBe(0);
  });
});
