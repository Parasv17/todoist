import React from 'react';
import logo from  './logo.png';
import '../index.css'
import {
 NavLink
} from "react-router-dom";

export default function header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-fixed-top" style={{position:"fixed",
      width:"100%",
      zIndex: "1000000",
      top:"0"}}>
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/"><img  className="navlogo" src={logo}/>  </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link text-white" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" aria-current="page" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link  text-white" aria-current="page" to="/contactMe">Contact Me</NavLink>
          </li>
          
          
            
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
  )
} 
