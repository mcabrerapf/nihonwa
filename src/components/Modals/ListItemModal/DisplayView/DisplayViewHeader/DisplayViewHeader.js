import React from 'react';
import './DisplayViewHeader.scss';
import Button from '../../../../Button';
import useDisplayViewHeader from './useDisplayViewHeader';
import { useModalContext } from '../../../../../contexts/ModalContext';
import { useListItemContext } from '../../../../../contexts/ListItemContext';

function DisplayViewHeader(props) {
  const {
    handleCharacterCopy,
    handleJishoNavigate,
  } = useDisplayViewHeader(props);
  const { closeModal } = useModalContext();
  const { listItemView, setListItemView } = useListItemContext();

  if (listItemView === 'edit') return null;

  return (
    <div role="button" className="display-view-header">
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
        <Button
          modifier="kanji-header-button"
          onClick={handleJishoNavigate}
        >
          辞書
        </Button>
      </div>
      <Button modifier="close-button" onClick={() => closeModal()}>
        X
      </Button>
    </div>

  );
}

export default DisplayViewHeader;
