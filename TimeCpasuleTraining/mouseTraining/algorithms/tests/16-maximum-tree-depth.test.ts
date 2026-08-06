import { describe, expect, test } from "bun:test";
import { maxTreeDepth, type TreeNode } from "../16-maximum-tree-depth";

describe("maxTreeDepth", () => {
  test("returns zero for an empty tree", () => {
    expect(maxTreeDepth(null)).toBe(0);
  });

  test("returns one for a leaf", () => {
    const root: TreeNode<string> = {
      value: "root",
      left: null,
      right: null,
    };

    expect(maxTreeDepth(root)).toBe(1);
  });

  test("returns the longest root-to-leaf depth", () => {
    const root: TreeNode<number> = {
      value: 1,
      left: {
        value: 2,
        left: { value: 4, left: null, right: null },
        right: null,
      },
      right: { value: 3, left: null, right: null },
    };

    expect(maxTreeDepth(root)).toBe(3);
  });
});
