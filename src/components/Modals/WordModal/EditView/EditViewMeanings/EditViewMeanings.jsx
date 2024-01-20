import React, { useState } from "react";
import "./EditViewMeanings.scss";

const EditViewMeanings = ({ currentData, setCurrentData }) => {
  const [currentString, setCurrentString] = useState("");
  const { en } = currentData;

  const handleAddMeaning = () => {
    const updatedMeanings = [...en, currentString];
    setCurrentData({ ...currentData, en: updatedMeanings });
    setCurrentString("");
  };

  const deleteMeaning = (meaniningIndex) => {
    const updatedMeanings = en.filter((_, i) => i !== meaniningIndex);
    setCurrentData({ ...currentData, en: updatedMeanings });
  };

  return (
    <div className="edit-view-meanings">
      <div className="edit-view-meanings-display">
        {en.map((meaning, i) => {
          return (
            <div key={`${meaning}-${i}`} className="edit-view-meanings-meaning">
              <button onClick={() => deleteMeaning(i)}>X</button>
              <span onClick={() => setCurrentString(meaning)}>{meaning}</span>
            </div>
          );
        })}
      </div>
      <div className="edit-view-meanings-input">
        <input
          onChange={(e) => setCurrentString(e.target.value)}
          value={currentString}
        />
        <div className="edit-view-meanings-input-buttons">
          <button onClick={() => handleAddMeaning()}>O</button>
        </div>
      </div>
    </div>
  );
};

export default EditViewMeanings;
