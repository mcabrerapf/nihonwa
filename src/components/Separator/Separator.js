import React from 'react';
import './Separator.scss';

function Separator({ modifier }) {
  const className = ['separator', modifier].filter(Boolean).join(' ');

  return (
    <div className={className} />
  );
}

export default Separator;
