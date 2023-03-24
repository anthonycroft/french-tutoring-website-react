import React from 'react';
import './PackageCard.css';

const PackageCard = ({ title, subTitle, description, rate, btnMsg, link, bestValue }) => {

  const chartBestValue = bestValue ? <div className="chart_best_value">Best Value</div> : null;

  return (

    <div className="card mb-5">
    {chartBestValue}
      <div className="card-body">
        <h5 className="card-title text-center mt-2 mb-3">{title}</h5>
        <h6 className="card-subtitle mb-3 text-muted text-center">{subTitle}</h6>
        <p className="card-text text-center">
          {description}
        </p>
        <p className="card-text text-center rate">{rate}</p>
        <div className="text-center">
            <button type="button" className="card-btn btn-secondary btn-sm button-font"><a className="btn-link" href={link}>{btnMsg}</a></button>
        </div>
      </div>
    </div>

  );
};

export default PackageCard;
