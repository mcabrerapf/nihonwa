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
    notes,
    tags,
    displayView,
    selectedKanji,
    successPercentage,
    setSelectedKanji,
    setDisplayView,
  } = useDisplayView(props);

  return (
    <div className="display-view">
      <DisplayViewHeader
        text={jp}
        selectedKanji={selectedKanji}
      />
      <div className="display-view__content">
        {displayView === 'general' && (
        <DisplayViewGeneral
          jp={jp}
          furi={furi}
          en={en}
          notes={notes}
          tags={tags}
          successPercentage={successPercentage}
          setDisplayView={setDisplayView}
          setSelectedKanji={setSelectedKanji}
        />
        )}
        {displayView === 'kanji' && (
        <DisplayViewKanji
          setDisplayView={setDisplayView}
          selectedKanji={selectedKanji}
        />
        )}
      </div>
      <DisplayViewFooter
        setSelectedKanji={setSelectedKanji}
      />
    </div>
  );
}

export default DisplayView;
