import React, {
  useState, useRef, useCallback,
  memo,
} from 'react';
import './MainListContent.scss';
import LoadMore from './LoadMore';
import ListItem from './ListItem';

function MainListContent({
  mainList, handleToggleModal, setSelectedItemIndex,
}) {
  const [limit, setLimit] = useState(20);
  const listRef = useRef(null);

  const handleOpenListItemModal = (i) => {
    setSelectedItemIndex(i);
    handleToggleModal('listItemModal');
  };

  const loadMoreItems = useCallback(() => {
    setLimit((oldLimit) => oldLimit + 20);
  }, [mainList]);

  return (
    <ul className="main-list" ref={listRef}>
      {mainList.map((listItem, i) => (
        <ListItem
          key={listItem.id}
          shouldHide={i > limit}
          listItem={listItem}
          onItemClick={() => handleOpenListItemModal(i)}
        />
      ))}
      <LoadMore
        callback={loadMoreItems}
        limit={limit}
        listLength={mainList.length}
      />
    </ul>
  );
}

export default memo(MainListContent);
