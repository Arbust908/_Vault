Using react 19 `useOptimistic` for better entity handling

**Before**

``` React.js
import { useState } from "react";

function CommentList() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const newComment = {
      id: Date.now(),
      text: input,
      status: "pending",
    }

    setComments((prev) => [...prev, newComment]);
    setInput("");
    setPending(true);

    try {
      await api.post("/comments", { text: input });
      setComments((prev) => prev.map((c) => c.id === newComment.id ? { ...c, status: "success" } : c));
    } catch (error) {
      setComments((prev) => prev.map((c) => c.id === newComment.id ? { ...c, status: "error" } : c));
    } finally {
      setPending(false);
    }
  }

  return (/* UI with loading logic via pending state */)
}
```

**After**

``` React.js
import { useState, useOptimistic } from "react";
function CommentList() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (prev, newComment) => [...prev, newComment]
  );

  async function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const newComment = {
      id: Date.now(),
      text: input,
    }

    addOptimisticComment(newComment);
    setInput("");

    try {
      await api.post("/comments", { text: input });
      // when successful commit to state
      setComments(prev => [...prev, newComment]);
    } catch (error) {
      // Handle error, e.g. show a toast or remove the optimistic comment
    }
  }

  return (/* UI using optimisticComments */)
}
```