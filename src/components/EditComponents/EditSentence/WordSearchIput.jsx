import React, { useState, useRef, useEffect } from "react";
import {
  getEnglishCharacters,
  getWordPronunciation,
  romajiToKana,
} from "../../../utils";
import Button from "../../Button";

const WordSearchIput = ({ jpWords, allWords, handleUpdateData }) => {
  const inputRef = useRef(null);
  const [selectedKana, setSelectedKana] = useState("hi");
  const [currentValue, setCurrentValue] = useState("");
  const [selectedWordIndex, setSelectedWordIndex] = useState(0);
  const [cursorPosition, setCursorPosition] = useState(0);
  const searchValue = getEnglishCharacters(
    currentValue.substring(cursorPosition)
  );
console.log({currentValue, searchValue})
  const filteredWords = allWords.filter((word) => {
    const parsedPronunciation = getWordPronunciation(word);
    // console.log(searchValue.substring(cursorPosition))
    return parsedPronunciation.indexOf(searchValue.toLowerCase()) !== -1;
  });

  useEffect(() => {
    const parsedWords = jpWords.join('')
    console.log({jpWords, parsedWords})
    setCurrentValue(parsedWords);
  }, [jpWords]);

  useEffect(() => {
    if (selectedWordIndex > filteredWords.length)
      setSelectedWordIndex(filteredWords.length - 1);
  }, [filteredWords, selectedWordIndex]);

  useEffect(() => {
    if (cursorPosition > currentValue.length)
      setCursorPosition(currentValue.length);
  }, [currentValue, cursorPosition]);

  const getCurrentCursorPosition = () => {
    if (inputRef.current) return inputRef.current.selectionStart;
    return 0;
  };

  const updateCursorPosition = () => {
    const currentCursorPosition = getCurrentCursorPosition();
    setCursorPosition(currentCursorPosition);
  };

  const handleParseWord = (
    wordToParse = searchValue,
    kanaToUse = selectedKana
  ) => {
    if (wordToParse === searchValue) return;
    console.log({wordToParse})
    const kana = romajiToKana(wordToParse, kanaToUse);
    const resultString = currentValue.replace(searchValue, `${kana} `);
    console.log({resultString})
    handleUpdateData(resultString);
    setSelectedWordIndex(0);
    if (inputRef.current) inputRef.current.focus();
  };

  const handleKanaClick = (kanaKey) => {
    setSelectedKana(kanaKey);
    const kana = romajiToKana(currentValue, kanaKey);
    handleUpdateData(kana);
    setSelectedWordIndex(0);
    if (inputRef.current) inputRef.current.focus();
  };

  const handleSelectWord = (word) => {
    if (!word) return;
    const resultString = currentValue.replace(searchValue, `${word} `);
    handleUpdateData(resultString);
  };

  const handleOnChange = ({ target: { value } }) => {
    const currentCursorPosition = getCurrentCursorPosition();
    console.log({ cursorPosition, currentCursorPosition });
    setCurrentValue(value);
  };

  const handleKeyPress = (e) => {
    const { key } = e;
    // const currentCursorPosition = getCurrentCursorPosition();
    // const isBackspace = key === 'Backspace'
    console.log({ key });
    // console.log({ currentCursorPosition, cursorPosition });
    // if (currentCursorPosition < cursorPosition)
    //   setCursorPosition(currentCursorPosition);

    if (key === "Enter") {
      e.preventDefault();
      const wordMatch = filteredWords[selectedWordIndex];
      console.log({ wordMatch });
      !!wordMatch ? handleSelectWord(wordMatch.jp) : handleParseWord();
    }

    if (key === " ") {
      handleParseWord();
    }

    if (key === "Tab") {
      e.preventDefault();
      selectedKana === "hi" ? setSelectedKana("ka") : setSelectedKana("hi");
    }

    if (key === "ArrowUp" && selectedWordIndex > 0) {
      setSelectedWordIndex(selectedWordIndex - 1);
    }

    if (key === "ArrowDown" && selectedWordIndex < filteredWords.length - 1) {
      setSelectedWordIndex(selectedWordIndex + 1);
    }
  };

  console.log(cursorPosition);
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
          onFocus={updateCursorPosition}
          onClick={updateCursorPosition}
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
