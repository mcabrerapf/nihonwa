import React, { useState, useEffect, useRef } from 'react';
import './MainListContent.scss';

function MainListContent({ mainList, handleToggleModal, setSelectedItemIndex }) {
  const [items, setItems] = useState([]);
  const listRef = useRef(null);

  const handleOpenListItemModal = (i) => {
    setSelectedItemIndex(i);
    handleToggleModal('listItem');
  };

  useEffect(() => {
    setItems(mainList.slice(0, 20)); // Initially load 20 items
  }, [mainList]);

  const handleScroll = () => {
    const list = listRef.current;
    if (list) {
      const { scrollTop } = list;
      const { scrollHeight } = list;
      const halfwayPoint = scrollHeight / 2;
      if (scrollTop >= halfwayPoint) {
        setItems(mainList.slice(0, items.length + 20)); // Initially load 20 items
      }
    }
  };

  return (
    <div
      className="main-list-content"
      ref={listRef}
      onScroll={handleScroll}
    >
      <ul className="main-list">
        {items.map((listItem, i) => {
          const { jp = '', id } = listItem;

          return (
            <li
              role="button"
              key={id}
              className="main-list-item"
              onClick={() => handleOpenListItemModal(i)}
            >
              <span>{jp}</span>
            </li>
          );
        })}
        <div className="seprator">.</div>
      </ul>
    </div>
  );
}

export default MainListContent;
