import { useCounter } from "./useCounter";

export const App = () => {
  const { count, increment, decrement, double, reset } = useCounter(3);
  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={double}>double</button>
      <button onClick={reset}>reset</button>
    </>
  );
};