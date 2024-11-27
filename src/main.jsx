import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import Routing_App from './POC/Routing_App.jsx'

createRoot(document.getElementById('root')).render(<BrowserRouter><Routing_App></Routing_App></BrowserRouter>)
