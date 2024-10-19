import React, { useState } from 'react';
import './DeleteView.scss';
import Button from '../../../Button';
import { useListItemContext } from '../../../../contexts/ListItemContext';

function DeleteView() {
  const { word, listItemView, handleDelete } = useListItemContext();
  const [canDelete, setCanDelete] = useState(true);

  const handleOnClick = () => {
    if (!canDelete) return;
    setCanDelete(false);
    handleDelete();
  };

  if (listItemView !== 'delete') return null;

  return (
    <div className="delete-view">
      <span className="delete-view__word">
        {word.jp}
      </span>
      <Button modifier="danger" isDisabled={!canDelete} onClick={handleOnClick}>
        削除
      </Button>
    </div>
  );
}

export default DeleteView;
