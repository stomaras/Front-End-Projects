import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { IExpenseItem } from "./ExpenseItemModel";

export const ExpenseItem = (props: IExpenseItem) => {
  const { expenseTitle, expenseAmount, expenseDate } = props;
  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={expenseDate} />
      </div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
