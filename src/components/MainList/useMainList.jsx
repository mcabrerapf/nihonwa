import { useState, useRef, useEffect } from 'react';
import { filterBy, sortBy } from '../../utils';
import { FILTERS_INIT_VAL } from './constants';
import { getModalToUse } from './helpers';

function useMainList({
  wordList,
  updateWordsList,
}) {
  const mainListRef = useRef(null);
  const [sort, setSort] = useState(['jp', 'dsc']);
  const [filters, setFilters] = useState(FILTERS_INIT_VAL);
  const [showModal, setShowModal] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [jishoData, setJishoData] = useState(null);

  const scrollToBottom = () => {
    if (mainListRef.current) mainListRef.current.scrollTop = mainListRef.current.scrollHeight;
  };

  useEffect(() => {
    const handleResize = () => scrollToBottom();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleModal = (modalKey = null) => {
    setShowModal(modalKey);
  };

  const handleFiltersChange = (newFilters, newSort) => {
    if (newFilters) setFilters(newFilters);
    if (newSort) setSort(newSort);
    setShowModal(false);
  };

  const ModalToUse = getModalToUse(showModal);
  const filteredList = filterBy(wordList, filters);
  const orderedList = sortBy(filteredList, sort[0], sort[1]);
  const orderedListLength = orderedList.length;
  const filterSortString = JSON.stringify({ filters, sort });

  return {
    mainListRef,
    selectedItemIndex,
    filterSortString,
    sort,
    filters,
    orderedList,
    orderedListLength,
    wordList,
    showModal,
    jishoData,
    ModalToUse,
    handleToggleModal,
    updateWordsList,
    setJishoData,
    handleFiltersChange,
    setSelectedItemIndex,
  };
}

export default useMainList;
