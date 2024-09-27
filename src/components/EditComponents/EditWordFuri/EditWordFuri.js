import React from 'react';
import './EditWordFuri.scss';
import Button from '../../Button';
import useEditWordFuri from './useEditWordFuri';
import Input from '../../Input';
import Kana from '../../Kana';

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
          key, modifier, kanaGroup, handleSelectFuri,
        }) => (
          <Kana
            key={key}
            modifier={modifier}
            kana={kanaGroup[0]}
            furi={kanaGroup[1]}
            en={kanaGroup[2]}
            handleClick={handleSelectFuri}
          />
        ))}
      </div>
      <form className="edit-word-furi__input" onSubmit={handleOnSubmit}>
        <Input
          inputRef={inputRef}
          value={currentString}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
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
