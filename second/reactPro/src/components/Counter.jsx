import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [increamentBy, setIncrementBy] = useState(0);
  function Increment() {
    setCount(count + increamentBy);
  }
  function decrement() {
    setCount(count - increamentBy);
  }
  function Increment2() {
    setIncrementBy(increamentBy + 1);
  }
  function decrement2() {
    setIncrementBy(increamentBy - 1);
  }
  return (
    <div>
      <h1>count value is : {count} </h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <h1>Increment value is : {increamentBy} </h1>
      <button onClick={Increment2}>Increment</button>
      <button onClick={decrement2}>decrement</button>
    </div>
  );
}
