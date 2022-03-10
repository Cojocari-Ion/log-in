import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    const loginHandle = () => {

    }

  return (
    <div className='login-section'>
        <h1>Log in page</h1>
        <form action="register">

            <label for="name">First name:</label> <br />
            <input type="text" name='name' id='name' />

            <label for="password">First name:</label> <br />
            <input type="password" name='password' id='password' />

            <button onClick={loginHandle()} type='submit'>
                log in
            </button>

            <br />

            <span>If you have an account then <Link to='/register'>Register</Link></span>
            
            <Link to='/'>Home</Link>

        </form>
    </div>
  )
}

export default Login