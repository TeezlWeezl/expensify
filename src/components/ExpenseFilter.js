import React, { useState } from 'react'
import { DateRangePicker } from 'react-dates'
import { useDispatch } from 'react-redux'
import { setText, sortByAmount, sortByDate, setStartDate, setEndDate } from '../state/filtersSlice'

const ExpenseFilter = (props) => {
  let [state, changeState] = useState({
    calendarFocused: null
  })
  const dispatch = useDispatch()
  const onSortByChange = (sortBy) => {
    if (sortBy === 'date') {
      dispatch(sortByDate())
    } else if (sortBy === 'amount') {
      dispatch(sortByAmount())
    }
  }
  const onDatesChange = ({startDate, endDate}) => {
    dispatch(setStartDate(startDate))
    dispatch(setEndDate(endDate))
  }
  const onFocusChange = (calendarFocused) => {
    changeState(state = {...state, calendarFocused: calendarFocused})
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
      <DateRangePicker
        startDate={props.startDate}
        endDate={props.endDate}
        onDatesChange={onDatesChange}
        focusedInput={state.calendarFocused}
        onFocusChange={onFocusChange}
        startDateId={'daterangefilter-startdate'}
        endDateId={'daterangefilter-enddate'}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
      />
    </div>
  )
}

export default ExpenseFilter