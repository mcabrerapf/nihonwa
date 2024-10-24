import React, { useEffect, useState } from 'react';
import './KanjiModal.scss';
import Button from '../../Button';
import { useMainContext } from '../../../contexts/MainContext';
import { checkIfCharIsKanji } from '../../../utils';
import Kanji from '../../Kanji';

const getKanjis = (words) => {
  const kanjis = [];
  words.forEach((word) => {
    const { jp } = word;
    jp.split('').forEach((char) => {
      if (checkIfCharIsKanji(char)) {
        // console.log(char);
        const addedIndex = kanjis.findIndex((kanji) => kanji?.kanji === char);
        if (addedIndex !== -1) {
          kanjis[addedIndex].words.push(word);
        } else {
          kanjis.push({ kanji: char, words: [word] });
        }
      }
    });
  });

  return kanjis;
};
function KanjiModal({ handleToggleModal }) {
  const { wordList } = useMainContext();
  const [allKanjis, setAllKanjis] = useState([]);
  const [selectedKanji, setSelectedKanji] = useState(null);
  console.log(selectedKanji);

  useEffect(() => {
    setAllKanjis(getKanjis(wordList));
  }, []);

  const onCloseClick = () => {
    if (!selectedKanji) handleToggleModal();
    else setSelectedKanji(null);
  };

  return (
    <div className="kanji-modal">
      <div className="kanji-modal__header">
        <Button onClick={onCloseClick}>X</Button>
      </div>
      <div className="kanji-modal__content">
        {!selectedKanji && allKanjis.map((kanji) => (
          <div key={kanji.kanji} className="kanji-modal__content__kanji-option" role="button" onClick={() => setSelectedKanji(kanji)}>
            {kanji.kanji}
          </div>
        ))}
        {selectedKanji && (
        <div className="kanji-modal__content__kanji-data">
          <Kanji kanji={selectedKanji.kanji} kanjiId={selectedKanji.kanji} />
          <ul className="kanji-modal__content__kanji-data__words">
            {selectedKanji.words.map((word) => <li key={word.id}>{word.jp}</li>)}
          </ul>
        </div>
        )}
      </div>
    </div>
  );
}

export default KanjiModal;
