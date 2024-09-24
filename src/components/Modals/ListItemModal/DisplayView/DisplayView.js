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
        successPercentage={successPercentage}
        furi={furi}
        canDelete={canDelete}
        modalView={modalView}
        view={view}
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
          listData={listData}
          handleGoToItem={handleGoToItem}
        />
        )}
      </div>
      <DisplayViewFooter
        isLastItem={isLastItem}
        isFirstItem={isFirstItem}
        view={view}
        tags={sortedTags}
        handleListItemChange={handleListItemChange}
        setView={setView}
      />
    </div>
  );
}

export default DisplayView;
