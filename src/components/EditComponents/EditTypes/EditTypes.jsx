import React from "react";
import "./EditTypes.scss";
import Button from "../../Button";
import { TYPES } from "../../../constants";

const EditTypes = ({ currentData, setCurrentData }) => {
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
    <div className="edit-types">
      <div className="edit-types-options">
        {TYPES.map((type) => {
          const isSelected = types.find(
            (selectedType) => selectedType === type
          );
          return (
            <Button
              key={type}
              isNotSelected={!isSelected}
              onClick={() => {
                isSelected ? handleDeleteType(type) : handleAddType(type);
              }}
            >
              {type}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default EditTypes;
