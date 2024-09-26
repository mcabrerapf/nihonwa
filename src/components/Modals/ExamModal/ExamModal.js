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
    wordList,
    testSetupOptions,
    questions,
    setQuestions,
    setTestSetupOptions,
    setView,
    closeModal,
    handleUpdateWordsList,
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
          handleUpdateWordsList={handleUpdateWordsList}
          setView={setView}
          closeModal={handleClose}
        />
        )}
      </div>
    </div>
  );
}

export default ExamModal;
