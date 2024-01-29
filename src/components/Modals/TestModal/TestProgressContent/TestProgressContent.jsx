import React, { useState } from 'react';
import './TestProgressContent.scss';
import Button from '../../../Button';
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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const { questionLanguage } = testSetupOptions;

  const handleUpdateQuestion = (hit) => {
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
            <Button onClick={() => handleUpdateQuestion()}>X</Button>
            <Button onClick={() => handleUpdateQuestion(true)}>O</Button>
          </>
        )}
      </footer>
    </>
  );
}

export default TestProgressContent;
