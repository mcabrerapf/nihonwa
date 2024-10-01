import { useEffect, useState } from 'react';
import { B_URL } from '../../../../../constants';

function useDisplayViewKanji({
  selectedKanji,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [kajiData, setKanjiData] = useState({});
  const {
    meanings = [],
    onYomi = [],
    kunYomi = [],
  } = kajiData;

  useEffect(() => {
    const fetchData = async () => {
      const url = `${B_URL}/jisho/kanji/${selectedKanji}`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
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
    isLoading,
  };
}

export default useDisplayViewKanji;
