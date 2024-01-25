import React from 'react';
import './EditSelectOptions.scss';
import Button from '../../Button';

function EditSelectOptions({
  currentData,
  setCurrentData,
  optionKey,
  options,
}) {
  const { [optionKey]: selectedOptions } = currentData;

  const handleAddOption = (option) => {
    const updatedSelectedOptionns = [...selectedOptions, option];
    setCurrentData({ ...currentData, [optionKey]: updatedSelectedOptionns });
  };

  const handleRemoveOption = (optionToCheck) => {
    const updatedSelectedOptionns = selectedOptions.filter(
      (selectedOption) => selectedOption !== optionToCheck,
    );
    setCurrentData({ ...currentData, [optionKey]: updatedSelectedOptionns });
  };

  return (
    <div className="edit-select-options">
      <div className="edit-select-options-options">
        {options.map((option) => {
          const isSelected = selectedOptions.find(
            (selectedType) => selectedType === option,
          );
          return (
            <Button
              key={option}
              isNotSelected={!isSelected}
              onClick={() => {
                if (isSelected)handleRemoveOption(option);
                else handleAddOption(option);
              }}
            >
              {option}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default EditSelectOptions;
