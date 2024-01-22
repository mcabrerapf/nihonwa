import React from "react";
import "./DisplayViewGeneral.scss";

const DisplayViewGeneral = ({ en = [], types = [], tags  = [] }) => {
  return (
    <div className="display-view-general">
      <div className="display-view-content-meanings">
        {en.map((meaning, i) => {
          return <span key={`${i}-${meaning}`}>- {meaning}</span>;
        })}
      </div>
      <div className="display-view-tags-types">
        {!!types.length && (
          <div className="display-view-content-item-list">
            <span className="display-view-content-item-list-header">Types</span>
            <div className="display-view-content-item-list-items">
              {types.map((type) => (
                <span key={type}>{type}</span>
              ))}
            </div>
          </div>
        )}
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
