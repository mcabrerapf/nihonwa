import React, { useContext, useEffect, useState } from 'react';
import './TestModal.scss';
import TestSetupContent from './TestSetupContent';
import TestProgressContent from './TestProgressContent';
import TestResultsContent from './TestResultsContent';
import { TEST_SETUP_INIT_STATE } from './constants';
import { ModalWrapperContext } from '../../ModalWrapper/ModalWrapperContext';

function TestModal({ wordsList, sentencesList }) {
  const { closeModal, setCloseOnBgClick } = useContext(ModalWrapperContext);
  const [view, setView] = useState('setup');
  const [questions, setQuestions] = useState([]);
  const [testSetupOptions, setTestSetupOptions] = useState(
    TEST_SETUP_INIT_STATE,
  );

  useEffect(() => {
    setCloseOnBgClick(view === 'setup');
  }, [view]);

  const handleTestStart = (builtQuestions) => {
    setQuestions(builtQuestions);
    setView('inprogress');
  };

  return (
    <div className="test-modal">
      {view === 'setup' && (
      <TestSetupContent
        testSetupOptions={testSetupOptions}
        wordsList={wordsList}
        sentencesList={sentencesList}
        setTestSetupOptions={setTestSetupOptions}
        handleTestStart={handleTestStart}
        closeModal={closeModal}
      />
      )}
      {view === 'inprogress' && (
      <TestProgressContent
        questions={questions}
        setQuestions={setQuestions}
        setView={setView}
      />
      )}
      {view === 'done' && (
      <TestResultsContent
        questions={questions}
        setView={setView}
        closeModal={closeModal}
      />
      )}
    </div>
  );
}

export default TestModal;
