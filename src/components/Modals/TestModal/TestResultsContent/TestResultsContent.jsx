import React from 'react';
import './TestResultsContent.scss';
import Button from '../../../Button';

function TestResultsContent({ questions, setView, closeModal }) {
  const correctQuestions = questions.filter((question) => question.correct);
  const score = (correctQuestions.length / questions.length) * 100;

  const handleClose = async (e) => {
    e.preventDefault();
    if (e.target.innerText === 'R') setView('setup');
    else closeModal();
  };

  return (
    <>
      <div className="test-modal-results-content">
        <div className="results-header">
          <span className="text">Results</span>
          <span>
            {score.toFixed()}
            %
          </span>
        </div>
        <ul className="test-modal-results-list">
          {questions.map((question) => {
            const { jp, id, correct } = question;
            return (
              <li key={id} className="test-modal-results-result">
                <span className="test-modal-results-result-check">
                  {correct ? 'O' : 'X'}
                </span>
                <span>{jp}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <footer className="test-modal-footer">
        <Button onClick={handleClose}>R</Button>
        <Button onClick={handleClose}>O</Button>
      </footer>
    </>
  );
}

export default TestResultsContent;
