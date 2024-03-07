import React, { useEffect, useState } from 'react';
import './TestResultsContent.scss';
import Button from '../../../Button';
import { getServiceToUse } from '../../../../Services';

function TestResultsContent({
  questions, setView, closeModal, updateWordsList,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [className, setClassname] = useState('underline');
  const correctQuestions = questions.filter((question) => question.correct);
  const score = (correctQuestions.length / questions.length) * 100;
  useEffect(() => {
    async function updateQustions() {
      await Promise.all(questions.map(async (question) => {
        const serviceToUse = getServiceToUse('word', 'update');
        await serviceToUse({ input: question });
      }));
      await updateWordsList();
      setIsLoading(false);
    }
    setClassname('underline fade-in');
    updateQustions();
  }, []);

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
        </div>
        <ol className="test-modal-results-list" type="1">
          {questions.map((question, i) => {
            const { jp, id, correct } = question;
            return (
              <>
                <li key={id} className="test-modal-results-result">
                  <span>
                    {i + 1}
                    .
                  </span>
                  <span>{jp}</span>
                </li>
                <span key={`${id}underline`} className={`${className} ${correct ? 'correct' : 'miss'}`} />
              </>

            );
          })}
        </ol>
        <div className="results-footer">
          <span>
            {score.toFixed()}
            %
          </span>
        </div>
      </div>
      <footer className="test-modal-footer">
        <Button onClick={handleClose} isDisabled={isLoading}>R</Button>
        <Button onClick={handleClose} isDisabled={isLoading}>O</Button>
      </footer>
    </>
  );
}

export default TestResultsContent;
