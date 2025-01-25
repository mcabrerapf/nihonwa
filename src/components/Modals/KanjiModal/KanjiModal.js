import React, { useEffect, useState } from 'react';
import './KanjiModal.scss';
import Button from '../../Button';
import Kanji from '../../Kanji';
import KanjiReadings from '../../KanjiReadings';
import KanjiWords from '../../KanjiWords';
import { useMainContext } from '../../../contexts/MainContext';
import { getAllKanjis } from '../../../utils';

function KanjiModal() {
  const { wordList } = useMainContext();
  const [allKanjis, setAllKanjis] = useState([]);
  const [selectedKanji, setSelectedKanji] = useState(null);

  useEffect(() => {
    setAllKanjis(getAllKanjis(wordList));
  }, []);

  const onCloseClick = () => {
    setSelectedKanji(null);
  };

  return (
    <div className="kanji-modal">
      {selectedKanji && (
      <div className="kanji-modal__header">
        <Button onClick={onCloseClick}>X</Button>
      </div>
      )}
      <div className="kanji-modal__content">
        {!selectedKanji && allKanjis.map((kanji) => (
          <div key={kanji.kanji} className="kanji-modal__content__kanji-option" role="button" onClick={() => setSelectedKanji(kanji)}>
            {kanji.kanji}
          </div>
        ))}
        {selectedKanji && (
        <div className="kanji-modal__content__kanji-data">
          <Kanji kanji={selectedKanji.kanji} />
          <KanjiReadings kanji={selectedKanji.kanji} />
          <KanjiWords words={selectedKanji.words} />
        </div>
        )}
      </div>
    </div>
  );
}

export default KanjiModal;
