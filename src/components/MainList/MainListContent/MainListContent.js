import React, { useState, useEffect, useRef } from 'react';
import './MainListContent.scss';
import LoadMore from './LoadMore';

function MainListContent({
  mainList, handleToggleModal, setSelectedItemIndex,
}) {
  const [items, setItems] = useState([]);
  const listRef = useRef(null);

  useEffect(() => {
    const numberOfItemsToFetch = !items.length || items.length < 20 ? 20 : items.length;
    setItems(mainList.slice(0, numberOfItemsToFetch));
  }, [mainList]);

  const handleOpenListItemModal = (i) => {
    setSelectedItemIndex(i);
    handleToggleModal('listItem');
  };

  const loadMoreItems = () => {
    setItems(mainList.slice(0, 20 + items.length));
  };

  return (
    <div
      className="main-list-content"
      ref={listRef}
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
        {items.length > 0 && (
        <LoadMore
          callback={loadMoreItems}
          itemsLength={items.length}
          allItemsLength={mainList.length}
        />
        )}
      </ul>
    </div>
  );
}

export default MainListContent;
