import React from "react";
import './Testimonials.css';
import Bertie from '../assets/images/Bertrand-Icon.png';
import VideoEmbed from "./VideoEmbed";
function Testimonials() {
  console.log(Bertie);
  return (
    <section className="jumbotron testimonials" id="testimonials">
      <div className="container">
        <h1 className="display-4 text-center test-video section-heading">Testimonials</h1>

    <VideoEmbed/>

      </div>
    </section>
  );
}

export default Testimonials;