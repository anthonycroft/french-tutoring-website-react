import React from 'react';
import './PackageCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PackageCard = ({ title, subTitle, description, rate, btnMsg, link }) => {


  return (

    <div className="card-wrapper">
      <div className="card">
        <div className="chart_best_value"></div>
        <div className="card-body">
          <h5 className="card-title text-center mb-2">{title}</h5>
          <h6 class="card-subtitle mb-2 text-muted text-center">{subTitle}</h6>
          <p className="card-text text-center">
            {description}
          </p>
          <p className="card-text text-center">{rate}</p>
          <div className="text-center">
              <button type="button" className="btn btn-secondary btn-sm button-font"><a href={link}>{btnMsg}</a></button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PackageCard;
