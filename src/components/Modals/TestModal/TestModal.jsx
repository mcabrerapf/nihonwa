import React, { useState } from "react";
import "./TestModal.css";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import { buildQuestions } from "./helpers";

const TestModal = ({ closeModal }) => {
  const [questionLimit, setQuestionLimit] = useState(10);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [view, setView] = useState("setup");

  const handleTestStart = () => {
    const builtQuestions = buildQuestions(questionLimit);
    setQuestions(builtQuestions);
    setView("inprogress");
  };

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
      setView("done");
    } 
    else setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];
  
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
            <button onClick={() => setView("setup")}>R</button>
              <button onClick={closeModal}>O</button>
            </>
          )}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default TestModal;
