import React, { useState } from "react";
import "./DisplayView.scss";
import SentenceModalFooter from "./SentenceModalFooter";
import { copyToClipboard } from "../../../../utils";

const DisplayView = ({
  isFirstItem,
  isLastItem,
  handleSentenceChange,
  sentenceData,
}) => {
  const [view, setView] = useState("general");
  const { jpWords, en, notes, types, tags } = sentenceData;
  const hasNotes = notes && !!notes.length;

  const handleSentenceChangeReset = (forward) => {
    setView("general");
    handleSentenceChange(forward);
  };

  const handleCopySentence = () => {
    const parsedSentence = jpWords.join("");
    copyToClipboard(parsedSentence);
  };

  return (
    <div className="sentence-display-view">
      <header className="sentence-header" onClick={() => handleCopySentence()}>
        {jpWords.map((word, i) => {
          return (
            <span
              key={`${word}-${i}`}
              className="sentence-modal-sentence-jp-word"
            >
              {word}
            </span>
          );
        })}
      </header>
      <div className="sentence-display-content">
        {view === "general" && (
          <div className="sentence-display-view-general">
            <div className="sentence-modal-sentence-meanings">
              {en.map((meaning, i) => (
                <span key={i}>- {meaning}</span>
              ))}
            </div>
            {!!types.length && (
              <div className="sentence-display-view-general-item">
                <span className="sentence-display-view-general-item-header">
                  Types
                </span>
                <div className="sentence-display-view-general-item-list">
                  {types.map((type) => (
                    <span key={type}>{type}</span>
                  ))}
                </div>
              </div>
            )}
            {!!tags.length && (
              <div className="sentence-display-view-general-item">
                <span className="sentence-display-view-general-item-header">
                  Tags
                </span>
                <div className="sentence-display-view-general-item-list">
                  {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        {view === "notes" && (
          <div className="sentence-modal-notes">
            {notes.map((note) => {
              return (
                <div className="sentence-modal-notes-note">
                  <span>- {note}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <SentenceModalFooter
        isFirstItem={isFirstItem}
        isLastItem={isLastItem}
        hasNotes={hasNotes}
        setView={setView}
        handleSentenceChange={handleSentenceChangeReset}
      />
    </div>
  );
};

export default DisplayView;
