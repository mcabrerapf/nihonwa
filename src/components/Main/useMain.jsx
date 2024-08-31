import { useEffect, useState, useRef } from 'react';
import {
  getServiceToUse,
} from '../../Services';

function useMain() {
  const [loading, setLoading] = useState(true);
  const [wordList, setWordList] = useState([]);
  const containerRef = useRef(null);

  const scrollToBottom = () => {
    if (containerRef.current) containerRef.current.scrollTop = containerRef.current.scrollHeight;
  };

  useEffect(() => {
    async function initMain() {
      const { data: allWords, error: wordsError } = await getServiceToUse('word', 'getAll')();
      if (!wordsError) setWordList(allWords);
      setLoading(false);
    }
    const handleResize = () => {
      scrollToBottom();
    };

    window.addEventListener('resize', handleResize);
    initMain();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const updateWordsList = async () => {
    const { data: allWords } = await getServiceToUse('word', 'getAll')();
    setWordList(allWords);
  };

  return {
    wordList,
    loading,
    updateWordsList,
  };
}

export default useMain;
