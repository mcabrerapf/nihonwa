import React from 'react';
import './EditListString.scss';
import Button from '../../Button';
import useEditListString from './useEditListString';
import Input from '../../Input';

function EditListString(props) {
  const {
    inputRef,
    listRef,
    currentString,
    listValues,
    selectedItemIndex,
    isLastItemEmpty,
    isMeaningsList,
    isListEmpty,
    handleAddItem,
    handleUpdateItem,
    handleDelete,
    handleOnChange,
    handleOnSubmit,
    handleItemClick,
    handleGoToNotes,
  } = useEditListString(props);

  return (
    <div className="edit-list-string">
      <div ref={listRef} className="edit-list-string__display">
        {listValues.map((value, i) => {
          const isItemSelected = i === selectedItemIndex;

          return (
            <div key={`${value}-${i}`} className="edit-list-string__display__item">
              <Button
                onClick={() => handleDelete(i)}
              >
                X
              </Button>
              <span
                role="button"
                className={`edit-list-string__display__item__text${isItemSelected ? ' selected' : ''}`}
                onClick={() => handleItemClick(i, value)}
              >
                {value}
              </span>
            </div>
          );
        })}
      </div>
      {isMeaningsList && (
      <div className="edit-list-string__nav-buttons">
        <Button
          isDisabled={isListEmpty}
          onClick={handleGoToNotes}
        >
          ノート
        </Button>
      </div>
      )}
      <form className="edit-list-string__input" onSubmit={handleOnSubmit}>
        <Button isDisabled={!isLastItemEmpty} onClick={handleAddItem}>+</Button>
        <Input
          inputRef={inputRef}
          value={currentString}
          onChange={handleOnChange}
        />
        <div className="edit-list-string__input__buttons">
          <Button
            isDisabled={!currentString}
            onClick={handleUpdateItem}
          >
            O
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditListString;
