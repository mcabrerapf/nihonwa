import { useEffect, useState } from 'react';
import { checkEditFooterStatus, getEditStepsArray } from '../../helpers';

const checkCanSave = (wordData) => {
  if (!wordData) return false;
  const { jp, en } = wordData;
  if (!jp) return false;
  if (!en || !en.length) return false;
  return true;
};

function useEditViewFooter({
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
    'word',
    currentData,
  );

  useEffect(() => {
    if (currentEditStep !== 5) return;
    const updatedSave = checkCanSave(currentData);
    setCanSave(updatedSave);
  }, [currentEditStep]);

  const handleChangeEditStep = (newStep) => {
    const updatedData = {};
    Object.keys(currentData).forEach((key) => {
      const currentValue = currentData[key];
      if (Array.isArray(currentValue)) {
        updatedData[key] = key === 'furi' ? currentValue : currentValue.filter(Boolean);
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
    if (isFirstStep) handleChangeEditStep(currentEditStep + 2);
    else if ('word' && currentEditStep === 2) handleChangeEditStep(currentEditStep + 2);
    else handleChangeEditStep(currentEditStep + 1);
  };

  const handleSaveButtonClick = async () => {
    setCanSave(false);
    handleSave();
  };

  const isNextButtonDisabled = !canProceed || itemAlreadyExists;
  const stepsArray = getEditStepsArray('word');

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
