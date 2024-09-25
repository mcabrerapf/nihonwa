import React from 'react';
import './DisplayView.scss';
import DisplayViewHeader from './DisplayViewHeader';
import DisplayViewGeneral from './DisplayViewGeneral';
import DisplayViewFooter from './DisplayViewFooter';
import DisplayViewKanji from './DisplayViewKanji';
import useDisplayView from './useDisplayView';

function DisplayView(props) {
  const {
    id,
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
    canDelete,
    modalView,
    successPercentage,
    listData,
    setModalView,
    setSelectedKanji,
    setView,
    handleGoToItem,
    handleListItemChange,
  } = useDisplayView(props);

  return (
    <div className="list-item-modal-display-view">
      <DisplayViewHeader
        text={jp}
        canDelete={canDelete}
        modalView={modalView}
        selectedKanji={selectedKanji}
        setModalView={setModalView}
        setSelectedKanji={setSelectedKanji}
        setView={setView}
      />
      <div className="list-item-modal-display-view__content">
        {view === 'general' && (
        <DisplayViewGeneral
          jp={jp}
          furi={furi}
          successPercentage={successPercentage}
          tags={tags}
          en={en}
          notes={notes}
          similarWords={similarWords}
          similarWordClick={handleGoToItem}
          setView={setView}
          setSelectedKanji={setSelectedKanji}
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
        view={view}
        tags={sortedTags}
        selectedKanji={selectedKanji}
        listData={listData}
        wordId={id}
        handleListItemChange={handleListItemChange}
        handleGoToItem={handleGoToItem}
        setView={setView}
        setSelectedKanji={setSelectedKanji}
      />
    </div>
  );
}

export default DisplayView;
