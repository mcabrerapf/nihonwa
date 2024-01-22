import React from "react";
import "./EditViewFooter.scss";
import Button from "../../../../Button";
import { checkEditFooterStatus, getEditStepsArray } from "../../helpers";

const EditViewFooter = ({
  listItemType,
  itemAlreadyExists,
  currentData,
  currentEditStep,
  setCurrentData,
  setCurrentEditStep,
  handleSave,
}) => {
  const [canProceed, isFirstStep, isLastStep] = checkEditFooterStatus(
    currentEditStep,
    listItemType,
    currentData
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

  return (
    <footer className="edit-view-footer">
      <Button
        isDisabled={isFirstStep}
        onClick={() => handleChangeEditStep(currentEditStep - 1)}
      >{`<`}</Button>
      <div className="edit-view-step-indicator">
        {stepsArray.map((_, i) => {
          return (
            <Button
              key={i}
              modifier="ghost"
              onClick={() => handleStepIndicatorClick(i)}
            >
              {i === currentEditStep ? "o" : "."}
            </Button>
          );
        })}
      </div>
      {!isLastStep && (
        <Button
          isDisabled={!canProceed || itemAlreadyExists}
          onClick={() => handleChangeEditStep(currentEditStep + 1)}
        >{`>`}</Button>
      )}
      {isLastStep && <Button onClick={handleSave}>O</Button>}
    </footer>
  );
};

export default EditViewFooter;
