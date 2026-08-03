import { useState } from "react";

type HistoryEntry = {
  expression: string;
  result: number;
};

const keys = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
];
const symbolRegex = /^[\+\-\*\/]$/;
const numberRegex = /^[0-9]$/;

function isValidExpression(expr: string): boolean {
  // Check if the expression is empty
  if (expr === "") return false;
  // Ends with a symbol
  const lastChar = expr.slice(-1);
  if (symbolRegex.test(lastChar) || lastChar === ".") return false;

  return true;
}

function previewCalculations(expr: string): number | string {
  if (expr === "") return 0;
  if (!isValidExpression(expr)) {
    return previewCalculations(expr.slice(0, -1)); // Remove the last character and try again
  }
  try {
    // eslint-disable-next-line no-eval
    const value = eval(expr);
    if (Number.isFinite(value)) {
      return value;
    } else {
      return "Invalid calculation"; // Handle division by zero or other invalid operations
    }
  } catch (error) {
    return previewCalculations(expr.slice(0, -1)); // Remove the last character and try again
  }
}
function calculations(expr: string): number | false {
  if (!isValidExpression(expr)) {
    return false;
  }
  try {
    // eslint-disable-next-line no-eval
    const value = eval(expr);
    if (Number.isFinite(value)) {
      return value;
    } else {
      return false;
    }
  } catch (error) {
    return false; // Return false for any evaluation errors
  }
}

export default function App() {
  const [expression, setExpression] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const result = expression ? previewCalculations(expression) : 0;

  function press(key: string) {
    if (key === "=") {
      if (!isValidExpression(expression)) {
        return;
      }

      const value = calculations(expression);
      if (value === false) {
        console.log("Invalid calculation"); // Log the error message
        return;
      }
      setHistory((prevHistory) => [
        { expression, result: value },
        ...prevHistory,
      ]);
      clear();
      return;
    }

    if (symbolRegex.test(key) && !isValidExpression(expression)) {
      console.log("Ignoring multiple symbols in a row");
      return;
    }
    const parts = expression.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];
    if (key === ".") {
      if (lastPart.includes(".")) {
        console.log("Ignoring multiple decimal points");
        return;
      }
    }

    if (numberRegex.test(key)) {
      if (lastPart === "0") {
        console.log("Ignoring multiple leading zeros");
        return;
      }
    }

    setExpression(expression + key);
    console.log(`New expression: ${expression + key}`);
  }

  function clear() {
    setExpression("");
  }

  function backspace() {
    setExpression(expression.slice(0, -1));
  }

  return (
    <main className="calculator-shell">
      <section className="calculator" aria-label="Calculator">
        <p className="eyebrow">Practice app</p>
        <h1>Streamline calculator</h1>
        <output className="display" aria-live="polite">
          <span>{expression || "0"}</span>
          <strong className={typeof result === "string" ? "error" : ""}>
            {result}
          </strong>
        </output>
        <div className="keypad">
          <button className="clear" onClick={clear}>
            Clear
          </button>
          <button className="backspace" onClick={backspace}>
            {"<="}
          </button>
          {keys.map((key, index) => (
            <button
              key={index}
              className={key === "=" ? "equals" : ""}
              onClick={() => press(key)}
            >
              {key}
            </button>
          ))}
        </div>
      </section>
      <aside className="history">
        <h2>History</h2>
        {history.length === 0 ? (
          <p>No calculations yet.</p>
        ) : (
          history.map((item, index) => (
            <p key={index}>
              {item.expression} = {item.result}
            </p>
          ))
        )}
      </aside>
    </main>
  );
}
