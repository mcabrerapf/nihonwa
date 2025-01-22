import React, { useEffect, useState } from 'react';
import './RandomKanjiModal.scss';
import Button from '../../Button';
import { useMainContext } from '../../../contexts/MainContext';
import { useModalContext } from '../../../contexts/ModalContext';
import DisplayViewKanji from '../ListItemModal/DisplayView/DisplayViewKanji';
import { getKanjis } from './helpers';
import { generateRandomNumber } from '../../../utils';

function RandomKanjiModal() {
  const { wordList } = useMainContext();
  const { closeModal } = useModalContext();
  const [allKanjis, setAllKanjis] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [usedIndexes, setUsedIndexes] = useState([]);
  const [viewStep, setViewStep] = useState(0);

  useEffect(() => {
    const initialKanjis = getKanjis(wordList);
    const randomIndex = generateRandomNumber(0, initialKanjis.length);
    setAllKanjis(initialKanjis);
    setSelectedIndex(randomIndex);
    setUsedIndexes([...usedIndexes, randomIndex]);
  }, []);

  const generateNewIndex = () => {
    const randomIndex = generateRandomNumber(0, allKanjis.length, usedIndexes);
    setViewStep(0);
    setSelectedIndex(randomIndex);
    setUsedIndexes([...usedIndexes, randomIndex]);
  };

  const handleContentClick = () => {
    if (viewStep < 2) setViewStep(viewStep + 1);
  };

  const onCloseClick = () => {
    closeModal();
  };
  if (!selectedIndex) return null;

  const selectedKanji = allKanjis[selectedIndex];
  const showMeanings = viewStep > 1;
  const showWords = viewStep > 0;

  return (
    <div className="random-kanji-modal">
      <div className="random-kanji-modal__header">
        <Button onClick={onCloseClick}>X</Button>
      </div>
      <div className="random-kanji-modal__content" onClick={handleContentClick} role="button">
        <div className="random-kanji-modal__content__kanji-data">
          <DisplayViewKanji selectedKanji={selectedKanji.kanji} hideReadings={!showMeanings} />
          {showWords && (
          <ul className="random-kanji-modal__content__kanji-data__words">
            {selectedKanji.words.map((word) => (
              <li key={word.id} className="random-kanji-modal__content__kanji-data__words__word">
                <div className="random-kanji-modal__content__kanji-data__words__word__with-furi">
                  {word.jp.split('').map((char, index) => (
                    <div key={`${index}-${char}`} className="random-kanji-modal__content__kanji-data__words__word__with-furi__jp">
                      <div className="random-kanji-modal__content__kanji-data__words__word__with-furi__jp__furi">
                        {word.furi[index]}
                      </div>
                      <div className="random-kanji-modal__content__kanji-data__words__word__with-furi__jp__kana">
                        {char}
                      </div>
                    </div>
                  ))}
                </div>

                <ul className="random-kanji-modal__content__kanji-data__words__word__meanings">
                  {viewStep > 1 && word.en.map((meaning) => (
                    <li className="random-kanji-modal__content__kanji-data__words__word__meanings__meaning">
                      <span>{meaning}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          )}
        </div>

      </div>
      <div className="random-kanji-modal__footer">
        {viewStep > 1 && <Button onClick={generateNewIndex}>別個</Button>}
      </div>
    </div>
  );
}

export default RandomKanjiModal;
