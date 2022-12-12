import React from "react";
import { IExpenseDate } from "./ExpenseDateModel";

export const ExpenseDate = (props: IExpenseDate) => {
  return (
    <>
      <div>{props.day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </>
  );
};

export default ExpenseDate;
