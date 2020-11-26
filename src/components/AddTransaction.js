import React, { useState, useContext } from 'react'
import {v1 as uuid} from "uuid"
import { GlobalContext } from '../context/GlobalContext'

const AddTransaction = () => {
    const {addIncome, addExpense} = useContext(GlobalContext)

    const [income, setIncome] = useState({
        incomeText:"",
        incomeAmount: 0
    })

    const {incomeText, incomeAmount} = income

    const onChangeIncome = event => {
        const {name, value} = event.target
        setIncome({...income, [name]: value})
    }
    const onSubmitIncome = event =>{
        event.preventDefault();
        if(incomeText !== ""){
            const newIncomeTransaction = {
                id:uuid(),
                incomeText,
                incomeAmount: incomeAmount * 1
            }
            addIncome(newIncomeTransaction)
            setIncome({
                incomeText:"",
                incomeAmount: 0
            })
        } 
    }

    const [expense, setExpense] = useState({
        expenseText: "",
        expenseAmount: 0
    })
    const {expenseText, expenseAmount} = expense

    const onChangeExpense = event => {
        const {name, value} = event.target
        setExpense({...expense, [name]: value})
    }

    const onSubmitExpense = event => {
        event.preventDefault();
        if(expenseText !== ""){
            const newExpenseTransaction = {
                id: uuid(),
                expenseText,
                expenseAmount: expenseAmount * 1
            }
            console.log(newExpenseTransaction)
            addExpense(newExpenseTransaction)
            setExpense({
                expenseText: "",
                expenseAmount: 0
            })
        }  
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome}>
                <div className="input-group income">
                    <input type="text" name="incomeText" value={incomeText} placeholder="Add Income..." autoComplete="off" onChange={onChangeIncome}/>
                    <input type="number" name="incomeAmount" value={incomeAmount} autoComplete="off" onChange={onChangeIncome}/>
                    <input type="submit" value="submit" />  
                </div>
            </form>
            <form onSubmit={onSubmitExpense}>
                <div className="input-group expense">
                    <input type="text"  name="expenseText" onChange={onChangeExpense} value={expenseText} autoComplete="off" placeholder="Add Expense..."/>
                    <input type="number" name="expenseAmount" onChange={onChangeExpense} value={expenseAmount} autoComplete="off" />
                    <input type="submit" value="submit" />  
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
