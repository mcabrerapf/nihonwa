import React from "react";
import "./TestSetupContent.scss";
import Button from "../../../Button";
import { buildQuestions } from "../helpers";

const TestSetupContent = ({
  testSetupOptions,
  setTestSetupOptions,
  handleTestStart,
  closeModal,
}) => {
  const { questionLimit } = testSetupOptions;
  const reachedMax = questionLimit >= 50;
  const reachedMin = questionLimit <= 5;

  const handleBuildQuestions = () => {
    const builtQuestions = buildQuestions(testSetupOptions);
    handleTestStart(builtQuestions);
  };

  const handleQuestionLimitChange = (increase) => {
    if (increase) {
      !reachedMax &&
        setTestSetupOptions({
          ...testSetupOptions,
          questionLimit: questionLimit + 5,
        });
    }
    if (!increase) {
      !reachedMin &&
        setTestSetupOptions({
          ...testSetupOptions,
          questionLimit: questionLimit - 5,
        });
    }
  };

  return (
    <>
      <div className="test-modal-setup-content">
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
        <Button onClick={closeModal}>X</Button>
        <Button onClick={handleBuildQuestions}>O</Button>
      </footer>
    </>
  );
};

export default TestSetupContent;
