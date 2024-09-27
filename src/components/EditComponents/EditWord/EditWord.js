import React from 'react';
import './EditWord.scss';
import Button from '../../Button';
import useEditWord from './useEditWord';
import Input from '../../Input';

function EditWord(props) {
  const {
    inputRef,
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
      <div className="edit-word__display">
        <div className="edit-word__display__word">
          {word.split('').map((char, i) => (
            <span
              key={`${i}-${char}`}
              className="edit-word__display__word__char"
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      <div className="edit-word__actions">
        <div className="edit-word__actions__furi-button">
          <Button
            isDisabled={isFuriButtonDisabled}
            onClick={handleGoToFuriEditStep}
          >
            振り仮名
          </Button>
        </div>
        <form
          className="edit-word__actions__input"
          onSubmit={handleOnSubmit}
        >
          <Input
            inputRef={inputRef}
            value={currentWord}
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
          />
          <div className="edit-word__actions__input__buttons">
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
