import React from "react";
import "./SentenceModalFooter.scss";

const SentenceModalFooter = ({
  isLastItem,
  isFirstItem,
  hasNotes,
  modalView,
  setModalView,
  setView,
  handleSentenceChange,
}) => {
  return (
    <footer className="word-modal-footer">
      <div className="arrow-container">
        {!isFirstItem && (
          <button
            className={`${isFirstItem ? "disabled" : ""}`}
            onClick={() => handleSentenceChange()}
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
      </div>
      <div className="arrow-container">
        {!isLastItem && (
          <button
            className={`${isLastItem ? "disabled" : ""}`}
            onClick={() => handleSentenceChange(true)}
          >{`>`}</button>
        )}
      </div>
    </footer>
  );
};

export default SentenceModalFooter;
