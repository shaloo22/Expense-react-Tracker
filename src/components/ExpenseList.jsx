import React from 'react'

const ExpenseList = ({ expenses, onhandleDelete }) => {
    return (
        <div>
            <h2>Expense List</h2>
            {expenses.length === 0 ? (
                <p>No expense added.</p>
            ) : (
                <ul>
                    {expenses.map((expense) => (
                        <li key={expense.id}>{expense.title} - ${expense.amount}
                            <button className= 'btn-2'onClick={() => onhandleDelete(expense.id)}>❌</button>
                        </li>

                    ))}
                </ul>
            )}
        </div>
    )
}

export default ExpenseList
