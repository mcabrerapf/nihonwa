import React, { useContext } from 'react';
import './DisplayViewGeneral.scss';
import Button from '../../../../Button';
import { checkIfCharIsKanji, getCharWithFuri } from '../../../../../utils';
import { getHeaderTextClassName } from '../DisplayViewHeader/helpers';
import { ListItemModalContext } from '../../ListItemModalContext';
import Kana from '../../../../Kana';

function DisplayViewGeneral({
  jp,
  furi = [],
  en = [],
  notes = [],
  successPercentage,
  setView,
  setSelectedKanji,
}) {
  const { similarWords, handleGoToItem } = useContext(ListItemModalContext);
  const headerCharacters = getCharWithFuri(jp, furi, true);
  const kanaModifier = getHeaderTextClassName(headerCharacters);

  const handleCharClick = (char) => {
    if (checkIfCharIsKanji(char)) {
      setSelectedKanji(char);
      setView('kanji');
    }
  };

  return (
    <div className="display-view-general">
      <div role="button" className="display-view-general__word">
        <div className="display-view-general__word__characters">
          {headerCharacters.map((headerChar, i) => {
            const [char, furiChar, enChar] = headerChar;
            const key = `${char}-${i}`;

            return (
              <Kana
                key={key}
                kana={char}
                furi={furiChar}
                en={enChar}
                sizeModifier={kanaModifier}
                handleClick={handleCharClick}
              />
            );
          })}
        </div>

        <div className="display-view-general__word__succes-percentage">
          {successPercentage}
          %
        </div>
      </div>
      <div className="display-view-general__lists">
        <ol className="display-view-general__lists__meanings">
          {en.map((meaning, i) => (
            <li key={`${i}-${meaning}`} className="display-view-general__lists__meanings__meaning">
              <span>-</span>
              <span>{meaning}</span>
            </li>
          ))}
        </ol>
        {!!notes.length && (
        <ol className="display-view-general__lists__notes">
          {notes.map((note, i) => (
            <li key={`${i}-${note}`} className="display-view-general__lists__notes__note">
              <span>-</span>
              <span>{note}</span>
            </li>
          ))}
        </ol>
        )}
        {!!similarWords.length && (
        <div className="display-view-general__lists__similar-words">
          {similarWords.map((similarWord, i) => (
            <div
              key={`${i}-${similarWord.jp}`}
              className="display-view-general__lists__similar-words__word"
            >
              <Button onClick={() => handleGoToItem(similarWord)}>{similarWord.jp}</Button>
              <span className="display-view-general__lists__similar-words__word__meanings">
                {similarWord.en.join('; ')}
              </span>
            </div>
          ))}
        </div>
        )}
      </div>

    </div>
  );
}

export default DisplayViewGeneral;
