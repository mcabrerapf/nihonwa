import { useState } from 'react';
import { getModalToUse } from './helpers';
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
    setShowModal(false);
  };

  const Modal = getModalToUse(showModal);

  return {
    showModal,
    Modal,
    handleToggleModal,
    handleFiltersChange,
  };
}

export default useMainList;
