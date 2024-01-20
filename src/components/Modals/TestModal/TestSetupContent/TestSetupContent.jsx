import React from "react";
import "./TestSetupContent.css";
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
          <button
            className={`${reachedMin ? "disabled" : ""}`}
            onClick={() => handleQuestionLimitChange()}
          >
            -
          </button>
          <span>{questionLimit}</span>
          <button
            className={`${reachedMax ? "disabled" : ""}`}
            onClick={() => handleQuestionLimitChange(true)}
          >
            +
          </button>
        </div>
      </div>
      <footer className="test-modal-footer">
        <button onClick={closeModal}>X</button>
        <button onClick={handleBuildQuestions}>O</button>
      </footer>
    </>
  );
};

export default TestSetupContent;
