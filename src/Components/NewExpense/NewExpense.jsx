import React, {useState} from 'react'
import styles from './NewExpense.module.css'
const NewExpense = (props) => {
    const [form, setForm] = useState({
        title: '',
        amount: '',
        date: ''
        // As opposed to setting individual onchange and calling them differently, this is a better way and
        // we call the entire objects together and set to empty. If you have an array, itd be [].
    })

    const formHandler = (e) =>{
        // this is to retrive previous info. that means when the new state depends on previous state.
        setForm({...form, [e.target.name] : e.target.value})
    }

    const formSubmitHandler =(e) =>{
        e.preventDefault();
        // to prevent the form from reloading automatically
        console.log(form);
        // to display form in the console, that is the title, amount, and date
        props.handleAddData(form);

        // since we wrote props u
        setForm({
            title: '',
            amount: '',
            date: ''
            // this is to set the input to empty upon click of submit
        })
    }
    
    
    return (
        <div>
            
            <form className = {styles.main} onSubmit={formSubmitHandler}>
                <div className={styles.manager}><p>My Expense Manager</p></div>
                <div className = {styles.control}>
                    <label className = {styles.myLabel}>Title</label>
                    <input type='text' value={form.title} name='title' placeholder="Input a Title" onChange={formHandler}  className = {styles.myInput}/>
                </div>
                <div className = {styles.control}>
                    <label className = {styles.myLabel}>Amount</label>
                    <input type='number' value={form.amount} name='amount' placeholder="Input an Amount" onChange={formHandler} min='0.01' step='0.01' className = {styles.myInput} />
                </div>
                <div className = {styles.control}>
                    <label className = {styles.myLabel}>Date</label>
                    <div className = {styles.controlled}>
                    <input type='date' value={form.date} name='date'  onChange={formHandler} min='2019-01-01' max='2023-12-31' className = {styles.myInputStyle} />
                    <button type='submit' className = {styles.myBtn}> Add Expense</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewExpense
