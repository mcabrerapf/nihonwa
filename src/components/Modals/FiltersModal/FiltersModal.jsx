import React, { useState } from 'react';
import './FiltersModal.scss';
import TAGS from '../../../constants/TAGS';
import Button from '../../Button';

function FiltersModal({ filters, handleFiltersChange }) {
  const [selectedFilters, setSelectedFilters] = useState(filters);
  const { tags } = selectedFilters;

  const handleUpdateListFilters = () => {
    handleFiltersChange(selectedFilters);
  };
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

  return (
    <div className="filters-modal">
      <div className="filters-modal-content">
        <div className="filters-options-label">
          <span>Tags</span>
          {!!selectedFilters.tags.length && (
          <Button
            modifier="ghost"
            onClick={() => setSelectedFilters({ ...selectedFilters, tags: [] })}
          >
            X
          </Button>
          )}
        </div>
        <div className="filters-options">
          {TAGS.map((tag) => {
            const isSelected = tags.find(
              (selectedTag) => selectedTag === tag,
            );

            return (
              <Button
                key={tag}
                isNotSelected={!isSelected}
                onClick={() => updateFilters(tag, 'tags')}
              >
                {tag}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="filters-modal-footer">
        <Button onClick={handleUpdateListFilters}>O</Button>
      </div>
    </div>
  );
}

export default FiltersModal;
