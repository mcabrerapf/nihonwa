import { useEffect, useState } from 'react';
import {
  getServiceToUse,
} from '../../Services';

function useMain() {
  const [allLists, setAllLists] = useState(null);

  useEffect(() => {
    async function initMain() {
      const { data: allWords, error: wordsError } = await getServiceToUse('word', 'getAll')();
      const { data: allSentences, error: messagesError } = await getServiceToUse('sentence', 'getAll')();
      if (wordsError || messagesError) return;
      setAllLists([allWords, allSentences]);
    }

    initMain();
  }, []);

  const updateWordsList = async () => {
    const { data: allWords } = await getServiceToUse('word', 'getAll')();
    setAllLists([allWords, allLists[1]]);
  };

  const updateSentencesList = async () => {
    const { data: allSentences } = await getServiceToUse('sentence', 'getAll')();
    setAllLists([allLists[0], allSentences]);
  };

  return {
    allLists,
    updateWordsList,
    updateSentencesList,
  };
}

export default useMain;
