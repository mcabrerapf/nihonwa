import React, { useContext, useEffect, useState } from 'react';
import './ListItemModal.scss';
import DisplayView from './DisplayView';
import EditView from './EditView';
import Button from '../../Button';
import { deleteWord, deleteSentence } from '../../../Services';
import { initItemData } from '../../../utils';
import { ModalWrapperContext } from '../../ModalWrapper/ModalWrapperContext';

function ListItemModal({
  listItemType,
  listItemIndex,
  listData,
  allWords,
  allSentences,
  updateWordsList,
  updateSentencesList,
}) {
  const { closeModal, setCloseOnBgClick } = useContext(ModalWrapperContext);
  const isNewItem = listItemIndex === -1;
  const [selectedItemIndex, setSelectedItemIndex] = useState(listItemIndex);
  const [canDelete, setCanDelete] = useState(true);
  const [modalView, setModalView] = useState(isNewItem ? 'edit' : 'display');
  const listLength = listData.length;
  const listItemData = listData[selectedItemIndex] || {};
  const parsedListItemData = initItemData(
    listItemType,
    listData[selectedItemIndex],
  );
  const isLastItem = selectedItemIndex + 1 >= listLength;
  const isFirstItem = selectedItemIndex <= 0;
  const deleteService = listItemType === 'word' ? deleteWord : deleteSentence;
  const updateListService = listItemType === 'word' ? updateWordsList : updateSentencesList;

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

  const handleDelete = async () => {
    setCanDelete(false);
    await deleteService({ input: listItemData });
    await updateListService();
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
        listItemType={listItemType}
        isLastItem={isLastItem}
        isFirstItem={isFirstItem}
        allSentences={allSentences}
        modalView={modalView}
        canDelete={canDelete}
        setModalView={setModalView}
        handleListItemChange={handleListItemChange}
      />
      )}
      {modalView === 'edit' && (
      <EditView
        listItemData={parsedListItemData}
        listItemType={listItemType}
        allWords={allWords}
        allSentences={allSentences}
        updateListService={updateListService}
        setModalView={setModalView}
        setSelectedItemIndex={setSelectedItemIndex}
      />
      )}
    </div>

  );
}

export default ListItemModal;
