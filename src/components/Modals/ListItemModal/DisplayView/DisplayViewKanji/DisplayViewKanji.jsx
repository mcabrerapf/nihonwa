import React from 'react';
import './DisplayViewKanji.scss';
import Kanji from '../../../../Kanji';
import { searchKanjiDic } from '../../../../../utils';
// TODO make only one kanji appear
function DisplayViewKanji({ selectedKanji }) {
  const result = searchKanjiDic(selectedKanji);

  return (
    <div className="display-view-kanji">
      <div key={selectedKanji} className="kanji">
        <Kanji kanji={selectedKanji} kanjiId={selectedKanji} />
        <div className="kanji-data">
          <div className="kanji-data-container">
            <span className="kanji-data-header">音読み</span>
            <ul className="kanji-data-list">

              {result.onYomi.map(({ __text: onYomi }) => (
                <li key={onYomi}>
                  {onYomi}
                </li>
              ))}
            </ul>
          </div>
          <div className="kanji-data-container">
            <span className="kanji-data-header">Meanings</span>
            <ul className="kanji-data-list">

              {result.meanings.map((meaning) => (
                <li key={meaning}>
                  {meaning}
                </li>
              ))}
            </ul>
          </div>
          <div className="kanji-data-container">
            <span className="kanji-data-header">訓読み</span>
            <ul className="kanji-data-list">
              {result.kunYomi.map(({ __text: kunYomi }) => (
                <li key={kunYomi}>
                  {kunYomi}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayViewKanji;
