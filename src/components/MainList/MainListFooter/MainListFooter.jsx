import React from "react";
import "./MainListFooter.scss";
import { generateRandomNumber } from "../../../utils";
import Button from "../../Button";

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
      <div className="main-list-footer-buttons l">
        <Button onClick={handleListChange}>{isWordsList ? "文" : "言葉"}</Button>
      </div>
      <div className="main-list-footer-buttons c">
        <Button onClick={() => setSelectedItemIndex(-1)}>+</Button>
      </div>
      <div className="main-list-footer-buttons r">
        <Button
          onClick={() => {
            setShowTestModal(true);
          }}
        >
          T
        </Button>
        <Button onClick={handleRandomItemClick}>R</Button>
      </div>
    </footer>
  );
};

export default MainListFooter;
