import React, { useState, useRef } from "react";
import "./EditSentence.scss";
import Button from "../../Button";
import { romajiToKana } from "../../../utils";

const EditSentence = ({ currentData, setCurrentData, wordsList }) => {
  const inputRef = useRef(null);
  const [currentString, setCurrentString] = useState("");
  const [selectedKana, setSelectedKana] = useState("hi");
  const [cursorPosition, setCursorPosition] = useState(0);
  const [view, setView] = useState("sentence");

  const { jpWords } = currentData;

  const handleParseWord = (kanaKey) => {
    const kana = romajiToKana(currentString, kanaKey);
    const updatedWords = [...jpWords];
    updatedWords[0] = kana;
    setCurrentData({ ...currentData, jpWords: updatedWords });
    setCurrentString(kana);
  };

  const handleSelectWord = (word) => {
    const firstPart = currentString.slice(0, cursorPosition);
    const secondPart = currentString.slice(cursorPosition);
    const resultString = firstPart + word + secondPart;
    setCurrentString(resultString);
    setView("sentence");
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

  const getCursorPosition = () => {
    if (inputRef.current) {
      const currentCursorPosition = inputRef.current.selectionStart;
      setCursorPosition(currentCursorPosition);
    }
  };

  const words = wordsList.map(({ jp }) => jp);

  return (
    <div className="edit-sentence">
      <div className="edit-sentence-display">
        {view === "sentence" && jpWords[0]}
        {view === "words" &&
          words.map((word) => (
            <Button key={word} onClick={() => handleSelectWord(word)}>
              {word}
            </Button>
          ))}
      </div>
      <div className="edit-sentence-input">
        <Button
          isNotSelected={selectedKana !== "hi"}
          onClick={() => {
            getCursorPosition();
            view === "words" ? setView("sentence") : setView("words");
          }}
        >
          {view === "words" ? "S" : "W"}
        </Button>
        <input
          ref={inputRef}
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
        </div>
      </div>
    </div>
  );
};

export default EditSentence;
