import React, { useState } from "react";
import "./EditSentence.scss";
import Button from "../../Button";
import { romajiToKana } from "../../../utils";

const EditSentence = ({ currentData, setCurrentData }) => {
  const [currentString, setCurrentString] = useState("");
  const [selectedKana, setSelectedKana] = useState("hi");
  const [selectedWordIndex, setSelectedWordIndex] = useState(0);

  const { jpWords } = currentData;
  const hasOneWordOnly = jpWords.length === 1;
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

  const handleKanaClick = (kana) => {
    setSelectedKana(kana);
    handleParseWord(kana);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleParseWord();
    }
  };

  return (
    <div className="edit-sentence">
      <div className="edit-sentence-display">
        {jpWords.map((word, i) => {
          const isWordSelected = i === selectedWordIndex;
          return (
            <Button
              key={`${word}-${i}`}
              modifier={`${isWordSelected ? "" : "ghost"}`}
              onClick={() => handleSelectWord(i, word)}
            >
              {word}
            </Button>
          );
        })}
        {!hasEmptyFinalWord && (
          <Button onClick={() => handleAddWord()}>+</Button>
        )}
      </div>
      <div className="edit-sentence-input">
        <input
          onChange={(e) => setCurrentString(e.target.value)}
          onKeyDown={handleKeyPress}
          value={currentString}
        />
        <div className="edit-sentence-input-buttons">
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
          <Button
            isDisabled={hasOneWordOnly}
            onClick={() => handleDeleteWord(selectedWordIndex)}
          >
            x
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditSentence;
