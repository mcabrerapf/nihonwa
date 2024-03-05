import React, { useState } from 'react';
import './TestProgressContent.scss';
import Button from '../../../Button';
import { getServiceToUse } from '../../../../Services';
import { getCharWithFuri } from '../../../../utils';
import {
  checkIfShouldShow,
  getAnswerButtonColor,
  getKanaSize,
} from './helpers';

function TestProgressContent({
  questions, testSetupOptions, setQuestions, setView,
}) {
  const [showAnswerOptions, setShowAnswerOptions] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isQuestionValidated, setIsQuestionValidated] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const {
    jp,
    en, furi,
    answers,
  } = currentQuestion;
  const { questionLanguage } = testSetupOptions;

  const goToNextQuestion = () => {
    if (currentQuestionIndex + 1 === questions.length) {
      setView('done');
      return;
    }
    setShowAnswerOptions(false);
    setSelectedAnswer(null);
    setIsQuestionValidated(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleUpdateQuestion = async (answer) => {
    if (isLoading || isQuestionValidated) return;
    const hit = !!en.includes(answer);
    setSelectedAnswer(answer);
    setIsLoading(true);
    const updatedQuestions = questions.map((question, index) => {
      if (currentQuestionIndex !== index) return question;
      return {
        ...question,
        correct: !!hit,
      };
    });
    const updatedQuestion = { ...questions[currentQuestionIndex] };
    if (hit)updatedQuestion.hits += 1;
    else updatedQuestion.misses += 1;

    const serviceToUse = getServiceToUse('word', 'update');
    await serviceToUse({ input: updatedQuestion });

    setQuestions(updatedQuestions);
    setIsLoading(false);
    setIsQuestionValidated(true);
  };

  const questionCharacters = getCharWithFuri(jp, furi, true);
  const showJp = checkIfShouldShow(questionLanguage, 'jp', showAnswerOptions);
  // const showEn = checkIfShouldShow(questionLanguage, 'en', showAnswerOptions, showJp);
  const kanaSize = getKanaSize(jp);

  return (
    <>
      <div className="test-modal-progress-content">
        <div
          role="button"
          className="current-question"
          onClick={() => {
            if (!showAnswerOptions) setShowAnswerOptions(true);
          }}
        >
          {showJp && (
          <div className="current-question-question">
            {questionCharacters.map((questionChar, i) => {
              const [char, furiChar, enChar] = questionChar;

              return (
                <div className="kana-with-furi" key={`${char}-${i}`}>
                  {showAnswerOptions && <span className="furi">{furiChar}</span>}
                  <span className={`kana ${kanaSize}`}>{char}</span>
                  {showAnswerOptions && <span className="furi">{enChar}</span>}
                </div>
              );
            })}
          </div>
          )}
          {showAnswerOptions && (
          <div className="queston-answers-options">
            {answers.map((answer) => {
              const validatedColor = getAnswerButtonColor(answer, selectedAnswer, en);

              return (
                <Button
                  key={answer}
                  isDisabled={isQuestionValidated}
                  modifier={isQuestionValidated ? validatedColor : ''}
                  isNotSelected={selectedAnswer !== answer}
                  onClick={() => handleUpdateQuestion(answer)}
                >
                  {answer}
                </Button>
              );
            })}
          </div>
          )}
        </div>
      </div>
      <footer className="test-modal-footer">
        <Button
          isDisabled={isLoading || !selectedAnswer}
          onClick={goToNextQuestion}
        >
          O
        </Button>
      </footer>
    </>
  );
}

export default TestProgressContent;
