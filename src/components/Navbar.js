import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Navbar = ({ title, link, image }) => {
  return (
    <>
      <img class="navbar-brand" src={image} height="60vh" />

      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link nav-text" href={link}>
            {title}
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-text" href={link}>
            {title}
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-text" href={link}>
            {title}
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-text" href={link}>
            {title}
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-text" href={link}>
            {title}
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
