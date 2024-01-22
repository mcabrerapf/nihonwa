import React, { useState } from "react";
import Button from "../../Button";
import { hasTextMatch } from "../../../utils";

const WordSearch = ({ handleSelectWord, wordsList }) => {
  const [currentString, setCurrentString] = useState("");

  const filteredWords = wordsList.filter((word) =>
    hasTextMatch(currentString, word)
  );

  return (
    <div className="edit-sentence">
      <div className="edit-sentence-display">
        {filteredWords.map((word) => {
          return (
            <Button key={word.id} onClick={() => handleSelectWord(word.jp)}>
              {word.jp}
            </Button>
          );
        })}
      </div>
      <div className="word-search-input">
        <Button
          onClick={() => {
            handleSelectWord();
          }}
        >
          S
        </Button>
        <input
          onChange={(e) => setCurrentString(e.target.value)}
          value={currentString}
        />

        {currentString && (
          <Button
            modifier={"search-delete-button ghost"}
            onClick={() => setCurrentString("")}
          >
            X
          </Button>
        )}
      </div>
    </div>
  );
};

export default WordSearch;
