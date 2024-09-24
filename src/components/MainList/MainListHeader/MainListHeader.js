import React from 'react';
import './MainListHeader.scss';
import Button from '../../Button';
import useMainListHeader from './useMainListHeader';
import Input from '../../Input';

function MainListHeader(props) {
  const {
    textFilter,
    tagFilters,
    headerCount,
    handleKanaClick,
    handleJishoNavigate,
    handleSearchTextChange,
    handleKanaButtonClick,
    handleShowFiltersModal,
    handleRemoveTagFilter,
    handleMouseUp,
    handleMouseDown,
    handleMouseLeave,
  } = useMainListHeader(props);

  return (
    <header className="main-list-header">
      <div className="main-list-header__top">
        <div className="main-list-header__top__filter-buttons">
          <Button
            onClick={handleShowFiltersModal}
          >
            フィルター
          </Button>
        </div>
        <div
          role="button"
          className="main-list-header__top__header-text"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <span>辞書</span>
          <span className="main-list-header__top__header-text__count">{headerCount}</span>
        </div>
        <div className="main-list-header__top__kana-buttons">
          <Button onClick={handleKanaButtonClick}>仮名</Button>
        </div>
      </div>

      <div className="main-list-header__search">
        <Button onClick={handleJishoNavigate} modifier="jisho-button" isDisabled={!textFilter}>
          探索
        </Button>
        <Input
          value={textFilter}
          showResetButton
          onChange={handleSearchTextChange}
          onResetButtonClick={() => handleSearchTextChange({ target: { value: '' } })}
        />
        <div className="main-list-header__search__kana-buttons">
          <Button
            modifier="kana-button"
            isDisabled={!textFilter}
            value="hi"
            onClick={handleKanaClick}
          >
            か
          </Button>
          <Button
            modifier="kana-button"
            isDisabled={!textFilter}
            onClick={handleKanaClick}
            value="ka"
          >
            カ
          </Button>
        </div>
      </div>
      {!!tagFilters.length && (
      <div className="main-list-header__filters">
        {tagFilters.map((tag) => (
          <Button onClick={() => handleRemoveTagFilter(tag)}>
            <span>{tag}</span>
            <span>X</span>
          </Button>
        ))}
      </div>
      )}
    </header>
  );
}

export default MainListHeader;
