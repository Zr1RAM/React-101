import React, { useState, useEffect } from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });
  //https://www.notion.so/Learning-React-69eedc192e5c4968a83768539115c29e?pvs=4#d92da00078734b928b9d307a53d53340
  // this could be written like below for this particular use case
  //   useEffect(() => {
  //     console.log("useEffect");
  //     window.addEventListener("resize", checkSize);
  //   },[]);
  console.log("render");
  return (
    <>
      <h2>useEffect cleanup example</h2>
      <h1>Window</h1>
      <h4>{size}</h4>
    </>
  );
};

export default UseEffectCleanup;
