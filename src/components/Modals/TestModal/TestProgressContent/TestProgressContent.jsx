import React, { useState } from "react";
import "./TestProgressContent.css";

const TestProgressContent = ({ questions, setQuestions, setView }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

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
    } else setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const { jp, en } = currentQuestion;

  return (
    <>
      <div className="test-modal-progress-content">
        <div
          className="current-question"
          onClick={() => {
            if (!showAnswer) setShowAnswer(true);
          }}
        >
          <div className="current-question-question">{jp}</div>
          {showAnswer && (
            <div className="current-question-answer">
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
            <button onClick={() => handleUpdateQuestion()}>X</button>
            <button onClick={() => handleUpdateQuestion(true)}>O</button>
          </>
        )}
      </footer>
    </>
  );
};

export default TestProgressContent;
