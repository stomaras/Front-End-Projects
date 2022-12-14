import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { IExpenseItem } from "./ExpenseItemModel";
import { Card } from "../UI/Card";

export const ExpenseItem = (props: IExpenseItem) => {
  const { expenseTitle, expenseAmount, expenseDate } = props;
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={expenseDate} />
      </div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
