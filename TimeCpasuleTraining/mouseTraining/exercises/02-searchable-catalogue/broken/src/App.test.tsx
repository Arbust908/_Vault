import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import { searchTitles, type Title } from "./api";

vi.mock("./api", () => ({
  searchTitles: vi.fn(),
}));

const mockedSearchTitles = vi.mocked(searchTitles);

const olderTitle: Title = {
  uuid: "older",
  name: "Older result",
  year: 1990,
  genre: "Drama",
  description: "This result belongs to the older query.",
};

const newerTitle: Title = {
  uuid: "newer",
  name: "Newer result",
  year: 2020,
  genre: "Comedy",
  description: "This result belongs to the newer query.",
};

function deferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (reason: Error) => void;
  const promise = new Promise<T>((next, fail) => {
    resolve = next;
    reject = fail;
  });

  return { promise, reject, resolve };
}

async function passDebounce() {
  await act(async () => {
    vi.advanceTimersByTime(250);
  });
}

describe("App", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockedSearchTitles.mockReset();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it("searches with the current query after the debounce delay", async () => {
    mockedSearchTitles.mockResolvedValue([]);
    render(<App />);

    fireEvent.change(screen.getByLabelText("Search titles"), {
      target: { value: "Moana" },
    });

    await act(async () => {
      vi.advanceTimersByTime(249);
    });
    expect(mockedSearchTitles).not.toHaveBeenCalled();

    await act(async () => {
      vi.advanceTimersByTime(1);
    });
    expect(mockedSearchTitles).toHaveBeenCalledTimes(1);
    expect(mockedSearchTitles).toHaveBeenCalledWith("Moana");
  });

  it("resets the debounce when the user types rapidly", async () => {
    mockedSearchTitles.mockResolvedValue([]);
    render(<App />);

    fireEvent.change(screen.getByLabelText("Search titles"), {
      target: { value: "Mo" },
    });
    await act(async () => {
      vi.advanceTimersByTime(200);
    });

    fireEvent.change(screen.getByLabelText("Search titles"), {
      target: { value: "Moana" },
    });
    await act(async () => {
      vi.advanceTimersByTime(249);
    });
    expect(mockedSearchTitles).not.toHaveBeenCalled();

    await act(async () => {
      vi.advanceTimersByTime(1);
    });
    expect(mockedSearchTitles).toHaveBeenCalledTimes(1);
    expect(mockedSearchTitles).toHaveBeenCalledWith("Moana");
  });

  it("never lets an older response replace newer results", async () => {
    const olderResponse = deferred<Title[]>();
    const newerResponse = deferred<Title[]>();
    mockedSearchTitles.mockImplementation((query) => {
      if (query === "old") return olderResponse.promise;
      if (query === "new") return newerResponse.promise;
      return Promise.resolve([]);
    });
    render(<App />);

    fireEvent.change(screen.getByLabelText("Search titles"), {
      target: { value: "old" },
    });
    await passDebounce();
    fireEvent.change(screen.getByLabelText("Search titles"), {
      target: { value: "new" },
    });
    await passDebounce();

    expect(mockedSearchTitles).toHaveBeenCalledWith("old");
    expect(mockedSearchTitles).toHaveBeenCalledWith("new");

    await act(async () => {
      newerResponse.resolve([newerTitle]);
    });
    expect(screen.getByText("Newer result")).toBeInTheDocument();

    await act(async () => {
      olderResponse.resolve([olderTitle]);
    });
    expect(screen.getByText("Newer result")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /Older result/ }),
    ).not.toBeInTheDocument();
  });

  it("never lets an older rejection replace a newer success", async () => {
    const olderResponse = deferred<Title[]>();
    const newerResponse = deferred<Title[]>();
    mockedSearchTitles.mockImplementation((query) => {
      if (query === "old") return olderResponse.promise;
      if (query === "new") return newerResponse.promise;
      return Promise.resolve([]);
    });
    render(<App />);

    fireEvent.change(screen.getByLabelText("Search titles"), {
      target: { value: "old" },
    });
    await passDebounce();
    fireEvent.change(screen.getByLabelText("Search titles"), {
      target: { value: "new" },
    });
    await passDebounce();

    await act(async () => {
      newerResponse.resolve([newerTitle]);
    });
    expect(screen.getByText("Newer result")).toBeInTheDocument();

    await act(async () => {
      olderResponse.reject(new Error("Older request failed"));
    });
    expect(screen.getByText("Newer result")).toBeInTheDocument();
    expect(screen.queryByText("Older request failed")).not.toBeInTheDocument();
  });

  it("shows a loading state while the current search is pending", async () => {
    const response = deferred<Title[]>();
    mockedSearchTitles.mockReturnValue(response.promise);
    render(<App />);

    fireEvent.change(screen.getByLabelText("Search titles"), {
      target: { value: "Moana" },
    });
    await passDebounce();

    expect(screen.getByText("Searching...")).toBeInTheDocument();

    await act(async () => {
      response.resolve([newerTitle]);
    });
    expect(screen.queryByText("Searching...")).not.toBeInTheDocument();
  });

  it("shows an empty state when the current search has no results", async () => {
    mockedSearchTitles.mockResolvedValue([]);
    render(<App />);

    fireEvent.change(screen.getByLabelText("Search titles"), {
      target: { value: "missing" },
    });
    await passDebounce();

    expect(screen.getByText("No titles found.")).toBeInTheDocument();
    expect(screen.getByText("0 results")).toBeInTheDocument();
  });

  it("shows an error state when the current search fails", async () => {
    mockedSearchTitles.mockRejectedValue(
      new Error("Catalogue service unavailable"),
    );
    render(<App />);

    fireEvent.change(screen.getByLabelText("Search titles"), {
      target: { value: "error" },
    });
    await passDebounce();

    expect(
      screen.getByText("Catalogue service unavailable"),
    ).toBeInTheDocument();
    expect(screen.queryByText("Searching...")).not.toBeInTheDocument();
  });

  it("changes the visible sort order without mutating the response array", async () => {
    const alphaTitle: Title = {
      ...olderTitle,
      name: "Alpha result",
    };
    const zebraTitle: Title = {
      ...newerTitle,
      name: "Zebra result",
    };
    const source = [zebraTitle, alphaTitle];
    mockedSearchTitles.mockResolvedValue(source);
    render(<App />);

    await passDebounce();

    let resultButtons = screen.getAllByRole("button");
    expect(resultButtons[0]).toHaveTextContent("Alpha result");
    expect(resultButtons[1]).toHaveTextContent("Zebra result");
    expect(source[0]).toBe(zebraTitle);
    expect(source[1]).toBe(alphaTitle);

    fireEvent.change(screen.getByLabelText("Sort by"), {
      target: { value: "year" },
    });

    resultButtons = screen.getAllByRole("button");
    expect(resultButtons[0]).toHaveTextContent("Zebra result");
    expect(resultButtons[1]).toHaveTextContent("Alpha result");
    expect(source[0]).toBe(zebraTitle);
    expect(source[1]).toBe(alphaTitle);
  });

  it("renders a result count that matches the visible list", async () => {
    mockedSearchTitles.mockResolvedValue([olderTitle, newerTitle]);
    render(<App />);

    await passDebounce();

    expect(screen.getAllByRole("button")).toHaveLength(2);
    expect(screen.getByText("2 results")).toBeInTheDocument();
  });

  it("clears selected details when the selected title leaves the results", async () => {
    mockedSearchTitles
      .mockResolvedValueOnce([olderTitle, newerTitle])
      .mockResolvedValueOnce([newerTitle]);
    render(<App />);

    await passDebounce();
    fireEvent.click(screen.getByRole("button", { name: /Older result/ }));
    expect(
      screen.getByRole("heading", { name: "Older result" }),
    ).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Search titles"), {
      target: { value: "new" },
    });
    await passDebounce();

    expect(
      screen.queryByRole("button", { name: /Older result/ }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Choose a title" }),
    ).toBeInTheDocument();
  });
});
