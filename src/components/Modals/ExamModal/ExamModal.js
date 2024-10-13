import React from 'react';
import './ExamModal.scss';
import ExamSetup from './ExamSetup';
import ExamProgress from './ExamProgress';
import ExamResults from './ExamResults';
import Button from '../../Button';
import useExamModal from './useExamModal';

function ExamModal(props) {
  const {
    view,
    testSetupOptions,
    questions,
    setQuestions,
    setTestSetupOptions,
    setView,
    closeModal,
    handleClose,
    handleTestStart,
  } = useExamModal(props);

  return (
    <div className="exam-modal">
      <div className="exam-modal__header">
        <Button onClick={handleClose}>X</Button>
      </div>
      <div className="exam-modal__content">
        {view === 'setup' && (
        <ExamSetup
          testSetupOptions={testSetupOptions}
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
          setView={setView}
          closeModal={handleClose}
        />
        )}
      </div>
    </div>
  );
}

export default ExamModal;
