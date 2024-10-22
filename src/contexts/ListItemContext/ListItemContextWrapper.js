import React, { useEffect, useState } from 'react';
import './ListItemContextWrapper.scss';
import { ListItemContextProvider } from './ListItemContext';
import { initWordData } from '../../utils';
import { findSimilarWords } from '../../components/Modals/ListItemModal/helpers';
import { deleteWord } from '../../Services';
import { useMainContext } from '../MainContext';
import { useModalContext } from '../ModalContext';
import { useToastContext } from '../ToastContext';

function ListItemContextWrapper({
  children,
}) {
  const {
    selectedItemIndex,
    jishoWord,
    orderedList,
    setSelectedItemIndex,
    updateWordsList,
  } = useMainContext();
  const { addToast } = useToastContext();
  const { closeModal, setCloseOnBgClick } = useModalContext();

  const [listItemView, setListItemView] = useState(selectedItemIndex === -1 ? 'edit' : 'display');
  const isLastItem = selectedItemIndex + 1 >= orderedList.length;
  const isFirstItem = selectedItemIndex <= 0;
  const listItemData = initWordData(jishoWord || orderedList[selectedItemIndex]);
  const similarWords = findSimilarWords(listItemData, orderedList);

  useEffect(() => {
    setListItemView(selectedItemIndex === -1 ? 'edit' : 'display');
  }, [selectedItemIndex]);

  useEffect(() => {
    setCloseOnBgClick(listItemView !== 'edit');
  }, [listItemView, setCloseOnBgClick]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const pressedKey = event.key;
      if (pressedKey === 'Escape') {
        closeModal();
      }
      if (listItemView === 'edit') return;
      if (pressedKey === 'e') {
        setListItemView('edit');
      }
      if (pressedKey === 'd') {
        setListItemView('delete');
      }
      if (pressedKey === 'ArrowRight' && !isLastItem) {
        setSelectedItemIndex(selectedItemIndex + 1);
        setListItemView('display');
      }
      if (pressedKey === 'ArrowLeft' && !isFirstItem) {
        setSelectedItemIndex(selectedItemIndex - 1);
        setListItemView('display');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLastItem, isFirstItem, selectedItemIndex, listItemView, closeModal]);

  const handleListItemChange = (next) => {
    if (next) {
      if (isLastItem) return;
      setSelectedItemIndex(selectedItemIndex + 1);
      setListItemView('display');
    } else {
      if (isFirstItem) return;
      setSelectedItemIndex(selectedItemIndex - 1);
      setListItemView('display');
    }
  };

  const handleGoToItem = (newWord) => {
    const newIndex = orderedList.findIndex((listWord) => listWord.id === newWord.id);
    setSelectedItemIndex(newIndex);
    setListItemView('display');
  };

  const handleDelete = async () => {
    await deleteWord({ input: listItemData })
      .then(async (res) => {
        await updateWordsList();
        addToast({ text: res.data.jp, type: 'delete' });
        const newIndex = selectedItemIndex <= 0 ? 0 : selectedItemIndex - 1;
        setListItemView('display');
        setSelectedItemIndex(newIndex);
      })
      .catch((err) => {
        addToast({ text: err.message || 'ERROR', type: 'error' });
        closeModal();
      });
  };

  const listItemModalContextValue = {
    word: listItemData,
    similarWords,
    listItemView,
    isFirstItem,
    isLastItem,
    setListItemView,
    handleListItemChange,
    handleGoToItem,
    handleDelete,
  };

  return (
    <ListItemContextProvider
      value={listItemModalContextValue}
    >
      {children}
    </ListItemContextProvider>

  );
}

export default ListItemContextWrapper;
