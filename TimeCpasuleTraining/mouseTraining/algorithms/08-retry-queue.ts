// Task: Retry an asynchronous worker according to the provided options.

export type RetryOptions = {
  attempts: number;
  delayMs: number;
  shouldRetry?: (error: unknown, attempt: number) => boolean;
};

export async function retry<T>(
  worker: () => Promise<T>,
  options: RetryOptions,
): Promise<T> {
  throw new Error("TODO");
}

// Decide whether attempts includes the first call and how delays are scheduled.
