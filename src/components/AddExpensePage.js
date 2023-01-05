import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addExpense } from "../state/expensesSlice"
import ExpenseForm from "./ExpenseForm"


const AddExpensePage = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(props);
  return (
    <div>
      <h2>Add Expense</h2>
      <ExpenseForm onSubmit={expense => {
        dispatch(addExpense(expense))
        navigate('/')
      }} />
    </div>
  )
}

export default AddExpensePage