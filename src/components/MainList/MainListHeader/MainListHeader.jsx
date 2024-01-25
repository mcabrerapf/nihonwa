import React, { useEffect, useRef, useState } from 'react';
import './MainListHeader.scss';
import Button from '../../Button';
import { copyToClipboard } from '../../../utils';

function MainListHeader({
  isWordsList,
  filters,
  listToFilter,
  listLength,
  handleFiltersChange,
  handleSearchTextChange,
  setShowKanaModal,
  setShowSortModal,
  setShowFiltersModal,
}) {
  const [isLongPress, setIsLongPress] = useState(false);
  const pressTimer = useRef(null);
  const hasActiveFilters = !!filters.tags.length;
  const headerText = isWordsList ? '言葉' : '文';

  useEffect(() => {
    if (isLongPress) {
      console.log('COPIED CURRENT LIST');
      copyToClipboard(JSON.stringify(listToFilter));
    }
  }, [isLongPress, listToFilter]);

  const handleMouseDown = () => {
    pressTimer.current = setTimeout(() => {
      setIsLongPress(true);
    }, 500); // Adjust the duration as needed (in milliseconds)
  };

  const handleMouseUp = () => {
    clearTimeout(pressTimer.current);
    setIsLongPress(false);
  };

  const handleMouseLeave = () => {
    clearTimeout(pressTimer.current);
    setIsLongPress(false);
  };

  return (
    <header className="main-list-header">
      <div className="main-list-header-main-content">
        <div className="main-list-filters-buttons">
          <Button onClick={() => setShowSortModal(true)}>S</Button>
          <Button
            isNotSelected={!hasActiveFilters}
            onClick={() => setShowFiltersModal(true)}
          >
            F
          </Button>
          {hasActiveFilters && (
            <Button
              modifier="reset-filters-button ghost"
              onClick={() => handleFiltersChange({ ...filters, tags: [] })}
            >
              X
            </Button>
          )}
        </div>
        <div
          role="button"
          className="main-list-header-text"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <span>{headerText}</span>
          <span className="main-list-count">{listLength}</span>
        </div>
        <div className="main-list-kana-buttons">
          <Button onClick={() => setShowKanaModal('hi')}>か</Button>
          <Button onClick={() => setShowKanaModal('ka')}>カ</Button>
        </div>
      </div>
      <div className="main-list-search-input">
        <input
          autoComplete="off"
          type="text"
          value={filters.text}
          onChange={handleSearchTextChange}
        />
        {!!filters.text && (
          <Button
            modifier="ghost"
            onClick={() => handleSearchTextChange({ target: { value: '' } })}
          >
            X
          </Button>
        )}
      </div>
    </header>
  );
}

export default MainListHeader;
