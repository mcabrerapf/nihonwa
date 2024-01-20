import React from "react";
import "./TestResultsContent.css";

const TestResultsContent = ({ questions, setView, closeModal }) => {
  return (
    <>
      <div className="test-modal-results-content">
        <div className="test-modal-results">
          {questions.map((question, i) => {
            const { jp } = question;
            return (
              <div key={`${jp}-${i}`} className="test-modal-results-result">
                <span className="test-modal-results-result-check">
                  {question.correct ? "O" : "X"}
                </span>
                <span>{jp}</span>
              </div>
            );
          })}
        </div>
      </div>
      <footer className="test-modal-footer">
        <button onClick={() => setView("setup")}>R</button>
        <button onClick={closeModal}>O</button>
      </footer>
    </>
  );
};

export default TestResultsContent;
