import React, { useState, useContext } from "react";

const data = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
];

const PersonContext = React.createContext();
// two components - provider , consumer

const PropDrillingBut_useContext_MakesItBetter = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  }; // this function will be passed from PropDrilling to list to SinglePerson for it to be invoked and that is the example of prop drilling

  return (
    <>
      <h2>Prop Drilling fixed with useContext / Context API</h2>
      <PersonContext.Provider value={{ removePerson }}>
        <List people={people} />
      </PersonContext.Provider>
    </>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button
        onClick={() => {
          removePerson(id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default PropDrillingBut_useContext_MakesItBetter;
