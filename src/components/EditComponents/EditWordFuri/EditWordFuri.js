import React from 'react';
import './EditWordFuri.scss';
import Button from '../../Button';
import useEditWordFuri from './useEditWordFuri';
import Input from '../../Input';

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
      <div className="edit-word-furi__display">
        {kanaWithFuri.map(({
          key, className, kanaGroup, handleSelectFuri,
        }) => (
          <div
            key={key}
            className={className}
          >
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
      <form className="edit-word-furi__input" onSubmit={handleOnSubmit}>
        <Input
          inputRef={inputRef}
          value={currentString}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
        {/* <input
          ref={inputRef}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          value={currentString}
        /> */}
        <div className="edit-word-furi__input__buttons">
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
