import React from 'react';
import './EditListString.scss';
import Button from '../../Button';
import useEditListString from './useEditListString';

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
      <div className="edit-list-string-display">
        {listValues.map((value, i) => {
          const isItemSelected = i === selectedItemIndex;

          return (
            <div key={`${value}-${i}`} className="edit-list-string-item">
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
      <div className="edit-list-string-nav-buttons">
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
      <form className="edit-list-string-input" onSubmit={handleOnSubmit}>
        <input
          ref={inputRef}
          onChange={handleOnChange}
          value={currentString}
        />
        <div className="edit-list-string-input-buttons">
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
