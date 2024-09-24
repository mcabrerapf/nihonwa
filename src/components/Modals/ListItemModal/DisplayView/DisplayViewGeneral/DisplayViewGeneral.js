import React from 'react';
import './DisplayViewGeneral.scss';
import Button from '../../../../Button';

function DisplayViewGeneral({
  en = [], notes = [], similarWords = [], similarWordClick,
}) {
  return (
    <div className="display-view-general">
      <ol className="display-view-general__meanings">
        {en.map((meaning, i) => (
          <li key={`${i}-${meaning}`} className="display-view-general__meanings__meaning">
            <span>-</span>
            <span>{meaning}</span>
          </li>
        ))}
      </ol>
      {!!notes.length && (
      <ol className="display-view-general__notes">
        {notes.map((note, i) => (
          <li key={`${i}-${note}`} className="display-view-general__notes__note">
            <span>-</span>
            <span>{note}</span>
          </li>
        ))}
      </ol>
      )}
      {!!similarWords.length && (
      <div className="display-view-general__similar-words">
        {similarWords.map((similarWord, i) => (
          <div
            key={`${i}-${similarWord.jp}`}
            className="display-view-general__similar-words__word"
          >
            <Button onClick={() => similarWordClick(similarWord)}>{similarWord.jp}</Button>
            <span className="display-view-general__similar-words__word__meanings">
              {similarWord.en.join('; ')}
            </span>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default DisplayViewGeneral;
