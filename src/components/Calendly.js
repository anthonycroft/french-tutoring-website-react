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
    <div>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/teamcarambatesting/1-2-1-tutoring-session-free-trial-edition"
        style={{ minWidth: "320px", width: "100%", height: "630px" }}
      ></div>
    </div>
  );
};

export default Calendly;
