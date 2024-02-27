import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
   <nav>
    <li>
        <NavLink to='/' activeClassName='active'>Home</NavLink>
    </li>
    <li>
        <NavLink to='/signup' activeClassName='active'>signup</NavLink>
    </li>
    <li>
        <NavLink to='/login' activeClassName='active'>login</NavLink>
    </li>
    <li>
        <NavLink to='/logout' activeClassName='active'>logout</NavLink>
    </li>
    <li>
        <NavLink to='/dashboard' activeClassName='active'>Dashboard</NavLink>
    </li>
   </nav>
  )
}

export default Navbar