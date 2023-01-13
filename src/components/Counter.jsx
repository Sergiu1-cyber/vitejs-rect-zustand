import { useCounterStore } from "../store/counter";

export default function Counter() {

function Display() {
  const counter = useCounterStore(store => store.counter)
  return (
    <div>Counter: {counter}</div>
  )
}

  return (
    <div>
      <Display />
    </div>
  );
}