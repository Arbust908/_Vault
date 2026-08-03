import { useEffect, useState } from "react";

type HistoryEntry = {
  expression: string;
  result: number;
};

const keys = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"];

export default function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    if (!expression) {
      return;
    }

    try {
      // This is intentionally unsafe and also stores derived state separately.
      setResult(eval(expression));
    } catch {
      setResult(0);
    }
  }, []);

  function press(key: string) {
    if (key === "=") {
      const value = eval(expression);
      setResult(value);
      history.unshift({ expression, result: value });
      setHistory(history);
      return;
    }

    setExpression(expression + key);
  }

  function clear() {
    setExpression("");
    setResult(0);
  }

  return (
    <main className="calculator-shell">
      <section className="calculator" aria-label="Calculator">
        <p className="eyebrow">Practice app</p>
        <h1>Streamline calculator</h1>
        <output className="display" aria-live="polite">
          <span>{expression || "0"}</span>
          <strong>{result}</strong>
        </output>
        <div className="keypad">
          <button className="clear" onClick={clear}>Clear</button>
          {keys.map((key, index) => (
            <button key={index} className={key === "=" ? "equals" : ""} onClick={() => press(key)}>
              {key}
            </button>
          ))}
        </div>
      </section>
      <aside className="history">
        <h2>History</h2>
        {history.length === 0 ? <p>No calculations yet.</p> : history.map((item, index) => (
          <p key={index}>{item.expression} = {item.result}</p>
        ))}
      </aside>
    </main>
  );
}
