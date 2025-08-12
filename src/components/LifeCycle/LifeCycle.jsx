import { useEffect } from "react";

function LifeCycle({ count }) {
  console.log("LifeCycle component is rendered");
  useEffect(() => {
    console.log("LifeCycle component is mounted");
    return () => {
      console.log("LifeCycle component is unmounted");
    };
  }, []);

  return (
    <div>
      <h4>Child Component</h4>
      <p>A Number From Parent: {count}</p>
    </div>
  );
}

export default LifeCycle;
