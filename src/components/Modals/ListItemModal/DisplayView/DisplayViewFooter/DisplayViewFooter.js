import React from 'react';
import './DisplayViewFooter.scss';
import Button from '../../../../Button';
import { useListItemContext } from '../../../../../contexts/ListItemContext';
import { useMainContext } from '../../../../../contexts/MainContext';

function DisplayViewFooter({
  view,
  tags,
  selectedKanji,
  wordId,
  setSelectedKanji,
}) {
  const { orderedList } = useMainContext();
  const {
    isFirstItem, isLastItem, setListItemView, handleGoToItem, handleListItemChange,
  } = useListItemContext();
  const similarWords = orderedList
    ? orderedList.filter(({ id, jp }) => id !== wordId && jp.includes(selectedKanji)) : [];

  return (
    <div className="display-view-footer">
      <div className="display-view-footer__tags">
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
            modifier="kanji"
            onClick={() => handleGoToItem(word)}
          >
            {word.jp}
          </Button>
        ))}
      </div>
      <div className="display-view-footer__actions">
        <div className="arrow-container">
          <Button
            isDisabled={isFirstItem}
            onClick={() => handleListItemChange()}
          >
            {'<'}
          </Button>
        </div>
        <div className="display-view-footer__actions__view-buttons">
          <Button
            onClick={() => {
              setSelectedKanji('');
              setListItemView('edit');
            }}
          >
            編集
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
