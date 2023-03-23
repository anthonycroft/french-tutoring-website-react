import React from "react";
import PackageCard from '../components/PackageCard';

const Business = (props) => { 
  return (
    <div className="container">
      <div className="row">
        {props.rateCards.map((card) => (
          <div className="col-lg-4 col-md-12 col-sm-12 d-flex flex-column align-items-md-center align-items-center">
            <PackageCard {...card} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Business;