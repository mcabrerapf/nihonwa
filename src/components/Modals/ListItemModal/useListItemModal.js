import { useContext, useEffect, useState } from 'react';
import { deleteWord } from '../../../Services';
import { initItemData } from '../../../utils';
import { ModalWrapperContext } from '../../ModalWrapper/ModalWrapperContext';
import { findSimilarWords } from './helpers';

function useListItemModal({
  listItemIndex,
  listData,
  updateWordsList,
  jishoWord,
}) {
  const isNewItem = listItemIndex === -1;
  const { closeModal, setCloseOnBgClick } = useContext(ModalWrapperContext);
  const [selectedItemIndex, setSelectedItemIndex] = useState(listItemIndex);
  const [canDelete, setCanDelete] = useState(true);
  const [modalView, setModalView] = useState(isNewItem ? 'edit' : 'display');
  const listLength = listData.length;
  const listItemData = listData[selectedItemIndex] || jishoWord || {};

  const parsedListItemData = initItemData(
    'word',
    listItemData,
  );
  const isLastItem = selectedItemIndex + 1 >= listLength;
  const isFirstItem = selectedItemIndex <= 0;
  const similarWords = findSimilarWords(parsedListItemData, listData);

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

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLastItem, isFirstItem, selectedItemIndex, modalView, closeModal]);

  const handleListItemChange = (next) => {
    if (next && !isLastItem) {
      setSelectedItemIndex(selectedItemIndex + 1);
      setModalView('display');
    }
    if (!next && !isFirstItem) {
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
    await updateWordsList();
    closeModal();
  };

  return {
    modalView,
    canDelete,
    parsedListItemData,
    listData,
    isFirstItem,
    isLastItem,
    similarWords,
    setModalView,
    updateWordsList,
    handleGoToItem,
    handleListItemChange,
    handleDelete,
  };
}

export default useListItemModal;
