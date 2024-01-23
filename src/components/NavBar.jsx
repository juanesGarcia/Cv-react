import React from 'react'
import { NavLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import '../Style/Nav.css'
export const NavBar = () => {
  return (
    <div className="containerNav">
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary scrolling-navbar fixed-top">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-white" to="/"><AiFillHome className='mb-1 ms-3 me-1'></AiFillHome> Inicio</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-white" aria-current="page" to="/About" >Acerca de mi </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" aria-current="page" to="/Api">Uso Api</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar;