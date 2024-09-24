import { useEffect, useState } from 'react';
import { B_URL } from '../../../../../constants';

function useDisplayViewKanji({
  selectedKanji, listData, wordId, handleGoToItem,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [kajiData, setKanjiData] = useState({});
  const {
    meanings = [],
    onYomi = [],
    kunYomi = [],
  } = kajiData;
  const similarWords = listData.filter(({ id, jp }) => id !== wordId && jp.includes(selectedKanji));

  useEffect(() => {
    const fetchData = async () => {
      const url = `${B_URL}/jisho/kanji/${selectedKanji}`;
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
