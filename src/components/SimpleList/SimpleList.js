import React from 'react';
import './SimpleList.scss';

function SimpleList({ list, modifier }) {
  if (!list || !list.length) return null;

  const className = ['simple-list', modifier].filter(Boolean).join(' ');

  return (
    <ul className={className}>
      {list.map((listItem, i) => (
        <li key={`${i}-${listItem}`} className="simple-list__item">
          <span>{listItem}</span>
        </li>
      ))}
    </ul>
  );
}

export default SimpleList;
