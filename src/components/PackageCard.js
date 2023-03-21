import React from 'react';
import './PackageCard.css';

const PackageCard = ({ props }) => {
  return (

    <div className="card-wrapper">
      <div className="card">
        {/* <div className="chart_best_value">{props.best-value}</div>
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
        </div> */}
      </div>
    </div>

  );
};

export default PackageCard;
