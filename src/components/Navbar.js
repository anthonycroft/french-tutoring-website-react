import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Navbar = ({ title, link }) => {

  return (
  
    <li className="nav-item">
      <a className="nav-link nav-text" href={link}>
        {title}
      </a>
    </li>

  )
}

export default Navbar;