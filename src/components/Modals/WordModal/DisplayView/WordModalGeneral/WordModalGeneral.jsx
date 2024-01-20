import React from "react";
import "./WordModalGeneral.scss";

const WordModalGeneral = ({ en = [], types = [], tags  = [] }) => {
  return (
    <div className="word-modal-general">
      <div className="word-modal-content-meanings">
        {en.map((meaning, i) => {
          return <span key={`${i}-${meaning}`}>- {meaning}</span>;
        })}
      </div>
      <div className="word-modal-tags-types">
        {!!types.length && (
          <div className="word-modal-content-item-list">
            <span className="word-modal-content-item-list-header">Types</span>
            <div className="word-modal-content-item-list-items">
              {types.map((type) => (
                <span key={type}>{type}</span>
              ))}
            </div>
          </div>
        )}
        {!!tags.length && (
          <div className="word-modal-content-item-list">
            <span className="word-modal-content-item-list-header">Tags</span>
            <div className="word-modal-content-item-list-items">
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

export default WordModalGeneral;
