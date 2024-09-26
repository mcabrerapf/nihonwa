import React, { useEffect, useState } from 'react';
import './ExamResults.scss';
import Button from '../../../Button';
import { getServiceToUse } from '../../../../Services';
import { getScoreColor } from './helpers';

function ExamResults({
  questions, setView, handleUpdateWordsList,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const correctQuestions = questions.filter((question) => question.correct).length;
  const totalQuestions = questions.length;
  const score = (correctQuestions / totalQuestions) * 100;
  const scoreColor = getScoreColor(score);

  useEffect(() => {
    async function updateQustions() {
      await Promise.all(questions.map(async (question) => {
        const serviceToUse = getServiceToUse('word', 'update');
        await serviceToUse({ input: question });
      }));
      await handleUpdateWordsList();
      setIsLoading(false);
    }
    updateQustions();
  }, []);

  const handleRestart = (e) => {
    e.preventDefault();
    setView('setup');
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
      </div>
      <footer className="exam-modal__footer">
        <div className="exam-modal__footer__score">
          <span className={`exam-modal__footer__score__number${scoreColor}`}>
            {score}
            %
          </span>
        </div>
        <Button onClick={handleRestart} isDisabled={isLoading}>
          再挑戦
        </Button>
      </footer>
    </>
  );
}

export default ExamResults;
