import React from 'react';
import './DisplayViewHeader.scss';
import { checkIfCharIsKanji, copyToClipboard, getCharWithFuri } from '../../../../../utils';
import { getHeaderTextClassName } from './helpers';
import Button from '../../../../Button';

function DisplayViewHeader({
  successPercentage,
  text,
  furi,
  hasKanji,
  canDelete,
  modalView,
  setSelectedKanji,
  setModalView,
  setView,
}) {
  const headerCharacters = getCharWithFuri(text, furi, true);

  const handleCharacterCopy = () => {
    copyToClipboard(text);
  };
  // 10 char turn to 2rem
  // 30 char turn to 1.5rem
  const kanaClassName = getHeaderTextClassName(headerCharacters);

  const handleCharClick = (char) => {
    if (checkIfCharIsKanji(char)) {
      setSelectedKanji(char);
      setView('kanji');
    }
  };

  return (
    <div role="button" className="display-view-modal-header">
      {modalView !== 'edit' && (
      <div className="display-view-modal-header-buttons">
        <Button
          isDisabled={!canDelete}
          onClick={() => setModalView('delete')}
        >
          D
        </Button>
        {hasKanji && (
        <Button
          modifier="kanji-header-button"
          onClick={handleCharacterCopy}
        >
          写す
        </Button>
        )}
        <Button onClick={() => setModalView('edit')}>E</Button>
      </div>
      )}
      <div role="button" className="display-view-modal-header-text" onClick={handleCharacterCopy}>
        {headerCharacters.map((headerChar, i) => {
          const [char, furiChar, enChar] = headerChar;

          return (
            <div
              role="button"
              key={`${char}-${i}`}
              className="kana-with-furi"
              onClick={() => handleCharClick(char)}
            >
              <span className="furi">{furiChar}</span>
              <span className={kanaClassName}>{char}</span>
              <span className="furi">{enChar}</span>
            </div>
          );
        })}
      </div>
      <div className="display-view-modal-header-succes-percentage">
        <span>
          {successPercentage}
          %
        </span>
      </div>

    </div>
  );
}

export default DisplayViewHeader;
