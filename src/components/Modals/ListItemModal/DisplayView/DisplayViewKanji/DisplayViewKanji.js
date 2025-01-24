import React from 'react';
import './DisplayViewKanji.scss';
import Kanji from '../../../../Kanji';
import KanjiInfo from '../../../../KanjiInfo/KanjiInfo';

function DisplayViewKanji({ selectedKanji }) {
  return (
    <div className="display-view-kanji">
      <Kanji kanji={selectedKanji} kanjiId={selectedKanji} />
      <KanjiInfo kanji={selectedKanji} />
    </div>
  );
}

export default DisplayViewKanji;
