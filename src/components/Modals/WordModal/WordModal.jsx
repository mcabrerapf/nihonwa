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
    const enChar = kanaToEnglishChar(currentKana, nextKana, prevKana);

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
  const { kanji, kana, furi, en, tags, types, notes } = wordData;
  const jpWord = kanji || kana;
  const header = buildWithFuri(kanji, kana, furi);

  const wordSentences = SENTENCES.map((sentence) => {
    if (!sentence.jp.find((word) => word === jpWord)) return null;
    return (
      <div key={`${sentence.en}-${sentence.jp}`} className="word-sentence">
        <div className="word-sentence-jp">
          {sentence.jp.map((word, i) => {
            const wordClassName =
              word === jpWord
                ? "word-sentence-jp-word word-match"
                : "word-sentence-jp-word";

            return (
              <span key={`${word}-${i}`} className={wordClassName}>
                {word}
              </span>
            );
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

  const handleCharacterCopy = () => {
    navigator.clipboard.writeText(jpWord);
  };
  const hasNotes = notes && !!notes.length;
  const hasSentences = wordSentences && wordSentences.length;

  return (
    <ModalWrapper closeModal={closeModal}>
      <div className="word-modal">
        <div className="word-modal-header" onClick={handleCharacterCopy}>
          {header}
        </div>
        <div className="word-modal-content">
          {view === "general" && (
            <>
              <div className="word-modal-content-meanings">
                {en.map((meaning) => {
                  return <span>- {meaning}</span>;
                })}
              </div>
              <div className="word-modal-tags-types">
                {!!types.length && (
                  <div className="word-modal-content-item-list">
                    <span className="word-modal-content-item-list-header">
                      Types
                    </span>
                    <div className="word-modal-content-item-list-items">
                      {types.map((type) => (
                        <span>{type}</span>
                      ))}
                    </div>
                  </div>
                )}
                {!!tags.length && (
                  <div className="word-modal-content-item-list">
                    <span className="word-modal-content-item-list-header">
                      Tags
                    </span>
                    <div className="word-modal-content-item-list-items">
                      {tags.map((tag) => (
                        <span>{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
          {view === "sentences" && (
            <div className="word-sentences">{wordSentences}</div>
          )}
          {view === "notes" && (
            <div className="word-notes">
              {notes &&
                !!notes.length &&
                notes.map((note) => {
                  return (
                    <div className="word-note">
                      <span>- {note}</span>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        <div className="word-modal-footer">
          <div>
            <button
              className={`${selectedWordIndex === 0 ? "disabled" : ""}`}
              onClick={() => handleCardChange()}
            >{`<`}</button>
          </div>
          <div className="word-modal-view-buttons">
            <button
              className={`${hasNotes ? "" : "disabled"}`}
              onClick={() => {
                hasNotes && setView("notes");
              }}
            >
              N
            </button>

            <button
              onClick={() => {
                setView("general");
              }}
            >
              G
            </button>

            <button
              className={`${hasSentences ? "" : "disabled"}`}
              onClick={() => {
                hasSentences && setView("sentences");
              }}
            >
              S
            </button>
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
