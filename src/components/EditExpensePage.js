import React from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import ExpenseForm from "./ExpenseForm"

const EditExpensePage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const expense = useSelector(
    state => state.expenses.expenses.find(
      expense => expense.id === params.expenseId
    )
  )
  console.log(expense);
  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={expense => {
          console.log('Updated', expense)
        }}
      />
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}


export default EditExpensePage