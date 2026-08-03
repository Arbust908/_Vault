I thought hiding UI in React was harmless.

Until I lost form input, active tabs, and sidebar state because of this pattern:

{isOpen && <Sidebar />}

It looks clean, but when the condition becomes false, React removes that component from the tree.

That means:

• local state resets
• DOM state is removed
• effects are cleaned up
• the component mounts again when it comes back

React 19.2 introduced a cleaner option:

<Activity />

It lets you hide UI while preserving local state for when the user returns.

Useful for tabs, sidebars, multi-step forms, dashboards, and panels users open and close often.

Sometimes better UX is not about writing more state logic.

It is about preserving the state you already have.

Have you tried <Activity /> in React 19.2 yet?

[activity_component_react.jpeg](activity_component_react.jpeg)