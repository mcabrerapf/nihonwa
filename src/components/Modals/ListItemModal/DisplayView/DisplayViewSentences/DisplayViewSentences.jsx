import React from 'react';
import './DisplayViewSentences.scss';
import { copyToClipboard } from '../../../../../utils';

function DisplayViewSentences({ wordSentences }) {
  return (
    <div className="display-view-sentences">
      {wordSentences.map((sentence, i) => (
        <div key={i} className="display-view-sentence">
          <div
            role="button"
            className="display-view-sentence-jp"
            onClick={() => copyToClipboard(sentence.jp)}
          >
            <span>{sentence.jp}</span>
            ;
          </div>
          <span>{sentence.en}</span>
        </div>
      ))}
    </div>
  );
}

export default DisplayViewSentences;
