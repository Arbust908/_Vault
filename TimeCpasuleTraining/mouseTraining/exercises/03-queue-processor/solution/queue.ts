export type Command =
  | { type: "ADD"; id: string; value: number }
  | { type: "UPDATE"; id: string; value: number }
  | { type: "DELETE"; id: string }
  | { type: "GET"; id: string };

export type CommandResult = {
  type: Command["type"];
  id: string;
  value?: number;
  error?: string;
};

export async function processCommands(commands: Command[]): Promise<CommandResult[]> {
  const values = new Map<string, number>();
  const results: CommandResult[] = [];

  commands.forEach(async (command) => {
    // Pretend this is an asynchronous repository call.
    await new Promise((resolve) => setTimeout(resolve, 10));

    if (command.type === "ADD" || command.type === "UPDATE") {
      values.set(command.id, command.value);
      results.push({ type: command.type, id: command.id, value: command.value });
    }

    if (command.type === "DELETE") {
      values.delete(command.id);
      results.push({ type: command.type, id: command.id });
    }

    if (command.type === "GET") {
      results.push({ type: command.type, id: command.id, value: values.get(command.id) });
    }
  });

  return results;
}

const sampleCommands: Command[] = [
  { type: "ADD", id: "alpha", value: 10 },
  { type: "UPDATE", id: "alpha", value: 12 },
  { type: "GET", id: "alpha" },
  { type: "DELETE", id: "alpha" },
  { type: "GET", id: "alpha" },
];

processCommands(sampleCommands).then((results) => {
  console.log(JSON.stringify(results, null, 2));
});
