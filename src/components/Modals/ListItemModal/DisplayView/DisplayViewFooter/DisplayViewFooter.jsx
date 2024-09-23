import React from 'react';
import './DisplayViewFooter.scss';
import Button from '../../../../Button';

function DisplayViewFooter({
  isLastItem,
  isFirstItem,
  hasConjugation,
  hasNotes,
  setView,
  tags,
  handleListItemChange,
}) {
  return (
    <div className="display-view-modal-footer">
      <div className="display-view-tags">
        {!!tags.length && tags.map((tag) => (
          <Button
            key={tag}
            isDisabled
            onClick={() => {}}
          >
            {tag}
          </Button>
        ))}
      </div>
      <div className="display-view-actions">
        <div className="arrow-container">
          <Button
            isDisabled={isFirstItem}
            onClick={() => handleListItemChange()}
          >
            {'<'}
          </Button>
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
          <Button
            isDisabled={!hasConjugation}
            onClick={() => {
              setView('conjugation');
            }}
          >
            C
          </Button>
        </div>
        <div className="arrow-container">
          <Button
            isDisabled={isLastItem}
            onClick={() => handleListItemChange(true)}
          >
            {'>'}
          </Button>
        </div>
      </div>

    </div>
  );
}

export default DisplayViewFooter;
