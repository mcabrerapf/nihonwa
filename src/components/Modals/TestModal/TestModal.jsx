import React, { useState } from "react";
import "./TestModal.css";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import { WORDS } from "../../../constants";
import { generateRandomNumber } from "../../../utils";

const getQuestions = (limit) => {
  const indexes = [];
  for (let index = 0; index < limit; index += 1) {
    const rIndex = generateRandomNumber(0, WORDS.length, indexes);
    indexes.push(rIndex);
  }
  return indexes.map((index) => {
    return {
      ...WORDS[index],
      hits: 0,
      misses: 0,
      correct: false,
    };
  });
};

const TestModal = ({ closeModal }) => {
  const [questionLimit, setQuestionLimit] = useState(10);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [view, setView] = useState("setup");

  const handleTestStart = () => {
    const builtQuestions = getQuestions(questionLimit);
    setQuestions(builtQuestions);
    setView("inprogress");
  };

  const handleUpdateQuestion = (hit) => {
    const updatedQuestions = questions.map((question) => {
      return {
        ...question,
        correct: !!hit,
      };
    });
    setQuestions(updatedQuestions);
    setShowAnswer(false);
    console.log(currentQuestionIndex, questions.length);
    if (currentQuestionIndex + 1 === questions.length) {
      setView("done");
    } else setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];
  console.log({ questions });
  return (
    <ModalWrapper closeModal={closeModal}>
      <div className="test-modal">
        <div className="test-modal-content">
          {view === "setup" && (
            <div>
              <div className="question-limit">
                <button
                  onClick={() => {
                    if (questionLimit > 5) setQuestionLimit(questionLimit - 5);
                  }}
                >
                  -
                </button>
                <span>{questionLimit}</span>
                <button
                  onClick={() => {
                    if (questionLimit < 50) setQuestionLimit(questionLimit + 5);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          )}
          {view === "inprogress" && (
            <div
              className="current-question"
              onClick={() => {
                if (!showAnswer) setShowAnswer(true);
              }}
            >
              <div className="current-question-question">
                {currentQuestion.kanji || currentQuestion.kana}
              </div>
              {showAnswer && (
                <div className="current-question-answer">
                  {currentQuestion.en.map((answer) => (
                    <span key={answer}>{answer}</span>
                  ))}
                </div>
              )}
            </div>
          )}
          {view === "done" && (
            <div className="test-modal-results">
              {questions.map((question) => {
                return (
                  <div
                    key={`${question.kanji}-${question.kana}-${question.sound}`}
                    className="test-modal-results-result"
                  >
                    <span>{question.correct ? "O" : "X"}</span>
                    <span>{question.kanji || question.kana}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="test-modal-footer">
          {view === "setup" && (
            <>
              <button onClick={closeModal}>X</button>
              <button onClick={handleTestStart}>O</button>
            </>
          )}
          {view === "inprogress" && showAnswer && (
            <>
              <button onClick={() => handleUpdateQuestion()}>X</button>
              <button onClick={() => handleUpdateQuestion(true)}>O</button>
            </>
          )}
          {view === "done" && (
            <>
              <button onClick={closeModal}>O</button>
            </>
          )}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default TestModal;
