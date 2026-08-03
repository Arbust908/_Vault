import { useEffect, useState } from "react";
import { searchTitles, type Title } from "./api";

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
  return (
    <>
      <h2>{title?.name ?? "Choose a title"}</h2>
      <div>
        <span>{title?.genre ?? ""}</span>
        <span>{title?.year ?? ""}</span>
      </div>
      <p>{title?.description ?? "Select a result to see more."}</p>
    </>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [titles, setTitles] = useState<Title[]>([]);
  const [selected, setSelected] = useState<Title | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("name");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setStatus("loading");
      searchTitles(query)
        .then((nextTitles) => {
          setTitles(nextTitles);
          setStatus("success");
        })
        .catch((reason: Error) => {
          setError(reason.message);
          setStatus("error");
        });
    }, 250);
  }, []);

  const visibleTitles = [...titles].sort(sortRecords[sortOrder]);

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
        {status === "loading" && <p>Searching...</p>}
        {status === "error" && <p className="error">{error}</p>}
        {status === "success" && visibleTitles.length === 0 && (
          <p>No titles found.</p>
        )}
        {visibleTitles.map((title) => (
          <MovieButton
            key={title.uuid}
            title={title}
            onClick={() => setSelected(title)}
          />
        ))}
      </section>
      <aside className="details">
        <MovieDetails title={selected} />
      </aside>
    </main>
  );
}
