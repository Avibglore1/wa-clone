import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase';

function Login(props) {
    const setisLoggedIn = props.setisLoggedIn;
    const navigate = useNavigate();
    const handleLogin = async() =>{
        const result = await signInWithPopup(auth,new GoogleAuthProvider);
        console.log(auth);
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