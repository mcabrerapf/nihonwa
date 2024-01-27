import React, { useEffect, useState } from 'react';
import './DisplayView.scss';
import DisplayViewHeader from './DisplayViewHeader';
import DisplayViewGeneral from './DisplayViewGeneral';
import DisplayViewSentences from './DisplayViewSentences';
import DisplayViewNotes from './DisplayViewNotes';
import DisplayViewFooter from './DisplayViewFooter';
import DisplayViewKanji from './DisplayViewKanji';
import { getWordSentences, getKanjiFromString } from '../../../../utils';

function DisplayView({
  listItemData,
  listItemType,
  isFirstItem,
  isLastItem,
  allSentences,
  canDelete,
  setModalView,
  handleListItemChange,
}) {
  const [view, setView] = useState('general');
  const {
    jp, furi, en, tags, notes,
  } = listItemData;
  const wordSentences = listItemType === 'word' ? getWordSentences(jp, allSentences) : [];
  const hasSentences = wordSentences && wordSentences.length;
  const hasNotes = notes && !!notes.length;
  const kanjis = getKanjiFromString(jp);
  const hasKanji = !!kanjis;

  useEffect(() => {
    setView('general');
  }, [listItemData]);

  return (
    <div className="list-item-modal-display-view">
      <DisplayViewHeader
        text={jp}
        furi={furi}
        hasKanji={hasKanji}
        canDelete={canDelete}
        setModalView={setModalView}
        setView={setView}
      />
      <div className="list-item-modal-content">
        {view === 'general' && <DisplayViewGeneral tags={tags} en={en} />}
        {view === 'sentences' && (
          <DisplayViewSentences jpWord={jp} wordSentences={wordSentences} />
        )}
        {view === 'notes' && <DisplayViewNotes notes={notes} />}
        {view === 'kanji' && <DisplayViewKanji kanjis={kanjis} />}
      </div>
      <DisplayViewFooter
        listItemType={listItemType}
        isLastItem={isLastItem}
        isFirstItem={isFirstItem}
        hasNotes={hasNotes}
        hasSentences={hasSentences}
        handleListItemChange={handleListItemChange}
        setView={setView}
      />
    </div>
  );
}

export default DisplayView;
