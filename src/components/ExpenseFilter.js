import React from 'react'
import { useDispatch } from 'react-redux'
import { setText, sortByAmount, sortByDate } from '../state/filtersSlice'

const ExpenseFilter = (props) => {
  const dispatch = useDispatch()
  const onSortByChange = (sortBy) => {
    if (sortBy === 'date') {
      dispatch(sortByDate())
    } else if (sortBy === 'amount') {
      dispatch(sortByAmount())
    }
  }
  return (
    <div>
      <input
        type="text"
        id='text-filter'
        onInput={() => dispatch(setText(document.getElementById('text-filter').value))}
      ></input>
      <label htmlFor='sort-by'>Sort By:</label>
      <select
        name='sort-expenses'
        id='sort-expenses'
        value={props.sortBy}
        onChange={() => onSortByChange(document.getElementById('sort-expenses').value)}
      >
        <option value='date'>Date</option>
        <option value='amount'>Amount</option>
      </select>
    </div>
  )
}

export default ExpenseFilter