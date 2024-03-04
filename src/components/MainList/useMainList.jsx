import { useState } from 'react';
import { filterBy, sortBy } from '../../utils';
import { FILTERS_INIT_VAL } from './constants';
import { getModalToUse } from './helpers';

function useMainList({
  wordList,
  // sentenceList,
  // selectedListKey,
  // selectedList,
  // setSelectedListKey,
  updateWordsList,
  // updateSentencesList,
}) {
  const [sort, setSort] = useState(['jp', 'desc']);
  const [filters, setFilters] = useState(FILTERS_INIT_VAL);
  const [showModal, setShowModal] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const handleToggleModal = (modalKey = null) => {
    setShowModal(modalKey);
  };

  const handleFiltersChange = (newFilters, newSort) => {
    if (newFilters)setFilters(newFilters);
    if (newSort)setSort(newSort);
    setShowModal(false);
  };

  const ModalToUse = getModalToUse(showModal);
  const filteredList = filterBy(wordList, filters);
  const orderedList = sortBy(filteredList, sort[0], sort[1]);
  const orderedListLength = orderedList.length;

  return {
    selectedItemIndex,
    // selectedListKey,
    sort,
    filters,
    // selectedList,
    orderedList,
    orderedListLength,
    wordList,
    // sentenceList,
    showModal,
    ModalToUse,
    handleToggleModal,
    updateWordsList,
    // updateSentencesList,
    handleFiltersChange,
    // handleListChange,
    setSelectedItemIndex,
  };
}

export default useMainList;
