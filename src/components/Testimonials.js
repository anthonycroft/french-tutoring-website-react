import React from "react";
import "./Testimonials.css";
import VocalVideo from "./VocalVideo.js";
function Testimonials() {
  return (
    <div>
      <h1 className="testimonialsTitle">
        Tes<span className="T">t</span>imonials
      </h1>
      <section className="jumbotron testimonials" id="testimonials">
        <div className="container">
          <VocalVideo />
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
