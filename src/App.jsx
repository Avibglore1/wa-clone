import React, { useState } from 'react'
import Login from './Components/Login';
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
   
  return (
   <>
    <Routes>
        <Route path='/' element=<ProtectedRoute>{<Home></Home>}</ProtectedRoute>></Route>

        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/:chatid' element=<ProtectedRoute>{<Home></Home>}</ProtectedRoute>></Route>

        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>   
    </Routes>
   
   </>
  )
}

export default App