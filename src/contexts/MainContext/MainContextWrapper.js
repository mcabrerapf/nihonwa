import React, { useEffect, useState } from 'react';
import { MainContextProvider } from './MainContext';
import { getServiceToUse } from '../../Services';
import { filterBy } from '../../utils';

function MainContextWrapper({
  children,
}) {
  const [loading, setLoading] = useState(true);
  const [wordList, setWordList] = useState([]);
  // const [sort, setSort] = useState(['jp', 'dsc']);
  const [filters, setFilters] = useState({ text: '', tags: [] });
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [jishoWord, setJishoWord] = useState(null);

  useEffect(() => {
    async function initMain() {
      getServiceToUse('word', 'getAll')().then((res) => {
        const { data } = res;
        setWordList(data);
        setLoading(false);
      }).catch(() => {
        setLoading(false);
      });
    }

    initMain();
  }, []);

  const updateWordsList = async (newItemId) => getServiceToUse('word', 'getAll')()
    .then((res) => {
      const { data } = res;
      if (newItemId) {
        const oList = filterBy(data, filters);
        const newIndex = oList.findIndex(({ id: oId }) => oId === newItemId);
        setSelectedItemIndex(newIndex);
      }
      setWordList(data);
    });

  const orderedList = filterBy(wordList, filters);
  const orderedListLength = orderedList.length;

  const contextValue = {
    wordList,
    orderedList,
    orderedListLength,
    filters,
    selectedItemIndex,
    jishoWord,
    loading,
    setFilters,
    setSelectedItemIndex,
    setJishoWord,
    updateWordsList,
  };

  return (
    <MainContextProvider
      value={contextValue}
    >
      {children}
    </MainContextProvider>

  );
}

export default MainContextWrapper;
