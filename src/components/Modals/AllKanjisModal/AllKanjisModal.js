import React, { useEffect, useState } from 'react';
import './AllKanjisModal.scss';
import Button from '../../Button';
import Kanji from '../../Kanji';
import KanjiReadings from '../../KanjiReadings';
import KanjiWords from '../../KanjiWords';
import Modal from '../Modal';
import ModalHeader from '../ModalHeader';
import ModalFooter from '../ModalFooter';
import { useMainContext } from '../../../contexts/MainContext';
import { useModalContext } from '../../../contexts/ModalContext';
import { getAllKanjis } from '../../../utils';

function AllKanjisModal() {
  const { wordList } = useMainContext();
  const { closeModal } = useModalContext();
  const [allKanjis, setAllKanjis] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setAllKanjis(getAllKanjis(wordList));
  }, []);

  const onCloseClick = (e) => {
    e.preventDefault();
    if (selectedIndex === null) closeModal();
    else setSelectedIndex(null);
  };

  const selectedKanji = allKanjis[selectedIndex];
  const isLastItem = allKanjis.length === selectedIndex + 1;

  return (
    <Modal modifier="all-kanjis-modal">
      <ModalHeader childrenAlign="r">
        <Button modifier="no-border" onClick={onCloseClick}>X</Button>
      </ModalHeader>
      <div className="all-kanjis-modal-content">
        {selectedIndex === null && allKanjis.map((kanji, index) => (
          <div
            key={kanji.kanji}
            role="button"
            className="all-kanjis-modal-content__kanji-option"
            onClick={() => setSelectedIndex(index)}
          >
            {kanji.kanji}
          </div>
        ))}
        {selectedKanji && (
        <div className="all-kanjis-modal-content__kanji-data">
          <Kanji kanji={selectedKanji.kanji} />
          <KanjiReadings kanji={selectedKanji.kanji} />
          <KanjiWords words={selectedKanji.words} />
        </div>
        )}
      </div>
      {selectedIndex !== null && (
      <ModalFooter childrenAlign="m">
        <Button
          isDisabled={selectedIndex === 0}
          onClick={() => setSelectedIndex(selectedIndex - 1)}
        >
          {'<'}
        </Button>
        <Button
          isDisabled={isLastItem}
          onClick={() => setSelectedIndex(selectedIndex + 1)}
        >
          {'>'}
        </Button>
      </ModalFooter>
      )}
    </Modal>

  );
}

export default AllKanjisModal;
