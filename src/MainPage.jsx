import React, { useState } from 'react';
import ExpenseDisplay from './MainComponents/ExpenseDisplay';
import ExpenseForm from './MainComponents/ExpenseForm';

const MainPage = (props) => {
    const [info, setInfo] = useState([]);

    const handleInfo = (newInfo)=>{
        setInfo([...info, newInfo]);

    }
  return (
    <div>
        <ExpenseForm handleInfo={handleInfo} />
        <ExpenseDisplay info={info}  />
    </div>
  )
}

export default MainPage