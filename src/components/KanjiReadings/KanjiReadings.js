import React from 'react';
import './KanjiReadings.scss';
import useKanjiReadings from './useKanjiReadings';
import Loading from '../Loading';

function KanjiReadings(props) {
  const {
    onYomi,
    meanings,
    kunYomi,
    isLoading,
  } = useKanjiReadings(props);

  return (
    <Loading isLoading={isLoading}>
      <div className="kanji-readings">
        <div className="kanji-readings__container">
          <span
            className={`kanji-readings__container__header${onYomi.length ? '' : ' empty-list'}`}
          >
            音読み
          </span>
          <ul className="kanji-readings__container__list">
            {onYomi.map((yomi) => (
              <li key={yomi}>
                {yomi}
              </li>
            ))}
          </ul>
        </div>
        <div className="kanji-readings__container">
          <span
            className={`kanji-readings__container__header${meanings.length ? '' : ' empty-list'}`}
          >
            Meanings
          </span>
          <ul className="kanji-readings__container__list">
            {meanings.map((meaning) => (
              <li key={meaning}>
                {meaning}
              </li>
            ))}
          </ul>
        </div>
        <div className="kanji-readings__container">
          <span
            className={`kanji-readings__container__header${kunYomi.length ? '' : ' empty-list'}`}
          >
            訓読み
          </span>
          <ul className="kanji-readings__container__list">
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

export default KanjiReadings;
