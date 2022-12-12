import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { IExpenseItem } from "./ExpenseItemModel";

export const ExpenseItem = (props: IExpenseItem) => {
  return (
    <div className="expense-item">
      <div>
        <ExpenseDate
          month={props.expenseDate.month}
          day={props.expenseDate.day}
          year={props.expenseDate.year}
        />
      </div>
      <div className="expense-item__description">
        <h2>{props.expenseTitle}</h2>
        <div className="expense-item__price">${props.expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
