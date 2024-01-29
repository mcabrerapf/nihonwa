import React from 'react';
import './TestSetupContent.scss';
import Button from '../../../Button';
import useTestSetupContent from './useTestSetupContent';

function TestSetupContent(props) {
  const {
    questionLimit,
    reachedMin,
    reachedMax,
    isJpEnabled,
    isEnEnabled,
    handleQuestionLimitChange,
    handleLanguageButtonClick,
    handleBuildQuestions,
  } = useTestSetupContent(props);

  return (
    <>
      <div className="test-modal-setup-content">
        <div className="question-language">
          <Button value="en" isNotSelected={!isEnEnabled} onClick={handleLanguageButtonClick}>Abc</Button>
          <Button value="jp" isNotSelected={!isJpEnabled} onClick={handleLanguageButtonClick}>日本</Button>
        </div>
        <div className="question-limit">
          <Button
            isDisabled={reachedMin}
            onClick={() => handleQuestionLimitChange()}
          >
            -
          </Button>
          <span>{questionLimit}</span>
          <Button
            isDisabled={reachedMax}
            onClick={() => handleQuestionLimitChange(true)}
          >
            +
          </Button>
        </div>
      </div>
      <footer className="test-modal-footer">
        <Button onClick={handleBuildQuestions}>O</Button>
      </footer>
    </>
  );
}

export default TestSetupContent;
