import React, { useEffect, useState } from 'react';
import './RandomWordModal.scss';
import Button from '../../Button';
import Kana from '../../Kana';
import { useMainContext } from '../../../contexts/MainContext';
import { useModalContext } from '../../../contexts/ModalContext';
import {
  generateRandomNumber, getCharWithFuri, getHeaderTextClassname, getTodayDate,
} from '../../../utils';

function RandomWordModal() {
  const { wordList } = useMainContext();
  const { closeModal } = useModalContext();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [usedIndexes, setUsedIndexes] = useState([]);
  const [viewStep, setViewStep] = useState(0);

  useEffect(() => {
    const localData = localStorage.getItem('daily-word');
    const parsedData = JSON.parse(localData);
    const date = getTodayDate();
    const dataToUse = parsedData && parsedData.date === date ? parsedData : { date, indexes: [] };

    const randomIndex = dataToUse.indexes.length
      ? dataToUse.indexes[0] : generateRandomNumber(0, wordList.length);
    if (!parsedData || parsedData.date !== date) {
      dataToUse.indexes.push(randomIndex);
      localStorage.setItem('daily-word', JSON.stringify(dataToUse));
    }
    setSelectedIndex(randomIndex);
    setUsedIndexes([...usedIndexes, randomIndex]);
  }, []);

  const generateNewIndex = () => {
    const randomIndex = generateRandomNumber(0, wordList.length, usedIndexes);
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

  const selectedWord = wordList[selectedIndex];
  const {
    jp, furi, en, notes,
  } = selectedWord;

  const showFuri = viewStep > 0;
  const showMeanings = viewStep > 1;
  const headerCharacters = getCharWithFuri(jp, furi, true);
  const kanaModifier = getHeaderTextClassname(headerCharacters);
  const wordModifier = !showMeanings ? 'full' : '';

  return (
    <div className="random-word-modal">
      <div className="random-word-modal__header">
        <Button onClick={onCloseClick}>X</Button>
      </div>
      <div className="random-word-modal__content" onClick={handleContentClick} role="button">
        <div role="button" className={`random-word-modal__content__word ${wordModifier}`}>
          <div className="random-word-modal__content__word__characters">
            {headerCharacters.map((headerChar, i) => {
              const [char, furiChar, enChar] = headerChar;
              const key = `${char}-${i}`;

              return (
                <Kana
                  key={key}
                  kana={char}
                  furi={furiChar}
                  en={enChar}
                  hideFuri={!showFuri}
                  hideEn={!showMeanings}
                  sizeModifier={kanaModifier}
                />
              );
            })}
          </div>
        </div>
        {showMeanings && (
        <ol className="random-word-modal__content__meanings">
          {en.map((meaning, i) => (
            <li key={`${i}-${meaning}`} className="random-word-modal__content__meanings__meaning">
              <span>-</span>
              <span>{meaning}</span>
            </li>
          ))}
        </ol>
        )}
        {showMeanings && !!notes.length && (
        <ol className="random-word-modal__content__notes">
          {notes.map((note, i) => (
            <li key={`${i}-${note}`} className="random-word-modal__content__notes__note">
              <span>-</span>
              <span>{note}</span>
            </li>
          ))}
        </ol>
        )}

      </div>
      <div className="random-word-modal__footer">
        {viewStep > 1 && <Button onClick={generateNewIndex}>別個</Button>}
      </div>
    </div>
  );
}

export default RandomWordModal;
