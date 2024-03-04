import React, { useEffect, useState } from 'react';
import './DisplayView.scss';
import DisplayViewHeader from './DisplayViewHeader';
import DisplayViewGeneral from './DisplayViewGeneral';
import DisplayViewNotes from './DisplayViewNotes';
import DisplayViewFooter from './DisplayViewFooter';
import DisplayViewKanji from './DisplayViewKanji';
import { calculateSuccessRate, checkIfCharIsKanji, getKanjiArrayFromString } from '../../../../utils';
import {
  GODAN, IADJECTIVE, ICHIDAN, NAADJECTIVE,
} from '../../../../constants/TAGS';
import DisplayViewConjugation from './DisplayViewConjugation';

function DisplayView({
  listItemData,
  isFirstItem,
  isLastItem,
  canDelete,
  modalView,
  setModalView,
  handleListItemChange,
}) {
  const {
    jp, furi, en, tags, notes, hits, misses,
  } = listItemData;
  const firstKanji = jp.split('').find((char) => checkIfCharIsKanji(char));
  const [view, setView] = useState('general');
  const [selectedKanji, setSelectedKanji] = useState(firstKanji);
  const hasNotes = notes && !!notes.length;
  const kanjis = [...new Set(getKanjiArrayFromString(jp))];
  const hasKanji = !!kanjis && !!kanjis.length;
  const successPercentage = calculateSuccessRate(hits, misses);
  const conjugation = tags
    .find((tag) => tag === GODAN
  || tag === ICHIDAN
  || tag === IADJECTIVE
  || tag === NAADJECTIVE);
  const sortedTags = tags.sort((a, b) => a.localeCompare(b));

  useEffect(() => {
    const newFirstKanji = jp.split('').find((char) => checkIfCharIsKanji(char));
    setSelectedKanji(newFirstKanji);
    setView('general');
  }, [listItemData]);

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
      <div className="list-item-modal-content">
        {view === 'general' && <DisplayViewGeneral tags={tags} en={en} />}
        {view === 'notes' && <DisplayViewNotes notes={notes} />}
        {view === 'conjugation'
        && (
        <DisplayViewConjugation
          word={jp}
          conjugation={conjugation}
        />
        )}
        {view === 'kanji' && <DisplayViewKanji selectedKanji={selectedKanji} />}
      </div>
      <DisplayViewFooter
        isLastItem={isLastItem}
        isFirstItem={isFirstItem}
        tags={sortedTags}
        hasConjugation={!!conjugation}
        hasNotes={hasNotes}
        handleListItemChange={handleListItemChange}
        setView={setView}
      />
    </div>
  );
}

export default DisplayView;
