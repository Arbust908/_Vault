// Task: Implement a Set-like collection without using Set, indexOf, includes, or find.

export class SimpleSet<T> {
  private values: T[] = [];

  private valueIndex(value: T): number {
    for (let i = 0; i < this.values.length; i++) {
      if (this.values[i] === value) {
        return i;
      }
      // edge case for NaN, since NaN !== NaN
      if (Number.isNaN(this.values[i]) && Number.isNaN(value)) {
        return i;
      }
    }
    return -1;
  }

  add(value: T): void {
    if (this.valueIndex(value) === -1) {
      this.values.push(value)
    }
  }

  has(value: T): boolean {
    return this.valueIndex(value) !== -1
  }

  delete(value: T): boolean {
    const initialSize = this.size
    const valueIdx = this.valueIndex(value)
    if (valueIdx !== -1) {
      this.values.splice(valueIdx, 1)
    }
    const afterSize = this.size
    return initialSize > afterSize;
  }

  get size(): number {
    return this.values.length;
  }
}

// Decide how equality should work and state that decision in your notes.
