import { useState } from 'react';
import { checkEditFooterStatus, getEditStepsArray } from '../../helpers';

function useEditViewFooter({
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
    else if (listItemType === 'word' && currentEditStep === 2) handleChangeEditStep(currentEditStep + 2);
    else if (listItemType === 'sentence' && currentEditStep === 1) handleChangeEditStep(currentEditStep + 2);
    else handleChangeEditStep(currentEditStep + 1);
  };

  const handleSaveButtonClick = async () => {
    setCanSave(false);
    handleSave();
  };

  const isNextButtonDisabled = !canProceed || itemAlreadyExists;
  const stepsArray = getEditStepsArray(listItemType);

  return {
    isFirstStep,
    isLastStep,
    isNextButtonDisabled,
    currentEditStep,
    stepsArray,
    canSave,
    handleGoForwardClick,
    handleSaveButtonClick,
    handleChangeEditStep,
    handleStepIndicatorClick,
  };
}

export default useEditViewFooter;
