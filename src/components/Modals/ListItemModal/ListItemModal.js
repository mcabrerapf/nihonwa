import React from 'react';
import './ListItemModal.scss';
import { useListItemContext } from '../../../contexts/ListItemContext';
import Modal from '../Modal';
import DisplayView from './DisplayView';
import EditView from './EditView';
import DeleteView from './DeleteView';

function ListItemModal() {
  const {
    listItemView,
  } = useListItemContext();

  return (
    <Modal modifier="list-item-modal">
      {listItemView === 'display' && <DisplayView />}
      {listItemView === 'delete' && <DeleteView />}
      {listItemView === 'edit' && <EditView />}
    </Modal>
  );
}

export default ListItemModal;
