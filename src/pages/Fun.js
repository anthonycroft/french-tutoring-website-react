import React from "react";
import PackageCard from "../components/PackageCard";
import navbarData from "../data/navbarData.json";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import carambaLogo from "../assets/images/Caramba-logo.png";
import UnsplashImg from "../components/UnsplashImg";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import footerData from "../data/footerData.json";
import Testimonials from "../components/Testimonials";
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

      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 text-center py-5">
          <Jumbotron></Jumbotron>
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

      <div className="row">
        <Testimonials/>
      </div>

      <section class="jumbotron food">
        <div class="container">
          <h1 class="display-4 text-center cuisine-heading section-heading">
            Plat du jour
          </h1>
          <div class="container baguette-div">
            <UnsplashImg query="french-pastries" />
          </div>
        </div>
      </section>

      <footer class="footer" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 h-100 text-center mx-auto">
              <ul class="list-inline mb-2">
                {footerData.map((footer) => (
                  <Footer {...footer} />
                ))}
              </ul>
              <div class="list-inline-item mr-3">
                <a
                  class="nav-link privacy-policy-link"
                  href="https://beazach.github.io/french-tutoring-website/privacy.html"
                >
                  Privacy Policy
                </a>
                <p class="text-muted small mb-4 mb-lg-0" id="copyright">
                  &copy; teamCaramba 2023. Coded in Cambridge, Headley Down,
                  London, Preston and Watford.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Fun;
