import React, { useState } from "react";
import "./TestModal.css";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import TestSetupContent from "./TestSetupContent";
import TestProgressContent from "./TestProgressContent";
import TestResultsContent from "./TestResultsContent";

const TEST_SETUP_INIT_STATE = {
  questionLimit: 5,
};
const TestModal = ({ closeModal }) => {
  const [view, setView] = useState("setup");
  const [questions, setQuestions] = useState([]);
  const [testSetupOptions, setTestSetupOptions] = useState(
    TEST_SETUP_INIT_STATE
  );

  const handleTestStart = (builtQuestions) => {
    setQuestions(builtQuestions);
    setView("inprogress");
  };

  return (
    <ModalWrapper closeModal={closeModal}>
      <div className="test-modal">
        {view === "setup" && (
          <TestSetupContent
            testSetupOptions={testSetupOptions}
            setTestSetupOptions={setTestSetupOptions}
            handleTestStart={handleTestStart}
            closeModal={closeModal}
          />
        )}
        {view === "inprogress" && (
          <TestProgressContent
            questions={questions}
            setQuestions={setQuestions}
            setView={setView}
          />
        )}
        {view === "done" && (
          <TestResultsContent
            questions={questions}
            setView={setView}
            closeModal={closeModal}
          />
        )}
      </div>
    </ModalWrapper>
  );
};

export default TestModal;
