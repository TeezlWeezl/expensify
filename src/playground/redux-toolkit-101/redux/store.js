import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counter"

const myStore = configureStore({
  reducer: {
    myCounter: counterReducer
  }
})

export default myStore