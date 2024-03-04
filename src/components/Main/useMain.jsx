import { useEffect, useState } from 'react';
import { XMLParser } from 'fast-xml-parser';
import {
  getServiceToUse,
} from '../../Services';

function useMain() {
  // const [loading, setLoading] = useState(true);
  const [wordList, setWordList] = useState([]);
  const [kanjiDictionary, setKanjiDictionary] = useState([]);

  useEffect(() => {
    async function initMain() {
      const { data: allWords, error: wordsError } = await getServiceToUse('word', 'getAll')();
      if (!wordsError) setWordList(allWords);

      fetch('/kanjidic.xml')
        .then((response) => response.text())
        .then((data) => {
          const parser = new XMLParser({
            ignoreAttributes: false,
            attributeNamePrefix: '@_a_',
          });
          const jObj = parser.parse(data);
          return jObj;
        })
        .then((res) => {
          if (res?.kanjidic2?.character)setKanjiDictionary(res.kanjidic2.character);
        })
        .catch((error) => console.error('Error fetching kanjiDic2', error));
    }

    initMain();
  }, []);

  const updateWordsList = async () => {
    const { data: allWords } = await getServiceToUse('word', 'getAll')();
    setWordList(allWords);
  };

  return {
    // loading,
    wordList,
    kanjiDictionary,
    updateWordsList,
  };
}

export default useMain;
