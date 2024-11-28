import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import Routing_App from './POC/Routing_App.jsx'
import User from './useEffect/User.jsx'

createRoot(document.getElementById('root')).render(<BrowserRouter><App></App></BrowserRouter>)
