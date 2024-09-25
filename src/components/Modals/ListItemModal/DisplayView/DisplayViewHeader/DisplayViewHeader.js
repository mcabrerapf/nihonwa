import React from 'react';
import './DisplayViewHeader.scss';
import Button from '../../../../Button';
import useDisplayViewHeader from './useDisplayViewHeader';

function DisplayViewHeader(props) {
  const {
    modalView,
    canDelete,
    setModalView,
    handleCharacterCopy,
    handleJishoNavigate,
  } = useDisplayViewHeader(props);
  if (modalView === 'edit') return null;
  return (
    <div role="button" className="display-view-header">
      <Button
        modifier="danger"
        isDisabled={!canDelete}
        onClick={() => setModalView('delete')}
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
      <Button onClick={() => setModalView('edit')}>
        編集
      </Button>
    </div>

  );
}

export default DisplayViewHeader;
