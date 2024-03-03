import React, { useEffect, useState } from 'react';
import './DisplayView.scss';
import DisplayViewHeader from './DisplayViewHeader';
import DisplayViewGeneral from './DisplayViewGeneral';
import DisplayViewNotes from './DisplayViewNotes';
import DisplayViewFooter from './DisplayViewFooter';
import DisplayViewKanji from './DisplayViewKanji';
import { calculateSuccessRate, getKanjiArrayFromString } from '../../../../utils';
import { GODAN, ICHIDAN } from '../../../../constants/TAGS';
import DisplayViewConjugation from './DisplayViewConjugation';

function DisplayView({
  listItemData,
  // listItemType,
  isFirstItem,
  isLastItem,
  // sentenceList,
  canDelete,
  modalView,
  setModalView,
  handleListItemChange,
}) {
  const [view, setView] = useState('general');
  const {
    jp, furi, en, tags, notes, hits, misses,
  } = listItemData;
  const hasNotes = notes && !!notes.length;
  const kanjis = [...new Set(getKanjiArrayFromString(jp))];
  const hasKanji = !!kanjis && !!kanjis.length;
  const successPercentage = calculateSuccessRate(hits, misses);
  const conjugation = tags.find((tag) => tag === GODAN || tag === ICHIDAN);

  useEffect(() => {
    setView('general');
  }, [listItemData]);

  return (
    <div className="list-item-modal-display-view">
      <DisplayViewHeader
        successPercentage={successPercentage}
        text={jp}
        furi={furi}
        hasKanji={hasKanji}
        canDelete={canDelete}
        modalView={modalView}
        setModalView={setModalView}
        setView={setView}
      />
      <div className="list-item-modal-content">
        {view === 'general' && <DisplayViewGeneral tags={tags} en={en} />}
        {view === 'notes' && <DisplayViewNotes notes={notes} />}
        {view === 'conjugation' && <DisplayViewConjugation word={jp} conjugation={conjugation} />}
        {view === 'kanji' && <DisplayViewKanji kanjis={kanjis} />}
      </div>
      <DisplayViewFooter
        isLastItem={isLastItem}
        isFirstItem={isFirstItem}
        hasConjugation={!!conjugation}
        hasNotes={hasNotes}
        handleListItemChange={handleListItemChange}
        setView={setView}
      />
    </div>
  );
}

export default DisplayView;
