import { useState } from 'react';
import { filterBy } from '../../utils';
import { FILTERS_INIT_VAL } from './constants';
import { getModalToUse } from './helpers';

function useMainList({
  wordList,
  handleUpdateWordsList,
}) {
  const [sort, setSort] = useState(['jp', 'dsc']);
  const [filters, setFilters] = useState(FILTERS_INIT_VAL);
  const [showModal, setShowModal] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [jishoWord, setJishoWord] = useState(null);

  const handleToggleModal = (modalKey = null) => {
    setShowModal(modalKey);
    if (showModal !== 'jishoMeaningsModal') setJishoWord(null);
  };

  const handleFiltersChange = (newFilters, newSort) => {
    if (newFilters) setFilters(newFilters);
    if (newSort) setSort(newSort);
    setShowModal(false);
  };

  const ModalToUse = getModalToUse(showModal);
  const orderedList = filterBy(wordList, filters);
  const orderedListLength = orderedList.length;

  return {
    selectedItemIndex,
    sort,
    filters,
    orderedList,
    orderedListLength,
    wordList,
    jishoWord,
    showModal,
    ModalToUse,
    setJishoWord,
    setSelectedItemIndex,
    handleToggleModal,
    handleUpdateWordsList,
    handleFiltersChange,
  };
}

export default useMainList;
