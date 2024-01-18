import React, { useState } from "react";

import "./WordModal.css";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const capitalizeFirstLetter = (string) =>
  string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : "";

const WordModal = ({ closeModal, wordData }) => {
  return (
    <ModalWrapper closeModal={closeModal}>
      <div className="word-modal">
        <div className="word-modal-header">
          <span>{wordData.kanji || wordData.kana}</span>
        </div>
        <div className="word-modal-content">
          {Object.keys(wordData).map((key, i) => {
            const wordValue = wordData[key];
            if (!wordValue) return null;
            if (wordValue && !wordValue.length) return null;
            const value = Array.isArray(wordValue)
              ? wordValue.join(", ")
              : wordValue;

            return (
              <div key={`${key}-${value}`} className="word-modal-content-item">
                <span className="word-modal-content-item-header">{`${capitalizeFirstLetter(
                  key
                )}:`}</span>{" "}
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
