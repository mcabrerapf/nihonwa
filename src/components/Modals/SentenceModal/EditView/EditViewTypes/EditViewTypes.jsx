import React from "react";
import "./EditViewTypes.scss";
import { TYPES } from "../../../../../constants";

const EditViewTypes = ({ currentData, setCurrentData }) => {
  const { types } = currentData;

  const handleAddType = (type) => {
    const updatedTypes = [...types, type];
    setCurrentData({ ...currentData, types: updatedTypes });
  };

  const handleDeleteType = (typeToCheck) => {
    const updatedTypes = types.filter((type) => type !== typeToCheck);
    setCurrentData({ ...currentData, types: updatedTypes });
  };

  return (
    <div className="edit-view-types">
      <div className="edit-view-types-options">
        {TYPES.map((type) => {
          const isSelected = types.find(
            (selectedType) => selectedType === type
          );
          return (
            <button
              key={type}
              className={`${isSelected ? "" : "disabled"}`}
              onClick={() => {
                isSelected ? handleDeleteType(type) : handleAddType(type);
              }}
            >
              {type}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EditViewTypes;
