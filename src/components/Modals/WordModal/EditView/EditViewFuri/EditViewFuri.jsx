import React, { useState } from "react";
import "./EditViewFuri.scss";
import { getCharWithFuri, romajiToKana } from "../../../../../utils";

const EditViewFuri = ({ currentData, setCurrentData }) => {
  const [currentString, setCurrentString] = useState("");
  const [selectedCharIndex, setSelectedCharIndex] = useState(0);
  const { jp, furi } = currentData;

  const handleParseWord = (kanaKey) => {
    const kana = romajiToKana(currentString, kanaKey);
    handleUpdateFuri(kana);
    setCurrentString("");
  };

  const handleUpdateFuri = (value, i) => {
    const indexToUse = i !== undefined ? i : selectedCharIndex;
    const updatedFuri = [...furi];
    updatedFuri[indexToUse] = value;
    setCurrentData({ ...currentData, furi: updatedFuri });
  };

  const handleCharSelect = (index, furiToCheck) => {
    setSelectedCharIndex(index);
    if (!!furiToCheck) setCurrentString(furiToCheck);
  };

  const kanaWithFuri = getCharWithFuri(jp, furi);

  return (
    <div className="edit-view-furi">
      <div className="edit-view-furi-display">
        {kanaWithFuri.map((kanaGroup, i) => {
          return (
            <div
              key={`${kanaGroup[0]}-${i}`}
              className={`kana-with-furi ${
                i === selectedCharIndex ? "selected-kana" : ""
              }`}
            >
              {kanaGroup[1] && (
                <button onClick={() => handleUpdateFuri("", i)}>x</button>
              )}
              <span className="furi">{kanaGroup[1]}</span>
              <span
                className="kana"
                onClick={() => handleCharSelect(i, kanaGroup[1])}
              >
                {kanaGroup[0]}
              </span>
              <span className="furi">{kanaGroup[2]}</span>
            </div>
          );
        })}
      </div>
      <div className="edit-view-furi-input">
        <input
          onChange={(e) => setCurrentString(e.target.value)}
          value={currentString}
        />
        <div className="edit-view-furi-input-buttons">
          <button onClick={() => handleParseWord("hi")}>か</button>
          <button onClick={() => handleParseWord("ka")}>カ</button>
        </div>
      </div>
    </div>
  );
};

export default EditViewFuri;
