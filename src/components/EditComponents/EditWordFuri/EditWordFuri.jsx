import React from 'react';
import './EditWordFuri.scss';
import Button from '../../Button';
import useEditWordFuri from './useEditWordFuri';

function EditWordFuri(props) {
  const {
    inputRef,
    currentString,
    kanaWithFuri,
    isHiraganaSelected,
    isKatakanaSelected,
    handleOnChange,
    handleKeyDown,
    handleOnSubmit,
    handleKanaClick,
  } = useEditWordFuri(props);

  return (
    <div className="edit-word-furi">
      <div className="edit-word-furi-display">
        {kanaWithFuri.map(({
          key, className, kanaGroup, handleDeleteFuri, handleSelectFuri,
        }) => (
          <div
            key={key}
            className={className}
          >
            {kanaGroup[1] && (
            <Button
              modifier="ghost"
              onClick={handleDeleteFuri}
            >
              x
            </Button>
            )}
            <span className="furi">{kanaGroup[1]}</span>
            <span
              role="button"
              className="kana"
              onClick={handleSelectFuri}
            >
              {kanaGroup[0]}
            </span>
            <span className="furi">{kanaGroup[2]}</span>
          </div>
        ))}
      </div>
      <form className="edit-word-furi-input" onSubmit={handleOnSubmit}>
        <input
          ref={inputRef}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          value={currentString}
        />
        <div className="edit-word-furi-input-buttons">
          <Button
            isNotSelected={!isHiraganaSelected}
            value="hi"
            onClick={handleKanaClick}
          >
            か
          </Button>
          <Button
            isNotSelected={!isKatakanaSelected}
            value="ka"
            onClick={handleKanaClick}
          >
            カ
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditWordFuri;
