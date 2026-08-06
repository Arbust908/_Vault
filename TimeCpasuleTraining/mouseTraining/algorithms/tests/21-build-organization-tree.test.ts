import { describe, expect, test } from "bun:test";
import { buildOrganizationTree, type Employee } from "../21-build-organization-tree";

describe("buildOrganizationTree", () => {
  test("builds a forest with nested reports", () => {
    const employees: readonly Employee[] = [
      { id: "ceo", managerId: null, name: "Casey" },
      { id: "lead", managerId: "ceo", name: "Lee" },
      { id: "engineer", managerId: "lead", name: "Emery" },
      { id: "other-root", managerId: null, name: "Robin" },
    ];

    expect(buildOrganizationTree(employees)).toEqual([
      {
        id: "ceo",
        managerId: null,
        name: "Casey",
        reports: [
          {
            id: "lead",
            managerId: "ceo",
            name: "Lee",
            reports: [
              {
                id: "engineer",
                managerId: "lead",
                name: "Emery",
                reports: [],
              },
            ],
          },
        ],
      },
      {
        id: "other-root",
        managerId: null,
        name: "Robin",
        reports: [],
      },
    ]);
  });

  test("preserves root and sibling input order", () => {
    const employees: readonly Employee[] = [
      { id: "second-child", managerId: "root", name: "Second" },
      { id: "first-root", managerId: null, name: "First root" },
      { id: "first-child", managerId: "root", name: "First" },
      { id: "root", managerId: null, name: "Root" },
    ];

    const result = buildOrganizationTree(employees);

    expect(result.map(({ id }) => id)).toEqual(["first-root", "root"]);
    expect(result[1]?.reports.map(({ id }) => id)).toEqual([
      "second-child",
      "first-child",
    ]);
  });

  test("returns copied nodes without mutating employees", () => {
    const root: Employee = { id: "root", managerId: null, name: "Root" };
    const child: Employee = { id: "child", managerId: "root", name: "Child" };
    const employees = [root, child] as const;

    const result = buildOrganizationTree(employees);

    expect(result[0]).not.toBe(root);
    expect(result[0]?.reports[0]).not.toBe(child);
    expect(employees).toEqual([root, child]);
    expect("reports" in root).toBe(false);
    expect("reports" in child).toBe(false);
  });

  test("handles empty input", () => {
    expect(buildOrganizationTree([])).toEqual([]);
  });

  test("rejects duplicate employee IDs", () => {
    expect(() =>
      buildOrganizationTree([
        { id: "same", managerId: null, name: "First" },
        { id: "same", managerId: null, name: "Second" },
      ]),
    ).toThrow(TypeError);
  });

  test("rejects missing managers and self references", () => {
    expect(() =>
      buildOrganizationTree([
        { id: "employee", managerId: "missing", name: "Employee" },
      ]),
    ).toThrow(TypeError);
    expect(() =>
      buildOrganizationTree([
        { id: "employee", managerId: "employee", name: "Employee" },
      ]),
    ).toThrow(TypeError);
  });

  test("rejects cycles, including cycles disconnected from roots", () => {
    expect(() =>
      buildOrganizationTree([
        { id: "a", managerId: "b", name: "A" },
        { id: "b", managerId: "a", name: "B" },
      ]),
    ).toThrow(TypeError);
    expect(() =>
      buildOrganizationTree([
        { id: "root", managerId: null, name: "Root" },
        { id: "a", managerId: "b", name: "A" },
        { id: "b", managerId: "c", name: "B" },
        { id: "c", managerId: "a", name: "C" },
      ]),
    ).toThrow(TypeError);
  });
});
