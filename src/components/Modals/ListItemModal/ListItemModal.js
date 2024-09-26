import React from 'react';
import './ListItemModal.scss';
import { ListItemModalContextProvider } from './ListItemModalContext';
import DisplayView from './DisplayView';
import EditView from './EditView';
import DeleteView from './DeleteView';
import useListItemModal from './useListItemModal';

function ListItemModal(props) {
  const {
    listData,
    modalView,
    listItemModalContextValue,
  } = useListItemModal(props);

  return (
    <ListItemModalContextProvider value={listItemModalContextValue}>
      <div className="list-item-modal">
        {modalView === 'delete' && (
        <DeleteView />
        )}
        {modalView === 'display' && (
        <DisplayView
          listData={listData}
        />
        )}
        {modalView === 'edit' && (
        <EditView
          listData={listData}
        />
        )}
      </div>
    </ListItemModalContextProvider>
  );
}

export default ListItemModal;
