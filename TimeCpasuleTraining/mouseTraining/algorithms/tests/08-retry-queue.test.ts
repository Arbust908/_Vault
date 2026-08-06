import { describe, expect, test } from "bun:test";
import { retry } from "../08-retry-queue";

describe("retry", () => {
  test("returns the first successful result", async () => {
    let calls = 0;

    const result = await retry(
      async () => {
        calls += 1;
        if (calls < 3) throw new Error("temporary");
        return "ok";
      },
      { attempts: 3, delayMs: 0 },
    );

    expect(result).toBe("ok");
    expect(calls).toBe(3);
  });

  test("attempts includes the first call and rethrows the last error", async () => {
    const errors = [new Error("first"), new Error("last")];
    let calls = 0;

    const result = retry(
      async () => {
        throw errors[calls++];
      },
      { attempts: 2, delayMs: 0 },
    );

    await expect(result).rejects.toBe(errors[1]);
    expect(calls).toBe(2);
  });

  test("lets shouldRetry stop the queue after a failed attempt", async () => {
    const seenAttempts: number[] = [];
    let calls = 0;

    await expect(
      retry(
        async () => {
          calls += 1;
          throw new Error("no");
        },
        {
          attempts: 4,
          delayMs: 0,
          shouldRetry: (_error, attempt) => {
            seenAttempts.push(attempt);
            return false;
          },
        },
      ),
    ).rejects.toThrow("no");
    expect(calls).toBe(1);
    expect(seenAttempts).toEqual([1]);
  });

  test("waits between attempts but not before the first call", async () => {
    let calls = 0;
    const startedAt = performance.now();

    const result = retry(
      async () => {
        calls += 1;
        if (calls === 1) throw new Error("again");
        return "ok";
      },
      { attempts: 2, delayMs: 15 },
    );

    expect(calls).toBe(1);
    await expect(result).resolves.toBe("ok");
    expect(performance.now() - startedAt).toBeGreaterThanOrEqual(10);
  });

  test("rejects invalid options without calling the worker", async () => {
    let calls = 0;
    const worker = async () => ++calls;

    await expect(retry(worker, { attempts: 0, delayMs: 0 })).rejects.toBeInstanceOf(
      RangeError,
    );
    await expect(retry(worker, { attempts: 1, delayMs: -1 })).rejects.toBeInstanceOf(
      RangeError,
    );
    expect(calls).toBe(0);
  });
});
