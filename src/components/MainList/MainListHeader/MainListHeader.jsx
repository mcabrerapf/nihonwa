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
    resetFilters,
    resetTextFilter,
    // selectedKana,
    handleKanaClick,
    handleJishoNavigate,
    handleSearchTextChange,
    handleKanaButtonClick,
    handleShowFiltersModal,
    handleMouseUp,
    handleMouseDown,
    handleMouseLeave,
  } = useMainListHeader(props);

  return (
    <header className="main-list-header">
      <div className="main-list-header-main-content">
        <div className="main-list-filters-buttons">
          <Button
            isNotSelected={!hasActiveFilters}
            onClick={handleShowFiltersModal}
          >
            F
          </Button>
          {hasActiveFilters && (
          <Button
            onClick={resetFilters}
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
          <Button onClick={handleKanaButtonClick}>仮名</Button>
        </div>
      </div>
      <div className="main-list-search">
        <Button onClick={handleJishoNavigate} modifier="jisho-button" isDisabled={!textFilter}>
          辞書
        </Button>
        <div className="search-input">
          <input
            autoComplete="off"
            type="text"
            value={textFilter}
            onChange={handleSearchTextChange}
          />
          {textFilter && (
          <Button onClick={resetTextFilter} modifier="reset-text-filter">
            X
          </Button>
          )}
        </div>
        <div className="kana-buttons">
          <Button
            modifier="kana-button"
            // isNotSelected={selectedKana !== 'hi'}
            value="hi"
            onClick={handleKanaClick}
          >
            か
          </Button>
          <Button
            modifier="kana-button"
            // isNotSelected={selectedKana !== 'ka'}
            onClick={handleKanaClick}
            value="ka"
          >
            カ
          </Button>
        </div>
      </div>
    </header>
  );
}

export default MainListHeader;
