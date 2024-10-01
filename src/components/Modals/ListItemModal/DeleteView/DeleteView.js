import React from 'react';
import './DeleteView.scss';
import Button from '../../../Button';
import { useListItemContext } from '../../../../contexts/ListItemContext';

function DeleteView() {
  const { listItemView, handleDelete, canDelete } = useListItemContext();
  if (listItemView !== 'delete') return null;

  return (
    <div className="delete-view">
      <Button modifier="danger" isDisabled={!canDelete} onClick={handleDelete}>
        削除
      </Button>
    </div>
  );
}

export default DeleteView;
