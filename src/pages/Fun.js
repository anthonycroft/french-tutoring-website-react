import React from "react";
import PackageCard from '../components/PackageCard';
import navbarData from '../data/navbarData.json';
import Navbar from '../components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import carambaLogo from "../assets/images/Caramba-logo.png"
import UnsplashImg from "../components/UnsplashImg";
const Fun = (props) => { 
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

    <section class="jumbotron food">
      <div class="container">
        <h1 class="display-4 text-center cuisine-heading section-heading">Plat du jour</h1>
        <div class="container baguette-div">
          <UnsplashImg query="french-pastries" />
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Fun;
