import { useEffect, useState } from 'react';

function useDisplayViewKanji({ selectedKanji, listData, handleGoToItem }) {
  const [isLoading, setIsLoading] = useState(true);
  const [kajiData, setKanjiData] = useState({});
  const {
    meanings = [],
    onYomi = [],
    kunYomi = [],
  } = kajiData;
  const similarWords = listData.filter(({ jp }) => jp.includes(selectedKanji));

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://afternoon-gorge-77049-a1de8dd15ce4.herokuapp.com/jisho/kanji/${selectedKanji}`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (!data) return;
          setIsLoading(false);
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
    isLoading,
    similarWords,
    handleGoToItem,
  };
}

export default useDisplayViewKanji;
