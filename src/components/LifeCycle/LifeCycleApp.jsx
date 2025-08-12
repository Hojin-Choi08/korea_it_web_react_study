import { useState } from "react";
import LifeCycle from "./LifeCycle";

function LifeCycleApp() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide Child(Unmounting)" : "Show Child(Mounting)"}
      </button>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Child Counting Up(Re-Render)
      </button>
      {show && <LifeCycle count={count} />}
    </div>
  );
}

export default LifeCycleApp;
