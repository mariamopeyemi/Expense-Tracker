import React from 'react'
import mystyle  from './ExpenseItem.module.css'
function ExpenseItem(props) {


    // let expenseDate = new Date(Date.now()).toLocaleString();This will give you today date and time
    // let expenseDate = new Date(Date.now()).toLocaleString().split(',')[0];
    // let expenseTitle = "Ice meal";
    // let expenseAmount = "#2000";
    // const day = this.props.date.toLocalString("en-US", {month: "long"});
    // const month = this.props.date.toLocalString("en-US", {month: "long"});
    // const year = this.props.date.toLocalString("en-US", {month: "long"});


    
    return (
        <div className = {mystyle.expenseItem}>
            <div className = {mystyle.expenseDate}>{props.data.date}</div>
            <div className = {mystyle.expenseTitle}>
                <div><h2>{props.data.title}</h2></div>
                <div className = {mystyle.expenseAmount}>{props.data.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem
