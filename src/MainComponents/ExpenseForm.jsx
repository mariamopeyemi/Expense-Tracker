import React, { useState } from 'react';
import styled from 'styled-components';


const ExpenseForm = (props) => {
    const [form, setForm] = useState({
        title:'', amount:'', date:''
    });

    const formHandler = (e) =>{
        setForm({...form, [e.target.name] : e.target.value})
        console.log('yewxc')
    }
    const formSubmit =(e) =>{
        console.log('reyyye')
        e.preventDefault();
        console.log(formHandler);
        props.handleInfo(form)
        // setForm({title: '', amount: '', date:''})
    
    }
  return (
    <div>
        <Form onSubmit={formSubmit}>
            <Card>
                <label>Title</label>
                <input  type='text' name='title' value={form.title} onChange={formHandler} />
            </Card>
            <Card>
                <label>Amount</label>
                <input  type='number' name='amount' value={form.amount} onChange={formHandler} />
            </Card>
            <Card>
                <label>Date</label>
                <SubmitDiv>
                <input  type='date' name='date' value={form.date} onChange={formHandler} />
                <button type='submit'> Submit</button>
                </SubmitDiv>
            </Card>
           
        </Form>
    </div>
  )
}

export default ExpenseForm;

const Form = styled.form`
    width: 60%;
    padding: 15px 40px;
    background: yellow;
    margin: auto;
    /* justify-content: space-between; */

`
const Card = styled.form`
 display: flex;
 /* background: red; */
 justify-content: space-between;
 margin: 10px;
 > input{
    /* background: green; */
    width: 80%;
 }
`

const SubmitDiv= styled.div`
    /* display: flex; */
    /* justify-content: space-between; */
    >input: 40%;
    > button{
     color: blue;
     background: brown;
     padding: 5px;
     margin-left: 8px;
     border-radius: 5px;
 }
`