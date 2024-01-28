import { useEffect, useState } from 'react';
import {
  createWord,
  updateWord,
  getAllSentences,
  getAllWords,
  updateSentence,
  createSentence,
} from '../../Services';

function useMain() {
  const [allLists, setAllLists] = useState(null);

  useEffect(() => {
    async function initMain() {
      const { data: allWords, error: wordsError } = await getAllWords();
      const { data: allSentences, error: messagesError } = await getAllSentences();
      if (wordsError || messagesError) return;
      setAllLists([allWords, allSentences]);
    }

    initMain();
  }, []);

  const updateWordsList = async (newWord) => {
    if (newWord) {
      const serviceToUse = newWord.id ? updateWord : createWord;
      await serviceToUse({ input: newWord });
    }
    const { data: allWords } = await getAllWords();
    setAllLists([allWords, allLists[1]]);
  };

  const updateSentencesList = async (newSentence) => {
    if (newSentence) {
      const serviceToUse = newSentence.id ? updateSentence : createSentence;
      await serviceToUse({ input: newSentence });
    }
    const { data: allSentences } = await getAllSentences();
    setAllLists([allLists[0], allSentences]);
  };

  return {
    allLists,
    updateWordsList,
    updateSentencesList,
  };
}

export default useMain;
