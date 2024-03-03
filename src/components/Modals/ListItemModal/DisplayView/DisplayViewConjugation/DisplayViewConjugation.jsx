import React from 'react';
import './DisplayViewConjugation.scss';
import { conjugateWord } from '../../../../../utils';

function DisplayViewConjugation({ word, conjugation }) {
  const conjugations = conjugateWord(word, conjugation);

  return (
    <div className="display-view-conjugation">
      <ul className="display-view-conjugation-list">
        {conjugations.map((wordConjugation) => (
          <li key={wordConjugation[0]} className="display-view-conjugation-list-item">
            <div className="display-view-conjugation-list-item-header">
              <span>{wordConjugation[0]}</span>
            </div>
            <div className="display-view-conjugation-list-item-content">
              <span>{wordConjugation[1][0]}</span>
              <span>{wordConjugation[1][1]}</span>
              <span>{wordConjugation[2][0]}</span>
              <span>{wordConjugation[2][1]}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayViewConjugation;
