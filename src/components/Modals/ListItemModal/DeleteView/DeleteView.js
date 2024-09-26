import React, { useContext } from 'react';
import './DeleteView.scss';
import Button from '../../../Button';
import { ListItemModalContext } from '../ListItemModalContext';

function DeleteView() {
  const { handleDelete, canDelete } = useContext(ListItemModalContext);

  return (
    <div className="delete-view">
      <Button modifier="danger" isDisabled={!canDelete} onClick={handleDelete}>
        削除
      </Button>
    </div>
  );
}

export default DeleteView;
