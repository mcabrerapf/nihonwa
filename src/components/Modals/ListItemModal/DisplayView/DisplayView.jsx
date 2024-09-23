import React from 'react';
import './DisplayView.scss';
import DisplayViewHeader from './DisplayViewHeader';
import DisplayViewGeneral from './DisplayViewGeneral';
import DisplayViewFooter from './DisplayViewFooter';
import DisplayViewKanji from './DisplayViewKanji';
import useDisplayView from './useDisplayView';

function DisplayView(props) {
  const {
    jp,
    en,
    furi,
    tags,
    notes,
    isLastItem,
    isFirstItem,
    sortedTags,
    view,
    similarWords,
    selectedKanji,
    hasKanji,
    canDelete,
    modalView,
    successPercentage,
    setModalView,
    setSelectedKanji,
    setView,
    handleGoToItem,
    handleListItemChange,
  } = useDisplayView(props);

  return (
    <div className="list-item-modal-display-view">
      <DisplayViewHeader
        successPercentage={successPercentage}
        text={jp}
        furi={furi}
        isKanjiView={view === 'kanji'}
        selectedKanji={selectedKanji}
        hasKanji={hasKanji}
        canDelete={canDelete}
        modalView={modalView}
        setModalView={setModalView}
        setSelectedKanji={setSelectedKanji}
        setView={setView}
      />
      <div className="list-item-modal-display-view__content">
        {view === 'general' && (
        <DisplayViewGeneral
          tags={tags}
          en={en}
          notes={notes}
          similarWords={similarWords}
          similarWordClick={handleGoToItem}
        />
        )}
        {view === 'kanji' && (
        <DisplayViewKanji
          selectedKanji={selectedKanji}
        />
        )}
      </div>
      <DisplayViewFooter
        isLastItem={isLastItem}
        isFirstItem={isFirstItem}
        tags={sortedTags}
        handleListItemChange={handleListItemChange}
        setView={setView}
      />
    </div>
  );
}

export default DisplayView;
