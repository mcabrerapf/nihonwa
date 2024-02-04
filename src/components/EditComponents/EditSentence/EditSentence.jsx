import React from 'react';
import './EditSentence.scss';
import WordSearchIput from './WordSearchInput';

function EditSentence({
  currentData,
  setCurrentData,
  wordList,
  itemAlreadyExists,
}) {
  const { jp } = currentData;

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
          wordList={wordList}
          currentData={currentData}
          setCurrentData={setCurrentData}
        />
      </div>
    </div>
  );
}

export default EditSentence;
