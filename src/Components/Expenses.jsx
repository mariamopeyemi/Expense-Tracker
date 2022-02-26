import React, {useState} from 'react'
import newstyles from './Expenses.module.css'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'



const Expenses = (props) => {
    const [filteredYear, setfilteredYear] = useState('2020');

    const filterHandler = selectedYear =>{
        setfilteredYear(selectedYear);
    };
    // const filteredExpenses = props.items.filter(myExpense=>{
    //     return myExpense.date.getFullYear().toString() === filteredYear;
    // })
    return (
        <div className = {newstyles.expenseItemContainer}>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterHandler} />
            {props.data.map((item, i)=> <ExpenseItem data={item} key={i} title={item.title} />)}
            
        </div>
    )
}

export default Expenses
