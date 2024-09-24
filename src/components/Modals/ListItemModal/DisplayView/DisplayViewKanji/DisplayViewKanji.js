import React from 'react';
import './DisplayViewKanji.scss';
import Kanji from '../../../../Kanji';
import useDisplayViewKanji from './useDisplayViewKanji';

function DisplayViewKanji(props) {
  const {
    selectedKanji,
    onYomi,
    meanings,
    kunYomi,
  } = useDisplayViewKanji(props);

  return (
    <div className="display-view-kanji">
      <div key={selectedKanji} className="display-view-kanji__kanji">
        <Kanji kanji={selectedKanji} kanjiId={selectedKanji} />
        <div className="display-view-kanji__kanji__data">
          <div className="display-view-kanji__kanji__data__container">
            <span
              className={`display-view-kanji__kanji__data__container__header${onYomi.length ? '' : ' empty-list'}`}
            >
              音読み
            </span>
            <ul className="display-view-kanji__kanji__data__container__list">
              {onYomi.map((yomi) => (
                <li key={yomi}>
                  {yomi}
                </li>
              ))}
            </ul>
          </div>
          <div className="display-view-kanji__kanji__data__container">
            {/* <span
              className={`kanji-data-header${meanings.length ? '' : ' empty-list'}`}
            >
              Meanings
            </span> */}
            <ul className="display-view-kanji__kanji__data__container__list">
              {meanings.map((meaning) => (
                <li key={meaning}>
                  {meaning}
                </li>
              ))}
            </ul>
          </div>
          <div className="display-view-kanji__kanji__data__container">
            <span
              className={`display-view-kanji__kanji__data__container__header${kunYomi.length ? '' : ' empty-list'}`}
            >
              訓読み
            </span>
            <ul className="display-view-kanji__kanji__data__container__list">
              {kunYomi.map((yomi) => (
                <li key={yomi}>
                  {yomi}
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