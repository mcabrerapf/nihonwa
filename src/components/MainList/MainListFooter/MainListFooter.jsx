import React from "react";
import "./MainListFooter.scss";
import { generateRandomNumber } from "../../../utils";

const MainListFooter = ({
  listLength,
  isWordsList,
  setShowTestModal,
  handleListChange,
  setSelectedItemIndex,
}) => {
  const handleRandomItemClick = () => {
    const randomIndex = generateRandomNumber(0, listLength);
    setSelectedItemIndex(randomIndex);
  };

  return (
    <footer className="main-list-footer">
      <div className="main-list-footer-buttons">
        <button onClick={handleListChange}>{isWordsList ? "S" : "W"}</button>
      </div>
      <div className="main-list-footer-buttons">
        <button onClick={() => setSelectedItemIndex(-1)}>+</button>
      </div>
      <div className="main-list-footer-buttons">
        <button
          onClick={() => {
            setShowTestModal(true);
          }}
        >
          T
        </button>
        <button onClick={handleRandomItemClick}>R</button>
      </div>
    </footer>
  );
};

export default MainListFooter;
