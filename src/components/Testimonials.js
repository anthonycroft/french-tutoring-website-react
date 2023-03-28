import React from "react";
import "./Testimonials.css";
import VocalVideo from "./VocalVideo.js";
function Testimonials() {
  return (
    <div>
      <section className="jumbotron testimonials" id="testimonials">
        <div className="container">
          <h1 className="testimonialsTitle">Testimonials</h1>
          <VocalVideo />
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
