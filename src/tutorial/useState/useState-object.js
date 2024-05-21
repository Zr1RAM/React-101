import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "Will to live still intact",
  });
  const changeMessage = () => {
    setPerson({ ...person, message: "Wants to die now" });
    // Didnt know you could do this with spread operator
    // {...person, message} makes it so that you are maintaining the previous values
    // of name and age while only updating message
    // aka you are copying the old values while only changing the ones you need to
  };
  return (
    <>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
