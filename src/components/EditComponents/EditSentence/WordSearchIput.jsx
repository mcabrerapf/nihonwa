import React, { useState, useRef, useEffect } from "react";
import { getWordPronunciation, romajiToKana } from "../../../utils";
import Button from "../../Button";

const WordSearchIput = ({ parsedWords, allWords, handleUpdateData }) => {
  const inputRef = useRef(null);
  const [selectedKana, setSelectedKana] = useState("hi");
  const [currentValue, setCurrentValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setCurrentValue(parsedWords);
  }, [parsedWords]);

  const handleParseWord = (
    wordToParse = currentValue,
    kanaToUse = selectedKana
  ) => {
    if (wordToParse === parsedWords) return;
    const kana = romajiToKana(wordToParse, kanaToUse);
    handleUpdateData(kana);
    setSearchValue('')
  };

  const handleKanaClick = (kanaKey) => {
    setSelectedKana(kanaKey);
    if (currentValue === parsedWords) return;
    const kana = romajiToKana(currentValue, kanaKey);
    handleUpdateData(kana);
    setSearchValue('')
  };

  const handleSelectWord = (word) => {
    if (!word) return;
    const cursorPosition = getCursorPosition();
    const firstPart = currentValue.slice(0, cursorPosition);
    const secondPart = currentValue.slice(cursorPosition);
    const resultString = firstPart + word + secondPart;
    handleParseWord(resultString);
    setSearchValue("");
  };

  const handleOnChange = ({ target: { value } }) => {
    setCurrentValue(value);
  };

  const handleOnBlur = () => {
    setSearchValue("");
  };

  const handleKeyDown = (e) => {
    const { key, keyCode } = e;
    const supportedKey =
      (keyCode >= 65 && keyCode <= 90) ||
      (keyCode >= 97 && keyCode <= 122) ||
      key === "Backspace";

    if (key === "Enter") {
      e.preventDefault();
      handleParseWord();
      return;
    }

    if (key === "Tab") {
      e.preventDefault();
      selectedKana === "hi" ? setSelectedKana("ka") : setSelectedKana("hi");
      return;
    }
    if (!supportedKey) return;
    let newSearch = searchValue;
    if (key === "Backspace") {
      newSearch = searchValue.substring(0, searchValue.length - 1);
    } else {
      newSearch = `${searchValue}${e.key}`;
    }

    setSearchValue(newSearch);
  };

  const getCursorPosition = () => {
    if (inputRef.current) return inputRef.current.selectionStart;
    return 0;
  };
  console.log({ searchValue });

  const filteredWords = allWords.filter((word) => {
    const parsedPronunciation = getWordPronunciation(word);
    return parsedPronunciation.indexOf(searchValue.toLowerCase()) !== -1;
  });

  return (
    <>
      {searchValue && (
        <div className="word-search-suggestions-container">
          <ul>
            {filteredWords.map(({ id, jp }) => (
              <li key={id} onClick={() => handleSelectWord(jp)}>
                {jp}
              </li>
            ))}
          </ul>
        </div>
      )}
      <textarea
        ref={inputRef}
        value={currentValue}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        // onBlur={handleOnBlur}
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
