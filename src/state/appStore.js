import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./expensesSlice";
import filtersReducer from "./filtersSlice";

const appStore = configureStore({
  reducer: {
    expenses: expensesReducer,
    filters: filtersReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export default appStore