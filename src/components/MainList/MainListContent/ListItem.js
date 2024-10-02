import React, { memo } from 'react';

function ListItem({ listItem, shouldHide, onItemClick }) {
  const { id, jp, match } = listItem;

  if (shouldHide) return null;

  return (
    <li
      key={id}
      role="button"
      className={`main-list__item${match ? '' : ' no-match'}`}
      onClick={onItemClick}
    >
      <span>{jp || 'ERROR'}</span>
    </li>
  );
}

export default memo(ListItem);
