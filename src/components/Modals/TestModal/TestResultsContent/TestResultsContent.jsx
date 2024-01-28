import React from 'react';
import './TestResultsContent.scss';
import Button from '../../../Button';

function TestResultsContent({ questions, setView, closeModal }) {
  return (
    <>
      <div className="test-modal-results-content">
        <div className="test-modal-results">
          {questions.map((question, i) => {
            const { jp } = question;
            return (
              <div key={`${jp}-${i}`} className="test-modal-results-result">
                <span className="test-modal-results-result-check">
                  {question.correct ? 'O' : 'X'}
                </span>
                <span>{jp}</span>
              </div>
            );
          })}
        </div>
      </div>
      <footer className="test-modal-footer">
        <Button onClick={() => setView('setup')}>R</Button>
        <Button onClick={() => closeModal()}>O</Button>
      </footer>
    </>
  );
}

export default TestResultsContent;
