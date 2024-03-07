import React, { useContext, useEffect, useState } from 'react';
import './TestModal.scss';
import TestSetupContent from './TestSetupContent';
import TestProgressContent from './TestProgressContent';
import TestResultsContent from './TestResultsContent';
// import Button from '../../Button';
import { ModalWrapperContext } from '../../ModalWrapper/ModalWrapperContext';
import { TEST_SETUP_INIT_STATE } from './constants';

function TestModal({ wordList, updateWordsList }) {
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

  const handleClose = async (e) => {
    if (e) e.preventDefault();
    closeModal();
  };

  return (
    <div className="test-modal">
      <div className="test-modal-header">
        {/* {view !== 'done' && <Button onClick={handleClose}>X</Button>} */}
      </div>
      {view === 'setup' && (
      <TestSetupContent
        testSetupOptions={testSetupOptions}
        wordList={wordList}
        setTestSetupOptions={setTestSetupOptions}
        handleTestStart={handleTestStart}
        closeModal={closeModal}
      />
      )}
      {view === 'inprogress' && (
      <TestProgressContent
        questions={questions}
        testSetupOptions={testSetupOptions}
        setQuestions={setQuestions}
        setView={setView}
      />
      )}
      {view === 'done' && (
      <TestResultsContent
        questions={questions}
        updateWordsList={updateWordsList}
        setView={setView}
        closeModal={handleClose}
      />
      )}
    </div>
  );
}

export default TestModal;
