import React, { useState } from "react";
import "./EditWord.scss";
import Button from "../../Button";
import { romajiToKana } from "../../../utils";

const EditWord = ({ currentData, setCurrentData, itemAlreadyExists }) => {
  const [currentString, setCurrentString] = useState(currentData.jp);
  const [selectedKana, setSelectedKana] = useState("hi");
  const { jp } = currentData;

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleParseWord();
    }
  };

  const handleParseWord = (kanaKey) => {
    if (!currentString) return;
    const kana = romajiToKana(currentString, kanaKey || selectedKana);
    setCurrentData({ ...currentData, jp: kana });
    setCurrentString(kana);
  };

  const handleKanaClick = (kana) => {
    setSelectedKana(kana);
    handleParseWord(kana);
  };

  return (
    <div className="edit-word">
      <div className="edit-word-display">
        <span>{jp}</span>
        {itemAlreadyExists && (
          <span className="edit-word-error-message">Word already exists</span>
        )}
      </div>
      <div className="edit-word-input">
        <input
          onChange={(e) => setCurrentString(e.target.value)}
          onKeyDown={handleKeyPress}
          value={currentString}
        />
        <div className="edit-word-input-buttons">
          <Button
            isNotSelected={selectedKana !== "hi"}
            onClick={() => handleKanaClick("hi")}
          >
            か
          </Button>
          <Button
            isNotSelected={selectedKana !== "ka"}
            onClick={() => handleKanaClick("ka")}
          >
            カ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditWord;
