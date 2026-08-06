Scoring
5 = fully correct, 4 = correct with minor gaps, 3 = partially correct, 2 = major conceptual gaps, 1 = unknown or incorrect.
1. Source vs. derived state: 4/5
Your central idea is correct. The preferred term is derived state, not “derivative state.”
Source state is the minimal source of truth, such as the selected items or current search query. A derived value is calculated from source state or props:
const total = items.reduce((sum, item) => sum + item.price, 0)
Storing total separately creates two sources of truth. If items changes without updating total, the UI becomes inconsistent. The danger is not that both values “use the same state,” but that one value must always be synchronized with another.
Improved answer: Source state stores independent information. Derived values can be calculated from existing state or props. Duplicating a derived value in state is dangerous because every update must keep both representations synchronized, creating opportunities for stale or contradictory UI.
2. Functional state updates: 3/5
You correctly explained why two calls may produce one increment. Both calls read the same count from the current render:
setCount(count + 1)
setCount(count + 1)
If count is 0, both enqueue the replacement value 1.
The rule for functional updates needs correction. Use one whenever the next value depends on the previous value, especially with multiple queued updates:
setCount(previous => previous + 1)
setCount(previous => previous + 1)
React processes these sequentially, producing 2.
Avoid describing it as obtaining the “correct reference.” The updater receives the latest pending state value, not an object reference.
Improved answer: React state is a snapshot for each render. Both direct calls calculate count + 1 from the same snapshot, so they enqueue the same value. Use a functional update whenever the next state depends on the previous state.
3. Stale closures: 2/5
You recognized that old values are involved, but the definition of a closure is incorrect. A closure is not simply one function calling another. It is a function retaining access to variables from the scope in which it was created.
Every React render creates a snapshot of state and new event-handler functions. An asynchronous callback can retain values from an older render:
function handleClick() {
  setTimeout(() => {
    console.log(count)
  }, 1000)
}
The callback logs the count captured when handleClick was created, even if count changes before the timeout executes.
This is not necessarily a race condition. It is often the expected behavior of JavaScript closures combined with React’s render snapshots.
Improved answer: A stale closure occurs when a callback uses props or state captured from an older render instead of the values needed when the callback eventually runs. It commonly appears in effects, timers, subscriptions, and asynchronous handlers.
4. Effect dependencies: 2/5
There are important corrections:
- An effect with no dependency array runs after every render.
- An effect with [] normally runs after mounting.
- An effect missing a reactive dependency does not rerun when that value changes.
- An unnecessary dependency can cause excessive synchronization and sometimes loops.
A normal statement during rendering is not a replacement for an effect if it performs a side effect. Rendering must remain pure. However, if you are merely calculating a value from props or state, calculating it during rendering is often preferable to an effect.
useEffect(() => {
  subscription.setRoom(roomId)
}, [roomId])
Omitting roomId means the external subscription may continue using an old room.
Improved answer: A missing dependency causes a correctness bug when the effect synchronizes something using a reactive value but fails to resynchronize after that value changes. Effects should synchronize React with external systems; pure derived calculations generally do not need effects.
5. Mutating state objects or arrays: 5/5
This is correct. React compares the old and new state using identity semantics similar to Object.is. Mutating an existing array preserves its reference:
items.push(newItem)
setItems(items)
React can treat this as the same state value and skip rendering. Mutation can also corrupt previous render snapshots.
The correction is to create a new value:
setItems(previous => [...previous, newItem])
For objects:
setUser(previous => ({
  ...previous,
  name: 'Ada',
}))
6. Stable list keys: 4/5
Your explanation is mostly correct. A key should be:
- Unique among its siblings.
- Stable across renders.
- Connected to the identity of the underlying data.
An ID is usually best. An email is acceptable only if it is unique and does not change.
The most precise description of the index-key bug is not simply that elements appear in the wrong place. When insertion or removal changes indexes, React may reuse a component instance for a different item. Local component state, input values, focus, or animations can then become associated with the wrong data.
items.map(item => (
  <Row key={item.id} item={item} />
))
Index keys are generally safe only when the list is static and never reordered, inserted into, or removed from.
7. Controlled vs. uncontrolled inputs: 1/5
This is the primary missing concept.
A controlled input gets its current value from React state:
const [name, setName] = useState('')

