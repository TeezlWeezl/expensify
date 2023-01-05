import React from "react";
import { useSelector } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import ExpenseFilter from "./ExpenseFilter";
import selectVisibleExpenses from "../selectors/expenses";

const ExpenseList = (props) => {
  const { expenses } = useSelector((state) => state.expenses)
  const { filters } = useSelector((state) => state.filters)

  return (
    <div>
      <h2>Expense List</h2>
      <ExpenseFilter {...filters}/>
      <p>Number of visible expenses: {selectVisibleExpenses(expenses, filters).length}</p>
      {
        selectVisibleExpenses(expenses, filters).map((expense) => (
          <ExpenseListItem
            {...expense}
            key={expense.id}
          />
        ))
      }
    </div>
  )
}

export default ExpenseList