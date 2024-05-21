import React, { useState } from "react";
//import {data} from ''

const data = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
];

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    //alternatively this could be written with functional approach as
    // setPeople((previousPeople) => {
    //   let newPeople = previousPeople.filter((person) => person.id !== id);
    //   return newPeople;
    // });
  };
  return (
    // apparently <></> is the same as <React.Fragment><.react.Fragment>
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
            {/* using arrow function here because when you pass a function
                with parameters, it gets invoked immediately unless you use
                arrow functions */}
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        DELETE THIS (Clear Items)
      </button>
      {/* using arrow function here because when you pass a function
                with parameters, it gets invoked immediately unless you use
                arrow functions */}
    </>
  );
};

export default UseStateArray;
