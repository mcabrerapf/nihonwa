import React, { useEffect, useState } from 'react';
import './DisplayViewKanji.scss';
import Kanji from '../../../../Kanji';
// import { parseDicData } from '../../../../../utils';

function DisplayViewKanji({ selectedKanji }) {
  const [kanjiData, setKanjiData] = useState({});
  // const {
  //   meanings = [],
  //   onYomi = [],
  //   kunYomi = [],
  // } = kajiData;

  useEffect(() => {
    const fetchData = async () => {
      setKanjiData({});
      await fetch(`/api/jisho?keyword=${selectedKanji}`)
        // .then((res) => res.json())
        .then((res) => res.text())
        .then((html) => setKanjiData(html))
        .catch((err) => console.log(err));
    };
    // const fetchData = async () => {
    //   setKanjiData({});
    //   const url = `https://afternoon-gorge-77049-a1de8dd15ce4.herokuapp.com/kanjis/${selectedKanji}`;
    //   await fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       const parsedData = parseDicData(data);
    //       if (!parseDicData) return;
    //       setKanjiData(parsedData);
    //     })
    //     .catch((err) => console.log(err));
    // };
    fetchData();
  }, [selectedKanji]);
  console.log(kanjiData);
  return (
    <div className="display-view-kanji">
      <div key={selectedKanji} className="kanji">
        <Kanji kanji={selectedKanji} kanjiId={selectedKanji} />
        <div className="kanji-data">
          <div
            dangerouslySetInnerHTML={{ __html: kanjiData }}
          />
          {/* {kajiData} */}
        </div>
      </div>
    </div>
  );
}

export default DisplayViewKanji;
