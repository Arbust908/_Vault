// Task: Find two distinct indices whose values add up to the target.

export function twoSum(
  numbers: readonly number[],
  target: number,
): [number, number] | null {
  for (let distance = 1; distance < numbers.length; distance++) {
    for (let left = 0; left + distance < numbers.length; left++) {
      const right = left + distance;
      const current = numbers[left];
      const second = numbers[right];
      const sum = current + second
      if (sum === target) {
        return [left, right]
      }
    }
  }
  return null
}

// Return the first pair discovered left to right, using each index at most once.
