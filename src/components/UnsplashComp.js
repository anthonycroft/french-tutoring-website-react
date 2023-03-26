import React, { useState } from "react";
import ButtonBar from "./ButtonBar";
import UnsplashImg from "./UnsplashImg";

const UnsplashComp = ({ unsplashItem }) => {

    const initialTextState = unsplashItem.queryList[0].buttonText;
    const initialQueryState = unsplashItem.queryList[0].queryName;
  const [selectedBtnText, setSelectedBtnText] = useState(initialTextState);
  const [selectedQueryName, setSelectedQueryName] = useState(initialQueryState);

  const handleBtnClick = (queryName, buttonText) => {
    setSelectedBtnText(buttonText);
    setSelectedQueryName(queryName);
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center cuisine-heading section-heading">
        {selectedBtnText}
      </h1>
      <div className="row">
        <ButtonBar
          unsplashItem={unsplashItem}
          handleBtnClick={handleBtnClick}
        />
      </div>
      <div className="row mt-5 p-4">
        <UnsplashImg query={selectedQueryName} />
      </div>
    </div>
  );
};

export default UnsplashComp;
