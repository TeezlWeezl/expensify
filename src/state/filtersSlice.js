import { createSlice } from "@reduxjs/toolkit";


const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: {
      text: '',
      sortBy: '',
      startDate: undefined,
      endDate: undefined
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