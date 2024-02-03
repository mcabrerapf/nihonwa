import React from 'react';
import './TestResultsContent.scss';
import Button from '../../../Button';
// import { getServiceToUse } from '../../../../Services';

// const updateQuestions = async (questions) => questions.forEach(async (question) => {
//   const updatedQuestion = { ...question };
//   if (question.correct)updatedQuestion.hits += 1;
//   else updatedQuestion.misses += 1;
//   delete updatedQuestion.correct;
//   const serviceToUse = getServiceToUse('word', 'update');
//   await serviceToUse({ input: updatedQuestion });
// });

function TestResultsContent({ questions, setView, closeModal }) {
  // const [isLoading, setisLoading] = useState(false);
  const handleClose = async (e) => {
    e.preventDefault();
    // setisLoading(true);
    // await updateQuestions(questions);
    if (e.target.innerText === 'R') setView('setup');
    else closeModal();
  };

  return (
    <>
      <div className="test-modal-results-content">
        <div className="test-modal-results">
          {questions.map((question, i) => {
            const { jp } = question;
            return (
              <div key={`${jp}-${i}`} className="test-modal-results-result">
                <span className="test-modal-results-result-check">
                  {question.correct ? 'O' : 'X'}
                </span>
                <span>{jp}</span>
              </div>
            );
          })}
        </div>
      </div>
      <footer className="test-modal-footer">
        <Button onClick={handleClose}>R</Button>
        <Button onClick={handleClose}>O</Button>
      </footer>
    </>
  );
}

export default TestResultsContent;
