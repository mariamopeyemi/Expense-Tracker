import React from 'react';
import styled from 'styled-components';

const ExpenseDisplay = (props) => {
  return (
    <div>
        {props.info?.map((item, i)=>
        <Card>
            <h2>Title  {item.title}</h2>
            <h2>Amount {item.amount}</h2>
            <h2>Date {item.date}</h2>
        </Card>
        )}
    </div>
  )
}

export default ExpenseDisplay;
const Card= styled.div`
    
`