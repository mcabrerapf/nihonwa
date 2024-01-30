import { useEffect, useState } from 'react';
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
  const [orderedList, setOrderedList] = useState([]);

  const isWordsList = selectedList === 'word';
  const listToFilter = isWordsList ? wordsList : sentencesList;

  useEffect(() => {
    const sortedList = sortBy(listToFilter, sort[0], sort[1]);
    setOrderedList(sortedList);
  }, []);

  const handleToggleModal = (modalKey = null) => {
    setShowModal(modalKey);
  };

  const handleSortChange = (newSort) => {
    const sortedList = sortBy(listToFilter, newSort[0], newSort[1]);
    setOrderedList(sortedList);
    setSort(newSort);
    setShowModal(false);
  };

  const handleFiltersChange = (newFilters) => {
    const filteredList = filterBy(listToFilter, newFilters);
    const sortedList = sortBy(filteredList, sort[0], sort[1]);
    setOrderedList(sortedList);
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

  const filteredListLength = orderedList.length;

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
    handleSortChange,
    handleListChange,
    setSelectedItemIndex,
  };
}

export default useMainList;
