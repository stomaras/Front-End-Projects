import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 123.57,
      date: new Date(2021, 2, 21),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 200.57,
      date: new Date(2020, 2, 21),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.57,
      date: new Date(2021, 2, 21),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 300.57,
      date: new Date(2022, 2, 21),
    },
  ];
  return (
    <div className="App">
      <h2>Let's get started</h2>
      <ExpenseItem
        expenseTitle={expenses[0].title}
        expenseAmount={expenses[0].amount}
        expenseDate={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        expenseTitle={expenses[1].title}
        expenseAmount={expenses[1].amount}
        expenseDate={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        expenseTitle={expenses[2].title}
        expenseAmount={expenses[2].amount}
        expenseDate={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        expenseTitle={expenses[3].title}
        expenseAmount={expenses[3].amount}
        expenseDate={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
