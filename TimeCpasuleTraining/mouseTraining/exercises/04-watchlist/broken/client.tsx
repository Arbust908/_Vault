import { useEffect, useState } from "react";

type Title = { id: string; title: string };

export default function Watchlist() {
  const [titles, setTitles] = useState<Title[]>([]);
  const [watchlist, setWatchlist] = useState<string[]>([]);

  useEffect(() => {
    fetch("/titles").then((response) => response.json()).then(setTitles);
  }, []);

  function add(titleId: string) {
    fetch("/watchlists/main/items", {
      method: "POST",
      body: JSON.stringify({ titleId }),
    });
    watchlist.push(titleId);
    setWatchlist(watchlist);
  }

  return (
    <section>
      <h1>Watchlist</h1>
      {titles.map((item, index) => (
        <button key={index} onClick={() => add(item.id)}>{item.title}</button>
      ))}
      <p>{watchlist.length} saved</p>
    </section>
  );
}
