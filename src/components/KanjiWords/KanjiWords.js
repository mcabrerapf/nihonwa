import React from 'react';
import './KanjiWords.scss';
import Separator from '../Separator';

function KanjiWords({ words, showMeanings = true }) {
  if (!words || !words.length) return null;

  return (
    <ul className="kanji-words">
      {words.map((word, index) => (
        <li key={word.id} className="kanji-words__word">
          {index !== 0 && <Separator />}
          <div className="kanji-words__word__with-furi">
            {word.jp.split('').map((char, cIndex) => (
              <div key={`${cIndex}-${char}`} className="kanji-words__word__with-furi__jp">
                <div className="kanji-words__word__with-furi__jp__furi">
                  {word.furi[cIndex]}
                </div>
                <div className="kanji-words__word__with-furi__jp__kana">
                  {char}
                </div>
              </div>
            ))}
          </div>

          <ul className="kanji-words__word__meanings">
            {showMeanings && word.en.map((meaning, mIndex) => (
              <li key={`${mIndex}-${meaning}`} className="kanji-words__word__meanings__meaning">
                <span>
                  -
                  {meaning}
                </span>
              </li>
            ))}
          </ul>

        </li>

      ))}
    </ul>
  );
}

export default KanjiWords;
