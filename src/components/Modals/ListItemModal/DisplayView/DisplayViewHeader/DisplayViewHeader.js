import React from 'react';
import './DisplayViewHeader.scss';
import Button from '../../../../Button';
import useDisplayViewHeader from './useDisplayViewHeader';

function DisplayViewHeader(props) {
  const {
    view,
    headerCharacters,
    kanaClassName,
    successPercentage,
    modalView,
    canDelete,
    setModalView,
    handleCharacterCopy,
    handleJishoNavigate,
    handleCharClick,
  } = useDisplayViewHeader(props);

  return (
    <div role="button" className="display-view-modal-header">
      {modalView !== 'edit' && (
      <div className="display-view-modal-header__buttons">
        <Button
          modifier="danger"
          isDisabled={!canDelete}
          onClick={() => setModalView('delete')}
        >
          削除
        </Button>
        <div className="display-view-modal-header__buttons__center">
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
      )}
      {view === 'general' && (
      <>
        <div role="button" className="display-view-modal-header__text">
          {headerCharacters.map((headerChar, i) => {
            const [char, furiChar, enChar] = headerChar;

            return (
              <div
                role="button"
                key={`${char}-${i}`}
                className="kana-with-furi"
                onClick={() => handleCharClick(char)}
              >
                <span className="furi">{furiChar}</span>
                <span className={kanaClassName}>{char}</span>
                <span className="furi">{enChar}</span>
              </div>
            );
          })}
        </div>
        <div className="display-view-modal-header__succes-percentage">
          <span>
            {successPercentage}
            %
          </span>
        </div>
      </>
      )}
    </div>
  );
}

export default DisplayViewHeader;
