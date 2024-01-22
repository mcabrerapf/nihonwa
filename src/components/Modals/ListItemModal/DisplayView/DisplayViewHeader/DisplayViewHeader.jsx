import React from "react";
import "./DisplayViewHeader.scss";
import { copyToClipboard, getCharWithFuri } from "../../../../../utils";
import { getHeaderTextClassName } from "./helpers";

const DisplayViewHeader = ({ text, furi }) => {
  const headerCharacters = getCharWithFuri(text, furi, true);

  const handleCharacterCopy = () => {
    copyToClipboard(text);
  };
  // 10 char turn to 2rem
  // 30 char turn to 1.5rem
  const kanaClassName = getHeaderTextClassName(headerCharacters);
  
  return (
    <div className="display-view-modal-header" onClick={handleCharacterCopy}>
      {headerCharacters.map((headerChar, i) => {
        const [char, furiChar, enChar] = headerChar;

        return (
          <div className="kana-with-furi" key={`${char}-${i}`}>
            <span className="furi">{furiChar}</span>
            <span className={kanaClassName}>{char}</span>
            <span className="furi">{enChar}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayViewHeader;
