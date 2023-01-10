import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: [],
  },
  reducers: {
    expensesReducer: (state, action) => {
      switch (action.type) {
        default:
          return state
      }
    },
    addExpense: (state, action) => {
      state.expenses.push({
        id: uuidv4(),
        description: action.payload['description'] || '',
        note: action.payload['note'] || '',
        amount: action.payload['amount'] || 0,
        createdAt: action.payload['createdAt'] || 0
      })
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      )
    },
    editExpense: (state, action) => {
      state.expenses = state.expenses.map((expense) => {
        console.log(expense.id, action.payload);
        if (expense.id === action.payload.id) {
          return { ...expense, ...action.payload }
        } else {
          return expense
        }
      })
    }
  }
})

export const { expensesReducer, addExpense, removeExpense, editExpense } = expensesSlice.actions
export default expensesSlice.reducer
