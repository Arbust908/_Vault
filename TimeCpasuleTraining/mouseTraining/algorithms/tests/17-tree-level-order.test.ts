import { describe, expect, test } from "bun:test";
import { levelOrder, type TreeNode } from "../17-tree-level-order";

describe("levelOrder", () => {
  test("returns an empty list for an empty tree", () => {
    expect(levelOrder(null)).toEqual([]);
  });

  test("groups values by level from left to right", () => {
    const root: TreeNode<string> = {
      value: "a",
      left: {
        value: "b",
        left: { value: "d", left: null, right: null },
        right: { value: "e", left: null, right: null },
      },
      right: {
        value: "c",
        left: null,
        right: { value: "f", left: null, right: null },
      },
    };

    expect(levelOrder(root)).toEqual([["a"], ["b", "c"], ["d", "e", "f"]]);
  });

  test("handles a one-sided tree", () => {
    const root: TreeNode<number> = {
      value: 1,
      left: null,
      right: {
        value: 2,
        left: null,
        right: { value: 3, left: null, right: null },
      },
    };

    expect(levelOrder(root)).toEqual([[1], [2], [3]]);
  });
});
