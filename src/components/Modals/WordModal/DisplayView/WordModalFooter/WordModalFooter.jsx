import React from "react";
import "./WordModalFooter.scss";
import Button from "../../../../Button";

const WordModalFooter = ({
  isLastItem,
  isFirstItem,
  hasNotes,
  hasSentences,
  setView,
  handleWordChange,
}) => {
  return (
    <div className="word-modal-footer">
      <div className="arrow-container">
        {!isFirstItem && (
          <Button
            isDisabled={isFirstItem}
            onClick={() => handleWordChange()}
          >{`<`}</Button>
        )}
      </div>
      <div className="word-modal-view-buttons">
        <Button
          isDisabled={!hasNotes}
          onClick={() => {
            hasNotes && setView("notes");
          }}
        >
          N
        </Button>

        <Button
          onClick={() => {
            setView("general");
          }}
        >
          G
        </Button>

        <Button
          isDisabled={!hasSentences}
          onClick={() => {
            hasSentences && setView("sentences");
          }}
        >
          S
        </Button>
      </div>
      <div className="arrow-container">
        {!isLastItem && (
          <Button
            isDisabled={isLastItem}
            onClick={() => handleWordChange(true)}
          >{`>`}</Button>
        )}
      </div>
    </div>
  );
};

export default WordModalFooter;
