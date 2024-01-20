import React, { useState } from "react";
import "./EditViewWord.scss";
import { romajiToKana } from "../../../../../utils";

const EditViewWord = ({ currentData, setCurrentData }) => {
  const [currentString, setCurrentString] = useState("");
  const { jp } = currentData;

  const handleParseWord = (kanaKey) => {
    const kana = romajiToKana(currentString, kanaKey);
    setCurrentData({ ...currentData, jp: kana });
    setCurrentString(kana)
  };

  return (
    <div className="edit-view-word">
      <div className="edit-view-word-display"><span>{jp}</span></div>
      <div className="edit-view-word-input">
        <input
          onChange={(e) => setCurrentString(e.target.value)}
          value={currentString}
        />
        <div className="edit-view-word-input-buttons">
          <button onClick={() => handleParseWord("hi")}>か</button>
          <button onClick={() => handleParseWord("ka")}>カ</button>
          {/* <button>w</button> */}
        </div>
      </div>
    </div>
  );
};

export default EditViewWord;
