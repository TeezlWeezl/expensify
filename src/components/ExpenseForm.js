import moment from 'moment';
import React, { useState } from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

console.log(moment());
console.log(new Date().toLocaleDateString('de-de', {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric'
}));

const ExpenseForm = (props) => {
  let [state, changeState] = useState({
    description: props.expense ? props.expense.description : '',
    amount: props.expense ? props.expense.amount : '',
    note: props.expense ? props.expense.note : '',
    createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
    calendarFocused: true,
    error: ''
  })
  const onAmountChange = (e) => {
    let amount = e.target.value
    if (amount.match(/^\d*((\.|\,)\d{0,2})?$/)) {
      changeState(state = { ...state, amount: amount })
    }
  }
  const onFormSubmit = (e) => {
    e.preventDefault()
    if (!state.description || !state.amount) {
      changeState(state = {
        ...state,
        error: 'Please provide description and amount'
      })
    } else {
      changeState(state = {
        ...state,
        error: ''
      })
      props.onSubmit({
        description: state.description,
        amount: parseFloat(state.amount.replace(',', '.')),
        note: state.note,
        createdAt: state.createdAt.valueOf(),
      })
    }
  }
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={state.description}
          onChange={(e) => {
            changeState(state = { ...state, description: e.target.value })
          }}
        >
        </input>
        <input
          type="text"
          placeholder="Amount"
          value={state.amount}
          onChange={onAmountChange}
        >
        </input>
        <SingleDatePicker
          date={state.createdAt} // momentPropTypes.momentObj or null
          onDateChange={
            createdAt => { changeState(state = { ...state, createdAt }) }
          } // PropTypes.func.isRequired
          focused={state.calendarFocused} // PropTypes.bool
          onFocusChange={({ focused }) => changeState(state = { ...state, calendarFocused: focused })} // PropTypes.func.isRequired
          id="your_unique_id" // PropTypes.string.isRequired,
          isOutsideRange={() => false}
          numberOfMonths={1}
        />
        <textarea
          placeholder="Add a note for your expense (optional)"
          value={state.note}
          onChange={(e) => {
            changeState(state = { ...state, note: e.target.value })
          }}
        >
        </textarea>
        <button
          type='submit'
        >Add Expense</button>
      </form>
      {state.error && <p>{state.error}</p>}
    </div>
  )
}

export default ExpenseForm