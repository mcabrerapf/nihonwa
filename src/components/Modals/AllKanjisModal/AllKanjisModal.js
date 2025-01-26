import React, { useEffect, useState } from 'react';
import './AllKanjisModal.scss';
import Button from '../../Button';
import Kanji from '../../Kanji';
import KanjiReadings from '../../KanjiReadings';
import KanjiWords from '../../KanjiWords';
import Modal from '../Modal';
import { useMainContext } from '../../../contexts/MainContext';
import { useModalContext } from '../../../contexts/ModalContext';
import { getAllKanjis } from '../../../utils';
import ModalHeader from '../ModalHeader';

function AllKanjisModal() {
  const { wordList } = useMainContext();
  const { closeModal } = useModalContext();
  const [allKanjis, setAllKanjis] = useState([]);
  const [selectedKanji, setSelectedKanji] = useState(null);

  useEffect(() => {
    setAllKanjis(getAllKanjis(wordList));
  }, []);

  const onCloseClick = (e) => {
    e.preventDefault();
    setSelectedKanji(null);
    if (!selectedKanji) closeModal();
  };

  return (
    <Modal modifier="all-kanjis-modal">
      <ModalHeader childrenAlign="r">
        <Button modifier="no-border" onClick={onCloseClick}>X</Button>
      </ModalHeader>
      <div className="all-kanjis-modal-content">
        {!selectedKanji && allKanjis.map((kanji) => (
          <div key={kanji.kanji} className="all-kanjis-modal-content__kanji-option" role="button" onClick={() => setSelectedKanji(kanji)}>
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
    </Modal>

  );
}

export default AllKanjisModal;
