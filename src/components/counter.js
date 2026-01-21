import { useState,useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(()=>{
    console.log("Component Loaded");

    return function(){
      console.log("Component unmounted");
    }
  },[])

  useEffect(()=>{
    console.log("Component updated",count);
  },[count])

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
