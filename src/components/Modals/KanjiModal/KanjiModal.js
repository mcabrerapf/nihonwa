import React, { useEffect, useState } from 'react';
import './KanjiModal.scss';
import Button from '../../Button';
import { useMainContext } from '../../../contexts/MainContext';
import DisplayViewKanji from '../ListItemModal/DisplayView/DisplayViewKanji';
import { getKanjis } from './helpers';

function KanjiModal() {
  const { wordList } = useMainContext();
  const [allKanjis, setAllKanjis] = useState([]);
  const [selectedKanji, setSelectedKanji] = useState(null);

  useEffect(() => {
    setAllKanjis(getKanjis(wordList));
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
          <DisplayViewKanji selectedKanji={selectedKanji.kanji} />
          <ul className="kanji-modal__content__kanji-data__words">
            {selectedKanji.words.map((word) => (
              <li key={word.id} className="kanji-modal__content__kanji-data__words__word">
                <div className="kanji-modal__content__kanji-data__words__word__with-furi">
                  {word.jp.split('').map((char, index) => (
                    <div key={`${index}-${char}`} className="kanji-modal__content__kanji-data__words__word__with-furi__jp">
                      <div className="kanji-modal__content__kanji-data__words__word__with-furi__jp__furi">
                        {word.furi[index]}
                      </div>
                      <div className="kanji-modal__content__kanji-data__words__word__with-furi__jp__kana">
                        {char}
                      </div>
                    </div>
                  ))}
                </div>

                <ul className="kanji-modal__content__kanji-data__words__word__meanings">
                  {word.en.map((meaning) => (
                    <li className="kanji-modal__content__kanji-data__words__word__meanings__meaning">
                      <span>{meaning}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        )}
      </div>
    </div>
  );
}

export default KanjiModal;
