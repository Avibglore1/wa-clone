import Login from './Components/Login'
import Chat from './Components/Chat'
import Home from './Components/Home'
import PageNotFound from './Components/PageNotFound'
import './App.css'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Chat/:uniqueId' element={<Chat></Chat>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  )
}

export default App
