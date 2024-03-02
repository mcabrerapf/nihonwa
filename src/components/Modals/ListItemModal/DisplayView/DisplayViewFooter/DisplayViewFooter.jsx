import React from 'react';
import './DisplayViewFooter.scss';
import Button from '../../../../Button';

function DisplayViewFooter({
  isLastItem,
  isFirstItem,
  hasNotes,
  setView,
  handleListItemChange,
}) {
  return (
    <div className="display-view-modal-footer">
      <div className="arrow-container">
        {!isFirstItem && (
          <Button
            isDisabled={isFirstItem}
            onClick={() => handleListItemChange()}
          >
            {'<'}
          </Button>
        )}
      </div>
      <div className="display-view-modal-view-buttons">
        <Button
          isDisabled={!hasNotes}
          onClick={() => {
            if (hasNotes) setView('notes');
          }}
        >
          N
        </Button>

        <Button
          onClick={() => {
            setView('general');
          }}
        >
          G
        </Button>
        {/* {hasKanji && (
          <Button
            modifier="kanji-footer-button"
            onClick={() => {
              setView('kanji');
            }}
          >
            漢字
          </Button>
        )} */}
      </div>
      <div className="arrow-container">
        {!isLastItem && (
          <Button
            isDisabled={isLastItem}
            onClick={() => handleListItemChange(true)}
          >
            {'>'}
          </Button>
        )}
      </div>
    </div>
  );
}

export default DisplayViewFooter;
