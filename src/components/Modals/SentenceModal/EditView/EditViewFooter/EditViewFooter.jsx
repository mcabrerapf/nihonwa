import React from "react";
import "./EditViewFooter.scss";
import Button from "../../../../Button";
import { checkIfCanProceed } from "../../helpers";

const EditViewFooter = ({
  currentData,
  setCurrentData,
  currentEditStep,
  setCurrentEditStep,
  handleSave,
}) => {
  const isFirstStep = currentEditStep === 0;
  const isLastStep = currentEditStep === 5;
  const canProceed = checkIfCanProceed(currentEditStep, currentData);

  const handleChangeEditStep = (increase) => {
    const updatedData = {};
    Object.keys(currentData).forEach((key) => {
      const currentValue = currentData[key];
      if (Array.isArray(currentValue)) {
        updatedData[key] = currentValue.filter(Boolean);
      } else updatedData[key] = currentValue;
    });
    setCurrentData(updatedData);
    if (increase) setCurrentEditStep(currentEditStep + 1);
    if (!increase) setCurrentEditStep(currentEditStep - 1);
  };

  return (
    <footer className="edit-view-footer">
      <Button
        isDisabled={isFirstStep}
        onClick={() => handleChangeEditStep()}
      >{`<`}</Button>
      {!isLastStep && (
        <Button
          isDisabled={!canProceed}
          onClick={() => handleChangeEditStep(true)}
        >{`>`}</Button>
      )}
      {isLastStep && <Button onClick={() => handleSave()}>O</Button>}
    </footer>
  );
};

export default EditViewFooter;
