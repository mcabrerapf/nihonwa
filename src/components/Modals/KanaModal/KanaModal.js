import React, { useContext, useState } from 'react';
import './KanaModal.scss';
import ModalWrapper from '../../ModalWrapper';
import Button from '../../Button';
import { ModalWrapperContext } from '../../ModalWrapper/ModalWrapperContext';
import { HIRAGANA, KATAKANA } from '../../../constants';

function KanaModal() {
  const { closeModal } = useContext(ModalWrapperContext);
  const [view, setView] = useState('hi');
  const isInHiraganaMode = view === 'hi';
  const kanaModalButtonText = isInHiraganaMode ? 'カ' : 'か';

  const handleKanaToggle = () => {
    if (view === 'ka') setView('hi');
    else setView('ka');
  };
  const kanaToUse = isInHiraganaMode ? HIRAGANA : KATAKANA;
  const mainKana = kanaToUse[0];

  return (
    <ModalWrapper closeModal={closeModal}>
      <div className="kana-modal">
        <div className="kana-modal__content">
          <div className="kana-modal__content__group">
            {mainKana.map((kanas, kanasI) => (
              <div key={kanasI} className="kana-modal__content__group__list">
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
        </div>
        <div className="kana-modal__footer">
          <Button onClick={handleKanaToggle}>{kanaModalButtonText}</Button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default KanaModal;