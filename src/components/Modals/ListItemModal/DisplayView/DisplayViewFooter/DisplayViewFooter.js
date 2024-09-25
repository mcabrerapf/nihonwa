import React from 'react';
import './DisplayViewFooter.scss';
import Button from '../../../../Button';

function DisplayViewFooter({
  isLastItem,
  isFirstItem,
  view,
  tags,
  selectedKanji,
  listData,
  wordId,
  setView,
  setSelectedKanji,
  handleListItemChange,
  handleGoToItem,
}) {
  const similarWords = listData.filter(({ id, jp }) => id !== wordId && jp.includes(selectedKanji));
  return (
    <div className="display-view-modal-footer">
      <div className="display-view-modal-footer__tags">
        {view === 'general' && tags.map((tag) => (
          <Button
            key={tag}
            modifier="dotted-border"
            isDisabled
            onClick={() => {}}
          >
            {tag}
          </Button>
        ))}
        {view === 'kanji' && similarWords.map((word) => (
          <Button
            key={word.id}
            onClick={() => handleGoToItem(word)}
          >
            {word.jp}
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
            isDisabled={view === 'general'}
            onClick={() => {
              setView('general');
              setSelectedKanji('');
            }}
          >
            情報
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
