import React from "react";
import './Testimonials.css';
import VocalVideo from "./VocalVideo.js";
function Testimonials() {
 
  return (
    <section className="jumbotron testimonials" id="testimonials">
      <div className="container">
        <h1 className="display-4 text-center test-video section-heading">Testimonials</h1>

    <VocalVideo/>

      </div>
    </section>
  );
}

export default Testimonials;