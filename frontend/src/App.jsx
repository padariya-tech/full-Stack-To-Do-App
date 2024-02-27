import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'

import { Toaster } from 'react-hot-toast'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login2.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Logout from './pages/Logout.jsx'

import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
axios.defaults.baseURL='http://localhost:8000'
axios.defaults.withCredentials = true 
function App() {
  
  return (
    <> 
      
     <Navbar/>
    <Toaster position='bottom-right' toastOptions={{
      duration: 2000 , style: {
        background: '#333',
        color: '#fff'
      }
    }}/>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
      <Route path="/dashboard" element={<Dashboard />}>
      </Route>
      </Routes>
    
    </>
  )
}

export default App
