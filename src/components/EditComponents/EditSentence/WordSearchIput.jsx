import React, { useState, useRef, useEffect } from "react";
import { romajiToKana } from "../../../utils";
import Button from "../../Button";

const WordSearchIput = ({ parsedWords, allWords, handleUpdateData }) => {
  const inputRef = useRef(null);
  const [selectedKana, setSelectedKana] = useState("hi");
  const [currentValue, setCurrentValue] = useState("");

  useEffect(() => {
    setCurrentValue(parsedWords);
  }, [parsedWords]);

  // TODO finish this
//   const filteredWords = allWords.filter((word) =>
//   hasTextMatch(currentString, word)
// );

  const handleParseWord = (
    wordToParse = currentValue,
    kanaToUse = selectedKana
  ) => {
    const kana = romajiToKana(wordToParse, kanaToUse);
    handleUpdateData(kana);
  };

  const handleKanaClick = (kanaKey) => {
    setSelectedKana(kanaKey);
    const kana = romajiToKana(currentValue, kanaKey);
    handleUpdateData(kana);
  };

  const handleSelectWord = (word) => {
    if (!word) return;
    const cursorPosition = getCursorPosition();
    const firstPart = currentValue.slice(0, cursorPosition);
    const secondPart = currentValue.slice(cursorPosition);
    const resultString = firstPart + word + secondPart;
    handleParseWord(resultString);
  };

  const handleOnChange = (e) => {
    setCurrentValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleParseWord();
    }
  };

  const getCursorPosition = () => {
    if (inputRef.current) {
      return inputRef.current.selectionStart;
    }
    return 0;
  };

  return (
    <>
      <div className="word-search-suggestions-container">
        <ul>
          {allWords.map(({ id, jp }) => (
            <li key={id} onClick={() => handleSelectWord(jp)}>
              {jp}
            </li>
          ))}
        </ul>
      </div>
      <textarea
        ref={inputRef}
        value={currentValue}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
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
    </>
  );
};

export default WordSearchIput;
