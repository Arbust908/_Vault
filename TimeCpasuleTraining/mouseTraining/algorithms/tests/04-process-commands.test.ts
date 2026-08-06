import { describe, expect, test } from "bun:test";
import { processCommands } from "../04-process-commands";

describe("processCommands", () => {
  test("processes commands in order", () => {
    const results = processCommands([
      { type: "ADD", id: "a", value: 1 },
      { type: "GET", id: "a" },
      { type: "UPDATE", id: "a", value: 2 },
      { type: "GET", id: "a" },
      { type: "DELETE", id: "a" },
      { type: "GET", id: "a" },
    ]);

    expect(results).toHaveLength(6);
    expect(results[0]).toEqual({ id: "a", ok: true, value: 1 });
    expect(results[1]).toEqual({ id: "a", ok: true, value: 1 });
    expect(results[2]).toEqual({ id: "a", ok: true, value: 2 });
    expect(results[3]).toEqual({ id: "a", ok: true, value: 2 });
    expect(results[4]).toEqual({ id: "a", ok: true, value: 2 });
    expect(results[5]).toMatchObject({ id: "a", ok: false });
    expect(results[5].error?.length).toBeGreaterThan(0);
  });

  test("fails duplicate adds and operations on missing records", () => {
    const results = processCommands([
      { type: "ADD", id: "a", value: 1 },
      { type: "ADD", id: "a", value: 2 },
      { type: "UPDATE", id: "missing", value: 2 },
      { type: "DELETE", id: "missing" },
    ]);

    expect(results.map(({ ok }) => ok)).toEqual([true, false, false, false]);
    expect(results.slice(1).every(({ error }) => Boolean(error))).toBe(true);
  });

  test("returns no results for no commands", () => {
    expect(processCommands([])).toEqual([]);
  });
});
