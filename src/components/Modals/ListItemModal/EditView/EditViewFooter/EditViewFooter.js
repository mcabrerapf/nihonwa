import React from 'react';
import './EditViewFooter.scss';
import Button from '../../../../Button';
import ModalFooter from '../../../ModalFooter';
import useEditViewFooter from './useEditViewFooter';

function EditViewFooter(props) {
  const {
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
  } = useEditViewFooter(props);

  return (
    <ModalFooter childrenAlign="m">
      <Button
        isDisabled={isFirstStep}
        onClick={() => handleChangeEditStep(currentEditStep - 1)}
      >
        {'<'}
      </Button>
      <div className="edit-view-footer__steps">
        {stepsArray.map((_, i) => (
          <Button
            key={i}
            modifier="no-border"
            onClick={() => handleStepIndicatorClick(i)}
          >
            {i === currentEditStep ? 'o' : '.'}
          </Button>
        ))}
      </div>
      {isLastStep
        ? (
          <Button
            modifier="confirm"
            isDisabled={!canSave}
            onClick={handleSaveButtonClick}
          >
            O
          </Button>
        ) : (
          <Button
            isDisabled={isNextButtonDisabled}
            onClick={handleGoForwardClick}
          >
            {'>'}
          </Button>
        )}
    </ModalFooter>
  );
}

export default EditViewFooter;
