import React from "react";

// components
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import PackageCard from "../components/PackageCard";
import PillNavigationItem from "../components/PillNavigationItem";
import Testimonials from "../components/Testimonials";
import UnsplashComp from "../components/UnsplashComp";
import Bio from "../components/Bio";

// data
import footerData from "../data/footerData.json";
import navbarData from "../data/navbarData.json";
import pillNavigationData from "../data/pillNavigationData.json";
import jumbotronData from "../data/jumbotronData.json";
import bioData from "../data/bioData.json";

// images
import carambaLogo from "../assets/images/Caramba-logo.png";

// audio
import SoundClip from "../components/SoundClip";

// css
import "bootstrap/dist/css/bootstrap.min.css";

const Fun = (props) => {
  return (
    <>
      <div>
        <SoundClip />
      </div>
      <div className="navbar navbar-expand-lg navbar-light nav justify-content-center mb-1 mt-1 nav-bar-container">
        <div className="container nav-bar-container ml-2 mr-2">
          <img src={carambaLogo} alt="Caramba Logo" height="60vh" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {navbarData.map((nav) => (
                <Navbar {...nav} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="row" id="book">
        <div className="col-lg-12 col-md-12 col-sm-12 text-center py-5">
          {jumbotronData
            .filter((content) => content.id === 1)
            .map((content) => (
              <Jumbotron {...content} />
            ))}
        </div>
      </div>

      <div className="row" id="bio">
        <div className="col-lg-12 col-md-12 col-sm-12 text-center py-5">
          {bioData
            .filter((about) => about.id === 3)
            .map((about) => (
              <Bio {...about} />
            ))}
        </div>
      </div>

      <div className="container" id="plans">
        <div className="row">
          {props.rateCards.map((card) => (
            <div className="col-lg-4 col-md-12 col-sm-12 d-flex flex-column align-items-md-center align-items-center">
              <PackageCard {...card} />
            </div>
          ))}
        </div>
      </div>

      <div className="row">
        <Testimonials />
      </div>

      <section className="food">
        <div className="container">
           <UnsplashComp unsplashItem={props.unsplashDataObject}/>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 h-100 text-center mx-auto">
              <ul className="list-inline mb-2">
                {footerData.map((footer) => (
                  <Footer {...footer} />
                ))}
              </ul>
              <div className="list-inline-item mr-3">
                <a
                  className="nav-link privacy-policy-link"
                  id="privacy"
                  href="https://beazach.github.io/french-tutoring-website/privacy.html"
                >
                  Privacy Policy
                </a>
                <p className="text-muted small mb-4 mb-lg-0" id="copyright">
                  &copy; teamCaramba 2023. Coded in Cambridge, Headley Down,
                  London, Preston and Watford.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <aside className="container" id="theme-buttons">
        <div className="row">
          <ul className="nav nav-pills nav-justified">
            {pillNavigationData.map((item) => (
              <PillNavigationItem {...item} />
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Fun;
