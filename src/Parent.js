import React from 'react';
import FormChild from './Child';
import { useState } from 'react';
function FormParent() {
    const formSubmit=(e)=>{
        e.preventDefault()
        alert('submitted form')
        window.location.href='FormChild.js'
    }
    const handleEmailchange=(e)=>{
        setemail(e.target.value)
    }
    const handlePasschange=(e)=>{
        setpassword(e.target.value)
    }
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    return (
        <>
        <form onSubmit={formSubmit}>
        <input autoComplete='off' type="email" name="" onChange={handleEmailchange} value={email} id="form-email" placeholder='Enter email' />
        <input autoComplete='off' type="password" name="" id=""onChange={handlePasschange} value={password} placeholder='Enter password' />
        <button type="submit">Submit</button>
        {/* <input type="password" name="" id="" placeholder='Enter Password'/>
        <input type="text" name="" id="" placeholder='Enter First Name'/>
        <input type="text" name="" id="" placeholder='Enter Last Name'/> */}
        </form>
        <FormChild email={email} password={password}/>
        </>
    )
}

export default FormParent;