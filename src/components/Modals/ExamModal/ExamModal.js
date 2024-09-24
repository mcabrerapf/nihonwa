import React, { useContext, useEffect, useState } from 'react';
import './ExamModal.scss';
import ExamSetup from './ExamSetup';
import ExamProgress from './ExamProgress';
import ExamResults from './ExamResults';
import { ModalWrapperContext } from '../../ModalWrapper/ModalWrapperContext';
import { TEST_SETUP_INIT_STATE } from './constants';
import Button from '../../Button';

function ExamModal({ wordList, updateWordsList }) {
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
    setView('inProgress');
  };

  const handleClose = async (e) => {
    if (e) e.preventDefault();
    closeModal();
  };

  return (
    <div className="exam-modal">
      <div className="exam-modal__header">
        {view !== 'done' && <Button onClick={handleClose}>X</Button>}
      </div>
      {view === 'setup' && (
      <ExamSetup
        testSetupOptions={testSetupOptions}
        wordList={wordList}
        setTestSetupOptions={setTestSetupOptions}
        handleTestStart={handleTestStart}
        closeModal={closeModal}
      />
      )}
      {view === 'inProgress' && (
      <ExamProgress
        questions={questions}
        testSetupOptions={testSetupOptions}
        setQuestions={setQuestions}
        setView={setView}
      />
      )}
      {view === 'done' && (
      <ExamResults
        questions={questions}
        updateWordsList={updateWordsList}
        setView={setView}
        closeModal={handleClose}
      />
      )}
    </div>
  );
}

export default ExamModal;
