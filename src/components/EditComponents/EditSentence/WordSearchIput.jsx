import React, { useState, useRef, useEffect } from "react";
import { getEnglishCharacters, getWordPronunciation, romajiToKana } from "../../../utils";
import Button from "../../Button";

const WordSearchIput = ({ parsedWords, allWords, handleUpdateData }) => {
  const inputRef = useRef(null);
  const [selectedKana, setSelectedKana] = useState("hi");
  const [currentValue, setCurrentValue] = useState("");
  const searchValue = getEnglishCharacters(currentValue);

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
  };

  const handleKanaClick = (kanaKey) => {
    setSelectedKana(kanaKey);
    if (currentValue === parsedWords) return;
    const kana = romajiToKana(currentValue, kanaKey);
    handleUpdateData(kana);
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
      handleParseWord();
      return;
    }

    if (key === "Tab") {
      e.preventDefault();
      selectedKana === "hi" ? setSelectedKana("ka") : setSelectedKana("hi");
      return;
    }
  };

  const filteredWords = allWords.filter((word) => {
    const parsedPronunciation = getWordPronunciation(word);
    return parsedPronunciation.indexOf(searchValue.toLowerCase()) !== -1;
  });

  return (
    <>
      <div className="word-search-suggestions-container">
        {searchValue && (
          <ul>
            {filteredWords.map(({ id, jp }) => (
              <li key={id} onClick={() => handleSelectWord(jp)}>
                {jp}
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
