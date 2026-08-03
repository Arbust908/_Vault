type RecordValue = Record<string, unknown>;

export function groupBy<T extends RecordValue>(
  records: readonly T[],
  property: keyof T,
): Record<string, T[]> {
  throw new Error("TODO");
}

// Define what happens when the property is missing or not a string/number.
