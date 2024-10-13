import { useState } from 'react';
import { useMainContext } from '../../contexts/MainContext';

function useMainList() {
  const {
    setFilters,
    setJishoWord,
  } = useMainContext();
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = (modalKey = null) => {
    setShowModal(modalKey);
    if (showModal !== 'jishoMeaningsModal') setJishoWord(null);
  };

  const handleFiltersChange = (newFilters) => {
    if (newFilters) setFilters(newFilters);
    setShowModal(null);
  };

  return {
    showModal,
    handleToggleModal,
    handleFiltersChange,
  };
}

export default useMainList;
