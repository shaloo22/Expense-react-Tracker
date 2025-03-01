import React, { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import './components/Style.css';

const App = () => {

  const [expenses, setExpenses ] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense])

  }

  const handleDelete = ((id) => {
    const updateExpenses = expenses.filter((expense) => expense.id !== id)
    setExpenses(updateExpenses)
  })

  return (
    <div className='container'>
      <div className='box'>
      <h2>Expense Tracker</h2>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses}  onhandleDelete={handleDelete}/>
      </div>
    </div>
  )
}

export default App

