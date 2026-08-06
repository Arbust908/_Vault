// Task: Group words that contain the same characters with the same frequencies.

export function groupAnagrams(words: readonly string[]): string[][] {
  const metadata = new Map<string, number>();
  const anagrams = words.reduce((groups, current) => {
    const word = [...current].sort().join("");

    const groupIndex = metadata.get(word);

    if (groupIndex !== undefined) {
      groups[groupIndex].push(current);
    } else {
      const newMetadataIndex = groups.push([current]) - 1;
      metadata.set(word, newMetadataIndex);
    }

    return groups
  }, [] as string[][])
  return anagrams
}

// Match case-sensitive JS characters; preserve first-group and member order.
