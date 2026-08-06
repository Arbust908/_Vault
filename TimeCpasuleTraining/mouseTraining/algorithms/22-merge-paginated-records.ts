// Task: Merge paginated records and remove duplicate IDs.

export type Page<T> = {
  readonly records: readonly T[];
  readonly cursor?: string | null;
};

export function mergePaginatedRecords<T extends { id: string | number }>(
  pages: readonly Page<T>[],
): T[] {
  throw new Error("TODO");
}

// Keep the first occurrence of each ID in page and record order; cursors are metadata only.
