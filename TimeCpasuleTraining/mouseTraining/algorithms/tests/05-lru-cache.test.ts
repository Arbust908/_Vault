import { describe, expect, test } from "bun:test";
import { LruCache } from "../05-lru-cache";

describe("LruCache", () => {
  test("evicts the least recently used entry", () => {
    const cache = new LruCache<string, number>(2);
    cache.set("a", 1);
    cache.set("b", 2);

    expect(cache.get("a")).toBe(1);
    cache.set("c", 3);

    expect(cache.get("b")).toBeUndefined();
    expect(cache.get("a")).toBe(1);
    expect(cache.get("c")).toBe(3);
  });

  test("updates values and their recency", () => {
    const cache = new LruCache<string, number>(2);
    cache.set("a", 1);
    cache.set("b", 2);
    cache.set("a", 10);
    cache.set("c", 3);

    expect(cache.get("a")).toBe(10);
    expect(cache.get("b")).toBeUndefined();
  });

  test("rejects non-positive and non-integer capacities", () => {
    expect(() => new LruCache(0)).toThrow(RangeError);
    expect(() => new LruCache(-1)).toThrow(RangeError);
    expect(() => new LruCache(1.5)).toThrow(RangeError);
  });
});
