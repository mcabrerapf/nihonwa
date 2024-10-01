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
    notes,
    tags,
    view,
    listItemView,
    selectedKanji,
    successPercentage,
    listData,
    forceShow,
    setSelectedKanji,
    setView,
  } = useDisplayView(props);

  if (listItemView !== 'display' && !forceShow) return null;

  return (
    <div className="display-view">
      <DisplayViewHeader
        text={jp}
        selectedKanji={selectedKanji}
      />
      <div className="display-view__content">
        {view === 'general' && (
        <DisplayViewGeneral
          jp={jp}
          furi={furi}
          en={en}
          notes={notes}
          successPercentage={successPercentage}
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
        view={view}
        tags={tags}
        selectedKanji={selectedKanji}
        listData={listData}
        wordId={id}
        setSelectedKanji={setSelectedKanji}
      />
    </div>
  );
}

export default DisplayView;
