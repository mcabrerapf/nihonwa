import React from "react";
import "./WordModalHeader.scss";
import { copyToClipboard, getCharWithFuri } from "../../../../../utils";

const WordModalHeader = ({ text, furi }) => {
  const headerCharacters = getCharWithFuri(text, furi, true);

  const handleCharacterCopy = () => {
    copyToClipboard(text);
  };

  return (
    <div className="word-modal-header" onClick={handleCharacterCopy}>
      {headerCharacters.map((headerChar, i) => {
        const [char, furiChar, enChar] = headerChar;

        return (
          <div className="kana-with-furi" key={`${char}-${i}`}>
            <span className="furi">{furiChar}</span>
            <span className="kana">{char}</span>
            <span className="furi">{enChar}</span>
          </div>
        );
      })}
    </div>
  );
};

export default WordModalHeader;
