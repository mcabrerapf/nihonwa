import React, { useState, useEffect } from 'react';
import { XMLParser } from 'fast-xml-parser';
import { DictionaryContextProvider } from './DictionaryContext';

function DictionaryContextWrapper({ children }) {
  const [kanjiDictionary, setKanjiDictionary] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/kanjidic.xml');
        const xmlString = await response.text();
        const parser = new XMLParser({
          ignoreAttributes: false,
          attributeNamePrefix: '@_a_',
        });
        const parsedData = parser.parse(xmlString);
        if (parsedData?.kanjidic2?.character)setKanjiDictionary(parsedData.kanjidic2.character);
      } catch (error) {
        console.error('Error fetching or parsing XML:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <DictionaryContextProvider value={{
      kanjiDictionary,
    }}
    >
      {children}
    </DictionaryContextProvider>
  );
}

export default DictionaryContextWrapper;
