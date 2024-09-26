import React from 'react';
import './DisplayViewGeneral.scss';
import Button from '../../../../Button';
import { checkIfCharIsKanji, getCharWithFuri } from '../../../../../utils';
import { getHeaderTextClassName } from '../DisplayViewHeader/helpers';

function DisplayViewGeneral({
  jp,
  furi = [],
  en = [],
  notes = [],
  similarWords = [],
  successPercentage,
  similarWordClick,
  setView,
  setSelectedKanji,
}) {
  const headerCharacters = getCharWithFuri(jp, furi, true);
  const kanaClassName = getHeaderTextClassName(headerCharacters);

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

            return (
              <div
                key={`${char}-${i}`}
                role="button"
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
              <Button onClick={() => similarWordClick(similarWord)}>{similarWord.jp}</Button>
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
