import React from 'react';
import './DisplayViewKanji.scss';
import Kanji from '../../../../Kanji';
import KanjiReadings from '../../../../KanjiReadings';

function DisplayViewKanji({ selectedKanji }) {
  return (
    <div className="display-view-kanji">
      <Kanji kanji={selectedKanji} kanjiId={selectedKanji} />
      <KanjiReadings kanji={selectedKanji} />
    </div>
  );
}

export default DisplayViewKanji;
