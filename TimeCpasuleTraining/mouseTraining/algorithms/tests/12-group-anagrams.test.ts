import { describe, expect, test } from "bun:test";
import { groupAnagrams } from "../12-group-anagrams";

describe("groupAnagrams", () => {
  test("groups anagrams while preserving member order", () => {
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
      ["eat", "tea", "ate"],
      ["tan", "nat"],
      ["bat"],
    ]);
  });

  test("orders groups by the first occurrence of each signature", () => {
    expect(groupAnagrams(["abc", "foo", "bca", "ofo", "bar", "cab"])).toEqual([
      ["abc", "bca", "cab"],
      ["foo", "ofo"],
      ["bar"],
    ]);
  });

  test("keeps duplicate words in input order", () => {
    expect(groupAnagrams(["ab", "ab", "ba", "ab"])).toEqual([
      ["ab", "ab", "ba", "ab"],
    ]);
  });

  test("keeps same letter with diffrent frecuency words in separated groups", () => {
    expect(groupAnagrams(["abb", "aab", "bab", "aba"])).toEqual([
      ["abb", "bab"],
      ["aab", "aba"],
    ]);
  });

  test("is case-sensitive and handles empty strings and punctuation", () => {
    expect(groupAnagrams(["", "a!", "A", "!a", "", "a"])).toEqual([
      ["", ""],
      ["a!", "!a"],
      ["A"],
      ["a"],
    ]);
  });

  test("returns no groups for empty input", () => {
    expect(groupAnagrams([])).toEqual([]);
  });
});
