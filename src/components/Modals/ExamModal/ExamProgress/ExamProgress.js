import React, { useState } from 'react';
import './ExamProgress.scss';
import Button from '../../../Button';
import { getCharWithFuri } from '../../../../utils';
import {
  getAnswerButtonColor,
  getKanaSize,
} from './helpers';
import ProgressBar from './PorgressBar';
import Kana from '../../../Kana';

function ExamProgress({
  questions, setQuestions, setView,
}) {
  const [showAnswerOptions, setShowAnswerOptions] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isQuestionValidated, setIsQuestionValidated] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const {
    jp,
    en, furi,
    answers,
  } = currentQuestion;

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
    if (isQuestionValidated) {
      goToNextQuestion();
      return;
    }
    const hit = !!en.includes(answer);
    const updatedQuestions = questions.map((question, index) => {
      if (currentQuestionIndex !== index) return question;
      return {
        ...question,
        correct: !!hit,
        hits: hit ? question.hits + 1 : question.hits,
        misses: !hit ? question.misses + 1 : question.misses,
      };
    });

    setSelectedAnswer(answer);
    setQuestions(updatedQuestions);
    setIsQuestionValidated(true);
  };

  const questionCharacters = getCharWithFuri(jp, furi, true);
  const kanaSize = getKanaSize(jp);
  const numberOfQuestions = questions.length;

  return (
    <div className="exam-modal-progress">
      <div className="exam-modal-progress__top">
        <ProgressBar
          numberOfQuestions={numberOfQuestions}
          currentQuestionIndex={currentQuestionIndex}
          isQuestionValidated={isQuestionValidated}
        />
      </div>
      <div
        role="button"
        className="exam-modal-progress__question"
        onClick={() => {
          if (!showAnswerOptions) setShowAnswerOptions(true);
          if (isQuestionValidated) goToNextQuestion();
        }}
      >
        <div className="exam-modal-progress__question__jp">
          {questionCharacters.map((questionChar, i) => {
            const [char, furiChar, enChar] = questionChar;
            const key = `${char}-${i}`;
            return (
              <Kana
                key={key}
                kana={char}
                furi={furiChar}
                en={enChar}
                hideFuri={!showAnswerOptions}
                hideEn={!showAnswerOptions}
                sizeModifier={kanaSize}
              />
            );
          })}
        </div>

        {showAnswerOptions && (
          <div className="exam-modal-progress__question__answers">
            {answers.map((answer) => {
              const isSelectedAnswer = answer === selectedAnswer;
              const answerState = isQuestionValidated ? getAnswerButtonColor(answer, isSelectedAnswer, en) : '';
              const answerFontsize = answer.length > 30 ? ' small' : '';
              const buttonModifier = `${answerState}${answerFontsize}`;

              return (
                <Button
                  key={answer}
                  modifier={buttonModifier}
                  onClick={() => handleUpdateQuestion(answer)}
                >
                  <span>{answer}</span>
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ExamProgress;
