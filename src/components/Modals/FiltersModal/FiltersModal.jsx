import React, { useState } from "react";
import "./FiltersModal.css";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import TYPES from "../../../constants/TYPES";
import TAGS from "../../../constants/TAGS";

const FiltersModal = ({ closeModal, filters }) => {
  const [selectedFilters, setSelectedFilters] = useState(filters);

  const updateFilters = (value, key) => {
    const filterToUpdate = selectedFilters[key];
    let wasSelected = false;
    const updatedTags = filterToUpdate.filter((selectedValue) => {
      if (selectedValue === value) {
        wasSelected = true;
        return false;
      }
      return true;
    });
    if (!wasSelected) updatedTags.push(value);
    setSelectedFilters({ ...selectedFilters, [key]: updatedTags });
  };

  const { tags, types } = selectedFilters;

  return (
    <ModalWrapper closeModal={() => closeModal(selectedFilters)}>
      <div className="filters-modal">
        <div className="filters-modal-content">
          <div className="filters-options-label">Types</div>
          <div className="filters-options">
            {TYPES.map((type) => {
              const isSelected = types.find(
                (selectedType) => selectedType === type
              );

              return (
                <button
                  key={type}
                  className={`${!isSelected ? "disabled" : ""}`}
                  onClick={() => updateFilters(type, "types")}
                >
                  {type}
                </button>
              );
            })}
          </div>
          <div className="filters-options-label">Tags</div>
          <div className="filters-options">
            {TAGS.map((tag) => {
              const isSelected = tags.find(
                (selectedTag) => selectedTag === tag
              );

              return (
                <button
                  key={tag}
                  className={`${!isSelected ? "disabled" : ""}`}
                  onClick={() => updateFilters(tag, "tags")}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default FiltersModal;
