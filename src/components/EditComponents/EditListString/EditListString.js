import React from 'react';
import './EditListString.scss';
import Button from '../../Button';
import useEditListString from './useEditListString';
import Input from '../../Input';

function EditListString(props) {
  const {
    inputRef,
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
    handleGoToTags,
  } = useEditListString(props);

  return (
    <div className="edit-list-string">
      <div className="edit-list-string__display">
        {listValues.map((value, i) => {
          const isItemSelected = i === selectedItemIndex;

          return (
            <div key={`${value}-${i}`} className="edit-list-string__display__item">
              <Button
                modifier="delete-item-button"
                onClick={() => handleDelete(i)}
              >
                X
              </Button>

              <span
                role="button"
                className={`${isItemSelected ? 'selected-item' : ''}`}
                onClick={() => handleItemClick(i, value)}
              >
                {value}
              </span>
            </div>
          );
        })}
        <div>
          {isLastItemEmpty && <Button onClick={handleAddItem}>+</Button>}
        </div>
      </div>
      {isMeaningsList && (
      <div className="edit-list-string__nav-buttons">
        <Button
          isDisabled={isListEmpty}
          onClick={handleGoToNotes}
        >
          ノート
        </Button>
        <Button
          isDisabled={isListEmpty}
          onClick={handleGoToTags}
        >

          タグ
        </Button>
      </div>
      )}
      <form className="edit-list-string__input" onSubmit={handleOnSubmit}>
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
