import React, {useState} from 'react'

const Todo = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    const passswordHandler = (e) => {
        setPassword(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log({
            email: email,
            password: password
        })
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input placeholder='email' type='email' onChange={emailHandler} />
                <input placeholder='password' type='password' onChange={passswordHandler} />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Todo
