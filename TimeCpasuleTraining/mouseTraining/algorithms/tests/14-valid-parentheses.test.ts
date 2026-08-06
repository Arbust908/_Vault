import { describe, expect, test } from "bun:test";
import { isValidParentheses } from "../14-valid-parentheses";

describe("isValidParentheses", () => {
  test("accepts balanced pairs and nesting", () => {
    expect(isValidParentheses("()")).toBe(true);
    expect(isValidParentheses("()[]{}")).toBe(true);
    expect(isValidParentheses("{[()]}")).toBe(true);
  });

  test("accepts the empty string", () => {
    expect(isValidParentheses("")).toBe(true);
  });

  test("rejects mismatched and incorrectly ordered delimiters", () => {
    expect(isValidParentheses("(]")).toBe(false);
    expect(isValidParentheses("([)]")).toBe(false);
    expect(isValidParentheses("]")).toBe(false);
  });

  test("rejects unclosed delimiters and handles repeated pairs", () => {
    expect(isValidParentheses("((")).toBe(false);
    expect(isValidParentheses("(()")).toBe(false);
    expect(isValidParentheses("[][][]")).toBe(true);
  });
});
