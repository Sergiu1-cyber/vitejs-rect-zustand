import { useCounterStore } from '../store/counter';

export default function Counter() {
  function Display() {
    const counter = useCounterStore((state) => state.counter);
    return <div className="text-red-500">Counter: {counter}</div>;
  }

  function Increment() {
    const increment = useCounterStore((state) => state.counterIncrement);
    return <button onClick={() => increment(1)}>increment</button>;
  }

  return (
    <div className="flex flex-col text-center">
      <Display />
      <Increment />
    </div>
  );
}
