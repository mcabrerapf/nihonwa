import React from 'react';
import './DisplayViewKanji.scss';
import Kanji from '../../../../Kanji';
import { searchKanjiDic } from '../../../../../utils';
// TODO make only one kanji appear
function DisplayViewKanji({ kanjis }) {
  return (
    <div className="display-view-kanji">
      {kanjis.map((kanji, i) => {
        const kanjiId = `${kanji}-${i}`;
        const result = searchKanjiDic(kanji);

        return (
          <div key={`${i}-${kanji}`} className="kanji">
            <Kanji kanji={kanji} kanjiId={kanjiId} />
            <div className="kanji-data">
              <ul className="kanji-data-list">
                <li className="kanji-data-header">OnYomi</li>
                {result.onYomi.map(({ __text: onYomi }) => (
                  <li key={onYomi}>
                    {onYomi}
                  </li>
                ))}
              </ul>
              <ul className="kanji-data-list">
                <li className="kanji-data-header">KunYomi</li>
                {result.kunYomi.map(({ __text: kunYomi }) => (
                  <li key={kunYomi}>
                    {kunYomi}
                  </li>
                ))}
              </ul>
              <ul className="kanji-data-list">
                <li className="kanji-data-header">Meanings</li>
                {result.meanings.map((meaning) => (
                  <li key={meaning}>
                    {meaning}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayViewKanji;
