import { describe, expect, test } from "bun:test";
import { mergePaginatedRecords, type Page } from "../22-merge-paginated-records";

type RecordItem = {
  id: string | number;
  value: string;
};

describe("mergePaginatedRecords", () => {
  test("merges records in page and input order", () => {
    const pages: readonly Page<RecordItem>[] = [
      {
        records: [
          { id: "a", value: "A" },
          { id: "b", value: "B" },
        ],
        cursor: "next",
      },
      {
        records: [
          { id: "c", value: "C" },
          { id: "d", value: "D" },
        ],
        cursor: null,
      },
    ];

    expect(mergePaginatedRecords(pages)).toEqual([
      { id: "a", value: "A" },
      { id: "b", value: "B" },
      { id: "c", value: "C" },
      { id: "d", value: "D" },
    ]);
  });

  test("keeps only the first occurrence of an ID", () => {
    expect(
      mergePaginatedRecords([
        {
          records: [
            { id: "same", value: "first" },
            { id: "same", value: "duplicate in page" },
          ],
        },
        {
          records: [
            { id: "other", value: "other" },
            { id: "same", value: "duplicate in later page" },
          ],
        },
      ]),
    ).toEqual([
      { id: "same", value: "first" },
      { id: "other", value: "other" },
    ]);
  });

  test("treats numeric and string IDs as distinct", () => {
    expect(
      mergePaginatedRecords([
        {
          records: [
            { id: 1, value: "number" },
            { id: "1", value: "string" },
            { id: 1, value: "duplicate number" },
          ],
        },
      ]),
    ).toEqual([
      { id: 1, value: "number" },
      { id: "1", value: "string" },
    ]);
  });

  test("returns original record references", () => {
    const first = { id: "first", value: "First" };
    const second = { id: "second", value: "Second" };

    const result = mergePaginatedRecords([{ records: [first, second] }]);

    expect(result[0]).toBe(first);
    expect(result[1]).toBe(second);
  });

  test("does not mutate pages or their records", () => {
    const records = [
      { id: "b", value: "B" },
      { id: "a", value: "A" },
      { id: "b", value: "duplicate" },
    ] as const;
    const pages = [{ records, cursor: "cursor" }] as const;

    mergePaginatedRecords(pages);

    expect(pages).toEqual([{ records, cursor: "cursor" }]);
    expect(records).toEqual([
      { id: "b", value: "B" },
      { id: "a", value: "A" },
      { id: "b", value: "duplicate" },
    ]);
  });

  test("handles empty pages and pages with no records", () => {
    expect(mergePaginatedRecords([])).toEqual([]);
    expect(
      mergePaginatedRecords([
        { records: [], cursor: "next" },
        { records: [], cursor: null },
      ]),
    ).toEqual([]);
  });
});
