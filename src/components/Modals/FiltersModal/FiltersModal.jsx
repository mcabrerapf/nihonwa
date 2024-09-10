import React, { useState } from 'react';
import './FiltersModal.scss';
import TAGS from '../../../constants/TAGS';
import Button from '../../Button';

function FiltersModal({ filters, sort, handleFiltersChange }) {
  // const [selectedSortLanguage, selectedSortDirection] = sort;
  const [selectedFilters, setSelectedFilters] = useState(filters);
  const [selectedSort, setSelectedSort] = useState(sort);
  const { tags } = selectedFilters;

  const handleUpdateListFilters = () => {
    handleFiltersChange(selectedFilters, selectedSort);
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

  const updateSortLan = (language) => {
    if (language === selectedSort[0]) return;
    setSelectedSort([language, selectedSort[1]]);
  };

  const updateSortDir = (direction) => {
    if (direction === selectedSort[1]) return;
    setSelectedSort([selectedSort[0], direction]);
  };

  return (
    <div className="filters-modal">
      <div className="filters-modal-content">
        <div className="sort-options">
          <Button
            isNotSelected={selectedSort[0] !== 'en'}
            onClick={() => updateSortLan('en')}
          >
            Abc
          </Button>
          <Button
            isNotSelected={selectedSort[0] !== 'jp'}
            onClick={() => updateSortLan('jp')}
          >
            日本
          </Button>
          <Button
            isNotSelected={selectedSort[0] !== '%'}
            onClick={() => updateSortLan('%')}
          >
            %
          </Button>
          <Button
            isNotSelected={selectedSort[1] !== 'asc'}
            onClick={() => updateSortDir('asc')}
          >
            ASC
          </Button>
          <Button
            isNotSelected={selectedSort[1] !== 'dsc'}
            onClick={() => updateSortDir('dsc')}
          >
            DSC
          </Button>
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
