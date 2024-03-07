import React, { useEffect, useState } from 'react';

function TotalScore({
  correctQuestions,
  totalQuestions,
}) {
  const score = (correctQuestions / totalQuestions) * 100;
  const [currentScore, setCurrentScore] = useState(0);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (currentScore < score) setCurrentScore(currentScore + 1);
    }, 50);

    // Clean-up function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [currentScore, score]);

  return (
    <div className="total-score">
      <span>
        {currentScore}
        %
      </span>
    </div>
  );
}

export default TotalScore;
