import { IExpenseDate } from "./ExpenseDateModel";
export interface IExpenseItem {
  expenseTitle: string;
  expenseAmount: number;
  expenseDate: IExpenseDate;
}
