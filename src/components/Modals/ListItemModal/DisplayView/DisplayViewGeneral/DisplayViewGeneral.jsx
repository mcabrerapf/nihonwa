import React from 'react';
import './DisplayViewGeneral.scss';
import Button from '../../../../Button';

function DisplayViewGeneral({
  en = [], notes = [], similarWords = [], similarWordClick,
}) {
  return (
    <div className="display-view-general">
      <div className="display-view-general__meanings">
        {en.map((meaning, i) => (
          <span key={`${i}-${meaning}`}>
            -
            {meaning}
          </span>
        ))}
      </div>
      {!!notes.length && (
      <div className="display-view-general__notes">
        {notes.map((note, i) => (
          <span key={`${i}-${note}`}>
            -
            {note}
          </span>
        ))}
      </div>
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
