import React from "react";
import "./DisplayViewGeneral.scss";

const DisplayViewGeneral = ({ en = [], tags  = [] }) => {
  return (
    <div className="display-view-general">
      <div className="display-view-content-meanings">
        {en.map((meaning, i) => {
          return <span key={`${i}-${meaning}`}>- {meaning}</span>;
        })}
      </div>
      <div className="display-view-tags-tags">
        {!!tags.length && (
          <div className="display-view-content-item-list">
            <span className="display-view-content-item-list-header">Tags</span>
            <div className="display-view-content-item-list-items">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayViewGeneral;
