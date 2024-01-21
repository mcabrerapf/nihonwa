import React from "react";
import "./EditViewFooter.scss";
import Button from "../../../../Button";
import { checkIfCanProceed } from "../../helpers";

const EditViewFooter = ({
  currentData,
  currentEditStep,
  setCurrentEditStep,
  handleSave,
}) => {
  const isFirstStep = currentEditStep === 0;
  const isLastStep = currentEditStep === 6;
  const canProceed = checkIfCanProceed(currentEditStep, currentData);

  const handleChangeEditStep = (increase) => {
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
      {isLastStep && <Button onClick={handleSave}>O</Button>}
    </footer>
  );
};

export default EditViewFooter;
