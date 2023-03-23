import React from "react";
import PackageCard from "../components/PackageCard";
import Navbar from "../components/Navbar";
import navbarData from "../data/navbarData.json";

const Fun = (props) => {
  return (
    <>
      {props.navbarData.map((nav) => (
        <div class="navbar navbar-expand-lg navbar-light  nav justify-content-center mb-5 nav-bar-container">
          <div class="container nav-bar-container">
            <Navbar {...nav} />
          </div>
        </div>
      ))}
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
  );
};
export default Fun;
