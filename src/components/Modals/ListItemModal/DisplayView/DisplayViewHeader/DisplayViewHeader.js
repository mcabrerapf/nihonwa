import React from 'react';
import Button from '../../../../Button';
import useDisplayViewHeader from './useDisplayViewHeader';
import ModalHeader from '../../../ModalHeader';
import { useModalContext } from '../../../../../contexts/ModalContext';
import { useListItemContext } from '../../../../../contexts/ListItemContext';

function DisplayViewHeader(props) {
  const {
    handleCharacterCopy,
    // handleJishoNavigate,
  } = useDisplayViewHeader(props);
  const { closeModal } = useModalContext();
  const { listItemView, setListItemView } = useListItemContext();

  if (listItemView === 'edit') return null;

  return (
    <ModalHeader childrenAlign="m">
      <Button
        modifier="danger"
        onClick={() => setListItemView('delete')}
      >
        削除
      </Button>
      <div className="display-view-header__center">
        <Button
          modifier="kanji-header-button"
          onClick={handleCharacterCopy}
        >
          写す
        </Button>
        {/* <Button
          modifier="kanji-header-button"
          onClick={handleJishoNavigate}
        >
          辞書
        </Button> */}
      </div>
      <Button modifier="no-border" onClick={() => closeModal()}>
        X
      </Button>
    </ModalHeader>
  );
}

export default DisplayViewHeader;
