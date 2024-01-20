import React from "react";
import "./EditViewTags.scss";
import { TAGS } from "../../../../../constants";

const EditViewTags = ({ currentData, setCurrentData }) => {
  const { tags } = currentData;

  const handleAddTag = (tag) => {
    const updatedTags = [...tags, tag];
    setCurrentData({ ...currentData, tags: updatedTags });
  };

  const handleDeleteTag = (tagToCheck) => {
    const updatedTags = tags.filter((tag) => tag !== tagToCheck);
    setCurrentData({ ...currentData, tags: updatedTags });
  };

  return (
    <div className="edit-view-tags">
      <div className="edit-view-tags-options">
        {TAGS.map((tag) => {
          const isSelected = tags.find(
            (selectedTag) => selectedTag === tag
          );
          return (
            <button
              key={tag}
              className={`${isSelected ? "" : "disabled"}`}
              onClick={() => {
                isSelected ? handleDeleteTag(tag) : handleAddTag(tag);
              }}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EditViewTags;
