import React from 'react';
import './EditListString.scss';
import Button from '../../Button';
import useEditListString from './useEditListString';
import AutoResizingInput from '../../AutoResizingInput';

function EditListString(props) {
  const {
    listRef,
    listValues,
    isMeaningsList,
    isListEmpty,
    handleAddItem,
    handleDelete,
    handleOnChange,
    handleGoToNotes,
  } = useEditListString(props);

  return (
    <div className="edit-list-string">
      <div ref={listRef} className="edit-list-string__display">
        {listValues.map((value, i) => (
          <div key={`${value}-${i}`} className="edit-list-string__display__item">
            <Button
              onClick={() => handleDelete(i)}
            >
              X
            </Button>
            <AutoResizingInput
              initialValue={value}
              onChange={(eVal) => handleOnChange(eVal, i)}
            />
          </div>
        ))}
      </div>
      <div className="edit-list-string__buttons">
        <div className="edit-list-string__buttons__left" />
        <div className="edit-list-string__buttons__midlle">
          <Button modifier="add-list-item" onClick={handleAddItem}>+</Button>
        </div>
        <div className="edit-list-string__buttons__right">
          {isMeaningsList && (
          <Button
            isDisabled={isListEmpty}
            onClick={handleGoToNotes}
          >
            ノート
          </Button>
          )}
        </div>

      </div>
    </div>
  );
}

export default EditListString;
