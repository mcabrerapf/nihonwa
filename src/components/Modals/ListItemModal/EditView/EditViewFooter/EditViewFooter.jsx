import React, { useState } from 'react';
import './EditViewFooter.scss';
import Button from '../../../../Button';
import { checkEditFooterStatus, getEditStepsArray } from '../../helpers';

function EditViewFooter({
  listItemType,
  itemAlreadyExists,
  currentData,
  currentEditStep,
  setCurrentData,
  setCurrentEditStep,
  handleSave,
}) {
  const [canSave, setCanSave] = useState(true);
  const [canProceed, isFirstStep, isLastStep] = checkEditFooterStatus(
    currentEditStep,
    listItemType,
    currentData,
  );

  const stepsArray = getEditStepsArray(listItemType);

  const handleChangeEditStep = (newStep) => {
    const updatedData = {};
    Object.keys(currentData).forEach((key) => {
      const currentValue = currentData[key];
      if (Array.isArray(currentValue)) {
        updatedData[key] = currentValue.filter(Boolean);
      } else updatedData[key] = currentValue;
    });
    setCurrentData(updatedData);
    setCurrentEditStep(newStep);
  };

  const handleStepIndicatorClick = (indicatorIndex) => {
    if (indicatorIndex === currentEditStep) return;
    if (indicatorIndex > currentEditStep && !canProceed) return;
    handleChangeEditStep(indicatorIndex);
  };

  const handleGoForwardClick = () => {
    if (listItemType === 'word' && isFirstStep) handleChangeEditStep(currentEditStep + 2);
    else if (listItemType === 'word' && currentEditStep === 2) handleChangeEditStep(currentEditStep + 3);
    else if (listItemType === 'sentence' && currentEditStep === 1) handleChangeEditStep(currentEditStep + 3);
    else handleChangeEditStep(currentEditStep + 1);
  };

  const handleSaveButtonClick = async () => {
    setCanSave(false);
    handleSave();
  };

  return (
    <footer className="edit-view-footer">
      <Button
        isDisabled={isFirstStep}
        onClick={() => handleChangeEditStep(currentEditStep - 1)}
      >
        {'<'}
      </Button>
      <div className="edit-view-step-indicator">
        {stepsArray.map((_, i) => (
          <Button
            key={i}
            modifier="ghost"
            onClick={() => handleStepIndicatorClick(i)}
          >
            {i === currentEditStep ? 'o' : '.'}
          </Button>
        ))}
      </div>
      {!isLastStep && (
        <Button
          isDisabled={!canProceed || itemAlreadyExists}
          onClick={handleGoForwardClick}
        >
          {'>'}
        </Button>
      )}
      {isLastStep && <Button isDisabled={!canSave} onClick={handleSaveButtonClick}>O</Button>}
    </footer>
  );
}

export default EditViewFooter;
