import React from 'react';
import './DisplayViewConjugation.scss';
import { conjugateWord } from '../../../../../utils';

function DisplayViewConjugation({ word, conjugation }) {
  const conjugations = conjugateWord(word, conjugation);

  return (
    <ul className="display-view-conjugation">
      {conjugations.map((wordConjugation) => {
        if (!wordConjugation[1].length && !wordConjugation[2].length) return null;

        return (
          <li key={wordConjugation[0]} className="display-view-conjugation__item">
            <div className="display-view-conjugation__item__header">
              <span>{wordConjugation[0]}</span>
            </div>
            <div className="display-view-conjugation__item__content">
              <span>{wordConjugation[1][0]}</span>
              <span>{wordConjugation[1][1]}</span>
              <span>{wordConjugation[2][0]}</span>
              <span>{wordConjugation[2][1]}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default DisplayViewConjugation;
