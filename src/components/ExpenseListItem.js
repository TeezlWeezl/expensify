import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeExpense } from '../state/expensesSlice'

const ExpenseListItem = (props) => {
  const dispatch = useDispatch()
  return (
    <div>
        <Link to={`edit/${props.id}`}>
          <h3>{props.description}</h3>
        </Link>
        <button onClick={() => dispatch(removeExpense(props.id))}>Remove</button>
      <p> Amount: {props.amount} Createt at: {props.createdAt}</p>
    </div>
  )
}

export default ExpenseListItem