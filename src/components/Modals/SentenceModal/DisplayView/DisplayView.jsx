import React, { useState } from "react";
import "./DisplayView.scss";
import SentenceModalFooter from "./SentenceModalFooter";

const DisplayView = ({
  isFirstItem,
  isLastItem,
  handleSentenceChange,
  modalView,
  setModalView,
  sentenceData,
}) => {
  const [view, setView] = useState("general");
  const { jpWords, en, notes, types, tags } = sentenceData;
  const hasNotes = notes && !!notes.length;

  const handleSentenceChangeReset = (forward) => {
    setView("general");
    handleSentenceChange(forward);
  };

  return (
    <div className="sentence-display-view">
      <div className="sentence-display-content">
        <div className="sentence-modal-sentence">
          <div className="sentence-modal-sentence-jp">
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
          </div>
          <div className="sentence-modal-sentence-en">
            <span>{en}</span>
          </div>
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
        {view === "general" && (
          <div className="sentence-display-view-general">
            {!!types.length && (
              <div className="sentence-display-view-general-item">
                <span className="sentence-display-view-general-item-header">
                  Types
                </span>
                <div className="sentence-display-view-general-item-list">
                  {types.map((type) => (
                    <span>{type}</span>
                  ))}
                </div>
              </div>
            )}
            {!!tags.length && (
              <div className="sentence-display-view-general-item">
                <span className="sentence-display-view-general-item-header">Tags</span>
                <div className="sentence-display-view-general-item-list">
                  {tags.map((tag) => (
                    <span>{tag}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <SentenceModalFooter
        isFirstItem={isFirstItem}
        isLastItem={isLastItem}
        hasNotes={hasNotes}
        modalView={modalView}
        setModalView={setModalView}
        setView={setView}
        handleSentenceChange={handleSentenceChangeReset}
      />
    </div>
  );
};

export default DisplayView;
