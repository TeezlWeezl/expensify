import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, ListEnterprises } from "react-router-dom";

import Header from "./Header";
import ErrorPage from "./ErrorPage"
import ExpenseDashboardPage from "./ExpenseDashboardPage"
import AddExpensePage from "./AddExpensePage"
import EditExpensePage from "./EditExpensePage"
import HelpPage from "./HelpPage"
import { Provider } from "react-redux";
import appStore from "../state/appStore";

const router = createBrowserRouter(createRoutesFromElements(
  <Route
    element={<Header />}
    errorElement={
      <div>
        <Header />
        <ErrorPage />
      </div>
    }
  >
    <Route
      path='/'
      element={<ExpenseDashboardPage />}
    />
    <Route
      path='create'
      element={
        <Provider store={appStore}>
          <AddExpensePage />
        </Provider>
      }
    />
    <Route
      path='edit/:expenseId'
      element={
        <Provider store={appStore}>
          <EditExpensePage />
        </Provider>
      }
    />
    <Route
      path='help'
      element={<HelpPage />}
    />
  </Route>
))

const AppRouter = () => (
  <RouterProvider router={router} />
)

export default AppRouter