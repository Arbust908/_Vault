// Task: Remove duplicate events by ID while preserving their required order.

type Event = { id: string; timestamp: number; payload: unknown };

export function deduplicateEvents(events: readonly Event[]): Event[] {
  throw new Error("TODO");
}

// Keep first or last occurrence deliberately; preserve the required output order.
