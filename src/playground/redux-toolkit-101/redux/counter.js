import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    incremented: state => {
      state.count += 1
    },
    decremented: state => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    }
  }
})

export const { incremented, decremented, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer