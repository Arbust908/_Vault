import { describe, expect, test } from "bun:test";
import { lengthOfLongestSubstring } from "../13-longest-substring-without-repeating";

describe("lengthOfLongestSubstring", () => {
  test("returns the longest contiguous span without repeated code units", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });

  test("handles empty and single-character strings", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
    expect(lengthOfLongestSubstring("a")).toBe(1);
  });

  test("handles duplicate and overlapping characters", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    expect(lengthOfLongestSubstring("abba")).toBe(2);
    expect(lengthOfLongestSubstring("dvdf")).toBe(3);
  });

  test("counts UTF-16 code units rather than Unicode code points", () => {
    expect(lengthOfLongestSubstring("\uD83D\uDE00")).toBe(2);
    expect(lengthOfLongestSubstring("\uD83D\uDE00\uD83D\uDE03")).toBe(3);
  });
});
