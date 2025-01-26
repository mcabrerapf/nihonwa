import React, { useState } from 'react';
import './FiltersModal.scss';
import { useMainContext } from '../../../contexts/MainContext';
import { useModalContext } from '../../../contexts/ModalContext';
import TAGS from '../../../constants/TAGS';
import Button from '../../Button';

import Modal from '../Modal';
import ModalFooter from '../ModalFooter';
import ModalHeader from '../ModalHeader';

function FiltersModal({ handleFiltersChange }) {
  const { filters } = useMainContext();
  const { closeModal } = useModalContext();
  const [selectedFilters, setSelectedFilters] = useState(filters);
  const { tags } = selectedFilters;

  const handleClose = async (e) => {
    if (e) e.preventDefault();
    closeModal();
  };

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
    <Modal modifier="filters-modal">
      <ModalHeader childrenAlign="r">
        <Button modifier="no-border" onClick={handleClose}>X</Button>
      </ModalHeader>
      <div className="filters-modal-content">
        <div className="filters-modal-content__filters-options">
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
      <ModalFooter childrenAlign="r">
        <Button onClick={handleUpdateListFilters}>O</Button>
      </ModalFooter>
    </Modal>
  );
}

export default FiltersModal;
