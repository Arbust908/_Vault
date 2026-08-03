type Command =
  | { type: "ADD"; id: string; value: number }
  | { type: "UPDATE"; id: string; value: number }
  | { type: "DELETE"; id: string }
  | { type: "GET"; id: string };

type Result = { id: string; ok: boolean; value?: number; error?: string };

export function processCommands(commands: readonly Command[]): Result[] {
  throw new Error("TODO");
}

// Preserve command order and document duplicate/missing-record behavior.
