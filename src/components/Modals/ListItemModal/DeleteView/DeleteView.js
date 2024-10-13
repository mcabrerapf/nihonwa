import React, { useState } from 'react';
import './DeleteView.scss';
import Button from '../../../Button';
import { useListItemContext } from '../../../../contexts/ListItemContext';

function DeleteView() {
  const { listItemView, handleDelete } = useListItemContext();
  const [canDelete, setCanDelete] = useState(true);

  const handleOnClick = () => {
    if (!canDelete) return;
    setCanDelete(false);
    handleDelete();
  };

  if (listItemView !== 'delete') return null;

  return (
    <div className="delete-view">
      <Button modifier="danger" isDisabled={!canDelete} onClick={handleOnClick}>
        削除
      </Button>
    </div>
  );
}

export default DeleteView;
