import React, { useState } from "react";

import "./WordModal.css";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import WORDS, { SENTENCES } from "../../../constants";
import { kanaToEnglishChar } from "../../../utils";

const capitalizeFirstLetter = (string) =>
  string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : "";

const buildWithFuri = (kanji, kana, furi = []) => {
  const character = kanji || kana;

  return character.split("").map((char, i) => {
    const furiMatch = furi && furi[i];
    const currentKana = furiMatch || char;
    const nextKana = furi[i + 1] || character[i + 1];
    const prevKana = furi[i - 1] || character[i - 1];
    const enChar = kanaToEnglishChar(currentKana, nextKana,prevKana);

    return (
      <div className="kanji-with-furi" key={`${char}-${i}`}>
        <span className="furi">{furiMatch}</span>
        <span className="kanji">{char}</span>
        <span className="furi">{enChar}</span>
      </div>
    );
  });
};

const WordModal = ({ closeModal, wordIndex, words }) => {
  const [selectedWordIndex, setSelectedWordIndex] = useState(wordIndex);
  const [view, setView] = useState("general");
  const listToUse = words || WORDS || [];
  const listLength = listToUse.length;
  const wordData = listToUse[selectedWordIndex] || {};
  const isLastItem = selectedWordIndex + 1 === listLength;
  const jpWord = wordData.kanji || wordData.kana;

  const wordSentences = SENTENCES.map((sentence) => {
    if (!sentence.jp.find((word) => word === jpWord)) return null;
    return (
      <div key={`${sentence.en}-${sentence.jp}`} className="word-sentence">
        <div className="word-sentence-jp">
          {sentence.jp.map((word, i) => {
            const wordClassName = word === jpWord ? "word-sentence-jp-word word-match" : "word-sentence-jp-word";

            return <span key={`${word}-${i}`} className={wordClassName}>{word}</span>;
          })}
        </div>
        <span>{sentence.en}</span>
      </div>
    );
  }).filter(Boolean);

  const handleCardChange = (next) => {
    if (next && listLength > selectedWordIndex + 1) {
      setSelectedWordIndex(selectedWordIndex + 1);
      setView("general");
    }
    if (!next && selectedWordIndex > 0) {
      setSelectedWordIndex(selectedWordIndex - 1);
      setView("general");
    }
  };

  const { kanji, kana, furi } = wordData;
  const header = buildWithFuri(kanji, kana, furi);

  return (
    <ModalWrapper closeModal={closeModal}>
      <div className="word-modal">
        <div className="word-modal-header">{header}</div>
        <div className="word-modal-content">
          {view === "general" &&
            Object.keys(wordData).map((key) => {
              const wordValue = wordData[key];
              if (!wordValue) return null;
              if (wordValue && !wordValue.length) return null;
              const value = Array.isArray(wordValue)
                ? wordValue.join(", ")
                : wordValue;
              const parsedKey = `${capitalizeFirstLetter(key)}:`;
              if (key === "kana") return null;
              if (key === "kanji") return null;
              if (key === "furi") return null;

              return (
                <div
                  key={`${key}-${value}`}
                  className="word-modal-content-item"
                >
                  {key !== "en" && (
                    <span className="word-modal-content-item-header">
                      {parsedKey}
                    </span>
                  )}
                  <span>{value}</span>
                </div>
              );
            })}
          {view === "sentences" && <div className="word-sentences">
            {wordSentences}
            </div>}
        </div>
        <div className="word-modal-footer">
          <div>
            <button
              className={`${selectedWordIndex === 0 ? "disabled" : ""}`}
              onClick={() => handleCardChange()}
            >{`<`}</button>
          </div>
          <div>
            {!!wordSentences.length && (
              <button
                onClick={() => {
                  view === "general"
                    ? setView("sentences")
                    : setView("general");
                }}
              >
                {view === "general" ? "S" : "G"}
              </button>
            )}
          </div>
          <div>
            <button
              className={`${isLastItem ? "disabled" : ""}`}
              onClick={() => handleCardChange(true)}
            >{`>`}</button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default WordModal;
