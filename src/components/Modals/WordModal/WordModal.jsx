import React from "react";

import "./WordModal.css";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";

const capitalizeFirstLetter = (string) =>
  string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : "";

const WordModal = ({ closeModal, wordData }) => {
  const {kanji, kana} = wordData
  const header = kanji || kana;
  const hasKanji = kanji && kanji.length

  return (
    <ModalWrapper closeModal={closeModal}>
      <div className="word-modal">
        <div className="word-modal-header">
          <span>{header}</span>
        </div>
        <div className="word-modal-content">
          {Object.keys(wordData).map((key) => {
            const wordValue = wordData[key];
            if (!wordValue) return null;
            if (wordValue && !wordValue.length) return null;
            const value = Array.isArray(wordValue)
              ? wordValue.join(", ")
              : wordValue;
            const parsedKey = `${capitalizeFirstLetter(key)}:`;
            if(key === 'kana' && !hasKanji) return null;
            
            return (
              <div key={`${key}-${value}`} className="word-modal-content-item">
                <span className="word-modal-content-item-header">
                  {parsedKey}
                </span>
                <span>{value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default WordModal;
