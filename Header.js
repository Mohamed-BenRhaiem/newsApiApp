import React from 'react'
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light container">
  <a className="navbar-brand" href="#">Today</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link link " to="/categorie">Catégories</NavLink>
         
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link link" to="/newsList">Explore</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link link" to="/Saved news">Saved news</NavLink>
      </li>
     
      
      
    </ul>
  </div>
    </nav>
    
    </>
  )
}
