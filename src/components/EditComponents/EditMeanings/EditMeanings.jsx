import React, { useState, useRef } from "react";
import "./EditMeanings.scss";
import Button from "../../Button";

const EditMeanings = ({ currentData, setCurrentData }) => {
  const [currentString, setCurrentString] = useState("");
  const inputRef = useRef(null);
  const { en } = currentData;

  const handleAddMeaning = () => {
    if (!currentString) return;
    const updatedMeanings = [...en, currentString];
    setCurrentData({ ...currentData, en: updatedMeanings });
    setCurrentString("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddMeaning();
    }
  };

  const handleMeaningClick = (meaning) => {
    if (!meaning) return;
    setCurrentString(meaning);
    if (inputRef.current) inputRef.current.focus();
  };

  const deleteMeaning = (meaniningIndex) => {
    const updatedMeanings = en.filter((_, i) => i !== meaniningIndex);
    setCurrentData({ ...currentData, en: updatedMeanings });
  };

  return (
    <div className="edit-meanings">
      <div className="edit-meanings-display">
        {en.map((meaning, i) => {
          return (
            <div key={`${meaning}-${i}`} className="edit-meanings-meaning">
              <Button onClick={() => deleteMeaning(i)}>X</Button>
              <span onClick={() => handleMeaningClick(meaning)}>{meaning}</span>
            </div>
          );
        })}
      </div>
      <div className="edit-meanings-input">
        <input
          ref={inputRef}
          onChange={(e) => setCurrentString(e.target.value)}
          onKeyDown={handleKeyPress}
          value={currentString}
        />
        <div className="edit-meanings-input-buttons">
          <Button
            isDisabled={!currentString}
            onClick={() => handleAddMeaning()}
          >
            O
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditMeanings;
