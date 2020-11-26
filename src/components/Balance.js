import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Balance = () => {
    const {incomeTransactions, expenseTransactions} = useContext(GlobalContext)

    const totalIncome = incomeTransactions.map(incomeTransaction => incomeTransaction.incomeAmount)
    const totalIncomeAmount = totalIncome.reduce((acc, income) => (acc += income), 0).toFixed(2)

    const totalExpense = expenseTransactions.map(expenseTransaction => expenseTransaction.expenseAmount)
    const totalExpenseAmount = totalExpense.reduce((acc, expense) => (acc += expense), 0).toFixed(2)

    const totalBalance = (totalIncomeAmount - totalExpenseAmount).toFixed(2)
    return (
        <div className="balance">
            <h2>Balance</h2>
            <h3>${totalBalance}</h3>
            <div className="income-expense">
                <div className="plus">
                    <h3>Incomes</h3>
                    <h3>+${totalIncomeAmount}</h3>
                </div>
                <div className="minus">
                    <h3>Expenses</h3>
                    <h3>-${totalExpenseAmount}</h3>
                </div>
            </div>
            
        </div>
    )
}
export default Balance
