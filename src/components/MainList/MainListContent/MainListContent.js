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
    handleToggleModal('listItemModal');
  };

  const loadMoreItems = () => {
    setItems(mainList.slice(0, 20 + items.length));
  };

  return (
    <ul className="main-list" ref={listRef}>
      {items.map((listItem, i) => {
        const { id, jp, match } = listItem;
        if (!jp) return null;
        return (
          <li
            key={id}
            role="button"
            className={`main-list__item${match ? '' : ' no-match'}`}
            onClick={() => handleOpenListItemModal(i)}
          >
            <span>{jp}</span>
            {i === items.length - 10 && (
            <LoadMore
              key={`${id}-load-more`}
              callback={loadMoreItems}
              itemsLength={items.length}
              allItemsLength={mainList.length}
            />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default MainListContent;
