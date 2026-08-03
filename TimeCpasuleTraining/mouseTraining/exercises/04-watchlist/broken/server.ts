import { createServer } from "node:http";

type WatchlistEntry = { titleId: string; addedAt: string };

const watchlist: WatchlistEntry[] = [];

function sendJson(response: import("node:http").ServerResponse, status: number, body: unknown) {
  response.statusCode = status;
  response.setHeader("content-type", "application/json");
  response.end(JSON.stringify(body));
}

const server = createServer((request, response) => {
  const url = new URL(request.url ?? "/", "http://localhost");
  const parts = url.pathname.split("/").filter(Boolean);

  if (request.method === "GET" && url.pathname === "/titles") {
    sendJson(response, 200, [{ id: "1", title: "Moana" }, { id: "2", title: "Encanto" }]);
    return;
  }

  if (request.method === "POST" && parts[0] === "watchlists" && parts[2] === "items") {
    let body = "";
    request.on("data", (chunk) => { body += chunk; });
    request.on("end", () => {
      const parsed = JSON.parse(body);
      watchlist.push({ titleId: parsed.titleId, addedAt: new Date().toISOString() });
      sendJson(response, 200, watchlist);
    });
    return;
  }

  if (request.method === "DELETE" && parts[0] === "watchlists" && parts[2] === "items") {
    const titleId = parts[3];
    watchlist.splice(watchlist.findIndex((entry) => entry.titleId === titleId), 1);
    sendJson(response, 200, watchlist);
    return;
  }

  sendJson(response, 404, { message: "Not found" });
});

server.listen(3000, () => console.log("Watchlist API listening on http://localhost:3000"));
