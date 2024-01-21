import React, { useState } from "react";
import "./TestProgressContent.scss";
import Button from "../../../Button";
import { getCharWithFuri } from "../../../../utils";

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

  const { jp, en, furi } = currentQuestion;
  const questionCharacters = getCharWithFuri(jp, furi, true);

  return (
    <>
      <div className="test-modal-progress-content">
        <div
          className="current-question"
          onClick={() => {
            if (!showAnswer) setShowAnswer(true);
          }}
        >
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
            <Button onClick={() => handleUpdateQuestion()}>X</Button>
            <Button onClick={() => handleUpdateQuestion(true)}>O</Button>
          </>
        )}
      </footer>
    </>
  );
};

export default TestProgressContent;
