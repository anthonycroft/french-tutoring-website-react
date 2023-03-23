import React from "react";
import PackageCard from '../components/PackageCard';
import navbarData from '../data/navbarData.json';
import Navbar from '../components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import carambaLogo from "../assets/images/Caramba-logo.png"

const Kids = (props) => { 
  return (
    <>
      <div class="navbar navbar-expand-lg navbar-light nav justify-content-center mb-5 nav-bar-container">
        <div class="container nav-bar-container">
        <img src={carambaLogo} alt="Caramba Logo" height="60vh" />
          <ul className="nav justify-content-center">
            {navbarData.map((nav) => (
                <Navbar {...nav} />
              ))}
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {props.rateCards.map((card) => (
            <div className="col-lg-4 col-md-12 col-sm-12 d-flex flex-column align-items-md-center align-items-center">
              <PackageCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Kids;