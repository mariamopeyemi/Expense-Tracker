import React from 'react'

const ExpenseFilter = (props) => {
    const dropDownHandler = (e)=>{
            props.onChangeFilter(e.target.value)
        };

    return (
        <div>
            <label>Filter By Year</label>
                <select value={props.selected} onChange={dropDownHandler}>
                    <option value='2023'> 2023</option>
                    <option value='2022'> 2022</option>
                    <option value='2021'> 2021</option>
                    <option value='2020'> 2020</option>
                    <option value='2019'> 2019</option>
                </select>
        </div>
    )
}

export default ExpenseFilter
