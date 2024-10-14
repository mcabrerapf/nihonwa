import React, {
  useState,
  useRef,
  useCallback,
  memo,
} from 'react';
import './MainListContent.scss';
import LoadMore from './LoadMore';
import ListItem from './ListItem';
import { useMainContext } from '../../../contexts/MainContext';

function MainListContent({
  handleToggleModal,
}) {
  const { orderedList, orderedListLength, setSelectedItemIndex } = useMainContext();
  const listRef = useRef(null);
  const [limit, setLimit] = useState(20);

  const loadMoreItems = useCallback(() => {
    setLimit((oldLimit) => oldLimit + 20);
  }, [orderedList]);

  const handleOpenListItemModal = (i) => {
    setSelectedItemIndex(i);
    handleToggleModal('listItemModal');
  };

  return (
    <ul className="main-list" ref={listRef}>
      {orderedList.map((listItem, i) => (
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
        listLength={orderedListLength}
      />
    </ul>
  );
}

export default memo(MainListContent);
