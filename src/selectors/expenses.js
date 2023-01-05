// Select and filter the visible expenses
const selectVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || startDate <= expense.createdAt // Will return true if, filter input is not a number (e.g. undefined) or expense.createdAt <= filter input
    const endDateMatch = typeof endDate !== 'number' || endDate >= expense.createdAt
    const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase())

    return  startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      if (a.createdAt < b.createdAt) {
        return -1
      } else if (a.createdAt > b.createdAt) {
        return 1
      } else return 0
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? -1 : 1 // Alternative way of expressing sort method
    }
  })
}

export default selectVisibleExpenses