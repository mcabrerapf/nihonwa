import React, { useEffect, useState } from 'react';
import './ListItemContextWrapper.scss';
import { ListItemContextProvider } from './ListItemContext';
import { initWordData } from '../../utils';
import { findSimilarWords } from '../../components/Modals/ListItemModal/helpers';
import { deleteWord } from '../../Services';

function ListItemContextWrapper({
  listItemIndex,
  listData,
  jishoWord,
  children,
  handleUpdateWordsList,
  onViewChange = () => {},
  onEscapeKey = () => {},
  onDelete = () => {},
  onError = () => {},
}) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(listItemIndex);
  const [canDelete, setCanDelete] = useState(true);
  const [listItemView, setListItemView] = useState(listItemIndex === -1 ? 'edit' : 'display');
  const isLastItem = selectedItemIndex + 1 >= listData.length;
  const isFirstItem = selectedItemIndex <= 0;
  const listItemData = initWordData(jishoWord || listData[selectedItemIndex]);
  const similarWords = findSimilarWords(listItemData, listData);

  useEffect(() => {
    onViewChange(listItemView !== 'edit');
  }, [listItemView, onViewChange]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const pressedKey = event.key;
      if (pressedKey === 'Escape') {
        onEscapeKey();
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
  }, [isLastItem, isFirstItem, selectedItemIndex, listItemView, onEscapeKey]);

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
    const newIndex = listData.findIndex((listWord) => listWord.id === newWord.id);
    setSelectedItemIndex(newIndex);
    setListItemView('display');
  };

  const handleDelete = async () => {
    setCanDelete(false);
    let toastData;
    await deleteWord({ input: listItemData })
      .then((res) => {
        toastData = res;
        handleUpdateWordsList();
      })
      .then(() => onDelete(toastData))
      .catch((err) => onError(err));
  };

  const listItemModalContextValue = {
    word: listItemData,
    similarWords,
    listItemView,
    isFirstItem,
    isLastItem,
    canDelete,
    setListItemView,
    handleListItemChange,
    handleGoToItem,
    handleUpdateWordsList,
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
