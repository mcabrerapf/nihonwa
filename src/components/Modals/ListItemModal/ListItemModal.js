import React from 'react';
import './ListItemModal.scss';
import { ListItemContextWrapper } from '../../../contexts/ListItemContext';
import DisplayView from './DisplayView';
import EditView from './EditView';
import DeleteView from './DeleteView';

function ListItemModal() {
  return (
    <ListItemContextWrapper>
      <div className="list-item-modal">
        <DeleteView />
        <DisplayView />
        <EditView />
      </div>
    </ListItemContextWrapper>
  );
}

export default ListItemModal;
