import React, { useState } from 'react';
import './TestProgressContent.scss';
import Button from '../../../Button';
import { getServiceToUse } from '../../../../Services';
import { generateRandomNumber, getCharWithFuri } from '../../../../utils';

const checkIfShouldShow = (questionLanguage, questionKey, showAnswer, isOtherTrue) => {
  if (showAnswer) return true;
  if (isOtherTrue !== undefined) return !isOtherTrue;
  if (questionLanguage.includes(questionKey)) {
    if (questionLanguage.length === 1) return true;
    return generateRandomNumber(0, 100) < 50;
  }
  return false;
};

function TestProgressContent({
  questions, testSetupOptions, setQuestions, setView,
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const { questionLanguage } = testSetupOptions;

  const handleUpdateQuestion = async (hit) => {
    setIsLoading(true);
    const updatedQuestion = { ...questions[currentQuestionIndex] };
    if (hit)updatedQuestion.hits += 1;
    else updatedQuestion.misses += 1;

    const serviceToUse = getServiceToUse('word', 'update');
    await serviceToUse({ input: updatedQuestion });

    const updatedQuestions = questions.map((question, index) => {
      if (currentQuestionIndex !== index) return question;
      return {
        ...question,
        correct: !!hit,
      };
    });
    setQuestions(updatedQuestions);
    setCurrentQuestionIndex(0);
    setShowAnswer(false);
    setIsLoading(false);

    if (currentQuestionIndex + 1 === questions.length) {
      setView('done');
    } else setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const { jp, en, furi } = currentQuestion;
  const questionCharacters = getCharWithFuri(jp, furi, true);
  const showJp = checkIfShouldShow(questionLanguage, 'jp', showAnswer);
  const showEn = checkIfShouldShow(questionLanguage, 'en', showAnswer, showJp);

  return (
    <>
      <div className="test-modal-progress-content">
        <div
          role="button"
          className="current-question"
          onClick={() => {
            if (!showAnswer) setShowAnswer(true);
          }}
        >
          {showJp && (
          <div className="current-question-question">
            {questionCharacters.map((questionChar, i) => {
              const [char, furiChar, enChar] = questionChar;

              return (
                <div className="kana-with-furi" key={`${char}-${i}`}>
                  {showAnswer && <span className="furi">{furiChar}</span>}
                  <span className="kana">{char}</span>
                  {showAnswer && <span className="furi">{enChar}</span>}
                </div>
              );
            })}
          </div>
          )}
          {showEn && (
            <div
              role="button"
              className="current-question-answer"
              onClick={() => {
                if (!showAnswer) setShowAnswer(true);
              }}
            >
              {en.map((answer) => (
                <span key={answer}>{answer}</span>
              ))}
            </div>
          )}
        </div>
      </div>
      <footer className="test-modal-footer">
        {showAnswer && (
          <>
            <Button isDisabled={isLoading} onClick={() => handleUpdateQuestion()}>X</Button>
            <Button isDisabled={isLoading} onClick={() => handleUpdateQuestion(true)}>O</Button>
          </>
        )}
      </footer>
    </>
  );
}

export default TestProgressContent;
