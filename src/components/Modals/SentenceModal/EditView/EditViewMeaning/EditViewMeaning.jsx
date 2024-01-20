import React from "react";
import "./EditViewMeaning.scss";

const EditViewMeaning = ({ currentData, setCurrentData }) => {
  const { en } = currentData;

  const handleUpdateMeaning = (e) => {
    setCurrentData({ ...currentData, en: e.target.value });
  };

  return (
    <div className="edit-view-meaning">
      <div className="edit-view-meaning-display">
          <span>{en}</span>
      </div>
      <div className="edit-view-meaning-input">
        <input
          onChange={handleUpdateMeaning}
          value={en}
        />
      </div>
    </div>
  );
};

export default EditViewMeaning;
