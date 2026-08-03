# React State And Rendering

Answer each in 60-90 seconds. Include the bug, the correction, and the reason.

1. What is the difference between source state and derived state, and why is duplicated derived state dangerous?
2. Why can two `setCount(count + 1)` calls produce only one increment, and when should you use a functional update?
3. What is a stale closure in a React event handler or effect?
4. When does a missing or incorrect `useEffect` dependency cause a correctness bug?
5. Why does mutating an array or object in state often fail to re-render the expected UI?
6. What makes a list key stable, and what behavior can index keys cause when items are inserted or removed?
7. How do controlled inputs differ from uncontrolled inputs, and when might each be appropriate?
8. What does lifting state achieve, and how do you avoid lifting state farther than necessary?
9. How can conditional rendering or changing component keys unintentionally reset local state?
10. How would you distinguish an event-propagation bug from a state-modeling bug when a calculator button behaves incorrectly?
