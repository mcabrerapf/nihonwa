import React, { useContext, useEffect, useState } from 'react';
import './ListItemModal.scss';
import DisplayView from './DisplayView';
import EditView from './EditView';
import Button from '../../Button';
import { deleteWord } from '../../../Services';
import { initItemData } from '../../../utils';
import { ModalWrapperContext } from '../../ModalWrapper/ModalWrapperContext';
import { findSimilarWords } from './helpers';

function ListItemModal({
  // listItemType,
  listItemIndex,
  // listData,
  listData,
  // sentenceList,
  updateWordsList,
  jishoWord,
  // updateSentencesList,
}) {
  const { closeModal, setCloseOnBgClick } = useContext(ModalWrapperContext);
  const isNewItem = listItemIndex === -1;
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

  useEffect(() => {
    setCloseOnBgClick(modalView !== 'edit');
  }, [modalView, setCloseOnBgClick]);

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
  const similarWords = findSimilarWords(parsedListItemData, listData);

  return (
    <div className="list-item-modal">
      {modalView === 'delete' && (
      <div className="list-item-modal-delete-view">
        <Button isDisabled={!canDelete} onClick={handleDelete}>
          D
        </Button>
      </div>
      )}
      {modalView === 'display' && (
      <DisplayView
        listItemData={parsedListItemData}
        // listItemType={listItemType}
        isLastItem={isLastItem}
        isFirstItem={isFirstItem}
        // sentenceList={sentenceList}
        modalView={modalView}
        canDelete={canDelete}
        similarWords={similarWords}
        setModalView={setModalView}
        handleGoToItem={handleGoToItem}
        handleListItemChange={handleListItemChange}
      />
      )}
      {modalView === 'edit' && (
      <EditView
        listItemData={parsedListItemData}
        // listItemType={listItemType}
        listData={listData}
        // sentenceList={sentenceList}
        updateWordsList={updateWordsList}
        setModalView={setModalView}
        // setSelectedItemIndex={setSelectedItemIndex}
      />
      )}
    </div>

  );
}

export default ListItemModal;
