import React from "react";
import "./EditSentence.scss";
import WordSearchIput from "./WordSearchIput";

const EditSentence = ({
  currentData,
  setCurrentData,
  allWords,
  itemAlreadyExists,
}) => {
  const { jpWords } = currentData;
  const parsedWords = jpWords.join("");

  const handleUpdateData = (newSentence) => {
    console.log({newSentence})
    setCurrentData({ ...currentData, jpWords: [newSentence] });
  };
console.log(currentData)
  return (
    <>
      <div className="edit-sentence">
        <div className="edit-sentence-display">
          <span>{parsedWords}</span>
          {itemAlreadyExists && (
            <span className="edit-sentence-error-message">
              Sentence already exists
            </span>
          )}
        </div>
        <div className="edit-sentence-input">
          <WordSearchIput
            jpWords={jpWords}
            allWords={allWords}
            handleUpdateData={handleUpdateData}
          />
        </div>
      </div>
    </>
  );
};

export default EditSentence;
