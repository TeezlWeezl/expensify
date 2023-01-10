import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ExpenseListItem = (props) => {
  const dispatch = useDispatch()
  return (
    <div>
        <Link to={`edit/${props.id}`}>
          <h3>{props.description}</h3>
        </Link>
        <p> Amount: {props.amount} Createt at: {props.createdAt}</p>
        </div>
  )
}

export default ExpenseListItem