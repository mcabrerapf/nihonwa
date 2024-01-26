import React from 'react';
import './EditWord.scss';
import Button from '../../Button';
import useEditWord from './useEditWord';

function EditWord(props) {
  const {
    inputRef,
    itemAlreadyExists,
    word,
    currentWord,
    isHiraganaSelected,
    isKatakanaSelected,
    isFuriButtonDisabled,
    handleOnChange,
    handleOnSubmit,
    handleKeyDown,
    handleKanaClick,
    handleGoToFuriEditStep,
  } = useEditWord(props);

  return (
    <div className="edit-word">
      <div className="edit-word-display">
        <span>{word}</span>
        {itemAlreadyExists && (
          <span className="edit-word-error-message">Word already exists</span>
        )}
      </div>
      <div className="edit-word-actions">
        <div className="add-furi-button">
          <Button
            isDisabled={isFuriButtonDisabled}
            onClick={handleGoToFuriEditStep}
          >
            振り仮名
          </Button>
        </div>
        <form
          className="edit-word-input"
          onSubmit={handleOnSubmit}
        >
          <input
            ref={inputRef}
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
            value={currentWord}
          />
          <div className="edit-word-input-buttons">
            <Button
              isNotSelected={!isHiraganaSelected}
              onClick={() => handleKanaClick('hi')}
            >
              か
            </Button>
            <Button
              isNotSelected={!isKatakanaSelected}
              onClick={() => handleKanaClick('ka')}
            >
              カ
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditWord;
