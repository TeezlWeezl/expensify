import React from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import ExpenseForm from "./ExpenseForm"
import { useDispatch } from "react-redux"
import { editExpense } from "../state/expensesSlice"

const EditExpensePage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const expense = useSelector(
    state => state.expenses.expenses.find(
      expense => expense.id === params.expenseId
    )
  )
  const dispatch = useDispatch()
  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={changedExpense => {
          dispatch(editExpense({...expense, ...changedExpense}))
          navigate('/')
          // console.log(expense);
        }}
      />
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}


export default EditExpensePage