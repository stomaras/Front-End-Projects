import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const date1: Date = new Date(1, 2, 2021);
  const date2: Date = new Date(2, 12, 2022);
  const date3: Date = new Date(5, 1, 2021);
  const date4: Date = new Date(6, 8, 2019);

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
