import React, { useState } from "react";
import "./EditViewSentence.scss";
import { romajiToKana } from "../../../../../utils";

const EditViewSentence = ({ currentData, setCurrentData }) => {
  const [currentString, setCurrentString] = useState("");
  const [selectedWordIndex, setSelectedWordIndex] = useState(0);
  const { jpWords } = currentData;
  const hasEmptyFinalWord = jpWords[jpWords.length - 1] === "";

  const handleParseWord = (kanaKey) => {
    const kana = romajiToKana(currentString, kanaKey);
    const updatedWords = [...jpWords];
    updatedWords[selectedWordIndex] = kana;
    setCurrentData({ ...currentData, jpWords: updatedWords });
    setCurrentString(kana);
  };

  const handleSelectWord = (i, word) => {
    if (hasEmptyFinalWord) return;
    setSelectedWordIndex(i);
    setCurrentString(word);
  };

  const handleAddWord = () => {
    const updatedWords = [...jpWords, ""];
    setCurrentData({ ...currentData, jpWords: updatedWords });
    setSelectedWordIndex(updatedWords.length - 1);
  };

  const handleDeleteWord = (i) => {
    const updatedWords = jpWords.filter((_, wIndex) => i !== wIndex);
    setCurrentData({ ...currentData, jpWords: updatedWords });
    if (selectedWordIndex === i) setSelectedWordIndex(0);
  };

  return (
    <div className="edit-view-sentence">
      <div className="edit-view-sentence-display">
        {jpWords.map((word, i) => {
          const isWordSelected = i === selectedWordIndex;
          return (
            <div key={i} className="edit-view-sentence-word">
              <button
                key={`${word}-${i}`}
                className={`${isWordSelected ? "" : "no-shadow"}`}
                onClick={() => handleSelectWord(i, word)}
              >
                {word}
              </button>
            </div>
          );
        })}
        {!hasEmptyFinalWord && (
          <button onClick={() => handleAddWord()}>+</button>
        )}
      </div>
      <div className="edit-view-sentence-input">
        <input
          onChange={(e) => setCurrentString(e.target.value)}
          value={currentString}
        />
        <div className="edit-view-sentence-input-buttons">
          <button onClick={() => handleParseWord("hi")}>か</button>
          <button onClick={() => handleParseWord("ka")}>カ</button>
          <button
            onClick={() => handleDeleteWord(selectedWordIndex)}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditViewSentence;
