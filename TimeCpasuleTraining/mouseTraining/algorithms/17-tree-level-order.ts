// Task: Return the values of a binary tree grouped by level.

export type TreeNode<T> = {
  readonly value: T;
  readonly left: TreeNode<T> | null;
  readonly right: TreeNode<T> | null;
};

export function levelOrder<T>(root: TreeNode<T> | null): T[][] {
  throw new Error("TODO");
}

// Group values by depth, visiting each level from left to right.
