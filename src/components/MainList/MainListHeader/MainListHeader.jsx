import React from 'react';
import './MainListHeader.scss';
import Button from '../../Button';
import useMainListHeader from './useMainListHeader';

function MainListHeader(props) {
  const {
    textFilter,
    hasActiveFilters,
    headerText,
    headerCount,
    handleSearchTextChange,
    handleShowSortModal,
    handleKanaButtonClick,
    handleTagsReset,
    handleTextSearchReset,
    handleShowFiltersModal,
    handleMouseUp,
    handleMouseDown,
    handleMouseLeave,
  } = useMainListHeader(props);

  return (
    <header className="main-list-header">
      <div className="main-list-header-main-content">
        <div className="main-list-filters-buttons">
          <Button onClick={handleShowSortModal}>S</Button>
          <Button
            isNotSelected={!hasActiveFilters}
            onClick={handleShowFiltersModal}
          >
            F
          </Button>
          {hasActiveFilters && (
            <Button
              modifier="reset-filters-button ghost"
              onClick={handleTagsReset}
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
          <span className="main-list-count">{headerCount}</span>
        </div>
        <div className="main-list-kana-buttons">
          <Button onClick={() => handleKanaButtonClick('hi')}>か</Button>
          <Button onClick={() => handleKanaButtonClick('ka')}>カ</Button>
        </div>
      </div>
      <div className="main-list-search-input">
        <input
          autoComplete="off"
          type="text"
          value={textFilter}
          onChange={handleSearchTextChange}
        />
        {textFilter && (
          <Button
            modifier="ghost"
            onClick={handleTextSearchReset}
          >
            X
          </Button>
        )}
      </div>
    </header>
  );
}

export default MainListHeader;
