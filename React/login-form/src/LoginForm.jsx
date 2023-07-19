

import { useState } from 'react'

import './App.css'


const LoginForm = () => {
// useState takes a initial state value and return an array of 2 members: state variable & function that update the state
  const [showPassword, setShowPassword] = useState(false);

// Purpose is to toggle the function for boolean value of " showPassword"
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }
 // add a input tag to trigger out handleShowPassword function- using checkbox attribute  
  return (
    <form className='form'>
    <input type='email' id="eamil" placeholder='Enter your eamil' />

    <input type={showPassword ? 'text' : 'password'} id='password' placeholder='Enter yor password' />

   <input type='checkbox'  id='showPassword' onChange={handleShowPassword} />
    <button type='submit'>Submit</button>
    </form>
);
};

export default LoginForm;