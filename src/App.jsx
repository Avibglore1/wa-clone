import React, { useState } from 'react'
import Login from './Components/Login';
import {Routes,Route, Navigate} from 'react-router-dom'
import Chat from './Components/Chat'
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
    const [isloggedIn,setisLoggedIn] = useState(false);
  return (
   <>
    <Routes>
        <Route path='/' element={<ProtectedRoute isloggedIn={isloggedIn}>
            <Home setisLoggedIn={setisLoggedIn}></Home>
        </ProtectedRoute>}></Route>

        <Route path='/login' element={<Login setisLoggedIn={setisLoggedIn}></Login>}></Route>

        <Route path='/chat/:uniqueId' element={<ProtectedRoute isloggedIn={isloggedIn}>
            <Chat isloggedIn={isloggedIn}></Chat>
            </ProtectedRoute>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>   
    </Routes>
   
   </>
  )
}

export default App