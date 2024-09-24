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
    updateWordsList,
    handleClose,
    handleTestStart,
  } = useExamModal(props);

  return (
    <div className="exam-modal">
      <div className="exam-modal__header">
        {view !== 'done' && <Button onClick={handleClose}>X</Button>}
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
          updateWordsList={updateWordsList}
          setView={setView}
          closeModal={handleClose}
        />
        )}
      </div>

    </div>
  );
}

export default ExamModal;
