import React, { useState } from "react";
// short circuit evaluation

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  //   const firstValue = text || "hello world";
  //   const secondValue = text && "hello world";
  return (
    <>
      {/* <h2>firstValue</h2>
    <h2>value: {secondValue}</h2> */}
      <h2>Short Circuit</h2>
      <h3>{text || "john doe"}</h3>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h3>Error...</h3>}
      {isError ? (
        <p>There is an error...</p>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
      {!text && <h3>bye world</h3>}
    </>
  );
};

export default ShortCircuit;
