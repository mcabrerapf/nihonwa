import React from 'react';
import './ListItemModal.scss';
import DisplayView from './DisplayView';
import EditView from './EditView';
import Button from '../../Button';
import useListItemModal from './useListItemModal';

function ListItemModal(props) {
  const {
    modalView,
    canDelete,
    parsedListItemData,
    listData,
    isFirstItem,
    isLastItem,
    similarWords,
    updateWordsList,
    setModalView,
    handleGoToItem,
    handleListItemChange,
    handleDelete,
  } = useListItemModal(props);

  return (
    <div className="list-item-modal">
      {modalView === 'delete' && (
      <div className="list-item-modal__delete-view">
        <Button isDisabled={!canDelete} onClick={handleDelete}>
          削除
        </Button>
      </div>
      )}
      {modalView === 'display' && (
      <DisplayView
        listItemData={parsedListItemData}
        isLastItem={isLastItem}
        isFirstItem={isFirstItem}
        modalView={modalView}
        canDelete={canDelete}
        similarWords={similarWords}
        listData={listData}
        setModalView={setModalView}
        handleGoToItem={handleGoToItem}
        handleListItemChange={handleListItemChange}
      />
      )}
      {modalView === 'edit' && (
      <EditView
        listItemData={parsedListItemData}
        listData={listData}
        updateWordsList={updateWordsList}
        setModalView={setModalView}
      />
      )}
    </div>
  );
}

export default ListItemModal;
