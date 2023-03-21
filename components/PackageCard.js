import React from 'react';
import './PackageCard.css';

const PackageCard = ({ props }) => {
  return (

    <div className="card-wrapper">
      <div className="card">
        <div className="chart_best_value">{props.best-value}</div>
        <div className="card-body card-body-3">
          <h5 className="card-title">{props.card-title}</h5>
          <h6 class="card-subtitle">{props.card-subtitle}</h6>
          <p className="card-text">
            {props.card-text}
          </p>
          <p className="card-text-secondary">{props.card-subtitle}</p>
          <div className="text-center">
              <button type="button" className="btn btn-secondary btn-sm"><a href="https://form.jotform.com/230464330195350">{props.btnMessage}</a></button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PackageCard;


<div class="container" id="options">
  <div class="row">
    <div class="col-lg-4 col-md-12 col-sm-12 d-flex flex-column align-items-md-center align-items-center">
<div class="card mb-5 mt-5" style="width: 15rem; height: 25rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Package "Apéritif"</h5>
    <h6 class="card-subtitle mb-2 text-muted text-center">Free 30-minute trial</h6>
    <p class="card-text text-center">Short and sweet - book your free 30-minute trial and start speaking French like the French. Salutations!</p>
    <div class="text-center">
      <button type="button" class="btn btn-secondary btn-sm button-font btn1"><a href="https://calendly.com/teamcarambatesting/1-2-1-tutoring-session-free-trial">Book now</a></button>  
    </div>  <!-- button text center end-->
  </div>
</div>
</div> <!-- column end--></div>