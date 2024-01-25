import React from 'react';
import './EditSentence.scss';
import WordSearchIput from './WordSearchIput';

function EditSentence({
  currentData,
  setCurrentData,
  allWords,
  itemAlreadyExists,
}) {
  const { jp } = currentData;

  const handleUpdateData = (newSentence) => {
    setCurrentData({ ...currentData, jp: newSentence });
  };

  return (
    <div className="edit-sentence">
      <div className="edit-sentence-display">
        <span>{jp}</span>
        {itemAlreadyExists && (
        <span className="edit-sentence-error-message">
          Sentence already exists
        </span>
        )}
      </div>
      <div className="edit-sentence-input">
        <WordSearchIput
          sentence={jp}
          allWords={allWords}
          handleUpdateData={handleUpdateData}
        />
      </div>
    </div>
  );
}

export default EditSentence;
