import React from "react";
import "./EditViewFooter.scss";
import { checkIfCanProceed } from "../../helpers";

const EditViewFooter = ({
  currentData,
  currentEditStep,
  setCurrentEditStep,
  closeModal,
}) => {
  const isFirstStep = currentEditStep === 0;
  const isLastStep = currentEditStep === 6;
  const canProceed = checkIfCanProceed(currentEditStep, currentData);
  const handleChangeEditStep = (increase) => {
    if (increase) canProceed && setCurrentEditStep(currentEditStep + 1);
    if (!increase) !isFirstStep && setCurrentEditStep(currentEditStep - 1);
  };

  return (
    <footer className="edit-view-footer">
      <button
        className={`${isFirstStep ? "disabled" : ""}`}
        onClick={() => handleChangeEditStep()}
      >{`<`}</button>
      {!isLastStep && (
        <button
          className={`${canProceed ? "" : "disabled"}`}
          onClick={() => handleChangeEditStep(true)}
        >{`>`}</button>
      )}
      {isLastStep && <button onClick={() => closeModal()}>O</button>}
    </footer>
  );
};

export default EditViewFooter;
