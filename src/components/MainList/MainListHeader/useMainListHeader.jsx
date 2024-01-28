import { useEffect, useRef, useState } from 'react';
import { copyToClipboard } from '../../../utils';

const useMainListHeader = ({
  selectedList,
  filters,
  listToFilter,
  filteredListLength,
  handleFiltersChange,
  handleToggleModal,
}) => {
  const pressTimer = useRef(null);
  const [isLongPress, setIsLongPress] = useState(false);
  const { text, tags } = filters;
  const hasActiveFilters = !!tags.length;
  const headerText = selectedList === 'word' ? '言葉' : '文';
  const listToFilterLength = listToFilter.length;
  const headerCount = filteredListLength < listToFilterLength
    ? `(${filteredListLength}) ${listToFilterLength}` : filteredListLength;

  useEffect(() => {
    if (isLongPress) {
      console.log('COPIED CURRENT LIST');
      copyToClipboard(JSON.stringify(listToFilter));
    }
  }, [isLongPress, listToFilter]);

  const handleMouseDown = () => {
    pressTimer.current = setTimeout(() => {
      setIsLongPress(true);
    }, 500);
  };

  const handleMouseUp = () => {
    clearTimeout(pressTimer.current);
    setIsLongPress(false);
  };

  const handleMouseLeave = () => {
    clearTimeout(pressTimer.current);
    setIsLongPress(false);
  };

  const handleSearchTextChange = ({ target: { value } }) => {
    handleFiltersChange({ text: value, tags });
  };

  const handleTextSearchReset = () => {
    handleFiltersChange({ text: '', tags });
  };

  const handleTagsReset = () => {
    handleFiltersChange({ text, tags: [] });
  };

  const handleKanaButtonClick = (selectedKana) => {
    handleToggleModal(selectedKana);
  };

  const handleShowSortModal = () => handleToggleModal('sort');

  const handleShowFiltersModal = () => handleToggleModal('filters');

  return {
    textFilter: text,
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
  };
};

export default useMainListHeader;
