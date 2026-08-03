I sat down with a junior to explain our auth flow.

Five minutes in, they asked a question I couldn't answer.

"Why does the token refresh happen in the component instead of in the API layer?"

I opened my mouth. Nothing came out.

I'd written that code 8 months ago.
It worked. Tests passed. Nobody complained. I never questioned it.

But they were right.

The token refresh had no business being
in a React component. It was there because
I'd built it during a sprint when I was moving fast and useEffect was the fastest place to put it.

It stayed because it worked.
Not because it was right.

I moved it to the API interceptor that afternoon. 20 minutes of work.
Cleaner separation. No more race conditions on concurrent requests.

A fix that had been sitting there for 8 months. Invisible to me because I'd stopped seeing it.

That's the thing about experience.
It teaches you patterns. But it also teaches you to stop questioning them.

Juniors don't have that baggage.
They ask "why" about things you stopped asking "why" about years ago.

I don't pair with juniors to teach anymore.
I pair with them to hear the questions I've forgotten to ask.

