import React from 'react';
import './WordSearchInput.scss';
import Button from '../../../Button';
import useWordSearchInput from './useWordSearchInput';

function WordSearchInput(props) {
  const {
    textareaRef,
    currentValue,
    // selectedWordIndex,
    searchValue,
    filteredWords,
    isHiraganaSelected,
    isKatakanaSelected,
    updateCursorPosition,
    handleSelectWord,
    handleOnChange,
    handleKeyDown,
    handleKanaClick,
  } = useWordSearchInput(props);

  return (
    <>
      <div className="word-search-suggestions-container">
        {searchValue && (
          <ul>
            {filteredWords.map(({ id, jp }) => (
              <li
                key={id}
                role="button"
                value={jp}
                onClick={handleSelectWord}
              >
                {jp}
                {/* {i === selectedWordIndex ? ' <=' : ''} */}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="word-search-textarea-cotainer">
        <textarea
          ref={textareaRef}
          value={currentValue}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          onFocus={updateCursorPosition}
          onClick={updateCursorPosition}
        />
        <div className="edit-sentence-input-buttons">
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
      </div>
    </>
  );
}

export default WordSearchInput;
