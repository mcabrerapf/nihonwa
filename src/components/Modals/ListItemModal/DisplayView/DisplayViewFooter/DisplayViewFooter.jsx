import React from "react";
import "./DisplayViewFooter.scss";
import Button from "../../../../Button";

const DisplayViewFooter = ({
  listItemType,
  isLastItem,
  isFirstItem,
  hasNotes,
  hasSentences,
  setView,
  handleListItemChangeReset,
}) => {
  return (
    <div className="display-view-modal-footer">
      <div className="arrow-container">
        {!isFirstItem && (
          <Button
            isDisabled={isFirstItem}
            onClick={() => handleListItemChangeReset()}
          >{`<`}</Button>
        )}
      </div>
      <div className="display-view-modal-view-buttons">
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

        {listItemType === "word" && (
          <Button
            isDisabled={!hasSentences}
            onClick={() => {
              hasSentences && setView("sentences");
            }}
          >
            S
          </Button>
        )}
      </div>
      <div className="arrow-container">
        {!isLastItem && (
          <Button
            isDisabled={isLastItem}
            onClick={() => handleListItemChangeReset(true)}
          >{`>`}</Button>
        )}
      </div>
    </div>
  );
};

export default DisplayViewFooter;
