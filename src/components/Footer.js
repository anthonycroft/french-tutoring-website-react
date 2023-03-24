import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "https://kit.fontawesome.com/7408c6667b.js";

const Footer = ({ icon, link }) => {
  return (
    <li className="list-inline-item mr-3">
      <a href={link}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default Footer;
