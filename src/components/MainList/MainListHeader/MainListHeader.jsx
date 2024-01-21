import React from "react";
import "./MainListHeader.scss";
import Button from "../../Button";

const FILTERS_INIT_VAL = { text: "", tags: [], types: [] };

const MainListHeader = ({
  filters,
  listLength,
  handleFiltersChange,
  handleSearchTextChange,
  setShowKanaModal,
  setShowSortModal,
  setShowFiltersModal,
}) => {
  const hasActiveFilters = !!filters.tags.length || !!filters.types.length;

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
              onClick={() => handleFiltersChange(FILTERS_INIT_VAL)}
            >
              X
            </Button>
          )}
        </div>
        <div className="main-list-header-text">
          {/* TODO CHANGE THIS HEADER TO BE DYNAMIC */}
          <span>言葉</span>
          <span className="main-list-count">{listLength}</span>
        </div>
        <div className="main-list-kana-buttons">
          <Button onClick={() => setShowKanaModal("hi")}>か</Button>
          <Button onClick={() => setShowKanaModal("ka")}>カ</Button>
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
            onClick={() => handleSearchTextChange({ target: { value: "" } })}
          >
            X
          </Button>
        )}
      </div>
    </header>
  );
};

export default MainListHeader;
