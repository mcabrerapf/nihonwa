import { useEffect, useState } from 'react';
import {
  getServiceToUse,
} from '../../Services';

function useMain() {
  const [loading, setLoading] = useState(true);
  const [wordList, setWordList] = useState([]);

  useEffect(() => {
    async function initMain() {
      const { data: allWords, error: wordsError } = await getServiceToUse('word', 'getAll')();
      if (!wordsError) setWordList(allWords);
      setLoading(false);
    }

    initMain();
  }, []);

  const handleUpdateWordsList = async () => {
    const { data: allWords } = await getServiceToUse('word', 'getAll')();
    setWordList(allWords);
  };

  return {
    wordList,
    loading,
    handleUpdateWordsList,
  };
}

export default useMain;
