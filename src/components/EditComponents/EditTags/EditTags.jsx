import React from "react";
import "./EditTags.scss";
import Button from "../../Button";
import { TAGS } from "../../../constants";

const EditTags = ({ currentData, setCurrentData }) => {
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
    <div className="edit-tags">
      <div className="edit-tags-options">
        {TAGS.map((tag) => {
          const isSelected = tags.find((selectedTag) => selectedTag === tag);
          return (
            <Button
              key={tag}
              isNotSelected={!isSelected}
              onClick={() => {
                isSelected ? handleDeleteTag(tag) : handleAddTag(tag);
              }}
            >
              {tag}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default EditTags;
