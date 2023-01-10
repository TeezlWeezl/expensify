import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";


const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: {
      text: '',
      sortBy: '',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    }
  },
  reducers: {
    setText: (state, action) => {
      state.filters = {
        ... state.filters,
        text: action.payload
      }
    },
    sortByDate: (state, action) => {
      state.filters = {
        ...state.filters,
        sortBy: 'date'
      }
    },
    sortByAmount: (state, action) => {
      state.filters = {
        ...state.filters,
        sortBy: 'amount'
      }
    },
    setStartDate: (state, action) => {
      state.filters = {
        ... state.filters,
        startDate: action.payload
      }
    },
    setEndDate: (state, action) => {
      state.filters = {
        ... state.filters,
        endDate: action.payload
      }
    }
  },
})

export const { sortByDate, sortByAmount, setText, setEndDate, setStartDate } = filtersSlice.actions
export default filtersSlice.reducer