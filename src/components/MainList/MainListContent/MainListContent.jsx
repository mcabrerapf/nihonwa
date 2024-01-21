import React from "react";
import "./MainListContent.scss";

const MainListRender = ({ mainList, setSelectedItemIndex }) => {
  return (
    <div className="main-list-content">
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
      </ul>
    </div>
  );
};

export default MainListRender;
