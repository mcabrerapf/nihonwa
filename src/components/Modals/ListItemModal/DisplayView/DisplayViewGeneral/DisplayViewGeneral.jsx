import React from 'react';
import './DisplayViewGeneral.scss';

function DisplayViewGeneral({ en = [], similarWords = [], similarWordClick }) {
  return (
    <div className="display-view-general">
      <div className="display-view-content-meanings">
        {en.map((meaning, i) => (
          <span key={`${i}-${meaning}`}>
            -
            {meaning}
          </span>
        ))}
      </div>
      {!!similarWords.length && (
      <div className="display-view-content-similar-words">
        {similarWords.map((similarWord, i) => (
          <span role="button" key={`${i}-${similarWord.jp}`} onClick={() => similarWordClick(similarWord)}>
            -
            {similarWord.jp}
            {':  '}
            <span className="display-view-content-similar-words-meanings">
              {similarWord.en.join('; ')}
            </span>

          </span>
        ))}
      </div>
      )}
    </div>
  );
}

export default DisplayViewGeneral;
