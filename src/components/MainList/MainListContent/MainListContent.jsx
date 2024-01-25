import React, { useEffect, useRef } from 'react';
import './MainListContent.scss';

function MainListRender({ selectedList, mainList, setSelectedItemIndex }) {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedList]);

  return (
    <div ref={listRef} className="main-list-content">
      <ul className="main-list">
        {mainList.map((listItem, i) => {
          const { jp = '', id } = listItem;

          return (
            <li
              role="button"
              key={id}
              className="main-list-item"
              onClick={() => setSelectedItemIndex(i)}
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

export default MainListRender;
