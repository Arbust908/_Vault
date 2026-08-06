import { describe, expect, test } from "bun:test";
import { normalizeTitles } from "../09-normalize-api-data";

describe("normalizeTitles", () => {
  test("normalizes titles and shared genres by id", () => {
    expect(
      normalizeTitles([
        {
          id: "movie-1",
          title: "First",
          genres: [
            { id: "drama", name: "Drama" },
            { id: "comedy", name: "Comedy" },
          ],
        },
        {
          id: "movie-2",
          title: "Second",
          genres: [{ id: "drama", name: "Drama" }],
        },
      ]),
    ).toEqual({
      titles: {
        "movie-1": {
          id: "movie-1",
          title: "First",
          genreIds: ["drama", "comedy"],
        },
        "movie-2": {
          id: "movie-2",
          title: "Second",
          genreIds: ["drama"],
        },
      },
      genres: {
        drama: { id: "drama", name: "Drama" },
        comedy: { id: "comedy", name: "Comedy" },
      },
    });
  });

  test("uses the last occurrence of duplicate ids", () => {
    expect(
      normalizeTitles([
        {
          id: "same",
          title: "Old",
          genres: [{ id: "genre", name: "Old name" }],
        },
        {
          id: "same",
          title: "New",
          genres: [{ id: "genre", name: "New name" }],
        },
      ]),
    ).toEqual({
      titles: {
        same: { id: "same", title: "New", genreIds: ["genre"] },
      },
      genres: { genre: { id: "genre", name: "New name" } },
    });
  });

  test("handles empty input", () => {
    expect(normalizeTitles([])).toEqual({ titles: {}, genres: {} });
  });
});
