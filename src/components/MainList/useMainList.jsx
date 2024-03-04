import { useState } from 'react';
import { filterBy, sortBy } from '../../utils';
import { FILTERS_INIT_VAL } from './constants';
import { getModalToUse } from './helpers';

function useMainList({
  wordList,
  kanjiDictionary,
  updateWordsList,
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
    kanjiDictionary,
    selectedItemIndex,
    sort,
    filters,
    orderedList,
    orderedListLength,
    wordList,
    showModal,
    ModalToUse,
    handleToggleModal,
    updateWordsList,
    handleFiltersChange,
    setSelectedItemIndex,
  };
}

export default useMainList;
