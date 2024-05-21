import React, { useState, useEffect } from "react";
// by default runs after every re-render.

console.log("render component");
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `New Message(${value})`;
    }
  }, [value]);
  return (
    <>
      <h2>useEffect Basic Example</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
