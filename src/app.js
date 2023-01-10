import 'normalize.css/normalize.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './components/AppRouter'
import appStore from './state/appStore'
import { addExpense, editExpense, removeExpense } from './state/expensesSlice'
import { setEndDate, setStartDate, setText, sortByAmount, sortByDate } from './state/filtersSlice'
import './styles/styles.scss'
import selectVisibleExpenses from './selectors/expenses'
import moment from 'moment'

// const endSubscribe = appStore.subscribe(() => {
//   console.log(selectVisibleExpenses(
//     appStore.getState().expenses.expenses,
//     { text: '', sortBy: 'amount', startDate: undefined, endDate: undefined }
//   ));
// })


// EXPENSE DISPATCH 
appStore.dispatch(addExpense({ description: 'Item 1', amount: 5000, createdAt: 1673373223812 }))
appStore.dispatch(addExpense({ description: 'Item 2', amount: 4000, createdAt: 1673373223813 }))
appStore.dispatch(addExpense({ description: 'Item 3', amount: 3000, createdAt: 1673373223814 }))
appStore.dispatch(addExpense({ description: 'Item 4', amount: 2000, createdAt: 1673373223815 }))
appStore.dispatch(addExpense({ description: 'Item 5', amount: 1000, createdAt: 1673373223816 }))
// let id0 = appStore.getState().expenses.expenses[0].id

// appStore.dispatch(removeExpense(id0))
// id0 = appStore.getState().expenses.expenses[0].id

// appStore.dispatch(editExpense({id: id0, amount:3000}))


// Dispatch filters
// appStore.dispatch(setText('Test'))
// appStore.dispatch(sortByAmount())
// appStore.dispatch(sortByDate())
// appStore.dispatch(setStartDate(120))
// appStore.dispatch(setEndDate(200))


// console.log(document.getElementById('sort-expenses-by'));

const rootElement = document.getElementById('app-root')
const reactRoot = ReactDOM.createRoot(rootElement)
reactRoot.render(<AppRouter />)
