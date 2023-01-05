import React from "react"
import ExpenseList from "./ExpenseList"
import { Provider } from "react-redux"
import appStore from "../state/appStore"

const ExpenseDashboardPage = () => (
  <div>
    <Provider store={appStore}>
      <ExpenseList />
    </Provider>
  </div>
)

export default ExpenseDashboardPage