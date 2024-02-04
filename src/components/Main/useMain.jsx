import { useEffect, useState } from 'react';
import {
  getServiceToUse,
} from '../../Services';

function useMain() {
  const [wordList, setWordList] = useState([]);
  const [sentenceList, setSentenceList] = useState([]);
  const [selectedListKey, setSelectedListKey] = useState('word');

  useEffect(() => {
    async function initMain() {
      const { data: allWords, error: wordsError } = await getServiceToUse('word', 'getAll')();
      const { data: allSentences, error: messagesError } = await getServiceToUse('sentence', 'getAll')();
      if (wordsError || messagesError) return;
      setWordList(allWords);
      setSentenceList(allSentences);
    }

    initMain();
  }, []);

  const updateWordsList = async () => {
    const { data: allWords } = await getServiceToUse('word', 'getAll')();
    setWordList(allWords);
  };

  const updateSentencesList = async () => {
    const { data: allSentences } = await getServiceToUse('sentence', 'getAll')();
    setSentenceList(allSentences);
  };
  const selectedList = selectedListKey === 'word' ? wordList : sentenceList;

  return {
    wordList,
    sentenceList,
    selectedListKey,
    selectedList,
    setSelectedListKey,
    updateWordsList,
    updateSentencesList,
  };
}

export default useMain;
