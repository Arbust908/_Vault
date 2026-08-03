export async function mapWithConcurrency<T, R>(
  values: readonly T[],
  limit: number,
  worker: (value: T, index: number) => Promise<R>,
): Promise<R[]> {
  throw new Error("TODO");
}

// Reject invalid limits, preserve result order, and decide what happens after one worker fails.
