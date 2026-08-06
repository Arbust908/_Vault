import { useEffect, useState } from "react";
import type { Title } from "./api";
import { useFetchTitles } from "./utils/useFetchTitles";

type SortOrder = "name" | "year";

const sortRecords: Record<SortOrder, (left: Title, right: Title) => number> = {
  name: (left, right) => left.name.localeCompare(right.name),
  year: (left, right) => right.year - left.year,
};

function MovieButton({
  title,
  onClick,
}: {
  title: Title;
  onClick: () => void;
}) {
  return (
    <button className="result" onClick={onClick}>
      <strong>{title.name}</strong>
      <span>
        {title.genre} / {title.year}
      </span>
    </button>
  );
}

function MovieDetails({ title }: { title: Title | null }) {
  const hasGenre = title?.genre && title.genre.length > 0;
  const hasYear = title?.year && title.year > 0;

  return (
    <>
      <h2>{title?.name ?? "Choose a title"}</h2>
      {(hasGenre || hasYear) && (
        <div style={{ display: "flex", gap: "1rem" }}>
          {hasGenre && <span>{title?.genre ?? ""}</span>}
          {hasYear && <span>{title?.year ?? ""}</span>}
        </div>
      )}
      <p>{title?.description ?? "Select a result to see more."}</p>
      <hr />
      <small style={{ fontSize: "0.8rem" }}>{title?.uuid}</small>
    </>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Title | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("name");

  const { titles, loading, error } = useFetchTitles(query, 250);

  useEffect(() => {
    setSelected(null);
  }, [titles]);

  const visibleTitles = [...titles].sort(sortRecords[sortOrder]);
  const resultCount = loading ? "?" : visibleTitles.length;

  return (
    <main className="catalogue-shell">
      <header>
        <p className="eyebrow">Practice app</p>
        <h1>Find a story</h1>
        <label htmlFor="search">Search titles</label>
        <input
          id="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try Moana"
        />
        <label htmlFor="sort">Sort by</label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value as SortOrder)}
        >
          <option value="name">Name</option>
          <option value="year">Newest</option>
        </select>
      </header>
      <section className="results" aria-live="polite">
        <p>{resultCount} results</p>
        {loading && <p>Searching...</p>}
        {error && <p className="error">{error.message}</p>}
        {!loading &&
          !error &&
          (visibleTitles.length === 0 ? (
            <p>No titles found.</p>
          ) : (
            <>
              {visibleTitles.map((title) => (
                <MovieButton
                  key={title.uuid}
                  title={title}
                  onClick={() => setSelected(title)}
                />
              ))}
            </>
          ))}
      </section>
      <aside className="details">
        <MovieDetails title={selected} />
      </aside>
    </main>
  );
}
