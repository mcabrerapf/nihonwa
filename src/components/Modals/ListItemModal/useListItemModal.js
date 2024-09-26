import { useContext, useEffect, useState } from 'react';
import { deleteWord } from '../../../Services';
import { initWordData } from '../../../utils';
import { ModalWrapperContext } from '../../ModalWrapper/ModalWrapperContext';
import { findSimilarWords } from './helpers';

function useListItemModal({
  listItemIndex,
  listData,
  jishoWord,
  handleUpdateWordsList,
}) {
  const { closeModal, setCloseOnBgClick } = useContext(ModalWrapperContext);
  const [selectedItemIndex, setSelectedItemIndex] = useState(listItemIndex);
  const [canDelete, setCanDelete] = useState(true);
  const [modalView, setModalView] = useState(listItemIndex === -1 ? 'edit' : 'display');
  const isLastItem = selectedItemIndex + 1 >= listData.length;
  const isFirstItem = selectedItemIndex <= 0;
  const listItemData = initWordData(jishoWord || listData[selectedItemIndex]);
  const similarWords = findSimilarWords(listItemData, listData);

  useEffect(() => {
    setCloseOnBgClick(modalView !== 'edit');
  }, [modalView, setCloseOnBgClick]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const pressedKey = event.key;
      if (pressedKey === 'Escape') {
        closeModal();
      }
      if (modalView === 'edit') return;
      if (pressedKey === 'e') {
        setModalView('edit');
      }
      if (pressedKey === 'd') {
        setModalView('delete');
      }
      if (pressedKey === 'ArrowRight' && !isLastItem) {
        setSelectedItemIndex(selectedItemIndex + 1);
        setModalView('display');
      }
      if (pressedKey === 'ArrowLeft' && !isFirstItem) {
        setSelectedItemIndex(selectedItemIndex - 1);
        setModalView('display');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLastItem, isFirstItem, selectedItemIndex, modalView, closeModal]);

  const handleListItemChange = (next) => {
    if (next) {
      if (isLastItem) return;
      setSelectedItemIndex(selectedItemIndex + 1);
      setModalView('display');
    } else {
      if (isFirstItem) return;
      setSelectedItemIndex(selectedItemIndex - 1);
      setModalView('display');
    }
  };

  const handleGoToItem = (newWord) => {
    const newIndex = listData.findIndex((listWord) => listWord.id === newWord.id);
    setSelectedItemIndex(newIndex);
    setModalView('display');
  };

  const handleDelete = async () => {
    setCanDelete(false);
    await deleteWord({ input: listItemData });
    await handleUpdateWordsList();
    closeModal();
  };

  const listItemModalContextValue = {
    word: listItemData,
    similarWords,
    modalView,
    isFirstItem,
    isLastItem,
    canDelete,
    setModalView,
    handleListItemChange,
    handleGoToItem,
    handleUpdateWordsList,
    handleDelete,
  };

  return {
    listData,
    modalView,
    canDelete,
    listItemModalContextValue,
    handleDelete,
  };
}

export default useListItemModal;
