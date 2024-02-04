import { useState } from 'react';
import { filterBy, sortBy } from '../../utils';
import { FILTERS_INIT_VAL } from './constants';
import { getModalToUse } from './helpers';

function useMainList({
  wordList,
  sentenceList,
  selectedListKey,
  selectedList,
  setSelectedListKey,
  updateWordsList,
  updateSentencesList,
}) {
  const [sort, setSort] = useState(['jp', 'desc']);
  const [filters, setFilters] = useState(FILTERS_INIT_VAL);
  const [showModal, setShowModal] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const handleToggleModal = (modalKey = null) => {
    setShowModal(modalKey);
  };

  const handleSortChange = (newSort) => {
    setSort(newSort);
    setShowModal(false);
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    setShowModal(false);
  };

  const handleListChange = async () => {
    const newListKey = selectedListKey === 'word' ? 'sentence' : 'word';
    setSelectedListKey(newListKey);
  };

  const ModalToUse = getModalToUse(showModal);
  const filteredList = filterBy(selectedList, filters);
  const orderedList = sortBy(filteredList, sort[0], sort[1]);
  const orderedListLength = orderedList.length;

  return {
    selectedItemIndex,
    selectedListKey,
    sort,
    filters,
    selectedList,
    orderedList,
    orderedListLength,
    wordList,
    sentenceList,
    showModal,
    ModalToUse,
    handleToggleModal,
    updateWordsList,
    updateSentencesList,
    handleFiltersChange,
    handleSortChange,
    handleListChange,
    setSelectedItemIndex,
  };
}

export default useMainList;
