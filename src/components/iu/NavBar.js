import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavBar.css';

export default function NavBar() {
  return (

    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
  
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <NavLink
        className="nav-item nav-link"
        to='/register'
        >
          Registro
        </NavLink>
        <NavLink
        className="nav-item nav-link"
        to='/login'
        >
          Login
        </NavLink>

      </ul>
    </div>
  </div>
</nav>
   
  
  )
}
