import React from 'react';
import './EditListString.scss';
import Button from '../../Button';
import useEditListString from './useEditListString';

function EditListString(props) {
  const {
    listRef,
    listValues,
    selectedItemIndex,
    isLastItemEmpty,
    isMeaningsList,
    isListEmpty,
    handleAddItem,
    handleUpdateItem,
    handleDelete,
    // handleOnChange,
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
                // role="button"
                role="textbox"
                contentEditable
                className={`edit-list-string__display__item__text${isItemSelected ? ' selected' : ''}`}
                onClick={() => handleItemClick(i, value)}
                onChange={handleUpdateItem}
              >
                {value}
              </span>
            </div>
          );
        })}
      </div>

      <form className="edit-list-string__input" onSubmit={handleOnSubmit}>
        <Button isDisabled={!isLastItemEmpty} onClick={handleAddItem}>+</Button>
        <div className="edit-list-string__input__buttons">
          {isMeaningsList && (
          <Button
            isDisabled={isListEmpty}
            onClick={handleGoToNotes}
          >
            ノート
          </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default EditListString;
