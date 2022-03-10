import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const registerHandle = () => {

    }

  return (
    <div className='register-section'>

        <h1>Register page</h1>
        <form action="register">
            <label for="name">First name:</label> <br />
            <input type="text" name='name' id='name' />

            <label for="password">First name:</label> <br />
            <input type="password" name='password' id='password' />

            <button onClick={registerHandle()} type='submit'>
                register
            </button>

            <br />

            <span>If you have an account then <Link to='/login'>Log in</Link></span>

            <br />

            <Link to='/'>Home</Link>
        </form>
    </div>
  )
}

export default Register