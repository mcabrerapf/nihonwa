import { useEffect, useState } from 'react';
import './KanjiInfo.scss';
import { B_URL } from '../../constants';

function useKanjiInfo({
  kanji,
  hideReadings = false,
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
      const url = `${B_URL}/jisho/kanji/${kanji}`;
      setIsLoading(true);
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
  }, [kanji]);

  return {
    kanji,
    onYomi,
    meanings,
    kunYomi,
    hideReadings,
    isLoading,
  };
}

export default useKanjiInfo;
