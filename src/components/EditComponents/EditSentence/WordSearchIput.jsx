import React, { useState, useRef, useEffect } from "react";
import {
  getEnglishCharacters,
  getWordPronunciation,
  romajiToKana,
} from "../../../utils";
import Button from "../../Button";

const WordSearchIput = ({ parsedWords, allWords, handleUpdateData }) => {
  const inputRef = useRef(null);
  const [selectedKana, setSelectedKana] = useState("hi");
  const [currentValue, setCurrentValue] = useState("");
  const [selectedWordIndex, setSelectedWordIndex] = useState(0);
  const searchValue = getEnglishCharacters(currentValue);

  const filteredWords = allWords.filter((word) => {
    const parsedPronunciation = getWordPronunciation(word);
    return parsedPronunciation.indexOf(searchValue.toLowerCase()) !== -1;
  });

  useEffect(() => {
    setCurrentValue(parsedWords);
  }, [parsedWords]);

  useEffect(() => {
    if (selectedWordIndex > filteredWords.length)
      setSelectedWordIndex(filteredWords.length - 1);
  }, [filteredWords]);

  const handleParseWord = (
    wordToParse = currentValue,
    kanaToUse = selectedKana
  ) => {
    if (wordToParse === parsedWords) return;
    const kana = romajiToKana(wordToParse, kanaToUse);
    handleUpdateData(kana);
    setSelectedWordIndex(0);
    if (inputRef.current) inputRef.current.focus();
  };

  const handleKanaClick = (kanaKey) => {
    setSelectedKana(kanaKey);
    if (currentValue === parsedWords) return;
    const kana = romajiToKana(currentValue, kanaKey);
    handleUpdateData(kana);
    setSelectedWordIndex(0);
    if (inputRef.current) inputRef.current.focus();
  };

  const handleSelectWord = (word) => {
    if (!word) return;
    const resultString = currentValue.replace(searchValue, word);
    handleParseWord(resultString);
  };

  const handleOnChange = ({ target: { value } }) => {
    setCurrentValue(value);
  };

  const handleKeyPress = (e) => {
    const { key } = e;

    if (key === "Enter") {
      e.preventDefault();
      if (!!filteredWords[selectedWordIndex])
        return handleSelectWord(filteredWords[selectedWordIndex].jp);
      handleParseWord();
      return;
    }

    if (key === "Tab") {
      e.preventDefault();
      selectedKana === "hi" ? setSelectedKana("ka") : setSelectedKana("hi");
      return;
    }
    if (key === "ArrowUp" && selectedWordIndex > 0) {
      setSelectedWordIndex(selectedWordIndex - 1);
    }
    if (key === "ArrowDown" && selectedWordIndex < filteredWords.length - 1) {
      setSelectedWordIndex(selectedWordIndex + 1);
    }
  };

  return (
    <>
      <div className="word-search-suggestions-container">
        {searchValue && (
          <ul>
            {filteredWords.map(({ id, jp }, i) => (
              <li
                key={id}
                // className={i === selectedWordIndex ? "selected-word" : ""}
                onClick={() => handleSelectWord(jp)}
              >
                {jp}
                {i === selectedWordIndex ? " <=" : ""}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="word-search-textarea-cotainer">
        <textarea
          ref={inputRef}
          value={currentValue}
          onChange={handleOnChange}
          onKeyDown={handleKeyPress}
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
    </>
  );
};

export default WordSearchIput;
