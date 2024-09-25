import React from 'react';
import './EditViewFooter.scss';
import Button from '../../../../Button';
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
    <footer className="edit-view-footer">
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
            modifier="ghost"
            onClick={() => handleStepIndicatorClick(i)}
          >
            {i === currentEditStep ? 'o' : '.'}
          </Button>
        ))}
      </div>
      {isLastStep ? <Button modifier="confirm" isDisabled={!canSave} onClick={handleSaveButtonClick}>O</Button> : (
        <Button
          isDisabled={isNextButtonDisabled}
          onClick={handleGoForwardClick}
        >
          {'>'}
        </Button>
      )}
    </footer>
  );
}

export default EditViewFooter;
