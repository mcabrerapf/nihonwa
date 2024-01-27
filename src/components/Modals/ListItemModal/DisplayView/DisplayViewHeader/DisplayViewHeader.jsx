import React from 'react';
import './DisplayViewHeader.scss';
import { copyToClipboard, getCharWithFuri } from '../../../../../utils';
import { getHeaderTextClassName } from './helpers';
import Button from '../../../../Button';

function DisplayViewHeader({
  text, furi, hasKanji, canDelete, setModalView, setView,
}) {
  const headerCharacters = getCharWithFuri(text, furi, true);

  const handleCharacterCopy = () => {
    copyToClipboard(text);
  };
  // 10 char turn to 2rem
  // 30 char turn to 1.5rem
  const kanaClassName = getHeaderTextClassName(headerCharacters);

  return (
    <div role="button" className="display-view-modal-header" onClick={handleCharacterCopy}>
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
          onClick={() => {
            setView('kanji');
          }}
        >
          漢字
        </Button>
        )}
        <Button onClick={() => setModalView('edit')}>E</Button>
      </div>
      <div className="display-view-modal-header-text">
        {headerCharacters.map((headerChar, i) => {
          const [char, furiChar, enChar] = headerChar;

          return (
            <div className="kana-with-furi" key={`${char}-${i}`}>
              <span className="furi">{furiChar}</span>
              <span className={kanaClassName}>{char}</span>
              <span className="furi">{enChar}</span>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default DisplayViewHeader;
