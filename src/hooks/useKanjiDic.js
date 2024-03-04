import { useEffect, useState } from 'react';
import { XMLParser } from 'fast-xml-parser';

const useKanjiDic = () => {
  const [kanjiDictionary, setKanjiDictionary] = useState([]);
  useEffect(() => {
    fetch('/kanjidic.xml')
      .then((response) => response.text())
      .then((data) => {
        console.log('LOADED DIC');
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
      .catch((error) => console.error('Error fetching kanjiDic', error));
  }, []);

  return kanjiDictionary;
};

export default useKanjiDic;
