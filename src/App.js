import React from "react";
// import CountNumber from "./components/CountNumber/CountNumber";
import Person from "./components/Person/person";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <CountNumber initValue="0" /> */}
      <Person person={[{
        id: 1,
        name: 'Thức',
        age: '24',
        gender: 'male',
      }]} />
    </div>
  );
}

export default App;
