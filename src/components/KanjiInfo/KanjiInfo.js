import React from 'react';
import './KanjiInfo.scss';
import useKanjiInfo from './useKanjiInfo';
import Loading from '../Loading';

// TODO: rename to kanjireadings

function KanjiInfo(props) {
  const {
    onYomi,
    meanings,
    kunYomi,
    isLoading,
  } = useKanjiInfo(props);

  return (
    <Loading isLoading={isLoading}>
      <div className="kanji-info">
        <div className="kanji-info__container">
          <span
            className={`kanji-info__container__header${onYomi.length ? '' : ' empty-list'}`}
          >
            音読み
          </span>
          <ul className="kanji-info__container__list">
            {onYomi.map((yomi) => (
              <li key={yomi}>
                {yomi}
              </li>
            ))}
          </ul>
        </div>
        <div className="kanji-info__container">
          <span
            className={`kanji-info__container__header${meanings.length ? '' : ' empty-list'}`}
          >
            Meanings
          </span>
          <ul className="kanji-info__container__list">
            {meanings.map((meaning) => (
              <li key={meaning}>
                {meaning}
              </li>
            ))}
          </ul>
        </div>
        <div className="kanji-info__container">
          <span
            className={`kanji-info__container__header${kunYomi.length ? '' : ' empty-list'}`}
          >
            訓読み
          </span>
          <ul className="kanji-info__container__list">
            {kunYomi.map((yomi) => (
              <li key={yomi}>
                {yomi}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Loading>

  );
}

export default KanjiInfo;
