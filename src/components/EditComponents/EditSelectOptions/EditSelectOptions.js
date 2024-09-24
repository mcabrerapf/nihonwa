import React from 'react';
import './EditSelectOptions.scss';
import Button from '../../Button';
import useEditSelectOptions from './useEditSelectOptions';

function EditSelectOptions(props) {
  const {
    options,
    handleOptionChange,
  } = useEditSelectOptions(props);

  return (
    <div className="edit-select-options">
      {options.map(({ value, isSelected }) => (
        <Button
          key={value}
          isNotSelected={!isSelected}
          value={value}
          onClick={handleOptionChange}
        >
          {value}
        </Button>
      ))}
    </div>
  );
}

export default EditSelectOptions;
