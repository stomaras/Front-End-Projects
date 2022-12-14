import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Expenses } from "./components/Expenses";

function App() {
  const date1: Date = new Date(2021, 2, 1);
  const date2: Date = new Date(2022, 12, 2);
  const date3: Date = new Date(2021, 1, 3);
  const date4: Date = new Date(2019, 8, 4);

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 123.57,
      date: date1,
    },
    {
      id: "e2",
      title: "New TV",
      amount: 200.57,
      date: date2,
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.57,
      date: date3,
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 300.57,
      date: date4,
    },
  ];
  return (
    <div className="App">
      <h2>Let's get started</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