<input
  value={name}
  onChange={event => setName(event.target.value)}
/>
React state is the source of truth. This is useful for validation, conditional UI, formatting, and coordinating several fields.
An uncontrolled input stores its current value in the DOM:
const inputRef = useRef(null)

<input ref={inputRef} defaultValue="" />
You read the value when needed, commonly during submission:
const name = inputRef.current.value
Uncontrolled inputs can be appropriate for simple forms, integration with non-React code, or file inputs. Controlled inputs are appropriate when the UI must react to each change.
8. Lifting state: 2/5
You identified the goal of sharing state, but lifting state does not mean a child passes its state into a parent. It means moving ownership of state from a child to the closest common ancestor that needs to coordinate multiple descendants.
It is not inherently a bad practice. It is one of React’s standard state-management techniques.
function Parent() {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <>
      <List selectedId={selectedId} onSelect={setSelectedId} />
      <Details selectedId={selectedId} />
    </>
  )
}
Avoid lifting state farther than necessary by keeping transient state local. For example, whether one tooltip is open usually belongs close to that tooltip. Context and state-management libraries can reduce prop passing, but they do not automatically fix state ownership or unnecessary rendering.
Improved answer: Lifting state gives related components one shared source of truth by moving state to their closest common ancestor. Keep state as local as possible and lift it only as high as the components that must coordinate it.
9. Conditional rendering and keys: 4/5
Your key explanation is correct. React associates state with a component’s type, key, and position in the rendered tree.
Changing a key tells React that this is a different component:
<Editor key={documentId} />
When documentId changes, React unmounts the old editor and mounts a new one, resetting local state.
Conditional rendering resets state when it removes the component or replaces it with a different component at that position:
{isEditing ? <Editor /> : <Preview />}
Your discussion about a child mutating parent state is unrelated and should be omitted. Children should not directly mutate parent-owned state in the first place.
10. Event propagation vs. state modeling: 2/5
Inspecting handlers and logging which ones fire is a reasonable diagnostic start. The distinction needs to be clearer.
An event-propagation bug means the wrong handler runs, a handler runs multiple times, or a parent handler also reacts because the event bubbled:
<div onClick={clearCalculator}>
  <button onClick={enterDigit}>7</button>
</div>
Clicking 7 may call both handlers.
A state-modeling bug means the correct event and action occur, but the resulting transition is wrong. For example, the calculator cannot distinguish:
- Entering the first operand.
- Choosing an operator.
- Starting the second operand.
- Displaying a result.
- Continuing after a result.
A state machine is relevant here because calculators have distinct modes and transitions.
preventDefault() does not stop propagation. It prevents the browser’s default action, such as form submission or link navigation. stopPropagation() stops an event from bubbling, but it should be used only when bubbling is genuinely unwanted, not as a default fix.
Diagnostic approach: Log the handler, event target, action dispatched, state before the action, and state after it. If the wrong or extra handler runs, investigate propagation. If the correct action runs but computes an incorrect transition, investigate the state model or reducer.
Overall Assessment
Total: 29/50, or 2.9/5
Your strongest areas are immutable updates, list identity, and component state resets. You also have the basic intuition behind batched updates and derived state.
The most valuable topics to review are:
1. Closures and React’s render snapshots.
2. The exact dependency semantics of useEffect.
3. Controlled and uncontrolled inputs.
4. State ownership and lifting state.
5. The difference between DOM event behavior and application state transitions.
Your answers often contain the correct intuition but become less precise when explaining the underlying mechanism. Focus on naming the mechanism directly: render snapshot, closure, identity, source of truth, component identity, and event bubbling.