import React, { useEffect, useState } from 'react';
import './ExamResults.scss';
import Button from '../../../Button';
import ModalFooter from '../../ModalFooter';
import { getServiceToUse } from '../../../../Services';
import { useMainContext } from '../../../../contexts/MainContext';
import Score from '../../../Score';

function ExamResults({
  questions, setView,
}) {
  const { updateWordsList } = useMainContext();
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
                  {en.map((meaning, mI) => (
                    <span
                      key={`${id}-${mI}`}
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
      <ModalFooter childrenAlign="r">
        <Score score={score} />
        <Button onClick={handleRestart} isDisabled={isLoading}>
          再挑戦
        </Button>
      </ModalFooter>
    </>
  );
}

export default ExamResults;
