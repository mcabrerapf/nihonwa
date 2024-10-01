import React from 'react';
import './ListItemModal.scss';
import { ListItemContextWrapper } from '../../../contexts/ListItemContext';
import DisplayView from './DisplayView';
import EditView from './EditView';
import DeleteView from './DeleteView';
import useListItemModal from './useListItemModal';

function ListItemModal(props) {
  const {
    listData,
    listItemIndex,
    jishoWord,
    handleUpdateWordsList,
    setCloseOnBgClick,
    closeModal,
    onDelete,
    onError,
  } = useListItemModal(props);

  return (
    <ListItemContextWrapper
      listItemIndex={listItemIndex}
      listData={listData}
      jishoWord={jishoWord}
      onViewChange={setCloseOnBgClick}
      onEscapeKey={closeModal}
      handleUpdateWordsList={handleUpdateWordsList}
      onDelete={onDelete}
      onError={onError}

    >
      <div className="list-item-modal">
        <DeleteView />
        <DisplayView
          listData={listData}
        />
        <EditView
          listData={listData}
        />
      </div>
    </ListItemContextWrapper>
  );
}

export default ListItemModal;
