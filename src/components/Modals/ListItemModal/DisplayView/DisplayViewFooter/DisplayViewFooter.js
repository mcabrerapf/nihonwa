import React from 'react';
import './DisplayViewFooter.scss';
import Button from '../../../../Button';

function DisplayViewFooter({
  isLastItem,
  isFirstItem,
  setView,
  tags,
  handleListItemChange,
}) {
  return (
    <div className="display-view-modal-footer">
      <div className="display-view-modal-footer__tags">
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
      <div className="display-view-modal-footer__actions">
        <div className="arrow-container">
          <Button
            isDisabled={isFirstItem}
            onClick={() => handleListItemChange()}
          >
            {'<'}
          </Button>
        </div>
        <div className="display-view-modal-footer__actions__view-buttons">
          <Button
            onClick={() => {
              setView('general');
            }}
          >
            G
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
