import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import ExpenseTransactions from './ExpenseTransactions'

const ExpenseList = () => {
    const {expenseTransactions} = useContext(GlobalContext)
    console.log(expenseTransactions)
    return (
        <div className="transactions transactions-expense">
            <h2>Transaction History</h2>
            <ul className="transactions-list">   
            {expenseTransactions.map(expenseTransaction =>(
                <ExpenseTransactions 
                    expenseTransaction={expenseTransaction}
                    key={expenseTransaction.id}
                />
            ))} 
            </ul>
        </div>
    )
}

export default ExpenseList
