import React from "react";
import "./ButtonBar.css";

const ButtonBar = ({ unsplashItem, handleBtnClick }) => {
  return (
    <div className="row d-flex justify-content-center">
      {unsplashItem.queryList.map((content) => (
        <div className="col-lg-2" key={content.key}>
          <button
            className="btn btn-unsplash w-100"
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
