import { useState } from 'react';
import { filterBy, sortBy } from '../../utils';
import { FILTERS_INIT_VAL } from './constants';
import { getModalToUse } from './helpers';

function useMainList({
  wordsList,
  sentencesList,
  updateWordsList,
  updateSentencesList,
}) {
  const [selectedList, setSelectedList] = useState('word');
  const [sort, setSort] = useState(['jp', 'desc']);
  const [filters, setFilters] = useState(FILTERS_INIT_VAL);
  const [showModal, setShowModal] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const isWordsList = selectedList === 'word';
  const listToFilter = isWordsList ? wordsList : sentencesList;
  const filteredList = filterBy(listToFilter, filters);
  const orderedList = sortBy(filteredList, sort[0], sort[1]);
  const filteredListLength = orderedList.length;

  const handleToggleModal = (modalKey = null) => {
    setShowModal(modalKey);
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    setShowModal(false);
  };

  const handleListChange = async () => {
    if (isWordsList) {
      setSelectedList('sentence');
    } else {
      setSelectedList('word');
    }
  };
  const ModalToUse = getModalToUse(showModal);

  return {
    selectedItemIndex,
    orderedList,
    wordsList,
    sentencesList,
    selectedList,
    sort,
    filters,
    listToFilter,
    filteredListLength,

    showModal,
    ModalToUse,
    handleToggleModal,

    updateWordsList,
    updateSentencesList,

    handleFiltersChange,
    handleListChange,
    setSort,
    setSelectedItemIndex,
  };
}

export default useMainList;
