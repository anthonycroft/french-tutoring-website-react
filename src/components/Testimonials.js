import React from "react";
import './Testimonials.css';
import Bertie from '../assets/images/Bertrand-Icon.png';
function Testimonials() {
  return (
    <section className="jumbotron testimonials" id="testimonials">
      <div className="container">
        <h1 className="display-4 text-center test-video section-heading">Testimonials</h1>
        <div style={{textAlign: "center", margin: "0 auto", width: "100%", minWidth: "200px"}}>
          <div style={{position:"relative", width: "100%", overflow: "hidden", backgroundColor: "transparent"}}>
            <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} allowtransparency="true" width="100%"  loading="eager" name="vocalvideo_647" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" src="https://vocalvideo.com/embed/v1/galleries/647" title="Vocal Video" style={{background: "transparent", position: "relative", width: "1%", minWidth: "100%", height: "80vh", zIndex: "1", display: "block"}} onLoad={() => console.log("iframe loaded")} onError={(error) => console.error("iframe error", error)} poster={Bertie}></iframe>
            <script src="https://vocalvideo.com/embed/v1/host.js" defer={true} type="text/javascript"></script>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;