import React, { useEffect, useState } from 'react';
import './DisplayViewKanji.scss';
import Kanji from '../../../../Kanji';
import { parseDicData } from '../../../../../utils';

function DisplayViewKanji({ selectedKanji }) {
  const [kajiData, setKanjiData] = useState({});
  const {
    meanings = [],
    onYomi = [],
    kunYomi = [],
  } = kajiData;

  useEffect(() => {
    const fetchData = async () => {
      setKanjiData({});
      const url = `https://afternoon-gorge-77049-a1de8dd15ce4.herokuapp.com/kanjis/${selectedKanji}`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const parsedData = parseDicData(data);
          if (!parseDicData) return;
          setKanjiData(parsedData);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [selectedKanji]);

  return (
    <div className="display-view-kanji">
      <div key={selectedKanji} className="kanji">
        <Kanji kanji={selectedKanji} kanjiId={selectedKanji} />
        <div className="kanji-data">
          <div className="kanji-data-container">
            <span
              className={`kanji-data-header${onYomi.length ? '' : ' empty-list'}`}
            >
              音読み
            </span>
            <ul className="kanji-data-list">
              {onYomi.map(({ '#text': yomi }) => (
                <li key={yomi}>
                  {yomi}
                </li>
              ))}
            </ul>
          </div>
          <div className="kanji-data-container">
            {/* <span
              className={`kanji-data-header${meanings.length ? '' : ' empty-list'}`}
            >
              Meanings
            </span> */}
            <ul className="kanji-data-list">
              {meanings.map((meaning) => (
                <li key={meaning}>
                  {meaning}
                </li>
              ))}
            </ul>
          </div>
          <div className="kanji-data-container">
            <span
              className={`kanji-data-header${kunYomi.length ? '' : ' empty-list'}`}
            >
              訓読み
            </span>
            <ul className="kanji-data-list">
              {kunYomi.map(({ '#text': yomi }) => (
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
