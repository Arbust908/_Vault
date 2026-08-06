// Task: Implement a fixed-capacity least recently used cache.

export class LruCache<K, V> {
  constructor(private readonly capacity: number) {}

  get(key: K): V | undefined {
    throw new Error("TODO");
  }

  set(key: K, value: V): void {
    throw new Error("TODO");
  }
}

// State the expected complexity for get and set before choosing a structure.
