import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const ExpenseTransactions = ({expenseTransaction}) => {

    const {deleteTransaction} = useContext(GlobalContext)
    console.log(expenseTransaction)
    return (
        <li className="transaction">
            <span className="transaction-text">{expenseTransaction.expenseText}</span>
            <span className="transaction-amount">${expenseTransaction.expenseAmount}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(expenseTransaction.id)}>
            <i className="fas fa-trash"></i>
            </button>
        </li>
    )
}

export default ExpenseTransactions
