import React from 'react';
import './SimpleList.scss';

function SimpleList({ list = [], header, modifier }) {
  const isEmptyClass = !list.length ? ' empty' : '';
  const className = ['simple-list', modifier, isEmptyClass].filter(Boolean).join(' ');

  return (

    <div className={className}>
      {!!header && <span className="simple-list__header">{header}</span>}
      <ul className="simple-list__list">

        {list.map((listItem, i) => (
          <li key={`${i}-${listItem}`} className="simple-list__list__item">
            <span>{listItem}</span>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default SimpleList;
