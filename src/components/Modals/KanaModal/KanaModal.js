import React, { useContext, useState } from 'react';
import './KanaModal.scss';
import ModalWrapper from '../../ModalWrapper';
import Button from '../../Button';
import { ModalWrapperContext } from '../../ModalWrapper/ModalWrapperContext';
import { HIRAGANA, KATAKANA } from '../../../constants';

function KanaModal() {
  const { closeModal } = useContext(ModalWrapperContext);
  const [view, setView] = useState(0);

  const handleKanaToggle = () => {
    if (view === 1) setView(0);
    else setView(1);
  };
  const [kanaToUse, buttonText] = view === 0 ? [HIRAGANA, 'カ'] : [KATAKANA, 'か'];

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
          <Button onClick={handleKanaToggle}>{buttonText}</Button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default KanaModal;
