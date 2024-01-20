import React from "react";
import "./WordModalFooter.scss";

const WordModalFooter = ({
  isLastItem,
  isFirstItem,
  hasNotes,
  hasSentences,
  modalView,
  setModalView,
  setView,
  handleWordChange,
}) => {
  return (
    <div className="word-modal-footer">
      <div className="arrow-container">
        {!isFirstItem && (
          <button
            className={`${isFirstItem ? "disabled" : ""}`}
            onClick={() => handleWordChange()}
          >{`<`}</button>
        )}
      </div>
      <div className="word-modal-view-buttons">
        {modalView !== "edit" && (
          <button className="edit-button" onClick={() => setModalView("edit")}>
            E
          </button>
        )}
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
      <div className="arrow-container">
        {!isLastItem && (
          <button
            className={`${isLastItem ? "disabled" : ""}`}
            onClick={() => handleWordChange(true)}
          >{`>`}</button>
        )}
      </div>
    </div>
  );
};

export default WordModalFooter;
