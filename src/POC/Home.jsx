import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const setisLoggedIn = props.setisLoggedIn
    const navigate = useNavigate();
    const handleLogout = () =>{
        setisLoggedIn(false)
        navigate('/login');
    }
  return (
    <>
        <div>Home</div>
        <button onClick={handleLogout}>Logout</button>
    </>
    
  )
}

export default Home