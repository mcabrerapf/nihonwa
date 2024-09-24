import React, { useEffect, useState } from 'react';
import './ExamResults.scss';
import Button from '../../../Button';
import { getServiceToUse } from '../../../../Services';

function ExamResults({
  questions, setView, closeModal, updateWordsList,
}) {
  const [isLoading, setIsLoading] = useState(true);

  const correctQuestions = questions.filter((question) => question.correct).length;
  const totalQuestions = questions.length;
  const score = (correctQuestions / totalQuestions) * 100;

  useEffect(() => {
    async function updateQustions() {
      await Promise.all(questions.map(async (question) => {
        const serviceToUse = getServiceToUse('word', 'update');
        await serviceToUse({ input: question });
      }));
      await updateWordsList();
      setIsLoading(false);
    }
    updateQustions();
  }, []);

  const handleClose = async (e) => {
    e.preventDefault();
    if (e.target.innerText === 'R') setView('setup');
    else closeModal();
  };

  return (
    <>
      <div className="exam-modal-results">
        <ol className="exam-modal-results__list">
          {questions.map((question, i) => {
            const {
              id, jp, en, correct,
            } = question;
            return (
              <li
                key={id}
                className="exam-modal-results__list__item"
              >
                <div className={`exam-modal-results__list__item__word${!correct ? ' miss' : ''}`}>
                  <span>
                    {i + 1}
                    .
                  </span>
                  <span>{jp}</span>
                </div>
                <div className="exam-modal-results__list__item__meanings">
                  {en.map((meaning) => (
                    <span
                      className="exam-modal-results__list__item__meanings__meaning"
                    >
                      {meaning}
                    </span>
                  ))}
                </div>
              </li>
            );
          })}
        </ol>
        <div className="exam-modal-results__score">
          <span className="exam-modal-results__score__number">
            {score}
            %
          </span>
        </div>
      </div>
      <footer className="exam-modal__footer">
        <Button onClick={handleClose} isDisabled={isLoading}>R</Button>
        <Button onClick={handleClose} isDisabled={isLoading}>O</Button>
      </footer>
    </>
  );
}

export default ExamResults;
