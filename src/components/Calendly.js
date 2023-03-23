import React from "react";
import { useEffect } from "react";
import "./Jumbotron.css";

const Calendly = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    document.head.appendChild(script);
  }, []);

  return (
    <div className="calendly-container col-lg-6 col-md-12 col-sm-12 text-center d-flex align-items-center">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/teamcarambatesting/1-2-1-tutoring-session-free-trial-parents"
        style={{ minWidth: "320px", width: "100%", height: "630px" }}
      ></div>
    </div>
  );
};

export default Calendly;
