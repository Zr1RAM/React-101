import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Random Title");
  //const stateSwitch = false;
  const clickHandler = () => {
    if (text === "Random Title") {
      setText("Hello world");
    } else {
      setText("Random Title");
    }
    // stateSwitch = !stateSwitch;
    // if (stateSwitch) {
    //   setText("Hello world");
    // } else {
    //   setText("Random Title");
    // }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={clickHandler}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
