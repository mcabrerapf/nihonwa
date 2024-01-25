import React, { useState } from 'react';
import './SortModal.scss';
import ModalWrapper from '../../ModalWrapper';
import Button from '../../Button';

function SortModal({ closeModal, sort }) {
  const [selectedSort, setSelectedSort] = useState(sort);
  const [selectedSortLanguage, selectedSortDirection] = selectedSort;

  const updateSortLan = (language) => {
    if (language === selectedSortLanguage) return;
    setSelectedSort([language, selectedSortDirection]);
  };

  const updateSortDir = (direction) => {
    if (direction === selectedSortDirection) return;
    setSelectedSort([selectedSortLanguage, direction]);
  };

  return (
    <ModalWrapper closeModal={() => closeModal(selectedSort)}>
      <div className="sort-modal">
        <div className="sort-modal-content">
          <div className="sort-options">
            <Button
              isNotSelected={selectedSortLanguage !== 'en'}
              onClick={() => updateSortLan('en')}
            >
              Abc
            </Button>
            <Button
              isNotSelected={selectedSortLanguage !== 'jp'}
              onClick={() => updateSortLan('jp')}
            >
              日本
            </Button>
          </div>
          <div className="sort-options">
            <Button
              isNotSelected={selectedSortDirection !== 'asc'}
              onClick={() => updateSortDir('asc')}
            >
              Asc
            </Button>
            <Button
              isNotSelected={selectedSortDirection !== 'desc'}
              onClick={() => updateSortDir('desc')}
            >
              Desc
            </Button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default SortModal;
