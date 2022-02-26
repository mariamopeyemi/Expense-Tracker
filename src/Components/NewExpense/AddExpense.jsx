import React, { useState } from 'react';
import styles from './NewExpense.module.css'

const AddExpense = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (e)=>{
        setEnteredTitle(e.target.value)
        console.log(e.target.value)
    }
    const amountChangeHandler = (e)=>{
        setEnteredAmount(e.target.value)
    }
    const dateChangeHandler = (e)=>{
        setEnteredDate(e.target.value)
    }
    const formSubmitHandler = (e)=>{
        e.preventDefault()
        const expenseData ={
            title : enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
            testdate: enteredDate
        }
        console.log(expenseData)
    }
  return (
    <div>
        {/* <form onSubmit={formSubmitHandler}>
            <input type='text' value={form.title} name='title' placeholder="Input a Title" onChange={formHandler} />
            <input type='number' value={form.amount} name='amount' placeholder="Input an Amount" onChange={formHandler} />
            <input type='date' value={form.date} name='date'  onChange={formHandler} />
            <input type='submit'  />
        </form> */}
        <form className = {styles.main} onSubmit={formSubmitHandler}>
                <p>My Expense Manager</p>
                <div className = {styles.control}>
                    <label className = {styles.myLabel}>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} className = {styles.myInput}/>
                </div>
                <div className = {styles.control}>
                    <label className = {styles.myLabel}>Amount</label>
                    <input type='number' value={enteredAmount} onChange={amountChangeHandler} min='0.01' step='0.01' className = {styles.myInput} />
                </div>
                <div className = {styles.control}>
                    <label className = {styles.myLabel}>Date</label>
                    <div className = {styles.controlled}>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler} min='2019-01-01' max='2023-12-31' className = {styles.myInputStyle} />
                    <button type='submit' className = {styles.myBtn}> Add Expense</button>
                    </div>
                </div>
            </form>
    </div>
  )
}

export default AddExpense