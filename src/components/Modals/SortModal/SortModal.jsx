import React from 'react';
import './SortModal.scss';
import Button from '../../Button';

function SortModal({ sort, handleSortChange }) {
  const [selectedSortLanguage, selectedSortDirection] = sort;

  const updateSortLan = (language) => {
    if (language === selectedSortLanguage) return;
    handleSortChange([language, selectedSortDirection]);
  };

  const updateSortDir = (direction) => {
    if (direction === selectedSortDirection) return;
    handleSortChange([selectedSortLanguage, direction]);
  };

  return (
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
          <Button
            isNotSelected={selectedSortLanguage !== '%'}
            onClick={() => updateSortLan('%')}
          >
            %
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
            isNotSelected={selectedSortDirection !== 'dsc'}
            onClick={() => updateSortDir('dsc')}
          >
            Desc
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SortModal;
