import React from "react";
import "./ButtonBar.css";

const ButtonBar = ({ unsplashItem, handleBtnClick }) => {
  return (
    <div className="row d-flex justify-content-center">
      {unsplashItem.queryList.map((content) => (
        <div className="col-sm-2 col-md-2 col-lg-2" key={content.key}>
          <button
            className="btn btn-unsplash"
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
