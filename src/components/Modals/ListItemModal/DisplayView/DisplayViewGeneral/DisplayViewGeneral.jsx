import React from 'react';
import './DisplayViewGeneral.scss';

function DisplayViewGeneral({ en = [] }) {
  return (
    <div className="display-view-general">
      <div className="display-view-content-meanings">
        {en.map((meaning, i) => (
          <span key={`${i}-${meaning}`}>
            -
            {meaning}
          </span>
        ))}
      </div>
    </div>
  );
}

export default DisplayViewGeneral;
