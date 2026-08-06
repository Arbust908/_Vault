// Task: Normalize nested titles and genres into records keyed by ID.

type ApiTitle = {
  id: string;
  title: string;
  genres: { id: string; name: string }[];
};

type NormalizedTitles = {
  titles: Record<string, Omit<ApiTitle, "genres"> & { genreIds: string[] }>;
  genres: Record<string, { id: string; name: string }>;
};

export function normalizeTitles(titles: readonly ApiTitle[]): NormalizedTitles {
  throw new Error("TODO");
}

// Preserve references by ID and define behavior for duplicate IDs.
