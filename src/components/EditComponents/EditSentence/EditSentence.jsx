import React, { useState, useRef } from "react";
import "./EditSentence.scss";
import Button from "../../Button";
import { romajiToKana } from "../../../utils";

const EditSentence = ({ currentData, setCurrentData, wordsList }) => {
  const inputRef = useRef(null);
  const { jpWords } = currentData;
  const [currentString, setCurrentString] = useState(jpWords.join(""));
  const [selectedKana, setSelectedKana] = useState("hi");
  const [cursorPosition, setCursorPosition] = useState(0);
  const [view, setView] = useState("sentence");

  const handleParseWord = (kanaKey = selectedKana) => {
    const kana = romajiToKana(currentString, kanaKey);
    setCurrentData({ ...currentData, jpWords: [kana] });
    setCurrentString(kana);
  };

  const handleSelectWord = (word) => {
    const firstPart = currentString.slice(0, cursorPosition);
    const secondPart = currentString.slice(cursorPosition);
    const resultString = firstPart + word + secondPart;
    setCurrentData({ ...currentData, jpWords: [resultString] });
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
        {view === "sentence" && jpWords.join("")}
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
