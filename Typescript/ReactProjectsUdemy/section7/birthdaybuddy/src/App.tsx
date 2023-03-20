import React, { useState } from "react";
import logo from "./logo.svg";
import data from "./data";
import "./App.css";

function App() {
  const [people, setPeople] = useState(data);
  console.log(people);
  return <div className="App">
    <h2>Birthday Reminder Starter</h2>;
  </div>;
}

export default App;
