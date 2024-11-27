import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Login(props) {
    const setisLoggedIn = props.setisLoggedIn;
    const navigate = useNavigate();
    const handleLogin = () =>{
        setisLoggedIn(true);
       navigate('/');
    }
  return (
    <>
        <div>Login</div>
        <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login