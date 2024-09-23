import { useEffect, useState } from 'react';

function useDisplayViewKanji({ selectedKanji }) {
  const [kajiData, setKanjiData] = useState({});
  const {
    meanings = [],
    onYomi = [],
    kunYomi = [],
  } = kajiData;

  useEffect(() => {
    const fetchData = async () => {
      setKanjiData({});
      const url = `https://afternoon-gorge-77049-a1de8dd15ce4.herokuapp.com/jisho/kanji/${selectedKanji}`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (!data) return;
          setKanjiData(data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [selectedKanji]);

  return {
    selectedKanji,
    onYomi,
    meanings,
    kunYomi,
  };
}

export default useDisplayViewKanji;
