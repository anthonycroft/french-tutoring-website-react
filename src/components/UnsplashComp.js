import React, { useState } from "react";
import ButtonBar from "./ButtonBar";
import UnsplashImg from "./UnsplashImg";

const UnsplashComp = ({ unsplashItem }) => {

    // Initialising the TextState and QueryState, so the title and image query search term will take default values.
    const initialTextState = unsplashItem.queryList[0].buttonText;
    const initialQueryState = unsplashItem.queryList[0].queryName;

    // Declaring state variables. These are altered onClick in the ButtonBar component. The selected button's text and queryName are able to be passed back to this parent component.
  const [selectedBtnText, setSelectedBtnText] = useState(initialTextState);
  const [selectedQueryName, setSelectedQueryName] = useState(initialQueryState);

  // Sets the event handler function. This is passed to the ButtonBar and utilised onClick, updating the state variables with the buttonText and queryName values.
  const handleBtnClick = (queryName, buttonText) => {
    setSelectedBtnText(buttonText);
    setSelectedQueryName(queryName);
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center cuisine-heading section-heading">
        {selectedBtnText}
      </h1>
      <div>
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
