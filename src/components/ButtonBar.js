import React from "react";
import "./ButtonBar.css";

const ButtonBar = ({ unsplashItem, handleBtnClick }) => {
  return (
    <div className="row d-flex justify-content-center align-items-stretch">
      {unsplashItem.queryList.map((content) => (
        <div className="col-md-4 col-lg-2 mb-1" key={content.key}>
          <button
            className="btn btn-unsplash w-100 h-100 "
            onClick={() => handleBtnClick(content.queryName, content.buttonText)}
          >
            {content.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ButtonBar;
