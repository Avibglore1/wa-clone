import React, { useState } from 'react'
import Home from './Home'
import Login from './Login'
import {Routes,Route, Navigate} from 'react-router-dom'
import Chat from '../Components/Chat';

function Routing_App() {
    const [isloggedIn,setisLoggedIn] = useState(false);
  return (
   <>
   <h1>Routing App</h1>
    <Routes>
        <Route path='/' element={<ProtectedRoute isloggedIn={isloggedIn}>
            <Home setisLoggedIn={setisLoggedIn}></Home>
        </ProtectedRoute>}></Route>

        <Route path='/login' element={<Login setisLoggedIn={setisLoggedIn}></Login>}></Route>

        <Route path='/chat/:uniqueId' element={<ProtectedRoute isloggedIn={isloggedIn}>
            <Chat isloggedIn={isloggedIn}></Chat>
            </ProtectedRoute>}></Route>
    </Routes>
   
   </>
  )
}
function ProtectedRoute(props){
    const isloggedIn = props.isloggedIn
const children = props.children;
if (isloggedIn){
    return children
    
}else{
    return <Navigate to='/login'></Navigate>
}
}
export default Routing_App