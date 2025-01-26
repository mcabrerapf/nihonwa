import React from 'react';
import './DisplayViewFooter.scss';
import Button from '../../../../Button';
import ModalFooter from '../../../ModalFooter';
import { useListItemContext } from '../../../../../contexts/ListItemContext';

function DisplayViewFooter({
  setSelectedKanji,
}) {
  const {
    isFirstItem, isLastItem, setListItemView, handleListItemChange,
  } = useListItemContext();

  return (
    <ModalFooter childrenAlign="m">
      <Button
        isDisabled={isFirstItem}
        onClick={() => handleListItemChange()}
      >
        {'<'}
      </Button>

      <Button
        onClick={() => {
          setSelectedKanji('');
          setListItemView('edit');
        }}
      >
        編集
      </Button>

      <Button
        isDisabled={isLastItem}
        onClick={() => handleListItemChange(true)}
      >
        {'>'}
      </Button>
    </ModalFooter>
  );
}

export default DisplayViewFooter;
