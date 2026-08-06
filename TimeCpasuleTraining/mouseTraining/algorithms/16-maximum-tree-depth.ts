// Task: Calculate the maximum depth of a binary tree.

export type TreeNode<T> = {
  readonly value: T;
  readonly left: TreeNode<T> | null;
  readonly right: TreeNode<T> | null;
};

export function maxTreeDepth<T>(root: TreeNode<T> | null): number {
  throw new Error("TODO");
}

// Count the root as depth 1; an empty tree has depth 0.
