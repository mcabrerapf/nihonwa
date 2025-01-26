import React from 'react';
import './DisplayViewGeneral.scss';
import Button from '../../../../Button';
import JPChar from '../../../../JPChar';
import Separator from '../../../../Separator';
import SimpleList from '../../../../SimpleList';
import { useListItemContext } from '../../../../../contexts/ListItemContext';
import {
  checkIfCharIsKanji,
  getCharWithFuri,
  getHeaderTextClassname,
} from '../../../../../utils';
import ButtonList from '../../../../ButtonList';

function DisplayViewGeneral({
  jp,
  furi = [],
  en = [],
  notes = [],
  tags = [],
  successPercentage,
  setDisplayView,
  setSelectedKanji,
}) {
  const { similarWords, handleGoToItem } = useListItemContext();
  const headerCharacters = getCharWithFuri(jp, furi, true);
  const kanaModifier = getHeaderTextClassname(headerCharacters);

  const handleCharClick = (char) => {
    if (checkIfCharIsKanji(char)) {
      setSelectedKanji(char);
      setDisplayView('kanji');
    }
  };

  return (
    <div className="display-view-general">
      <div className="display-view-general__top">
        <div role="button" className="display-view-general__top__word">
          <div className="display-view-general__top__word__characters">
            {headerCharacters.map((headerChar, i) => {
              const [char, furiChar, enChar] = headerChar;
              const key = `${char}-${i}`;

              return (
                <JPChar
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
          <div className="display-view-general__top__word__succes-percentage">
            {successPercentage}
            %
          </div>
        </div>
        <div className="display-view-general__top__lists">
          <SimpleList list={en} />
          {!!notes.length && <Separator />}
          <SimpleList list={notes} />
          {!!similarWords.length && (
          <div className="display-view-general__top__lists__similar-words">
            {similarWords.map((similarWord, i) => (
              <div
                key={`${i}-${similarWord.jp}`}
                className="display-view-general__top__lists__similar-words__word"
              >
                <Button onClick={() => handleGoToItem(similarWord)}>{similarWord.jp}</Button>
                <span className="display-view-general__top__lists__similar-words__word__meanings">
                  {similarWord.en.join('; ')}
                </span>
              </div>
            ))}
          </div>
          )}
        </div>
      </div>
      <div className="display-view-general__bottom">
        <ButtonList list={tags} disableButtons />
      </div>

    </div>
  );
}

export default DisplayViewGeneral;
