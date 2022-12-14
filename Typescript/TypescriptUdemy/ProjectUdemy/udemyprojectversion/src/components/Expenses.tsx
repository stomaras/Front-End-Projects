import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import { IExpenseItem } from "./ExpenseItemModel";
import "./Expenses.css";
import Card from "./Card";

export const Expenses = (props: any) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        expenseTitle={props.items[0].title}
        expenseAmount={props.items[0].amount}
        expenseDate={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        expenseTitle={props.items[1].title}
        expenseAmount={props.items[1].amount}
        expenseDate={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        expenseTitle={props.items[2].title}
        expenseAmount={props.items[2].amount}
        expenseDate={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        expenseTitle={props.items[3].title}
        expenseAmount={props.items[3].amount}
        expenseDate={props.items[3].date}
      ></ExpenseItem>
    </Card>
  );
};
