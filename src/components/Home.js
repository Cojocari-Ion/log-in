import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='home-page'>
        <Link to='/register'>
            Register
        </Link>
        <Link to='/login'>
            Log in
        </Link>
    </div>
  )
}

export default Home