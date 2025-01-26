import React, { useEffect, useState } from 'react';
import './RandomKanjiModal.scss';
import Button from '../../Button';
import Kanji from '../../Kanji';
import Modal from '../Modal';
import ModalHeader from '../ModalHeader';
import ModalFooter from '../ModalFooter';
import { useMainContext } from '../../../contexts/MainContext';
import { useModalContext } from '../../../contexts/ModalContext';
import { generateRandomNumber, getAllKanjis, getTodayDate } from '../../../utils';
import KanjiReadings from '../../KanjiReadings';
import KanjiWords from '../../KanjiWords';

function RandomKanjiModal() {
  const { wordList } = useMainContext();
  const { closeModal } = useModalContext();
  const [allKanjis, setAllKanjis] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [usedIndexes, setUsedIndexes] = useState([]);
  const [viewStep, setViewStep] = useState(0);

  useEffect(() => {
    const localData = localStorage.getItem('daily-kanji');
    const parsedData = JSON.parse(localData);
    const date = getTodayDate();
    const dataToUse = parsedData && parsedData.date === date ? parsedData : { date, indexes: [] };
    const initialKanjis = getAllKanjis(wordList);
    const randomIndex = dataToUse.indexes.length
      ? dataToUse.indexes[0] : generateRandomNumber(0, initialKanjis.length);
    if (!parsedData || parsedData.date !== date) {
      dataToUse.indexes.push(randomIndex);
      localStorage.setItem('daily-kanji', JSON.stringify(dataToUse));
    }

    setAllKanjis(initialKanjis);
    setSelectedIndex(randomIndex);
    setUsedIndexes([randomIndex]);
  }, []);

  if (!selectedIndex) return null;

  const { kanji, words } = allKanjis[selectedIndex];

  const generateNewIndex = () => {
    const newIndex = generateRandomNumber(0, allKanjis.length, usedIndexes);
    setViewStep(0);
    setSelectedIndex(newIndex);
    setUsedIndexes([...usedIndexes, newIndex]);
  };

  const handleContentClick = () => {
    if (viewStep >= 2) return;
    if (!words || !words.length) setViewStep(2);
    else setViewStep(viewStep + 1);
  };

  const onCloseClick = () => {
    closeModal();
  };

  const showReadings = viewStep > 1;
  const showWords = viewStep > 0;

  return (
    <Modal modifier="random-kanji-modal">
      <ModalHeader childrenAlign="r">
        <Button modifier="no-border" onClick={onCloseClick}>X</Button>
      </ModalHeader>
      <div
        className={`random-kanji-modal__content${viewStep === 1 ? ' first-step' : ''}`}
        onClick={handleContentClick}
        role="button"
      >
        <div className="random-kanji-modal__content__kanji-data">
          <Kanji kanji={kanji} kanjiId={kanji} />
          {showReadings && <KanjiReadings kanji={kanji} />}
          {showWords && (
          <KanjiWords words={words} showMeanings={showReadings} />
          )}
        </div>

      </div>
      <ModalFooter childrenAlign="r">
        {viewStep > 1 && <Button onClick={generateNewIndex}>別個</Button>}
      </ModalFooter>
    </Modal>
  );
}

export default RandomKanjiModal;
