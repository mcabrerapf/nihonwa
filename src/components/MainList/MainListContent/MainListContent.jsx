import React, { useEffect, useRef } from "react";
import "./MainListContent.scss";

const MainListRender = ({ selectedList, mainList, setSelectedItemIndex }) => {
  const listRef = useRef(null);
  
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedList]);

  return (
    <div ref={listRef} className="main-list-content">
      <ul className="main-list">
        {mainList.map((listItem, i) => {
          const { jp = "", jpWords = [], id } = listItem;
          if (!jp && !jpWords.length) return null;
          return (
            <li
              key={id}
              className="main-list-item"
              onClick={() => setSelectedItemIndex(i)}
            >
              <span>{jp || jpWords.join("")}</span>
            </li>
          );
        })}
        <div className="seprator">.</div>
      </ul>
    </div>
  );
};

export default MainListRender;
