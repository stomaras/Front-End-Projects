import React, { FC } from "react";

export type ExpenseDateProps = {
  date: Date;
};

const ExpenseDate: FC<ExpenseDateProps> = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{day}</div>
      <div className="expense-date__day">{year}</div>
    </div>
  );
};

export default ExpenseDate;
