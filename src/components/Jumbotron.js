import React from "react";
import "./Jumbotron.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Calendly from "./Calendly";

const Jumbotron = ({ heading, paragraph, paragraphTwo }) => {
  const secondParagraph = paragraphTwo ? (
    <div className="lead text-center first-p">{paragraphTwo}</div>
  ) : null;
  return (
    <div>
      <div className="jumbotron" id="fun">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="display-4 text-center first-header">{heading}</h1>
              <p className="lead text-center first-p">{paragraph}</p>
              {secondParagraph}
              <div id="youtube-container" className="text-center mx-auto mb-5">
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                  }}
                >
                  <iframe
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    src="https://www.youtube.com/embed/eSB715UDut8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Calendly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
