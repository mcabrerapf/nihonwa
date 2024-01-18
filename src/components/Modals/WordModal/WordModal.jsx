import React, { useState } from "react";

import "./WordModal.css";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import WORDS, { SENTENCES } from "../../../constants";
import { generateRandomNumber } from "../../../utils";

const capitalizeFirstLetter = (string) =>
  string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : "";

const buildKanjiWithFury = (kanji, furi = []) => {
  if (!furi && !kanji) return null;
  return kanji.split("").map((char, i) => {
    const furiMatch = furi[i];
    if (!furiMatch)
      return (
        <span className="kanji" key={char}>
          {char}
        </span>
      );
    return (
      <div className="kanji-with-furi" key={char}>
        <span className="furi">{furiMatch}</span>
        <span className="kanji">{char}</span>
      </div>
    );
  });
};

const WordModal = ({ closeModal, wordIndex, words }) => {
  const [selectedWordIndex, setSelectedWordIndex] = useState(wordIndex);
  const [view, setView] = useState("general");
  const listToUse = words || WORDS || [];
  const wordData = listToUse[selectedWordIndex] || {};

  const wordSentences = SENTENCES.filter((sentence) => {
    const { kana = "", kanji = "" } = sentence;
    const kanaMatch = wordData.kana
      ? kana.indexOf(wordData.kana) !== -1
      : false;
    const kanjiMatch = wordData.kanji
      ? kanji.indexOf(wordData.kanji) !== -1
      : false;
    return kanaMatch || kanjiMatch;
  });

  const { kanji, kana, furi } = wordData;
  const header = kanji ? buildKanjiWithFury(kanji, furi) : kana;

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
                  <span className="word-modal-content-item-header">
                    {parsedKey}
                  </span>
                  <span>{value}</span>
                </div>
              );
            })}
          {view === "sentences" &&
            wordSentences.map((sentence) => {
              return (
                <div key={sentence.en} className="word-modal-content-item">
                  <span>{sentence.kanji || sentence.kana}</span>
                  <span className="word-modal-content-item-header">
                    {sentence.en}
                  </span>
                </div>
              );
            })}
        </div>
        <div className="word-modal-footer">
          {!!wordSentences.length && (
            <button
              onClick={() => {
                view === "general" ? setView("sentences") : setView("general");
              }}
            >
              {view === "general" ? "S" : "G"}
            </button>
          )}
          <button
            onClick={() => {
              const randomIndex = generateRandomNumber(0, words.length);
              setSelectedWordIndex(randomIndex);
              setView('general');
            }}
          >
            R
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default WordModal;
