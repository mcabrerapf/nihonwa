import React from 'react';
import './Score.scss';
import { getScoreColor } from './helpers';

function Score({ score }) {
  const scoreColor = getScoreColor(score);
  return (
    <div className="score">
      <span className={`score__number${scoreColor}`}>
        {score}
        %
      </span>
    </div>
  );
}

export default Score;
