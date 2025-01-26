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
      <div className="display-view-footer__actions">
        <div className="arrow-container">
          <Button
            isDisabled={isFirstItem}
            onClick={() => handleListItemChange()}
          >
            {'<'}
          </Button>
        </div>
        <div className="display-view-footer__actions__view-buttons">
          <Button
            onClick={() => {
              setSelectedKanji('');
              setListItemView('edit');
            }}
          >
            編集
          </Button>
        </div>
        <div className="arrow-container">
          <Button
            isDisabled={isLastItem}
            onClick={() => handleListItemChange(true)}
          >
            {'>'}
          </Button>
        </div>
      </div>

    </ModalFooter>
  );
}

export default DisplayViewFooter;
