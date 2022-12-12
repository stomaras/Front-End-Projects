import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import { ExpenseDate } from "../src/components/ExpenseDate";
import { IExpenseDate } from "../src/components/ExpenseDateModel";

function App() {
  const date1: IExpenseDate = {
    month: 1,
    day: 12,
    year: 2021,
  };
  const date2: IExpenseDate = {
    month: 2,
    day: 12,
    year: 2020,
  };
  const date3: IExpenseDate = {
    month: 10,
    day: 23,
    year: 2022,
  };
  const date4: IExpenseDate = {
    month: 1,
    day: 12,
    year: 2022,
  };

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
