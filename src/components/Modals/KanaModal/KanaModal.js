import React, { useState } from 'react';
import './KanaModal.scss';
import Button from '../../Button';
import { HIRAGANA, KATAKANA } from '../../../constants';
import Modal from '../Modal';
import ModalHeader from '../ModalHeader';
import { useModalContext } from '../../../contexts/ModalContext';

function KanaModal() {
  const { closeModal } = useModalContext();
  const [view, setView] = useState(0);

  const handleClose = async (e) => {
    if (e) e.preventDefault();
    closeModal();
  };

  const handleKanaToggle = () => {
    if (view === 1) setView(0);
    else setView(1);
  };

  const [kanaToUse] = view === 0 ? [HIRAGANA, 'カ'] : [KATAKANA, 'か'];
  const mainKana = kanaToUse[0];

  return (
    <Modal modifier="kana-modal">
      <ModalHeader childrenAlign="r">
        <Button modifier="no-border" onClick={handleClose}>X</Button>
      </ModalHeader>
      <div role="button" className="kana-modal-content" onClick={handleKanaToggle}>
        {mainKana.map((kanas, kanasI) => (
          <div key={kanasI} className="kana-modal-content__list">
            {kanas.map((kana, kanaI) => (
              <Button
                key={`${kana}-${kanaI}`}
                modifier="ghost"
              >
                {kana}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </Modal>

  );
}

export default KanaModal;
