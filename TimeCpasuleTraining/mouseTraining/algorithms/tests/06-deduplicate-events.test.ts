import { describe, expect, test } from "bun:test";
import { deduplicateEvents } from "../06-deduplicate-events";

describe("deduplicateEvents", () => {
  test("keeps the first event for each id in input order", () => {
    const events = [
      { id: "a", timestamp: 1, payload: "first" },
      { id: "b", timestamp: 2, payload: "other" },
      { id: "a", timestamp: 3, payload: "duplicate" },
    ];

    expect(deduplicateEvents(events)).toEqual([events[0], events[1]]);
  });

  test("handles empty input without mutating input", () => {
    const events = [
      { id: "a", timestamp: 1, payload: null },
      { id: "a", timestamp: 2, payload: "duplicate" },
    ];
    const original = [...events];

    expect(deduplicateEvents([])).toEqual([]);
    expect(deduplicateEvents(events)).toEqual([events[0]]);
    expect(events).toEqual(original);
  });
});
