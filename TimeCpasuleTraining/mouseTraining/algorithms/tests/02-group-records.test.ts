import { describe, expect, test } from "bun:test";
import { groupBy } from "../02-group-records";

describe("groupBy", () => {
  test("groups records by string and number properties", () => {
    const records = [
      { id: 1, team: "red" },
      { id: 2, team: "blue" },
      { id: 3, team: "red" },
    ];

    expect(groupBy(records, "team")).toEqual({
      red: [records[0], records[2]],
      blue: [records[1]],
    });
    expect(groupBy(records, "id")).toEqual({
      "1": [records[0]],
      "2": [records[1]],
      "3": [records[2]],
    });
  });

  test("returns an empty record for empty input", () => {
    expect(groupBy([], "id")).toEqual({});
  });

  test("rejects missing or unsupported property values", () => {
    expect(() => groupBy([{ id: 1 }, {}], "id")).toThrow(TypeError);
    expect(() => groupBy([{ metadata: {} }], "metadata")).toThrow(TypeError);
  });
});
