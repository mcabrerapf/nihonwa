import React, { useEffect, useState } from 'react';

function ProgressBar({
  numberOfQuestions,
  currentQuestionIndex,
  isQuestionValidated,
}) {
  const [progress, setProgress] = useState(0);

  useEffect(
    () => {
      const newProgress = ((currentQuestionIndex + 1) / numberOfQuestions) * 100;
      if (isQuestionValidated)setProgress(newProgress);
    },
    [currentQuestionIndex, isQuestionValidated, numberOfQuestions],
  );
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default ProgressBar;
