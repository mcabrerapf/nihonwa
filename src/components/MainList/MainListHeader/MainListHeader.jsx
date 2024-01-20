import React from "react";
import "./MainListHeader.css";

const FILTERS_INIT_VAL = { text: "", tags: [], types: [] };

const MainListHeader = ({
  filters,
  listLength,
  setShowSortModal,
  setShowFiltersModal,
  handleFiltersChange,
  setShowKanaModal,
  handleSearchTextChange,
}) => {
  const hasActiveFilters = !!filters.tags.length || !!filters.types.length;

  return (
    <header className="main-list-header">
      <div className="main-list-header-main-content">
        <div className="main-list-filters-buttons">
          <button onClick={() => setShowSortModal(true)}>S</button>
          <button
            className={`${hasActiveFilters ? "" : "disabled"}`}
            onClick={() => setShowFiltersModal(true)}
          >
            F
          </button>
          {hasActiveFilters && (
            <button
              className="reset-filters-button"
              onClick={() => handleFiltersChange(FILTERS_INIT_VAL)}
            >
              X
            </button>
          )}
        </div>
        <div className="main-list-header-text">
          <span>言葉</span>
          <span className="main-list-count">{listLength}</span>
        </div>
        <div className="main-list-kana-buttons">
          <button onClick={() => setShowKanaModal("hi")}>か</button>
          <button onClick={() => setShowKanaModal("ka")}>カ</button>
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
          <button
            className="no-shadow"
            onClick={() => handleSearchTextChange({ target: { value: "" } })}
          >
            X
          </button>
        )}
      </div>
    </header>
  );
};

export default MainListHeader;
