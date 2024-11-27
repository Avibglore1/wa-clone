import React, { useState } from 'react'
import Home from './Home'
import Login from './Login'
import {Routes,Route, Navigate} from 'react-router-dom'

function Routing_App() {
    const [isloggedIn,setisLoggedIn] = useState(false);
  return (
   <>
   <h1>Routing App</h1>
    <Routes>
        <Route path='/' element={<ProtectedRoute isloggedIn={isloggedIn} setisLoggedIn={setisLoggedIn}></ProtectedRoute>}></Route>
        <Route path='/login' element={<Login setisLoggedIn={setisLoggedIn}></Login>}></Route>
    </Routes>
   
   </>
  )
}
function ProtectedRoute(props){
const {isloggedIn,setisLoggedIn} = props;
if (isloggedIn){
    return <Home setisLoggedIn={setisLoggedIn}></Home>
    
}else{
    return <Navigate to='/login'></Navigate>
}
}
export default Routing_App